import { useGetContactsQuery } from 'Redux/ContactsSlice';
import { ContactList } from './ContactLList/ContactList';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook.styled';

export function App() {
  const { data } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const contacts = data ?? [];

  const filterToLowCase = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowCase)
  );
  return (
    <>
      <Phonebook>
        <InputForm data={data} />
        <h1>Phonebook</h1>
        <Filter filter={filter} filterChange={setFilter} />
        <h2>Contact List</h2>
        {contacts ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <p>No any contacts</p>
        )}
      </Phonebook>
    </>
  );
}
