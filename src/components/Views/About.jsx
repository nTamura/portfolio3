import React from 'react'
import withStyles from 'react-jss'

function About({ classes }) {
  return (
    <div className={`${classes.root} ${'container'}`}>
      <p>about page</p>
    </div>
  )
}

const styles = {
  root: {},
}
export default withStyles(styles)(About)
