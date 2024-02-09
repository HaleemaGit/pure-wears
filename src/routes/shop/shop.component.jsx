
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Productcategory from '../productcategory/productcategory.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':productcategory' element={<Productcategory />} />
    </Routes>
  );
};

export default Shop;
