import React from "react";
import styles from "../../VideosList/videolists.css";
import VideoListTemplate from "../videos_list_template";

const VideosRelated = (props) => {
  return (
    <div className={styles.relatedWrapper}>
      <VideoListTemplate data={props.data} teams={props.teams} />
    </div>
  );
};

export default VideosRelated;
