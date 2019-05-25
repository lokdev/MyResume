import React from "react";
import ReactDom from "react-dom";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card">
  <div class="card-body">
      <div className="Address">
        <address>
          {this.props.address}
          <br />
          Mobile :{this.props.mobile}
          <span> E-Mail{this.props.email}</span>
        </address>
      </div>
      </div>
      </div>
    );
  }
}

export default Address;
