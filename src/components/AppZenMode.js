import React from "react"

// A full screen video player

const appContainer = ` flex items-center justify-center min-h-full`
const vidContainer = `absolute top-0 left-0 w-full h-full overflow-hidden bg-no-repeat bg-cover`
const vid = `absolute object-cover h-full min-w-full min-h-full max-w-none`

const ZenMode = () => {
  return (
    <section className={appContainer}>
      <div className={vidContainer}>
        <video
          className={vid}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          src="https://traversymedia.com/downloads/video.mov"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  )
}

export default ZenMode
