// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import Button from '../button/button.component';

// import './product-card.styles.scss';

// const ProductCard = ({ product }) => {
//   const { name, price, imageUrl } = product;
//   const { addItemToCart } = useContext(CartContext);

//   const addProductToCart = () => addItemToCart(product);

//   return (
//     <div className='product-card-container'>
//       <img src={imageUrl} alt={`${name}`} />
//       <div className='footer'>
//         <span className='name'>{name}</span>
//         <span className='price'>{price}</span>
//       </div>
//       <Button buttonType='inverted' onClick={addProductToCart}>
//         Add to card
//       </Button>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  // Add a check to ensure that 'product' is defined before rendering
  if (!product) {
    return null; // or handle the case when 'product' is undefined
  }

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;