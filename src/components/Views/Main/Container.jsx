import React from 'react'
import withStyles from 'react-jss'
import Hero from 'components/Views/Main/Hero'
import Contain from 'components/Common/Contain'
// import Divider from 'components/Common/Divider'
import Portfolio from 'components/Views/Main/Portfolio'
import Intro from 'components/Views/Main/Intro'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <Hero />
      <Contain>
        <Intro />
        <Portfolio />
        <div className={classes.notes}>
          <p className={classes.mutedText}>
            This site is currently in active development. Please check in later
            for more updated content.
          </p>
        </div>
      </Contain>
    </div>
  )
}
const styles = {
  root: {},
  notes: {
    marginTop: 64,
    textAlign: 'center',
  },
  mutedText: {
    color: 'rgba(255,255,255,0.2)',
  },
}
export default withStyles(styles)(Container)
