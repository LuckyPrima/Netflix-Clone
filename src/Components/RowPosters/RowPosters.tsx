import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import { API_BASE_URL, API_KEY, imageUrl } from "@/Constants/Constants";
import YouTube, { YouTubeProps } from "react-youtube";

interface Movie {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
}

interface RowPostProps {
  isSmall?: boolean;
  title: string;
  url: string;
}

function RowPost({ isSmall, title, url }: RowPostProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("Fetched Movies:", response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [url]);

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id: number) => {
    console.log(`${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    axios
      .get(`${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response);
        setUrlId(response.data.results[0].key);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          console.log("Data not found");
        } else {
          console.log("An error occurred");
        }
      });
  };

  return (
    <div className="ml-5 text-white">
      <h2 className="text-[30px] font-bold">{title}</h2>
      <div className="flex p-5 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {movies.map((obj) =>
          obj.backdrop_path || obj.poster_path ? (
            <img
              onClick={() => handleMovie(obj.id)}
              key={obj.id}
              className={
                isSmall
                  ? "smallposter hover:scale-120 transition duration-300 ease-in"
                  : "max-h-[250px] mr-2.5 hover:scale-120 transition duration-300 ease-in"
              }
              alt="poster"
              src={imageUrl + (obj.backdrop_path || obj.poster_path)}
            />
          ) : null
        )}
      </div>
      {urlId ? <YouTube videoId={urlId} opts={opts} /> : ""}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default RowPost;
