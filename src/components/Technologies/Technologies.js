import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { Skills } from './Skills'

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to develope multiple projects.
    </SectionText>
    
   
<div style={{
  display:"flex"
}}>

<div>
<h1>Front-end</h1>
<div style={{
  display:"flex"
}}>
<img style={{
  width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/javascript.svg" />
<h2 style={{
  marginLeft:"15px"
}}>JavaScripts</h2>
</div>


<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/html-5.svg" />
<h2 style={{
 marginLeft:"15px"
}}>HTML</h2>
</div>


<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/css3.svg" />
<h2 style={{
 marginLeft:"15px"
}}>Css</h2>
</div>



<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/react.svg" />
<h2 style={{
 marginLeft:"15px"
}}>ReactJs</h2>
</div>



<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/redux.svg" />
<h2 style={{
 marginLeft:"15px"
}}>Redux</h2>
</div>


</div>





<div style={{
  marginLeft:"200px"
}}>
<h1>Back-end</h1>
<div style={{
  display:"flex"
}}>
<img style={{
  width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/exp.png" />
<h2 style={{
  marginLeft:"15px"
}}>ExpressJs</h2>
</div>


<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://imgr.search.brave.com/TpSURinqZoWegPfCe6lzWWDHQ_OIzzt76frSa9b_vmw/fit/711/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/Z2YySlFRbVdsYS1H/VS1XWFRyR2NnSGFF/OCZwaWQ9QXBp" />
<h2 style={{
 marginLeft:"15px"
}}>NodeJs</h2>
</div>


<div style={{
 display:"flex",
 marginTop:"20px"
}}>
<img style={{
 width:"30px"
}} src="https://imgr.search.brave.com/ZWimL-QF5hEt04KcnVkiXazJBPfvQKT-QXN6fQingDE/fit/474/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/R1ByamhDc3NHWXNa/NkM2Z2tDc1h3SGFI/YSZwaWQ9QXBp" />
<h2 style={{
 marginLeft:"15px"
}}>MongoDb</h2>
</div>

</div>







<div style={{
  marginLeft:"200px"
}}>
<h1>Programming Languages</h1>
<div style={{
  display:"flex"
}}>
<img style={{
  width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/javascript.svg" />
<h2 style={{
  marginLeft:"15px"
}}>JavaScripts</h2>
</div>

</div>
</div>




<div style={{
  marginTop:"100px"
}}>
<h1>Version Control</h1>
<div style={{
  display:"flex"
}}>
<img style={{
  width:"30px"
}} src="https://portfolio-vinayak-pk.vercel.app/svg/github.svg" />
<h2 style={{
  marginLeft:"15px"
}}>GitHub</h2>
</div>

</div>




   <br/>
   <br/>
   <br/>
   <br/>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
