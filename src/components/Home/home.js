import React from "react";
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsLists from "../widgets/NewsList/newslist";
import VideoList from "../widgets/VideosList/videoslists";
const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: true,
        }}
      />

      <NewsLists type="card" loadmore={true} start={3} amount={3} />
      <VideoList
        type="card"
        title={true}
        loadmore={true}
        start={1}
        amount={4}
      />
    </div>
  );
};

export default Home;
