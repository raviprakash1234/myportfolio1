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
  marginLeft:"30%"
}}>Full Name</label>
<input style={{
  width:"40%",
  height:"30px",
  marginLeft:"30%",
  borderRadius:"5px",
}} type="text" name='name' />
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"30%"
}}>Mobile No.</label>
<input style={{
  width:"40%",
  height:"30px",
  marginLeft:"30%",
  borderRadius:"5px",
}}  type="text" name='mobile'/>
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"30%"
}}>Email</label>
<input style={{
  width:"40%",
  height:"30px",
  marginLeft:"30%",
  borderRadius:"5px",
}}   type="email"  name='email' />
<label style={{
  marginTop:"10px",
  fontSize:"25px",
  marginLeft:"30%"
}}>Message</label>
<textarea style={{
  width:"40%",
  height:"160px",
  marginLeft:"30%",
  borderRadius:"5px",
  fontSize:"20px"
}}  type="text"  name='message'/>
<input type="submit" style={{
  width:"10%",
  height:"25px",
  marginLeft:"46%",
  borderRadius:"10px",
  marginTop:"4%",
  backgroundColor:"purple",
  border:"none", 
  color:"white",
  fontFamily:"bolder",
}} value="Send Message" />
 
 </form>
  
   
   
    
      
     
    </Section>
  );
};

export default Timeline;
