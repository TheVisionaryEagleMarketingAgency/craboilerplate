import React from "react";

import VideoList from "../../../widgets/VideosList/videoslists";

const VideosMain = () => {
  return (
    <div>
      <VideoList
        type="card"
        title={true}
        loadmore={true}
        start={1}
        amount={10}
      />
    </div>
  );
};

export default VideosMain;
