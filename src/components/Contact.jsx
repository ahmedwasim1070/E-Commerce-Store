import React from 'react';
import '../index.css';


function Contact() {
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <>
      <div className='w-full mt-20 border border-solid shadow-2xl rounded-2xl'>
        <div className='w-full h-[100px] flex justify-center items-center'>
          <h1 className='text-[3rem]'>Contact Us</h1>
        </div>
        <form onSubmit={handleSubmit} className='w-[80%] mx-auto border border-[rgba(255,255,255,0.2)] mt-2 flex flex-wrap gap-y-14 p-10 '>
          <div className='w-[50%] '>
            <label className='text-[1.2rem]'>Name :  </label>
            <input className='w-[85%] p-2 bg-transparent border border-[rgba(0,0,0,0.3)] outline-none placeholder-[rgba(0,0,0,0.6)] rounded-lg ' placeholder='Enter Name ' required/>
          </div>
          <div className='w-[50%]'>
            <label className='text-[1.2rem]'>Email :  </label>
            <input className='w-[85%] p-2 bg-transparent border border-[rgba(0,0,0,0.3)] outline-none placeholder-[rgba(0,0,0,0.6)] rounded-lg ' placeholder='Enter Mail ' type='email' required/>
          </div>
          <div className='w-full'>
            <label className='text-[1.2rem]'>Message :  </label>
            <input className='w-[90%] p-2 bg-transparent border border-[rgba(0,0,0,0.3)] outline-none  pb-[100px] placeholder-[rgba(0,0,0,0.6)] rounded-lg' placeholder='Enter Message' required/>
          </div>
          <div className='w-full flex justify-end'>
            <div className='flex items-center gap-5 flex-wrap'>
              <a href='https://wa.me/+923206469705' ><button type='button' className='text-center border border-[rgba(0,0,0,0.4)]  p-3 rounded-lg text-[1.1rem] font-bold  flex flex-row gap-2 transition-all duration-300 hover:bg-[#25D366] hover:text-white'>Contact on<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#000000"/><path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#000000"/></svg></button>              </a>
              <p className='font-bold'>OR</p>
              <button type='submit' className='text-center border border-[rgba(0,0,0,0.4)] p-3 rounded-lg text-[1.1rem] font-bold transition-all duration-300 hover:bg-red-900 hover:border-solid hover:text-white'>Leave A Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact