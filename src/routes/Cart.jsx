import React, { useEffect,  useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';



function Cart({cartData,removeCart}) {
  let [shSmNav,setShSmNav]=useState(false);
  const smNav=()=>{
    setShSmNav(!shSmNav);
  }
  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }
  const pDefault=(e)=>{
    e.preventDefault();
  }
  return (
    <main className=' w-full h-[100vh] overflow-x-hidden'>
      <div className='w-full mx-auto fl:container'>
        <Header cartData={cartData} smNav={smNav}/>
        {cartData.length==0?
        <><p className='text-center text-2xl mt-20 font-bold'>You did not carted any item</p><p className='text-center pt-2 text-lg'>Start Carting ? </p></>: <CartProduct pDefault={pDefault} removeCart={removeCart} cartData={cartData}/> }
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
  )
}

function CartProduct({cartData,removeCart,pDefault}){


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

  const productList = cartData.map((c, i) => {
    return (
      <Link to={`/product/${i}`} key={c.productId}>
        <section
          ref={(el) => (productRefs.current[i] = el)} 
          data-index={i} 
          className={`flex flex-col justify-center gap-y-5 hover:scale-101 hover:shadow-[rgba(0,0,0,0.6)] hover:shadow-2xl cursor-pointer product-font opacity-0 transition-opacity duration-700 ease-in-out`}
        >
          <div className='p-4'>
            <img
              loading='lazy'
              className='w-full h-full'
              src={`/productimg/${c.productImg}`}
            />
          </div>
          <div className='w-full pl-2'>
            <h1 className='text-xl'>{c.productName}</h1>
            <div className='flex items-center w-full my-1 gap-2 flex-wrap'>
              <span className='p-1.5 text-lg bg-red-500 text-white'>20% OFF</span>
              <h1 className='text-xl text-red-600 font-bold'>
                PKR {c.productPrice-200}
              </h1>
              <h1 className='text-xl line-through text-[rgba(0,0,0,0.4)] font-bold'>
                PKR {c.productPrice}
              </h1>
            </div>
            <div className='flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center esm:justify-center pr-2'>
              <button onClick={(e) => { 
              pDefault(e);
              removeCart(i);}} className='my-2 p-2.5 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-full sm:w-full esm:w-full font-semibold border border-black transition-all duration-300 hover:bg-black hover:text-white'>
                Remove ?
              </button>
            </div>
          </div>
        </section>
      </Link>
    );
  });
  return(
    <section className='w-full border border-solid p-10 shadow-2xl mt-10 rounded-2xl'>
      <div className='w-full h-20 mb-[100px]'>
        <h1 className='text-center text-[3.5rem] text-[rgba(0,0,0,0.8)] py-2'>
          Products
        </h1>
      </div>
      <div className='w-full flex flex-wrap justify-around px-[5%] gap-y-10'>
        {productList}
      </div>
  </section>
  )
}

export default Cart