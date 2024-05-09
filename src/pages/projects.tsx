import * as React from 'react'
import Nav from "./nav"
import { Link } from 'gatsby'


// Step 2: Define your component
const ProjectsPage = () => {
    return (
        <main>
            <Nav></Nav>
            <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
                <h1 className="text-3xl text-center font-bold">PROJECTS</h1>
                <div className=" mt-10 ">

                    {/* card 1 */}
                    <Link to=''>
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lime-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="flex-auto">
                                <h1 className="text-lg">Baillie Gifford</h1>
                                <h1 className="text-xl font-bold">ESG self-serve data platform</h1>
                                <h3>2024</h3>
                            </div>
                            <p className="text-center text-white">2024</p>
                        </div>
                    </Link>

                    {/* card 2 */}
                    <Link to='../unlinkedPages/bristolProject'>
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lime-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                            <div className="flex-auto">
                                <h1 className="text-lg">University of Bristol</h1>
                                <h1 className="text-xl font-bold">Built a neurodiverse inclusive play technology</h1>
                                <h3>Paper accepted to ACM Interaction Design and Children (IDC) Conference</h3>
                            </div>
                            <a href="#" className="text-center text-white hover:text-gray-300">2023</a>
                        </div>
                    </Link>

                    {/* card 3 */}
                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lime-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                        <div className="flex-auto">
                            <h1 className="text-lg">Day 1</h1>
                            <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>


                    {/* card 4 */}
                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lime-700 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                        <div className="flex-auto">
                            <h1 className="text-lg">Day 1</h1>
                            <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>

                    {/* card 5 */}
                    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lime-800 text-white rounded mb-10 flex-col md:flex-row">
                        <div className="flex-auto">
                            <h1 className="text-lg">Day 1</h1>
                            <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const Head = () => <title>Projects</title>
// Step 3: Export your component
export default ProjectsPage