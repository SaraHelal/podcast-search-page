import React, { useRef, useState } from "react";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import { useClickOutside } from "@/hooks/useClickOutside";
import PrevNextIcon from "../icons/PrevNextIcon";

export default function TopPodcasts({ searchQuery, podcasts }: any) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [podcastLayout, setPodcastLayout] = useState("scrollable");
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOptionsOpen(false));
  const handleOptions = (layout: string) => {
    setPodcastLayout(layout);
    setIsOptionsOpen(false);
  };
  return (
    <div>
      <div className="relative mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Podcasts for {searchQuery}</span>
        <div className="flex gap-2">
          {podcastLayout === "scrollable" && (
            <PrevNextIcon ref={ref1} />
          ) }
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
                handleOptions(
                  podcastLayout === "scrollable" ? "grid" : "scrollable"
                )
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
      <PodcastsList ref={ref1} podcasts={podcasts} layoutType={podcastLayout} />
    </div>
  );
}
