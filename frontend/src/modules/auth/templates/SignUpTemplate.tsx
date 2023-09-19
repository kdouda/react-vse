import { route } from 'src/route';
import { Box, Heading } from 'src/shared/design-system';
import { MainSection, RouterLink, TopNavigation } from 'src/shared/navigation';

import { SignUpForm } from '../organisms';

type Props = {
  isLoading: boolean;
  error?: Error;
  onSubmit: (data: {
    email: string;
    password: string;
    userName: string;
    name: string;
  }) => void;
};

export function SignUpTemplate({ isLoading, error, onSubmit }: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading mb="4">Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error?.message}
          onSubmit={onSubmit}
        >
          <Box>
            or <RouterLink to={route.signIn()}>Sign In</RouterLink>
          </Box>
        </SignUpForm>
      </MainSection>
    </>
  );
}
