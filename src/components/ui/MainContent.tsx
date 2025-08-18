"use client";
import React from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import EpisodesList from "./episodes/EpisodesList";

export default function MainContent({ results, loading, searchQuery }: any) {
  const podcasts = results?.podcasts?.results || [];
  const episodes = results?.episodes?.results || [];

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

  // 4. لو في نتائج
  return (
    <div>
      <div>
        <div className="mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Podcasts for {searchQuery}</span>
          <div className="flex ">
            <ScrollNextPrevArrows />
            <DotsOptions />
          </div>
        </div>
        <PodcastsList podcasts={podcasts} />
      </div>
      <div>
        <div className="my-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Episodes for {searchQuery}</span>
          <div className="flex ">
            <DotsOptions fill="#ffffff" />
          </div>
        </div>
        <EpisodesList episodes={episodes} />
      </div>
    </div>
  );
}