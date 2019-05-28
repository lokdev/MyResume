import React from "react";
import logo from "./lokesh.jpeg";

export default class Profilepic extends React.Component {
  render() {
    return (
      <div className="profilepic text-center mt-5 mb-5">
        <img src={logo} alt="" class="rounded-circle" height={240} width={240} />
      </div>
    );
  }
}
