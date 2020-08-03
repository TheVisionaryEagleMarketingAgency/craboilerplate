import React, { Component } from "react";
import { firebaseArticles, firebaseLooper } from "../../../firebase";
//import axios from "axios";
//import { URL } from "../../../config";
import SliderTemplate from "./slider_templates";

class NewsSlider extends Component {
  state = {
    news: [],
  };

  //Make a request to the local host json and get the article
  //Use life cylce method that run before render
  //Use axios method for getting the articles
  //catch the data of articles inside the promise

  componentWillMount() {
    //make a req firebase articles
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then((snapshot) => {
        const news = firebaseLooper(snapshot);
        this.setState({
          news,
        });
      });

    // axios
    //   .get(`${URL}/teams?_start=${this.props.start}&_end=${this.props.amount}`)
    //   .then((res) => {
    //     //console.log(res.data);
    //     this.setState({
    //       news: res.data,
    //     });
    //   });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <SliderTemplate
          data={this.state.news}
          type={this.props.type}
          settings={this.props.settings}
        />
      </div>
    );
  }
}

export default NewsSlider;
