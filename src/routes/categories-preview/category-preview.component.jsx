// import ProductCard from '../product-card/product-card.component';
// import './category-preview.styles.scss';

// const CategoryPreview = ({ productGroup }) => {
//   // Check if productGroup is undefined or does not have the expected structure
//   if (!productGroup || !productGroup.heading) {
//     return null; // Return early or handle the case where productGroup is undefined
//   }

//   return (
//     <div className='category-preview-container'>
//       <h2>
//         <span className='title'>{productGroup.heading.toUpperCase()}</span>
//       </h2>
//       <div className='preview'>
//         {productGroup.items &&
//           productGroup.items
//             .filter((_, idx) => idx < 4)
//             .map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPreview;
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
