import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data == undefined) {
      return <div />;
    }
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
