/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      emailVerified
      disabled
      givenName
      familyName
      image
      role
      group
      currentPosition
      description
      ratings {
        items {
          id
          stars
          createdAt
          updatedAt
          userRatingsId
          postRatingsId
        }
        nextToken
      }
      posts {
        items {
          id
          name
          topic
          content
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        nextToken
      }
      ownedChannels {
        items {
          id
          name
          topics
          disabled
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        nextToken
      }
      subscriptions {
        items {
          id
          userID
          channelID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      participantChannels {
        items {
          id
          userID
          channelID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      channel {
        id
        name
        topics
        disabled
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      ratings {
        items {
          id
          stars
          createdAt
          updatedAt
          userRatingsId
          postRatingsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        topic
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        content
        channel {
          id
          name
          topics
          disabled
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        ratings {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        channelPostsId
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      topics
      disabled
      owner {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      subscribers {
        items {
          id
          userID
          channelID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      participants {
        items {
          id
          userID
          channelID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      description
      image
      posts {
        items {
          id
          name
          topic
          content
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userOwnedChannelsId
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        topics
        disabled
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      user {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        name
        topic
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        content
        channel {
          id
          name
          topics
          disabled
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        ratings {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        channelPostsId
      }
      stars
      createdAt
      updatedAt
      userRatingsId
      postRatingsId
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        post {
          id
          name
          topic
          content
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        stars
        createdAt
        updatedAt
        userRatingsId
        postRatingsId
      }
      nextToken
    }
  }
`;
export const getSubscriptionsSubscribers = /* GraphQL */ `
  query GetSubscriptionsSubscribers($id: ID!) {
    getSubscriptionsSubscribers(id: $id) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      channel {
        id
        name
        topics
        disabled
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSubscriptionsSubscribers = /* GraphQL */ `
  query ListSubscriptionsSubscribers(
    $filter: ModelSubscriptionsSubscribersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionsSubscribers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        channelID
        user {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        channel {
          id
          name
          topics
          disabled
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUsersParticipantChannels = /* GraphQL */ `
  query GetUsersParticipantChannels($id: ID!) {
    getUsersParticipantChannels(id: $id) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        disabled
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        ratings {
          nextToken
        }
        posts {
          nextToken
        }
        ownedChannels {
          nextToken
        }
        subscriptions {
          nextToken
        }
        participantChannels {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      channel {
        id
        name
        topics
        disabled
        owner {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsersParticipantChannels = /* GraphQL */ `
  query ListUsersParticipantChannels(
    $filter: ModelUsersParticipantChannelsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersParticipantChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        channelID
        user {
          id
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
          currentPosition
          description
          createdAt
          updatedAt
          owner
        }
        channel {
          id
          name
          topics
          disabled
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
