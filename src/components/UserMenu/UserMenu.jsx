import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Text, Box } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box p="4" bg="gray.100">
      <Text s="b" mr="5">
        Welcome, {user.name}
      </Text>
      <Button
        variant="solid"
        onClick={() => dispatch(logOut())}
        mt="2"
        bg="pink.200"
        color="white"
        _hover={{ bg: 'pink.600' }}
      >
        Logout
      </Button>
    </Box>
  );
};