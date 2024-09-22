import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";

import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";


const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      <MarqueeWapper direction="left" images={images} />
      <About />
      <Projects />
      <ScrollRestoration/>
    </>
  );
};

export default Home;
