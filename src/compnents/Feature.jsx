import adv from "../assets/image.jpg"


const Feature = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className='lg:w-1/4'>
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why we are better than others ?</h3>
                <p className='text-base text-tartiary'>He was after the truth. At least, that's what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he'd already decided and was after this truth because the facts didn't line up with the truth he wanted. So he continued to tell everyone he was after the truth oblivious to the real truth sitting right in front of him.</p> 
            </div>
            <div className="w-full lg:w-3/4">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                    <div>
                        <img src={adv} alt="" />
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                    </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                    <div>
                        <img src={adv} alt="" />
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                    </div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8
                    items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                    <div>
                        <img src={adv} alt="" />
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient study schedule</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature