import React, { Component } from 'react';
import MessageForm from './MessageForm'
import '../contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { messaging: false }
    this.toggleMessageForm = this.toggleMessageForm.bind(this)
  }

  toggleMessageForm() {
    let messaging = !this.state.messaging
    this.setState({ messaging })
  }

  showMessageForm() {
    if(this.state.messaging){
      return(
        <MessageForm toggleMessageForm={this.toggleMessageForm} contactId={this.props.contact.id}/>
      )
    } else {
      return(
        <button onClick={this.toggleMessageForm}>Send Message</button>
      )
    }
  }

  render() {
    let contact = this.props.contact
    return(
      <div class="card">
        <h3>{contact.full_name}</h3>
        <ul>
          <li>Mobile: {contact.phone_mobile}</li>
          <li>Can recieve texts: {contact.is_sms_enabled.toString()}</li>
        </ul>
        {this.showMessageForm()}
      </div>
    )
  }
}

export default Contact;