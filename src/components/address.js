import React from "react";
import ReactDom from "react-dom";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Address">
        <address>
          {this.props.address}
          <br />
          Mobile :{this.props.mobile}
          <span> E-Mail{this.props.email}</span>
        </address>
        <hr />
      </div>
    );
  }
}

export default Address;
