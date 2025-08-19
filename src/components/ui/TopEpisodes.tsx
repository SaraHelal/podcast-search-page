import React, { useRef, useState } from "react";
import DotsOptions from "../icons/DotsOptions";
import EpisodesList from "./episodes/EpisodesList";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function TopEpisodes({ searchQuery, episodes }: any) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [episodesLayout, setEpisodesLayout] = useState("compact");
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOptionsOpen(false));
  const handleOptions = (layout: string) => {
    setEpisodesLayout(layout);
    setIsOptionsOpen(false);
  };
  return (
    <div>
      <div className="relative mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Episodes for {searchQuery}</span>
        <div className="flex flex-col">
          <DotsOptions
            fill="#ffffff"
            optionType="episodes"
            setIsOptionsOpen={setIsOptionsOpen}
          />
          {isOptionsOpen && (
            <div className="dotOptionsList" ref={ref}>
              {episodesLayout !== "compact" && ( <span
                className="p-[6px] block hover:bg-[#4E366D]"
                onClick={() => handleOptions("compact")}
              >
                Switch layout to Compact
              </span>
          )}
           {episodesLayout !== "grid" && (
              <span
                className="p-[6px] block hover:bg-[#4E366D]"
                onClick={() => handleOptions("grid")}
              >
                Switch layout to Grid
              </span>
           )}
              {episodesLayout !== "scrollable" && (
              <span
                className="p-[6px] block hover:bg-[#4E366D]"
                onClick={() => handleOptions("scrollable")}
              >
                Switch layout to Scroll
              </span>
              )}
              {episodesLayout !== "list" && (
              <span
                className="p-[6px] block hover:bg-[#4E366D]"
                onClick={() => handleOptions("list")}
              >
                Switch layout to List
              </span>
              )}
            </div>
          )}
        </div>
      </div>
      <EpisodesList episodes={episodes} layoutType={episodesLayout} />
    </div>
  );
}
