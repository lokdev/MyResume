import React from "react";
import ReactDOM from "react-dom";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="summary">
        <h2>Summary</h2>
        <ul>
          {this.props.data.map(jaba => {
            return <li>{jaba}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Summary;
