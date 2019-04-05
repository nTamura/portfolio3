import React from 'react'
import withStyles from 'react-jss'
import Contain from 'components/Common/Contain'
import Heading from 'components/Common/Heading'
import HeroSm from 'components/Common/HeroSm'

function About({ classes }) {
  return (
    <section className={classes.root}>
      <Contain>
        <HeroSm title="about" />
        <Heading text="i'm nic." />
        <p>
          I am a React Front End Developer with a passion for building things.
          My background is in computer hardware and networking - I can build a
          working computer with my eyes closed (but I probably don&apos;t
          remember how to configure a Cisco switch anymore). I am a graduate of
          CodeCore and have spent three cohorts as a teaching assistant at
          BrainStation. As a life-long learner, I am excited to be a part of the
          growing React community and am enthusiastic for my journey in the web
          development field.
        </p>
        <p>
          I am a creative and resourceful problem solver that loves to learn and
          share knowledge. I don&apos;t like inefficiency, so if you give me a
          tedious task, I will most definitely find a more efficient way to do
          it. I am always looking to learn and improve, while sharing the
          knowledge that I already have. I have been a part of three exciting
          product launches and worked with some amazing agile teams, and looking
          to be a part of your next big thing!
        </p>
        <p>
          You can connect with me via
          <a
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/nictamura/"
          >
            {' LinkedIn '}
          </a>
          or check out my
          <a
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ntamura/"
          >
            {' Github '}
          </a>
          repository for my latest projects.
        </p>
        <p>- nic</p>
      </Contain>
    </section>
  )
}

const styles = {
  root: {
    flex: 1,
  },
  heroText: {
    display: 'inline-block',
    backgroundColor: 'black',
    padding: 8,
    fontWeight: 300,
    fontSize: '2.5rem',
  },
  link: {
    fontWeight: 'bolder',
  },
}

export default withStyles(styles)(About)
