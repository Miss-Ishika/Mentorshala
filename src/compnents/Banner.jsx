import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
        <div className='bg-[#010851] fixed flex justify-center gap-5 md:px-10 p-1 w-full text-white top-0 z-index-99'>
            <IoCall className='mt-1'/>
            <div>
                +91 9162689579
            </div>
            <FaWhatsapp className='mt-1'/>
        </div>
    </>
  )
}

export default Banner