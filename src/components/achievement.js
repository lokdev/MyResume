import React from "react";
import ReactDom from "react-dom";

class Achievement extends React.Component {
  render() {
    return (
      <div className="achievement">
        <h2>ACHIEVEMENTS</h2>
        <ul>
          <li>
            Proved event-organizing skills by taking responsibility in team
            events.
          </li>
          <li>Got many spot awards during the project development.</li>
        </ul>
      </div>
    );
  }
}

export default Achievement;
