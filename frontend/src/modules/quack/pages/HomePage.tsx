import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { gql } from 'src/gql';
import { useAuth } from 'src/modules/auth';

import { HomeTemplate } from '../templates';

const QUACKS_QUERY = gql(/* GraphQL */ `
  query Quacks {
    quacks {
      id
      ...BaseQuack
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

export function HomePage() {
  const { user } = useAuth();

  const quacksState = useQuery(QUACKS_QUERY);
  const [quackFormText, setQuackFormText] = useState('');

  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    QUACK_MUTATION,
    {
      onCompleted: () => {
        setQuackFormText('');
        quacksState.refetch();
      },
      onError: () => {},
    },
  );

  const submitQuack = ({ text }: { text: string }) => {
    if (!user) {
      return;
    }

    quackMutationRequest({
      variables: { text, userId: user.id },
    });
  };

  const quackFormState = {
    error: quackMutationRequestState.error,
    loading: quackMutationRequestState.loading,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: submitQuack,
  };

  return (
    <HomeTemplate
      data={quacksState.data}
      error={quacksState.error}
      loading={quacksState.loading}
      refetchQuacks={() => quacksState.refetch()}
      quackFormState={quackFormState}
      currentUser={user}
    />
  );
}
