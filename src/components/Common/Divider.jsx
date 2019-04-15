import React from 'react'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Divider({ classes }) {
  return (
    <div className={classes.root}>
      <FontAwesomeIcon icon={faCircle} className={classes.outer} />
      <FontAwesomeIcon icon={faCircle} className={classes.middle} />
      <FontAwesomeIcon icon={faCircle} className={classes.outer} />
    </div>
  )
}

const styles = {
  root: {
    width: 200,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
  },
  outer: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '0.8rem',
  },
  middle: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '1.2rem',
  },
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 992px)': {},
  '@media screen and (min-width: 1200px)': {},
}
export default withStyles(styles)(Divider)
