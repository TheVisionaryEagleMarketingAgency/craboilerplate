import React from "react";
import Slick from "react-slick";
import styles from "./slider.css";
import { Link } from "react-router-dom";
//import blazers from "../../../../public/images/teams"

const SliderTemplate = (props) => {
  //console.log(props);
  //Create a template for sliders resusable and make a reference of that in the slick

  let template = null; //Initial value is null for template

  //Use switch and match a scenarios and render the template
  //configuration for slick
  //Pass this settings to slick slider using  ...settings (passing bunch of option) ...variable that has the settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings,
  };

  //access props loop the data and get three difference template

  //Switch args Receives the type of template that we want to render
  switch (props.type) {
    case "featured":
      //add the template from props.data
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            {/* {console.log(item)} */}
            <div className={styles.featured_item}>
              <div
                className={styles.featured_image}
                style={{
                  background: `url(./images/articles/${item.image})`,
                  //backgroundImage: `URL(./images/teams/${item.logo})`,
                }}
              ></div>

              <Link to={`/teams/${item.id}`}>
                <div className={styles.featured_caption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;

    //create other template
    //
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplate;
