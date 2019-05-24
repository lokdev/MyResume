import React from "react";
import reactdom from "react-dom";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
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
            Created USAA net banking website which ask customer to answer the
            KYC details.
          </li>
          <li>
            REST API’s are used to retrieve and update the data in database.
          </li>
          <li>
            Handling ETL jobs all the extract, transformation and loading the
            data in more ways using IBM DataStage tool.
          </li>
          <li>
            The file which is loaded from the PeopleSoft/ETL system to the input
            folder. To Monitor specify file in the input folder created
            PowerShell script which will triggered from the Control – M
          </li>
          <li>Created various control – M jobs to automate the process.</li>
        </ul>
      </div>
    );
  }
}

export default Project;
