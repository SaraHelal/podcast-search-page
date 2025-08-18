import React, { useEffect, useState } from 'react'

interface SearchResults {
  podcasts: any[];
  episodes: any[];
}


export default function useFetchSearch(searchQuery :string) {
  const [results, setResults] = useState<SearchResults>({
    podcasts: [],
    episodes: [],
  });

  const [loading, setLoading] = useState(false);
 useEffect(() => {
    if (!searchQuery) {
      setResults({ podcasts: [], episodes: [] });
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/search?q=${searchQuery}`);
        const data = await res.json();
        setResults({
          podcasts: data.podcasts || [],
          episodes: data.episodes || [],
        });
      } catch (err) {
        console.error(err);
        setResults({ podcasts: [], episodes: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return { results, loading };
}
