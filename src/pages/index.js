import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "./../components/HomeHero"
import AppDataProvider from "../providers/AppDataContext"

const IndexPage = () => (
  <AppDataProvider>
    <Layout>
      <SEO title="Afshin.me - Home page" />
      <HomeHero />
    </Layout>
  </AppDataProvider>
)

export default IndexPage
