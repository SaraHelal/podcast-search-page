"use client";
import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";

export default function PodcastsList({ podcasts, layoutType }: any) {
  console.log("podcast: ", layoutType);
  return (
    <div
      className="flex flex-row gap-4 
  overflow-x-auto
  [&::-webkit-scrollbar]:h-0.5 hover:[&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-gray-800
  [&::-webkit-scrollbar-thumb]:bg-[#404080]
  [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {/* قسم Top Podcasts */}
      <div>
        <div
          className={`flex gap-3 overflow-auto ${
            layoutType === "grid" ? "flex-wrap" : "flex-nowrap"
          } pt-4`}
        >
          {podcasts?.map((item: any, idx: any) => {
            return <Podcast key={idx} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
