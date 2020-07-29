import React from "react";
import TeamInfo from "../../Elements/team_info";
import PostData from "../../Elements/post_data";

const Header = (props) => {
  const teamInfo = (team) => {
    //This team is an array of objects
    //pass in the the info for what you get in the team
    //we are doing this to render team component inside the header
    return team ? <TeamInfo team={team} /> : null;
  };

  const postData = (date, author) => {
    //pass an object with date and author
    return <PostData data={{ date, author }} />;
  };

  return (
    <div>
      {teamInfo(props.teamData)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default Header;
