import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "./../components/HomeHero"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Afshin.me - Home page" />
    <HomeHero />
  </Layout>
)

export default IndexPage
