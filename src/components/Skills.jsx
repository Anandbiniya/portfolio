// import React from 'react'
// import reactlogo from "../img/react.jpg"
// import TS from "../img/TS logog.jpg"
// import JS from "../img/javascript.jpg"
// import CSS from "../img/CSSS.jpg"
// import mongo from "../img/mongo.jpg"
// import node from "../img/nodes.jpg"
// import redux from "../img/Redx.jpg"
// import html from "../img/Htmlogo.jpg"

// function Skills() {
//   return (
//     <div className='skills'>
//         <div >
//            <img src={html} alt=""/>
            
//         </div>
//         <div >
//            <img src={CSS} alt="" />
            
//         </div>
//         <div>
//            <img src={JS} alt=""  />
            
//         </div>
//         <div >
//            <img  src={reactlogo} alt=""  />
            
//         </div>
//         <div >
//            <img  src={redux} alt=""  />
            
//         </div>
//         <div >
//            <img  src={TS} alt=""  />
            
//         </div>
//         <div >
//            <img  src={node} alt=""  />
          
//         </div>
//         <div >
//            <img  src={mongo} alt=""  />
            
//         </div>
//     </div>
//   )
// }

// export default Skills








import React from "react";
import "../App.css"
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

import {
   SiLinux,
   SiVisualstudiocode,
   SiPostman,
   SiHeroku,
   SiVercel,
 } from "react-icons/si";
 
function Techstack() {
  return (
   <Container fluid className='about-section'>
      <Container>
      <h1 className='project-heading'>
          Professional <strong className='orange'>Skillset </strong>
        </h1>

    

        
      
   <Row style={{display:"flex", justifyContent: "center", paddingBottom: "50px" }}>
   <Col xs={4} md={2} className="tech-icons">
     <SiLinux />
   </Col>
   <Col xs={4} md={2} className="tech-icons">
     <SiVisualstudiocode />
   </Col>
   <Col xs={4} md={2} className="tech-icons">
     <SiPostman />
   </Col>
   <Col xs={4} md={2} className="tech-icons">
     <SiVercel />
   </Col>
   <Col xs={4} md={2} className="tech-icons">
     <SiHeroku />
   </Col>
 </Row>
 <h1 className='project-heading'>
          <strong className='orange'>Tools</strong> I use
        </h1> 
    <Row style={{display:"flex", justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

    </Row>
    </Container>
    </Container>
  );
}

export default Techstack;
