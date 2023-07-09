import React from 'react';
import propTypes from 'prop-types';
import css from './contactList.module.css';
export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className={css.listItem}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
        className={css.deleteBtn}
      >
        x
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: propTypes.exact({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};
