import React from 'react';
import '../index.css';

function About() {
  return (
    <>
      <div className='w-full h-[100vh] bg-black bg-opacity-30 backdrop-blur-md'>
        <div className='w-full h-[130px] text-white flex justify-center items-center'>
            <h1 className='text-[3rem]'>About Us</h1>
        </div>
        <hr className='w-[85%]  mx-auto'/>
        <div className='w-full mt-10'>
            <div className='w-[80%] mx-auto'>
                <div className='w-[50%] text-white flex items-center gap-5'>
                    <img className='w-[100px] h-[100px] rounded-full border border-[rgba(255,255,255,0.2)]' src='/crush-icon.jpg'/>
                    <h1 className='text-[2rem]'>Crush Fragrances</h1>
                </div>
                <div className='w-[50%]'>
                    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About