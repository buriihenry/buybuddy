"use client";

import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu'
import { useState } from 'react'

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className='hover:text-tech_dark hoverEffect md:hidden hover:cursor-pointer'/>   
    </button>
    <div className='md:hidden'>

    <SideMenu 
    isOpen={isSidebarOpen}
    onClose={() => setIsSidebarOpen(false)}
    />
    </div>
    </>
    
    
  )
}

export default MobileMenu
