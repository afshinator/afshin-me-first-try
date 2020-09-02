import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { RouteAnnouncerProps } from "./../../.cache/route-announcer-props"

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

const Image = () => {
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

  return <Img fluid={data.placeholderImage.childImageSharp.fluid}  alt="computer code"/>
}

const HomeHero = () => {
  return (
    <section className="container flex flex-col px-5 py-16 mx-auto">
      <div className="mx-auto lg:w-4/6">
        <div className="h-64 overflow-hidden rounded-lg">
          {/* <img
              alt="content"
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/1200x500"
            /> */}
          <Image/>
        </div>
        <div className="flex flex-col mt-10 sm:flex-row">
          <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
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
              I'm a software engineer. I've been hacking since before mobile
              phones. These days I do a lot of app development on the web, and
              also some cross-platform mobile stuff with React Native for
              Android and iOS.
            </p>
            <p className="mb-4 text-lg">
              I also have a Masters degree in Traditional Chinese Medicine and
              was an acupuncturist for several years.
            </p>
            <p className="mb-4 text-lg">
              You might see me on stage sometimes banging on bongos. Hand
              drumming is a passion of mine; as well as Tai Chi.
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
