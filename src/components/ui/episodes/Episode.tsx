import React from "react";
import { TimeMillisToMins } from "@/utils/TimeMillisToMins";
import CompactLayout from "./layout/CompactLayout";
import ListLayout from "./layout/ListLayout";
import GridScrollLayout from "./layout/GridScrollLayout";
import type{ EpisodeType } from "@/types";

interface EpisodeProps {
  data: EpisodeType;
  layoutType: string;
}

export default function Episode({ data, layoutType }: EpisodeProps) {
  const date = new Date(data?.releaseDate);
  const formatedToDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const episodesDuration = TimeMillisToMins(data.trackTimeMillis || 0);
  const podcastImg =
    data.artworkUrl60 || data.artworkUrl160 || data.artworkUrl600 || "images/default-image.png";

  return (
    <>
    
      {layoutType === "compact" ? (
       <CompactLayout trackName={data?.trackName} podcastImg={podcastImg} title={data?.podcast.title?? ''}/>
      ) : 
      layoutType === "list" ? (
<ListLayout
  layoutType={layoutType}
  img={podcastImg ?? "/default-podcast.png"} // fallback if undefined
  trackName={data.trackName ?? ""}          // fallback to empty string
  title={data.podcast?.title ?? ""}        // fallback to empty string
  description={data.description ?? ""}     // fallback to empty string
  formatedToDate={formatedToDate}          // already string
  episodesDuration={episodesDuration}      // already string
/>
      ) :
      
      (
        <GridScrollLayout layoutType={layoutType} img={data.artworkUrl600 ?? "images/default-image.png"} trackName={data?.trackName} title={data?.podcast.title?? ''} formatedToDate={formatedToDate} episodesDuration={episodesDuration}/>
        
      )}
    </>
  );
}
