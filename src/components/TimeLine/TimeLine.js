import React, { useState, useRef, useEffect } from 'react';
import  emailjs  from '@emailjs/browser';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

function sendEmail(e){
  
  e.preventDefault()

  console.log('e:', e.target)

  emailjs.sendForm('service_5sbgsih',"template_bl3vndi", e.target,"user_E9QHdnAIMQKvajib11Tzf")
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
  e.target.reset()
}

// onSubmit={sendEmail}



  return (
    <Section id="about">
      <SectionTitle>Contact Me</SectionTitle>
      
  
 <form onSubmit={sendEmail}>
 <label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"25%"
}}>Full Name</label>
<input style={{
  width:"50%",
  height:"30px",
  marginLeft:"25%",
  borderRadius:"5px",
  outline:"none",
  border:"none",
  fontSize:"20px",
  fontFamily:"sans-serif"
}} type="text" name='name' placeholder='Enter Your Name' required />
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"25%"
}}>Mobile No.</label>
<input style={{
  width:"50%",
  height:"30px",
  marginLeft:"25%",
  borderRadius:"5px",
  outline:"none",
  border:"none",
  fontSize:"20px",
  fontFamily:"sans-serif"
}}  type="text" name='mobile' placeholder='Enter Your Mobile No.' required/>
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"25%"
}}>Email</label>
<input style={{
  width:"50%",
  height:"30px",
  marginLeft:"25%",
  borderRadius:"5px",
  outline:"none",
  border:"none",
  fontSize:"20px",
  fontFamily:"sans-serif"
}}   type="email"  name='email' placeholder='Enter Your Email' required />
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"25%"
}}>Message</label>
<textarea style={{
  width:"50%",
  height:"160px",
  marginLeft:"25%",
  borderRadius:"5px",
  outline:"none",
  border:"none",
  fontSize:"20px",
  fontFamily:"sans-serif",
  fontSize:"20px"
}}  type="text"  name='message'/>
<input type="submit" style={{
  width:"15%",
  height:"35px",
  marginLeft:"43%",
  borderRadius:"10px",
  marginTop:"4%",
  backgroundColor:"purple",
  border:"none", 
  color:"white",
  fontFamily:"bolder",
  fontSize:"16px"
}} value="Submit" placeholder='Enter Your Message' required/>
 
 </form>
  
   
   
    
      
     
    </Section>
  );
};

export default Timeline;
