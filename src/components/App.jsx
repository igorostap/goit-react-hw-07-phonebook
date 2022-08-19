import { ContactList } from './ContactLList/ContactList';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { useGetContactsQuery } from 'Redux/ContactsSlice';
import { Phonebook } from './Phonebook/Phonebook.styled';

export function App() {
  const { data } = useGetContactsQuery();
  return (
    <>
      <Phonebook>
        <InputForm data={data} />
        <h1>Phonebook</h1>
        <Filter />
        <h2>Contact List</h2>

        <ContactList />
      </Phonebook>
    </>
  );
}
/*
 */
