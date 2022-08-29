import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { HStack, IconButton, NumberInput, NumberInputField, Select } from '@chakra-ui/react';
import { /*Dispatch, SetStateAction,*/ FC } from 'react';

type ProductsQuantityProps = {
  quantity: number;
  updateQuantity: (q: number) => void;
  // solution B: updateQuantity: Dispatch<SetStateAction<number>>; // if we are sure to pass the useState 2nd argument as a prop
};

const ProductsQuantity: FC<ProductsQuantityProps> = ({ quantity, updateQuantity }) => {
  const increment = () => {
    /*fix: above 20 it goes back to 1 but the selectbox does not respond properly*/
    updateQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
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
        onChange={(_, v) => updateQuantity(v)}>
        <NumberInputField as={Select}>
          {Array.from(Array(20)).map((_, i) => {
            return (
              <option key={`quantity-option-${i}`} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </NumberInputField>
      </NumberInput>
      <IconButton icon={<AddIcon />} aria-label="add quantity" onClick={increment} />
    </HStack>
  );
};

export default ProductsQuantity;
