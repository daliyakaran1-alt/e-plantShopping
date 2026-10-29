import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../ProductList.css';
import CartItem from '../CartItem';
import { addItem } from '../CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/07/00/36/plants-3521255_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the room naturally.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to grow and excellent toxin remover.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies air and heals burns.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=720&q=85',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, great for tea.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Citrusy scent, relieves stress.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Beautiful flowers with powerful fragrance.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=720&q=85',
          description: 'Thrives in low light and requires minimal watering.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Tolerates neglect and can grow in various conditions.',
          cost: '$13',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/green-482831_1280.jpg',
          description: 'Hardy plant that tolerates low light.',
          cost: '$24',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2019/07/11/07/49/succulent-4330107_1280.jpg',
          description: 'Requires minimal watering, symbolizes luck.',
          cost: '$16',
        },
        {
          name: 'Succulent Trio',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/06/cactus-1846147_1280.jpg',
          description: 'Drought-tolerant variety of vibrant succulents.',
          cost: '$18',
        },
        {
          name: 'Chinese Evergreen',
          image: 'https://cdn.pixabay.com/photo/2020/07/08/17/30/aglaonema-5384666_1280.jpg',
          description: 'Hardy, attractive, and tolerates low light.',
          cost: '$22',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <a href="/" onClick={handleHomeClick}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                alt="logo"
                style={{ width: '40px', height: '40px' }}
              />
              <div>
                <h3>Paradise Nursery</h3>
                <i style={{ fontSize: '13px' }}>Where Green Meets Serenity</i>
              </div>
            </div>
          </a>
        </div>
        <ul>
          <li>
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#plants" onClick={handlePlantsClick}>
              Plants
            </a>
          </li>
          <li>
            <a href="#cart" onClick={handleCartClick} className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="IconChangeColor"
                height="38"
                width="38"
              >
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#faf9f9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="18"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
              <span className="cart_quantity_count">{totalQuantity}</span>
            </a>
          </li>
        </ul>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <div className="category-title">
                <h2>{category.category}</h2>
              </div>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
