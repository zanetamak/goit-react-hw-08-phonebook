import { ChakraProvider, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import theme from './Theme';

export const Layout = () => {
  return (
    <ChakraProvider theme={theme}>
          <Container
              position="relative"
              maxW="960px"
              mx="auto"
              px="16px">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </ChakraProvider>
  );
};

// czy tu ma być chakra ? I plik js czy jsx? 