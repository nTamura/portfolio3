import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'
import withStyles from 'react-jss'
import { Transition } from 'react-transition-group'

function ParticleContainer({ classes }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  })
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  return (
    <Transition in={loaded} timeout={200}>
      {state => (
        <Particles
          canvasClassName={classes.container}
          style={{
            transition: 'opacity 1500ms ease-in',
            opacity: 0,
            ...transitionStyles[state],
          }}
          params={{
            particles: {
              number: {
                value: 80,
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
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'top-right',
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
                resize: 'true',
                onclick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </Transition>
  )
}

const styles = {
  container: {
    minHeight: 150,
    maxHeight: 150,
  },
}
export default withStyles(styles)(ParticleContainer)
