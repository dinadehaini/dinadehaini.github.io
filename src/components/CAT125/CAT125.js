import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";



import laptopImg from "../../Assets/Dina2.PNG";



import myImg from "../../Assets/DinaDehaini.PNG";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function CAT125() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={9}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "500px",
            }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> More About Me</span>
              </h1>

              <p className="home-about-body">
              Welcome to my portfolio! A little about me: I started programming pretty young and discovered a love for Artificial Intelligence and Machine Learning. 
              <br />
              <br />I am fluent in classics like
              
                <b className="purple"> C++, Java, Python, and JavaScript. </b>
        
              <br />
          </p>
            
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "5px", paddingBottom: "50px" }}
            className="about-img"
          >
            
          </Col>
        </Row>
        

        
      </Container>
    </Container>
  );
}

export default CAT125;
