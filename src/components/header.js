import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    class="w-10 h-10 text-white p-2 bg-orange-500 rounded-full"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
)

const Arrow = () => (
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    class="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
)

const Header = ({ siteTitle }) => {
  return (
    <header class="text-gray-500 bg-red-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Icon />
          <span class="ml-3 text-xl">{siteTitle}</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mr-5 hover:text-white">
            First Link
          </Link>
        </nav>
        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <Arrow />
        </button>
      </div>
    </header>
  )
}

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
