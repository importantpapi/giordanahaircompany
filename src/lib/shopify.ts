import type { CartItem, Product } from '../types/shop';

const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN as string | undefined;
const API_VERSION = (import.meta.env.VITE_SHOPIFY_API_VERSION as string | undefined) || '2025-01';

export function isShopifyConfigured(): boolean {
  return Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);
}

export function getShopifyDomain(): string {
  return STORE_DOMAIN || '';
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!STORE_DOMAIN || !STOREFRONT_TOKEN) {
    throw new Error('Shopify Storefront API is not configured.');
  }

  const endpoint = `https://${STORE_DOMAIN.replace(/^https?:\/\//, '')}/api/${API_VERSION}/graphql.json`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(', '));
  }

  return json.data as T;
}

interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: {
        id: string;
        handle: string;
        title: string;
        description: string;
        productType: string;
        priceRange: {
          minVariantPrice: { amount: string };
        };
        images: {
          edges: Array<{ node: { url: string } }>;
        };
        variants: {
          edges: Array<{
            node: {
              id: string;
              title: string;
              availableForSale: boolean;
              price: { amount: string };
              selectedOptions: Array<{ name: string; value: string }>;
            };
          }>;
        };
      };
    }>;
  };
}

export async function fetchShopifyProducts(first = 50): Promise<Product[]> {
  const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            description
            productType
            priceRange {
              minVariantPrice { amount }
            }
            images(first: 6) {
              edges { node { url } }
            }
            variants(first: 40) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price { amount }
                  selectedOptions { name value }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<ShopifyProductsResponse>(query, { first });

  return data.products.edges.map(({ node }) => {
    const images = node.images.edges.map((e) => e.node.url);
    const variants = node.variants.edges.map(({ node: v }) => {
      const lengthOpt = v.selectedOptions.find((o) => o.name.toLowerCase().includes('length'));
      const colorOpt = v.selectedOptions.find((o) => o.name.toLowerCase().includes('color'));
      return {
        id: v.id,
        title: v.title,
        length: lengthOpt?.value || '18"',
        color: colorOpt?.value || '1b',
        colorHex: '#1b1817',
        price: parseFloat(v.price.amount),
        available: v.availableForSale,
      };
    });

    const lengths = Array.from(new Set(variants.map((v) => v.length)));
    const colors = Array.from(new Set(variants.map((v) => v.color))).map((c) => ({
      name: c,
      label: c,
      hex: '#1b1817',
    }));

    return {
      id: node.id,
      handle: node.handle,
      title: node.title,
      collection: node.productType.toLowerCase().replace(/\s+/g, '-') || 'all',
      collectionTitle: node.productType || 'Extensions',
      priceFrom: parseFloat(node.priceRange.minVariantPrice.amount),
      description: node.description,
      details: ['100% Virgin Indian Human Hair', 'Unprocessed & Chemical-Free', 'Reusable & Long Lasting'],
      images,
      colors,
      lengths,
      variants,
      rating: 5,
      reviewCount: 12,
    };
  });
}

interface CartCreateResponse {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    } | null;
    userErrors: Array<{ field: string[]; message: string }>;
  };
}

/**
 * Creates a live Shopify Cart and returns the official Shopify Checkout URL.
 */
export async function createShopifyCheckoutUrl(items: CartItem[], note?: string): Promise<string> {
  const query = `
    mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const lines = items.map((item) => ({
    merchandiseId: item.variantId,
    quantity: item.quantity,
  }));

  const data = await shopifyFetch<CartCreateResponse>(query, {
    input: {
      lines,
      note: note || '',
    },
  });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(', '));
  }

  if (!data.cartCreate.cart?.checkoutUrl) {
    throw new Error('Could not create Shopify checkout URL.');
  }

  return data.cartCreate.cart.checkoutUrl;
}
