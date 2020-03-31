import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import NotFount from "../pages/NotFount";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFount} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
