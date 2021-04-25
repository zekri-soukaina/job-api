import React from "react";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const date = new Date();
  const currentTime =
    date.getHours() >= 8 &&
    date.getMinutes() >= 0 &&
    date.getHours() <= 16 &&
    date.getMinutes() <= 59;
  // 8 <= date.getHours() <= 16 && 0 <= date.getMinutes() <= 59;

  const check_time = currentTime ? "open" : "close";

  return (
    <div className="form">
      {" "}
      <h1>Welcome to Job For You</h1>
      <p>
        {" "}
        We are : <strong>{check_time}</strong>
      </p>
      <p>Our contact info</p>
      <p>
        <FontAwesomeIcon icon={faPhoneAlt} /> : 060 666 666
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> : job@for.you
      </p>
      <div className="div">
        <Button variant="light" size="lg" className="boxButton">
          <Link to="/signup">AM NEW HERE!</Link>
        </Button>
        <Button variant="light" size="lg" className="boxButton">
          <Link to="/available">JOBS AVAILABLE</Link>
        </Button>
      </div>
    </div>
  );
}
