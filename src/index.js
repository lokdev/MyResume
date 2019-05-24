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

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      resume: {
        firstname: "Lokesh",
        lastname: "Dhanasekar",
        address: [
          "Av Guadalupe 4885, Jardines de Guadalupe",
          "45030 Guadalajara, Jal., Mex"
        ],
        mobile: "+52 3326541444",
        email: "dlokesh@outlook.com",
        summary: [
          "Four plus years of experience as full stack developer in application development using J2EE and IBM ETL DataStage, while implementation, testing and troubleshooting.",
          "Strong knowledge of technical specifications, workflow development and QA.",
          "Participated in analyzing business requirements and recommending appropriate technologies.",
          "Good experience in coordinating with various teams like Deployment, Testing Team to speed up Development process.",
          "Proficient in communication, interpersonal and organizational skills."
        ],
        professionalexperience:
          "Proficient in communication, interpersonal and organizational skills."
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Name
          firstname={this.state.resume.firstname}
          lastname={this.state.resume.lastname}
        />
        <Address
          address={this.state.resume.address}
          mobile={this.state.resume.mobile}
          email={this.state.resume.email}
        />
        <Summary data={this.state.resume.summary} />
        <ProfessionalExperience />
        <NatureOfWork />
        <RolesResponsibility />
        <Project />
        <Academic />
        <Achievement />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
