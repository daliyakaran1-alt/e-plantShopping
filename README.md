# Paradise Nursery

A responsive houseplant storefront built with React, Redux Toolkit, and Vite. Browse plants in three collections, add favorites to a persistent cart, adjust quantities, and review the order total.

## Run locally

```sh
npm install
npm run dev
```

## Publish to GitHub Pages

1. Create a **public** GitHub repository and push this project to its default branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. The included workflow builds the project and publishes it on every push to `main` or `master`. The deployed URL appears under the repository's **Settings → Pages** and in the workflow run summary.

The app uses hash-based routing, so each page also works when opened or refreshed on static hosting. No repository-specific Vite base path is needed.

## Assignment files

- Landing page and route definitions: `src/App.jsx`
- Landing background and application styling: `src/App.css`
- Company information: `src/pages/AboutUs.jsx`
- Plant catalog: `src/pages/ProductList.jsx`
- Shopping cart page: `src/pages/CartItem.jsx`
- Redux cart state: `src/redux/CartSlice.jsx`

Plant photography and display fonts are loaded from Unsplash and Google Fonts.