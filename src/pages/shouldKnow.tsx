import * as React from 'react'
import Nav from "./nav"
import Footer from './footer'


// Step 2: Define your component
const ShouldKnow = () => {
    return (
        <main>
            <Nav></Nav>
            <div className="relative">
                <div className="sticky top-0 h-screen flex flex-col p-4 bg-lime-300">
                    <h2 className="text-4xl mt-2">LETS TALK ABOUT</h2>
                    <p className='md:text-xl p-4 mt-4 ml-4 mb-4 mr-4'>There are no standardised regulations for reporting ESG data</p>
                    <p className='md:text-xl p-4 mt-4 ml-8 mb-4 mr-4'>This means that depending on where you get your data from and how the provider chooses to calculate it there can be major inconsistencies in ESG scores and ratings given to companies. Money can't get to the companies who are really doing the good work if the information given to investors is all skew-whiff.</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-right justify-right bg-lime-500 text-white">
                    <h2 className="text-2xl md:text-4xl mt-2">NUANCE</h2>
                    <p className='md:text-xl p-4 mt-4 ml-4 md:mb-4 mr-4'>There are a variety of voluntary reporting standards that companies can opt-in to but even then how you calculate metrics like C02 emissions can vary wildly.</p>
                    <p className='md:text-xl p-4 md:mt-4 ml-8 md:mb-4 mr-4 hidden md:block'>The challenge is that deciding *one* method of calculating metrics is not straightforward. If you want to know the gender diversity of a company board that is fairly simple but when you consider metrics like emissions it matters how far you go. If you manufacture cars but you don't make the parts yourself. Do you only count the emissions you produce once the parts have arrived or do you count the emissions of the parts as your emissions as well (since you are responsible for their creation).</p>
                    <p className='md:text-xl p-4 md:mt-4 ml-4 md:mb-4 mr-4'>The difference between 0 and 0.14 might not seem like much at all but when the metric is 'Average Number of Severe Human Rights Issues' we want to know which one is correct (this is unfrotunately a real example of a metric calculated and published from two different sources of ESG data) </p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-left justify-left bg-lime-700 text-white">
                    <h2 className=" text-2xl md:text-4xl mt-2  text-left">ABSTRACTION</h2>
                    <p className='md:text-xl p-4 mt-4 ml-4 mb-4 mr-4'>In addition to this, investors see this data at only the top level. They might have 1 ESG score for a whole fund which contains 30 companies each of which produced reports using different calculation methods. By the time the investor sees the final score it is so abstract from the original data that I would argue in many cases it becomes redundant. Unless the score is 100% wow this fund is phenomenal in which case you can probably be sure its at least (hopefully) doing some kind of good</p>
                    <p className='md:text-xl p-4 mt-4 ml-8 mb-4 mr-4'></p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-right justify-right bg-lime-900 text-white">
                    <h2 className="text-2xl md:text-4xlmt-2">HOPE & PURPOSE</h2>
                    <p className='md:text-xl p-4 mt-4 ml-4 mb-4 mr-4'>This does not mean ESG is pointless. This just means we havent figured out exactly how is the best way to do things yet. Before we had the appropriate technology we had bits of data from different sources which could help us predict the location and strength of earthquakes. We didn't totally know how to connect the dots in the data or how to tell what was accurate and what was noise. Did we go 'ah well the data is rubbish so there's no point trying to predict earthquakes' ... obviously not. We just tried our best to learn more, find truth in the data and make the most out of what we could be sure of. </p>
                    <p className='md:text-xl p-4 mt-4 ml-8 mb-4 mr-4'></p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export const Head = () => <title>You Should Know</title>
// Step 3: Export your component
export default ShouldKnow