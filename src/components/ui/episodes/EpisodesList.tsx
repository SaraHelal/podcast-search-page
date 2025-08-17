import React from "react";
import Episode from "./Episode";

export default function EpisodesList(results: any) {
  console.log("results from podlists: ", results);

  const { episodes, podcasts } = results.results;
  console.log("podcasts from podlists: ", podcasts);
  console.log("episodes from podlists: ", episodes);
  return (
    <div className="">
      <div>
        <div className="flex gap-4 flex-wrap justify-between">
          {episodes?.results?.map((item: any, idx: any) => (
            <Episode key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
