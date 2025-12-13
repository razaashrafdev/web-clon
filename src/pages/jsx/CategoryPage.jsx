import React from 'react';
import { useParams } from 'react-router-dom';
import Menfashion from './MensFashionPage';
import Womenwear from './WomensWearPage';
import Electronics from './ElectronicsPage';
import BeautyandHealyh from './BeautyHealthPage';
import Homeliving from './HomeLivingPage';
import Sportsandoutdoor from './SportsOutdoorsPage';
import Accessories from './Accessories';
import Footware from './Footware';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categoryComponents = {
    'mens-fashion': <Menfashion />,
    'womens-wear': <Womenwear />,
    'accessories': <Accessories />,
    'footwear': <Footware />,
    'electronics': <Electronics />,
    'beauty-health': <BeautyandHealyh />,
    'home-living': <Homeliving />,
    'sports-outdoors': <Sportsandoutdoor />
  };

  const renderCategory = () => categoryComponents[categoryName] || <div>Category not found</div>;

  return (
    <div>
      {renderCategory()}
    </div>
  );
};

export default CategoryPage;