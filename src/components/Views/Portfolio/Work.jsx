import React from 'react'
import withStyles from 'react-jss'
import water from 'components/Assets/Img/water.jpg'

import projects from 'components/Helpers/projects'

function Work({ classes }) {
  return (
    <div className={classes.root}>
      {projects.map(item => (
        <div className={classes.item}>
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.tags}>{item.tags}</p>
          </div>
          <div className={classes.summaryContainer}>
            {/* <div className={classes.overlay}> */}
            <p className={classes.summary}>{item.summary}</p>
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    '@media (min-width:992px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  item: {
    backgroundColor: '#404e5c',
    margin: 16,
  },
  titleContainer: {
    backgroundColor: '#272a38',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  title: {},
  tags: {
    margin: '0 0 8px',
    fontWeight: 'lighter',
  },
  overlay: {
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    '&:hover': {
      // backgroundImage: `url(${water})`,
      opacity: 0,
    },
  },
  summaryContainer: {
    // backgroundImage: `url(${water})`,
    backgroundSize: 'cover',
  },
  summary: {
    padding: 16,
    margin: 0,
  },
  description: {},
}
export default withStyles(styles)(Work)
