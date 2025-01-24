import React, { useEffect } from 'react'
import myImage from '../assets/PorfolioImage-removebg.png';
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';
const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: false,
        });
    }, [AOS]);
    return (
        <>
            <section className='bg-darkcolor pt-10 font-poppins px-5 '>
                <div className='md:flex justify-around items-center'>

                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className=' md:pl-16 md:p-5 '>
                        <span className='text-whitecolor font-semibold '>Hello, I’m</span>
                        <h2 className='font-semibold text-whitecolor mt-2 text-[1.6rem]'>Durga Khanal(DK)</h2>
                        <p className='text-justify mt-3 mb-5 text-whitecolor w-[80%] text-[0.9rem]'>A passionate and enthusiastic Web Developer skilled in React.js, Node.js, and .NET, crafting seamless and dynamic web applications. </p>
                        <div className="flex items-center space-x-4">
                            <button className=" text-whitecolor bg-primarycolor border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-4 py-2 rounded-[0.4rem] text-[0.8rem]">
                                <span><a href="#about">About Me</a> </span>
                                <FaUser className='text-[0.9rem]' />
                            </button>
                            <button className=" text-whitecolor border-primarycolor hover:bg-primarycolor px-4 flex items-center space-x-2 border-2 py-2 rounded-[0.4rem] text-[0.8rem]">
                                <span><a href="#project">Projects</a></span>
                                <FaEye className='' />
                            </button>
                        </div>

                    </div>

                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='pr-14'>
                        <img src={myImage} alt="myiname" width={600} />
                    </div>

                </div>



            </section>

        </>
    )
}

export default HeroSection