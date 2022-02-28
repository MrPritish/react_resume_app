import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import lilogo from './linkedin.gif';
import gitlogo from './github2.gif';
import fblogo from './fb.gif';
import Resume from './Pritish_Resume.pdf'
export default function index() {
  function show(e) {

    var x = document.getElementById("myLinks");
    var y = document.getElementById("hamburger")
    if (x.style.display === "block") {
      y.style.background = "white";
      x.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.background = "red";
    }
  }



  return (
    <>
      <div className="loadbar"></div>


      <nav className="flex justify-between lg:justify-evenly text-white py-3 sticky top-0  bg-black lg:bg-transparent lg:py-0 ">

        <div className=" my-5 hidden lg:block ">
          <Link to="/"><h1 className=' text-3xl font-bold cursor-pointer hover:scale-125 hover:text-red-500 '>Pritish Chepure</h1></Link>
        </div>
        <div className=' mt-11 absolute lg:mt-0 lg:static  ' id='myLinks'>

          <ul className=" lg:flex text-xl font-semibold bg-black space-y-4 lg:space-y-0 lg:bg-transparent ">

            <li className='py-5'><NavLink className='lg:px-7 px-20 py-5 lg:hover:text-gray-400' exact activeClassName="acti" to="/about">About</NavLink></li>
            <li className='py-5'><NavLink className='lg:px-7 px-20 py-5 lg:hover:text-gray-400' exact activeClassName="acti" to="/skills">Skills</NavLink></li>
            <li className='py-5'><NavLink className='lg:px-7 px-20 py-5 lg:hover:text-gray-400' exact activeClassName="acti" to="/contact">Contact</NavLink></li>
            <li className='py-5'><a className='lg:px-7 px-20 py-5 hover:text-red-500' href={Resume}>Resume</a></li>


          </ul>
        </div>


        <div className='lg:flex space-x-8 my-4 hidden'>
          <a href="https://www.linkedin.com/in/pritish-chepure-49830421b/" rel="noreferrer" target="_blank"> <img className='w-14 hover:scale-125 border-2 border-white hover:border-red-500 rounded-full bg-black' src={lilogo} alt="logo" /></a>
          <a href="https://github.com/MrPritish" rel="noreferrer" target="_blank"> <img className='w-14 hover:scale-125 border-2 border-white hover:border-red-500 rounded-full bg-black' src={gitlogo} alt="logo" /></a>
          <a href="https://www.facebook.com/pritish.chepure" rel="noreferrer" target="_blank"> <img className='w-14  hover:scale-125 border-2 border-white hover:border-red-500 rounded-full bg-black' src={fblogo} alt="logo" /></a>

        </div>
        <div className='mx-3 mt-1 lg:hidden cursor-pointer space-y-1' onClick={show} >
          <div className=" h-0.5 w-7  bg-white"></div>
          <div id="hamburger" className=" h-0.5 w-7  bg-white"></div>
          <div className=" h-0.5 w-7  bg-white"></div>

        </div>
        <div className='mx-3 lg:hidden'>
          <Link to="/"><h1 className=' text-2xl font-bold active:scale-110 cursor-pointer  '>Pritish Chepure</h1></Link>

        </div>



      </nav>
    </>
  )
}
