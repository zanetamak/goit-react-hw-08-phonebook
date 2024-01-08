import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = (e) => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    const trimmedName = name.value.trim();
    const trimmedNumber = number.value.trim();

    if (contacts.some((contact) => contact.name.toLowerCase() === trimmedName.toLowerCase())) {
      alert(`${trimmedName} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: trimmedName,
      number: trimmedNumber,
    };

    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <Box as="form" onSubmit={handleAddContact}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input autoComplete="off" type="text" name="name" required />
      </FormControl>
      <FormControl>
        <FormLabel>Number</FormLabel>
        <Input autoComplete="off" type="tel" name="number" required />
      </FormControl>
      <Button type="submit" mt="10" colorScheme="teal">
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;