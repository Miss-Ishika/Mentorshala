import Banner from '../assets/banner.png'

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-20">
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

                <div>
                    <img src={Banner} alt="" className='lg:h-[386px]' />
                </div>

                <div className="md:w-3/5">
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading- relaxed'>Develop your skills without diligence</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>The desert wind blew the tumbleweed in front of the car. Alex swerved to avoid the tumbleweed, but he turned the wheel a bit too strong and the car left the road and skidded onto the dirt median. He instantly slammed on the brakes and the car stopped in a cloud of dirt. When the dust cloud had settled and he could see around him again, he realized that he'd somehow crossed over into an entirely new dimension.</p>
                    <div className='space-x-5 space-y-4'>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>Get Started</button>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded
                        hover:bg-primary transition-all duration-300'>Discount</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;