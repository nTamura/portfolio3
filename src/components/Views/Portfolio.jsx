import React from 'react'
import withStyles from 'react-jss'

function Portfolio({ classes }) {
  return (
    <div className={`${classes.root} ${'container'}`}>
      <p>about</p>
    </div>
  )
}

const styles = {
  root: {},
}
export default withStyles(styles)(Portfolio)
