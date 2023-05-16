import React from "react";
import { Link } from "./../util/router";

function SettingsNav(props) {
  return (
    <div className="tabs is-toggle is-centered">
      <ul>
        <li
          className={"" + (props.activeKey === "general" ? " is-active" : "")}
        >
          <Link to="/settings/general">General</Link>
        </li>
        <li
          className={"" + (props.activeKey === "password" ? " is-active" : "")}
        >
          <Link to="/settings/password">Password</Link>
        </li>
        <li
          className={"" + (props.activeKey === "billing" ? " is-active" : "")}
        >
          <Link to="/settings/billing">Billing</Link>
        </li>
      </ul>
    </div>
  );
}

export default SettingsNav;
