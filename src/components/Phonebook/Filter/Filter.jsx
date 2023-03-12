import React from 'react';
import { nanoid } from 'nanoid';
import styles from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  }
  
  const filterId = nanoid();

  return (<div className={styles.filterWrapper}>
    <label htmlFor={filterId} className={styles.label}>Find contacts by name</label>
    <input
      id={filterId}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      className={styles.input}
      placeholder='Input name' />
  </div>);
};