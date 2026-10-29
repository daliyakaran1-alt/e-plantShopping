# Paradise Nursery - e-plantShopping

A responsive shopping application for an online plant shop called Paradise Nursery built with React and Redux Toolkit.

## Project Overview

Paradise Nursery is an online storefront that allows plant enthusiasts to browse houseplants across multiple categories, view detailed descriptions, add items to a dynamic shopping cart, manage item quantities, and review order totals.

### Features
- **Landing Page**: Features a full-screen background image, company welcome header (*Welcome To Paradise Nursery*), informative About Us section, and a "Get Started" button.
- **Product Listing Page**: Displays 18 houseplants categorized into 3 categories (*Air Purifying Plants*, *Aromatic Fragrant Plants*, and *Low Maintenance Plants*), with plant thumbnail, name, description, and price. Includes an "Add to Cart" button that disables once clicked.
- **Header / Navigation Bar**: Includes navigation links to Home, Plants, and Cart, plus a shopping cart icon with dynamic badge count showing total number of items in the cart.
- **Shopping Cart Page**: Shows all added items with image, name, unit price, quantity controls (+ / -), item total cost, total plant count, grand cart total, a Delete button for each item, a Checkout button ("Coming Soon"), and a Continue Shopping button.
- **State Management**: Implemented using Redux Toolkit slice (`CartSlice.jsx`) with `addItem`, `removeItem`, and `updateQuantity` reducers.

## Installation and Setup

```sh
npm install
npm run dev
```

To build for production:
```sh
npm run build
```
