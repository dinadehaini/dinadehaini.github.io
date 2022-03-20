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
            <span className="purple"> Critique</span>
              </h1>

              <p className="home-about-body">
              In much of my course work as a Cognitive Science major, I am exposed to material that engages students in a conversation in some of the more philosophical topics of intelligence and technology. Many times we are faced with questions at the intersection of biology, technology, and design with many or no right answers. One of my favorite discussions centers on design in technology in relation to societal and communal needs and motivations. In “How to Cook a Tiger and Other Design Fables”, Ph.D. candidate Xiaowei Wang discusses some of the development of technology in rural China, exemplifying the ways in which material, geography, and culture impact the way we design and build technology. 
              <br />
              <br />The audience was open to any students of UCSD interested in the content but most likely consisted of other Design students. In their presentation, Wang describes how design and tech vary in culture and area such as how a region's geography and history influence its development in the present day. Wang describes the general differences in rural and urban technological differences and how rural areas are often seen as old or participating in modern-day technological advances, why this view can be harmful, and policy changes in China happening in the name of rural revitalization.
              <br />
              <br />
              The medium used for the presentation was a simple slide set with images relating to the given information that seemed somewhat unorganized and rough but added to Wang’s credibility when you know that many of the pictures were in fact taken by Wang when studying this material.
              <br />
              <br />
Wang begins their presentation by immediately engaging the audience in a simple exercise, requiring action on their part and forcing their attention. This is a great way a presenter can make their presentation more of an experience and activity rather than just a lecture. The exercise seemed a little confusing in relation to what came next but then tied in nicely with the conclusion of the presentation. Wang then transitions into the design of something communal and most likely familiar: the kitchen table, relating it to their own experiences and connotations, providing an emotional connection.
              <br />
              <br />
For the rest of the presentation, Wang provides a clear thesis/point for the next portions of their presentation. They move from familiar examples to some of the main points of their presentation and rural technology. An example of rural tech that Wang mentions is a chicken "Fitbit" which arrives with an ordered slaughtered and plucked chicken. When scanned, all of the chicken's movements and information becomes available to the customer, a response to consumer fears of trust in food safety. This design and tech arise in this village as a result of modern-day cultural influences, fears in health and food safety, and geographical factors, years of agricultural practices in this region. Wang ends with a form of terrace rice irrigation that arose from community good in which neighbors switch patties and eventually developed their own tech since the most rural tech was aimed at large-scale farming, displaying how a community can also influence tech.
              <br />
              <br />
I found Wang's talk reminiscent of situated cognition, affordances, and joint affordances given their description of technology arising and its design varying based on environmental, cultural, and community factors. Towards the end of the lecture, when Wang describes the farmers that designed and built their own tech that would afford their small scale community farming practices, they could tie in the notion of joint vs single affordances and activity as the tech developed could only afford multiple farmers using it and was a result of joint activity

        
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
