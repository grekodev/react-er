import React, { Component } from "react";

import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";
class BadgeNew extends Component {
  state = {
    form: {
      firstname: "",
      lastname: "",
      email: "",
      jobtitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstname}
                LastName={this.state.form.lastname}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobtitle}
                email={this.state.form.email}
                avatarUrl="https://avatars0.githubusercontent.com/u/7378218?s=460&u=8c40dffde12d532e160a0d8c5b604e80f17bc374&v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
