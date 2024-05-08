import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Nav from "./nav"
import "../styles/global.css"
import "../styles/styles.css"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Nav></Nav>
      <br />
      <div className="grid grid-cols-2 gap-2">
        <div className="">
          <p>Hi! I'm Zoë :)</p>
          <br />
          <p>I am first and foremost a philosopher — I have both the degree and the habit of questioning everything to prove it! These days I work as a software developer focusing on building an ESG data platform at a financial services firm. </p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
