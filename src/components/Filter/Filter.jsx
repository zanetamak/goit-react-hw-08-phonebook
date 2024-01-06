import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

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
        onChange={onChange}
        placeholder="Enter name or phone number"
      />
    </FormControl>
  );
};

export default Filter;