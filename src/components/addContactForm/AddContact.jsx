import React, { useState } from 'react';
import propTypes from 'prop-types';
import css from './addCotact.module.css';



export const AddContact = ({ onHandleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  return (
    <form
      className={css.contactForm}
      onSubmit={event => {
        onHandleSubmit(event);
        setName('');
        setNumber('');
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onInput}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onInput}
          required
        />
      </label>
      <button className={css.addContact}>Add contact</button>
    </form>
  );
};



AddContact.propTypes = {
  onHandleSubmit: propTypes.func.isRequired,
};
