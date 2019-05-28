import React from "react";

class RolesResponsibility extends React.Component {

  render() {
    if (this.props.roles === undefined) {
      return <div />;
    }

    return (
      <div className="roles-responsibility">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">ROLES & RESPONSIBILITES</h3>
          </div>
            <div class="card-body">
              <div class="card-text">
             <ul>
          {this.props.roles.map(rolesresp => {
            return <li>{rolesresp}</li>;
          })}
        </ul>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default RolesResponsibility;
