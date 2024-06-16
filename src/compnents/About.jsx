import img1 from "../assets/img3.jpg"
import img2 from "../assets/img1.png"
import {fadeIn} from './varient'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div 
            variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
            className="md:w-1/2 ">
                <img src={img1} alt='' className="animate-[wiggle_1s_ease-in-out_infinite]"/>
            </motion.div>

            <motion.div 
            variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
            className="md:w-2/5 m-2">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary text-lg mb-7">You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.</p>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>Get Started</button>
            </motion.div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            <motion.div
            variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
             className="md:w-9/10 ">
                <img src={img2} alt='' />
            </motion.div>

            <motion.div
            variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
             className="md:w-2/5 mx-20">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary text-lg mb-7">You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.</p>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>Get Started</button>
            </motion.div>
        </div>

    </div>
  )
}

export default About