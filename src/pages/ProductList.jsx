import { Check, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import { addToCart } from '../redux/CartSlice.jsx';

const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', price: 34, category: 'Statement makers', note: 'Big, bold leaves', image: 'photo-1614594975525-e45190c55d0b' },
  { id: 'rubber', name: 'Rubber Plant', price: 28, category: 'Statement makers', note: 'Glossy & grounded', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 46, category: 'Statement makers', note: 'A sculptural favorite', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 'bird', name: 'Bird of Paradise', price: 52, category: 'Statement makers', note: 'Tropical by nature', image: 'photo-1518531933037-91b2f5f229cc' },
  { id: 'palm', name: 'Parlor Palm', price: 24, category: 'Statement makers', note: 'Soft, feathery fronds', image: 'photo-1518531933037-91b2f5f229cc' },
  { id: 'calathea', name: 'Calathea Orbifolia', price: 39, category: 'Statement makers', note: 'Silver-striped leaves', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 'pothos', name: 'Golden Pothos', price: 18, category: 'Easy does it', note: 'Happy to trail', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 'snake', name: 'Snake Plant', price: 22, category: 'Easy does it', note: 'Low-fuss & lovely', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 'zz', name: 'ZZ Plant', price: 26, category: 'Easy does it', note: 'Thrives on neglect', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 'spider', name: 'Spider Plant', price: 16, category: 'Easy does it', note: 'A cheerful classic', image: 'photo-1459156212016-c812468e2115' },
  { id: 'jade', name: 'Jade Plant', price: 19, category: 'Easy does it', note: 'A sunny windowsill pal', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 'peace', name: 'Peace Lily', price: 27, category: 'Easy does it', note: 'Elegant and forgiving', image: 'photo-1518531933037-91b2f5f229cc' },
  { id: 'string', name: 'String of Hearts', price: 21, category: 'Trailing & hanging', note: 'Delicate trailing vines', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 'philodendron', name: 'Heartleaf Philodendron', price: 20, category: 'Trailing & hanging', note: 'A lush, leafy cascade', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 'english-ivy', name: 'English Ivy', price: 17, category: 'Trailing & hanging', note: 'Classic climbing greenery', image: 'photo-1459156212016-c812468e2115' },
  { id: 'dischidia', name: 'Dischidia Million Hearts', price: 25, category: 'Trailing & hanging', note: 'Tiny leaves, big charm', image: 'photo-1518531933037-91b2f5f229cc' },
  { id: 'hoya', name: 'Hoya Carnosa', price: 29, category: 'Trailing & hanging', note: 'Waxy leaves, slow-growing', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 'string-pearls', name: 'String of Pearls', price: 23, category: 'Trailing & hanging', note: 'A curious conversation piece', image: 'photo-1509423350716-97f9360b4e09' },
];

const categories = ['Statement makers', 'Easy does it', 'Trailing & hanging'];

function plantImage(image) {
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=720&q=85`;
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <div className="page-shell">
      <Navbar />
      <main className="catalog-main">
        <section className="catalog-intro">
          <div>
            <p className="eyebrow">THE HOUSEPLANT EDIT · SPRING / SUMMER</p>
            <h1>Find your <em>kind</em><br />of green.</h1>
          </div>
          <p className="catalog-intro-copy">Good plants, chosen for real homes. Start with a favorite, and let the rest follow.</p>
        </section>
        <AboutUs />
        {categories.map((category, index) => (
          <section className="plant-section" key={category}>
            <div className="section-heading">
              <div><span className="section-index">0{index + 1}</span><h2>{category}</h2></div>
              <span>{plants.filter((plant) => plant.category === category).length} plants</span>
            </div>
            <div className="plant-grid">
              {plants.filter((plant) => plant.category === category).map((plant) => {
                const added = cartIds.has(plant.id);
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-photo-wrap">
                      <img className="plant-photo" src={plantImage(plant.image)} alt={plant.name} loading="lazy" />
                      <span className="plant-note">{plant.note}</span>
                    </div>
                    <div className="plant-details">
                      <div><h3>{plant.name}</h3><p>${plant.price.toFixed(2)}</p></div>
                      <button className={`add-button${added ? ' is-added' : ''}`} type="button" onClick={() => dispatch(addToCart(plant))} disabled={added} aria-label={added ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}>
                        {added ? <Check size={17} /> : <Plus size={17} />}
                        <span>{added ? 'Added' : 'Add to cart'}</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <footer className="site-footer"><span>PARADISE NURSERY</span><span>Rooted in good things.</span></footer>
    </div>
  );
}