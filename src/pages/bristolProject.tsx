import * as React from 'react'
import Nav from "./nav"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./footer"
import { Link } from '@reach/router'


const BristolProject = () => {
    return (
        <main>
            <Nav></Nav>
            <div className='hidden md:block'>
                <br />
                <h1 className="text-3xl text-center font-bold">DEEP SEA DISCO MAT</h1>
                <div className="container mx-auto px-4 py-2 lg:px-28 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <StaticImage
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="../images/personalities_fish.png"></StaticImage>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <p>I used RFID readers wired to a raspberryPi to build an interactive deep-sea disco themed play mat. Children could use small sea creatures to make music together on the mat. I designed the mat to encourage inclusive play between neurotypical and autistic children.</p>
                                <br />

                            </div>
                            <div className="w-full p-1 md:p-2">
                                <StaticImage
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="../images/mat.jpg"></StaticImage>
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <StaticImage
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="../images/matUncovered.jpg"></StaticImage>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <StaticImage
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="../images/mycircuitdiagram.png"></StaticImage>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <p>Each creature had a personality which we used to get the children thinking about what each creature (or child) might enjoy when playing.</p>
                                <br />
                                <p>A paper based on my design and thesis will be exhibited at the IDC conference in Delft this June.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden grid grid-cols-1 p-6'>
                <h1 className="text-3xl text-center font-bold">DEEP SEA DISCO MAT</h1>
                <StaticImage
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/matUncovered.jpg"></StaticImage>
                <br />
                <p>I used RFID readers wired to a raspberryPi to build an interactive deep-sea disco themed play mat.</p>
                <br />
                <p>Children could use small sea creatures (with RFID tags sewn inside) to make music together on the mat. I designed the mat to encourage inclusive play between neurotypical and autistic children.</p>
                <br />
                <StaticImage
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/mat.jpg"></StaticImage>
                <br />
                <p>Each creature had a personality which we used to get the children thinking about what each creature (or child) might enjoy when playing.</p>
                <br />
                <p>A paper based on my design and thesis will be exhibited at the IDC conference in Delft this June.</p>
                <br />
                <StaticImage
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/personalities_fish.png"></StaticImage>
                <StaticImage
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="../images/mycircuitdiagram.png"></StaticImage>
            </div>
            <br />
            <p className='pb-10 mb-10'></p>
            <br />
            <Footer></Footer>
        </main>
    )
}

export const Head = () => <title>Bristol Project</title>
export default BristolProject