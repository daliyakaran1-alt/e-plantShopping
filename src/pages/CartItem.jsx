import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice.jsx';

function imageUrl(image) {
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=360&q=80`;
}

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-shell">
      <Navbar />
      <main className="cart-main">
        <div className="cart-title-row">
          <div><p className="eyebrow">YOUR LITTLE INDOOR JUNGLE</p><h1>Shopping <em>cart.</em></h1></div>
          <span className="cart-item-total"><ShoppingBag size={17} /> {itemCount} {itemCount === 1 ? 'plant' : 'plants'}</span>
        </div>
        {items.length === 0 ? (
          <section className="empty-cart">
            <span className="empty-cart-mark"><ShoppingBag size={26} strokeWidth={1.5} /></span>
            <h2>Your cart is taking a breather.</h2>
            <p>There are plenty of leafy friends waiting to come home.</p>
            <Link className="button button-dark" to="/plants">Browse plants <ArrowLeft size={16} /></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-lines" aria-label="Items in your cart">
              <div className="cart-column-head"><span>PLANT</span><span>PRICE</span><span>QUANTITY</span><span>TOTAL</span></div>
              {items.map((item) => (
                <article className="cart-line" key={item.id}>
                  <div className="cart-product">
                    <img src={imageUrl(item.image)} alt={item.name} />
                    <div><h2>{item.name}</h2><span>Houseplant · Indoor</span><button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div>
                  </div>
                  <span className="cart-unit-price">${item.price.toFixed(2)}</span>
                  <div className="quantity-control" aria-label={`Quantity of ${item.name}`}>
                    <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}><Minus size={14} /></button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}><Plus size={14} /></button>
                  </div>
                  <span className="cart-line-total">${(item.price * item.quantity).toFixed(2)}</span>
                </article>
              ))}
              <Link className="back-to-plants" to="/plants"><ArrowLeft size={15} /> Continue shopping</Link>
            </section>
            <aside className="order-summary">
              <p className="eyebrow">A GOOD CHOICE</p>
              <h2>Order summary</h2>
              <div className="summary-row"><span>Plants ({itemCount})</span><span>${total.toFixed(2)}</span></div>
              <div className="summary-row"><span>Delivery</span><span className="delivery-note">On us</span></div>
              <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
              <button className="button button-dark checkout-button" type="button" onClick={() => window.alert('Coming soon! Checkout is being planted.')}>Checkout <span>→</span></button>
              <p className="checkout-note">A little green, on its way to you.</p>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer"><span>PARADISE NURSERY</span><span>Rooted in good things.</span></footer>
    </div>
  );
}