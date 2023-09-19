import { GraphQLError } from 'graphql/error';
import * as argon2 from 'argon2';

import { CustomContext } from '../../../types/types';
import {
  AuthInfo,
  MutationSignInArgs,
  MutationSignUpArgs,
  Quack,
  QueryUserArgs,
  User,
} from '../../../types/graphqlTypesGenerated';
import { createToken } from '../../../libs/jwt';

export const userResolver = async (
  _: unknown,
  { userName }: QueryUserArgs,
  { dbConnection }: CustomContext,
): Promise<User> => {
  const user = (
    await dbConnection.query(`SELECT * FROM user WHERE userName = ?`, [
      userName,
    ])
  )[0];
  if (!user) {
    throw new GraphQLError('User not found');
  }

  return user;
};

export const usersResolver = async (
  _: unknown,
  __: unknown,
  { dbConnection }: CustomContext,
): Promise<User[]> => {
  const users = await dbConnection.query('SELECT * FROM user');

  return users;
};

export const quackUser = async (
  parent: Quack,
  _: unknown,
  { dbConnection }: CustomContext,
): Promise<User> => {
  return (
    await dbConnection.query(`SELECT * FROM user WHERE id = ?`, [parent.userId])
  )[0];
};

export const signInResolver = async (
  _: unknown,
  { email, password }: MutationSignInArgs,
  { dbConnection }: CustomContext,
): Promise<AuthInfo> => {
  const dbResponse = await dbConnection.query(
    `SELECT * FROM user WHERE email = ?`,
    [email],
  );
  const user = dbResponse[0];
  if (await argon2.verify(user.password, password)) {
    const token = createToken({ id: user.id });

    return {
      user: { ...user },
      token,
    };
  } else {
    throw new Error('Unauthorized.');
  }
};

export const signUpResolver = async (
  _: unknown,
  {
    email,
    password,
    name,
    userName,
    profileImageUrl = 'http://mrmrs.github.io/photos/p/1.jpg',
  }: MutationSignUpArgs,
  { dbConnection }: CustomContext,
): Promise<AuthInfo> => {
  const userByUserName = (
    await dbConnection.query(`SELECT * FROM user WHERE userName = ?`, [
      userName,
    ])
  )[0];

  if (userByUserName) {
    throw new Error('Username already taken');
  }

  const userByEmail = (
    await dbConnection.query(`SELECT * FROM user WHERE email = ?`, [email])
  )[0];

  if (userByEmail) {
    throw new Error('Email already registered');
  }

  const passwordHash = await argon2.hash(password);

  const dbResponse = await dbConnection.query(
    `INSERT INTO user (id, email, password, name, userName, profileImageUrl) 
    VALUES (NULL, ?, ?, ?, ?, ?);`,
    [email, passwordHash, name, userName, profileImageUrl],
  );

  const token = createToken({ id: dbResponse.insertId });

  const userObject = {
    id: dbResponse.insertId,
    email,
    name: name,
    userName: userName,
    profileImageUrl: profileImageUrl,
  };

  return { user: userObject, token: token };
};
