import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-image" role="img" aria-label="Sunlit indoor jungle filled with houseplants" />
      <header className="landing-topbar">
        <Link className="brand brand-light" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark">p.</span>
          <span>PARADISE<br />NURSERY</span>
        </Link>
        <span className="topbar-note">A little more life, indoors.</span>
      </header>
      <section className="landing-content">
        <p className="eyebrow eyebrow-light">GROW A SLOWER KIND OF HOME</p>
        <h1>Make room<br />for <em>green.</em></h1>
        <p className="landing-copy">At Paradise Nursery, we find beautiful, easygoing plants for the corners where life happens. Carefully grown, thoughtfully chosen, and ready to feel at home with you.</p>
        <Link className="button button-cream" to="/plants">Get Started <ArrowRight size={17} strokeWidth={1.8} /></Link>
      </section>
      <div className="landing-footer">
        <span>PLANTS FOR LIVING</span>
        <span>EST. WITH CARE · 2024</span>
        <ArrowDownRight size={17} aria-hidden="true" />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}