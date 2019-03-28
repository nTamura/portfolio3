import React from 'react'
import withStyles from 'react-jss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function NavLinks({ classes }) {
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
      </a>
    </div>
  )
}

const styles = {
  root: {
    '@media screen and (max-width: 769px)': {
      display: 'none',
    },
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
