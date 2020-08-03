import React, { Component } from "react";
//import axios from "axios";
import styles from "./videolists.css";
//import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import VideoListTemplate from "./videos_list_template";

import {
  firebaseVideos,
  firebaseLooper,
  firebaseTeams,
} from "../../../firebase";

class VideoList extends Component {
  //step[1]
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    amount: this.props.amount,
    end: this.props.start + this.props.amount,
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      firebaseTeams.once("value").then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams,
        });
      });
      // axios.get(`${URL}/teams`).then((res) => {
      //   this.setState({
      //     teams: res.data,
      //   });
      // });
    }

    firebaseVideos
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then((snapshot) => {
        const videos = firebaseLooper(snapshot);

        this.setState({
          videos: [...this.state.videos, ...videos],
          start,
          end,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then((res) => {
    //   //console.log(res);
    //   this.setState({
    //     videos: [...this.state.videos, ...res.data],
    //     start,
    //     end,
    //   });
    // });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case "card":
        template = (
          <VideoListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  //step[3]

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };

  //step[2]
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong>Videos
      </h3>
    ) : null;
  };

  render() {
    //console.log(this.state);
    //checks if title and button needs to render or not
    return (
      <div className={styles.videolist_wrapper}>
        {this.renderTitle()} {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
