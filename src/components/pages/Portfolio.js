import React from "react";
import testChart from "../../assets/images/testchart.png";
import noteTaker from "../../assets/images/notes-page.png";
import weatherDashboard from "../../assets/images/weather-dashboard.png";
import passwordGenerator from "../../assets/images/password-generator.png";
import screenshotTeam from "../../assets/images/screenshot-team.png";
import stockAlertTracker from "../../assets/images/stock-alert-tracker.png";

export default function Portfolio() {
  return (
    <center>
      <h1>Portfolio Page</h1>
      <div className="container">
        <div className="row">
          <div className="row" style={{ "margin-top": "20px" }}>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Crypto Sentiment</h2>
                <img
                  src={testChart}
                  className="card-img-top"
                  alt="screenshot of bitcoin price & sentiment"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/07-Crypto-Sentiment-Index"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://danqest.github.io/07-Crypto-Sentiment-Index/"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Note Taker</h2>
                <img
                  src={noteTaker}
                  className="card-img-top"
                  alt="screenshot of bitcoin price & sentiment"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/11-Note-Taker"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://powerful-reef-56612.herokuapp.com/"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ "margin-top": "20px" }}>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Weather Dashboard</h2>
                <img
                  src={weatherDashboard}
                  className="card-img-top"
                  alt="screenshot of the weather dashboard application"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/06-Server-Side-APIs-Weather-Dashboard"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://danqest.github.io/06-Server-Side-APIs-Weather-Dashboard/"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Password Generator</h2>
                <img
                  src={passwordGenerator}
                  className="card-img-top"
                  alt="screenshot of the password generator application"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/03-Javascript-Password-Generator"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://danqest.github.io/03-Javascript-Password-Generator/"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ "margin-top": "20px" }}>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Team Profile Generator</h2>
                <img
                  src={screenshotTeam}
                  className="card-img-top"
                  alt="screenshot of the team builder application"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/10-OOP-Team-Profile-Generator"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1PCgl4r6LFv064hIkwemHQJGAZWmripmO/view"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Walkthru Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <h2 className="card-text">Stock Alert Tracker</h2>
                <img
                  src={stockAlertTracker}
                  className="card-img-top"
                  alt="screenshot of the stock alert tracker application"
                />
                <div className="card-body">
                  <a
                    href="https://github.com/Danqest/15-Project2-Stock-Alert-Tracker"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Github Repo
                  </a>
                  <a
                    href="https://lit-waters-98495.herokuapp.com/"
                    target="_blank"
                    className="btn btn-primary m-1"
                  >
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
