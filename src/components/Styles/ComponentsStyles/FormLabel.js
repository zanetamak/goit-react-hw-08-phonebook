import { defineStyleConfig } from '@chakra-ui/react';

const FormLabel = defineStyleConfig({
  variants: {
    custom: {
      _focus: {
        color: 'lightPink',
        transition: '0.5s ease',
      },
    },
  },
  defaultProps: {
    size: '10',
    variant: 'custom',
  },
});

export default FormLabel;