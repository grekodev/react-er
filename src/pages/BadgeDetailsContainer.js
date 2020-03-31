import React, { Component } from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";
import BadgeDetails from "./BadgeDetails";
export default class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}
