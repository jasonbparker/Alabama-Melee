import React from "react";

import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

export default function Nav() {
  return (
    <div className="App">
      {/* <Home /> */}
      <header>
        <nav>
          <div className="navLeft">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>Staff</li>
              <li>Project M</li>
            </ul>
          </div>

          <div className="navCenter">
            <img src={require("./imgs/AL_Logo.png")} alt="AL Melee logo" />
          </div>
          <div className="navRight">
            <ul>
              <li>Regions</li>
              <li>
                <Link className="nav-link" to="/">
                  <span className="oi oi-dashboard" />
                  home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/regions/hsv">
                  <span className="oi oi-dashboard" />
                  hsv
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/regions/ttown">
                  <span className="oi oi-dashboard" />
                  ttown
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/regions/bham">
                  <span className="oi oi-dashboard" />
                  bham
                </Link>
              </li>
              <li>Archives</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
