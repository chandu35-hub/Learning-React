import React from 'react'

const Sidebar = () => {
    
  return (
    <div className='flex flex-col'>  
        <div>        
            <img className='h-20 w-[125px] mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WfeO0jRXvVTUyM-SPvDPmNHID-3EyoIrNRqjTiBt1w&s' alt='company logo' />
        </div> 
        <div>
            New Chat
        </div>
        <div>
            Chat History
        </div>
        <div>
            User Profile
        </div>
    </div>
  )
}

export default Sidebar
