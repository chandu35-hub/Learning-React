import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState)
    }

  return (
    <div className='flex'>
      {isOpen && (
        <div className='bg-black text-white h-screen w-[225px]'>
          <Sidebar />
        </div>
      )}
      
      <div className={isOpen ? 'flex-1' : 'w-full'} >
        <Main isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  )
}

export default App
