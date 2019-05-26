import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Name text-center">
        <h1 className="display-4">
          <font color="#3399ff">
            <span class="badge badge-pill badge-primary profile-name">
              {this.props.firstname} {this.props.lastname}
            </span>
          </font>
        </h1>
      </div>
    );
  }
}

export default Name;