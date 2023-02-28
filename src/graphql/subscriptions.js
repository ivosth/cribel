/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      email
      emailVerified
      givenName
      familyName
      image
      role
      group
      currentPosition
      description
      postsRating {
        items {
          postID
          stars
          id
          createdAt
          updatedAt
          userPostsRatingId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          name
          topic
          content
          ratings
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      email
      emailVerified
      givenName
      familyName
      image
      role
      group
      currentPosition
      description
      postsRating {
        items {
          postID
          stars
          id
          createdAt
          updatedAt
          userPostsRatingId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          name
          topic
          content
          ratings
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      email
      emailVerified
      givenName
      familyName
      image
      role
      group
      currentPosition
      description
      postsRating {
        items {
          postID
          stars
          id
          createdAt
          updatedAt
          userPostsRatingId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          name
          topic
          content
          ratings
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
      ratings
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
      ratings
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
      ratings
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
          ratings
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
          ratings
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
          ratings
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
export const onCreatePostsRating = /* GraphQL */ `
  subscription OnCreatePostsRating($owner: String) {
    onCreatePostsRating(owner: $owner) {
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
      postID
      stars
      id
      createdAt
      updatedAt
      userPostsRatingId
      owner
    }
  }
`;
export const onUpdatePostsRating = /* GraphQL */ `
  subscription OnUpdatePostsRating($owner: String) {
    onUpdatePostsRating(owner: $owner) {
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
      postID
      stars
      id
      createdAt
      updatedAt
      userPostsRatingId
      owner
    }
  }
`;
export const onDeletePostsRating = /* GraphQL */ `
  subscription OnDeletePostsRating($owner: String) {
    onDeletePostsRating(owner: $owner) {
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
      postID
      stars
      id
      createdAt
      updatedAt
      userPostsRatingId
      owner
    }
  }
`;
export const onCreateSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnCreateSubscriptionsSubscribers($owner: String) {
    onCreateSubscriptionsSubscribers(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
export const onUpdateSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnUpdateSubscriptionsSubscribers($owner: String) {
    onUpdateSubscriptionsSubscribers(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
export const onDeleteSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnDeleteSubscriptionsSubscribers($owner: String) {
    onDeleteSubscriptionsSubscribers(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
export const onCreateUsersParticipantChannels = /* GraphQL */ `
  subscription OnCreateUsersParticipantChannels($owner: String) {
    onCreateUsersParticipantChannels(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
export const onUpdateUsersParticipantChannels = /* GraphQL */ `
  subscription OnUpdateUsersParticipantChannels($owner: String) {
    onUpdateUsersParticipantChannels(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
export const onDeleteUsersParticipantChannels = /* GraphQL */ `
  subscription OnDeleteUsersParticipantChannels($owner: String) {
    onDeleteUsersParticipantChannels(owner: $owner) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        givenName
        familyName
        image
        role
        group
        currentPosition
        description
        postsRating {
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
        owner {
          id
          email
          emailVerified
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
