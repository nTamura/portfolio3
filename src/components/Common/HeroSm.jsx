import React from 'react'
import withStyles from 'react-jss'
import ParticlesSm from 'components/Common/ParticlesSm'

const HeroSm = ({ classes, title }) => (
  <div className={classes.root}>
    <ParticlesSm />
    <div className={classes.container}>
      {title && <h1 className={classes.heroText}>{title}</h1>}
    </div>
  </div>
)

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
    fontWeight: 300,
    fontSize: '2.5rem',
  },
}
export default withStyles(styles)(HeroSm)
