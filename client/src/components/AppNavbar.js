import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!isAuthenticated ? (
                <Fragment>
                  <NavItem>
                    <RegisterModal />
                  </NavItem>
                  <NavItem>
                    <LoginModal />
                  </NavItem>
                </Fragment>
              ) : (
                <Fragment>
                  <NavItem>
                    <span className="navbar-text mr-3">
                      <strong>{user ? `Welcome ${user.user.name}` : ""}</strong>
                    </span>
                  </NavItem>
                  <NavItem>
                    <Logout />
                  </NavItem>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AppNavbar);
