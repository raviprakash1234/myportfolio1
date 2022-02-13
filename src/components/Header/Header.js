import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiOutlineCloudDownload } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
         <p style={{
           marginLeft:"35%"
         }}>
        
         <h2 style={{
           fontFamily:"cursive"
         }}>RPK</h2>
         </p>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="">
          <NavLink style={{
            marginLeft:"400px"
          }}>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink style={{
            marginLeft:"50px"
          }}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink style={{
            marginLeft:"50px"
          }}>Skills</NavLink>
        </Link>
      </li>
      <li>
        <a href="#about">
          <NavLink style={{
            marginLeft:"50px"
          }}>Contact</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/raviprakash1234">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ravi-prakash-kumar-b67467141/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
     <SocialIcons onClick={(e) => {
      e.preventDefault();
      window.location.href = '/files/ravi_prakash_kumar.pdf';
    }}>
     <div style={{
      display:"flex",
      
    }}>
    <AiOutlineCloudDownload   size="4rem" />
    <span style={{
      marginLeft:"5px",
      marginTop:"11px",
      marginRight:"8%"
    }}>Resume</span>
    </div>
     
     </SocialIcons>
    
    </Div3>
  </Container>
);

export default Header;
