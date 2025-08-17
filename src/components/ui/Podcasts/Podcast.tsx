import React from "react";

export default function Podcast(data: any) {
  console.log("podcast: ", data);
  return (
    <div className="flex flex-col gap-1">
      <div className="w-48 object-cover">
        <img src={data.data.artworkUrl100} width="100%" alt="" />
      </div>
      <div>
        <span>{data.data.collectionName}</span>
        <h5>{data.data.artistName}</h5>
      </div>
    </div>
  );
}
