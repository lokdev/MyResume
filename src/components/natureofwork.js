import React from "react";
import ReactDom from "react-dom";

class NatureOfWork extends React.Component {
  constructor (props){
    super(props);
  }
  render() {
    return (
      <div className="natureOfWork">
        <h2>NATURE OF WORK</h2>
       {this.props.natureofwork}
      </div>
    );
  }
}

export default NatureOfWork;
