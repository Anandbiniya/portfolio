import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../App.css';
// import Particles from "react-particles-js";

function Particle1() {

  const particlesInit = async (main) => {
    console.log(main);

   
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#180A0A",
            // value:"#FBCB0A",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 400,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            // value: "#37E2D5",
            value:"#ffff",
            // value:"#590696"
           
          },
          links: {
            color: "#ffff",
            distance: 10,
            enable: true,
            opacity: 0.1,
            width: 0.2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle1;
