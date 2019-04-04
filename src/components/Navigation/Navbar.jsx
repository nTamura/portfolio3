import React from 'react'
import withStyles from 'react-jss'
import NavLinks from 'components/Navigation/NavLinks'
import NavLinksMobile from 'components/Navigation/NavLinksMobile'
import MediaQuery from 'react-responsive'
import Contain from 'components/Common/Contain'

function Navbar({ classes }) {
  return (
    <div className={classes.root}>
      <Contain id="navbar">
        <MediaQuery minWidth={768}>
          {matches => (matches ? <NavLinks /> : <NavLinksMobile />)}
        </MediaQuery>
      </Contain>
    </div>
  )
}

const styles = {
  root: {},
}

export default withStyles(styles)(Navbar)
