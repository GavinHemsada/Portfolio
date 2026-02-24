import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/rag.png";
import emotion from "../../Assets/Projects/face.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/travel.png";
import suicide from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/ev.png";

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
              title="Sri Lanka Tours & Travels Web Application (Next.js 16)"
              description="Sri Lanka Tours & Travels Web Application
A next-generation travel agency web app built with Next.js 16 (App Router) and TypeScript, designed to showcase Sri Lanka's destinations to both local and international tourists. The platform offers complete bilingual support in English and Sinhala using next-intl, dynamic tour/destination detail pages with rich image galleries, advanced real-time search and filtering with pagination, and smooth page transitions powered by Framer Motion. The backend is integrated with Supabase for data and authentication, and the fully responsive UI is built with Tailwind CSS v4."
              ghLink="https://github.com/GavinHemsada/travalling_application"
              demoLink="https://travalling-application.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Electo Volt E-Commerce Web Application (MERN Stack)"
              description="EV Shop — Electric Vehicle E-Commerce Platform
A production-grade, full-stack e-commerce ecosystem built exclusively for the EV market as a Final Year Project. The platform supports four distinct user roles — Buyers, Sellers, Financial Staff, and Admins — each with their own dedicated dashboard and feature set. Buyers can search and filter EVs, book test drives, and make secure purchases, while sellers manage inventories and track sales. What makes this project stand out is its integrated Machine Learning pipeline using ONNX Runtime, which predicts battery health and repair costs in real time. The backend is built with Node.js, Express.js, MongoDB, and Redis, and the frontend is a fast, responsive React 19 + TypeScript SPA with map-based services via Leaflet, data visualizations via Recharts, and PDF report generation."
              ghLink="https://github.com/GavinHemsada/Final-Year-Project-Ev-shop"
              demoLink="https://final-year-project-ev-shop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Next.js-Admin-Dashboard (Next.js)"
              description="This is a Next.js Admin Dashboard with authentication features, including Login and Register pages. The frontend is built with Next.js, while the backend is connected to MongoDB for user management."
              ghLink="https://github.com/GavinHemsada/Next.js-Admin-Dashboard"          
              demoLink="https://next-js-admin-dashboard-swart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="RAG System — AI Document Q&A Platform (Next.js + Python)"
              description="A production-ready, full-stack RAG (Retrieval-Augmented Generation) system that transforms static documents into an interactive, queryable knowledge base. Users can upload PDFs, TXTs, or DOCXs, which are automatically chunked, vectorized using Google Gemini embeddings, and stored in a Qdrant vector database. When a user asks a question, the system retrieves the most contextually relevant document chunks and feeds them to Gemini 1.5 Flash to generate precise, grounded answers. The backend is built with FastAPI (Python) and containerized with Docker, while the frontend is a sleek Next.js + Tailwind CSS chat interface with smooth Framer Motion animations."
              ghLink="https://github.com/GavinHemsada/Rag_system"
              demoLink="https://rag-system-puce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Eye Clinic Management System (PHP + MySQL)"
              description="The Eye Clinic Management System is a comprehensive web-based application designed to streamline and enhance the operations of an eye clinic. This system provides an efficient way to manage patient records, appointments, billing, and communication among stakeholders. The project includes both frontend and backend development to ensure a seamless user experience. User-friendly interface using HTML, Bootstrap 5, and JavaScript. Secure backend built with PHP. Payment gateway integration using PayPal. Email notifications via SMTP."
              ghLink="https://github.com/GavinHemsada/Group_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face and Eye Detection System (Python + TensorFlow)"
              description="I developed a real-time Face and Eye Detection System combined with Emotion Classification to assist in monitoring virtual interviews and identifying suspicious behaviors or emotional cues.
              Face and eye detection was implemented using OpenCV to accurately track the interviewer’s facial region and eye movement during a session.
              Built a CNN-based emotion classifier trained on the FER-2013 dataset using Keras and TensorFlow backend. The system analyzes facial expressions in real time to flag potential signs of dishonesty, discomfort, or unexpected emotional changes."
              ghLink="https://github.com/GavinHemsada/Face-and-Eye-Detection-System"
              demoLink="https://face-and-eye-detection-system.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
