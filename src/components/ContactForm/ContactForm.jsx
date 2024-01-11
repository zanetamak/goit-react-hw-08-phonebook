import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContactExists = contacts.some((contact) => contact.name === formData.name);

    if (newContactExists) {
      alert(`${formData.name} is in use. Try another name.`);
      return;
    }

    dispatch(createContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} my="10">
      <FormControl mb="5">
        <FormLabel htmlFor="number">Number</FormLabel>
        <Input
          type="tel"
          name="number"
          required
          value={formData.number}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb="5">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </FormControl>

      <Button type="submit">Add contact</Button>
    </Box>
  );
};

export default ContactForm;