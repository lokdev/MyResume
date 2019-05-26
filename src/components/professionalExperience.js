import React from "react";

class ProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-5 rounded-pill">
        <div class="card-body bg-secondary text-center">
          <div className="professional-experience">
          <font color="#cc0000">
            <h2>PROFESSIONAL EXPERIENCE</h2></font>
            {this.props.company}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;
