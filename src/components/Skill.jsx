import React, { useEffect } from 'react'
import html3 from '../assets/html3.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js2.png'
import reactjs from '../assets/react2.png'
import node from '../assets/node4.png'
import dotnet from '../assets/dotnet.png'

import 'aos/dist/aos.css';
import AOS from 'aos';


const Skill = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: false,
        });
    }, [AOS]);
    return (
        <>
            <section id='skill' className='font-poppins bg-darkcolor mt-8  md:pl-10'>
                <div className='px-5'>
                    <h2 className='text-primarycolor font-semibold text-[1.5rem] mb-10'>Skills</h2>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className='flex flex-col items-center md:grid md:grid-cols-3 md:gap-6  md:pl-12'>
                        <img className='py-5 pl-5' src={html3} alt="logo" />
                        <img className='py-5 pr-6' src={tailwind} alt="logo" />
                        <img className='py-5' src={js} alt="logo" />
                        <img className='py-5 pl-3' src={reactjs} alt="logo" />
                        <img className='ml-7 py-5 pr-4' src={node} alt="logo" />
                        <img className='mt-6 py-5 pr-4' src={dotnet} alt="logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill