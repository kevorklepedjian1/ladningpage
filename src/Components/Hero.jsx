import React from 'react';
import img1 from "../assets/bg-hero-squiggle.svg"
import img2 from "../assets/illustration-hero-left.svg"
import img3 from "../assets/illustration-hero-right.svg"
import img4 from "../assets/illustration-hero-mobile.png"
import img5 from "../assets/icon-scroll.svg"




const Hero = () => {
  return (
    <hero className='flex items-center justify-center relative '>
      <img src={img4} alt="" className='a' />
      <img src={img2} className='b absolute left-0 top-0 -z-10'/>
      <img src={img1} className='d absolute top-0 -z-10'/>
      <div className='flex items-center justify-center flex-col mt-16 z-10 text-center'>
      <h1 className='text-white w-kev text-me'>Get paid for the work you love to do.</h1>
      <p className='l'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
       <img src={img5}/>
      </div>
      <img src={img3} className='c absolute right-0 top-0 -z-10'/>

    </hero>
  );
};

export default Hero;