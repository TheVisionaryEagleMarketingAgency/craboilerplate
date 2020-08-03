import React from "react";
import styles from "../../VideosList/videolists.css";
import VideoListTemplate from "../videos_list_template";

const VideosRelated = ({ relatedteamData, teams, ...rest }) => {
  // console.log(relatedteamData); // not getting this
  // console.log(teams);
  return (
    <div className={styles.relatedWrapper}>
      {/* <VideoListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          /> */}
      <VideoListTemplate data={relatedteamData} teams={teams} />
    </div>
  );
};

export default VideosRelated;

//From the videos where we have tags..

//we will grab a team from the lisr of teams and display all the videos related from the
//city of the teams from the video list using tags
