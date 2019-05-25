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

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {
        firstname: "LOKESH",
        lastname: "DHANASEKAR",
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
        professionalexperience: [
          "HCL Technologies - Software Engineer (February 2015 – Till Now)"
        ],
        natureofwork:
          "Developed JAVA application which process and monitor the activities performed in the process and load the file details in the database using various REST API’s.",
        rolesresponsibilities: [
          "Developed complex applications and updates throughout SDLC, including analyzing business requirements, developing technical specifications, planning, coding, testing implementation and QA.",
          "Participate in scoping meeting to identify requirement for new projects and reconfirm requirement with relevant stakeholders.",
          "Analyzing the Existing code and involved in modifying various classes and methods according to the new business needs.",
          "Created various REST API’s for GET and POST requests as per the Business requirements.",
          "Created Database Objects like tables, Views as per the Business requirements.",
          "Developed Dashboard using Ext JS which will retrieve the data from the database using REST API’s.",
          "Involved in writing technical design document, Test cases and performed unit testing.",
          "Supported project leads & project managers in preparation of project review deliverables (like project ppt, audit documents, etc.)."
        ],
        project: [
          "Title : AML - Customer Due Diligence",
          "Technology Used : Java, IBM DataStage, REST API, SQL, PowerShell script",
          "Framework : Ext JS, Wicket",
          "IDE : Eclipse & IBM DataStage",
          "Client : The United Services Automobile Association(USAA)",
          "Database : Oracle 11g, DB2 and ERDC",
          "Domain : AML and Bank",
          "Operating System : Windows 7 & UNIX",
          "Team Size : 3",
          "Role : Developer",
          "Description :"
        ],
        projectdesc: [
          "Created USAA net banking website which ask customer to answer the KYC details.",
          "REST API’s are used to retrieve and update the data in database.",
          "Handling ETL jobs all the extract, transformation and loading the data in more ways using IBM DataStage tool.",
          "The file which is loaded from the PeopleSoft/ETL system to the input folder. To Monitor specify file in the input folder created PowerShell script which will triggered from the Control – M",
          "Created various control – M jobs to automate the process."
        ],
        academic: [
          {
            course: "Master of Computer Applications",
            institution: "College of Engineering Guindy, Anna University",
            month_Year: "May 2014",
            gPA: "7.56"
          },
          {
            course: "Bachelor of Computer Applications",
            institution: "Annai Veilankannis Arts & Science College",
            month_Year: "May 2011",
            gPA: "7.39"
          }
        ],
        achievement: [
          "Proved event-organizing skills by taking responsibility in team events.",
          "Got many spot awards during the project development."
        ]
      }
    };
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="left-panel">Left Panel</div>
          <div className="right-panel">
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
            <ProfessionalExperience
              company={this.state.resume.professionalexperience}
            />
            <NatureOfWork natureofwork={this.state.resume.natureofwork} />
            <RolesResponsibility
              roles={this.state.resume.rolesresponsibilities}
            />
            <Project
              project={this.state.resume.project}
              projectdesc={this.state.resume.projectdesc}
            />
            <Academic academic={this.state.resume.academic} />
            <Achievement achievement={this.state.resume.achievement} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
