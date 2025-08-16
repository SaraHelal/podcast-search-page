import React from 'react'
import Header from '../ui/Header'
import MainContent from '../ui/MainContent'
import Sidebar from '../ui/Sidebar'

export default function Layout({children} : any) {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-7 px-5 overflow-hidden'>
            <Header />
            <MainContent>{children}</MainContent>
        </div>
    </div>
  )
}
