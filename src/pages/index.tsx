import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import "../styles/styles.css"
import Nav from "./nav"


const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <Nav></Nav>
      <h1 >Hi! I'm Zoë</h1>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
