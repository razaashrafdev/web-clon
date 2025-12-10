import React from 'react';
import { useParams } from 'react-router-dom';

import Menfashion from './MensFashionPage';
import Womenwear from './WomensWearPage';
import Electronics from './ElectronicsPage';
import BeautyandHealyh from './BeautyHealthPage';
import Homeliving from './HomeLivingPage';
import Sportsandoutdoor from './SportsOutdoorsPage';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const renderCategory = () => {
    switch (categoryName) {
      case 'mens-fashion':
        return <Menfashion />;
      case 'womens-wear':
        return <Womenwear />;
      case 'electronics':
        return <Electronics />;
      case 'beauty-health':
        return <BeautyandHealyh />;
      case 'home-living':
        return <Homeliving />;
      case 'sports-outdoors':
        return <Sportsandoutdoor />;
      default:
        return <div>Category not found</div>;
    }
  };

  return (
    <div>
      {renderCategory()}
    </div>
  );
};

export default CategoryPage;
