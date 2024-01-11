import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { StarIcon } from '@chakra-ui/icons';

export default function HomePage() {
  return (
    <Box p="4" textAlign="center" mt="40">
      <Helmet>
        <title>Contacts manager</title>
      </Helmet>
      <Heading as="h2" fontSize="4xl" mb="4">
        <StarIcon color="pink.700" boxSize={8} marginRight={2}/>
        Contacts manager welcome page{' '}
       <StarIcon color="pink.700" boxSize={8} />
      </Heading>
    </Box>
  );
}