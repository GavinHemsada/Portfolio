import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Full-Stack Developer",
          "MERN Stack Enthusiast",
          "Spring Boot & ASP.NET Developer",
          "Machine Learning Enthusiast",
          "Open Source Contributor",
          "Tech Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
