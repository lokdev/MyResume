import React from "react";
import ReactDom from "react-dom";

class RolesResponsibility extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.roles == undefined) {
      return <div />;
    }

    return (
      <div className="roles-responsibility">
        <h2>ROLES & RESPONSIBILITES</h2>
        <ul>
          {this.props.roles.map(rolesresp => {
            return <li>{rolesresp}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default RolesResponsibility;
