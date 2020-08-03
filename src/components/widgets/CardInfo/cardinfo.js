import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./cardInfo.css";
import moment from "moment";

const CardInfo = (props) => {
  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.teamId === team;
    });

    if (data) {
      return data.name;
    }
  };

  const formateDate = (date) => {
    return moment(date).format("MM-DD-YYYY");
  };
  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={styles.date}>
        {/* {props.date} */}
        {formateDate(props.date)}
      </span>

      <FontAwesome name="clock-o"></FontAwesome>
    </div>
  );
};

export default CardInfo;
