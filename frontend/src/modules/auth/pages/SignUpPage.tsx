import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { gql } from 'src/gql';
import { useAuth } from 'src/modules/auth';

import { SignUpTemplate } from '../templates';

const SIGNUP_MUTATION = gql(/* GraphQL */ `
  mutation SignUp(
    $email: String!
    $name: String!
    $password: String!
    $userName: String!
  ) {
    signUp(
      email: $email
      name: $name
      password: $password
      userName: $userName
    ) {
      user {
        id
        name
        userName
        profileImageUrl
      }
      token
    }
  }
`);

export function SignUpPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [signupRequest, signupRequestState] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signUp: { user, token } }) => {
      auth.signIn({ token, user });
      navigate('/');
    },
    onError: () => {},
  });

  const handleSignUpFormSubmit = useCallback(
    (variables: {
      email: string;
      name: string;
      userName: string;
      password: string;
    }) => {
      signupRequest({ variables });
    },
    [signupRequest],
  );

  return (
    <SignUpTemplate
      isLoading={signupRequestState.loading}
      error={signupRequestState.error}
      onSubmit={handleSignUpFormSubmit}
    />
  );
}
