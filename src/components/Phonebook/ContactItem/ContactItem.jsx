import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/contacts/contactsOperations';
import styles from '../ContactItem/ContactItem.module.css';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();

  const { id, name, number } = data;

  const onDeleteClick = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting...';
      e.target.setAttribute('disabled', 'true');
    }
    dispatch(removeContact(id));
  };
  return (
    <>
      {ContactItem.length > 0 ? (
        <li className={styles.contactItem}>
          <p className={styles.contactText}>
            {name}: {number}
          </p>
          <button
            type="button"
            className={styles.contactBtn}
            id={id}
            onClick={e => onDeleteClick(e, id)}
          >
            Delete
          </button>
        </li>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
  //         return (
  //      <>
  //   {' '}
  //   {contactsToRender.length > 0 ? (
  //             <table className={s.table}>
  //                 {error && <div>Something went wrong, please, try again</div>}
  //       <thead>
  //         <tr>
  //           <th className={s.thead}>№</th>
  //           <th className={s.thead}>Name</th>
  //           <th className={s.thead}>Number</th>
  //           <th className={s.thead}>Options</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {contactsToRender.map((item, index) => (

  //           <tr key={item.id}>
  //             <td className={s.data}>{index + 1}</td>
  //             <td className={s.data}>{item.name}</td>
  //             <td className={s.data}>{item.number}</td>
  //             <td className={s.data}>
  //               <button type='button' className={styles.contactBtn} id={id} onClick={(e) => onDeleteClick(e, id)}>Delete</button>
  //             </td>
  //           </tr>
  //         ))}
  //                 </tbody>
  //                 {isLoading && <div>Loading...</div>}
  //     </table>
  //   ) : (
  //     <p className={s.empty}>No contacts</p>
  //   )}
  // </>
  // );
};

ContactItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.string.isRequired),
};
