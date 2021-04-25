import {
  faMapMarker,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./BoxJob.css";

export default function BoxJob({
  id,
  category,
  company,
  created,
  location,
  redirect,
  salary_max,
  salary_min,
  title,
  description,
}) {
  return (
    <div className="job" key={id}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <h2>{title}</h2>
        <p style={{ marginTop: "25px" }}> {created}</p>
      </div>
      <p>
        company: <strong> {company}</strong>
      </p>
      <p>category: {category}</p>
      <p>
        <FontAwesomeIcon icon={faMoneyBillWave} /> {salary_min}-{salary_max}
      </p>
      <p>{description}</p>
      <p>
        <FontAwesomeIcon icon={faMapMarker} /> {location}
      </p>

      <a href={redirect}>
        <button>Show details </button>
      </a>
    </div>
  );
}
