import React ,{useRef, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import '../index.css';

import {productData,countryCity} from '../data/Data';
import Header from '../components/Header';


function ProductPage() {

  const {id}=useParams();

  let [shSmNav,setShSmNav]=useState(false);
  let [isForm,setIsForm]=useState(false);
  const formRef=useRef(null);

  const smNav=()=>{
    setShSmNav(!shSmNav);
  }

  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }

    const viewForm=()=>{
      setIsForm(true);
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

  return (
    <main className='bg-img w-full h-[100vh] overflow-x-hidden'>
        <div className='w-full mx-auto fl:container text-white'>
              <Header  smNav={smNav}/>
              <Productrender  viewForm={viewForm} id={id}/>
              {isForm&&<Userform formRef={formRef} />}



          {shSmNav?
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
          :
          ''
          }
        </div>
    </main>
)}




// Product component
function Productrender({id,viewForm}){

  let [desDrop,setDesDrop]=useState(false)
  let [noteDrop,setNoteDrop]=useState(false)
  let [revDropdown,setRevDropdown]=useState(false)

  return(

    <main className='w-full'>
      <section className='w-full h-full flex pt-20 text-black  gap-x-10 gap-y-10 flex-wrap 2xl:justify-center xl:justify-center lg:justify-center md:justify-start sm:justify-start esm:justify-start'>
        <div className={`w-[350px] h-[550px] p-5 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto esm:mx-auto ${productData[id].productBg}`}>
          <img className='mx-auto' loading='lazy' alt={`${productData[id].productName}`} src={`/productimg/${productData[id].productImg}`}/>
        </div>
        <section className='2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[50%] sm:w-[100%] h-full ml-10 flex flex-col gap-y-4'>
          <div className='flex gap-y-1 flex-col'>
            <h1 className='text-[2rem]'>{productData[id].productName}</h1>
            <p className='text-2xl text-[rgba(0,0,0,0.6)]'>{productData[id].productTagline}</p>
            <p className='text-lg text-[rgba(0,0,0,0.6)]'>{productData[id].productStatus}</p>
            <p className='underline py-1'>Be the first to Review.</p>
            <div className='flex gap-8 flex-wrap'>
              <h2 className='text-4xl'>PKR, {productData[id].productPrice-productData[id].productSale}</h2>
              <h2 className='text-4xl text-[rgba(0,0,0,0.4)] line-through'>PKR,{productData[id].productPrice}</h2>
            </div>
          </div>
          <hr className='border-[rgba(0,0,0,0.3)] 2xl:w-auto xl:w-auto lg:w-auto md:w-[100%] sm:w-[70%] esm:w-[70%]'/>
          <div>
            <button onClick={viewForm} className='w-[60%] border-2 border-[rgba(0,0,0,0.9)] p-3 rounded-sm text-lg transition-all duration-300 hover:bg-black my-4 hover:text-white outline-none'>Buy Now &gt;&gt;</button>
          </div>
          <div className='flex items-center gap-2'>
            <h1 className='text-lg font-bold'>Category: </h1>
            <p>{productData[id].productType}</p>
          </div>
          <div className='flex flex-col gap-y-1 flex-wrap'>
            <h1 className='text-lg font-bold'>Main Accords : </h1>
            <p className='text-lg font-bold text-[rgba(0,0,0,0.5)]'>Inspired By {productData[id].productIns}</p>
            <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[85%] esm:w-[95%]'>
              <p className='text-wrap text-md text-[rgba(0,0,0,0.8)]'>{productData[id].productAccords}</p>
            </div>
          </div>
          <div className='flex gap-1 items-center'>
            <h1 className='text-lg font-bold'>Size :</h1>
            <p className='text-[rgba(0,0,0,0.8)] '>{productData[id].productSize}</p>
          </div>
        </section>
        <section className='w-full'>
           <hr className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[85%] sm:w-[85%] esm:w-[85%] mx-auto border-[rgba(0,0,0,0.3)]'/>
            <div onClick={()=>{setDesDrop(!desDrop)}} className={`w-[80%] my-2 text-lg overflow-hidden mx-auto  cursor-pointer  ${desDrop? 'max-h-[2000px]': 'h-8'} 2xl:px-20 xl:px-20 lg:px-14 md:px-2 sm:px-1 esm:px-0`}>
              <h1 className='w-full px-2 flex gap-4 items-center justify-between font-bold'>Description {desDrop? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/></svg>   : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/></svg>} </h1>
              <div className='p-5 '>
                <h1 className='text-2xl font-semibold'>{productData[id].productName} by Crush Fragrances : </h1>
                <div className='p-5'>
                  <p dangerouslySetInnerHTML={{ __html: productData[id].productDes }} className='text-sm' ></p>
                </div>
              </div>
            </div>
            <hr className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[85%] sm:w-[85%] esm:w-[85%] mx-auto border-[rgba(0,0,0,0.3)]'/>
            <div onClick={()=>{setNoteDrop(!noteDrop)}} className={`w-[80%] my-2 text-lg mx-auto px-20 overflow-hidden cursor-pointer ${noteDrop? 'max-h-[1000px]' : 'h-8' }  2xl:px-20 xl:px-20 lg:px-14 md:px-2 sm:px-1 esm:px-0`}>
              <h1 className='w-full px-2 flex gap-4 items-center justify-between font-bold'>Notes {noteDrop? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/></svg>   : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/></svg>} </h1>
              <div className='p-2'>
                <h1 className='text-2xl font-semibold'>Notes : </h1>
                <div className='p-5 mt-5 w-[90%] h-full flex flex-col gap-y-3  '>
                  <div className='flex flex-nowrap gap-8'>
                    <h1 className='w-[45%] text-nowrap text-end font-bold text-[1rem]'>Top Notes :</h1>
                    <p className='w-[55%] text-[rgba(0,0,0,0.5)] text-sm'>{productData[id].productTNotes}</p>
                  </div>
                  <div className='flex  flex-nowrap gap-8'>
                    <h1 className='w-[45%] text-nowrap text-end font-bold text-[1rem]'>Middle Notes : </h1>
                    <p className='w-[55%]  text-[rgba(0,0,0,0.5)]  text-sm'>{productData[id].productMNotes} </p>
                  </div>
                  <div className='flex flex-nowrap gap-8'>
                    <h1 className='w-[45%] text-nowrap text-end font-bold text-[1rem]'>Base Notes :</h1>
                    <p className='w-[55%] text-[rgba(0,0,0,0.5)]  text-sm'>{productData[id].productBNotes}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[85%] sm:w-[85%] esm:w-[85%] mx-auto border-[rgba(0,0,0,0.3)]'/>
            <div onClick={()=>{setRevDropdown(!revDropdown)}} className={`w-[80%] my-2 text-lg mx-auto px-20 overflow-hidden cursor-pointer  ${revDropdown? 'max-h-[1000px]' : 'h-8' }  2xl:px-20 xl:px-20 lg:px-14 md:px-2 sm:px-1 esm:px-0`}>
              <h1 className='w-full px-2 flex gap-4 items-center justify-between font-bold'>Reviews (0) {noteDrop? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/></svg>   : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/></svg>} </h1>
              <div className='w-full flex justify-end my-5'>
                <button className='bg-black p-3 text-white transition-all duration-300 rounded-md border border-[rgba(0,0,0,0.6)] hover:text-black hover:bg-white'>Write a Review</button>
              </div>
              <div className='w-full'>
                <p className='text-center'>No reviews yet.</p>
              </div>
            </div>
            <hr className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[85%] sm:w-[85%] esm:w-[85%] mx-auto border-[rgba(0,0,0,0.3)]'/>
        </section>
      </section>
    </main>
  )
}



// Buy User Input Form

function Userform({formRef}){

  let [selectedProvince,setSelectedProvince]=useState('punjab');
  let [city,setCity]=useState(countryCity[selectedProvince]);
  let [inputValue,setInputValue]=useState(1)

  const handleProvinceChange=(e)=>{
    const newProvince=e.target.value;
    setSelectedProvince(newProvince);
    setCity(countryCity[newProvince]);
  }

  const setVal=(e)=>{
    if(e.target.name==='neg'){
      {inputValue>1&&setInputValue(inputValue-1)}
    }else if(e.target.name==='pos'){
      {inputValue<9&&setInputValue(inputValue+1)}
    }
  }
  
  return(
    <section className='w-full p-10'>
      <form ref={formRef} className='border border-solid shadow-2xl p-10 my-10 rounded-2xl flex flex-col gap-10 text-black'>
        <h1 className='text-center 2xl:text-[3rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] esm:text-[2rem]'>Enter Your Details</h1>
        <hr className='w-[80%] mx-auto'/>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Name :</label>
          <input type='text' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-[80%] bg-transparent border border-[rgba(0,0,0,0.6)] rounded-lg p-2  outline-none' placeholder='Enter Your Name'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Phone :</label>
          <input type='tel' required className='2xl:w-[30%] xl:w-[30%]  w-[85%] bg-transparent border border-[rgba(0,0,0,0.6)] rounded-lg p-2  outline-none' placeholder='03001112233'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Email :</label>
          <input type='email' required className='2xl:w-[40%] xl:w-[40%] lg:w-[65%] sm:w-[75%] esm:w-[80%] bg-transparent border border-[rgba(0,0,0,0.6)] rounded-lg p-2  outline-none' placeholder='abc@gmail.com'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Province :</label>
          <select value={selectedProvince} onChange={handleProvinceChange}  name='province' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-[80%]  border border-[rgba(0,0,0,0.6)] rounded-lg p-2  outline-none cursor-pointer bg-white '>
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
            <select required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[75%] sm:w-[75%] esm:w-[75%]  border border-[rgba(0,0,0,0.6)] rounded-lg p-2  outline-none cursor-pointer bg-white '>
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
          <input type='text' required className='2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[80%] sm:w-[80%] esm:w-[80%] bg-transparent border border-[rgba(0,0,0,0.6)] rounded-lg p-2 pb-20  outline-none' placeholder='Enter you detailed address'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-[1.3rem]'>Quantity :</label>
          <div className='flex items-center'>
            <button name='neg' onClick={setVal} type='button' className='px-3 border border-solid text-[1.1rem] bg-black text-white  '>-</button>
            <input value={inputValue} min='1' className='w-[40px] bg-transparent border border-solid outline-none px-3 border-[rgba(0,0,0,0.6)] text-[1rem] cursor-default' required  readOnly/>
            <button name='pos' onClick={setVal} type='button' className='px-3 border border-solid text-[1.1rem] bg-black text-white  '>+</button>
          </div>
        </div>
        <div className='w-full h-[100px] flex items-center justify-center'>
          <button className='p-3 px-5 border border-[rgba(0,0,0,0.6)] rounded-2xl text-[1.5rem] bg-black text-white transition-all duration-300 hover:bg-transparent hover:text-black'>Place Order</button>
        </div>
      </form>
    </section>
  )
};



export default ProductPage

