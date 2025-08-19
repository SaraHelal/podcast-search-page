import DotsOptions from "@/components/icons/DotsOptions";
import React from "react";
import { TimeMillisToMins } from "@/utils/TimeMillisToMins";
import CompactLayout from "./layout/CompactLayout";
import ListLayout from "./layout/ListLayout";
import GridScrollLayout from "./layout/GridScrollLayout";

export default function Episode({ data, layoutType }: any) {
  const date = new Date(data?.releaseDate);
  const formatedToDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const episodesDuration = TimeMillisToMins(data?.trackTimeMillis)
  console.log("data:", data);
  const podcastImg =
    data?.artworkUrl60 || data?.artworkUrl160 || data?.artworkUrl600;
  return (
    <>
    
      {layoutType === "compact" ? (
       <CompactLayout trackName={data?.trackName} podcastImg={podcastImg} title={data?.podcast.title}/>
      ) : 
      layoutType === "list" ? (
        <ListLayout layoutType={layoutType} img={data.artworkUrl600} trackName={data?.trackName} title={data?.podcast.title} description={data?.description} formatedToDate={formatedToDate} episodesDuration={episodesDuration}/>
      ) :
      
      (
        <GridScrollLayout layoutType={layoutType} img={data.artworkUrl600} trackName={data?.trackName} title={data?.podcast.title}/>
        
      )}
    </>
  );
}
