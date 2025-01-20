import React, { useState, useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import toast from 'react-hot-toast';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-in-out',
            once: false, 
        });
    }, [AOS]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill out all fields before submitting.');
            return;
        }

        setIsSubmitting(true);

        fetch('https://formspree.io/f/mwppdwdo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('There was an issue sending your message. Please try again.');
            }
        })
        .catch((error) => {
            toast.error('An error occurred while sending the message.');
            console.error('Error:', error);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <>
            <section id='contact' className='bg-darkcolor font-poppins  pt-10 px-5'>
                <div className='lg:flex justify-around'>
                    <div data-aos="fade-right">
                        <h2 className='text-primarycolor text-[1.5rem] mb-3 font-semibold mt-4'>Connect with me</h2>
                        <p className='text-whitecolor text-[0.9rem]'>Satisfied with me? Please contact me</p>
                        <div className='flex pt-5 text-primarycolor text-[1.5rem]'>
                            <a className='px-2' href="https://github.com/Khanaldk" target='_blank' rel="noreferrer"><FaGithub /></a>
                            <a className='px-2' href="https://www.linkedin.com/in/durga-khanal-162735271/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                            <a className='px-2' href="https://www.instagram.com/khanal__durga/" target='_blank' rel="noreferrer"> <FiInstagram /></a>
                            <a className='px-2 text-[1.6rem]' href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank' rel="noreferrer"> <CgMail /></a>
                            <a className='px-2' href="https://www.facebook.com/profile.php?id=100068196360152&sk=photos" target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <h2 className='text-whitecolor mt-4'>Contact me, let’s make magic together</h2>
                        <form className='pt-5  ' onSubmit={handleFormSubmit}>
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name:'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Email:'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <textarea
                                className='w-[100%] h-24 py-2 px-1 bg-lowdark placeholder:text-darkcolor rounded-[0.2rem]'
                                name="message"
                                id="message"
                                placeholder='Message:'
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                                className="text-whitecolor bg-primarycolor mt-3 border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-8 py-2 rounded-[0.4rem] text-[1rem]"
                                disabled={isSubmitting} 
                            >
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
