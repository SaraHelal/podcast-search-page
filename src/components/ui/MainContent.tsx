"use client";
import React, { useState } from "react";
import TopPodcasts from "./TopPodcasts";
import TopEpisodes from "./TopEpisodes";

export default function MainContent({ results, loading, searchQuery }: any) {
  const podcasts = results?.podcasts || [];
  const episodes = results?.episodes || [];


  if (loading || !results) {
    return <div className="spinner"></div>;
  }

  if (!searchQuery) {
    return (
      <div className="flex justify-center items-center text-[#BABABF] h-[300px]">
        Type in a search term to start.
      </div>
    );
  }

  if (podcasts.length === 0 && episodes.length === 0) {
    return (
      <div className="flex justify-center items-center text-[#BABABF] h-[300px]">
        No results found.
      </div>
    );
  }
  return (
    <div>
      <TopPodcasts searchQuery={searchQuery} podcasts={podcasts} />
      <TopEpisodes searchQuery={searchQuery} episodes={episodes} />
    
    </div>
  );
}
