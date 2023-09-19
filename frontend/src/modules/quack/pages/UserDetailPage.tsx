import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { gql } from 'src/gql';
import { useAuth } from 'src/modules/auth';
import { NotFoundPage } from 'src/shared/navigation';

import { UserDetailTemplate } from '../templates';

const USER_DETAIL_QUERY = gql(/* GraphQL */ `
  query UserDetail($userName: String!) {
    user(userName: $userName) {
      id
      name
      userName
      profileImageUrl
      quacks {
        id
        ...BaseQuack
      }
    }
  }
`);

const QUACK_MUTATION = gql(/* GraphQL */ `
  mutation Quack($userId: Int!, $text: String!) {
    addQuack(userId: $userId, text: $text) {
      id
    }
  }
`);

export function UserDetailPage() {
  const { user } = useAuth();
  const { userName } = useParams();

  const userFetcher = useQuery(USER_DETAIL_QUERY, {
    variables: { userName: userName ?? '' },
  });

  const [quackFormText, setQuackFormText] = useState('');
  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    QUACK_MUTATION,
    {
      onCompleted: () => {
        setQuackFormText('');
        userFetcher.refetch();
      },
      onError: () => {},
    },
  );

  const quackFormState = {
    loading: quackMutationRequestState.loading,
    error: quackMutationRequestState.error,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: ({ text }: { text: string }) => {
      if (!user) {
        return;
      }

      quackMutationRequest({ variables: { text, userId: user.id } });
    },
  };

  if (userFetcher.data && userFetcher.data.user === null) {
    return <NotFoundPage />;
  }

  return (
    <UserDetailTemplate
      data={userFetcher.data}
      loading={userFetcher.loading}
      error={userFetcher.error}
      onReload={() => userFetcher.refetch()}
      quackFormState={quackFormState}
      currentUser={user}
      userName={userName}
    />
  );
}
