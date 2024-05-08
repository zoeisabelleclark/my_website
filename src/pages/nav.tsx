import * as React from 'react'
import "../styles/navStyles.css"
import { Link } from "gatsby"

const Nav = () => {
    return (
        <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
    )
}

// Step 3: Export your component
export default Nav