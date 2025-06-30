import React from 'react';
import logo from '../assets/navlogo.png'


const Navbar = () => {



    return (
        <div className='w-10/12 flex mt-4  items-center justify-between mx-auto'>
         <div>
            <a href="#hero" ><img className='w-32 hover:scale-105 duration-300 cursor-pointer' src={logo} alt="iraz logo" /></a>

         </div>
         <div>
                <ul className='flex text-primary gap-5 items-center'>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <button className='btn bg-primary text-secondary'>Résumé</button>
                   
                </ul>
         </div>

        </div>
    );
};

export default Navbar;