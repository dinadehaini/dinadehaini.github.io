import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/DinaDehaini.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              Welcome to my portfolio! A little about me: I started programming pretty young and discovered a love for Artificial Intelligence and Machine Learning. 
              <br />
              <br />I am fluent in classics like
              
                <b className="purple"> C++, Java, Python, and JavaScript. </b>
        
              <br />
              <br />
              My passions lie in building and researching new&nbsp;
              
                <b className="purple">solutions</b> in the realm of
                {" "}
                <b className="purple">
                  Deep Learning.
                </b>
                <br />   
                <br /> 
                <br /> 
        
              
            </p>
          </Col>
          <br />
          <Col md={4} className="myAvtar">
          <br />
          <br />
          <br />
          <br />
          <br />
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
          <br />
          <br />
          <br />
          <br />
          
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dinadehaini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/dinadehaini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dinadehaini/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dinadehaini/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
