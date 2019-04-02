import React, { Component } from 'react'
import withStyles from 'react-jss'
import { Switch, Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import Navbar from 'components/Navigation/Navbar'
import Footer from 'components/Navigation/Footer'
import Main from 'components/Views/Main'
import About from 'components/Views/About'
import Portfolio from 'components/Views/Portfolio'

function App({ classes }) {
  return (
    <Scrollbars
      id="app"
      autoHide
      autoHideTimeout={100}
      className={classes.scroll}
    >
      <Navbar />
      <div className={classes.flex}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </Scrollbars>
  )
}

const styles = {
  flex: {
    flexGrow: 1,
  },
}

export default withStyles(styles)(App)
