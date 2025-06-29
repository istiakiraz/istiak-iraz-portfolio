import React from 'react';

import logo1 from '../assets/Tailwind CSS.svg'
import logo2 from '../assets/HTML5.svg'
import logo3 from '../assets/CSS3.svg'
import logo4 from '../assets/JavaScript.svg'
import logo5 from '../assets/re.svg'
import logo6 from '../assets/Figma.svg'
import logo7 from '../assets/Git.svg'
import logo8 from '../assets/MongoDB.svg'
import logo9 from '../assets/Express.svg'
import logo10 from '../assets/Adobe Premiere Pro.svg'
import logo11 from '../assets/Canva.svg'
import logo12 from '../assets/GitHub.svg'
import logo13 from '../assets/NPM.svg'
import Marquee from 'react-fast-marquee';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,logo10,logo11,logo12, logo13 ];

const TechLogo = () => {
    return (
        <div>
            <Marquee pauseOnHover speed={50} gradient={true}   style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}
  className="overflow-hidden" >
        {
            logos.map((logo, index) =>(
                <div key={index} className="mx-14 cursor-grab py-5 pt-6 -mt-5 hover:scale-110 transition-transform duration-300 scroll-none flex items-center"  >
                    <img className="h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300 " src={logo} alt="logo" />

                </div>
            ))
        }


      </Marquee>
        </div>
    );
};

export default TechLogo;