// src/routes/productcategory/productcategory.component.jsx
import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './productcategory.styles.scss';

const Productcategory = () => {
  const { productcategory } = useParams();
  const { products } = useContext(CategoriesContext);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    // Find the category matching the 'productcategory' parameter
    const category = products.find((category) => category.heading === productcategory);

    // Set the category items if found, otherwise set an empty array
    setCategoryItems(category ? category.items : []);
  }, [productcategory, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{productcategory.toUpperCase()}</h2>
      <div className='category-container'>
        {categoryItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Productcategory;
