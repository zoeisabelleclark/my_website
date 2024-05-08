import * as React from 'react'
import "../styles/styles.css"
import Nav from "./nav"


// Step 2: Define your component
const ProjectsPage = () => {
    return (
        <main>
            <Nav></Nav>
            <h1>Projects</h1>

            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head = () => <title>Projects</title>
// Step 3: Export your component
export default ProjectsPage