import React, { useState } from 'react';
import { MdFileDownload } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="py-3 bg-darkcolor font-poppins relative">
        <div className="md:flex justify-between items-center px-4">
          {/* Logo */}
          <div className="py-1">
            <h2 className="text-primarycolor font-semibold text-[1.2rem]">
              DU <span className="du">R</span> <span className="du">GA</span>
            </h2>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-primarycolor text-2xl absolute right-4 cursor-pointer top-4 lg:hidden"
          >
            {open ? <ImCross /> : <TiThMenu />}
          </div>

          <ul
            className={`absolute h-[23vh] lg:h-0  z-100 lg:static lg:flex lg:items-center bg-darkcolor  w-full left-0 md:w-auto transition-all duration-500 ease-in-out ${
              open ? " top-14 md:top-5 md:left-[40%] opacity-100 z-50" : "-top-96  z-[-1]"
            }`}
          >
            <li className="text-primarycolor py-2 mx-2 text-center">
              Home
            </li>
            <li className="hover:text-primarycolor py-2 mx-2 text-center">
              <a href="#about">About me</a>
            </li>
            <li className="hover:text-primarycolor py-2 mx-2 text-center">
              <a href="#skill">Skills</a>
            </li>
            <li className="hover:text-primarycolor py-2 mx-2 text-center">
              <a href="#project">Projects</a>
            </li>
            <li className="hover:text-primarycolor py-2 mx-2 text-center">
              <a href="#contact">Contact</a>
            </li>
            <li className="mx-2 text-center">
              <a
                href="/NodejsCVDurgaKhanal.pdf"
                download="My_CV.pdf"
                className="border-2 px-4 py-2 rounded-[0.4rem] border-primarycolor flex items-center justify-center space-x-2 hover:bg-primarycolor text-[0.8rem]"
              >
                <span>Download CV</span>
                <MdFileDownload className="text-[1rem]" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
