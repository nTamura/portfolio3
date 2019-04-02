import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'
import Contain from 'components/Common/Contain'
import withStyles from 'react-jss'

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Contain>
        <div className={classes.socialContainer}>
          <a
            href="https://www.linkedin.com/in/nictamura/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className={classes.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/nictamura/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </a>
          <a
            href="https://angel.co/ntamura/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faAngellist} className={classes.icon} />
          </a>
        </div>
        <div className={classes.linksContainer}>
          <Link to="/" className={classes.links}>
            home
          </Link>
          {' / '}
          <Link to="/" className={classes.links}>
            portfolio
          </Link>
          {' / '}
          <Link to="/" className={classes.links}>
            about
          </Link>
        </div>
        <p className={classes.mutedText}>designed & developed by nic tamura</p>
      </Contain>
    </div>
  )
}
const styles = {
  root: {
    textAlign: 'center',
    backgroundColor: '#272a38',
    padding: 32,
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    margin: 24,
    padding: 8,
    color: 'rgba(255,255,255,0.2)',
    '&:hover': {
      color: '#FFF',
    },
  },
  linksContainer: {},
  links: {
    textDecoration: 'none',
    padding: 8,
    margin: 8,
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  mutedText: {
    color: 'rgba(255,255,255,0.2)',
  },
}
export default withStyles(styles)(Footer)
