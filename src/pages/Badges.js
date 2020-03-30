import React, { Component } from "react";
import BadgesList from "../components/BadgesList";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";

export default class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1 constructor");
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: []
      }
    };
  }

  componentDidMount() {
    console.log("3 componentDidMount");
    this.fetchCharacter();
  }
  fetchCharacter = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(
            this.state.data.results,
            data.results
          )
        },
        nextPage: this.state.nextPage + 1
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
  }

  render() {
    console.log("2/4 render");

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
              <BadgesList onClick={this.fetchCharacter} badges={this.state.data} loading={this.state.loading} error={this.state.error}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
