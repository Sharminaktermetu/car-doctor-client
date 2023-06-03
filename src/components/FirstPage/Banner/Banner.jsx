import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import About from '../About/About';


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-lg h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    
    <div className="absolute h-full left-0 p-2 top-0  text-white bg-gradient-to-r from-black flex items-center">
      <div className='space-y-7 w-1/2 pl-5'>
      <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
     <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn btn-error mx-2">Error</button>
     <button className="btn btn-outline btn-warning">Warning</button>
     </div>
      </div>
   
    </div>
    <div className="absolute flex transform bottom-0  -translate-y-1/2 items-end justify-end right-0 p-2">
      <a href="#slide4" className="btn btn-circle mx-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
 
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex transform bottom-0  -translate-y-1/2 items-end justify-end right-0 p-2">
      <a href="#slide1" className="btn btn-circle mx-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex transform bottom-0  -translate-y-1/2 items-end justify-end right-0 p-2">
      <a href="#slide2" className="btn btn-circle mx-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex transform bottom-0  -translate-y-1/2 items-end justify-end right-0 p-2">
      <a href="#slide3" className="btn btn-circle mx-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
    );
};

export default Banner;