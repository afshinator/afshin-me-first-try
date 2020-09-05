import React from "react"
import Pisces from "./Pisces"
import { Link } from "gatsby"

const AppsController = () => {
  return (
    <section className="w-full h-full p-1">
      <div className="flex flex-row">
        <Link to="/">
          <Pisces classes="w-6 h-6" stroke="#102e4a" fill="#ccc" />
        </Link>
        <p>min max buttons</p>
      </div>
      <div></div>
    </section>
  )
}

export default AppsController
