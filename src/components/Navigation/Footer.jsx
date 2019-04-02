import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBracketsCurly } from '@fortawesome/free-solid-svg-icons'
import withStyles from 'react-jss'

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <FontAwesomeIcon
        icon={faCode}
        color="rgba(255,255,255,0.2"
        className={classes.icon}
      />
    </div>
  )
}
const styles = {
  root: {
    textAlign: 'center',
  },
  icon: {
    color: 'rgba(255,255,255,0.5',
  },
}
export default withStyles(styles)(Footer)
