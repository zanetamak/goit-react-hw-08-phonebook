import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // Dodawanie nowego kontaktu
  const handleAddContact = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const number = form.number.value.trim();

    const isContactExists = contacts.findIndex(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    ) !== -1;

    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      form.reset();
      return;
    }

    // Dodanie kontaktu do Redux Store
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));

    // Resetowanie formularza po dodaniu kontaktu
    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleAddContact}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="e.g. John Doe"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel>Number</FormLabel>
        <Input
          autoComplete="off"
          type="tel"
          name="number"
          placeholder="e.g. 123-456-789"
          required
        />
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;