import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and over time I've grown my skills through real-world projects and continuous learning.
              <br />
              <br />
              I am fluent in technologies like
              <i>
                <b className="purple"> C#, JavaScript, and Java. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative &nbsp;
              <i>
                <b className="purple">Web Applications and Scalable Backends</b>, especially using
                <b className="purple"> Spring Boot, ASP.NET</b>, and modern tools.
              </i>
              <br />
              <br />
              Whenever possible, I love developing full-stack solutions using <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern frontend frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Next.js, and TypeScript</b>
              </i>
              .
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GavinHemsada"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gavin-hemsada-a2a86b24a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
