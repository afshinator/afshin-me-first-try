import React from "react"
import { Link } from "gatsby"
import Pisces from "./svgs/Pisces"

const Hand = () => (
  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fill="#d9cfc1"
      stroke="#888"
      d="M17.924 17.315c-.057.174-.193.367-.416.432-.161.047-5.488 1.59-5.652 1.633-.469.125-.795.033-1.009-.156-.326-.287-4.093-2.85-8.845-3.092-.508-.025-.259-1.951 1.193-1.951.995 0 3.904.723 4.255.371.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 011.937-.781L8.361 8.37c.193.48.431.662.69.562.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 017.796.871a1.042 1.042 0 011.325.652l1.946 5.732c.172.504.354.768.642.646.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 112.027-.506l1.26 5.042c.184.741.353 1.008.646.935.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 011.86-.375l.948 4.711.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527 1.085 2.889.519 5.564.334 6.143z"
    />
  </svg>
)

const AppsController = React.memo ( ({ appSelectionHandler }) => {
  const [appToShow, setAppToShow] = React.useState(false)

  const handleOver = (e) => {
    if (e.target.innerHTML.indexOf("Video") !== -1) {
      setAppToShow("video")
    }
  }

  const handleOut = (e) => {
    setAppToShow("")
  }

  return (
    <section className="w-full h-full max-w-xs p-1">
      <div className="flex flex-row justify-between">
      
        <Link to="/" className="zoomable">
          <Pisces classes="w-6 h-6" stroke="var(--hdr)" fill="var(--hdr)" />
        </Link>
        <Hand  />
      </div>
      <div className="mt-1 border border-gray-500 border-dashed rounded">
        <p
          className="hover:underline"
          onClick={appSelectionHandler}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          Zen Mode Video Player
        </p>
        <p>#2 Coming Soon</p>
        <p>#3 Coming Soon</p>
      </div>
    </section>
  )
}
)

export default AppsController
