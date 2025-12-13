import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/jsx/Home';
import Shop from './pages/jsx/Shop';
import Categories from './pages/jsx/Categories';
import NewArrivals from './pages/jsx/NewArrivals';
import Sale from './pages/jsx/Sale';
import Blog from './pages/jsx/Blog.jsx';
import CategoryPage from './pages/jsx/CategoryPage.jsx';
import ProductDetails from './pages/jsx/ProductDetails.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/product/:productId" element={<ProductDetails />} />

            <Route path="/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
