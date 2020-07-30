import React from "react";

import NewsSlider from "../../../widgets/NewsSlider/slider";
import NewsLists from "../../../widgets/NewsList/newslist";

const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        // settings={{
        //   dots: true,
        // }}
      />
      <NewsLists type="cardMain" loadmore={true} start={3} amount={10} />
    </div>
  );
};

export default NewsMain;
