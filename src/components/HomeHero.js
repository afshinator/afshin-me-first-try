import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useTransition, animated } from 'react-spring'
import Img from "gatsby-image"
import myPic from "../images/me1.png"
import slide2 from "../images/hero-slide2.png"

const Arrow = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
)

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "computers2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="computer code"
    />
  )
}

const pages = [
  ({ style }) => <animated.div style={{ ...style,  }}><HeroImage /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>
    <img src={slide2} alt="technologies I used on this site" />
  </animated.div>,
]

const HomeHero = () => {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % pages.length), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: .5, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <section className="container flex flex-col px-5 py-12 mx-auto">
      <div className="mx-auto lg:w-4/6">
        <div className="h-64 overflow-hidden rounded-lg cursor-pointer select-none" onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div>
        <div className="flex flex-col mt-10 sm:flex-row">
          <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
            <div className="w-20 h-20" style={{ margin: "0 auto" }}>
              <img src={myPic} alt="afshin mokhtari" className="rounded-full myPic" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2
                className="mt-4 text-lg font-medium "
                style={{
                  color: "var(--txt)",
                }}
              >
                Afshin Mokhtari
              </h2>
              <div
                className="w-12 h-1 mt-2 mb-4 rounded"
                style={{
                  backgroundColor: "var(--hdr)",
                }}
              ></div>
              <p
                className="text-base"
                style={{
                  color: "var(--txtAlt)",
                }}
              >
                I write Javascript, HTML, CSS, and a few more languages I hardly
                use like Python, and C. My specialty is in web apps with React
                JS and mobile stuff with React Native.
              </p>
            </div>
          </div>
          <div className="pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
            <p className="mb-4 text-lg leading-relaxed">
              Its <em className="text-yellow-100">September 2020</em> and it has
              been more than a year since my old WordPress website went down. It
              took this <strong>GatsbyJS</strong> static site generation with
              React under the hood thing to get me excited enough to do
              something about it. So let's see what kind of fun stuff I can pull
              together...
            </p>
            <p className="mb-4 text-xl text-yellow-100">
              This site is a one pager for now, but in coming days and weeks I
              plan to implement a blog and more...
            </p>
            <p className="mb-4 text-lg">
              By the way, I'd also like to mention I play drums, practice Tai
              Chi, and poke people with acupuncture needles for their own
              benefit and harmony. Its an interesting life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center"
              style={{
                color: "var(--hdr)",
              }}
            >
              Learn More
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
