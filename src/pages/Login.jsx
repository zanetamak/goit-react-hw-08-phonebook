import { Container, Box, Center, Heading, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container p="4">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Center>
        <Box maxW="md" w="full">
          <Heading as="h1" mb="4" textAlign="center">
            Login
          </Heading>
          <LoginForm />
          <Box mt="4" textAlign="center">
            Don't have an account?{' '}
            <Link as={RouterLink} to="/register" color="red.500">
              Register here
            </Link>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}