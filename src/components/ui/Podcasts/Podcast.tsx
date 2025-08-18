import React from "react";

export default function Podcast(data: any) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="object-cover overflow-hidden rounded-xs w-[196px] h-[196px]">
        <img src={data.data.artworkUrl100} width="100%" alt="" />
      </div>
      <div>
        <span className="text-sm font-semibold">{data.data.collectionName}</span>
        <h5 className="text-xs text-[#FF78C9]">{data.data.artistName}</h5>
      </div>
    </div>
  );
}
