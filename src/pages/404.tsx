import * as React from 'react'
import "../styles/global.css"
import "../styles/navStyles.css"
import Nav from './nav'
import Footer from './footer'

const Error = () => {
  return (
    <main>
      <Nav></Nav>
      <div>
        <p className='p-10'> Uh oh... I have clearly messed up a bit and sent you somewhere that doesn't exist. Let me know and I will fix that.</p>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default Error
