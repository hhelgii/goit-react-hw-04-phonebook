import React, { useEffect, useState } from 'react';
import { AddContact } from './addContactForm/AddContact';
import { ContactList } from './addContactList/ContactList';
import css from './app.module.css';
import { FilterContact } from './filterContacts/FilterContact';
import { nanoid } from 'nanoid';
const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const onInputChange = event => {
    const {value } = event.target;
    setFilter(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();
    setContacts([...contacts, { name, number, id: nanoid() }]);
  };
  const onFilterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  // componentDidMount
  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storageContacts) {
      setContacts(storageContacts)
    }
  }, []);
  // componentDidMount+componentDidUpdate
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filtered = onFilterContact();
  return (
    <div className={css.container}>
      <h1>PhoneBook:</h1>
      <AddContact onHandleSubmit={onSubmit}></AddContact>
      <h2>Contacts</h2>
      <FilterContact
        value={filter}
        onFilterChange={onInputChange}
      ></FilterContact>
      <ContactList contacts={filtered} onDelete={onDelete}></ContactList>
    </div>
  );
};

