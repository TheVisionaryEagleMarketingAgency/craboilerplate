import React, { Component } from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./newslist.css";

import { URL } from "../../../config";

class NewsLists extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then((res) => {
      //console.log(res);
      this.setState({
        items: [...this.state.items, ...res.data],
      });
    });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  renderNews = (type) => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => {
          return (
            <div key={i} className={styles.newlist_item}>
              <Link to={`/articles/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
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
        {this.renderNews(this.props.type)}
        <div onClick={() => this.loadMore()}>LoadMore</div>
      </div>
    );
  }
}

export default NewsLists;