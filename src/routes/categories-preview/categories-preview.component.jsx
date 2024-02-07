import { useContext} from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { products  } = useContext(CategoriesContext);

  return (
    <div className='products-container'>
      {products &&
        products.map((productGroup, index) => (
          <CategoryPreview key={`${productGroup.heading}-${index}`} productGroup={productGroup} />
        ))}
    </div>
  );
};

export default CategoriesPreview;
