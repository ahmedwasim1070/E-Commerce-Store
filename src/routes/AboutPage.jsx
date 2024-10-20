import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import About from '../components/About';

function AboutPage({cartData}) {
  let [shSmNav,setShSmNav]=useState(false);
  const smNav=()=>{
    setShSmNav(!shSmNav);
  }
  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }
  return (
      <main className=' w-full h-[100vh] overflow-x-hidden'>
        <Helmet>
          <title>Crush | About-Us</title>
          <meta name="keywords" content="Crush Fragrance About Us, Crush Perfumes About Us , Crush Fragrance About , Crush Perfume About " />
          <meta name="description" content="Love at Frist Scent > Check-out our Premium Fragrances Now"/>
        </Helmet>
        <div className='w-full mx-auto fl:container'>
            <Header cartData={cartData} smNav={smNav}/>
            <About/>
            
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

export default AboutPage