import React, { useRef, useState } from "react";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function TopPodcasts({
  searchQuery,
  podcasts,
  podcastLayout,
  setPodcastLayout,
}: any) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOptionsOpen(false));

  return (
    <div>
      <div className="relative mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Podcasts for {searchQuery}</span>
        <div className="flex col">
          <DotsOptions
            fill="#ffffff"
            optionType="podcasts"
            setIsOptionsOpen={setIsOptionsOpen}
          />
          {isOptionsOpen && (
            <div
              className="dotOptionsList"
              ref={ref}
              onClick={() =>
                podcastLayout === "scrollable"
                  ? setPodcastLayout("grid")
                  : setPodcastLayout("scrollable")
              }
            >
              <span className="p-[6px] block hover:bg-[#4E366D]">
                Switch layout to{" "}
                {podcastLayout === "scrollable" ? "Grid" : "Scrollable"}
              </span>
            </div>
          )}
        </div>
      </div>
      <PodcastsList podcasts={podcasts} layoutType={podcastLayout} />
    </div>
  );
}
