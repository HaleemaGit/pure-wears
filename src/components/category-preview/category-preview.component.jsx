// import { Link } from 'react-router-dom';
// import ProductCard from '../product-card/product-card.component';
// import './category-preview.styles.scss';

// const CategoryPreview = ({ productGroup }) => {
//   // Check if productGroup is undefined or does not have the expected structure
//   if (!productGroup || !productGroup.heading) {
//     return null; // Return early or handle the case where productGroup is undefined
//   }

//   const categoryLink = `/shop/${encodeURIComponent(productGroup.heading)}`; // Ensure URL encoding

//   return (
//     <div className='category-preview-container'>
//       <h2>
//         <Link className='title' to={categoryLink}>{productGroup.heading.toUpperCase()}</Link>
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
// import ProductCard from '../product-card/product-card.component';

// import {
//   CategoryPreviewContainer,
//   Title,
//   Preview,
// } from './category-preview.styles';

// const CategoryPreview = ({ title, products }) => {
//   return (
//     <CategoryPreviewContainer>
//       <h2>
//         <Title to={title}>{title.toUpperCase()}</Title>
//       </h2>
//       <Preview>
//         {products
//           .filter((_, idx) => idx < 4)
//           .map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </Preview>
//     </CategoryPreviewContainer>
//   );
// };

// export default CategoryPreview;


import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  console.log('CategoryPreview rendered with title:', title);
  console.log('CategoryPreview received products:', products);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title && title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {/* Check if 'products' is defined before using 'filter' and 'map' */}
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
