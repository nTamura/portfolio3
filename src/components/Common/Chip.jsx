import React from 'react'
import withStyles from 'react-jss'

function Chip({ classes, text, ...rest }) {
  return <span className={classes.chips}>{text}</span>
}

const styles = {
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
export default withStyles(styles)(Chip)
