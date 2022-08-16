import { InputItem } from './inputForm.styled';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { useAddContactMutation } from '../../Redux/ContactsSlice';

export function InputForm({ data }) {
  const [addContact] = useAddContactMutation();

  const onSubmit = (values, action) => {
    const equalName = data.find(
      el => el.name.toLowerCase() === values.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts');

    addContact(values);

    action.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={onSubmit}>
      <Form>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <InputItem
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

InputForm.propTypes = {
  onSubmit: PropTypes.func,
};
