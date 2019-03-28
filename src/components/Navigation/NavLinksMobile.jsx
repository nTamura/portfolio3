import React, { useState, useEffect, useRef } from 'react'
import withStyles from 'react-jss'
import { NavLink, Link } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import HamburgerMenu from 'react-hamburger-menu'

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

      <div>
        <button
          ref={node}
          className={classes.menuButton}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HamburgerMenu
            isOpen={menuOpen}
            width={18}
            height={15}
            color="#FFF"
            animationDuration={0.4}
          />
        </button>

        <Transition in={menuOpen} timeout={200}>
          {state => (
            <div className={classes.dropdownMenu}>
              <Link
                to="/portfolio"
                className={classes.link}
                activeClassName={classes.activeLink}
                style={{
                  transition: 'opacity 100ms ease-in-out',
                  opacity: 0,
                  ...transitionStyles[state],
                }}
              >
                portfolio
              </Link>
              <Link
                to="/about"
                className={classes.link}
                activeClassName={classes.activeLink}
                style={{
                  transition: 'opacity 300ms ease-in-out',
                  opacity: 0,
                  ...transitionStyles[state],
                }}
              >
                about
              </Link>

              <a
                href="https://www.linkedin.com/in/nictamura/"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
                style={{
                  transition: 'opacity 500ms ease-in-out',
                  opacity: 0,
                  ...transitionStyles[state],
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/nictamura/"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
                style={{
                  transition: 'opacity 700ms ease-in-out',
                  opacity: 0,
                  ...transitionStyles[state],
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          )}
        </Transition>
      </div>
    </div>
  )
}

const styles = {
  root: {
    '@media screen and (min-width: 768px)': {
      display: 'none',
    },
    display: 'flex',
    width: '100%',
  },
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
