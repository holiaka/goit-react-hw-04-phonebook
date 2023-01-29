import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const pastContacts = JSON.parse(localStorage.getItem("contacts"));
    if (pastContacts===null) {
      return;
    }
    this.setState({contacts: pastContacts});
  }
  
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }

  visibleContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };  

  handleSubmit = (evt) => {    
    const {contacts} = this.state;
    const filterName = contacts.find(contact => contact.name === evt.name);
    
    if (filterName) {
      alert("You have already added this person's data to Contact list!!!");
      return;
    }

    this.setState({ contacts: [...contacts, { id: nanoid(), name: evt.name, number: evt.number }] });
  };

  findContacts = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  deleteContact = evt => {
    const {contacts} = this.state;
    this.setState ({contacts: contacts.filter(item => item.id !== evt.target.id)})
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1 style={{
            margin: 0,
            fontSize: "36px",
            textAlign: 'center',
          }}>Phonebook</h1>
          <ContactForm onSubmit={this.handleSubmit}></ContactForm>                 
          <h2 style={{
            margin: 0,
            fontSize: '28px',
            textAlign: "center",
          }}>Contacts</h2>                    
          <Filter onChange={this.findContacts}></Filter>
          <ContactList contacts={this.visibleContacts} deleteContact={this.deleteContact}></ContactList>
        </div>
      </div>
    );
  }
}
