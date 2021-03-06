import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
//import axios from "axios";
import styles from "./newslist.css";
import Button from "../Buttons/buttons";
import CardInfo from "../../widgets/CardInfo/cardinfo";
import {
  firebaseArticles,
  firebaseLooper,
  firebaseTeams,
} from "../../../firebase";
//import { URL } from "../../../config";

class NewsLists extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      //fetch all teams

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

    firebaseArticles
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then((snapshot) => {
        const articles = firebaseLooper(snapshot);

        this.setState({
          items: [...this.state.items, ...articles],
          start,
          end,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then((res) => {
    //   //console.log(res);
    //   this.setState({
    //     items: [...this.state.items, ...res.data],
    //     start,
    //     end,
    //   });
    // });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };

  renderNews = (type) => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper_enter,
              }}
              timeout={500}
              key={i}
            >
              <div key={i} className={styles.newlist_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </CSSTransition>
          );
        });
        break;

      case "cardMain":
        template = this.state.items.map((item, i) => {
          return (
            <CSSTransition
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper_enter,
              }}
              timeout={500}
              key={i}
            >
              <Link to={`/articles/${item.id}`}>
                <div className={styles.flex_wrapper}>
                  <div
                    className={styles.left}
                    style={{
                      background: `url(/images/articles/${item.image})`,
                    }}
                  >
                    <div></div>
                  </div>

                  <div className={styles.right}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </CSSTransition>
          );
        });
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsLists;
