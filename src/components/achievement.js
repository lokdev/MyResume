import React from "react";
import ReactDom from "react-dom";

class Achievement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="achievement">
        <h2>ACHIEVEMENTS</h2>
        <ul>
          {this.props.achievement.map(record => {
            return <li>{record}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Achievement;
