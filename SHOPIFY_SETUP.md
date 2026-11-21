# Connecting Aimeehaircompany to Shopify

This storefront is built to mirror the design and end-to-end shopping experience of the site and is **ready to connect to Shopify** via the Shopify Storefront API.

## How to Connect Your Shopify Store

1. **Create your Shopify Store** and add your products & collections (`hair-extension-bundles`, `tape-in-extensions`, `u-tip-extensions`, `i-tip-extensions`, `clip-in-extensions`, `lace-closure`, `ponytails`).
2. **Enable the Storefront API** in Shopify Admin:
   - Go to **Settings -> Apps and sales channels -> Develop apps**
   - Click **Create an app** (e.g. `Aimeehaircompany Storefront`)
   - Under **Configuration -> Storefront API integration**, enable read access for products, collections, and checkouts (`unauthenticated_read_product_listings`, `unauthenticated_write_checkouts`, `unauthenticated_read_checkouts`).
   - Install the app and copy your **Storefront API access token**.
3. **Add your credentials** to `.env` (copy `.env.example` to `.env`):
   ```env
   VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
   VITE_SHOPIFY_API_VERSION=2025-01
   ```
4. **Restart / Rebuild**:
   - The storefront (`src/lib/shopify.ts` + `src/context/CartContext.tsx`) will automatically load your live Shopify products and send customers directly to official **Shopify Checkout** when they click **Check Out** in the cart drawer.
