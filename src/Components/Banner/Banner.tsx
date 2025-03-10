import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import { API_BASE_URL, API_KEY, imageUrl } from "@/Constants/Constants";

interface Movie {
  title?: string;
  name?: string;
  overview?: string;
  backdrop_path?: string;
}

function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[Math.floor(Math.random() * 19) + 1]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="bg-cover lg:h-[600px] text-white"
    >
      <div className="pt-[170px] pl-[15px] h-[190px]">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold pb-3 text-white">
          {movie?.title || movie?.name}
        </h1>
        <div className="banner_buttons">
          <button className="text-white font-bold rounded-md px-8 py-2 bg-[rgba(51,51,51,0.5)] cursor-pointer mr-4 hover:text-black hover:bg-[#e6e6e6]">
            Play
          </button>
          <button className="text-white font-bold rounded-md px-8 py-2 bg-[rgba(51,51,51,0.5)] cursor-pointer mr-4 hover:text-black hover:bg-[#e6e6e6]">
            My list
          </button>
        </div>
        <h1 className="md:w-[45rem] md:max-w-[500px] pr-5 w-full leading-[1.3] pt-4 lg:text-[1.3rem] text-xl lg:h-[80px] ">
          {movie?.overview?.substring(0, 500)}
        </h1>
      </div>
      <div className="h-[25.6rem] bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]"></div>
    </div>
  );
}

export default Banner;
