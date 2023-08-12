
import React from 'react'

const Header = () => {
  return (
  <header className="text-white bg-[#36454F] sticky top-0 left-0 right-0 z-10">
    <div className="container mx-auto flex flex-wrap px-5 py-1 shadow-lg flex-col md:flex-row xs:p-0 xs:w-fit sm:p-0 sm:w-fit">
      <a className="flex title-font font-medium my-1 items-center text-gray-900 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl font-extrabold text-white sm:text-center xs:text-center">Invy</span>
      </a>
      {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav> */}
    </div>
  </header>
  )
}

export default Header
