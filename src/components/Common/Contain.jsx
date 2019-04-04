import React from 'react'
import withStyles from 'react-jss'

const Contain = ({ classes, children, ...rest }) => {
  return (
    <div {...classes} {...rest} className={classes.container}>
      {children}
    </div>
  )
}

const styles = {
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'border-box',
  },
  '@media screen and (min-width: 768px)': {
    container: {
      width: 750,
    },
  },
  '@media screen and (min-width: 992px)': {
    container: {
      width: 970,
    },
  },
  '@media screen and (min-width: 1200px)': {
    container: {
      width: 1170,
    },
  },
}
export default withStyles(styles)(Contain)
