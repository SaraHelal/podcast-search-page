"use client"
import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import { useSearchParams } from "next/navigation";
import { ConnectionClosedEvent } from "mongodb";

export default function PodcastsList({results} : any) {
  const params = useSearchParams();
  const query = params.get('q') || "";

  useEffect(() => {
    console.log('use effect start')
    const fetchResult = async () => {
      if (!query) return
      console.log('begn fetching with q: ', query);
      const result = await fetch(`http://localhost:3000/search?q=${query}`);
      const data = await result.json();
    };
      fetchResult();
  }, [query])
  return (
    <div className="flex gap-2 overflow-auto flex-nowrap">
      {results?.map((i :any) => (
        <div key={i}>
          <Podcast />
        </div>
      ))}
    </div>
  );
}
