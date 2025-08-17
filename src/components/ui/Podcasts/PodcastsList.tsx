"use client";
import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";

export default function PodcastsList(results: any) {
  console.log("results from podlists: ", results);

  const { episodes, podcasts } = results.results;
  console.log("podcasts from podlists: ", podcasts);
  console.log("episodes from podlists: ", episodes);
  return (
    <div className="flex gap-4 overflow-auto flex-nowrap flex-col">
      {/* قسم Top Podcasts */}
      <div>
        <div className="flex gap-2 overflow-auto flex-nowrap">
          {podcasts?.results?.map((item: any, idx: any) => {
            console.log("item: ", item);
            return <Podcast key={idx} data={item} />;
          })}
        </div>
      </div>

    </div>
  );
}
