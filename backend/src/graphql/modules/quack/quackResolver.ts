import {
  MutationAddQuackArgs,
  MutationDeleteQuackArgs,
  Quack,
  User,
} from '../../../types/graphqlTypesGenerated';
import { CustomContext } from '../../../types/types';
import { GraphQLError } from 'graphql/error';

export const quacksResolver = async (
  _: unknown,
  __: unknown,
  { dbConnection }: CustomContext,
): Promise<Quack[]> => {
  const quacks = await dbConnection.query(`SELECT * FROM quack`);

  return quacks;
};

export const addQuackResolver = async (
  _: unknown,
  { userId, text }: MutationAddQuackArgs,
  { dbConnection }: CustomContext,
): Promise<Quack> => {
  const createdAt = new Date().toISOString();
  const dbResponse = await dbConnection.query(
    `INSERT INTO quack (id, createdAt, userId, text) 
    VALUES (NULL, ?, ?, ?);`,
    [createdAt, userId, text],
  );

  const quack = (
    await dbConnection.query(`SELECT * FROM quack WHERE id = ?`, [
      dbResponse.insertId,
    ])
  )[0];

  return quack;
};

export const deleteQuackResolver = async (
  _: unknown,
  { quackId }: MutationDeleteQuackArgs,
  { dbConnection }: CustomContext,
): Promise<string> => {
  if (!quackId) {
    throw new GraphQLError('Missing quack ID or user ID.');
  }

  const { affectedRows } = await dbConnection.query(
    `DELETE FROM quack WHERE id = ? `,
    [quackId],
  );

  if (affectedRows === 0) {
    throw new GraphQLError('Quack was not found.');
  }

  return 'Quack deleted successfully';
};

export const usersQuacks = async (
  parent: User,
  _: unknown,
  { dbConnection }: CustomContext,
): Promise<Quack[]> => {
  try {
    return await dbConnection.query(`SELECT * FROM quack WHERE userId = ?`, [
      parent.id,
    ]);
  } catch (err) {
    console.log('Could not get quacks for user: ' + parent.id);
    return [];
  }
};
