import React from "react";

import DOTD from "./Main/DOTD";
import TOT from "./Main/TOT";
import * as Banner from "./Main/Banner";

export default function Home() {
  return (
    <div>
      <Banner.IntroBanner />
      <DOTD />
      <TOT />
      <Banner.FeedbackBanner />
    </div>
  );
}
