import React, { forwardRef } from "react";
import Episode from "./Episode";
import type { EpisodeType } from "@/types";

interface EpisodesListProps {
  episodes: EpisodeType[];
  layoutType: "compact" | "list" | "grid" | "scrollable";
}

const EpisodesList = forwardRef<HTMLDivElement, EpisodesListProps>(
  ({ episodes, layoutType }, ref) => {
    return (
      <div className="mb-40 mt-5">
        <div
          className={`flex gap-4 justify-between ${
            layoutType === "grid"
              ? "flex-wrap"
              : layoutType === "scrollable"
              ? `flex flex-nowrap gap-4 items-center overflow-hidden pt-4 pb-8
                 overflow-x-auto
                 [&::-webkit-scrollbar]:h-0.5 hover:[&::-webkit-scrollbar]:h-2
                 [&::-webkit-scrollbar-track]:bg-gray-800
                 [&::-webkit-scrollbar-thumb]:bg-[#404080]
                 [&::-webkit-scrollbar-thumb]:rounded-full`
              : "flex-wrap"
          }`}
          ref={ref}
        >
          {episodes?.map((item: EpisodeType, idx: number) => (
            <Episode key={idx} data={item} layoutType={layoutType} />
          ))}
        </div>
      </div>
    );
  }
);

EpisodesList.displayName = "EpisodesList";

export default EpisodesList;