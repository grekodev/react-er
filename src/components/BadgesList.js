import React, { Component } from "react";
import'./styles/BadgesList.css'
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

export default class BadgesList extends Component {
  render() {
     if(this.props.badges.length === 0){
        return (
           <div>
              <h3>No encontramos badges</h3>
              <Link className="btn btn-primary" to="/badges/new">
                 Create new badge
              </Link>
           </div>
        )
     }
    return (
        <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge)=>{
           return(
              <li key={badge.id} className="BadgesListItem">
                 <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar"/>
                  <div>
                     <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                     <div className="Twitter__name">
                        <span className="Twitter__logo"></span>@{badge.twitter}
                     </div>
                     <div>{badge.jobTitle}</div>
                  </div>
                 </Link>
              </li>
           )
        })}
     </ul>
    );
  }
}
