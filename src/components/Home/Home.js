import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">

            <div>       
              <h1 style={{ paddingBottom: 15 }} className="heading"> <span>
                Hello World
                </span></h1>
                </div>
                
              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Dina Dehaini</strong>
              </h1>

              <div style={{ padding: 44, paddingBottom: 6, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 1 }}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
