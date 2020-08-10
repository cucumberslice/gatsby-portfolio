import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Sound from '../components/Sound'
import Scroll from '../components/scroll'

const HomeIndex = () => {
  const siteTitle = 'Welcome'
  const siteDescription = 'personal website'

  return (
    <Layout>
      <Scroll showBelow={250} />
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Hi, I'm Yeshi</h2>
            <h2>
              noun / Yee-shei, Yee'SHā / <Sound />
            </h2>
          </header>
          <p>
            Bred and raised in <strong>Bhutan</strong>, a tiny mystical kingdom
            Far Far Away, also known as the birth place of{' '}
            <strong>Gross National Happiness.</strong>
          </p>
          <p>
            In March 2018, I joined Fullstack Academy's Flagship course, the
            Software Engineering Immersive Program and completed the Full stack
            JavaScript over a period of 13 weeks.
          </p>
          <p>
            The upcoming tools and frameworks with modern web applications blew
            my mind away, and like any nerds out there, it was a love at first
            sight. I dived straight in, to become a developer.
          </p>
          <p>
            Away from computer, I like checking out local cafés, reading memoirs
            and looking up for soul food recipes to fix a nice evening meal.
          </p>
        </section>

        <section id="two">
          <h2>Recent Work</h2>
          <Gallery />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            <a href={`mailto:"wangdzi.yeshi@gmail.com"`}>
              wangdzi.yeshi@gmail.com
            </a>
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
