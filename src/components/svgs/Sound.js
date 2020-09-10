import React from "react"

const Sound = ({ classes, fill = "var(--hdrTxt)", onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={classes}
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <path d="M5.312 4.566C4.19 5.685-.715 12.681 3.523 16.918c4.236 4.238 11.23-.668 12.354-1.789 1.121-1.119-.335-4.395-3.252-7.312-2.919-2.919-6.191-4.376-7.313-3.251zm9.264 9.59c-.332.328-2.895-.457-5.364-2.928-2.467-2.469-3.256-5.033-2.924-5.363.328-.332 2.894.457 5.36 2.926 2.471 2.467 3.258 5.033 2.928 5.365zm.858-8.174l1.904-1.906a.999.999 0 10-1.414-1.414L14.02 4.568a.999.999 0 101.414 1.414zM11.124 3.8a1 1 0 001.36-.388l1.087-1.926a1 1 0 00-1.748-.972L10.736 2.44a1 1 0 00.388 1.36zm8.748 3.016a.999.999 0 00-1.36-.388l-1.94 1.061a1 1 0 10.972 1.748l1.94-1.061a1 1 0 00.388-1.36z" />
    </svg>
  )
}

export default Sound
