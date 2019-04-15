import React from 'react'
import withStyles from 'react-jss'
import Heading from 'components/Common/Heading'
import Divider from 'components/Common/Divider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faReact,
  faCss3,
  faGithub,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { faTerminal, faFireAlt } from '@fortawesome/free-solid-svg-icons'

function Intro({ classes }) {
  return (
    <>
      <Heading text="intro" />
      <p>
        I am a React Front End Developer with a passion for building things. I
        studied Full-Stack Development, been a part of three exciting product
        launches with some amazing agile teams, and looking to be a part of your
        next big thing.
      </p>
      <Divider />

      <h3 className={classes.subTitle}>primary skills & tools</h3>
      <div className={classes.chipsContainer}>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faHtml5} />
          {' HTML5'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faCss3} />
          {' CSS3'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faJs} />
          {' JavaScript'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faReact} />
          {' React'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faFireAlt} />
          {' Firebase'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faTerminal} />
          {' iTerm'}
        </span>
        <span className={classes.chips}>
          <FontAwesomeIcon icon={faGithub} />
          {' Github'}
        </span>
      </div>
      <h3 className={classes.subTitle}>secondary & complimentary</h3>
      <div className={classes.chipsContainer}>
        <span className={classes.chips}>Node</span>
        <span className={classes.chips}>Redux</span>
        <span className={classes.chips}>Context API</span>
        <span className={classes.chips}>Hooks</span>
        <span className={classes.chips}>Express</span>
        <span className={classes.chips}>Invision</span>
        <span className={classes.chips}>Jira</span>
        <span className={classes.chips}>MongoDB</span>
        <span className={classes.chips}>SQL</span>
        <span className={classes.chips}>Ruby on Rails</span>
        <span className={classes.chips}>RESTful API</span>
        <span className={classes.chips}>PWA</span>
      </div>
    </>
  )
}
const styles = {
  root: {
    marginTop: 64,
    marginBottom: 64,
    display: 'inline-block',
  },
  subTitle: {
    display: 'inline-block',
  },
  chipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chips: {
    border: '1px solid',
    padding: '8px 16px',
    borderRadius: 20,
    margin: 8,
    color: 'rgba(255,255,255,0.6)',
    '&:hover': {
      color: '#FFF',
    },
  },
}
export default withStyles(styles)(Intro)
