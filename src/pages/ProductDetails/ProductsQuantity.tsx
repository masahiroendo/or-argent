import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Input, NumberInput, NumberInputField, Select } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {};

const ProductsQuantity = (props: Props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <HStack justifyContent="center" shouldWrapChildren>
      <IconButton icon={<MinusIcon />} aria-label="remove quantity" onClick={decrement} isDisabled={quantity < 2} />
      <NumberInput
        maxW={24}
        defaultValue={1}
        min={1}
        max={1000}
        clampValueOnBlur={true}
        value={quantity}
        onChange={(_, q) => setQuantity(q)}>
        <NumberInputField as={Select}>
          {Array.from(Array(20)).map((_, i) => {
            return <option value={i + 1}>{i + 1}</option>;
          })}
        </NumberInputField>
      </NumberInput>
      <IconButton icon={<AddIcon />} aria-label="add quantity" onClick={increment} />
    </HStack>
  );
};

export default ProductsQuantity;
