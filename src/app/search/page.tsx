"use client";
import React from "react";
import Layout from "@/components/layouts/Layout";

export default function SearchPage() {
  return (
    <Layout>
    </Layout>
  );
}
// "use client"
// import { useState } from "react";

// export default function PodcastSearch() {
//   const [query, setQuery] = useState("");
//   const [podcasts, setPodcasts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // جلب البودكاستات من iTunes
//   const searchPodcasts = async () => {
//     setLoading(true);
//     const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=podcast&limit=5`);
//     const data = await res.json();

//     // لكل بودكاست نجيب الحلقات
//     const podcastsWithEpisodes = await Promise.all(
//       data.results.map(async (podcast) => {
//         if (podcast.feedUrl) {
//           const episodes = await getEpisodes(podcast.feedUrl);
//           return { ...podcast, episodes: episodes.slice(0, 5) }; // أول 5 حلقات
//         } else {
//           return { ...podcast, episodes: [] };
//         }
//       })
//     );

//     setPodcasts(podcastsWithEpisodes);
//     setLoading(false);
//   };

//   // جلب الحلقات من RSS feed
//   const getEpisodes = async (feedUrl) => {
//     try {
//       const res = await fetch(feedUrl);
//       const text = await res.text();
//       const parser = new DOMParser();
//       const xml = parser.parseFromString(text, "text/xml");
//       const items = xml.querySelectorAll("item");
//       const episodes = Array.from(items).map(item => ({
//         title: item.querySelector("title")?.textContent,
//         pubDate: item.querySelector("pubDate")?.textContent,
//         audioUrl: item.querySelector("enclosure")?.getAttribute("url"),
//         description: item.querySelector("description")?.textContent
//       }));
//       return episodes;
//     } catch (err) {
//       console.error("Error fetching RSS:", err);
//       return [];
//     }
//   };

//   return (
//     <div>
//       <h2>بحث بودكاست</h2>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="اكتب اسم البودكاست"
//       />
//       <button onClick={searchPodcasts}>بحث</button>

//       {loading && <p>جاري التحميل...</p>}

//       {podcasts.map(podcast => (
//         <div key={podcast.collectionId} style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
//           <h3>{podcast.collectionName}</h3>
//           <img src={podcast.artworkUrl100} alt={podcast.collectionName} />
//           <p>الحلقات:</p>
//           <ul>
//             {podcast.episodes.map((ep, index) => (
//               <li key={index}>
//                 <strong>{ep.title}</strong> - {ep.pubDate}
//                 <br />
//                 <audio controls src={ep.audioUrl}></audio>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
