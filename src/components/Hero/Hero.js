import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <>
  
    <Section row nopadding>
    
      <LeftSection>
      <img style={{
        width:"150px",
        height:"150px",
        borderRadius:"100px"
      }} src='https://avatars.githubusercontent.com/u/87422643?v=4'/>
        <SectionTitle>
          Hey there,
          </SectionTitle>
      <h1>
      <Typewriter 
      options={{
        strings: ["I Am Ravi Prakash Kumar"],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
      
      </h1>
        
       
   <br/>
   <br/>
    <SectionText>
    I am Aspirant of Web Developer with a specialization in MERN stack. Fluent in JavaScripts Html and Css. 
    Passionate about implementing and launching new projects and my interest is problem solving and learning new things.
     </SectionText>
  
      </LeftSection>
    </Section>
  </>
);

export default Hero;
