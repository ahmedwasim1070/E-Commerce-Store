import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../index.css';
import Header from '../components/Header';
import Product from '../components/Product';
import Contact from '../components/Contact';
import About from '../components/About';
import Footer from '../components/Footer';
import { productData } from '../data/Data';
import Info from '../components/Info';

function Home({idxPr,setIdxPr,addToCart,cartData}) {

  let [shSmNav, setShSmNav] = useState(false);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smNav = () => {
    setShSmNav(!shSmNav);
  };

  const smNavClick = (event) => {
    event.stopPropagation();
  };




  return (
    <main className=' w-full overflow-x-hidden'>
      <Info/>
      <div className='w-full mx-auto fl:container'>
        <Header cartData={cartData} smNav={smNav}/>
        <Hero addToCart={addToCart} idxPr={idxPr} setIdxPr={setIdxPr} />
        <Product addToCart={addToCart}/>
        <div ref={contactRef} className="opacity-0 transition-opacity duration-1000 ease-in-out">
          <Contact />
        </div>
        <div  ref={aboutRef} className="opacity-0 transition-opacity duration-1000 ease-in-out">
          <About />
        </div>
        <Footer />

        {shSmNav && (
            <div onClick={smNav} className='w-full h-[85vh] absolute top-[120px] flex justify-end backdrop-blur-sm overflow-y-hidden'>
              <div onClick={smNavClick} className='w-[50%] h-full bg-white border border-solid rounded-lg slide-in'>
                <ul className='w-full h-full text-black text-center text-[1rem] mt-8 flex flex-col  items-center'>
                  <Link to='/'><li className='py-5 underline-animation-sm'>Home</li></Link>
                  <Link to='/products'><li className='py-5 underline-animation-sm'>Products</li></Link>
                  <Link to='/contact-us'><li className='py-5 underline-animation-sm'>Contact Us</li></Link>
                  <Link to='/about-us'><li className='py-5 underline-animation-sm'>About Us</li></Link>
                </ul>
              </div>
            </div> 
          )}
      </div>
    </main>
  );
}



// Main Slide Show Menu Bar

function Hero({idxPr,setIdxPr,addToCart}){
  let [fade,setFade]=useState('fade-in');


  useEffect(() => {
    const interval = setInterval(() => {
      setFade('fade-out');
      setTimeout(() => {
        setIdxPr((prevIdx) => (prevIdx >= productData.length - 1 ? 0 : prevIdx + 1)); 
        setFade('fade-in');
      }, 300); 
    }, 5000); 
    
    return () => {
      clearInterval(interval);
    }
  }, [idxPr]);


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

  const pDefault=(e)=>{
    e.preventDefault();
  }

  return(
    <Link to={`/product/${idxPr}`}>
      <ToastContainer />
      <section  className={`w-full 2xl:h-[850px] xl:h-[800px] lg:h-[750px] md:h-[700px] sm:h-[850px] flex justify-evenly md:relative sm:relative esm:relative esm:h-[900px] ${fade} text-white ${productData[idxPr].productBg}`}>
        <div className='h-[55%] flex flex-col justify-end 2xl:relative 2xl:left-0 2xl:top-0 2xl:w-[33%] xl:relative xl:left-0 xl:top-0 xl:w-[33%] lg:relative lg:top-0 lg:left-0 lg:w-[33%] md:absolute md:left-[42%] md:top-[-5%] md:w-full sm:absolute sm:left-[46%] sm:top-[-5%] sm:w-full esm:absolute esm:top-[110px] esm:left-[10%] '>
          <h1 className={`2xl:text-[4rem] xl:text-[3.2rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2.5rem] esm:text-[3rem] ${fade}`} >{productData[idxPr].productName}</h1>
          <p className={`2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1.5rem] sm:text-[1.2rem] esm:text-[1.6em] mt-2 ${fade}`} >{productData[idxPr].productTagline}</p>
          <p className={`2xl:text-[1rem] xl:text-[1rem] lg:text-[1rem] esm:mt-2 `} >| {productData[idxPr].productType}</p>
        </div>
        <div className='h-full flex flex-col justify-center ml-20 2xl:relative 2xl:left-0 2xl:top-0 2xl:w-[40%] xl:relative xl:left-0 xl:top-0 xl:w-[40%] lg:relative lg:left-0 lg:top-0 lg:w-[40%] md:absolute md:left-[2%] md:top-[0%] md:w-[40%] sm:absolute sm:left-[1%] sm:top-[0%] sm:w-[40%] esm:absolute esm:left-[-50px] esm:top-[-10px] esm:w-[250px]'>
          <div className='mb-10'>
            <img loading='lazy' className={`drop-shadow-${productData[idxPr].productColor}  2xl:w-[17vw] xl:w-[20vw] lg:w-[20vw] md:w-[30vw] sm:w-[30vw] esm:w-[250px] `} src={`/productimg/${productData[idxPr].productImg}`} />
          </div>
          <div className='w-full ml-5'>
            <button onClick={(e) => { 
              pDefault(e);
              addToCart(idxPr); }}
           className='flex gap-2 border border-solid items-center mb-5 rounded-full bg-transparent font-bold  trnasition-all duration-300 outline-none  hover:bg-black 2xl:p-4 2xl:mt-10 xl:p-2 xl:mx-5 xl:mt-0 lg:p-2 lg:mt-0 lg:mx-2 md:p-3 md:mx-0 md:mt-5 sm:p-2 sm:mt-2 sm:mx-0 esm:mt-[300px] esm:p-3.5'>
              <p className='text-xl text-center ml-2'>Add to Cart</p>
              <div className='flex items-center justify-center w-[24px] h-[24px]'>
                <h1 className='text-xl'>+</h1>
              </div>
            </button>
          </div>
        </div>
        <div className='flex items-end 2xl:relative 2xl:left-0 2xl:top-0 2xl:w-[8%] 2xl:h-[55%] xl:relative xl:left-0 xl:top-0 xl:w-[8%] xl:h-[55%] lg:relative lg:top-0 lg:left-0 lg:w-[8%] lg:h-[55%] md:absolute md:left-[75%] md:top-[80%] md:w-full md:h-20 sm:absolute sm:top-[75%] sm:left-[75%] sm:h-20 sm:w-full esm:absolute esm:w-full esm:h-20 esm:top-[621px] esm:left-[10%]'>
         <div className='w-full'>
            <p className='2xl:text-[1.2rem] 2xl:my-0 xl:text-[1rem] xl:my-0 lg:text-[1rem] lg:my-1 md:text-[1rem] md:my-1 sm:text-[1rem] sm:my-1 esm:text-[1rem] esm:my-0 2xl:block xl:block lg:block md:block sm:block esm:hidden'>Details :</p>
            <h1 className={`2xl:text-2xl 2xl:my-2 xl:text-[1.4rem] xl:my-2 lg:text-[1.2rem] lg:my-1 md:text-[1.3rem] sm:text-[1.3rem] esm:text-[1.2rem]`}>Rs: {productData[idxPr].productPrice - productData[idxPr].productSale} <p className='line-through text-gray-300'>Was: {productData[idxPr].productPrice}</p></h1>
            <p className='2xl:text-[1rem] 2xl:my-0 xl:text-[1rem] xl:my-0 lg:text-[0.9rem] lg:my-0 md:text-[0.9rem] md:my-1 sm:text-[0.9rem] sm:my-1 esm:text-[0.8rem] esm:my-1 '>{productData[idxPr].productSize}</p>
            <div className=' flex items-center gap-3 2xl:mt-10 xl:mt-10 lg:mt-5 lg:gap-2 md:gap-2 md:mt-3 sm:gap-2 sm:mt-3 esm:mt-2 esm:gap-4'>
              <button onClick={(e)=>{changeIdx('prev'); pDefault(e);}} className='border border-solid rounded-xl transition-all duration-300 hover:bg-[rgba(0,0,0,0.3)] 2xl:p-1 xl:p-1 lg:p-0.5 md:p-0.8 sm:p-0.8 esm:p-1 2xl:block xl:block lg:block md:block sm:block esm:hidden'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7L10 12L15 17" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <button onClick={(e)=>{changeIdx('next'); pDefault(e);}} className='border border-solid rounded-xl transition-all duration-300 hover:bg-[rgba(0,0,0,0.3)] 2xl:p-1 xl:p-1 lg:p-0.5 md:p-0.8 sm:p-0.8 esm:p-1 2xl:block xl:block lg:block md:block sm:block esm:hidden'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L15 12L10 17" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Home