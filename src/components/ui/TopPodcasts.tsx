import React, { useRef, useState } from "react";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import { useClickOutside } from "@/hooks/useClickOutside";
import PrevNextIcon from "../icons/PrevNextIcon";
import type { PodcastType } from "@/types";

interface TopPodcastsProps {
  searchQuery: string;
  podcasts: PodcastType[];
}

export default function TopPodcasts({ searchQuery, podcasts }: TopPodcastsProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
const [podcastLayout, setPodcastLayout] = useState<"scrollable" | "grid">("scrollable");
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);

const handleOptions = (layout: "scrollable" |  "grid") => {
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
      <PodcastsList forwardedRef={ref1} podcasts={podcasts} layoutType={podcastLayout} />
    </div>
  );
}
