import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

import {productData,countryCity} from '../data/Data';
import Header from '../components/Header';


function ProductPage() {

  const {id}=useParams();

  let [shSmNav,setShSmNav]=useState(false);
  let [isForm,setIsForm]=useState(false)

  const smNav=()=>{
    setShSmNav(!shSmNav);
  }

  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }

  return (
    <main className='bg-img w-full h-[100vh] overflow-x-hidden'>
        <div className='w-full mx-auto fl:container text-white'>
            <Header smNav={smNav}/>
            <Productrender setIsForm={setIsForm} isForm={isForm} id={id}/>
            {isForm?<Userform/>:null}



          {shSmNav?
            <div onClick={smNav} className='w-full h-[85vh] absolute top-[120px] flex justify-end bg-black bg-opacity-30 backdrop-blur-md overflow-y-hidden'>
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
)}




// Product component
function Productrender({id,setIsForm,isForm}){

  let [desDropdown,setDesDropdown]=useState(false);
  let [noteDropdown,setNoteDropdown]=useState(false);


  const handleResize=()=>{
    window.innerWidth>1279? setDesDropdown(true) : setDesDropdown(false);
    window.innerWidth>1279? setNoteDropdown(true) : setNoteDropdown(false);

  }

  
  useEffect(()=>{
    handleResize();
    window.addEventListener('resize',handleResize);
    return()=>{
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  return(

    <main className='w-full flex bg-black bg-opacity-30 backdrop-blur-md flex-wrap'>

      <section className='2xl:w-[25%] 2xl:flex-col 2xl:m-20 2xl:mt-4 2xl:gap-2  xl:w-[25%] xl:flex-col xl:mt-4 xl:m-20 xl:gap-0  lg:w-full lg:flex-row lg:items-center md:w-full md:flex-row md:items-center  sm:w-full sm:flex-row sm:items-center ems:w-full esm:flex-col esm:gap-4 esm:mx-auto flex'>
        <img className='2xl:w-full xl:w-full lg:w-[350px] h-[400px] lg:m-10 md:m-10 sm:m-5 esm:w-[250px]' src={`/productimg/${productData[id].productImg}`}/>
        <div className='2xl:flex 2xl:gap-0 xl:flex xl:gap-0 lg:flex lg:flex-col lg:gap-1 md:gap-1 md:flex-col sm:gap-1 esm:flex esm:flex-col esm:gap-2 left-[-50px]'>
          <h1 className='2xl:text-[3rem] xl:text-[2.5rem] lg:text-[3rem] md:text-[3rem] sm:text-[2.5rem] esm:text-[2.4rem]'>{productData[id].productName}</h1>
          <h2 className='2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[2rem] md:text-[2rem] sm:text-[1.5rem] esm:text-[1.4rem]'>{productData[id].productTagline}</h2>
          <h3 className='2xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[2rem] sm:text-[1.5rem] esm:text-[1.4rem]'>Rs :{productData[id].productPrice}</h3>
          <p className=' text-[rgba(255,255,255,0.7)] '>{productData[id].productSize}</p>
          <p  className=' text-[rgba(255,255,255,0.9)] 2xl:text-[1.3rem] xl:text-[1.2rem] lg:text-[1rem] md:text-[1rem] sm:text-[1rem] esm:text-[1rem]'>{productData[id].productStatus}</p>
          <div className='flex flex-row  gap-5 mt-5'>
            <button className='flex items-center  border border-solid  2xl:gap-2 2xl:text-[1.2rem] 2xl:p-3 xl:p-3 xl:gap-1 xl:text-[1rem] lg:text-[1.2rem] lg:gap-2 lg:p-3 md:text-[1.2rem] md:gap-2 md:p-3 sm:text-[1.1rem] sm:gap-2 sm:p-3 esm:text-[1rem] esm:gap-1 esm:p-3 rounded-2xl transition-colors duration-300 hover:bg-[#461111]'>Add to Cart <p>+</p></button>
            <button onClick={()=>setIsForm(!isForm)} className='flex items-center  border border-solid  2xl:gap-2 2xl:text-[1.2rem] 2xl:p-3 xl:p-3 xl:gap-2 xl:text-[1rem] lg:text-[1.2rem] lg:gap-2 lg:p-3 md:text-[1.2rem] md:gap-2 md:p-3 sm:text-[1.1rem] sm:gap-2 sm:p-3 esm:text-[1rem] esm:gap-1 esm:p-3 rounded-2xl transition-colors duration-300 bg-[#461111]   hover:bg-white hover:text-[rgba(0,0,0,0.6)]'>Buy Now <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#f4f4f4" strokeWidth="1.5" fill="#f4f4f4"/><path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#c4c4c4" strokeWidth="1.5" fill="#000000"/><path d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z" fill="#c4c4c4"/></svg></button>
          </div>
        </div>
      </section>

      <div className='2xl:w-[1px] xl:w-[1px] lg:[0px] h-[75vh] bg-white '></div>

      <section className='2xl:w-[62%] xl:w-[62%] lg:w-full p-3'>
        <div onClick={()=>setDesDropdown(!desDropdown)} className={`m-5 p-5 border border-[rgba(255,255,255,0.4)] rounded-2xl overflow-hidden transition-all duration-200 ${desDropdown? '2xl:h-[260px] xl:h-[280px] lg:h-[240px] md:h-[280px] sm:h-[300px] esm:h-[450px] ': 'h-[60px]'} cursor-pointer`}>
          <button className='flex gap-3 mb-2' onClick={()=>setDesDropdown(!desDropdown)}>Description {desDropdown?<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#f4f4f4"/></svg>:<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#f4f4f4"/></svg>} </button>
          <h1 className='text-[2.2rem] my-2'>Description : </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti atque aliquid ducimus eum sunt? Excepturi accusantium numquam sunt? Ea placeat nam magni perspiciatis libero quaerat molestias earum corrupti aliquam nobis velit architecto, odio dolor, beatae officia sapiente dolore maxime quo quia eum tempora eveniet praesentium. Nostrum ad sunt ut ex nobis incidunt doloremque, iure nisi ipsa dignissimos a culpa inventore illo error iusto tempore facilis dolore corrupti veniam qui atque officiis! Fugit, praesentium quis.</p>
        </div>
        <div  onClick={()=>setNoteDropdown(!noteDropdown)} className={`m-5 p-5 border border-[rgba(255,255,255,0.4)]  rounded-2xl overflow-hidden transition-all duration-200 ${noteDropdown? '2xl:h-[500px] xl:h-[550px] lg:h-[500px] md:h-[500px] sm:h-[580px] esm:h-[750px] ': 'h-[60px]'} cursor-pointer`}>
        <button className='flex gap-3 mb-2' onClick={()=>setNoteDropdown(!noteDropdown)}>Instructions {noteDropdown?<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#f4f4f4"/></svg>:<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#f4f4f4"/></svg>} </button>
          <h1 className='text-[2.2rem]'>Instructions : </h1>
          <section className='m-5'>
            <div className='my-8'>
              <h1 className='my-1 text-[1.1rem]'>Keep it in a Cool and Dark Place:</h1>
              <p>Perfume is sensitive to light and temperature. Exposure to light and heat can alter its composition and fragrance. Store your perfume in a cool, dark place, away from direct sunlight.</p>
            </div>
            <div className='my-8 text-[1.1rem]'>
              <h1 className='my-1'>Avoid Extreme Temperatures:</h1>
              <p>Extreme temperatures can also affect the chemical composition of the perfume. Avoid storing it in places where temperatures fluctuate dramatically, such as near windows or heaters.</p>
            </div>
            <div className='my-8 text-[1.1rem]'>
              <h1 className='my-1'>Avoid Humidity:</h1>
              <p>Humidity can degrade the quality of perfume. Keep it away from humid environments, such as bathrooms.</p>
            </div>
          </section>
        </div>
      </section>

    </main>
  )
}



// Buy User Input Form

function Userform(){

  let [selectedProvince,setSelectedProvince]=useState('punjab');
  let [city,setCity]=useState(countryCity[selectedProvince]);

  const handleProvinceChange=(e)=>{
    const newProvince=e.target.value;
    setSelectedProvince(newProvince);
    setCity(countryCity[newProvince]);
  }
  
  return(
    <section className='w-full  bg-black bg-opacity-30 backdrop-blur-md p-10'>
      <form className='border border-[rgba(255,255,255,0.2)] p-10 rounded-2xl flex flex-col gap-10'>
        <h1 className='text-center 2xl:text-[3rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] esm:text-[2rem]'>Enter Your Details</h1>
        <hr className='w-[80%] mx-auto'/>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Name :</label>
          <input type='text' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-[80%] bg-transparent border border-solid rounded-lg p-2 placeholder:text-[rgba(255,255,255,0.5)] outline-none' placeholder='Enter Your Name'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Phone :</label>
          <input type='tel' required className='2xl:w-[30%] xl:w-[30%]  w-[85%] bg-transparent border border-solid rounded-lg p-2 placeholder:text-[rgba(255,255,255,0.5)] outline-none' placeholder='03001112233'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Email :</label>
          <input type='email' required className='2xl:w-[40%] xl:w-[40%] lg:w-[65%] sm:w-[75%] esm:w-[80%] bg-transparent border border-solid rounded-lg p-2 placeholder:text-[rgba(255,255,255,0.5)] outline-none' placeholder='abc@gmail.com'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Province :</label>
          <select value={selectedProvince} onChange={handleProvinceChange}  name='province' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-[80%]  bg-black border border-solid rounded-lg p-2 placeholder:text-[rgba(255,255,255,0.5)] outline-none cursor-pointer text-white '>
            <option value='punjab'>Punjab</option>
            <option value='sindh'>Sindh</option>
            <option value='kpk'>Khyber Pakhtunkhwa (KPK)</option>
            <option value='balochistan'>Balochistan</option>
            {/* <option value='gilgit'>Gilgit-Baltistan / Kashmir</option> */}
          </select>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>City :</label>
          <div className='w-[80%] flex flex-col gap-y-2'>
            <select required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[75%] sm:w-[75%] esm:w-[75%] bg-black border border-solid rounded-lg p-2 placeholder:text-[rgba(255,255,255,0.5)] outline-none cursor-pointer text-white '>
              {
                city.map((c)=>{
                  return(
                    <option key={c.value} value={c.value}>{c.value}</option>
                  )
                })
              }
             </select> 
             <p className='text-red-500 text-sm'>Cities of {selectedProvince.toUpperCase()} (changing in  province changes listed cities)</p>
          </div>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Address :</label>
          <input type='text' required className='2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[80%] sm:w-[80%] esm:w-[80%] bg-transparent border border-solid rounded-lg p-2 pb-20 placeholder:text-[rgba(255,255,255,0.5)] outline-none' placeholder='Enter you detailed address'/>
        </div>
        <div className='w-full h-[100px] flex items-center justify-center'>
          <button className='p-3 px-5 border border-solid rounded-2xl text-[1.5rem] bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white'>Place Order</button>
        </div>
      </form>
    </section>
  )}

export default ProductPage