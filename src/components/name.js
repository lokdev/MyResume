import React from "react";
import ReactDom from "react-dom";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Name">
        <h1>
          <font color="#3399ff">
          <span class="badge badge-pill badge-primary">{this.props.firstname} {this.props.lastname}</span>
          </font>
        </h1>
      </div>
    );
  }
}

export default Name;
