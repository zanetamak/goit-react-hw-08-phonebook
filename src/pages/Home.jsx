import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <Box p="4">
      <Helmet>
        <title>Contacts manager</title>
      </Helmet>
      <Heading as="h1" fontSize="xl" mb="4">
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Heading>
    </Box>
  );
}