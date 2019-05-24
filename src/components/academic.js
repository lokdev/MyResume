import React from "react";
import ReactDom from "react-dom";

class Academic extends React.Component {
  constructor (props)
  {
    super(props);
  }
  render() {
    return (
      <div className="academic">
        <h2>ACADEMIC RECORD</h2>
        <table border="3">
          <tr>
            <td>Course</td>
            <td>Institution</td>
            <td>Month & Year</td>
            <td>GPA</td>
          </tr>
        {this.props.academic.map(academic => {
          return <tr>
            <td>{academic.course}</td>
            <td>{academic.institution}</td>
            <td>{academic.month_Year}</td>
            <td>{academic.gPA}</td>
          </tr>
        })}
       
        </table>
      </div>
    );
  }
}

export default Academic;
