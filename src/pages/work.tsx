import * as React from 'react'
import Nav from "./nav"
import Footer from "./footer"
import { StaticImage } from 'gatsby-plugin-image'
import "../styles/styles.css"


const Work = () => {
    return (
        <main>
            <Nav></Nav>
            <br />
            <h1 className="text-3xl text-center font-bold">BAILLIE GIFFORD</h1>
            <div className=''></div>
            <h2 className='md:text-2xl text-center font-bold ml-auto mr-auto'> Unfortunately I can't explain too much about all the things I do at work but I promise they are mostly cool and interesting</h2>
            <Footer></Footer>
        </main >
    )
}

export const Head = () => <title>Work</title>
export default Work