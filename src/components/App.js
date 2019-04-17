import React, { useEffect } from 'react'
import withStyles from 'react-jss'
import { Switch, Route } from 'react-router-dom'
import Scrollbars from 'react-scrollbars-custom'
import Navbar from 'components/Navigation/Navbar'
import Footer from 'components/Navigation/Footer'
import Main from 'components/Views/Main'
import About from 'components/Views/About'
import Portfolio from 'components/Views/Portfolio'
import NotFound from 'components/Views/NotFound'
import NotReady from 'components/Views/NotReady'
import classless from 'components/Helpers/classless'

function App({ classes }) {
  useEffect(() => {
    classless()
  }, [])

  return (
    <div className={classes.root}>
      <Scrollbars
        removeTracksWhenNotUsed
        noScrollX
        contentProps={{ className: classes.scroll }}
      >
        <Navbar />
        <div className={classes.body}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/portfolio" component={NotReady} />
            <Route path="/portfolio/:id" component={NotReady} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Scrollbars>
    </div>
  )
}

const styles = {
  root: {
    flex: 1,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 0,
  },
}

export default withStyles(styles)(App)
