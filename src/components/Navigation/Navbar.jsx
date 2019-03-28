import React from 'react'
import withStyles from 'react-jss'
import NavLinks from 'components/Navigation/NavLinks'
import NavLinksMobile from 'components/Navigation/NavLinksMobile'

function Navbar({ classes }) {
  return (
    <div className={`${classes.root} ${'container'}`}>
      <NavLinks />
      <NavLinksMobile />
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
}

export default withStyles(styles)(Navbar)
