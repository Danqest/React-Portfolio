import React from "react";

export default function Resume() {
  return (
    <div className="text-center">
      <h1>Resume Page</h1>
      <a
        href="./assets/documents/resume-cbrooks.pdf"
        download="resume-cbrooks"
        target="_blank"
      >
        Download My Resume
      </a>

      <h3 className="mt-3">Front-End Projects:</h3>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>jQuery</p>
      <p>Responsive Design </p>
      <p>React</p>
      <p>Bootstrap</p>
      <p>HTML</p>

      <h3 className="mt-3">Back-End Projects:</h3>
      <p>APIs</p>
      <p>NodeJS</p>
      <p>ExpressJS</p>
      <p>MySQL, Sequelize</p>
      <p>MongoDB, Mongoose</p>
      <p>REST</p>
      <p>GraphQL</p>
    </div>
  );
}
