/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"
import AppDataProvider from "../providers/AppDataContext"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppDataProvider>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <div>
        <Header siteTitle={data.site.siteMetadata.title} 
          location={location}
        />

        <main
          className="max-w-5xl bg-transparent font-lato"
          style={{ margin: "0 auto" }}
        >
          {children}
        </main>
      </div>

      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
    </AppDataProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
