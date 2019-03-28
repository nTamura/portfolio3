import React from 'react'
import withStyles from 'react-jss'
import Hero from 'components/Views/Main/Hero'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <Hero />
      <div className="container">
        <p>body content here</p>
      </div>
    </div>
  )
}
const styles = {
  root: {},
}
export default withStyles(styles)(Container)
