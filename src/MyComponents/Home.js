import React from 'react'
import bcimg from './logo.png';
import pic from './mypic.jpg'

export default function home() {
  return (
    <div className='lg:flex lg:flex-row-reverse lg:mt-7'>

      <div className=' items-center justify-center flex '>
        <img className='w-auto px-10 sm:px-28 md:px-36 lg:px-10' src={bcimg} alt="" />

      </div>
      <div className='text-white rounded-tl-[20%] rounded-br-[20%] m-2 lg:m-5 lg:mt-6 p-8 lg:p-14 border-blue-400 text-center lg:w-4/5 items-center justify-center'>

        <img className='rounded-2xl border-2 sm:w-80 border-white m-auto md:w-96 w-72 lg:w-80' src={pic} alt="img" />
        <h1 className='mt-10 md:text-5xl text-4xl font-bold'>Hello,I'm <br></br>Pritish Chepure</h1>
        <p className='text-xl mt-4 md:text-2xl sm:text-2xl font-medium text-red-500'>Web Developer & Python Developer</p>
        <button name='button' className=' px-6 text-lg lg:text-2xl py-2 mt-5 border-2 text-white shadow-md shadow-black lg:active:scale-90  hover:border-blue-500 rounded-full bg-cyan-700 hover:bg-cyan-900 font-bold lg:hover:scale-110 '><a href="/about">ABOUT ME</a></button>


      </div>
    </div>
  )
}
