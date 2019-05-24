import React from "react";

class Project extends React.Component {
  constructor (props)
  {
    super(props);
  }
  render() {
    return (
      <div className="project">
        <h2>PROJECT</h2>
        {
          this.props.project.map(project =>{
            return <p>{project}</p>;
          })
        }
            <ul>
              {
              this.props.projectdesc.map(projectdesc =>{
                return <li>{projectdesc}</li>;
              })
            }
              </ul>
          
        
      </div>
    );
  }
}

export default Project;
