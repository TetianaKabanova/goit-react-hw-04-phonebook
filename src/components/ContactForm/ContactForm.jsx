import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [nameId] = useState(nanoid());
  const [numberId] = useState(nanoid());
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
          value={name}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={nameId}
          value={number}
          onChange={handleChange}
        />
      </Wrapper>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
