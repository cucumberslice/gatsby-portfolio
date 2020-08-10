import React from 'react'
import Typewriter from 'typewriter-effect'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <img src={avatar} alt="" className="image avatar" />

      <h1>
        <Typewriter
          options={{
            strings: [
              `I'm a full stack developer`,
              `a life long learner`,
              `an avid reader`,
              `a tennis player`,
              `a crypto currency investor`,
              `a mixologist!`,
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
