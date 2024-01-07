import { extendTheme } from '@chakra-ui/react';

import Button from './ComponentsStyles/Button';
import FormLabel from './ComponentsStyles/FormLabel';
import Input from './ComponentsStyles/Input';

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#EBF8FF',
        color: '#121212',
      },
    },
  },
  colors: {
    brand: {
      main: '#121212',
      dark: '#1D4044',
      pink: '#D53F8C',
      lightPink: '#FBB6CE',
      lighterPink: '#FFF5F7',
    },
  },
  components: {
    Button,
    Input,
    FormLabel,
  },
});

export default theme;