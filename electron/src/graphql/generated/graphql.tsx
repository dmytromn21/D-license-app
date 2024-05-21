import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum LicenseType {
  A = 'A',
  B = 'B'
}

export type Mutation = {
  __typename?: 'Mutation';
  submitData?: Maybe<User>;
};


export type MutationSubmitDataArgs = {
  input?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  countUsers: Scalars['Int'];
  countUsersByDay: Array<UserByDay>;
  getUsers: Array<User>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  cin: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  licenseType: LicenseType;
  name: Scalars['String'];
  phone: Scalars['String'];
  role: Role;
  score: Scalars['Int'];
};

export type UserByDay = {
  __typename?: 'UserByDay';
  _id: Scalars['String'];
  count: Scalars['Int'];
};

export type UserInput = {
  cin: Scalars['String'];
  email: Scalars['String'];
  licenseType: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  score: Scalars['Int'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', countUsers: number, getUsers: Array<{ __typename?: 'User', id: string, name: string, email: string, phone: string, cin: string, licenseType: LicenseType, role: Role, score: number, createdAt: string }>, countUsersByDay: Array<{ __typename?: 'UserByDay', _id: string, count: number }> };


export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    name
    email
    phone
    cin
    licenseType
    role
    score
    createdAt
  }
  countUsers
  countUsersByDay {
    _id
    count
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;