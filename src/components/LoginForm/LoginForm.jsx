import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <Box as="form" onSubmit={handleSubmit} py="4" maxW="300px">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          width="100%"
          type="email"
          name="email" />
      </FormControl>
      <FormControl mt="10px" id="password">
        <FormLabel>Password</FormLabel>
        <Input
          width="100%"
          type={showPassword ? 'text' : 'password'}
          name="password"
          onClick={togglePasswordVisibility}
        />
      </FormControl>
      <Button mt="20px" type="submit">
        Log In
      </Button>
    </Box>
  );
};
