import React from 'react';
import '../Hero/Hero.css';

export default function Hero(){
    return(
        <div className='hidden md:block'>
        <div className="md:relative inline-block pb-14">
        <img className= "block w-screen max-h-screen" src = "https://res.cloudinary.com/dkqbawsqm/image/upload/v1716718100/media/Frame_3535_ybkiot.png"/>
        <img className="absolute top-16 left-6" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1716718728/media/Group_2-removebg-preview_lv66li.png" alt="" />
        <img className="absolute top-[475px] left-0" src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1716719355/ymfrddg4ehzzaidbodnz.png"  />
        <div className="absolute top-52 left-[560px]">
            <h2 className='font-waterfall text-7xl'>Turning Thoughts into <span className='font-serif text-6xl'>&lt;/CODE&gt;</span><br/>
and Bugs into features..... </h2>
        </div>
        </div>
        </div>
    )
};