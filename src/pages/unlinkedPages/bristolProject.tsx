import * as React from 'react'
import Nav from "../nav"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const BristolProject = () => {
    return (
        <main>
            <Nav></Nav>
            <br />
            <h1 className="text-3xl text-center font-bold">DEEP SEA DISCO MAT</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <StaticImage
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="../../images/personalities_fish.png"></StaticImage>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <p>I used RFID readers wired to a raspberryPi to build an interactive deep-sea disco themed play mat.</p>
                            <br />
                            <p>Children could use small sea creatures (with RFID tags sewn inside) to make music together on the mat</p>
                            <br />

                        </div>
                        <div className="w-full p-1 md:p-2">
                            <StaticImage
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="../../images/mat.jpg"></StaticImage>
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <StaticImage
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="../../images/matUncovered.jpg"></StaticImage>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <StaticImage
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="../../images/mycircuitdiagram.png"></StaticImage>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <p>Each creature had a personality which we used to get the children thinking about what each creature (or child) might enjoy when playing</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const Head = () => <title>Bristol Project</title>
// Step 3: Export your component
export default BristolProject