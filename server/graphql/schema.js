import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    profilePicture: String
  }

  type Symptom {
    description: String!
    severity: String!
  }

  type SymptomLog {
    id: ID!
    symptoms: [Symptom!]!
    aiAdvice: String!
    createdAt: String!
    userId: String!
  }

  type Query {
    user(id: ID!): User
    symptomHistory(userId: ID!, page: Int, limit: Int): [SymptomLog!]!
  }

  type Mutation {
    checkSymptoms(symptoms: [SymptomInput!]!): SymptomLog
  }

  input SymptomInput {
    description: String!
    severity: String!
  }
`;

export default typeDefs;
