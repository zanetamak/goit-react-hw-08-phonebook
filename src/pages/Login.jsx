import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export default function Login() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="xl">Login to your account</Heading>
        <LoginForm />
        Don't have an account?{' '}
        <Link to="/register" style={{ textDecoration: 'underline', color: 'red'}}>
           <ChevronRightIcon boxSize={5} />Register here <ChevronLeftIcon boxSize={5} />
        </Link>
      </Box>
    </Container>
  );
}
