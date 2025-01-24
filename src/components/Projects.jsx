import React ,{useEffect}from 'react'
import medi from '../assets/medi.jfif'
import furniro from '../assets/furniro.jpg'
import happy from '../assets/happy.jpg'
import tic from '../assets/tic.jpg'
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { FaEye } from "react-icons/fa";

const Projects = () => {
      useEffect(() => {
            AOS.init({
              duration: 1200, 
              easing: 'ease-in-out',
              once: false, 
            });
          }, [AOS]);
    return (

        <>
            <section id='project' className='bg-darkcolor  font-poppins px-10 mt-5 '>
                <div>
                    <div>

                        <h2 className='text-primarycolor font-semibold text-[1.5rem] mb-4'>Projects</h2>
                        <p className='text-whitecolor mb-8 text-justify'>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:gap-16'>
                        <div  data-aos="flip-left" className=' border-2 p-8 border-primarycolor rounded-[1rem] my-4'>
                        <img src={medi} alt="" width={500} />
                            <p className='text-primarycolor mt-3 mb-3'>Medi-Mitra:A Smart Vaccination Management System</p>
                            <div className="flex items-center space-x-4">
                            <button className=" text-whitecolor border-primarycolor hover:bg-primarycolor px-4 flex items-center space-x-2 border-2 py-2 rounded-[0.4rem] text-[0.8rem]">
                            <span><a href="https://github.com/Khanaldk/Medimitra_Frontend" target='_blank'>Github Repo</a></span>
                                </button>
                                <button className=" text-whitecolor bg-primarycolor border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-3 py-2 rounded-[0.4rem] text-[0.8rem]">
                                    <span>View Live</span> <FaEye className='' />
                                </button>
                               
                            </div>
                        </div>

                        <div  data-aos="flip-left" className='border-2 my-4  p-8 border-primarycolor rounded-[1rem]' >
                        <img src={happy} alt="" width={450} />
                        <p className='text-primarycolor mt-3 mb-3'>Happy Coaching</p>
                            <div className="flex items-center space-x-4">
                            <button className=" text-whitecolor border-primarycolor hover:bg-primarycolor px-4 flex items-center space-x-2 border-2 py-2 rounded-[0.4rem] text-[0.8rem]">
                                    <span><a href="https://github.com/Khanaldk/HappyCoaching-ReactJs/tree/master" target='_blank'>Github Repo</a></span>
                                </button>
                                <button className=" text-whitecolor bg-primarycolor border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-3 py-2 rounded-[0.4rem] text-[0.8rem]">
                                    <span><a href="https://ui-happy-coaching.netlify.app/" target='_blank'>View Live</a></span> <FaEye className='' />
                                </button>
                               
                            </div>

                        </div>
                        <div  data-aos="flip-left" className='border-2 my-4 p-8 border-primarycolor rounded-[1rem]'>
                        <img src={furniro} alt="" width={500} />
                        <p className='text-primarycolor mt-3 mb-3'>Furniro Website</p>
                            <div className="flex items-center space-x-4">
                            <button className=" text-whitecolor border-primarycolor hover:bg-primarycolor px-4 flex items-center space-x-2 border-2 py-2 rounded-[0.4rem] text-[0.8rem]">
                            <span><a href="https://github.com/Khanaldk/Furniro-Website-ReactJS/tree/master" target='_blank'>Github Repo</a></span>
                                </button>
                                <button className=" text-whitecolor bg-primarycolor border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-3 py-2 rounded-[0.4rem] text-[0.8rem]">
                                    <span><a href="https://furniro-site.netlify.app/" target='_blank'>View Live</a></span> <FaEye className='' />
                                </button>
                               
                            </div>

                        </div>
                        <div  data-aos="flip-left" className='border-2 my-4 p-8 border-primarycolor rounded-[1rem]'>
                        <img src={tic} alt="" width={440} />
                        <p className='text-primarycolor mt-3 mb-3'>Tic-Tac-Toe Game</p>
                            <div className="flex items-center space-x-4">
                            <button className=" text-whitecolor border-primarycolor hover:bg-primarycolor px-4 flex items-center space-x-2 border-2 py-2 rounded-[0.4rem] text-[0.8rem]">
                            <span><a href="https://github.com/Khanaldk/tictactoe_game/tree/master" target='_blank'>Github Repo</a></span>
                                </button>
                                <button className=" text-whitecolor bg-primarycolor border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-3 py-2 rounded-[0.4rem] text-[0.8rem]">
                                    <span><a href="https://tic-tac-toe-by-durga-khanal.netlify.app/" target='_blank'>View Live</a></span> <FaEye className='' />
                                </button>
                               
                            </div>

                        </div>
                        <div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects