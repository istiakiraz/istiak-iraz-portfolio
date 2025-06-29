import React from 'react';
import logo from '../assets/navlogo.png'

const Navbar = () => {



    return (
        <div className='w-10/12 flex mt-4  items-center justify-between mx-auto'>
         <div>
            <img className='w-32' src={logo} alt="" />

         </div>
         <div>
                <ul className='flex gap-5 items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <button className='btn'> resume</button>
                   
                </ul>
         </div>

        </div>
    );
};

export default Navbar;