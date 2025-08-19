export type PodcastType = {
  artworkUrl600?: string;
  artworkUrl100?: string;
  artworkUrl60?: string;
  artworkUrl30?: string;
  collectionName: string;
  artistName: string;
  title?: string; 
};

export type EpisodeType = {
  id: string;
  title: string;
  trackName: string;
  releaseDate: string; // ISO date string
  trackTimeMillis?: number;
  artworkUrl60?: string;
  artworkUrl160?: string;
  artworkUrl600?: string;
  description?: string;
  podcast: PodcastType;
  
};

export type ResultsType = {
  podcasts?: PodcastType[];
  episodes?: EpisodeType[];
};
