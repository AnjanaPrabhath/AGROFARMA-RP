import React from 'react'
import { ReactTyped } from 'react-typed'
import heroImg from '../assets/heroImg2.png'
import dummy1 from '../assets/dummy1.jpg'
import dummy2 from '../assets/dummy2.jpg'
import dummy3 from '../assets/dummy3.jpg'
import dummy4 from '../assets/dummy4.jpg'




const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[1240px] mx-auto flex bg-gradient-to-r from-[#D1FFD6] to-[#ACFFF5] rounded-3xl '>
            
            <div className='flex flex-col justify-center px-[100px] '>
                <div></div>
                <p className='text-[#1C5739] font-semibold text-xl pb-2'>Enhance Your Farm with</p>
                
                <ReactTyped className='md:text-7xl sm:text-3xl text-xl font-semibold bg-gradient-to-r from-[#2AB166] to-[#04fff2] text-transparent bg-clip-text' 
                strings={['AGROFARMA']} 
                typeSpeed={120} 
                 />
                 <h3 className='md:text-2xl sm:text-3xl text-2xl py-4 text-[#1C5739] font-normal'>grow the world with technology</h3>

                 <div className='flex text-xl text-black space-x-4 mt-4 '>
                    <div><a href=""><img className='w-[150px] rounded-lg hover:scale-110 duration-500 shadow-lg' src={dummy1} alt="" /></a></div>
                    <div><img className='w-[150px] rounded-lg' src={dummy2} alt="" /></div>
                    <div><img className='w-[150px] rounded-lg' src={dummy3} alt="" /></div>
                    <div><img className='w-[150px] rounded-lg' src={dummy4} alt="" /></div>
                 </div>
                
            </div>

            <img className='w-[500px] me-6 my-4 ' src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero