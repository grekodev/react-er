import React, { Component } from "react";

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";

import "./styles/BadgeNew.css";
class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
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
  handlesubmit = async e => {
    e.preventDefault();
    this.setState({
      loadind: true,
      error: null
    });
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loadind: false
      });
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loadind: false,
        error: error
      });
    }
  };
  render() {
    if(this.state.loadind){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                LastName={this.state.form.lastName || "LAST_EMA"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
            <h1>New Asistente</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handlesubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
