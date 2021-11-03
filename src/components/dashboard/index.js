import React from "react";
import { Player } from "../../containers/player";

export const Dashboard = ({ children }) => {
  return (
    <div>
      {children}
      <div>
        <Player />
      </div>
    </div>
  );
};
