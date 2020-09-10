import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About Afshin Mokhtari" />
    <h1>Hi from the ABOUT page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
