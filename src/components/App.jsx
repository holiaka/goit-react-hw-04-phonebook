import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

export const App = () => {
  const [contacts, setContacts] = useState(() => initialContacts());
  const [filter, setFilter] = useState('');

  function initialContacts() {
    const pastContacts = JSON.parse(localStorage.getItem('contacts'));
    if (pastContacts === null) {
      return [];
    }
    return pastContacts;
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleSubmit = evt => {
    const filterName = contacts.find(contact => contact.name === evt.name);

    if (filterName) {
      alert("You have already added this person's data to Contact list!!!");
      return;
    }

    setContacts([
      ...contacts,
      { id: nanoid(), name: evt.name, number: evt.number },
    ]);
  };

  const findContacts = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = evt => {
    setContacts(contacts.filter(item => item.id !== evt.target.id));
  };

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
        <h1
          style={{
            margin: 0,
            fontSize: '36px',
            textAlign: 'center',
          }}
        >
          Phonebook
        </h1>
        <ContactForm onSubmit={handleSubmit}></ContactForm>
        <h2
          style={{
            margin: 0,
            fontSize: '28px',
            textAlign: 'center',
          }}
        >
          Contacts
        </h2>
        <Filter onChange={findContacts}></Filter>
        <ContactList
          contacts={visibleContacts}
          deleteContact={deleteContact}
        ></ContactList>
      </div>
    </div>
  );
};
