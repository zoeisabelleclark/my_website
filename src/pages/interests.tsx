import * as React from 'react'
import "../styles/global.css"
import "../styles/navStyles.css"
import { Link } from "gatsby"
import Nav from './nav'
import Footer from './footer'

const Interests = () => {
    return (
        <main>
            <Nav></Nav>
            <div className="relative">
                <div className="sticky top-0 h-screen flex flex-col p-4 bg-lime-300">
                    <h2 className="text-4xl mt-2">INTERESTS</h2>
                    <p className='md:text-xl p-4 mt-4 ml-4 mb-4 mr-4'></p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-right justify-right bg-lime-500 text-white">
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Interests