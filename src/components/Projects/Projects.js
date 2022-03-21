import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="purple">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Image Captioning"
              description="Automatic text description generation for images via CNN encoder GRU decoder and transformer architecture model. Compared the BLEU score and validation loss of each model to evaluate the final results."
              link="https://github.com/Aditikk00/image-text-generation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Semi-Supervised Semantic Segmentation"
              description="Semantic segmentation via a mesh model that fuses and enhances predictions from two data sources, RGB and thermal images, and produces pseudo labels in order to perform cross pseudosupervised semi-supervised learning and encourage similar predictions. (Link unavailable)"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Semantic	Search	and	Recommendation"
              description="Built and deployed semantic search project with people also ask function for financial advisors at LPL Financial to reduce calls to the help center using AEM, Solr, and NLP solutions.             (Link unavailable)"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Accident Severity Prediction"
              description="Multiple regression analysis of traffic data which aims to predict accident severity based on a variety of attributes, will accomplish these goals as well as specifically benefit traffic app companies, such as Google Maps, Apple Maps, and Waze."
              link="https://github.com/dinadehaini/Accident-Severity-Prediction"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Benign/Malignant	Tumor	Prediction"
              description="Developed PCA, K-means, and Gaussian mixture model algorithms from scratch to predict benign vs malignant breast cancer tumors with the Wisconsin breast cancer diagnostic dataset andcompared the accuracy of both models on raw data and PCA data."
              link="https://github.com/dinadehaini/Benign-Malignant-Breast-Cancer-Preidction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
