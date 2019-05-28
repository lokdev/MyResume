import React from "react";

class Project extends React.Component {

  render() {
    if (this.props.project === undefined) {
      return <div />;
    }

    return (
      <div className="project">
        <div class="card bg-light mb-3">
          <div class="card-header text-center">
            <h3 class="card-title text-uppercase">PROJECT EXPERIENCE</h3>
          </div>
          <br />
          <div class="card-body">
            <div class="card bg-light mb-3 card border-info">
              <div class="card-header text-center bg-info">
                <h3 class="card-title text-uppercase">Anti Money Laundering</h3>
              </div>
              <div class="card-body">
                <div class="card-text" />
                {this.props.project.map(project => {
                  return <p>{project}</p>;
                })}
                <div class="card bg-light mb-3">
                  <div class="card-header text-center">
                    <h3 class="card-title text-uppercase">Description</h3>
                  </div>
                  <br />
                  <ul>
                    {this.props.projectdesc.map(projectdesc => {
                      return <li>{projectdesc}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <br />

            <div class="card bg-light card border-info mb-3">
              <div class="card-header text-center bg-info">
                <h3 class="card-title text-uppercase bg-info">
                  Startegic Tax Solution
                </h3>
              </div>
              <div class="card-body">
                <div class="card-text" />
                {this.props.project1.map(project1 => {
                  return <p>{project1}</p>;
                })}
                <div class="card bg-light mb-3">
                  <div class="card-header text-center">
                    <h3 class="card-title text-uppercase">Description</h3>
                  </div>
                  <br />
                  <ul>
                    {this.props.projectdesc1.map(projectdesc1 => {
                      return <li>{projectdesc1}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
