import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import AppsShowcase from "./../components/AppsShowcase"
import AppsController from "./../components/AppsController"
import ZenMode from "./../components/AppZenMode"
import AppDataProvider from "../providers/AppDataContext"

const card =
  "absolute z-10 bg-white border border-gray-200 rounded shadow-lg opacity-75"

const AppsPage = ({ location }) => {
  // state can sent via a <Link to={{state: {}}} /> to
  // dynamically show different content
  // see: https://www.gatsbyjs.com/docs/location-data-from-props/
  const { state = {} } = location
  const { app } = state
  // const { targetRef } = useDraggable({ controlStyle: true })
  // TODO: If there is an app variable passed, render it\
  // else render a list of apps that can be rendered

  const [whichApp, setWhichApp] = useState(null)

  const appSelectionHandler = React.useCallback(
    e => {
      const newlyClicked = e.target.innerHTML
      if (newlyClicked === whichApp) return
      setWhichApp(newlyClicked)
    },
    [whichApp]
  )

  return (
    <AppDataProvider>
      <div>
        <SEO title="Apps page " />
        <h1>Hi from the Apps page</h1>
        <p></p>
        <Link to="/">Go back to the homepage</Link>
        <motion.section
          className={card}
          drag
          dragConstraints={{ top: 0, left: 0, right: 320, bottom: 300 }}
        >
          <AppsController appSelectionHandler={appSelectionHandler} />
        </motion.section>
        {whichApp === null ? <AppsShowcase /> : <ZenMode />}
      </div>
    </AppDataProvider>
  )
}

export default AppsPage
