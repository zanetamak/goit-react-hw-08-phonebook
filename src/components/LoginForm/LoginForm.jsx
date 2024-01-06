import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box maxW="300px" mx="auto" mt="10">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl mb="10">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button type="submit" colorScheme="pink">
          Log In
        </Button>
      </form>
    </Box>
  );
};