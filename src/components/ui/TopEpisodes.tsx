import React, { useRef, useState } from 'react'
import DotsOptions from '../icons/DotsOptions'
import EpisodesList from './episodes/EpisodesList'
import { useClickOutside } from '@/hooks/useClickOutside';

export default function TopEpisodes({searchQuery, episodes} :any) {
      const [isOptionsOpen, setIsOptionsOpen] = useState(false);
      const ref = useRef<HTMLDivElement>(null);
    
      useClickOutside(ref, () => setIsOptionsOpen(false));
    
    
  return (
      <div>
        <div className="relative my-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Episodes for {searchQuery}</span>
          <div className="flex flex-col">
            <DotsOptions
              fill="#ffffff"
              optionType="episodes"
              setIsOptionsOpen={setIsOptionsOpen}
            />
            {isOptionsOpen  && (
              <div className="dotOptionsList" ref={ref}>
                <span className="p-[6px] block hover:bg-[#4E366D]">
                  Switch layout to Grid
                </span>
              </div>
            )}
          </div>
        </div>
        <EpisodesList episodes={episodes} />
      </div>
  )
}
