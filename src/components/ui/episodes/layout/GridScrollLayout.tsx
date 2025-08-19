import DotsOptions from '@/components/icons/DotsOptions'
import Image from 'next/image';
import React, { useState } from 'react'

interface GridScrollLayoutProps {
  layoutType: string;
  img: string;
  trackName: string;
  title: string;
  formatedToDate: string;
  episodesDuration: string
}
export default function GridScrollLayout({layoutType, img, trackName, title, formatedToDate, episodesDuration}: GridScrollLayoutProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  return (
    <div
          className={`relative ${layoutType === "scrollable" ? "flex-nowrap" : "flex-wrap"} flex-shrink-0 w-full md:w-[47%] lg:w-[24%] bg-gradient-to-br h-[110px]  transition-opacity duration-150 from-[#18053f] to-[#50335d] hover:from-[#280967] hover:to-[#815496] shadow-inner cursor-pointer rounded-md overflow-hidden`}
          style={{
            boxShadow:
              "inset 0 1px 1px hsl(240, 10%, 20%), 0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="flex justify-between gap-4 items-center w-full cursor-pointer h-full">
            <div className="flex-[2_2_0%] object-cover h-full overflow-hidden ">
               
            <Image src={img || "images/default-image.png"} width={100} height={100} className="w-full h-full object-cover" alt="image" />
              
            </div>
            <div className="flex-[3_3_0%] text-left flex flex-col justify-between h-full py-4">
              <div className="flex flex-col gap-1">
                <span
                  className="text-xs font-bold block line-clamp-2 text-[#E3BD71]  leading-relaxed tracking-wide max-w-[90%] overflow-hidden "
                >
                  {trackName}
                </span>
                <h5
                  className="text-xs text-[#fff9]  block leading-relaxed tracking-wide max-w-[90%] overflow-hidden line-clamp-2"
                >
                  {title}
                </h5>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[12px]">{formatedToDate}</span>
                <span className="text-[12px]">{episodesDuration}</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[10px] right-[2px]">
            <DotsOptions fill="#5f5f5f" setIsOptionsOpen={setIsOptionsOpen} />
          </div>
        </div>
  )
}
