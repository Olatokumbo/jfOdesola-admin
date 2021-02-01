import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Redirect to="/home" />
        </div>
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.auth,
  };
};

export default connect(mapStateToProps)(PublicRoute);
