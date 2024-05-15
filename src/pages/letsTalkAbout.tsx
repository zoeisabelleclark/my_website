import * as React from 'react'
import Nav from "./nav"
import Footer from './footer'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from '@reach/router'


// Step 2: Define your component
const LetsTalkAbout = () => {
    return (
        <main>
            <Nav></Nav>
            <br />
            <h1 className="text-3xl text-center font-bold">LETS TALK ABOUT</h1>
            <article className="flex bg-white transition hover:shadow-xl m-10">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        dateTime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2024</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>May 10</span>
                    </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                    <StaticImage
                        src='../images/green.png'
                        alt='green'
                    ></StaticImage>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to='/blogPosts/ESGdata'>
                            <h3 className="font-bold uppercase text-gray-900">
                                the current mess of ESG data
                            </h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            There are no standardised regulations for reporting ESG data. This means that depending on where you get your data from and how the provider chooses to calculate it, there can be major inconsistencies in the ESG scores and ratings given to companies. Money can't get to the companies who are really doing the good work if the information given to investors is all skew-whiff.
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <p className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-lime-600">
                            In progress!
                        </p>
                    </div>
                </div>
            </article>
            <Footer></Footer>
        </main>
    )
}

export const Head = () => <title>Lets Talk About</title>
// Step 3: Export your component
export default LetsTalkAbout