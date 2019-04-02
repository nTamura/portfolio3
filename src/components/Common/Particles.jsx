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
              resize: 'true',
              events: {
                onhover: {
                  enable: true,
                  mode: ['grab', 'bubble'],
                },
              },
              modes: {
                grab: {
                  distance: 200,
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
      )}
    </Transition>
  )
}

const styles = {
  container: {
    minHeight: 500,
  },
}
export default withStyles(styles)(ParticleContainer)
