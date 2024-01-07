import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    solid: {
      bg: 'brand.pink',
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'lightPink',
        borderRadius: '50',
        transition: '0.5s ease',
      },
      _active: {
        bg: 'lighterPink',
        borderRadius: '50',
      },
    },
    solidActive: {
      bg: 'lightPink',
      borderRadius: '50',
    },
    icon: {
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'lightPink',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default Button;