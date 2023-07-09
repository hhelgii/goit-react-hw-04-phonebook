import React from 'react';
import propTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            contact={contact}
            key={contact.id}
            onDeleteContact={onDelete}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: propTypes.func.isRequired,
};
