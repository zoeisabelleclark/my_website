import * as React from 'react'
import Nav from "./nav"


// Step 2: Define your component
const ShouldKnow = () => {
    return (
        <main>
            <Nav></Nav>
            <div className="relative">
                <div className="sticky top-0 h-screen flex flex-col  bg-lime-300">
                    <h2 className="text-4xl">YOU SHOULD KNOW</h2>
                    <p>Scroll Down</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-lime-500 text-white">
                    <h2 className="text-4xl">The Second Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-lime-700 text-white">
                    <h2 className="text-4xl">The Third Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-lime-900 text-white">
                    <h2 className="text-4xl">The Fourth Title</h2>
                </div>
            </div>
        </main>
    )
}

export const Head = () => <title>You Should Know</title>
// Step 3: Export your component
export default ShouldKnow