import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HomeHero from "./../components/HomeHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <Link to="/about/">Go to About Me</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
