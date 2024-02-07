// import { useContext } from 'react';
// import ProductCard from '../../components/product-card/product-card.component';
// import { CategoriesContext } from '../../contexts/categories.context';
// import './shop.styles.scss';

// const Shop = () => {
//   const { products } = useContext(CategoriesContext);

//   return (
//     <div className='products-container'>
//       {products && products.map((productGroup, index) => (
//         <div key={`${productGroup.heading}-${index}`} className='product-group'>
//           <h2>{productGroup.heading}</h2>
//           <div className='product-group-items'>
//             {productGroup.items && productGroup.items.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;


// import { useContext } from 'react';
// import CategoryPreview from '../../components/category-preview/category-preview.component';
// import { CategoriesContext } from '../../contexts/categories.context';
// import './shop.styles.scss';

// const Shop = () => {
//   const { products } = useContext(CategoriesContext);

//   return (
//     <div className='products-container'>
//       {products &&
//         products.map((productGroup, index) => (
//           <CategoryPreview key={`${productGroup.heading}-${index}`} productGroup={productGroup} />
//         ))}
//     </div>
//   );
// };

// export default Shop;


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
