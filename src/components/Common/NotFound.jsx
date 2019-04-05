import React from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import Contain from 'components/Common/Contain'
import HeroSm from 'components/Common/HeroSm'
import Heading from 'components/Common/Heading'

function NotFound({ classes }) {
  return (
    <section className={classes.root}>
      <Contain>
        <HeroSm title="404" />
        <div>
          <h3>Woops</h3>
          <p>
            It looks like there is nothing here.
            <Link to="/" className={classes.link}>
              {' Click here '}
            </Link>
            to go back home.
          </p>
        </div>
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
export default withStyles(styles)(NotFound)
