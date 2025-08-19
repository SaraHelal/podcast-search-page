import React from "react";
import Episode from "./Episode";

export default function EpisodesList({ ref, episodes, layoutType }: any) {
  return (
      <div className="mb-40 mt-5">
          <div className={`flex gap-4 justify-between ${layoutType === "grid" ? "flex-wrap" : layoutType === "scrollable" ? `flex flex-nowrap gap-4 items-center overflow-hidden  pt-4 pb-8 
    
  overflow-x-auto
  [&::-webkit-scrollbar]:h-0.5 hover:[&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-gray-800
  [&::-webkit-scrollbar-thumb]:bg-[#404080]
  [&::-webkit-scrollbar-thumb]:rounded-full` : "flex-wrap"}`} ref={ref}>
            {episodes?.map((item: any, idx: any) => (
              <Episode key={idx} data={item} layoutType={layoutType} />
            ))}
          </div>
      </div>
  );
}
