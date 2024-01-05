import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <NavLink to="/login">
        {({ isActive }) =>
          isActive ? (
            <Button mr="3" variant="solidActive">
              Login
            </Button>
          ) : (
            <Button mr="3">LOGIN</Button>
          )
        }
      </NavLink>
      <NavLink to="/register">
        {({ isActive }) =>
          isActive ? (
            <Button variant="solidActive">Sign up</Button>
          ) : (
            <Button>SIGN UP</Button>
          )
        }
      </NavLink>
    </Box>
  );
};