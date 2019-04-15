import React from 'react'
import withStyles from 'react-jss'
import Contain from 'components/Common/Contain'
import HeroSm from 'components/Common/HeroSm'
import Heading from 'components/Common/Heading'

function Container({ classes }) {
  return (
    <section className={classes.root}>
      <Contain>
        <HeroSm title="portfolio" />
        <Heading text="recommendations" />
        <p>here are some recommendations from people</p>
        <p>here are some recommendations from people</p>
        <p>here are some recommendations from people</p>
        <p>here are some recommendations from people</p>

        <Heading text="work" />
        <p>Here are some of my latest projects</p>
      </Contain>
    </section>
  )
}

const styles = {
  root: {
    flex: 1,
  },
}
export default withStyles(styles)(Container)
