"use client";
import React, { useEffect, useState } from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";
import PodcastsList from "./Podcasts/PodcastsList";
import { useSearchParams } from "next/navigation";
import EpisodesList from "./episodes/EpisodesList";

export default function MainContent({ children }: any) {
  const params = useSearchParams();
  const query = params.get("q") || "";
  const [results, setResults] = useState<{ podcasts: any[]; episodes: any[] }>({
    podcasts: [],
    episodes: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/search?q=${query}`);
        const data = await res.json();
        console.log("data in mainContent: ", data);
        setResults({
          podcasts: data.podcasts || [],
          episodes: data.episodes || [],
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  console.log("results: ", results);
  return (
    <div>
      <div>
        <div className="mt-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
          <span>Top Podcasts for فنجان</span>
          <div className="flex ">
            <ScrollNextPrevArrows />
            <DotsOptions />
          </div>
        </div>
        <PodcastsList results={results} />
      </div>
      <div>
      <div className="my-12 flex justify-between items-center border-b border-b-[#2e2e38] py-2">
        <span>Top Episodes for فنجان</span>
        <div className="flex ">
          <ScrollNextPrevArrows />
          <DotsOptions fill="red"  />
        </div>
      </div>
      <EpisodesList results={results} />
    </div>
    </div>
  );
}
