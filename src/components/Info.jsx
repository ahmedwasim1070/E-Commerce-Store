import React, { useState, useEffect } from 'react';

function Info() {
    const [showFirst, setShowFirst] = useState(true);
    const [animationClass, setAnimationClass] = useState('fade-in');
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Add fade-out class before switching to the next div
        setAnimationClass('fade-out');
        
        // Wait for fade-out animation to finish before switching divs
        setTimeout(() => {
          setShowFirst((prev) => !prev);
          setAnimationClass('fade-in'); 
        }, 300);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className='w-full h-10 bg-red-900'>
        <div className='w-full h-full flex items-center justify-center font-bold'>
          {showFirst ? (
            <div className={`flex text-white ${animationClass}`}>
              <h1>Exclusive Opening Sale !</h1>
            </div>
          ) : (
            <div className={`flex text-white ${animationClass} `}>
              <h1>Free Home Delivery All over Pakistan ! </h1>
            </div>
          )}
        </div>
      </section>
    );
  }
  
export default Info;

