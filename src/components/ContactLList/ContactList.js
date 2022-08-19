import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'Redux/ContactsSlice';
export function ContactList() {
  const contactsFilter = useSelector(store => store.filter.filter);
  const { data } = useGetContactsQuery();

  const contacts = data ?? [];
  console.log(data);

  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts =
    contacts &&
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  return (
    <>
      <>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </>
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
/* */
