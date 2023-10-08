import {
  BodyBackground,
  Heading,
  Paragraph,
  Radio,
  RadioGroup,
  Select,
  Stack
} from 'src/shared/design-system';
import { InputField, SwitchField, TextareaField, SelectField, RadioGroupField } from 'src/shared/forms';

import { SettingsSection } from '../molecules';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const profileFormSchema = zod.object({
  firstName: zod.string().nonempty('First name must not be empty!'),
  lastName: zod.string().nonempty('Last name must not be empty!'),
  username: zod.string().nonempty('User name must not be empty!'),
  email: zod.string().nonempty('Name must not be empty!').email('E-mail must be in correct format!'),
  about: zod.string().nonempty('Name must not be empty!').refine((val) => {
    console.log(val);
    return !(val.toLowerCase().indexOf('lorem') >= 0 || val.toLowerCase().indexOf('ipsum') >= 0)
  }, { message: 'Description cannot contain the words lorem or ipsum.' }),
  agreeToc: zod.literal<boolean>(true),
  visibility: zod.string().nonempty('Visibility must not be empty!')
});

export function Practical03Page() {
  return (
    <>
      <BodyBackground bg="gray.100" />
      <Heading pb="4">Practical 03</Heading>

      <Stack>
        <SettingsSection
          title="Profile"
          description="This is your profile information."
          formProps={{
            resolver: zodResolver(profileFormSchema),
            defaultValues: {
              firstName: 'John',
              lastName: 'Doe',
              username: 'jdoe',
              email: 'john@doe.com',
              about: 'Lorem ipsum',
              agreeToc: true,
              visibility: 'public'
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >

          <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
            <InputField name="firstName" label="First name"></InputField>
            
            <InputField name="lastName" label="Last name"></InputField>
          </Stack>

          <InputField maxWidth={{ base: '100%', md: '75%' }} name="username" label="User name"></InputField>

          <Stack>
            <InputField maxWidth={{ base: '100%', md: '75%' }} name="email" label="Email address"></InputField>
          </Stack>

          <TextareaField name="about" label="Profile bio"></TextareaField>

          <SelectField name="visibility">
            <option value="public">Public</option>
            <option value="friends">Only friends</option>
            <option value="private">Private</option>
          </SelectField>

          <SwitchField name="agreeToc">
            {' '}
            Agree to Terms and Conditions
          </SwitchField>
        </SettingsSection>
        <SettingsSection
          title="Notifications"
          description="Setup how much notification you will receive"
          formProps={{
            defaultValues: {
              notificationsLevel: 'mentions',
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <Heading as="h5">Notify me</Heading>
          <Paragraph>When you should be notified:</Paragraph>

          <RadioGroupField name="notificationsLevel">
              <Radio value="all">Every time someone quacks</Radio>
              <Radio value="mentions">Only mentions (@username)</Radio>
              <Radio value="never">Never</Radio>
          </RadioGroupField>
        </SettingsSection>
      </Stack>
    </>
  );
}
