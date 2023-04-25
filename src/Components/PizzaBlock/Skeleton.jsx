import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="142" cy="136" r="125" />
    <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="437" rx="10" ry="10" width="95" height="42" />
    <rect x="127" y="435" rx="20" ry="20" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
