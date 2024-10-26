import React, { useEffect,  useRef } from 'react';
import '../index.css';
import { productData } from '../data/Data';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Product({addToCart}) {
  const productRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            entry.target.style.animationDelay = `${index * 0.3}s`; 
            entry.target.classList.add('fade-in'); 
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    productRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const pDefault=(e)=>{
    e.preventDefault();
  }


  const productList = productData.map((c, i) => {


    return (
      <Link to={`/product/${i}`} key={c.productId}>
        <section
          ref={(el) => (productRefs.current[i] = el)} 
          data-index={i} 
          className={`flex flex-col justify-center gap-y-5 hover:scale-105  hover:shadow-[rgba(0,0,0,0.6)] hover:shadow-2xl cursor-pointer product-font opacity-0 transition-opacity duration-700 ease-in-out`}
        >
          <div className='p-4'>
            <img
              loading='lazy'
              className='w-full h-full'
              alt='Product-Images'
              src={`/productimg/${c.productImg}`}
            />
          </div>
          <div className='w-full pl-2'>
            <h1 className='text-xl'>{c.productName}</h1>
            <div className='flex items-center w-full my-1 gap-2 flex-wrap'>
              <span className='p-1.5 text-lg bg-red-600 text-white'>20% OFF</span>
              <h1 className='text-xl text-black font-bold'>
                PKR {c.productPrice - c.productSale}
              </h1>
              <h1 className='text-xl line-through text-[rgba(0,0,0,0.4)] font-bold'>
                PKR {c.productPrice}
              </h1>
            </div>
            <div className='flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center esm:justify-center pr-2'>
            <button type='button' onClick={(e) => { 
              pDefault(e);
              addToCart(i); }}
              className='my-2 p-2.5 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-full sm:w-full esm:w-full font-semibold border border-black transition-all duration-300 hover:bg-black hover:text-white'>                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </Link>
    );
  });

  return (
    <>
      <section className='w-full border border-solid p-10 shadow-2xl mt-10 rounded-2xl'>
        <ToastContainer />
        <div className='w-full h-20 mb-[100px]'>
          <h1 className='text-center text-[3.5rem] text-[rgba(0,0,0,0.8)] py-2'>
            Products
          </h1>
        </div>
        <div className='w-full flex flex-wrap justify-around px-[5%] gap-y-10'>
          {productList}
        </div>
      </section>
    </>
  );
}

export default Product;
