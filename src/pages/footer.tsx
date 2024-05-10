import * as React from 'react'
import "../styles/global.css"
import "../styles/navStyles.css"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container px-6 py-8 mx-auto">
                {/* <hr className="my-10 border-gray-200 dark:border-gray-700" /> */}

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500">Zoë Clark © Copyright 2024</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <Link to="https://www.linkedin.com/in/zoeclark014/" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> LinkedIn </Link>

                        <Link to="https://github.com/zoeisabelleclark/my_website" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Github Website </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
