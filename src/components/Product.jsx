import React from 'react';
import '../index.css';

import {productData} from '../data/Data';
import { Link } from 'react-router-dom';

function Product() {



  const productList=productData.map((c,i)=>{
    return(
      <Link to={`/product/${i}`}>
        <div key={i} className={`w-[300px] h-[400px] border border-[rgba(255,255,255,0.18)] rounded-2xl shadow-xl shadow-[rgba(255,255,255,0.1)] p-5 cursor-pointer transition-all duration-500 group hover:scale-[1.02] `}>
          <div className='w-full h-[60%] flex justify-center items-center'>
            <img className='w-full h-full' src={`/productimg/${c.productImg}`}/>
          </div>
          <div className='w-full h-full pt-4 text-white'>
            <p className='text-[1.5rem]'>{c.productName}</p>
            <h2 className=' font-bold text-[1.5rem]'>Rs: {c.productPrice}</h2>
            <p className='text-[15px] mb-2'>|{c.productType}</p>
            <button className='text-md outline-none  group-hover:underline  '>Buy Now &gt;&gt; </button>
          </div>
        </div>
      </Link>
    )
    
  })



  return (
    <>
      <section className='w-full bg-black bg-opacity-30 bg backdrop-blur-md'>
        <div className='w-full h-20 mb-[100px]'>
          <h1 className='text-white text-center text-[3rem] py-2'>Products</h1>
          <hr className='w-[80%] mx-auto h-1 my-5'/>
        </div>
        <div className='w-full h-100  flex  flex-wrap  justify-center px-[5%] gap-5  gap-y-10'>
          {productList}
        </div>
      </section>
    </>
  )
}

export default Product