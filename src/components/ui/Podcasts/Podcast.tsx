import React from "react";

export default function Podcast(data: any) {
  console.log("podcast: ", data);
  return (
    <div className="flex flex-col gap-1">
      <div className="w-48 object-cover overflow-hidden rounded-md">
        <img src={data.data.artworkUrl100} width="100%" alt="" />
      </div>
      <div>
        <span className="text-sm font-bold">{data.data.collectionName}</span>
        <h5 className="text-xs text-[#FF78C9]">{data.data.artistName}</h5>
      </div>
    </div>
  );
}
