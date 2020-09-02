import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleButton from "./ToggleButton"

const Pisces = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    className="w-12 h-12 rounded-full appLogo"
  >
    <path d="M81.469 80.744a.514.514 0 00-.351-.144c-1.824-.038-8.63-2.596-12.104-6.312-3.452-3.686-4.469-10.237-3.04-13.418a.51.51 0 00-.455-.716l-.097-.005c-2.688 0-6.935 3.884-12.621 11.535-.332.448-.628.864-.908 1.253-1.949 2.72-2.679 3.737-8.255 5.802-1.814.672-5.596 1.803-10.535 1.803-5.173 0-12.729-1.314-19.371-7.556.452-7.399 6.72-14.578 10.88-19.341 1.805-2.067 3.105-3.56 3.426-4.508a.506.506 0 00-.176-.563.53.53 0 00-.581-.034 28.146 28.146 0 01-14.706 4.168c-4.045 0-6.724-.87-6.748-.878a.483.483 0 00-.481.075.521.521 0 00-.196.437A44.767 44.767 0 0018.209 81.59c8.467 8.465 19.721 13.126 31.69 13.126 11.97 0 23.226-4.661 31.692-13.126a.535.535 0 00.145-.37.479.479 0 00-.154-.36l-.113-.116zm-21.458 1.768a.518.518 0 00-.015.557c.119.196.307.234.484.245l3.97-.394.945 1.685-9.608.95 5.462-7.959 1.008 1.638-2.246 3.278z" />
    <path d="M63.69 49.839a.266.266 0 00-.201-.152c-.499-.06-.993-.091-1.464-.091-7.996 0-10.871 8.549-12.772 14.207-.403 1.2-.748 2.236-1.093 3.021-1.997 4.584-6.738 8.18-6.787 8.216a.255.255 0 00-.067.336c.082.133.371.357 1.402.357.768 0 1.805-.121 3.087-.362 3.354-.627 6.254-5.164 8.375-8.479.385-.599.739-1.154 1.061-1.627 1.311-1.93 3.528-3.662 4.854-4.695.982-.77 1.213-.961 1.228-1.188a.312.312 0 00-.071-.214c-.02-.025-1.526-3.406 2.428-9.081a.268.268 0 00.02-.248zM75.681 72.401c-5.185-4.705-7.137-13.275-7.156-13.362a.256.256 0 00-.226-.198l-.023-.002a.26.26 0 00-.235.149c-.029.072-3.125 7.218 2.692 14.246 4.942 5.976 10.231 6.44 11.733 6.44.184 0 .312-.009.394-.015.024.01.053.015.082.015.073 0 .14-.029.192-.081a55.12 55.12 0 001.204-1.406.262.262 0 00.044-.25.25.25 0 00-.192-.164c-.034-.008-3.34-.672-8.509-5.372z" />
    <path d="M92.828 59.166l-.119.098c-.955.585-2.025.636-2.731.101-.888-.68-1.113-2.123-.604-3.864a.493.493 0 00-.053-.397.49.49 0 00-.342-.245c-.484-.089-1.089-.135-1.794-.135-5.476 0-16.006 2.707-16.443 2.82a.5.5 0 00-.351.299c-.858 2.06-.94 5.597 3.528 10.752 6.341 7.313 9.948 8.105 11.207 8.105.33 0 .528-.053.6-.078a.57.57 0 00.187-.116l.245-.241a44.53 44.53 0 007.488-16.586.503.503 0 00-.213-.533c-.187-.132-.479-.109-.605.02zm-12.329.603l-3.595 3.598a2.55 2.55 0 01.172-3.427 2.538 2.538 0 011.806-.746 2.526 2.526 0 011.617.575zM94.829 47.209A44.724 44.724 0 0081.551 18.18C73.122 9.864 61.953 5.283 50.103 5.283c-12.099 0-23.434 4.747-31.93 13.367a.516.516 0 00-.14.358c0 .137.053.266.154.367l.125.12a.538.538 0 00.345.145c1.829.019 8.654 2.52 12.153 6.211 3.484 3.667 4.545 10.211 3.138 13.395a.51.51 0 00.456.716l.082.004c2.692 0 6.916-3.914 12.556-11.629.331-.456.625-.871.897-1.255 1.93-2.734 2.655-3.759 8.217-5.863 1.857-.705 5.722-1.886 10.748-1.886 5.111 0 12.577 1.289 19.196 7.415-.398 7.411-6.613 14.631-10.731 19.421-1.79 2.075-3.081 3.578-3.397 4.533a.518.518 0 00.489.672.466.466 0 00.269-.082 28.198 28.198 0 0114.894-4.274c3.604 0 6.081.689 6.533.824a.468.468 0 00.216.029.51.51 0 00.456-.662zM39.756 17.561a.518.518 0 00.013-.557.525.525 0 00-.441-.242l-4.011.429-.955-1.68 9.598-1.018-5.404 7.996-1.028-1.627 2.228-3.301z" />
    <path d="M36.319 50.269c.034.082.11.139.201.149.465.053.926.082 1.373.082h.005c8.053 0 10.875-8.606 12.747-14.297.394-1.208.733-2.251 1.075-3.043 1.96-4.596 6.677-8.222 6.725-8.257a.25.25 0 00.063-.335c-.078-.133-.361-.351-1.354-.351-.769 0-1.823.129-3.125.384-3.349.653-6.22 5.207-8.317 8.533a82.007 82.007 0 01-1.051 1.642c-1.3 1.937-3.499 3.686-4.813 4.73-.979.777-1.209.969-1.22 1.198a.306.306 0 00.073.21c.023.026 1.545 3.396-2.361 9.107a.25.25 0 00-.021.248zM24.157 27.791c5.217 4.67 7.237 13.221 7.257 13.307a.25.25 0 00.225.196l.024.002c.102 0 .192-.06.236-.153.027-.072 3.076-7.237-2.794-14.226-4.953-5.891-10.232-6.35-11.733-6.35-.207 0-.356.007-.443.015a.24.24 0 00-.272.072c-.409.463-.806.936-1.195 1.416a.256.256 0 00-.043.25.26.26 0 00.196.162c.028.006 3.34.648 8.542 5.309z" />
    <path d="M7.109 41.154l.116-.101c.964-.597 2.03-.653 2.731-.123.897.675 1.133 2.114.637 3.859a.516.516 0 00.399.64 9.827 9.827 0 001.703.127c5.246 0 15.369-2.639 16.52-2.944a.501.501 0 00.336-.302c.844-2.061.902-5.596-3.599-10.722-6.364-7.239-9.998-8.019-11.265-8.019-.23 0-.436.023-.61.074a.478.478 0 00-.19.125l-.23.242c-3.586 4.992-6.063 10.59-7.369 16.635a.513.513 0 00.242.552c.201.114.455.08.579-.043zm12.325-.697l3.572-3.626a2.573 2.573 0 01-.145 3.432 2.53 2.53 0 01-1.818.761 2.568 2.568 0 01-1.609-.567z" />
  </svg>
)

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
          <span className="ml-3 text-4xl font-yt">{siteTitle}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link to="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link to="/page-2" className="mr-10 hover:text-white">
            Page 2
          </Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  )
}


{/* <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
  Button
  <Arrow />
</button> */}

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
