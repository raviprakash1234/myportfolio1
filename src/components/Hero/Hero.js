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
        <SectionTitle style={{fontSize:"35px"}}>
          Hey there,
          </SectionTitle>
      <h1>
      <Typewriter 
      options={{
        strings: ["I Am Ravi Prakash Kumar",
                  "Full Stack Web Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
      
      </h1>
        
       
   <br/>
   <br/>

    <SectionText>
    I am a Full Stack Web Developer with a specialization in MERN stack. Fluent in JavaScripts Html and Css. 
    Passionate about implementing and launching new projects and I am also interested to learn UI/UX design.
     </SectionText>
  
      </LeftSection>
    </Section>
  </>
);

export default Hero;
