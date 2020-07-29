import React from "react";
import TeamInfo from "../Elements/team_info";

const Header = (props) => {
  const teamInfo = (team) => {
    //This team is an array of objects
    //pass in the the info for what you get in the team
    //we are doing this to render team component inside the header
    return team ? <TeamInfo team={team} /> : null;
  };

  return <div>{teamInfo(props.teamData)}</div>;
};

export default Header;
