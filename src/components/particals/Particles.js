import React from "react";
import { Particles as ReactParticles } from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  particlesCanvas: {
    position: "",
    opacity: "0.3"
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "line",
            stroke: {
              width: 5,
              color: "tomato",
            },
          },
          size: {
            value: 7,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particles;
