import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.project == undefined) {
      return <div />;
    }

    return (
      <div className="project">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">PROJECT</h3>
          </div>
            <div class="card-body">
              <div class="card-text"></div>
        {this.props.project.map(project => {
          return <p>{project}</p>;
        })}
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">Description</h3>
          </div>
        <ul>
          {this.props.projectdesc.map(projectdesc => {
            return <li>{projectdesc}</li>;
          })}
        </ul>
        </div>
        </div>
        </div>
        </div>
        
    );
  }
}

export default Project;
