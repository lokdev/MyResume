import React from "react";
import ReactDom from "react-dom";

class Academic extends React.Component {
  render() {
    return (
      <div className="academic">
        <h2>ACADEMIC RECORD</h2>
        <table border="3">
          <tr>
            <th>Course</th>
            <th>Institution</th>
            <th>Month & Year</th>
            <th>GPA</th>
          </tr>

          <tr>
            <th>Master of Computer Applications</th>
            <th>College of Engineering Guindy, Anna University</th>
            <th>May 2014</th>
            <th>7.56</th>
          </tr>
          <tr>
            <th>Bachelor of Computer Applications</th>
            <th>Annai Veilankannis Arts & Scince College</th>
            <th>May 2011</th>
            <th>70.84</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Academic;
