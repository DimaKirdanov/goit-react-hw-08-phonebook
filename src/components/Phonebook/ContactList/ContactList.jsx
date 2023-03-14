import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../../redux/contacts/contactsOperations';
import { getContacts } from '../../../redux/contacts/contactsSlice';
import { getFilter } from '../../../redux/filter/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, error, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }
    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsToRender = getFilteredContacts();

  return (
    <>
      {' '}
      {contactsToRender.length > 0 ? (
        <ul style={{ paddingLeft: '0px' }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            contactsToRender.map(item => (
              <ContactItem key={item.id} data={item} />
            ))
          )}
          {error && <div>Something went wrong, please, try again</div>}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
