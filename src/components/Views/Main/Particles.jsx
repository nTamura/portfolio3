import React from 'react'
import Particles from 'react-particles-js'
import withStyles from 'react-jss'

const ParticleContainer = ({ classes }) => (
  <Particles
    canvasClassName={classes.container}
    params={{
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#FFF',
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.4,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 90,
          color: '#FFF',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'right',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: ['grab', 'bubble'],
          },
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
        },
      },
      retina_detect: true,
    }}
  />
)

const styles = {
  container: {
    minHeight: 500,
  },
}
export default withStyles(styles)(ParticleContainer)
