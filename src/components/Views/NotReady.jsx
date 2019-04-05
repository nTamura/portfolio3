import React from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import Contain from 'components/Common/Contain'
import HeroSm from 'components/Common/HeroSm'

function NotReady({ classes }) {
  return (
    <section className={classes.root}>
      <Contain>
        <HeroSm title="418" />
        <h3>Work in progress</h3>
        <p>
          Sorry, this page is not ready yet but is actively being worked on.
          <Link to="/" className={classes.link}>
            {' Click here '}
          </Link>
          to go back home.
        </p>
      </Contain>
    </section>
  )
}

const styles = {
  root: {},
  link: {
    fontWeight: 'bolder',
  },
}
export default withStyles(styles)(NotReady)
