import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <FormControl mb="4">
      <FormLabel>Find contacts by name or phone number</FormLabel>
      <Input
        type="text"
        name="filter"
        value={filter} // Używanie filtra z Redux za pomocą useSelector
        onChange={onChange}
        placeholder="Enter name or phone number"
      />
    </FormControl>
  );
};

export default Filter;