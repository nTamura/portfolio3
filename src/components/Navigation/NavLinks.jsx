import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Transition } from 'react-transition-group'

function NavLinks({ classes }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  })
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  return (
    <div className={classes.root}>
      <div className={classes.flexGrow}>
        <NavLink
          exact
          to="/"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          nic
          <br />
          tamura
        </NavLink>
      </div>

      <Transition in={loaded} timeout={200}>
        {state => (
          <>
            <NavLink
              to="/portfolio"
              className={classes.link}
              activeClassName={classes.activeLink}
              style={{
                transition: 'opacity 2000ms ease-in',
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={classes.link}
              activeClassName={classes.activeLink}
              style={{
                transition: 'opacity 1500ms ease-in',
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              about
            </NavLink>
            <a
              href="https://github.com/ntamura"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
              style={{
                transition: 'opacity 1000ms ease-in',
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/nictamura/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
              style={{
                transition: 'opacity 500ms ease-in',
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </>
        )}
      </Transition>
    </div>
  )
}

const styles = {
  root: {
    // '@media screen and (max-width: 769px)': {
    //   display: 'none',
    // },
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  flexGrow: {
    display: 'flex',
    flex: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: 8,
    margin: 10,
    transition: 'background-color 0.4s ease',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
    '&:active': {
      border: '1px solid #FFF',
    },
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'black',
    padding: 8,
    margin: 10,
  },
  '&:active': {
    border: '1px solid #FFF',
  },
}

export default withStyles(styles)(NavLinks)
