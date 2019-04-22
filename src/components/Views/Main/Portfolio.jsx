import React from 'react'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import projects from 'components/Helpers/projects'
import Heading from 'components/Common/Heading'

function Portfolio({ classes }) {
  return (
    <section>
      <Heading text="porfolio" />
      <div className={classes.grid}>
        {projects.map(item => (
          <div className={classes.cell} key={item.id}>
            <img src={item.preview} className={classes.preview} alt="preview" />
            <Link to={item.slug}>
              <div className={classes.overlay}>
                <div className={classes.overlayTextContainer}>
                  <h1 className={classes.title}>{item.title}</h1>
                  <h3 className={classes.sub}>{item.type}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  grid: {
    display: 'flex',
    '@media (max-width:630px)': {
      flexDirection: 'column',
    },
  },
  cell: {
    flex: '1 1 auto',
    position: 'relative',
    margin: 16,
    alignSelf: 'center',
  },
  preview: {
    width: '100%',
    height: 'auto',
    maxWidth: 450,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity .3s ease-in-out',
    position: 'absolute',
    '&:hover': {
      opacity: 1,
    },
  },
  overlayTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    transition: 'opacity .3s ease-in-out',
  },
}
export default withStyles(styles)(Portfolio)
