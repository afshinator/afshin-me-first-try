import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { RouteAnnouncerProps } from "./../../.cache/route-announcer-props"
import myPic from "../images/me1.png"

const Arrow = () => (
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
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

const HomeHero = () => {
  return (
    <section className="container flex flex-col px-5 py-16 mx-auto">
      <div className="mx-auto lg:w-4/6">
        <div className="h-64 overflow-hidden rounded-lg">
          <HeroImage />
        </div>
        <div className="flex flex-col mt-10 sm:flex-row">
          <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
            <div className="w-20 h-20" style={{margin:'0 auto'}}>
              <img src={myPic} alt="afshin mokhtari" className="rounded-full"/>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                Afshin Mokhtari
              </h2>
              <div
                className="w-12 h-1 mt-2 mb-4 bg-red-500 rounded"
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
              Its <em>September 2020</em> and it has been more than a year since my
              old WordPress website went down.  It took this <strong>GatsbyJS</strong> 
              static site generation with React under the hood thing
              to get me excited enough to do something about it.  So let's
              see what kind of fun stuff I can pull together...
            </p>
            <p className="mb-4 text-lg">
              I'd also like to mention I play drums, practice Tai Chi, and poke people 
              with acupuncture needles for their own benefit and harmony.  Its an
              interesting life.
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
