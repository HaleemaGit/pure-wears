import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategoriesAndDocuments('collections');
    
        // Log the received data for debugging
        console.log('Received data:', categories);
    
        const allProducts = Object.values(categories).reduce((accumulator, category) => {
          if (Array.isArray(category)) {
            accumulator.push(...category);
          }
          return accumulator;
        }, []);
  
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error or set a default value for products
        // For example: setProducts([]);
      }
    };
  
    fetchData();
  }, []);
   
  
  
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};



// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// // import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// // import SHOP_DATA from '../shop-data.js';

// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(async () => {
//     const categoryMap = await getCategoriesAndDocuments('categories');
//     console.log(categoryMap);
//   }, []);

//   // This is a one of code used to create collections database inside SHOP_DATA in Firestore. Hence, the reason for commenting it out after running it once and getting the data stored in firestore successfully
//   // useEffect(() => {
//   //   addCollectionAndDocuments('collections', SHOP_DATA);
//   // }, []);

//   const value = { products };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
