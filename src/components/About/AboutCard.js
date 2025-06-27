import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gavin Hemsada</span>
            from <span className="purple">Piliyandala, Sri Lanka.</span>
            <br />
            I am currently a passionate full-stack developer experienced in building dynamic web applications using technologies like Spring Boot, ASP.NET, JavaScript, Bootstrap, and React.
            <br />
            I am also an <span className="purple">undergraduate at the University of Moratuwa</span>, pursuing my degree in the BIT.
            <br />
            I have strong interests in backend systems, database design, and creating user-friendly UIs.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that create value and solve real problems!"
          </p>
          <footer className="blockquote-footer">Gavin Hemsada</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
