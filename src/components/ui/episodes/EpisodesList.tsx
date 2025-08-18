import React from "react";
import Episode from "./Episode";

export default function EpisodesList({ episodes }: { episodes: any[] }) {
  return (
    <div className="">
      <div>
        <div className="flex gap-4 flex-wrap justify-between">
          {episodes?.map((item: any, idx: any) => (
            <Episode key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
