import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Input, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(userData));
    setUserData({ name: '', email: '', password: '' });
  };

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" maxW="300px">
      <FormControl id="name">
        <FormLabel>Username</FormLabel>
        <Input
          width="100%"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mt="10px" id="email">
        <FormLabel>Email</FormLabel>
        <Input
          width="100%"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mt="10px" id="password">
        <FormLabel>Password</FormLabel>
        <Input
          width="100%"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </FormControl>
      <Button mt="20px" type="submit">
        Register
      </Button>
    </Box>
  );
};


