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
            I'm a front-end developer currently learning about microservices
            with Node js and React. I've also started my first official blogging
            site <a href="https://www.codealpaca.io">codeAlpaca</a>. One of my
            2020 goals this year has been to learn new technology or concept
            every single month.
          </p>
          <p>
            In March 2018, I joined Fullstack Academy's Flagship course, the
            Software Engineering Immersive Program and completed the Full stack
            JavaScript over a period of 13 weeks.
          </p>
          <p>
            Creating something from ground up and come to see it alive has been
            the most time consuming but also very satisfying.
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
