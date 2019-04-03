import React from 'react'
import withStyles from 'react-jss'
import Hero from 'components/Views/Main/Hero'
import Contain from 'components/Common/Contain'
import Heading from 'components/Common/Heading'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <Hero />
      <Contain>
        <section>
          <Heading text="intro" />
          <p>
            I am a React Front End Developer with a passion for building things.
            I studied Full-Stack Development, been a part of three exciting
            product launches with some amazing agile teams, and looking to be a
            part of your next big thing.
          </p>
          <Heading text="technical" />
          <p>
            HTML/CSS, JavaScript (ES6), React, Redux, Express, Node, Firebase,
            Mongo, SQL, RESTful API, PWA, Git
          </p>
          <p>
            I am a React Front End Developer with a passion for building things.
            I studied Full-Stack Development, been a part of three exciting
            product launches with some amazing agile teams, and looking to be a
            part of your next big thing.
          </p>
        </section>
      </Contain>
    </div>
  )
}
const styles = {
  root: {},
}
export default withStyles(styles)(Container)
