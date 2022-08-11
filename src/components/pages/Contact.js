import React from "react";

function multiFunctionHandler(e) {
  checkIfFilled(e)
  emailIsValid(e)
}

function checkIfFilled(e) {
  // console.log("fugg")
  const value = e.target.value;
  if (value == '') {
    window.alert('Please make sure to fill in all fields.')
  }
}

function emailIsValid(e) {
  const value = e.target.value
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    window.alert('Please enter a valid email address format.')
  }
}

export default function Contact() {
  return (
    <center>
      <div className="container">
        <h1>Contact Page</h1>
        <h2></h2>
        <form>
          <label>Your Name:</label>
          <div className="column">
            <input
              type="textarea"
              name="name"
              onMouseLeave={checkIfFilled}
            ></input>
          </div>
          <label>Your Email Address:</label>
          <div className="column">
            <input
              type="textarea"
              name="email"
              onMouseLeave={multiFunctionHandler}
            ></input>
          </div>
          <label>Message:</label>
          <div className="column">
            <textarea
              type="textarea"
              name="textarea"
              onMouseLeave={checkIfFilled}
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </center>
  );
}
