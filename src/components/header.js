import { Link } from "gatsby"
import React, { useContext, createContext } from "react"
import { motion } from "framer-motion"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleButton from "./ToggleButton"
import Pisces from "./svgs/Pisces"
import { AppDataContext } from "./../providers/AppDataContext"
import Sound from "./svgs/Sound"
import SoundOff from "./svgs/SoundOff"

const ThemeSwitcher = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <ToggleButton theme={theme} toggleTheme={toggleTheme}></ToggleButton>
    )}
  </ThemeToggler>
)

const Anim = ({ children }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
    }}
  >
    {children}
  </motion.div>
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
          <motion.span
            className="ml-3 text-4xl font-yt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0 }}
            whileHover={{
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
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
        <Anim>
          <ThemeSwitcher />
        </Anim>
        {state.sound ? (
          <Anim>
            <Sound
              classes="w-6 ml-4"
              fill="var(--hdrTxt)"
              onClick={() => {
                soundsOff()
              }}
            />
          </Anim>
        ) : (
          <Anim>
            <SoundOff
              classes="w-6 ml-4"
              fill="var(--hdrTxt)"
              onClick={() => {
                soundsOn()
              }}
            />
          </Anim>
        )}
      </div>
    </header>
  )
}

export default Header
