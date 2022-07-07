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
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import CallBackHeader from './CallBackHeader';
import useInput from '../../../hooks/use-input';
import { capitalize } from '../../../utils/string-utils';
import { sendEmail } from '../../../services/email';

const to = 'vemih35989@meidir.com'; // get a disposable email address from https://temp-mail.org/en/
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
  const [checkedWeekDays, setCheckedWeekDays] = useState<string[]>([]);
  const [noWeekDaysChecked, setNoWeekDaysChecked] = useState(false);
  const [checkedTimeSlot, setCheckedTimeSlot] = useState<string[]>([]);
  const [noTimeSlotChecked, setNoTimeSlotChecked] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      timeZones: timeZoneSelect.value,
      weekDays: checkedWeekDays,
      timeSlots: checkedTimeSlot,
    };
    if (!isValidForm()) {
      return;
    }

    try {
      await sendEmail([to], 'Contact Request from or-argent', payload);
    } catch (err) {
      console.error('Error while sending email', err);
    }
  };

  const handleWeekDaysChange = (day: string) => (e: ChangeEvent<HTMLInputElement>) => {
    // e.target.checked
    //   ? setCheckedWeekDays([...checkedWeekDays].concat(day))
    //   : setCheckedWeekDays([...checkedWeekDays].filter((d) => d !== day));
    let update = [...checkedWeekDays];
    if (e.target.checked) {
      update = update.concat(day);
    } else {
      update = update.filter((d) => d !== day);
    }
    setCheckedWeekDays(update);
    setNoWeekDaysChecked(!update.length);
  };

  const handleTimeSlotChange = (time: string) => (e: ChangeEvent<HTMLInputElement>) => {
    let update = [...checkedTimeSlot];
    if (e.target.checked) {
      update = update.concat(time);
    } else {
      update = update.filter((t) => t !== time);
    }
    setCheckedTimeSlot(update);
    setNoTimeSlotChecked(!update.length);
  };

  // const isInvalidForm = () => {
  //   return (
  //     !nameInput.value ||
  //     nameInput.hasError ||
  //     !phoneInput.value ||
  //     phoneInput.hasError ||
  //     !emailInput.value ||
  //     emailInput.hasError ||
  //     !timeZoneSelect.value ||
  //     timeZoneSelect.hasError ||
  //     !checkedWeekDays.length ||
  //     noWeekDaysChecked ||
  //     !checkedTimeSlot.length ||
  //     noTimeSlotChecked
  //   );
  // };

  const isValidForm = () => {
    return (
      nameInput.value &&
      !nameInput.hasError &&
      phoneInput.value &&
      !phoneInput.hasError &&
      emailInput.value &&
      !emailInput.hasError &&
      checkedWeekDays.length &&
      !noWeekDaysChecked &&
      checkedTimeSlot.length &&
      !noTimeSlotChecked &&
      timeZoneSelect.value &&
      !timeZoneSelect.hasError
    );
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
          <FormControl isInvalid={noWeekDaysChecked}>
            <CheckboxGroup>
              <FormLabel htmlFor="week-day">Jour de la semaine</FormLabel>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                {weekDays.map((day) => {
                  const isChecked = checkedWeekDays.includes(day);
                  return (
                    <Checkbox key={day} name="week-day" isChecked={isChecked} onChange={handleWeekDaysChange(day)}>
                      {capitalize(day)}
                    </Checkbox>
                  );
                })}
              </Stack>
            </CheckboxGroup>
            <FormErrorMessage>Please select at least one weekday</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={noTimeSlotChecked}>
            <FormLabel htmlFor="time-slot">Moment de la journée</FormLabel>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {timeSlots.map((time) => {
                const isChecked = checkedTimeSlot.includes(time);
                return (
                  <Checkbox key={time} name="time-slot" isChecked={isChecked} onChange={handleTimeSlotChange(time)}>
                    {capitalize(time)}
                  </Checkbox>
                );
              })}
            </Stack>
            <FormErrorMessage>Please select a time slot</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={timeZoneSelect.hasError}>
            <FormLabel htmlFor="time-zone">Fuseau Horaire</FormLabel>
            <Select
              name="time-zone"
              options={timeZoneOptions}
              isClearable={true}
              onChange={(selected) => {
                timeZoneSelect.anyChangeHandler && timeZoneSelect.anyChangeHandler(selected?.label || '');
              }}></Select>
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="center" mt={'1rem'}>
          <Button disabled={!isValidForm()} variant="ghost" type="submit" style={{ borderRadius: '25px' }}>
            Demande de rappel
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default CallBack;
