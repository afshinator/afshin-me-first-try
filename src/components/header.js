import { Link } from "gatsby"
import React, { useContext, createContext } from "react"
import { motion } from "framer-motion"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleButton from "./ToggleButton"
import Pisces from "./Pisces"
import soundOnImg from "../images/sound.svg"
import soundOffImg from "../images/sound-mute.svg"
import { AppDataContext } from "./../providers/AppDataContext"

const ThemeSwitcher = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <ToggleButton theme={theme} toggleTheme={toggleTheme}>
        Dark Mode
      </ToggleButton>
    )}
  </ThemeToggler>
)

const Header = ({ siteTitle }) => {
  // const { sound, soundsOff, soundsOn } = useContext(AppDataContext)
  const values = useContext(AppDataContext)
  const { state, soundsOff, soundsOn } = values
  console.log("in header ", values)


  return (
    <header
      className=""
      style={{
        backgroundColor: "var(--hdr)",
        color: "var(--hdrTxt)",
        transition: "color 0.1s ease-out, background 0.1s ease-out",
      }}
    >
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto select-none md:flex-row">
        <Link
          to="/"
          className="flex items-center mb-4 font-medium text-white md:mb-0"
        >
          <Pisces />
          <motion.span className="ml-3 text-4xl font-yt"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 2.0 }}
          >
            {siteTitle}
          </motion.span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto font-lato">
          <Link to="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link to="/apps" className="mr-5 hover:text-white">
            Apps
          </Link>
          <Link to="/page-2" className="mr-10 hover:text-white">
            Page 2
          </Link>
        </nav>
        <ThemeSwitcher />
        { state.sound ? (
          <img
            className="w-6 ml-4"
            src={soundOnImg}
            alt="Toggle sounds off"
            style={{
              stroke: "var(--hdrTxt)",
            }}
            onClick={()=>{ soundsOff() }}
          />
        ) : (
          <img
            className="w-6 ml-4"
            src={soundOffImg}
            alt="Toggle sounds on"
            style={{
              stroke: "var(--hdrTxt)",
            }}
            onClick={()=>{ soundsOn() }}
          />
        )}
      </div>
    </header>
  )
}

/* <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
  Button
  <Arrow />
</button> */

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
