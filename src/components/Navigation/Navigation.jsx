import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link, Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

 return (
    <Flex as="nav">
      <Link as={NavLink} to="/">
        {({ isActive }) =>
          isActive ? (
            <Button variant="solidActive">Home</Button>
          ) : (
            <Button>HOME</Button>
          )
        }
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" ml="16px">
          {({ isActive }) =>
            isActive ? (
              <Button variant="solidActive">Contacts</Button>
            ) : (
              <Button>CONTACTS</Button>
            )
          }
        </Link>
      )}
    </Flex>
  );
};