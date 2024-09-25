import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

import Header from '../components/Header';
import {productData} from '../data/Productdata';

function ProductPage() {
  const {id}=useParams();

  return (
    <main className='bg-img w-full h-[100vh] overflow-x-hidden'>
        <div className='w-full mx-auto fl:container'>
            <Header/>
            <div className=''>
            </div>
        </div>
    </main>
  )
}

export default ProductPage