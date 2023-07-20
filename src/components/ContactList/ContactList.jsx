import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  Contact,
  DeleateButton,
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
            <DeleateButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleateButton>
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
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};
