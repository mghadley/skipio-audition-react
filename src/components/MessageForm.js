import React, { Component } from 'react';
import axios from 'axios';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  sendMessage(e) {
    let recipient = `contact-${this.props.contactId}`
    axios.post(`https://stage.skipio.com/api/v2/messages?token=${process.env.REACT_APP_SKIPIO_TOKEN}`, {
      recipients: [recipient],
      message: { body: this.state.body }
    }).then( response => {
      this.props.toggleMessageForm();
    }).catch( response => {
      console.log(response)
      this.props.toggleMessageForm();
    })
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.sendMessage}>
          <div>
            <textarea value={this.state.body} name="body" onChange={this.handleInputChange} />
          </div>
          <button type="submit">Send</button>
          <button onClick={this.props.toggleMessageForm}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default MessageForm