import React, { useEffect, useState } from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import HeroSm from 'components/Common/HeroSm'
import projects from 'components/Helpers/projects'
import Heading from 'components/Common/Heading'
import Contain from 'components/Common/Contain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Chip from 'components/Common/Chip'
function PortfolioPiece({ classes, match }) {
  useEffect(() => {
    // console.log(match.url)
    getSingleProject(match.url)
  }, [])

  const [item, setItem] = useState(null)

  const getSingleProject = path => {
    setItem(projects.find(item => item.slug === path))
  }

  return (
    <Contain>
      <HeroSm title="showcase" />
      {item ? (
        <section>
          <Heading text={`${item.title}`} />

          <div className={classes.justified}>
            <span className={classes.muted}>{item.type}</span>
            <div className={classes.column}>
              {item.github && (
                <a href={item.github} className={classes.link}>
                  github
                  <FontAwesomeIcon icon={faGithub} className={classes.iconGh} />
                </a>
              )}
              <a href={item.url} className={classes.link}>
                project link
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={classes.icon}
                />
              </a>
            </div>
          </div>
          <h3>{String.raw`${item.description}`}</h3>

          <img src={item.image1} className={classes.img} />
          <pre className={classes.pre}>{item.summary}</pre>

          {item.image2 && <img src={item.image2} className={classes.img} />}
          {item.summary2 && <pre className={classes.pre}>{item.summary2}</pre>}

          <div className={classes.chipsContainer}>
            <p className={classes.tags}>tags: </p>
            {item.tags.map((chip, i) => (
              <Chip text={chip} key={i} />
            ))}
          </div>
          <div className={classes.goBack}>
            <Link to="/portfolio" className={classes.link}>
              <FontAwesomeIcon icon={faArrowLeft} className={classes.icon} />
              go back
            </Link>
          </div>
        </section>
      ) : (
        <p>There does not seem to be anything here. </p>
      )}
    </Contain>
  )
}

const styles = {
  root: {},
  justified: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  pre: {
    fontFamily: 'inherit',
    whiteSpace: 'pre-wrap',
    lineHeight: '2rem',
    fontSize: '1.1rem',
    margin: '40px 0',
  },
  chipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 40,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '24px',
    textAlign: 'right',
  },
  muted: {
    color: 'rgba(255,255,255,0.6)',
    fontStyle: 'italic',
    fontSize: '1.2rem',
  },
  icon: { margin: '0 8px' },
  iconGh: { margin: '0 11px 0 8px' },
  tags: { marginRight: 8 },
  link: { verticalAlign: 'top' },
  img: { width: '100%' },
  goBack: {
    marginTop: 80,
    textAlign: 'center',
  },
}
export default withStyles(styles)(PortfolioPiece)
