import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleStackable extends Component {
  state = {
    activeItem: "lolnothing"
  };

  // handleActive = (e, { name }) => e.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable={true}>
        <Menu.Item
          as={Link}
          active={activeItem === "News"}
          onClick={this.handleActive}
          link={true}
          to="/"
        >
          <h1> logo</h1>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/news"
          name="News"
          active={activeItem === "News"}
          onClick={this.handleItemClick}
        >
          News
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/pricing"
          name="Pricing"
          active={activeItem === "Pricing"}
          onClick={this.handleItemClick}
        >
          Pricing
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"
            name="sign-in"
            active={activeItem === "Login"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            as={Link}
            name="staff"
            active={activeItem === "staff"}
            onClick={this.handleItemClick}
            link={true}
            to="/staff"
          >
            Staff
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
