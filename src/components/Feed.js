import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import store from "../store";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };

    store.subscribe(() => {
      const { contacts } = store.getState();
      this.setState({ contacts: contacts.items });
    });
  }

  render() {
    const { contacts } = this.state;

    var contactCards = <em>No items found.</em>;

    if (contacts.length) {
      contactCards = contacts.map(contact => (
        <Card key={contact._id}>
          <Card.Content>
            <Image floated="right" size="mini" src={contact.image} />
            <Card.Header>{contact.name}</Card.Header>
            <Card.Meta>
              {contact.role} @ {contact.company}
            </Card.Meta>
          </Card.Content>
        </Card>
      ));
    }

    return <Card.Group>{contactCards}</Card.Group>;
  }
}

export default Feed;
