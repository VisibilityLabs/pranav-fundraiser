import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </li>
        <li>How it works</li>
        <li>
          Start a Fundraiser <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li className="navbar-logo">LOGO</li>
        <li>Sign in</li>
        <li className="navbar-button">Share</li>
        <li className="navbar-button">Donate</li>
      </ul>
    </nav>
  );
}

export default Navbar;