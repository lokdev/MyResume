import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data == undefined) {
      return <div />;
    }
    return (
      <div className="summary">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> <h3 class="card-title text-uppercase">Summary</h3></div>
            <div class="card-body">
              <div class="card-text">
              <ul>
                {this.props.data.map(sumarydata => {
                return <li>{sumarydata}</li>;
                })}
               </ul>
               </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Summary;
