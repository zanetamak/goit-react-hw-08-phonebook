import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export default function Register() {
  return (
    <Container maxW="xl" centerContent>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="xl">Create a new account</Heading>
        <RegisterForm />
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'underline', color: 'red' }}>
                 <ChevronRightIcon boxSize={5} />Log in here <ChevronLeftIcon boxSize={5} />
        </Link>
      </Box>
    </Container>
  );
}

// Box jest ogólnym komponentem do stylizacji i układu, podczas gdy Container jest specjalizowanym 
// komponentem do obsługi responsywnego układu strony, zapewniając elastyczne zarządzanie szerokością 
// zawartości.W zależności od potrzeb projektu możesz używać jednego lub drugiego komponentu.