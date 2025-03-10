import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPosters from "@/Components/RowPosters/RowPosters";
import {
  originals,
  action,
  comedy,
  horror,
  romance,
} from "../Components/Urls/Urls";

function IndexPage() {
  return (
    <div className="font-sans bg-[#111] min-h-screen">
      <NavBar />
      <Banner />
      <RowPosters title="Netflix Originals" url={originals} />
      <RowPosters title="Action Movies" isSmall url={action} />
      <RowPosters title="Comedy Movies" isSmall url={comedy} />
      <RowPosters title="Horror Movies" isSmall url={horror} />
      <RowPosters title="Romance Movies" isSmall url={romance} />
    </div>
  );
}

export default IndexPage;
