import React, { Component } from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";
import api from "../api";
export default class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1 constructor");
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    console.log("3 componentDidMount");
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("4 componentDidUpdate", { prevProps }, { prevState });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6 componentWillUnmount");
    clearTimeout(this.timeoutId);
    clearTimeout(this.intervalId);

  }

  render() {
    console.log("2/4 render");
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && "Loading"}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
