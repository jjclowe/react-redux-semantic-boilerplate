import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Menu, Input, Sticky } from "semantic-ui-react";
import { fetchContacts } from "../actions/contactActions";
import "./App.css";
import Feed from "./Feed";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "feed",
      typingTimeout: null,
      searchQuery: ""
    };
  }

  componentDidMount() {
    this.searchInput.focus();
    this.props.fetchContacts();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleSearchChange = (e, data) => {
    clearTimeout(this.state.typingTimeout);

    this.state.typingTimeout = setTimeout(() => {
      this.setState({ searchQuery: data.value });
    }, 250);
  };

  Menu = () => {
    const { activeItem } = this.state;

    return (
      <Menu stackable fixed="top" borderless>
        <Container>
          <Menu.Item name="feed" active={activeItem === "feed"} onClick={this.handleItemClick}>
            <img src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item name="item1" active={activeItem === "item1"} onClick={this.handleItemClick}>
            Item 1
          </Menu.Item>
          <Menu.Item name="item2" active={activeItem === "item2"} onClick={this.handleItemClick}>
            Item 2
          </Menu.Item>
          <Menu.Item name="item3" active={activeItem === "item3"} onClick={this.handleItemClick}>
            Item 3
          </Menu.Item>
        </Container>
      </Menu>
    );
  };

  Search = () => {
    return (
      <Input
        fluid
        ref={input => {
          this.searchInput = input;
        }}
        placeholder="Search"
        icon="search"
        onChange={this.handleSearchChange}
        autoComplete="off"
        type="text"
        size="big"
      />
    );
  };

  render() {
    return (
      <div className="App">
        <this.Menu />
        <Container style={{ paddingTop: "7em" }}>
          <Grid stackable>
            <Grid.Column width={5}>
              <this.Search />
            </Grid.Column>
            <Grid.Column width={9}>
              <Feed />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchContacts };

export default connect(
  null,
  mapDispatchToProps
)(App);
