import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, FormEvent } from 'react';

const CallBack: FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container maxW="container.xl" mb={4}>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        <Box height="80px">
          <Heading as="h2" size="md">
            Téléphone
          </Heading>
          <Text>
            <PhoneIcon />
            <a href="tel:++33142410445">+33-1-4241-0445</a>
          </Text>
        </Box>
        <Box height="80px">
          <Heading as="h2" size="md">
            Être rappelé
          </Heading>
        </Box>
        <Box height="80px">
          <Heading as="h2" size="md">
            Email
          </Heading>
        </Box>
        <Box height="80px">
          <Heading as="h2" size="md">
            Messagerie sécurisée
          </Heading>
        </Box>
      </SimpleGrid>
      <form onSubmit={handleSubmit}>
        <SimpleGrid spacing="20px">
          <FormControl>
            <FormLabel htmlFor="name">Nom et/ou Prénom</FormLabel>
            <Input type="text" id="name" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="telephone">Téléphone</FormLabel>
            <Input type="text" id="telephone"></Input>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="text" id="email" />
          </FormControl>
          <FormControl>
            <CheckboxGroup>
              <FormLabel htmlFor="week-day">Jour de la semaine</FormLabel>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox name="week-day" value="lundi">
                  Lundi
                </Checkbox>
                <Checkbox name="week-day" value="mardi">
                  Mardi
                </Checkbox>
                <Checkbox name="week-day" value="mercredi">
                  Mercredi
                </Checkbox>
                <Checkbox name="week-day" value="jeudi">
                  Jeudi
                </Checkbox>
                <Checkbox name="week-day" value="vendredi">
                  Vendredi
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <fieldset>Moment de la journée</fieldset>
          </FormControl>
          <FormControl>
            <fieldset>Fuseau Horaire</fieldset>
          </FormControl>
        </SimpleGrid>
        <Button type="submit" style={{ borderRadius: '25px' }}>
          Demande de rappel
        </Button>
      </form>
    </Container>
  );
};

export default CallBack;
