import { AuthUser } from 'src/modules/auth/auth-core';
import {
  AvatarPhoto,
  Button,
  ErrorBanner,
  Heading,
  Loading,
  ReloadButton,
} from 'src/shared/design-system';
import { MainSection, TopNavigation } from 'src/shared/navigation';

import { QuackForm } from '../molecules';
import { QuackList } from '../organisms';

type Props = {
  userName?: string;
  data: any; // TODO
  loading: boolean;
  error?: Error;
  onReload: () => void;
  quackFormState: {
    loading: boolean;
    error?: Error;
    text: string;
    setText: (text: string) => void;
    onSubmit: (data: { text: string }) => void;
  };
  currentUser: AuthUser | null;
};

export function UserDetailTemplate({
  userName,
  data,
  loading,
  error,
  onReload,
  quackFormState,
  currentUser,
}: Props) {
  const showQuackForm =
    quackFormState && currentUser && currentUser.userName === userName;

  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        {loading && !data && <Loading />}

        {error && (
          <ErrorBanner title={error.message}>
            <Button colorScheme="red" onClick={onReload}>
              Reload
            </Button>
          </ErrorBanner>
        )}

        {data && (
          <>
            <header>
              <AvatarPhoto
                src={data.user.profileImageUrl}
                alt={data.user.name}
                size="32"
                mb="2"
              />
              <Heading as="h2" m="0">
                {data.user.name}
              </Heading>
              <Heading as="h5" fontWeight="400" color="gray.500">
                @{data.user.userName}
              </Heading>
            </header>

            {showQuackForm && <QuackForm {...quackFormState} mt="2" />}

            <ReloadButton
              onClick={onReload}
              isLoading={loading}
              float="right"
            />

            <QuackList quacks={data.user.quacks} />
          </>
        )}
      </MainSection>
    </>
  );
}
