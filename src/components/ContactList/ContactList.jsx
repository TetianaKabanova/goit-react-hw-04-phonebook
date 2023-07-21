import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <DeleteButton onClick={() => onDeleteContact(id, name)}>
              Delete
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
