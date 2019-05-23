import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        <font color="#3399ff">LOKESH DHANASEKAR</font>
      </h1>
      <address>
        European Life Style Suites, Guadalajara, Jalisco, Mexico
        <br />
        MOBILE: +52 3326541444 E-MAIL: dlokesh@outlook.com
      </address>
      <hr />
      <h2>Summary</h2>
      <ul>
        <li>
          Four plus years of experience as full stack developer in application
          development using J2EE and IBM ETL DataStage, while implementation,
          testing and troubleshooting.
        </li>
        <li>
          Strong knowledge of technical specifications, workflow development and
          QA.
        </li>
        <li>
          Participated in analyzing business requirements and recommending
          appropriate technologies.
        </li>
        <li>
          Good experience in coordinating with various teams like Deployment,
          Testing Team to speed up Development process.
        </li>
        <li>
          Proficient in communication, interpersonal and organizational skills.
        </li>
      </ul>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <span>
        <b>HCL Technologies</b>
      </span>
      <br />
      Senior Software Engineer (February 2015 – Till Now)
      <h2>NATURE OF WORK</h2>
      <span>
        Developed JAVA application which process and monitor the activities
        performed in the process and load the file details in the database using
        various REST API’s.{" "}
      </span>
      <h2>ROLES & RESPONSIBILITES</h2>
      <span>
        Developed complex applications and updates throughout SDLC, including
        analyzing business requirements, developing technical specifications,
        planning, coding, testing implementation and QA.
      </span>
      <ul>
        <li>
          Participate in scoping meeting to identify requirement for new
          projects and reconfirm requirement with relevant stakeholders.
        </li>
        <li>
          Analyzing the Existing code and involved in modifying various classes
          and methods according to the new business needs.
        </li>
        <li>
          Created various REST API’s for GET and POST requests as per the
          Business requirements.
        </li>
        <li>
          Created Database Objects like tables, Views as per the Business
          requirements.
        </li>
        <li>
          Developed Dashboard using Ext JS which will retrieve the data from the
          database using REST API’s.
        </li>
        <li>
          Involved in writing technical design document, Test cases and
          performed unit testing
        </li>
        <li>
          Supported project leads & project managers in preparation of project
          review deliverables (like project ppt, audit documents, etc.).
        </li>
      </ul>
      <h2>PROJECT</h2>
      Title : AML - Customer Due Diligence
      <br />
      Technology Used : Java, IBM DataStage, REST API, SQL, PowerShell script
      <br />
      Framework : Ext JS, Wicket
      <br /> IDE : Eclipse & IBM DataStage
      <br /> Client : The United Services Automobile Association(USAA)
      <br /> Database : Oracle 11g, DB2 and ERDC
      <br /> Domain : AML and Bank
      <br /> Operating System : Windows 7 & UNIX
      <br /> Team Size : 3<br /> Role : Developer
      <br /> Description :
      <ul>
        <li>
          Created USAA net banking website which ask customer to answer the KYC
          details.
        </li>
        <li>
          REST API’s are used to retrieve and update the data in database.
        </li>
        <li>
          Handling ETL jobs all the extract, transformation and loading the data
          in more ways using IBM DataStage tool.
        </li>
        <li>
          The file which is loaded from the PeopleSoft/ETL system to the input
          folder. To Monitor specify file in the input folder created PowerShell
          script which will triggered from the Control – M
        </li>
        <li>Created various control – M jobs to automate the process.</li>
      </ul>
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
      <h2>AHIEVEMENTS</h2>
      <ul>
        <li>
          Proved event-organizing skills by taking responsibility in team
          events.
        </li>
        <li>Got many spot awards during the project development.</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
