import React from 'react'

export default function MenuList() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex gap-2 items-center'>
            <img src="/icons/home-icon.svg" width='15' alt="Menu icon" />
            <span className='text-sm'>Home</span>
        </div>
        <div className='flex gap-2 items-center'>
            <img src="/icons/discover-line.svg" width='15' alt="Menu icon" />
            <span className='text-sm'>Discover</span>
        </div>
        <div className='italic'>Your Stuff</div>
        <div className='flex gap-2 items-center'>
            <img src="/icons/my-queue-line.svg" width='15' alt="Menu icon" />
            <span className='text-sm'>My Queue</span>
        </div>
        <div className='flex gap-2 items-center'>
            <img src="/icons/my-podcasts-line.svg" width='15' alt="Menu icon" />
            <span className='text-sm'>My Podcasts</span>
        </div>
        <div className='flex gap-2 items-center'>
            <img src="/icons/recents-line.svg" width='15' alt="Menu icon" />
            <span className='text-sm'>Recents</span>
        </div>
    </div>
  )
}
