import React from 'react'
import Chat from './Chat'
import Footer from './Footer'

const Main = ({ isOpen, toggleSidebar} ) => {
  return (
    <div className='relative'>
      <button onClick={toggleSidebar} >
            {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <Chat />
      <section >
        <Footer />
      </section>
    </div>
  )
}

export default Main