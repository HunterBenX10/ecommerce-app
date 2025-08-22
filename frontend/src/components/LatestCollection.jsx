import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import React from 'react';


const LatestCollection = () => {

    // const { products } = useContext(ShopContext);

    return (
      <div className='my-10'>
          <div className="text-center py-8 text-3xl">
              <Title text1="LATEST" text2="COLLECTIONS" />
              <p className='w-w/4 m-auto text-xs sm:text-base text-gray-600'> Discover our latest arrivals and exclusive collections.
              </p>
          </div>
      </div>
    )
}

export default LatestCollection