"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Podcast from "@/components/ui/Podcasts/Podcast";
import PodcastsList from "@/components/ui/Podcasts/PodcastsList";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h1>نتائج البحث: {query}</h1>
      {loading && <p>جاري التحميل...</p>}
      <div className="flex gap-2 overflow-auto flex-nowrap">
        {results.length === 0 && !loading && <p>لا توجد نتائج</p>}
        
            <PodcastsList results={results} />
      </div>
    </div>
  );
}