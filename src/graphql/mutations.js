/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      emailVerified
      photo {
        bucket
        region
        key
        id
        createdAt
        updatedAt
      }
      rol
      group
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
      userPhotoId
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      emailVerified
      photo {
        bucket
        region
        key
        id
        createdAt
        updatedAt
      }
      rol
      group
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
      userPhotoId
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      emailVerified
      photo {
        bucket
        region
        key
        id
        createdAt
        updatedAt
      }
      rol
      group
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
      userPhotoId
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      ranking
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      ranking
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      name
      topic
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
        posts {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      ranking
      createdAt
      updatedAt
      userPostsId
      channelPostsId
    }
  }
`;
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
      id
      name
      topics
      owner {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
      posts {
        items {
          id
          name
          topic
          content
          ranking
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
export const createSubscriptionsSubscribers = /* GraphQL */ `
  mutation CreateSubscriptionsSubscribers(
    $input: CreateSubscriptionsSubscribersInput!
    $condition: ModelSubscriptionsSubscribersConditionInput
  ) {
    createSubscriptionsSubscribers(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
export const updateSubscriptionsSubscribers = /* GraphQL */ `
  mutation UpdateSubscriptionsSubscribers(
    $input: UpdateSubscriptionsSubscribersInput!
    $condition: ModelSubscriptionsSubscribersConditionInput
  ) {
    updateSubscriptionsSubscribers(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
export const deleteSubscriptionsSubscribers = /* GraphQL */ `
  mutation DeleteSubscriptionsSubscribers(
    $input: DeleteSubscriptionsSubscribersInput!
    $condition: ModelSubscriptionsSubscribersConditionInput
  ) {
    deleteSubscriptionsSubscribers(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
export const createUsersParticipantChannels = /* GraphQL */ `
  mutation CreateUsersParticipantChannels(
    $input: CreateUsersParticipantChannelsInput!
    $condition: ModelUsersParticipantChannelsConditionInput
  ) {
    createUsersParticipantChannels(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
export const updateUsersParticipantChannels = /* GraphQL */ `
  mutation UpdateUsersParticipantChannels(
    $input: UpdateUsersParticipantChannelsInput!
    $condition: ModelUsersParticipantChannelsConditionInput
  ) {
    updateUsersParticipantChannels(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
export const deleteUsersParticipantChannels = /* GraphQL */ `
  mutation DeleteUsersParticipantChannels(
    $input: DeleteUsersParticipantChannelsInput!
    $condition: ModelUsersParticipantChannelsConditionInput
  ) {
    deleteUsersParticipantChannels(input: $input, condition: $condition) {
      id
      userID
      channelID
      user {
        id
        email
        emailVerified
        photo {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        rol
        group
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
        userPhotoId
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
          owner
        }
        subscribers {
          nextToken
        }
        participants {
          nextToken
        }
        description
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
