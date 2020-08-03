import React, { Component } from "react";
//import axios from "axios";
//import { URL } from "../../../../config";
import styles from "../../../Articles/articles.css";
import Header from "../../News/Posts/header";
import {
  firebaseDB,
  firebaseLooper,
  firebaseTeams,
} from "../../../../firebase";

class NewsArticles extends Component {
  state = {
    article: [],
    team: [],
  };

  componentWillMount() {
    //fetch the articles and the firebasse id

    //  firebaseDB.ref("articles/ID(L3ZeHO-pRZQZJee9Hw2)")
    firebaseDB
      .ref(`articles/${this.props.match.params.id}`)
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
          });
      });

    // axios
    //   .get(`${URL}/articles?id=${this.props.match.params.id}`)
    //   .then((res) => {
    //     console.log(res.data);

    //     let article = res.data[0];

    //     axios.get(`${URL}/teams?id=${article.team}`).then((response) => {
    //       console.log(response.data);

    //       this.setState({
    //         article: article,
    //         team: response.data,
    //       });
    //     });
    //   });
  }

  render() {
    console.log(this.state);
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={styles.articleWrapper}>
        <Header
          teamData={team[0]} // passing the team state above this is aaray of objects
          author={article.author}
          date={article.date}
        />

        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div
            className={styles.articleImage}
            style={{ background: `url("/images/articles/${article.image}")` }}
          ></div>

          <div>{article.body}</div>
        </div>
      </div>
    );
  }
}
export default NewsArticles;
