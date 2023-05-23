import React from 'react';
import Blog from '../../Blog/Blog';
import ShopCategory from '../../ShopCategory/ShopCategory';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import PhotoGallery from '../../PhotoGallery.jsx/PhotoGallery';
import Products from '../../Products/Products';
import Services from '../../Services/Services';

const Home = () => {
   useTitle('Home');

   return (
      <div className=''>
         <Banner></Banner>
         <PhotoGallery></PhotoGallery>
         <ShopCategory></ShopCategory>
         <Services></Services>
         <Products></Products>
      </div>
   );
};

export default Home;