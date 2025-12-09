import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import Blog from './pages/Blog';
import MensFashionPage from './pages/MensFashionPage';
import WomensWearPage from './pages/WomensWearPage';
import ElectronicsPage from './pages/ElectronicsPage';
import HomeLivingPage from './pages/HomeLivingPage';
import BeautyHealthPage from './pages/BeautyHealthPage';
import SportsOutdoorsPage from './pages/SportsOutdoorsPage';

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

            {/* Category-Specific Routes */}
            <Route path="/mens-fashion" element={<MensFashionPage />} />
            <Route path="/womens-wear" element={<WomensWearPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="/home-living" element={<HomeLivingPage />} />
            <Route path="/beauty-health" element={<BeautyHealthPage />} />
            <Route path="/sports-outdoors" element={<SportsOutdoorsPage />} />

            {/* Categories page route */}
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
