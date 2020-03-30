import React, { Component } from "react";
import "./styles/BadgesList.css";

export default class BadgesList extends Component {
  render() {
   if (this.props.error){
      return `Error ${this.props.error}`
   }    
    return (
      <div>
        <ul className="list-unstyled BadgesList">
          {this.props.badges.results.map(badge => {
            console.log(badge);
            return (
              <li key={badge.id} className="BadgesListItem">
                <img
                  src={badge.image}
                  alt=""
                  className="BadgesListItem__avatar"
                />
                <div>
                  <div>
                    <strong>
                      {badge.name} {badge.status}
                    </strong>
                  </div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.gender}
                  </div>
                  <div>{badge.gender}</div>
                </div>
              </li>
            );
          })}
        </ul>
        {this.props.loading && (
           <div className="loader">
              loading
           </div>
        )}
        {!this.props.loading && (
           <button onClick={() => this.props.onClick()}>Load more</button>
        )}
      </div>
    );
  }
}
