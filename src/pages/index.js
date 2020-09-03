import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HomeHero from "./../components/HomeHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Afshin.me - Home page" />
    <HomeHero />
  </Layout>
)

export default IndexPage
