import React from "react";
import TeamInfo from "../Elements/team_info";

const Header = (props) => {
  //console.log(props.teamData);
  const teamInfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  return <div>{teamInfo(props.teamData)}</div>;
};

export default Header;
