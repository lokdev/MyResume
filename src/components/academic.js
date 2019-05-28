import React from "react";

class Academic extends React.Component {

  render() {
    if (this.props.academic === undefined) {
      return <div />;
    }

    return (
      <div className="academic">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">ACADEMIC RECORD</h3>
          </div>
            <div class="card-body">
              <div class="card-text"></div>
               <table border="3">
          <tr>
            <td>Course</td>
            <td>Institution</td>
            <td>Month & Year</td>
            <td>GPA</td>
          </tr>
          {this.props.academic.map(academic => {
            return (
              <tr>
                <td>{academic.course}</td>
                <td>{academic.institution}</td>
                <td>{academic.month_Year}</td>
                <td>{academic.gPA}</td>
              </tr>
            );
          })}
        </table>
        </div>
        </div>
      </div>
    );
  }
}

export default Academic;
