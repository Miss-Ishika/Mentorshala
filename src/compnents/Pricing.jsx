import React, { useState } from 'react'
import {fadeIn} from './varient'
import { motion } from 'framer-motion';
// import "./Pricing.css"

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "He ran out of the door without half the stuff he needed for work, but it didn't matter.", green: "/src/assets/green.png"},
        {name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "He ran out of the door without half the stuff he needed for work, but it didn't matter.", green: "/src/assets/green.png"},
        {name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "He ran out of the door without half the stuff he needed for work, but it didn't matter.", green: "/src/assets/green.png", red: "/src/assets/red.png"},
    ]


  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Here are all the plans</h2>
            <p className='text-tartiary md:w-1/3 mx-auto px-4'>He scolded himself for being so tentative. He knew he shouldn't be so cautious, but there was a sixth sense telling him that things weren't exactly as they appeared. It was that weird chill that rolls up your neck and makes the hair stand on end. He knew that being so tentative could end up costing him the job, but he learned that listening to his sixth sense usually kept him from getting into a lot of trouble.</p>

            <div>
                <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>                   
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type='checkbox' id='toggle' className='hidden' checked='hidden' onChange={() => setIsYearly(!isYearly)}/>
            </div>
        </div>

        <motion.div
        variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.1}}
                className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto zoom'>
            {
                packages.map((pkg, index) => <div key={index} className='border py-10 md:px-10 px-4 rounded-lg shadow-3xl hover:shadow-2xl'>
                <h3 className='text-3xl font-bold text-center'>{pkg.name}</h3>
                <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                    {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span
                    className='test-base text-tartiary font-medium'>/{isYearly ? 'year' : 'month'}
                    </span>
                </p>
                <ul className='mt-4 space-y-2 px-4'>
                    <li className='flex gap-3 items-center'><img src={pkg.green} alt='' className='w-4 h-4'/>Videos of Lessons</li>
                    <li className='flex gap-3 items-center'><img src={pkg.green} alt='' className='w-4 h-4'/>Homework Check</li>
                    <li className='flex gap-3 items-center'><img src={pkg.green} alt='' className='w-4 h-4'/>Additonal practice task</li>
                    <li className='flex gap-3 items-center'><img src={pkg.green} alt='' className='w-4 h-4'/>Monthly conference</li>
                    <li className='flex gap-3 items-center'><img src={pkg.green} alt='' className='w-4 h-4'/>Personal advice from teachers</li>

                </ul>
                <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>Get Started</button>
                </div>
                </div>)
            }
        </motion.div>
    </div>
  )
}

export default Pricing