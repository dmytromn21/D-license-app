import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input UserInput {
    name: String!
    email: String!
    phone: String!
    cin: String!
    score: Int!
    licenseType: String!
  }

  enum Role {
    USER
    ADMIN
  }
  enum LicenseType {
    A
    B
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    cin: String!
    licenseType: LicenseType!
    role: Role!
    score: Int!
    createdAt: String!
  }

  type Query {
    Users: [User!]!
  }

  type Mutation {
    submitData(input: UserInput): User
  }
`;
