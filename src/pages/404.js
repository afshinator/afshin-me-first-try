import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Pisces from "../components/Pisces"

const NotFoundPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "404-lost.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="w-full h-screen bg-cover"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <section className="flex flex-col items-center py-4">
            <SEO title="404: No page on this site at that address" />
            <div
              className="flex flex-row items-center font-lato"
              style={{ fontSize: "108px" }}
            >
              <p>4</p>
              <Pisces classes="w-24 h-24" />
              <p>4</p>
            </div>
            <h1 className="text-3xl">Page Not Found, or No Such Page!😮</h1>
            <p className="mt-12 text-xl">
            Are you sure you typed in the correct url?
            </p>
            <p className="mt-4 text-xl">
              Hope you didn't get here by clicking on one of{" "}
              <em>my</em> links!
            </p>
            <p className="mt-4 text-xl"></p>
            <p className="mt-12 text-3xl">Back to <Link to="/" className="text-red-700">Afshin.me</Link></p>
          </section>
        </BackgroundImage>
      )
    }}
  />

  // <Layout>
  //   <SEO title="404: Not found" />
  //   <h1>NOT FOUND</h1>
  //   <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  // </Layout>
)

export default NotFoundPage
