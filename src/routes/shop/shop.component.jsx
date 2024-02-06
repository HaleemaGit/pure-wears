import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(CategoriesContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

// import { useContext } from 'react';
// import { Fragment } from 'react';
// import ProductCard from '../../components/product-card/product-card.component';
// import { CategoriesContext } from '../../contexts/categories.context';
// import './shop.styles.scss';

// const Shop = () => {
//   const { products } = useContext(CategoriesContext);

//   // Group products by category
//   const categoriesMap = products.reduce((map, product) => {
//     const { title } = product;
//     if (!map[title]) {
//       map[title] = [];
//     }
//     map[title].push(product);
//     return map;
//   }, {});

//   return (
//     <Fragment>
//       {Object.keys(categoriesMap).map((title) => (
//         <Fragment key={title}>
//           <h2>{title}</h2>
//           <div className='products-container'>
//             {categoriesMap[title].map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </Fragment>
//       ))}
//     </Fragment>
//   );
// };

// export default Shop;
