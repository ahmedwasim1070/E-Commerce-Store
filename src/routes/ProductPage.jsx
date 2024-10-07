import React ,{useRef, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import '../index.css';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {productData,countryCity} from '../data/Data';
import Header from '../components/Header';


function ProductPage({cartData}) {

  const {id}=useParams();

  let [shSmNav,setShSmNav]=useState(false);
  let [isForm,setIsForm]=useState(false);
  let [statusColor,setStatusColor]=useState(false)
  const formRef=useRef(null);

  const smNav=()=>{
    setShSmNav(!shSmNav);
  }

  const smNavClick=(event)=>{
    event.stopPropagation(); 
  }

    const viewForm=()=>{
      if(productData[id].productStatus==='In-Stock'){
        setIsForm(true);
        setTimeout(() => {
          formRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }else{
        setStatusColor(true)
      }
    }

  return (
    <main className='bg-img w-full h-[100vh] overflow-x-hidden'>
        <div className='w-full mx-auto fl:container text-white'>
              <Header cartData={cartData} smNav={smNav}/>
              <Productrender statusColor={statusColor}  viewForm={viewForm} id={id}/>
              {isForm&&<Userform id={id} formRef={formRef} />}



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
function Productrender({id,viewForm,statusColor}){

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
            <p className={`text-lg text-[rgba(0,0,0,0.6)] ${statusColor&& 'text-red-800 horizontal-shake' }`}>{productData[id].productStatus}</p>
            <p className='underline py-1'>Be the first to Review.</p>
            <div className='flex gap-8 flex-wrap'>
              <h2 className='text-4xl'>PKR, {productData[id].productPrice-productData[id].productSale}</h2>
              <h2 className='text-4xl text-[rgba(0,0,0,0.4)] line-through'>PKR,{productData[id].productPrice}</h2>
            </div>
          </div>
          <hr className='border-[rgba(0,0,0,0.3)] 2xl:w-auto xl:w-auto lg:w-auto md:w-[100%] sm:w-[70%] esm:w-[70%]'/>
          <div>
            <button onClick={viewForm} className={`w-[60%] border-2  p-3 rounded-sm text-lg transition-all duration-300 hover:bg-black my-4 hover:text-white outline-none horizontal-shake  ${statusColor? 'border-red-800 horizontal-shake text-red-800': 'border-[rgba(0,0,0,0.9)] text-black'}`}>Buy Now &gt;&gt;</button>
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
            <div onClick={()=>{setRevDropdown(!revDropdown)}} className={`w-[80%] my-2 text-lg mx-auto px-20 overflow-hidden cursor-pointer  ${revDropdown? 'max-h-[2000px]' : 'h-8' }  2xl:px-20 xl:px-20 lg:px-14 md:px-2 sm:px-1 esm:px-0`}>
              <h1 className='w-full px-2 flex gap-4 items-center justify-between font-bold'>Reviews (0) {noteDrop? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/></svg>   : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/></svg>} </h1>
              <div className='w-full flex justify-end my-5'>
                <button className='bg-black p-3 text-white transition-all duration-300 rounded-md outline-none border border-[rgba(0,0,0,0.6)] hover:text-black hover:bg-white'>Write a Review</button>
              </div>
              <div className='w-full  p-5 flex items-center justify-center mb-20 '>
                <div className='w-[50%] p-10 flex flex-col gap-y-5 border border-solid shadow-2xl  rounded-xl '>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <label>Email : </label>
                    <input name='email' type='email' required className=' w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450 outline-none' placeholder='Email'/>
                  </div>
                  <div className='flex items-center gap-1 flex-wrap'>
                    <label>Review : </label>
                    <textarea    name='review'  required   className='w-full h-24 bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-500 outline-none resize-none'  placeholder='Enter your detailed Address'/>
                  </div>
                </div>
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

function Userform({formRef,id}){

  const [selectedProvince, setSelectedProvince] = useState('punjab');
  const [city, setCity] = useState(countryCity[selectedProvince]);
  const [inputValue, setInputValue] = useState(1);
  const [productTotal,setProductTotal]=useState(Number(productData[id].productPrice)-Number(productData[id].productSale));
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    province: selectedProvince,
    city: city[0]?.value,
    address: '',
    quantity: 1,
    productData: productData[id].productName,
  });

  const handleProvinceChange = (e) => {
    const newProvince = e.target.value;
    setSelectedProvince(newProvince);
    setCity(countryCity[newProvince]);
    setFormData({ ...formData, province: newProvince, city: countryCity[newProvince][0]?.value });
  };

  const setVal = (e) => {
    if (e.target.name === 'neg') {
      if (inputValue > 1) {
        const newValue = inputValue - 1;
        setFormData({...formData,quantity: newValue})
        setInputValue(newValue);
        setProductTotal(productTotal - Number(productData[id].productPrice - productData[id].productSale));
      }
    } else if (e.target.name === 'pos') {
      if (inputValue < 6) {
        const newValue = inputValue + 1;
        setFormData({...formData,quantity: newValue})
        setInputValue(newValue);
        setProductTotal(productTotal + Number(productData[id].productPrice - productData[id].productSale));
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_vg57kot', 'template_rjxgysl', formData, 'Fjy-fcxiwoKe8eMct')
      .then((response) => {
        toast.success('Order Placed successfully!'); 
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            province: selectedProvince,
            city: city[0]?.value,
            address: '',
            quantity: 1,
            productData: productData[id].productName,
          });
          setInputValue(1);
          setLoading(false); // Reset loading state
        }, 300);
        })
      .catch((err) => {
        toast.error('Failed ! Try Again Later'); 
        setLoading(false);
      });

  };
  
  return(
    <section ref={formRef} className='w-full p-10 relative'>
      <form onSubmit={handleSubmit}  className='border border-solid shadow-2xl p-10 my-10 rounded-2xl flex flex-col gap-10 text-black'>
        <ToastContainer />
        <h1 className='text-center 2xl:text-[3rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] esm:text-[2rem]'>Enter Your Details</h1>
        <hr className='w-[80%] mx-auto border-[rgba(0,0,0,0.3)]'/>
        <div className='flex items-center gap-5 flex-wrap mt-5'>
          <input value={formData.name} onChange={handleChange} name='name' type='text' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450  outline-none' placeholder='Full Name'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <input value={formData.phone} onChange={handleChange} name='phone' type='tel' required className='2xl:w-[30%] xl:w-[30%]  lg:w-[85%] md:w-[85%] sm:w-[85%] esm:w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450 outline-none' placeholder='Phone '/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <input value={formData.email} onChange={handleChange} name='email' type='email' required className='2xl:w-[40%] xl:w-[40%] lg:w-[65%] sm:w-[75%] esm:w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450 outline-none' placeholder='Email'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-lg text-[rgba(0,0,0,0.7)]'>Province :</label>
          <select value={formData.province} onChange={handleProvinceChange}  name='province'  required className=' 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-full  border border-[rgba(0,0,0,0.6)] rounded-md p-2.5  outline-none cursor-pointer bg-white text-gray-500 '>
            <option value='punjab'>Punjab</option>
            <option value='sindh'>Sindh</option>
            <option value='kpk'>Khyber Pakhtunkhwa (KPK)</option>
            <option value='balochistan'>Balochistan</option>
            {/* <option value='gilgit'>Gilgit-Baltistan / Kashmir</option> */}
          </select>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-lg text-[rgba(0,0,0,0.7)]'>Cities of {formData.province.charAt(0).toUpperCase() + formData.province.slice(1)} :</label>
            <select value={formData.city} onChange={handleChange} name='city'  required className=' 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[80%] esm:w-full  border border-[rgba(0,0,0,0.6)] rounded-md p-2.5  outline-none cursor-pointer bg-white text-gray-500  '>
              {
                city.map((c)=>{
                  return(
                    <option key={c.value} value={c.value}>{c.value}</option>
                  )
                })
              }
             </select> 
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='text-lg text-[rgba(0,0,0,0.7)] '>Quantity :</label>
          <div className='flex items-center overflow-hidden'>
            <button name='neg' onClick={setVal} type='button' className='px-3 rounded-sm bg-black text-white text-lg  '>-</button>
            <input name='quantity' value={inputValue} min='1' className='w-[40px] bg-transparent border border-solid outline-none px-3 border-[rgba(0,0,0,0.6)] text-gray-500 rounded-sm  cursor-default' required  readOnly/>
            <button name='pos' onClick={setVal} type='button' className='px-3 rounded-sm bg-black text-white text-lg '>+</button>
          </div>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <textarea  value={formData.address} onChange={handleChange}  name='address'  required   className='2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[80%] sm:w-[80%] esm:w-full h-40 bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-500 outline-none resize-none'  placeholder='Enter your detailed Address'/>
        </div>
        <button type='button' className='py-5 px-3 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-full sm:w-full esm:w-full border border-black rounded-lg cursor-default outline-none'>
          <div className='flex items-center justify-center gap-x-3 flex-nowrap'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.48334 5.25942C6.33891 5.38732 5.42286 6.29057 5.29045 7.42268C4.93476 10.4638 4.93476 13.5361 5.29045 16.5772C5.42286 17.7093 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7093 18.7095 16.5772C18.9651 14.3921 19.037 12.1909 18.9253 9.99668C18.9224 9.94002 18.9436 9.88475 18.9837 9.84463L20.0225 8.80585C20.1427 8.68562 20.3482 8.7608 20.3609 8.93036C20.557 11.5353 20.5031 14.1543 20.1994 16.7515C19.9845 18.5884 18.5096 20.0271 16.6832 20.2312C13.5957 20.5763 10.4043 20.5763 7.31673 20.2312C5.49035 20.0271 4.01545 18.5884 3.8006 16.7515C3.43137 13.5945 3.43137 10.4053 3.8006 7.24843C4.01545 5.41146 5.49035 3.97282 7.31673 3.7687C10.4043 3.42362 13.5957 3.42362 16.6832 3.7687C17.3265 3.84059 17.9261 4.06562 18.4425 4.40725C18.5441 4.47448 18.5542 4.61732 18.468 4.70346L17.6652 5.50635C17.5995 5.57202 17.4976 5.58307 17.4158 5.5392C17.1423 5.39271 16.8385 5.29539 16.5166 5.25942C13.5398 4.92671 10.4602 4.92671 7.48334 5.25942Z" fill="#000000"/><path d="M21.0303 6.03028C21.3232 5.73738 21.3232 5.26251 21.0303 4.96962C20.7374 4.67672 20.2625 4.67672 19.9696 4.96962L11.5 13.4393L9.0303 10.9696C8.73741 10.6767 8.26253 10.6767 7.96964 10.9696C7.67675 11.2625 7.67675 11.7374 7.96964 12.0303L10.9696 15.0303C11.2625 15.3232 11.7374 15.3232 12.0303 15.0303L21.0303 6.03028Z" fill="#000000"/></svg>
            <p className='font-bold text-nowrap'>Shipping Standard</p>
            <svg  viewBox="0 0 24 24"  fill="#00000"   height="24px" width="24px"  > <path d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-4c0-1.11-.89-2-2-2l-3-4H3m12 1.5h2.5l1.96 2.5H15V8.5m-9 7A1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5 1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5m12 0a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5z" /></svg>
          </div>
          <p className='pt-1 text-sm text-gray-700'>Shipping Fee 200 PKR</p>
        </button>
        <div className=''>
          <h1 className='text-xl font-bold mb-2'>Order Sumary :</h1>
          <div className='my-5'>
            <img className='w-[125px] shadow-2xl p-2 border border-solid rounded-md' loading='lazy' alt={`${productData[id].productName}`} src={`/productimg/${productData[id].productImg}`}/>
          </div>
          <div className='flex gap-x-1 items-center'>
            <h1 className='text-lg font-bold'>Product :</h1>
            <p className='text-[1.2rem] text-gray-600'>{productData[id].productName}</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <h1 className='text-lg font-bold'>Size :</h1>
            <p className='text-[1.2rem] text-gray-600'>{productData[id].productSize}</p>
          </div>
          <div className='flex gap-x-1 items-center'>
            <h1 className='text-lg font-bold'>Quatity x</h1>
            <p className='text-[1.2rem] text-gray-600'> {inputValue} </p>
          </div>
          <div className='flex gap-x-2 items-center'>
            <h1 className='text-lg font-bold'>Total = </h1>
            <p className='text-[1.2rem] text-gray-600'> {productTotal} + {inputValue*200} = {productTotal+inputValue*200} </p>
          </div>
        </div>
        <div className='w-full h-[100px] flex flex-col gap-y-3 items-center justify-center'>
          <button type='submit' className='p-3 px-5 border border-[rgba(0,0,0,0.6)] rounded-2xl text-[1.5rem] bg-black flex items-center gap-x-2 text-white transition-all duration-300 hover:bg-transparent hover:text-black group'>Place Order<svg width="32px" height="32px" className='transition-all duration-300 fill-white group-hover:fill-black' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0303 13.4697C9.73744 13.1768 9.26256 13.1768 8.96967 13.4697C8.67678 13.7626 8.67678 14.2374 8.96967 14.5303L10.0303 13.4697ZM11.5 16L10.9697 16.5303C11.2626 16.8232 11.7374 16.8232 12.0303 16.5303L11.5 16ZM16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697C15.7374 11.1768 15.2626 11.1768 14.9697 11.4697L16.0303 12.5303ZM4.76942 9.13841C4.67576 9.5419 4.92693 9.94492 5.33041 10.0386C5.7339 10.1322 6.13692 9.88107 6.23058 9.47759L4.76942 9.13841ZM6.5 5V4.25C6.15112 4.25 5.84831 4.49057 5.76942 4.83041L6.5 5ZM12.5 5.75C12.9142 5.75 13.25 5.41421 13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25V5.75ZM6.25 9.308C6.25 8.89379 5.91421 8.558 5.5 8.558C5.08579 8.558 4.75 8.89379 4.75 9.308H6.25ZM5.5 19H4.75C4.75 19.4142 5.08579 19.75 5.5 19.75V19ZM19.5 19V19.75C19.9142 19.75 20.25 19.4142 20.25 19H19.5ZM20.25 9.308C20.25 8.89379 19.9142 8.558 19.5 8.558C19.0858 8.558 18.75 8.89379 18.75 9.308H20.25ZM5.5 8.558C5.08579 8.558 4.75 8.89379 4.75 9.308C4.75 9.72221 5.08579 10.058 5.5 10.058V8.558ZM12.5 10.058C12.9142 10.058 13.25 9.72221 13.25 9.308C13.25 8.89379 12.9142 8.558 12.5 8.558V10.058ZM11.75 9.308C11.75 9.72221 12.0858 10.058 12.5 10.058C12.9142 10.058 13.25 9.72221 13.25 9.308H11.75ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM12.5 8.558C12.0858 8.558 11.75 8.89379 11.75 9.308C11.75 9.72221 12.0858 10.058 12.5 10.058V8.558ZM19.5 10.058C19.9142 10.058 20.25 9.72221 20.25 9.308C20.25 8.89379 19.9142 8.558 19.5 8.558V10.058ZM13.25 9.308C13.25 8.89379 12.9142 8.558 12.5 8.558C12.0858 8.558 11.75 8.89379 11.75 9.308H13.25ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75V4.25ZM18.5 5L19.2306 4.83041C19.1517 4.49057 18.8489 4.25 18.5 4.25V5ZM18.7694 9.47759C18.8631 9.88107 19.2661 10.1322 19.6696 10.0386C20.0731 9.94492 20.3242 9.5419 20.2306 9.13841L18.7694 9.47759ZM8.96967 14.5303L10.9697 16.5303L12.0303 15.4697L10.0303 13.4697L8.96967 14.5303ZM12.0303 16.5303L16.0303 12.5303L14.9697 11.4697L10.9697 15.4697L12.0303 16.5303ZM6.23058 9.47759L7.23058 5.16959L5.76942 4.83041L4.76942 9.13841L6.23058 9.47759ZM6.5 5.75H12.5V4.25H6.5V5.75ZM4.75 9.308V19H6.25V9.308H4.75ZM5.5 19.75H19.5V18.25H5.5V19.75ZM20.25 19V9.308H18.75V19H20.25ZM5.5 10.058H12.5V8.558H5.5V10.058ZM13.25 9.308V5H11.75V9.308H13.25ZM12.5 10.058H19.5V8.558H12.5V10.058ZM11.75 9.308V11H13.25V9.308H11.75ZM12.5 5.75H18.5V4.25H12.5V5.75ZM17.7694 5.16959L18.7694 9.47759L20.2306 9.13841L19.2306 4.83041L17.7694 5.16959Z"/></svg></button>
        </div>
      </form>
      {loading&&
        <div className='w-full h-full absolute backdrop-blur-sm top-0 flex justify-center items-center '>
         <div className="loader"></div>
        </div>}
    </section>
  )
};



export default ProductPage

