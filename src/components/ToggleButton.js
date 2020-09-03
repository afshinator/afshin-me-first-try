import React from "react"

const ToggleButton = ({ theme, toggleTheme, children }) => {
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />

        <div
          className="w-10 h-4 rounded-full shadow-inner toggle__line"
          style={{ background: "#542a2a" }}
        ></div>

        <div
          className="absolute inset-y-0 left-0 w-6 h-6 rounded-full shadow toggle__dot"
          style={{
            background: "var(--bg)",
            top: "-.25rem",
            left: "-.25rem",
            transition: "all 0.3s ease-in-out",
          }}
        ></div>
      </div>

      <div className="ml-3">{children}</div>
    </label>
  )
}

export default ToggleButton
