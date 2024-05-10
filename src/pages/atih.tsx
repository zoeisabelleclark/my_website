import * as React from 'react'
import Nav from "./nav"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./footer"


function getDateDiff() {
    const date2 = new Date;
    const date1 = new Date("05/8/2024");
    console.log(date1)
    console.log(date2)
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay));
    return diffDays.toFixed(2);
}

const ATIH = () => {
    return (
        <main>
            <Nav></Nav>
            <br />
            <h1 className="text-3xl text-center font-bold">ALL TECH IS HUMAN</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <p>I started the code for this website {getDateDiff()} days ago. So things are still a work in progress.</p>
                <br />
                <p>I tend to get inspired by an idea and feel an intense need to pursue it until it is done, a bit like someone has poured gasoline on a fire. This isn't true for everything though. There are some ideas which provide a more steady source of fuel. For me, this is things like protecting the environment, human rights, being compassionate and considerate to others, and how we can use the tools we have to achieve good things in the world.</p>

            </div>
            <Footer></Footer>
        </main>
    )
}

export const Head = () => <title>ATIH</title>
export default ATIH