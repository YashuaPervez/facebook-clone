/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreatePostInputs: { // input type
    image?: NexusGenScalars['Upload'] | null; // Upload
    title: string; // String!
  }
  LoginUserInputs: { // input type
    email: string; // String!
    password: string; // String!
  }
  SignupUserInputs: { // input type
    email: string; // String!
    password: string; // String!
    username: string; // String!
  }
  UpdateProfileInput: { // input type
    about?: string | null; // String
    displayName?: string | null; // String
    imageURL?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Upload: any
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    createdAt: string; // String!
    id: number; // Int!
    imageURL?: string | null; // String
    title: string; // String!
    updatedAt: string; // String!
  }
  Profile: { // root type
    about?: string | null; // String
    displayName: string; // String!
    imageURL?: string | null; // String
  }
  Query: {};
  User: { // root type
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    updatedAt: string; // String!
    username: string; // String!
  }
  UserWithToken: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post']; // Post!
    login: NexusGenRootTypes['UserWithToken']; // UserWithToken!
    logout: string; // String!
    signup: NexusGenRootTypes['UserWithToken']; // UserWithToken!
    updateCoverImage: string; // String!
    updateProfile: NexusGenRootTypes['User']; // User!
    updateProfilePicture: string; // String!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    createdAt: string; // String!
    id: number; // Int!
    imageURL: string | null; // String
    title: string; // String!
    updatedAt: string; // String!
  }
  Profile: { // field return type
    about: string | null; // String
    displayName: string; // String!
    imageURL: string | null; // String
  }
  Query: { // field return type
    getUserById: NexusGenRootTypes['User']; // User!
    getUserByUsername: NexusGenRootTypes['User']; // User!
    searchUsers: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    profile: NexusGenRootTypes['Profile']; // Profile!
    updatedAt: string; // String!
    username: string; // String!
    wallPosts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
  UserWithToken: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createPost: 'Post'
    login: 'UserWithToken'
    logout: 'String'
    signup: 'UserWithToken'
    updateCoverImage: 'String'
    updateProfile: 'User'
    updateProfilePicture: 'String'
  }
  Post: { // field return type name
    author: 'User'
    createdAt: 'String'
    id: 'Int'
    imageURL: 'String'
    title: 'String'
    updatedAt: 'String'
  }
  Profile: { // field return type name
    about: 'String'
    displayName: 'String'
    imageURL: 'String'
  }
  Query: { // field return type name
    getUserById: 'User'
    getUserByUsername: 'User'
    searchUsers: 'User'
  }
  User: { // field return type name
    createdAt: 'String'
    email: 'String'
    id: 'Int'
    profile: 'Profile'
    updatedAt: 'String'
    username: 'String'
    wallPosts: 'Post'
  }
  UserWithToken: { // field return type name
    token: 'String'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      data: NexusGenInputs['CreatePostInputs']; // CreatePostInputs!
    }
    login: { // args
      data: NexusGenInputs['LoginUserInputs']; // LoginUserInputs!
    }
    signup: { // args
      data: NexusGenInputs['SignupUserInputs']; // SignupUserInputs!
    }
    updateCoverImage: { // args
      image: NexusGenScalars['Upload']; // Upload!
    }
    updateProfile: { // args
      data: NexusGenInputs['UpdateProfileInput']; // UpdateProfileInput!
    }
    updateProfilePicture: { // args
      image: NexusGenScalars['Upload']; // Upload!
    }
  }
  Query: {
    getUserById: { // args
      userId: number; // Int!
    }
    getUserByUsername: { // args
      username: string; // String!
    }
    searchUsers: { // args
      pageNo: number; // Int!
      query: string; // String!
      resultsPerPage: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}