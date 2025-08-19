import React, { useRef, useState } from "react";
import DotsOptions from "../icons/DotsOptions";
import EpisodesList from "./episodes/EpisodesList";
import PrevNextIcon from "../icons/PrevNextIcon";
import type { EpisodeType } from "@/types"; 

interface TopEpisodesProps {
  searchQuery: string;
  episodes: EpisodeType[];
}

export default function TopEpisodes({ searchQuery, episodes }: TopEpisodesProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
const [episodesLayout, setEpisodesLayout] = useState<"grid" | "scrollable" | "compact" | "list">("compact");
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);

const handleOptions = (layout: "grid" | "scrollable" | "compact" | "list") => {
    setEpisodesLayout(layout);
    setIsOptionsOpen(false);
  };
  return (
    <div>
      <div className="relative mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Episodes for {searchQuery}</span>
        
        <div className="flex gap-2">
          {episodesLayout === "scrollable" && <PrevNextIcon ref={ref1} />}
          <DotsOptions
            fill="#ffffff"
            setIsOptionsOpen={setIsOptionsOpen}
          />
          {isOptionsOpen && (
            <div className="dotOptionsList absolute top-full right-0 z-50 bg-[#2e2e38] p-2" ref={ref}>
              {episodesLayout !== "compact" && (
                <span
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
      <EpisodesList ref={ref1} episodes={episodes} layoutType={episodesLayout} />
    </div>
  );
}
