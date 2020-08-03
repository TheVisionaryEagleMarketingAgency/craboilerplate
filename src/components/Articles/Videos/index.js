import React, { Component } from "react";
//import axios from "axios";
import styles from "../../Articles/articles.css";
//import { URL } from "../../../config";
import Header from "../Videos/header";
import VideosRelated from "../../widgets/VideosList/VideosRelated/videosRelated";
import {
  firebaseDB,
  firebaseLooper,
  firebaseTeams,
  firebaseVideos,
} from "../../../firebase";

class VideoArticles extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: [],
  };

  componentWillMount() {
    firebaseDB
      .ref(`videos/${this.props.match.params.id}`)
      .once("value")
      .then((snapshot) => {
        //fetch the article of the id

        let article = snapshot.val(); // to access the infor of the snapshot

        //fetch the team of the fetched article

        firebaseTeams
          .orderByChild("id")
          .equalTo(article.team)
          .once("value") //order everything based on team ids and match the id of the article
          .then((snapshot) => {
            const team = firebaseLooper(snapshot);

            this.setState({
              article,
              team,
            });

            console.log(this.state.article);

            this.getRelated();
          });
      });

    // axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then((res) => {
    //   //console.log(res.data);

    //   let article = res.data[0];

    //   axios.get(`${URL}/teams?id=${article.team}`).then((response) => {
    //     console.log(response.data);

    //     this.setState({
    //       article: article,
    //       team: response.data,
    //     });

    //     this.getRelated();
    //   });
    // });
  }

  getRelated = () => {
    firebaseTeams.once("value").then((snapshot) => {
      const teams = firebaseLooper(snapshot);

      //serach all videos that has same teamID
      firebaseVideos
        .orderByChild("team")
        .equalTo(this.state.article.team)
        .limitToFirst(3)
        .once("value")
        .then((snapshot) => {
          const related = firebaseLooper(snapshot);

          this.setState({
            teams,
            related,
          });
        });
    });
    // axios.get(`${URL}/teams`).then((response) => {
    //   //console.log(response.data);
    //   let teams = response.data;
    //   //console.log(this.state);
    //   axios
    //     .get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
    //     .then((res) => {
    //       //console.log(res.data);
    //       this.setState({
    //         teams: teams,
    //         related: res.data,
    //       });
    //     });
    // });
  };

  render() {
    //console.log(this.state.teams[0]);
    //console.log(this.state.related);
    // console.log(this.state.teams);
    const article = this.state.article;
    const team = this.state.team;

    //console.log(team[0]);
    return (
      <div>
        <Header teamData={team[0]} />

        <div className={styles.video_wrapper}>
          <h1>{article.title}</h1>

          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          ></iframe>
        </div>

        <VideosRelated
          relatedteamData={this.state.related}
          teams={this.state.teams}
        />
      </div>
    );
  }
}

export default VideoArticles;
