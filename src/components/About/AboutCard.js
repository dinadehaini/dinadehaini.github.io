import React from "react";
import Card from "react-bootstrap/Card";
import { ImEmbed2 } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/DinaDehaini.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
           <p style={{ textAlign: "justify" }}>
            Welcome to my portfolio, a space where I can share my experiences and skills with youI am from <span className="purple"> San Diego, California </span>
            and a student at UC San Diego, studying Cognitive Science with a Specialization in Machine Learning and Neural Computation along with a 
                  minor in Computer Science Engineering.
            <br />
            

            <br />My research and professional experiences lie in computer vision and natural language processing.
            <br />
            <br />
            Apart from tech, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImEmbed2 /> Surfing
            </li>
            <li className="about-activity">
              <ImEmbed2 /> Reading
            </li>
            <li className="about-activity">
              <ImEmbed2 /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
