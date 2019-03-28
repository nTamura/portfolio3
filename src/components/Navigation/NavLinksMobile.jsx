import React, { useState, useEffect, useRef } from 'react'
import withStyles from 'react-jss'
import { NavLink, Link } from 'react-router-dom'
import { CSSTransition, Transition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavLinksMobile({ classes }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick(), false)
    return () => {
      document.removeEventListener('click', handleOutsideClick(), false)
    }
  }, [])

  const node = useRef(null)

  // const toggleMenu = e => {
  //   if (!menuOpen) {
  //     document.addEventListener('click', handleOutsideClick(e), false)
  //   } else {
  //     document.removeEventListener('click', handleOutsideClick(e), false)
  //   }
  //   setMenuOpen(!menuOpen)
  // }

  const handleOutsideClick = () => {
    if (!node.current) {
      setMenuOpen(false)
    }
  }

  const defaultStyle = (value = 200) => {
    transition: `opacity ${value}ms ease-in-out`,
    opacity: 0,
  }
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
        <pre>{JSON.stringify(menuOpen, 2, null)}</pre>
      </div>

      <Transition in={inProp} timeout={200}>
        {state => (
          <>
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
          </>
        )}
      </Transition>

      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>

      <div>
        <button
          ref={node}
          className={classes.menuButton}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Transition in={menuOpen} timeout={500}>
          {/* {menuOpen => */}
          <>
            <Link
              to="/portfolio"
              // className={classes.link}
              // className={menuOpen ? 'fadeIn' : 'fadeOut'}
              activeClassName={classes.activeLink}
            >
              portfolio
            </Link>
            <Link
              to="/about"
              // className={classes.link}
              // className={menuOpen ? 'fadeIn' : 'fadeOut'}
              activeClassName={classes.activeLink}
            >
              about
            </Link>
            <a
              href="https://www.linkedin.com/in/nictamura/"
              rel="noopener noreferrer"
              target="_blank"
              // className={classes.link}
              // className={menuOpen ? 'fadeIn' : 'fadeOut'}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/nictamura/"
              rel="noopener noreferrer"
              target="_blank"
              // className={classes.link}
              // className={menuOpen ? 'fadeIn' : 'fadeOut'}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </>
        </Transition>
      </div>
      {/* 
      <NavLink
        to="/portfolio"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        portfolio
      </NavLink>
      <NavLink
        to="/about"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        about
      </NavLink>
      <a
        href="https://www.linkedin.com/in/nictamura/"
        rel="noopener noreferrer"
        target="_blank"
        className={classes.link}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/nictamura/"
        rel="noopener noreferrer"
        target="_blank"
        className={classes.link}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a> */}
    </div>
  )
}

const styles = {
  // fadeOut: {
  //   opacity: 0,
  //   width: 0,
  //   height: 0,
  //   transition: 'width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s',
  // },
  // fadeIn: {
  //   opacity: 1,
  //   width: 100,
  //   height: 100,
  //   transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s',
  // },
  root: {
    '@media screen and (min-width: 768px)': {
      display: 'none',
    },
    display: 'flex',
    width: '100%',
  },
  // transition2: {
  //   transition: 'opacity 500ms ease-in',
  // },
  flexGrow: {
    display: 'flex',
    flex: 1,
  },
  menuButton: {
    background: 'transparent',
    border: '1px solid #000',
    backgroundColor: '#000',
    color: '#FFF',
    padding: 16,
    margin: 10,
    outline: 'none',
    '&:active': {
      border: '1px solid #FFF',
    },
  },
  dropdownMenu: {
    display: 'flex',
    flexDirection: 'column',
    right: 16,
    textAlign: 'right',
    position: 'absolute',
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
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'black',
    padding: 8,
    margin: 10,
  },
}

export default withStyles(styles)(NavLinksMobile)
