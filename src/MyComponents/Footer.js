import React from 'react'
import lilogo from './linkedin.gif';
import gitlogo from './github2.gif';
import fblogo from './fb.gif';


export default function Footer() {
    return (
        <>
            <div className='my-10'>
                <div className='text-4xl text-white text-center'>
                    Your Sincerely
                </div>
                <div className='font-extralight text-white text-3xl text-center '>
                    Pritish Chepure
                </div>
            </div>
            <div className='flex space-x-8 my-4 justify-center sticky bottom-0 lg:hidden '>
                <a href="https://www.linkedin.com/in/pritish-chepure-49830421b/" rel="noreferrer" target="_blank"> <img className='w-14 border-2 border-white rounded-full bg-black' src={lilogo} alt="logo" /></a>
                <a href="https://github.com/MrPritish" rel="noreferrer" target="_blank"> <img className='w-14 border-2 border-white rounded-full bg-black' src={gitlogo} alt="logo" /></a>
                <a href="https://www.facebook.com/pritish.chepure" rel="noreferrer" target="_blank"> <img className='w-14 border-2 border-white rounded-full bg-black' src={fblogo} alt="logo" /></a>

            </div>

        </>

    )
}
