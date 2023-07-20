import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import initialContacts from './data/contacts.json';
import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';
import useLocaleStorage from 'components/localStorage';
import shortid from 'shortid';
import { notifyOptions } from 'components/notifyOptions';

export const App = () => {
  const [contacts, setContacts] = useLocaleStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      toast.error(`${name}: is already in contacts`, notifyOptions);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter
          value={filter}
          onChange={changeFilter}
          title="Find contact by name"
        />
        <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
      </Section>
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  findContacts: PropTypes.func.isRequired,
  duplicationContacts: PropTypes.func.isRequired,
};
