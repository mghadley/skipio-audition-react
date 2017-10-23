import React, { Component } from 'react';
import ContactsList from './ContactsList'
import axios from 'axios';

class ContactsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] }
  }

  componentWillMount() {
    let self = this;
    axios.get(`https://stage.skipio.com/api/v2/contacts?token=${process.env.REACT_APP_SKIPIO_TOKEN}&per=100`)
    .then( response => {
      self.setState({ contacts: response.data.data })
    })
  }

  render() {
    return(
      <ContactsList contacts={this.state.contacts} />
    )
  }
}

export default ContactsListContainer;