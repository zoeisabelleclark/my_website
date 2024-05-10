import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import "../styles/global.css"
import "../styles/styles.css"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main-content">
      <Nav></Nav>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-7">
        <div className=""></div>
        <div className="sm:col-span-2">
          <br />
          <h2 className="text sm:text-center">Hi! I'm Zoë :)</h2>
          <br />
          <p className="text">I am first and foremost a philosopher — I have both the degree and the habit of questioning everything to prove it! These days I work as a software developer building an ESG data platform for a financial services firm. </p>
          <br />
          <p className="text bold">Big fan of:</p>
          <ul className="text">
            <li>the colour green</li>
            <li>tricky puzzles</li>
            <li>the power of ESG initiatives to funnel money from financial institutions towards making the world a better place (and generating sustainable income while doing it!)</li>
            <li>my code - when it's working</li>
          </ul>
          <br />
          <p className="text bold">Not such a fan of:</p>
          <ul className="text">
            <li>'neutral' colours</li>
            <li>lack of standards in ESG reporting</li>
            <li>my code - when it isn't working</li>
          </ul>
        </div>
        <div></div>
        <div className="sm:col-span-2">
          <StaticImage src="../images/me2.JPG" alt="" placeholder="blurred" layout="fixed" width={300} height={300} className="rounded-full imageMe"></StaticImage>
          <div className="box">
            <div className="shape">
              <div id="top-left"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br className="mt-20" />
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
