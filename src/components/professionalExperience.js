import React from "react";

class ProfessionalExperience extends React.Component {
  render() {
    return (
      <div class="card mb-5 rounded-pill">
        <div class="card-body bg-secondary text-center">
          <div className="professional-experience text-light">
            <h2>PROFESSIONAL EXPERIENCE</h2>
            {this.props.company} <br />
            <br />
            {this.props.company1} <br />
            <br />
            {this.props.company2}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;