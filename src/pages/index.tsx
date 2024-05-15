import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import "../styles/global.css"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main-content">
      <Nav></Nav>
      <br />
      <div className="pl-5">
        <div className="grid grid-cols-1 sm:grid-cols-7">
          <div className=""></div>
          <div className="sm:col-span-2">
            <br />
            <h2 className="text sm:text-center">Hi! I'm Zoë :)</h2>
            <p className="text">I am first and foremost a philosopher — I have both the degree and the habit of questioning everything to prove it! These days I work as a software developer building an ESG data platform for a financial services firm. </p>
            <br />
            <p className="text font-bold">Big fan of:</p>
            <ul className="text">
              <li>the colour green</li>
              <li>tricky puzzles</li>
              <li>the power everyday people have to make the world a better place by using: our tools (like technology), problem solving and working together</li>
              <li>my code - when it's working</li>
            </ul>
            <br />
            <p className="text font-bold">Not such a fan of:</p>
            <ul className="text">
              <li>'neutral' colours</li>
              <li>lack of standards in ESG reporting</li>
              <li>my code - when it isn't working</li>
            </ul>
          </div>

          <div className="sm:col-span-2">
            <StaticImage src="../images/me2.JPG" alt="" placeholder="blurred" layout="fixed" width={300} height={300} className="rounded-full imageMe"></StaticImage>
            <div className="box hidden xl:block">
              <div className="shape">
                <div id="top-left"></div>
              </div>
            </div>
          </div>
          <div className="md:hidden"><br /><br /><br /><br /></div>
        </div>
      </div>
      <br />
      <br className="mt-20" />
      <div className="footer w-full bg-white z-40">
        <Footer></Footer></div>
    </main >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
