import React, { Component } from 'react'
import withStyles from 'react-jss'
import Navbar from 'components/Navigation/Navbar'
import { Switch, Route } from 'react-router-dom'
import Main from 'components/Views/Main'
import About from 'components/Views/About'
import Portfolio from 'components/Views/Portfolio'

function App({ classes }) {
  return (
    <div id="app" className={classes.app}>
      <Navbar />
      <div className={classes.flex}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
      {/* <Footer> */}
      <div>this is footer</div>
      {/* </Footer> */}
    </div>
  )
}

const styles = {
  app: {
    backgroundColor: '#404E5C',
  },
  flex: {
    flexGrow: 1,
  },
}

export default withStyles(styles)(App)
