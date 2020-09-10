import React from "react"

const Arrow = ({
  classes = "w-4 h-4 ml-2",
  fill = "none",
  stroke = "currentColor",
}) => {
  // const classNames = `${classes} rounded-full appLogo`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke={stroke}
      // className={classNames}
      className={classes}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  )
}

export default Arrow
