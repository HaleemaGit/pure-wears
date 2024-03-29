
import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log('Categories Map checking:', categoriesMap);

  return (
    <div className='products-container'>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return (
        <CategoryPreview key={title} title={title} products={products} />
      );
    })}
    </div>
  );
};

export default CategoriesPreview;
