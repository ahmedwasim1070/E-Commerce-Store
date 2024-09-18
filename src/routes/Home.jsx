import React, { ect, useEffect, useState } from 'react';
import '../index.css';

import {productData} from '../data/Productdata';
import Header from '../components/Header';


function Home() {

  let [shSmNav,setShSmNav]=useState(false);

  const smNav=()=>{
    setShSmNav(!shSmNav);
  }

  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }

  return (
    <main className='bg-img h-[100vh]'>
      <div className='w-full mx-auto fl:container'>
        <Header smNav={smNav} />
        <Hero/>



        {shSmNav?
          <div onClick={smNav} className='w-full h-[100vh] absolute top-[120px] flex justify-end bg-black bg-opacity-30 backdrop-blur-md '>
            <div onClick={smNavClick} className='w-[50%] h-full bg-black bg-opacity-60 backdrop-blur-sm slide-in'>
              <ul className='w-full h-full text-white text-center text-[1rem] mt-8 flex flex-col  items-center'>
                <li className='py-5 underline-animation-sm'>Home</li>
                <li className='py-5 underline-animation-sm'>Products</li>
                <li className='py-5 underline-animation-sm'>Contact Us</li>
                <li className='py-5 underline-animation-sm'>About Us</li>
              </ul>
            </div>
          </div> 
        :
        ''
        }
      </div>
    </main>

  )
}

// Main Slide Show Menu Bar

function Hero(){
  let [idxPr,setIdxPr]=useState(0);
  let [fade,setFade]=useState('fade-in');


  useEffect(() => {
    const interval = setInterval(() => {
      setFade('fade-out');
      setTimeout(() => {
        setIdxPr((prevIdx) => (prevIdx >= productData.length - 1 ? 0 : prevIdx + 1)); 
        setFade('fade-in');
      }, 300); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);


  const changeIdx = (direction) => {
    setFade('fade-out'); 
    setTimeout(() => {
      if (direction === 'next') {
        setIdxPr((prevIdx) => (prevIdx >= productData.length - 1 ? 0 : prevIdx + 1));
      } else if (direction === 'prev') {
        setIdxPr((prevIdx) => (prevIdx <= 0 ? productData.length - 1 : prevIdx - 1));
      }
      setFade('fade-in'); 
    }, 300); 
  };


  return(
    <section className='w-full h-[85vh] bg-black bg-opacity-30 backdrop-blur-md flex justify-evenly text-white  '>
      <div className='w-[25%] h-[50%] flex flex-col justify-end'>
        <h1 className={`text-[4rem] ${fade}`} >{productData[idxPr].productName}</h1>
        <p className={`text-[2rem] ${fade}`} >Love at First Fragrance</p>
        <p className={`text-[1rem] ${fade}`} >| {productData[idxPr].productType}</p>
      </div>
      <div className='w-[40%] h-full flex flex-col justify-center'>
        <div className='mb-20'>
          <img className={`w-[20vw] drop-shadow-custom-red ${fade}`} src={`/productimg/${productData[idxPr].productImg}`} />
        </div>
        <div className='w-full flex mr-20'>
          <button className='flex gap-2 items-center p-4 rounded-full bg-[#461111] mx-10 trnasition-all duration-300 outline-none  hover:bg-transparent border border-solid'>
            <p className='text-xl text-center ml-2'>Add to Cart</p>
            <div className='flex items-center justify-center w-[24px] h-[24px]'>
              <h1 className='text-xl'>+</h1>
            </div>
          </button>
        </div>
      </div>
      <div className='w-[8%] h-[55%] flex justify-center items-end'>
        <div className='w-full'>
          <p className='text-md my-2'>Details</p>
          <h1 className={`text-2xl my-2 ${fade}`}>Rs: {productData[idxPr].productPrice}</h1>
          <p className='text-md'>50mL</p>
          <div className='mt-10 flex items-center gap-3'>
            <button onClick={()=>changeIdx('prev')} className='border border-solid rounded-xl p-1 transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)]'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7L10 12L15 17" stroke="#f4f4f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <button onClick={()=>changeIdx('next')} className='border border-solid rounded-xl p-1 transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)]'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#f4f4f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home