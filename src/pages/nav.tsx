import * as React from 'react'
import "../styles/global.css"
import "../styles/navStyles.css"
import { Link } from "gatsby"

const Nav = () => {
    const handleClick = () => {
        document.getElementById("main-nav")?.classList.toggle('hidden');
    }

    return (
        <header className='grid grid-cols-2 md:grid-cols-7'>
            <div className="py-4 px-2 lg:mx-4 xl:mx-12 col-span-1 md:col-span-3">
                <div>
                    <nav className="flex items-center justify-between flex-wrap  ">
                        <div className="block lg:hidden" onClick={handleClick}>
                            <button
                                className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                                <svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div id="main-nav" className="w-full flex-grow lg:flex items-center lg:w-auto hidden  ">
                            <div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                                <Link to="/"
                                    className="block lg:inline-block text-md font-bold  sm:hover:border-indigo-400  hover:text-lime-600 mx-2 focus:text-lime-600  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    HOME
                                </Link>
                                <Link to="/projects"
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-lime-600 mx-2 focus:text-lime-600  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    PROJECTS
                                </Link>
                                <Link to="/interests"
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-lime-600 mx-2 focus:text-lime-600  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    INTERESTS
                                </Link>
                                <Link to="/letsTalkAbout"
                                    className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-lime-600 mx-2 focus:text-lime-600  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                    LTA
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='header md:col-span-3'>
                <h2 className='hidden md:block'>Zoë Isabelle Clark</h2>
                <h2 className=' md:hidden'>Zoe</h2>
            </div>
        </header>
    )
}

export default Nav
