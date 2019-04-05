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
        <section className={classes.section}>
          <Heading text="intro" />
          <p>
            I am a React Front End Developer with a passion for building things.
            I studied Full-Stack Development, been a part of three exciting
            product launches with some amazing agile teams, and looking to be a
            part of your next big thing.
          </p>
          <p />
        </section>
        <section className={classes.section}>
          <Heading text="technical" />
          <p>
            HTML/CSS, JavaScript (ES6), React, Redux, Express, Node, Ruby on
            Rails, Firebase, Mongo, SQL, RESTful API, PWA, Git
          </p>
          <p>
            I graduated from CodeCore which focused on JavaScript and Ruby
            development. More recently, I have been working primarily with React
            and have been focusing on Front End Development.
          </p>
        </section>
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
  section: {
    marginBottom: 64,
  },
  notes: {
    marginTop: 64,
    textAlign: 'center',
  },
  mutedText: {
    color: 'rgba(255,255,255,0.2)',
  },
}
export default withStyles(styles)(Container)
