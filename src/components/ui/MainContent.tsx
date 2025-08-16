import React from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";

export default function MainContent({ children }: any) {
  return (
    <div>
      <div>{children}</div>
      <div className="mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Podcasts for فنجان</span>
        <div className="flex ">
          <ScrollNextPrevArrows />
          <DotsOptions />
        </div>
      </div>
      <PodcastsList />
    </div>
  );
}
