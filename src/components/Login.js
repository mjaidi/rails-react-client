import React, { Component } from "react";
import { post } from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const request = { user: { email: email, password: password } };
    post("https://rails-react-login-api.herokuapp.com//login", request)
      .then(response => {
        console.log(response);
        localStorage.setItem(
          "jwt",
          response.headers.authorization.split(" ")[1]
        );
        this.props.history.push("/");
        this.props.rerenderParentCallback();
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
