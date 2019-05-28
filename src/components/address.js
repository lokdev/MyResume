import React from "react";

class Address extends React.Component {
 
  render() {
    return (
      <div class="card mb-5 rounded-pill">
        <div class="card-body bg-secondary text-center">
          <div className="Address">
            <h2 className="text-uppercase text-light">Contact</h2>
            <address>
              {this.props.address}
              <br />
              Mobile : {this.props.mobile}
              <br />
              <span> E-Mail : {this.props.email}</span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
