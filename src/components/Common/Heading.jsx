import React from 'react'
import withStyles from 'react-jss'
import Fade from 'react-reveal/Fade'

const Heading = ({ classes, text }) => {
  return (
    <div className={classes.root}>
      <h2 className={classes.text}>{text}</h2>
      <Fade left duration={3000} delay={500}>
        <div className={classes.underline} />
      </Fade>
    </div>
  )
}

const styles = {
  root: {
    marginTop: 16,
    marginBottom: 16,
    overflowX: 'hidden',
  },
  text: {
    marginBottom: 8,
  },
  underline: {
    borderBottom: '1px solid #FFF',
  },
}
export default withStyles(styles)(Heading)
