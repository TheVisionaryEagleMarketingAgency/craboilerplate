import React from "react";
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsLists from "../widgets/NewsList/newslist";
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
    </div>
  );
};

export default Home;
