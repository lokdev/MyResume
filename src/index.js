import React from "react";
import ReactDOM from "react-dom";
import Summary from "./components/summary";
import ProfessionalExperience from "./components/professionalExperience";
import RolesResponsibility from "./components/roles-responsibility";
import NatureOfWork from "./components/natureofwork";
import Project from "./components/project";
import Academic from "./components/academic";
import Achievement from "./components/achievement";
import Name from "./components/name";
import Address from "./components/address";
import Profilepic from "./components/profilepic";
import Social from "./components/social";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "font-awesome/css/font-awesome.css";
import axios from "axios";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {}
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://raw.githubusercontent.com/lokdev/my-resume-content/master/resume.json`
      )
      .then(res => {
        const resume = res.data;
        this.setState({ resume });
      });
  }

  render() {
    if (this.state.resume === undefined) {
      return <div className="container" />;
    }

    return (
      <div className="container">
        <div className="App">
          <div class="row">
            <div class="col-sm-4 bg-secondary text-white">
              <Profilepic />
              <Address
                address={this.state.resume.address}
                mobile={this.state.resume.mobile}
                email={this.state.resume.email}
              />

              <NatureOfWork natureofwork={this.state.resume.natureofwork} />
              <ProfessionalExperience
                company={this.state.resume.professionalexperience}
              />
            </div>
            <div class="col-sm-8 bg-white">
              <div className="right-panel">
                <Name
                  firstname={this.state.resume.firstname}
                  lastname={this.state.resume.lastname}
                />

                <Summary data={this.state.resume.summary} />

                <RolesResponsibility
                  roles={this.state.resume.rolesresponsibilities}
                />
                <Project
                  project={this.state.resume.project}
                  projectdesc={this.state.resume.projectdesc}
                  project1={this.state.resume.project1}
                  projectdesc1={this.state.resume.projectdesc1}
                />
                <Academic academic={this.state.resume.academic} />
                <Achievement achievement={this.state.resume.achievement} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <Social />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
