import React from "react";

class NatureOfWork extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-5 rounded-pill text-center">
        <div class="card-body bg-secondary">
          <div className="natureOfWork">
          <font color="#cc0000">
            <h2>NATURE OF WORK</h2></font>
            {this.props.natureofwork}
          </div>
        </div>
      </div>
    );
  }
}

export default NatureOfWork;
