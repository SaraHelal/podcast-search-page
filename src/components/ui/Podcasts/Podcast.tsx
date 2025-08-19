import { PodcastType } from "@/types";
import React from "react";
type PodcastProps = {
  data: PodcastType;
};
export default function Podcast({ data }: PodcastProps) {
  const podcastImg = data?.artworkUrl600 || data?.artworkUrl100 || data?.artworkUrl60 || data?.artworkUrl30
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="object-cover overflow-hidden rounded-xs w-[196px] h-[196px]">
        <img src={podcastImg} width="100%" alt="" />
      </div>
      <div>
        <span className="text-sm font-semibold">{data.collectionName}</span>
        <h5 className="text-xs text-[#FF78C9]">{data.artistName}</h5>
      </div>
    </div>
  );
}
