import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
    setUserData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <Box as="form" onSubmit={handleSubmit} mx="auto" maxW="400px">
      {['name', 'email', 'password'].map((field) => (
        <FormControl key={field} mt="10px">
          <FormLabel>{field === 'name' ? 'Username' : field}</FormLabel>
          <Input
            width="100%"
            type={field === 'password' ? 'password' : field}
            name={field}
            value={userData[field]}
            onChange={handleChange}
          />
        </FormControl>
      ))}
      <Button mt="20px" type="submit" width="100%">
        Register
      </Button>
    </Box>
  );
};

