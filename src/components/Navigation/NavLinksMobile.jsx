import React, { useState } from 'react'
import withStyles from 'react-jss'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import { Transition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function NavLinksMobile({ classes }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <NavLink exact to="/" className={classes.activeLink}>
          nic
          <br />
          tamura
        </NavLink>
        <button
          type="button"
          className={classes.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HamburgerMenu
            isOpen={menuOpen}
            width={18}
            height={15}
            color="#FFF"
            animationDuration={0.4}
            menuClicked={() => setMenuOpen(!menuOpen)}
          />
        </button>
      </div>
      <Transition in={menuOpen} unmountOnExit timeout={200}>
        {state => (
          <div className={classes.dropdownMenu}>
            <NavLink
              to="/portfolio"
              className={classes.link}
              activeClassName={classes.activeLink}
              onClick={() => setMenuOpen(false)}
              style={{
                transition: 'opacity 100ms ease-in-out',
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
              onClick={() => setMenuOpen(false)}
              style={{
                transition: 'opacity 300ms ease-in-out',
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
              onClick={() => setMenuOpen(false)}
              style={{
                transition: 'opacity 500ms ease-in-out',
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
              onClick={() => setMenuOpen(false)}
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
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    outline: 'none',
    border: '1px solid #000',
    backgroundColor: '#000',
    color: '#FFF',
    padding: 16,
    margin: 10,
    '&:active': {
      border: '1px solid #FFF',
    },
  },
  dropdownMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 10,
    height: 214,
    marginBottom: '-214px',
  },
  link: {
    padding: 8,
    margin: 10,
    zIndex: 20,
    '&:hover': {
      backgroundColor: 'black',
    },
  },
  activeLink: {
    backgroundColor: 'black',
    padding: 8,
    margin: 10,
  },
}

export default withStyles(styles)(NavLinksMobile)
