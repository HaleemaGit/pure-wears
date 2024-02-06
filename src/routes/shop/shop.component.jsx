// import { useContext } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';

// import { CategoriesContext } from '../../contexts/categories.context';

// import './shop.styles.scss';

// const Shop = () => {
//   const { products } = useContext(CategoriesContext);

//   return (
//     <div className='products-container'>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default Shop;

import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(CategoriesContext);

  return (
    <div className='products-container'>
      {products && products.map((productGroup, index) => (
        <div key={`${productGroup.heading}-${index}`} className='product-group'>
          <h2>{productGroup.heading}</h2>
          <div className='product-group-items'>
            {productGroup.items && productGroup.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
