import { route } from 'src/route';
import { Box, Heading } from 'src/shared/design-system';
import { MainSection, RouterLink, TopNavigation } from 'src/shared/navigation';

import { SignInForm } from '../organisms';

export type SignInTemplateProps = {
  isLoading: boolean;
  error?: Error;
  onSubmit: (data: { email: string; password: string }) => void;
};

export function SignInTemplate({
  isLoading,
  error,
  onSubmit,
}: SignInTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading pb="4">Sign In</Heading>

        <SignInForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
        >
          <Box>
            or <RouterLink to={route.signUp()}>Sign Up</RouterLink>
          </Box>
        </SignInForm>
      </MainSection>
    </>
  );
}
