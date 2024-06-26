import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import pic from "./../assets/popup.png"
import { FaWindowClose } from "react-icons/fa";

const Popup = () => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="h-0 flex items-center justify-center h-screen bg-gray-100">
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gradient-to-r from-secondary to-white p-7 rounded shadow-lg flex">
          <img src={pic} className='w-auto'/>
          <div>
            <h2 className='text-[30px] font-semibold'>Contact Us</h2>
            <hr className='h-5'/>
            <form>
            <div className='flex flex-col '>
              <label>Name</label>
              <input type='text' placeholder='Enter Your Name' classname="bg-transparent"/>
            </div>
            <div className='flex flex-col'>
              <label>Email</label>
              <input type='email' placeholder='Enter Your Email'/>
            </div>
            <div className='flex flex-col'>
              <label>Message</label>
              <textarea placeholder='Enter your message'></textarea>
            </div>
            </form>
          </div>
          <button onClick={() => setShowPopup(false)} className='h-1'>
          <FaWindowClose size={30} color='grey' />
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default Popup