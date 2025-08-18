"use client";
import React, { useState } from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import EpisodesList from "./episodes/EpisodesList";

export default function MainContent({ results, loading, searchQuery }: any) {
  const podcasts = results?.podcasts?.results || [];
  const episodes = results?.episodes?.results || [];
  const [isOptionsOpen, setIsOptionsOpen] = useState<{
    type: string;
    status: boolean;
  }>({
    type: "",
    status: false,
  });

  const [podcastLayout, setPodcastLayout] = useState("scrollable");
  const [episodeLayout, setEpisodeLayout] = useState("grid");

  if (loading || !results) {
    return <div className="spinner"></div>;
  }

  if (!searchQuery) {
    return (
      <div className="flex justify-center items-center text-[#BABABF] h-1/3">
        Type in a search term to start.
      </div>
    );
  }

  if (podcasts.length === 0 && episodes.length === 0) {
    return (
      <div className="flex justify-center items-center text-[#BABABF] h-1/3">
        No results found.
      </div>
    );
  }
  // console.log('isOptionsOpen: ', isOptionsOpen);
  // 4. لو في نتائج
  return (
    <div>
      <div>
        <div className="relative mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Podcasts for {searchQuery}</span>
          <div className="flex col">
            <DotsOptions
              fill="#ffffff"
              optionType="podcasts"
              setIsOptionsOpen={setIsOptionsOpen}
              isOptionsOpen={isOptionsOpen}
            />
            {isOptionsOpen.type === "podcasts" && isOptionsOpen.status && (
              <div className="dotOptionsList"  onClick={() => podcastLayout === "scrollable" ? setPodcastLayout("grid") : setPodcastLayout("scrollable")}>
                <span
                  className="p-[6px] block hover:bg-[#4E366D]" 
                >
                  Switch layout to {podcastLayout === "scrollable" ? "Grid" : "Scrollable"}
                </span>
              </div>
            )}
          </div>
        </div>
        <PodcastsList podcasts={podcasts} layoutType={podcastLayout}  />
      </div>
      <div>
        <div className="relative my-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Episodes for {searchQuery}</span>
          <div className="flex flex-col">
            <DotsOptions
              fill="#ffffff"
              optionType="episodes"
              setIsOptionsOpen={setIsOptionsOpen}
              isOptionsOpen={isOptionsOpen}
            />
            {isOptionsOpen.type === "episodes" && isOptionsOpen.status && (
              <div className="dotOptionsList">
                <span className="p-[6px] block hover:bg-[#4E366D]">
                  Switch layout to Grid
                </span>
              </div>
            )}
          </div>
        </div>
        <EpisodesList episodes={episodes} />
      </div>
    </div>
  );
}
