import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title=" BlogPost-API-ASP.NET"
              description="A RESTful API built with ASP.NET Core for managing blog posts, user accounts, comments, tags, and notifications. Designed for scalability, clean architecture, and easy integration with frontend applications."
              ghLink="https://github.com/GavinHemsada/BlogPost-API-ASP.NET.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Online Food Oder Backend"
              description="This is a backend application for an online food ordering system built using Node.js, Express, and MongoDB. It provides APIs for user authentication, restaurant management, menu handling, order processing, and payment integration.
              Features are
              User authentication (JWT-based login/register)
              Restaurant and menu management
              Order placement and tracking
              Admin panel for managing restaurants and orders
              Secure REST API with proper validation"
              ghLink="https://github.com/GavinHemsada/Online_Food_Oder_Backend-node.js-express-mongodb-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Next.js-Admin-Dashboard "
              description="This is a Next.js Admin Dashboard with authentication features, including Login and Register pages. The frontend is built with Next.js, while the backend is connected to MongoDB for user management."
              ghLink="https://github.com/GavinHemsada/Next.js-Admin-Dashboard.git"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Eye Clinic Management System"
              description="The Eye Clinic Management System is a comprehensive web-based application designed to streamline and enhance the operations of an eye clinic. This system provides an efficient way to manage patient records, appointments, billing, and communication among stakeholders. The project includes both frontend and backend development to ensure a seamless user experience.
              User-friendly interface using HTML, Bootstrap 5, and JavaScript.
              Secure backend built with PHP.
              Payment gateway integration using PayPal.
              Email notifications via SMTP."
              ghLink="https://github.com/GavinHemsada/Group_project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Library-Management-System-Back-End"
              description="The Library Management System is a backend application built using Spring Boot. It provides a secure and efficient way to manage library operations, including user authentication, book management, and email confirmation using JWT for authentication and SMTP for email verification."
              ghLink="https://github.com/GavinHemsada/Library-Management-System-Back-End.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face and Eye Detection System"
              description="I developed a real-time Face and Eye Detection System combined with Emotion Classification to assist in monitoring virtual interviews and identifying suspicious behaviors or emotional cues.
              Face and eye detection was implemented using OpenCV to accurately track the interviewer’s facial region and eye movement during a session.
              Built a CNN-based emotion classifier trained on the FER-2013 dataset using Keras and TensorFlow backend. The system analyzes facial expressions in real time to flag potential signs of dishonesty, discomfort, or unexpected emotional changes."
              ghLink="https://github.com/GavinHemsada/Face-and-Eye-Detection-System.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
