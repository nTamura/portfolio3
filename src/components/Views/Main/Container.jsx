import React from 'react'
import withStyles from 'react-jss'
import Hero from 'components/Views/Main/Hero'
import Contain from 'components/Common/Contain'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <Hero />
      <Contain>
        <p>body content here</p>
      </Contain>
    </div>
  )
}
const styles = {
  root: {},
}
export default withStyles(styles)(Container)
