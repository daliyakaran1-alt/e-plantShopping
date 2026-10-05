import { Leaf, ShoppingBag } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="site-header">
      <Link to="/" className="brand brand-dark" aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={19} strokeWidth={1.8} /></span>
        <span>PARADISE<br />NURSERY</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Link className="cart-link" to="/cart" aria-label={`Shopping cart with ${count} items`}>
        <ShoppingBag size={21} strokeWidth={1.7} />
        <span>Cart</span>
        <span className="cart-count" aria-live="polite">{count}</span>
      </Link>
    </header>
  );
}