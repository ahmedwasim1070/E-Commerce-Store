import React, { useEffect, useState } from 'react';
import '../index.css';

import {productData} from '../data/Data';
import { Link } from 'react-router-dom';

function Product() {
  const productList=productData.map((c,i)=>{
    let [infoPop,setInfoPop]=useState(false);
    
    const handleResize=()=>{
      window.innerWidth<=1024? setInfoPop(true): setInfoPop(false)
    }

    useEffect(()=>{
      handleResize();
      window.addEventListener('resize',handleResize);
      return()=>{
        window.removeEventListener('resize',handleResize);
      };
    },[]);

    const hoverHandlers=window.innerWidth> 1024 ?{onMouseEnter:()=>setInfoPop(true),onMouseLeave:()=>setInfoPop(false)}:{};

    return(
      <Link to={`/product/${i}`}>
        <div key={i} {...hoverHandlers} className='2xl:w-[350px] 2xl:h-[500px] xl:w-[350px] xl:h-[500px] lg:w-[350px] lg:h-[500px] md border border-[rgba(255,255,255,0.18)] rounded-2xl shadow-xl shadow-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-500 group hover:scale-[1.02] overflow-hidden relative'>
          <div className='w-full h-full 2xl:absolute xl:absolute lg:absolute md:relative md:flex md:justify-center'>
            <img src={`/productimg/${c.productImg}`}/>
          </div>
          {infoPop?
            <div className='w-full h-full text-white 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:bg-black 2xl:bg-opacity-30 2xl:backdrop-blur-md 2xl:gap-y-2 2xl:mt-0 xl:flex xl:flex-col xl:items-center xl:justify-center xl:bg-black xl:bg-opacity-30 xl:backdrop-blur-md xl:gap-y-2 xl:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:bg-black lg:bg-opacity-30 lg:backdrop-blur-md lg:gap-y-2 lg:mt-0 md:flex md:flex-col md:items-start md:p-5 md:pt-5 md:bg-black md:bg-opacity-50 md:mt-4 sm:flex sm:flex-col sm:items-start sm:p-5 sm:pt-5 sm:bg-black sm:bg-opacity-50 sm:mt-4 esm:flex esm:flex-col esm:items-start esm:p-5 esm:pt-5 esm:bg-black esm:bg-opacity-50 esm:mt-4 '>
              <p className='text-[1.5rem]'>{c.productName}</p>
              <h2 className=' font-bold text-[1.5rem]'>Rs: {c.productPrice}</h2>
              <p className='text-[15px] mb-2'>{c.productType}</p>
              <button className='text-md outline-none  group-hover:underline  '>Buy Now &gt;&gt; </button>
           </div>
           :
           ''
          }
        </div>
      </Link>
    )
  });



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