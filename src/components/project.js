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
        <h2>PROJECT</h2>
        {this.props.project.map(project => {
          return <p>{project}</p>;
        })}
        <ul>
          {this.props.projectdesc.map(projectdesc => {
            return <li>{projectdesc}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Project;
