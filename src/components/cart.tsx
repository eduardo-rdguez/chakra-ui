import { Heading, Text, VStack } from '@chakra-ui/react';

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <Heading size="2xl">Your cart</Heading>
      <Text>
        If the price is too hard on your eyes.
        <strong>try changing the theme.</strong>
      </Text>
    </VStack>
  );
};

export default Cart;
