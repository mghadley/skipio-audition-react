import React, { Component } from 'react';
import Contact from './Contact'

class ContactsList extends Component {
  render() {
    return(
      this.props.contacts.map( contact => {
        return(
          <Contact contact={contact} />
        )
      })
    )
  }
}

export default ContactsList;