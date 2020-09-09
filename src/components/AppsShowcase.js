import React from "react"
import { Link } from "gatsby"
import app1 from "../images/appShot1.png"

const AppsShowcase = () => {
  return (
    <section className="font-lato">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            This is my App Playground
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            I'm going to be putting up a variety of cool mashups.
          </p>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <img
              className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 rounded-full shadow-lg"
              src={app1}
              alt="screenshot of Zen Mode Video applet"
            />

            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
              <strong>Zen Mode</strong>
              </h2>
              <p className="text-base leading-relaxed">
                September, 2020 - 
                A little meditative FULL SCREEN VIDEO of nature 🌲 - for these
                trying 2020 times; while everything around us burns 🔥 here in
                Northern California.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                #2 Coming Soon
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                #3 Coming Soon
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsShowcase
