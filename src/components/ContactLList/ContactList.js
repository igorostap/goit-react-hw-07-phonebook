import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
  return (
    <>
      <>
        {contacts.map(contact => (
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
