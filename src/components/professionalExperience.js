import React from "react";
import ReactDom from "react-dom";

class ProfessionalExperience extends React.Component {
  constructor(props){
    super(props);
        }
  render() {
   
    
    return (
      <div className="professional-experience">
        <h2>PROFESSIONAL EXPERIENCE</h2>
     {this.props.company}        
      </div>
    );
  }
}

export default ProfessionalExperience;
