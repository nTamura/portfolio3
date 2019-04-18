import React from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'
import Contain from 'components/Common/Contain'

function Footer({ classes }) {
  return (
    <div className={classes.root} id="footer">
      <Contain>
        <div className={classes.socialContainer}>
          <div className={classes.iconContainer}>
            <a
              href="https://github.com/ntamura"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className={classes.iconContainer}>
            <a
              href="https://linkedin.com/in/nictamura/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className={classes.iconContainer}>
            <a
              href="https://angel.co/ntamura/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.icon}
            >
              <FontAwesomeIcon icon={faAngellist} />
            </a>
          </div>
        </div>
        <div className={classes.linksContainer}>
          <Link to="/" className={classes.links}>
            home
          </Link>
          {' / '}
          <Link to="/portfolio" className={classes.links}>
            portfolio
          </Link>
          {' / '}
          <Link to="/about" className={classes.links}>
            about
          </Link>
        </div>
        <p className={classes.mutedText}>
          designed &amp; developed by nic tamura
        </p>
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
  iconContainer: {
    margin: 16,
  },
  icon: {
    padding: 8,
    margin: 18,
    color: 'rgba(255,255,255,0.2)',
    boxSizing: 'content-box',
    '&:hover': {
      color: '#FFF',
    },
  },
  linksContainer: {
    marginTop: 16,
  },
  links: {
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
