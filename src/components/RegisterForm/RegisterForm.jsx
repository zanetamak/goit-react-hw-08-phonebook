import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
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
    <Box maxW="300px" mx="auto" mt="10">
      <form onSubmit={handleSubmit}>
        <FormControl mb="10">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
                  width="100%"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="pink">
          Register
        </Button>
      </form>
    </Box>
  );
};

