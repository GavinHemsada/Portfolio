import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/face image.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const CX = -30, CY = 300;
const toRad = d => (d * Math.PI) / 180;

const pt = (r, deg) => ({
  x: CX + r * Math.sin(toRad(deg)),
  y: CY - r * Math.cos(toRad(deg)),
});

const arcPath = (r, startDeg, endDeg) => {
  const s = pt(r, startDeg);
  const e = pt(r, endDeg);
  return `M ${s.x.toFixed(1)} ${s.y.toFixed(1)} A ${r} ${r} 0 0 1 ${e.x.toFixed(1)} ${e.y.toFixed(1)}`;
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">

            {/* ---- Left column: text ---- */}
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 1 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Gavin Hemsanda</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* ---- Right column: hero image + arc ---- */}
            <Col md={6} className="hero-col">
              <div className="hero-wrapper">

                {/* Profile photo */}
                <img
                  src={myImg}
                  alt="home pic"
                  className="img-fluid hero-image"
                />

                {/* Social orbit overlay */}
                <div className="social-orbit">

                  {/* Three concentric arcs */}
                  <svg
                    className="orbit-svg"
                    viewBox="0 0 340 680"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    {/* Outermost — faintest */}
                    <path
                      d={arcPath(406, 15, 118)}
                      fill="none"
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="1"
                    />
                    {/* Middle */}
                    <path
                      d={arcPath(388, 15, 118)}
                      fill="none"
                      stroke="rgba(255,255,255,0.10)"
                      strokeWidth="1"
                    />
                    {/* Inner — most visible */}
                    <path
                      d={arcPath(370, 15, 118)}
                      fill="none"
                      stroke="rgba(255,255,255,0.20)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Icon buttons — positioned at exact arc points */}

                  <a
                    href="https://github.com/GavinHemsada"
                    target="_blank"
                    className="orbit-btn btn-pos-3"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gavin-hemsada-a2a86b24a/"
                    target="_blank"
                    className="orbit-btn btn-pos-4"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
