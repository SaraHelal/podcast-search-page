"use client";
import React from "react";
import Podcast from "./Podcast";

export default function PodcastsList({ ref, podcasts, layoutType }: any) {
  return (
    <div
      className={
        layoutType === "grid"
          ? "flex xl:grid xl:grid-cols-6 gap-[15px] gap-y-[20px] py-[15px] flex-wrap"
          : `flex gap-4 items-center overflow-hidden flex-nowrap  py-4 
    
  overflow-x-auto scroll-smooth

  [&::-webkit-scrollbar]:h-0.5 hover:[&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-gray-800
  [&::-webkit-scrollbar-thumb]:bg-[#404080]
  [&::-webkit-scrollbar-thumb]:rounded-full`
      }
      ref={ref}
    >
      {podcasts && podcasts?.map((item: any, idx: any) => (
        <Podcast key={idx} data={item} />
      ))}
    </div>
  );
}
