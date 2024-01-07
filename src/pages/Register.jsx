import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm'

export default function Register() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading>Register</Heading>
        <RegisterForm />
        Do you have account?{' '}
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Log in
        </Link>
      </Box>
    </Container>
  );
}

// Box jest ogólnym komponentem do stylizacji i układu, podczas gdy Container jest specjalizowanym 
// komponentem do obsługi responsywnego układu strony, zapewniając elastyczne zarządzanie szerokością 
// zawartości.W zależności od potrzeb projektu możesz używać jednego lub drugiego komponentu.