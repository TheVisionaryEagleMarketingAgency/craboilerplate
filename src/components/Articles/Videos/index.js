import React, { Component } from "react";
import axios from "axios";
import styles from "../../Articles/articles.css";
import { URL } from "../../../config";
import Header from "../Videos/header";
import VideosRelated from "../../../components/widgets/VideosList/VideosRelated/videosRelated";

class VideoArticles extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: [],
  };

  componentWillMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then((res) => {
      //console.log(res);

      let article = res.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then((response) => {
        //console.log(res);

        this.setState({
          article: article,
          team: response.data,
        });

        this.getRelated();
      });
    });
  }

  getRelated = () => {
    axios.get(`${URL}/teams`).then((response) => {
      //console.log(res);

      let teams = response.data;

      axios
        .get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        .then((response) => {
          //console.log(res);

          this.setState({
            teams: teams,
            related: response.data,
          });
        });
    });
  };

  render() {
    const article = this.state.article;
    const team = this.state.team;
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

        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    );
  }
}

export default VideoArticles;
