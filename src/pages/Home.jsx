import { Box, Heading, Button } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


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
      <Link to="/register">
        <Button colorScheme="pink"  mt="20" width="200px" height="50px" fontSize="1.5rem">
          Start!
        </Button>
      </Link>
    </Box>
  );
}