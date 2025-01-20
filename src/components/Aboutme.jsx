import React,{useRef,useEffect} from 'react'
import web from '../assets/web.avif'
import icon from '../assets/icon.png'
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Aboutme = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          easing: 'ease-in-out',
          once: false, 
        });
      }, [AOS]);
    return (
        <>
            <section id='about' className='flex flex-col items-center mt-10 md:mt-0 bg-darkcolor   font-poppins px-5'>
                <div className='md:pl-10'>
                    <h2 className='text-primarycolor text-[1.5rem] font-semibold mb-3'>About me</h2>
                    <p className='text-justify text-whitecolor text-[0.9rem] w-[95%]'>Hi, my name is Durga Khanal currently pursuing Bachelors of
                        Science in Computer Science and Information Technology
                        (BSc. CSIT) in fourth years. I am a passionate
                        and enthusiastic Fullstack Web Developer specializing in React.js,
                        Node.js, and .NET. I have honed my skills in web development and
                        have a solid understanding of creating seamless and dynamic user experiences. </p>
                    <div className='md:flex'>
                        <h2 className='text-primarycolor text-[4rem] font-semibold '>1+</h2>
                        <p className='px-4 text-whitecolor text-justify md:pt-9 w-[90%]'>Years of experience. Specialised in building apps, while ensuring a seamless
                            web experience for end users and the service I offer </p>
                    </div>

                </div>
                <div data-aos="zoom-in" className='md:flex  py-10 justify-center rounded-[1rem] mt-4 align-middle md:border-2 lg:w-[70%] border-ligthcolor '>

                    <img className='' src={icon} alt="icon" width={300} height={100} />
                    <div className='pt-16 md:px-20'>
                        <h2 className='pb-5 text-primarycolor font-semibold text-[1.3rem]'>WEB DEVELOPMENT</h2>
                        <p className='text-whitecolor text-justify  '>I create beautiful iterfaces with simple HTML,CSS & JavaScript and also frameworks like ReactJS</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme