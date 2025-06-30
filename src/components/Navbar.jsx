import React from 'react';
import logo from '../assets/navlogo.png'


const Navbar = () => {



    return (
        <div className='lg:w-10/12 w-11/12 flex lg:mt-4  items-center justify-between mx-auto'>
         <div>
            <a href="#hero" ><img className='w-32 hover:scale-105 duration-300 cursor-pointer' src={logo} alt="iraz logo" /></a>

         </div>
         <div>
                <ul className='flex text-primary gap-5 items-center'>
                    <a className='hidden lg:block' href="#hero">Home</a>
                    <a className='hidden lg:block' href="#about">About</a>
                    <a className='hidden lg:block' href="#skills">Skills</a>
                    <a className='hidden lg:block' href="#projects">Projects</a>
                    <button className='btn bg-primary text-secondary'>Résumé</button>
                   
                </ul>
         </div>

        </div>
    );
};

export default Navbar;