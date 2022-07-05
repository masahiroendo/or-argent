import Select from 'react-select';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { FC, FormEvent } from 'react';

import CallBackHeader from './CallBackHeader';
import useInput from '../../../hooks/use-input';
import { capitalize } from '../../../utils/string-utils';

const weekDays: string[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
const timeSlots: string[] = ['matinée', 'midi', 'soir'];
const timeZoneOptions = [
  {
    label: 'Europe UTC+01',
    options: [
      { value: 'France', label: 'France' },
      { value: 'Russia', label: 'Russia' },
      { value: 'United-Kingdom', label: 'United-Kingdom' },
    ],
  },
  {
    label: 'Asia UTC+06',
    options: [
      { value: 'China', label: 'China' },
      { value: 'Japan', label: 'Japan' },
    ],
  },
  { label: 'America UTC+03', options: [{ value: 'Dominican Republic', label: 'Dominican Republic' }] },
];

const CallBack: FC = () => {
  const nameInput = useInput((value: string) => value.trim() !== '');
  const phoneInput = useInput((value: string) => value.trim() !== '');
  const emailInput = useInput((value: string) => value.includes('@'));
  const timeZoneSelect = useInput((value: string) => value.trim() !== '');

  const handleSubmit = (event: FormEvent) => {
    console.table([nameInput.value, phoneInput.value, emailInput.value, timeZoneSelect.value]);
    event.preventDefault();
  };

  return (
    <Container maxW="container.xl" mb={4}>
      <CallBackHeader />
      <form onSubmit={handleSubmit}>
        <SimpleGrid spacing="20px">
          <FormControl isInvalid={nameInput.hasError}>
            <FormLabel htmlFor="name">Nom et/ou Prénom</FormLabel>
            <Input
              type="text"
              name="name"
              id="name"
              value={nameInput.value}
              onChange={nameInput.valueChangeHandler}
              onBlur={nameInput.inputBlurHandler}
            />
            <FormErrorMessage>Please enter your Name</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={phoneInput.hasError}>
            <FormLabel htmlFor="telephone">Téléphone</FormLabel>
            <Input
              type="text"
              name="telephone"
              id="telephone"
              value={phoneInput.value}
              onChange={phoneInput.valueChangeHandler}
              onBlur={phoneInput.inputBlurHandler}
            />
            <FormErrorMessage>Please enter your phone number</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={emailInput.hasError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="text"
              name="email"
              id="email"
              value={emailInput.value}
              onChange={emailInput.valueChangeHandler}
              onBlur={emailInput.inputBlurHandler}
            />
            <FormErrorMessage>Please enter your email</FormErrorMessage>
          </FormControl>
          <FormControl>
            <CheckboxGroup>
              <FormLabel htmlFor="week-day">Jour de la semaine</FormLabel>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                {weekDays.map((day) => (
                  <Checkbox key={day} name="week-day" value={day}>
                    {capitalize(day)}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="time-slot">Moment de la journée</FormLabel>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {timeSlots.map((time) => (
                <Checkbox key={time} name="time-slot" value={time}>
                  {capitalize(time)}
                </Checkbox>
              ))}
            </Stack>
          </FormControl>
          <FormControl isInvalid={timeZoneSelect.hasError}>
            <FormLabel htmlFor="time-zone">Fuseau Horaire</FormLabel>
            <Select
              name="time-zone"
              options={timeZoneOptions}
              isClearable={true}
              onChange={(selected) => {
                timeZoneSelect.anyChangeHandler && timeZoneSelect.anyChangeHandler(selected?.label);
              }}></Select>
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="center">
          <Button variant="ghost" type="submit" style={{ borderRadius: '25px' }}>
            Demande de rappel
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default CallBack;
