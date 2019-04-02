import React from 'react'
import withStyles from 'react-jss'
import Hero from 'components/Views/Main/Hero'
import Contain from 'components/Common/Contain'
import Heading from 'components/Common/Heading'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <Hero />
      <Contain>
        <section>
          <Heading text="i'm nic." />
          <p>
            I am a React Front End Developer with a passion for building things.
            My background is in computer hardware and networking - I can build a
            working computer with my eyes closed (but I probably don&apos;t
            remember how to configure a Cisco switch anymore). I am a creative
            and resourceful problem solver that loves to learn and share
            knowledge. I don&apos;t like inefficiency, so if you give me a
            tedious task, I will most definitely find a more efficient way to do
            it.
          </p>
          {/* <p>
            I am excited to be a part of the React community and am enthusiastic
            for my journey in the web development field. 
          </p> */}
          <p>
            I have been a part of three exciting product launches and worked
            with some amazing agile teams, and looking to be a part of your next
            big thing!
          </p>
        </section>
      </Contain>
    </div>
  )
}
const styles = {
  root: {},
}
export default withStyles(styles)(Container)
