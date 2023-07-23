import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

import { notifyOptions } from 'components/notifyOptions';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      return toast.error(
        `Contact with name "${contact.name}" already exists!`,
        notifyOptions
      );
    }

    setContacts(prevContacts => [...prevContacts, contact]);
    toast.success(
      `Contact with name ${contact.name} is added to the contact list!`,
      notifyOptions
    );
  };

  const handleDeleteContact = (id, name) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
    toast.info(
      `Contact with with name ${name} has been deleted!`,
      notifyOptions
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    const savedStringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(savedStringifiedContacts) ?? [];
    setContacts(contacts);
  }, []);

  useEffect(() => {
    const savedStringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', savedStringifiedContacts);
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        <Filter
          title="Find contact by name"
          onChange={handleFilterChange}
          value={filter}
        />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
      <ToastContainer />
    </Container>
  );
};
