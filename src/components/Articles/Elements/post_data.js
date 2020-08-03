import React from "react";
import styles from "../../Articles/articles.css";
import moment from "moment";

const PostData = (props) => {
  const formateDate = (date) => {
    return moment(date).format("MM-DD-YYYY");
  };
  return (
    <div className={styles.articlePosts}>
      <div>
        Date:
        <span>{formateDate(props.data.date)}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
