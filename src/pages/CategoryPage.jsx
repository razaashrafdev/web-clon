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

  const categoryComponents = {
    'mens-fashion': <Menfashion />,
    'womens-wear': <Womenwear />,
    'electronics': <Electronics />,
    'beauty-health': <BeautyandHealyh />,
    'homeliving': <Homeliving />,
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