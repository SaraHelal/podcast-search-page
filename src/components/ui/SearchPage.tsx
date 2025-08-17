"use client";
import { useState } from "react";

export default function SearchPage() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:3000/search?term=${term}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ابحث عن بودكاست 🎙️</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border rounded-xl px-3 py-2 flex-grow"
          placeholder="أدخل كلمة البحث..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          بحث
        </button>
      </div>

      <div className="grid gap-4">
        {results.map((item) => (
          <div key={item.trackId} className="p-4 border rounded-xl flex gap-4">
            <img
              src={item.artworkUrl100}
              alt={item.collectionName}
              className="w-20 h-20 rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.collectionName}</h2>
              <p className="text-sm text-gray-600">{item.artistName}</p>
              <a
                href={item.feedUrl}
                target="_blank"
                className="text-blue-500 underline text-sm"
              >
                استمع الآن
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
