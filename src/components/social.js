import React from "react";

export default class Social extends React.Component {
  render() {
    return (
      <div className="socialbutton">
        <a href="https://www.linkedin.com/in/lokdev/">
          <i
            class="fab fa-linkedin mr-2 fa-3x "
            data-toggle="tooltip"
            data-placement="top"
            title="Linkedin"
          />
        </a>
        <a href="https://www.facebook.com/lokdev">
          <i
            class="fab fa-facebook fa-3x"
            data-toggle="tooltip"
            data-placement="top"
            title="Facebook"
          />
        </a>
        <a href="https://twitter.com/lokdev">
          <i
            class="fab fa-twitter ml-2 fa-3x"
            data-toggle="tooltip"
            data-placement="top"
            title="Twitter"
          />
        </a>
        <a href="mailto:dlokesh@outlook.com">
          <i
            class="fas fa-envelope  fa-3x ml-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Mail to Lokesh"
          />
        </a>
        <a href="Lokesh_Resume.pdf" download>
          <i
            class="fas fa-download fa-3x ml-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Download My Resume"
          />
        </a>
      </div>
    );
  }
}
