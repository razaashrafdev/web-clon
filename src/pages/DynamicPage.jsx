import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryPage from './CategoryPage.jsx'; 
import ProductPage from './ProductPage.jsx';

const DynamicPage = () => {
  const { type, id } = useParams();
  if (type === 'category') {
    return <CategoryPage categoryName={id} />;
  } else if (type === 'product') {
    return <ProductPage productId={id} />;
  }

  return <div>Page not found</div>;
};

export default DynamicPage;
