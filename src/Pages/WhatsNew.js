import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function WhatsNew() {
  return (
    <div style={{ marginTop: "20%", marginLeft: "40%" }}>
      <h1>
        {" "}
        <FontAwesomeIcon icon={faCogs} />
      </h1>
      <p>coming soon!</p>
    </div>
  );
}
