import React from "react";

class Achievement extends React.Component {
 
  render() {
    if (this.props.achievement === undefined) {
      return <div />;
    }

    return (
      <div className="achievement">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">ACHIEVEMENTS</h3>
          </div>
            <div class="card-body">
              <div class="card-text"></div>
        
        <ul>
          {this.props.achievement.map(record => {
            return <li>{record}</li>;
          })}
        </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Achievement;
