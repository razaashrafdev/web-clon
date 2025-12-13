import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsPage from '../../components/common/productc-card/products-card.jsx';
import { categories } from '../../../utils/categories.js';

const ProductPage = () => {
  const { productId } = useParams();

  console.log(categories)

  return (
    <div className="products-list">
      {categories.map((categoryItem) =>
        categoryItem.data.map((product) => (
          <ProductsPage key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductPage;
