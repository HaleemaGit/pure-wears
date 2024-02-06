import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategoriesAndDocuments('collections');
  
        // Log the received data for debugging
        console.log('Received data:', categories);
  
        const groupedProducts = [];
        
        // Group products by category
        for (const category in categories) {
          if (Array.isArray(categories[category])) {
            groupedProducts.push({
              category: category,
              items: categories[category]
            });
          }
        }
  
        // Flatten the grouped products array
        const allProducts = groupedProducts.reduce((accumulator, category) => {
          accumulator.push({ heading: category.category, items: category.items });
          return accumulator.concat(category.items);
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
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const categories = await getCategoriesAndDocuments('collections');
    
  //       // Log the received data for debugging
  //       console.log('Received data:', categories);
    
  //       const allProducts = Object.values(categories).reduce((accumulator, category) => {
  //         if (Array.isArray(category)) {
  //           accumulator.push(...category);
  //         }
  //         return accumulator;
  //       }, []);
  
  //       setProducts(allProducts);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle the error or set a default value for products
  //       // For example: setProducts([]);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
   
  
  
  const value = { products };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};



// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// // import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// // import SHOP_DATA from '../shop-data.js';

// export const CategoriesContext = createContext({
//   products: [],
// });

// export const CategoriesProvider = ({ children }) => {
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
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };


