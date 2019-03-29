import React from 'react'
import withStyles from 'react-jss'
import Particles from 'components/Views/Main/Particles'

function Hero({ classes }) {
  return (
    <div className={classes.root}>
      <Particles />
      <div className={classes.container}>
        <h1 className={classes.heroText}>
          nic
          <br />
          tamura
        </h1>
        <h5 className={classes.heroSubText}>
          I&apos;m a frontend developer based in Vancouver.
        </h5>
      </div>
    </div>
  )
}
const styles = {
  root: {
    position: 'relative',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none',
  },
  heroText: {
    display: 'inline-block',
    backgroundColor: 'black',
    padding: 8,
  },
  heroSubText: {
    backgroundColor: 'black',
    padding: 8,
  },
}
export default withStyles(styles)(Hero)
