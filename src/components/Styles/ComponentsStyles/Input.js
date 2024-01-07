import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  variants: {
    custom: {
      field: {
        border: '2px solid',
        borderColor: 'brand.dark',
        color: 'brand.main',
        bg: 'none',
        borderRadius: 'full',
        _hover: {
          bg: 'lightPink',
          transition: '0.5s ease',
        },
        _focus: {
          bg: 'lightPink',
          transition: '0.5s ease',
        },
        _active: {
          bg: 'lightPink',
        },
        _isRequired: {
          bg: 'lightPink',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'custom',
  },
});

export default Input;