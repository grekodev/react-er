import React, { Component } from "react";

export default class BadgeForm extends Component {
  state = {};

//   handleChange = e => {
//     this.setState({
//         [e.target.name]: e.target.value
//     });
//   };

  handleClick = e => {
    console.log("button was clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Wachin</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstname"
              value={this.props.formValues.firstname}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastname"
              value={this.props.formValues.lastname}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>JobTitle</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobtitle"
              value={this.props.formValues.jobtitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            save
          </button>
        </form>
      </div>
    );
  }
}
