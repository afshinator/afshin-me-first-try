import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppsPage = ({ location }) => {

  // state can sent via a <Link to={{state: {}}} /> to 
  // dynamically show different content
  // see: https://www.gatsbyjs.com/docs/location-data-from-props/
  const { state = {} } = location
  const { app } = state

  // TODO: If there is an app variable passed, render it\
  // else render a list of apps that can be rendered

  
  console.log(location)
  return (
  <div>
    <SEO title="Apps page " />
    <h1>Hi from the Apps page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)
  }

export default AppsPage