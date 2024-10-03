import React, { useEffect, useState } from 'react';
import '../index.css';

import {productData} from '../data/Data';
import { Link } from 'react-router-dom';

function Product() {

  const productList=productData.map((c,i)=>{
    
    let [bgChg,setBgChg]=useState(false);

    return(
      <section onMouseEnter={()=>setBgChg(true)} onMouseLeave={()=>setBgChg(false)}  className={`flex flex-col justify-center gap-y-5 hover:scale-110 hover:shadow-[rgba(0,0,0,0.6)] hover:shadow-2xl cursor-pointer  product-font`}>
        <div className={`p-4 ${bgChg ? c.productBg : ''}`}>
          <img loading='lazy' className='w-[320px] h-[420px]' src={`/productimg/${c.productImg}`} />
        </div>
        <div className='w-full pl-2'>
          <h1 className='text-xl'>{c.productName}</h1>
          <div className='flex items-center w-full my-1 gap-2'>
            <span className='p-1.5 text-lg bg-red-500 text-white '>20% OFF</span>
            <h1 className='text-xl text-red-600 font-bold'>PKR {c.productPrice/2}</h1>
            <h1 className='text-xl line-through text-[rgba(0,0,0,0.4)] font-bold'>PKR {c.productPrice}</h1>
          </div>
          <div className='flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center esm:justify-center pr-2'>
            <button className='my-2 p-2.5 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-full sm:w-full esm:w-full  font-semibold border border-black transition-all duration-300 hover:bg-black hover:text-white'>Add to Cart</button>
          </div>
        </div>
      </section>
    )
  });



  return (
    <>
      <section className='w-full  py-10'>
        <div className='w-full h-20 mb-[100px]'>
          <h1 className='text-center text-[3rem] py-2'>Products</h1>
          <hr className='w-[85%] mx-auto h-1 my-5 bg-black'/>
        </div>
        <div className='w-full flex flex-wrap  justify-around px-[5%]  gap-y-10'>
          {productList}
        </div>
      </section>
    </>
  )
}

export default Product