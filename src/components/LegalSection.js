import React from "react";
import Section from "./Section";
import { Link } from "./../util/router";
import LegalTerms from "./LegalTerms";
import LegalPrivacy from "./LegalPrivacy";

function LegalSection(props) {
  const validSections = {
    "terms-of-service": true,
    "privacy-policy": true,
  };

  const section = validSections[props.section]
    ? props.section
    : "terms-of-service";

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="tabs is-toggle is-centered">
        <ul>
          <li
            className={
              "" + (section === "terms-of-service" ? " is-active" : "")
            }
          >
            <Link to="/legal/terms-of-service">Terms of Service</Link>
          </li>
          <li
            className={"" + (section === "privacy-policy" ? " is-active" : "")}
          >
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="container mt-5">
        {section === "terms-of-service" && <LegalTerms />}

        {section === "privacy-policy" && <LegalPrivacy />}
      </div>
    </Section>
  );
}

export default LegalSection;
