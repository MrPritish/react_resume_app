import React from 'react'
import pic from './mypic.jpg'
import Resume from './Pritish_Resume.pdf'

export default function About() {
  return (
    <>
      <div className="loadbar"></div>
      <div className='text-white rounded-tl-[20%] rounded-br-[20%] m-2 lg:m-5 lg:mt-12 p-8 lg:p-14 border-[2px] mt-14 border-blue-400 text-center lg:inline-block items-center justify-center'>

        <div className='lg:mr-[45vw] xl:mr-[40vw] '>
          <h2 className='font-bold text-4xl text-center lg:text-5xl '>About</h2>
        </div>
        <div className='mt-10 lg:float-right lg:-mt-7 lg:mr-10' >
          <img className='rounded-2xl border-2 border-white m-auto md:w-96 w-72 lg:w-80' src={pic} alt="img" />
        </div>

        <div className='mt-10 text-lg items-center justify-center font-medium lg:w-[55%] lg:mt-10 lg:ml-10 lg:text-xl xl:w-3/5'>
          <p className='text-left'>

            It is my pleasure to introduce myself as Pritish Chepure, an experienced Front End Developer. I am hardworking, conscientious, and have a superior understanding of computers. Currently I am pursuing my B.Tech in Computer Engineering from Shree Ramchandra College Of Engineering, Wagholi, Pune with a current score of 72%.
          </p>
          <div className='mt-7 xl:-ml-24 space-y-4 '>

            <button name='button' className='px-6 mr-7 text-lg lg:text-xl py-2 border-2 text-white shadow-md shadow-black lg:active:scale-90  hover:border-blue-500 rounded-full bg-cyan-700 hover:bg-cyan-900 font-bold lg:hover:scale-110 '><a href={Resume}>RESUME</a></button>
            <button name='button' className='mr-7 px-6 text-lg lg:text-xl py-2 border-2 text-white shadow-md shadow-black lg:active:scale-90  hover:border-blue-500 rounded-full bg-cyan-700 hover:bg-cyan-900 font-bold lg:hover:scale-110 '><a href="/skills">MY SKILLS</a></button>
            <button name='button' className=' px-6 text-lg lg:text-xl py-2 border-2 text-white shadow-md shadow-black lg:active:scale-90  hover:border-blue-500 rounded-full bg-cyan-700 hover:bg-cyan-900 font-bold lg:hover:scale-110 '><a href="/contact">CONTACT</a></button>
          </div>

        </div>




      </div>
    </>
  )
}
