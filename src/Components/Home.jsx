import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/Axios";

function Home() {
  document.title = "Flim-Flicks | Homepage";
  const [wallpaper, setwallpaper] = useState(null);

  let getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);
  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
