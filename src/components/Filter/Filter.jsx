import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FormControl id="filter" mb="5">
      <FormLabel>Search list:</FormLabel>
      <Input
        type="search"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts by name or phone number"
        required
      />
    </FormControl>
  );
};

export default Filter;