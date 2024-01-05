import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // W tym miejscu możesz dodać logikę do przetwarzania danych rejestracyjnych
    console.log('Submitted data:', formData);
  };

  return (
    <Box maxW="400px" mx="auto" mt="8">
      <Heading mb="4">Register</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Register
        </Button>
      </form>
    </Box>
  );
};

