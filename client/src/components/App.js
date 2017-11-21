import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import GarageSaleForm from "./GarageSaleForm";
import GarageSaleDetail from "./GarageSaleDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Switch component is used to prevent multiple routes from being 
        rendered at any given time */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <DefaultLayout exact path="/garagesales" component={Dashboard} />
          <DefaultLayout
            exact
            path="/garagesales/new"
            component={GarageSaleForm}
          />
          <DefaultLayout
            exact
            path="/garagesales/:id"
            component={GarageSaleDetail}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

//Default Layout to be used with routes that makes use of the header component
const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <Header />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default App;
