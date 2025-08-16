import React from 'react'
import Podcast from './Podcast';

export default function PodcastsList() {
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className='flex gap-2 overflow-auto flex-nowrap'>
      {items.map(i=> (
        <div key={i}><Podcast /></div>
      ))}
    </div>
  )
}
