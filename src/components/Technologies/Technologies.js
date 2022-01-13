import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListTitle1} from "./TechnologiesStyles";
import { Skills } from './Skills'

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to develope multiple projects.
    </SectionText>
    
  
    <List>
      {Skills.map((Skill) => (
        

          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>

           <div style={{
             display:"flex"
           }}>
           <img style={{
            width:"10%",
            marginTop:"7px"
          }} src={Skill.js} />
          
         <ListTitle1 style={{
           marginLeft:"7px",
           marginTop:"7px"
         }}>

     
         {Skill.tag1}</ListTitle1>
           
           </div>

           <div style={{
            display:"flex"
          }}>
          <img style={{
           width:"10%",
           marginTop:"7px"
           
         }} src={Skill.html} />
         
        <ListTitle1 style={{
          marginLeft:"7px",
          marginTop:"12px"
        }}>

    
        {Skill.tag2}</ListTitle1>
          
          </div>

          <div style={{
            display:"flex"
          }}>
          <img style={{
           width:"10%",
           marginTop:"7px"
         }} src={Skill.css} />
         
        <ListTitle1 style={{
          marginLeft:"7px",
          marginTop:"10px"
        }}>

    
        {Skill.tag3}</ListTitle1>
          
          </div>

          <div style={{
            display:"flex"
          }}>
          <img style={{
           width:"10%",
           marginTop:"7px"
         }} src={Skill.react} />
         
        <ListTitle1 style={{
          marginLeft:"7px",
          marginTop:"8px"
        }}>

    
        {Skill.tag4}</ListTitle1>
          
          </div>

          <div style={{
            display:"flex"
          }}>
          <img style={{
           width:"10%",
           marginTop:"7px"
         }} src={Skill.redux} />
         
        <ListTitle1 style={{
          marginLeft:"7px",
          marginTop:"9px"
        }}>

    
        {Skill.tag5}</ListTitle1>
          
          </div>
         
           
              
           
            

          </ListContainer>
          
        
          
      ))}
    </List>



   <br/>
   <br/>
   <br/>
   <br/>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
