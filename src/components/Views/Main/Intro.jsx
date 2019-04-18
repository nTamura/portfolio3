import React from 'react'
import withStyles from 'react-jss'
import Heading from 'components/Common/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faReact,
  faCss3,
  faGithub,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { faTerminal, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import Chip from 'components/Common/Chip'

function Intro({ classes }) {
  return (
    <>
      <section>
        <Heading text="intro" />
        <p>
          I am a React Front End Developer with a passion for building things. I
          studied Full-Stack Development, been a part of three exciting product
          launches with some amazing agile teams, and looking to be a part of
          your next big thing.
        </p>
      </section>
      <section>
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
            <FontAwesomeIcon icon={faGithub} />
            {' Github'}
          </span>
          <span className={classes.chips}>
            <FontAwesomeIcon icon={faTerminal} />
            {' iTerm'}
          </span>
        </div>
      </section>
      <section>
        <h3 className={classes.subTitle}>secondary & complimentary</h3>
        <div className={classes.chipsContainer}>
          <Chip text="Node" />
          <Chip text="Redux" />
          <Chip text="Context API" />
          <Chip text="Hooks" />
          <Chip text="Express" />
          <Chip text="Invision" />
          <Chip text="Jira" />
          <Chip text="MongoDB" />
          <Chip text="mySQL" />
          <Chip text="Ruby on Rails" />
          <Chip text="RESTful API" />
          <Chip text="PWA" />
        </div>
      </section>
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
