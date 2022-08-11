import React from "react";
import bateman from "../../assets/images/bateman-img.jpg";

export default function About() {
  return (
    <div className="container" style={{ "margin-top": "15px" }}>
      <div className="card mb-3 bg-secondary" style={{ "max-width": "1200px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={bateman}
              className="img-fluid rounded-start"
              alt="avatar photo of Patrick Bateman smiling"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">About Me</h1>
              <p className="card-text">
                My name is Colin Brooks. I am a self-taught Python programmer
                with an academic background in finance & investing. I have
                worked in commercial banking as a credit analyst and underwriter
                for the past four years and have a great interest in the
                investment industry. In the pursuit of career development, I
                have been looking to break into the tech industry which has
                spurred my enrollment into the Georgia Tech Coding Bootcamp in
                order to learn full-stack development.
              </p>
              <p className="card-text">
                Over the past couple of years I have been teaching myself about
                artificial intelligence with deep learning & neural networks.
                Lately my personal side-projects have included the exploration
                of unsupervised learning for the purposes of stock trading using
                a customizes OpenAI Gym environment. I also am a co-founder and
                owner of a cryptocurrency mining company located in Melbourne,
                FL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
