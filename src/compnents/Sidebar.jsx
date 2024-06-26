import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Sidebar = () => {

    const profiles = [
        {pname: "whatsApp", icon: <FaWhatsapp size={24} />, link: "", bgcolor: "#15803d"},
        {pname: "Facebook", icon: <BsFacebook size={24}/>, link: "", bgcolor: "#1d4ed8"},
        {pname: "Instagram", icon: <RiInstagramFill size={24}/>, link: "", bgcolor: "#be185d"},
        {pname: "YouTube", icon: <TbBrandYoutubeFilled size={24}/>, link: "", bgcolor: "#b91c1c"}
    ]

  return (
    <>
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-transparent p-1">
            <ul className='flex flex-col'>
                    {
                        profiles.map((profile, index) => (
                            <li key={index} style={{backgroundColor: profile.bgcolor }} className='w-10 my-1 p-2 bg-primary rounded-3xl text-white
                            hover:bg-violet-600'>
                                <a href={profile.link}>{profile.icon}</a>
                            </li>
                        ))
                    }
            </ul>
        </div>
    </>
  )
}

export default Sidebar