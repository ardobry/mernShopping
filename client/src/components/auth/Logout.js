import React, { Component } from "react";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <NavLink onclick={this.props.logout} href="#">
          Logout
        </NavLink>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
