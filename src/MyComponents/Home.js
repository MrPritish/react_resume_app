import React from 'react'
import bcimg from './logo.png';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <>

      <div className="loadbar"></div>

      <div className='text-white items-center justify-center text-center '>

        <div>

          <img className='m-auto w-auto sm:w-[30rem]' src={bcimg} alt="" />

          <h1 className='md:text-5xl text-4xl font-bold'>Hello,I'm <br></br>Pritish Chepure</h1>

          <p className='text-xl mt-4 md:text-2xl sm:text-2xl font-medium text-red-500'>Web Developer & Python Developer</p>

          <button name='button' className=' px-6 text-lg lg:text-2xl py-2 mt-5 border-2 text-white shadow-md shadow-black lg:active:scale-90  hover:border-red-500 rounded-full bg-cyan-700 hover:bg-cyan-900 font-bold hover:scale-110 '><Link to="/about">ABOUT ME</Link></button>

        </div>

      </div>

    </>
  )
}
