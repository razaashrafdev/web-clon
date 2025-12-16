import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/jsx/Home';
import Shop from './pages/jsx/Shop';
import Categories from './pages/jsx/Categories';
import NewArrivals from './pages/jsx/NewArrivals';
import CategoryPage from './pages/jsx/CategoryPage.jsx';
import ProductDetails from './pages/jsx/ProductDetails.jsx';
import ScrollToTop from './pages/jsx/ScrollToTop.jsx';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar/CartSidebar';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <CartSidebar />
          <main>
            <ScrollToTop />
            <Routes>
              {/* General Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />

              <Route path="/:productId" element={<ProductDetails />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;