import { motion } from "framer-motion"
import Image from  "../assets/me.png"
import {fadeIn} from './varient'

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
        variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
         className="md:w-2/5 m-20">
            <span className="md:text-5xl text-3xl font-bold text-primary mx-10 mb-7 leading-normal">Hi, I m Priya Sharma</span><br></br>
            <p className="md:text-3xl font-semibold text-secondary mx-10 mt-5 mb-10 leading-normal">I m an Entreprenuer</p>
            <p className="text-tartiary text-lg mb-7 mx-10 my-10">She didn't fully understand what her sister was saying but that didn't matter. She loved her so much that she would have agreed to whatever came out of her mouth.</p>
            <button className='py-3 px-8 mx-10 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>CONTACT</button>
        </motion.div>
        <motion.div
        variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
        >
            <img src={Image} alt="" className="mx-40 my-20"/>
        </motion.div>
    </div>
  )
}

export default AboutMe