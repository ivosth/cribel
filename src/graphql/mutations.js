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
          avgRating
          typePostsByDate
          typePostsByRating
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
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        nextToken
      }
      subscriptions {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participantChannels {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
        }
        nextToken
      }
      notifications {
        items {
          id
          type
          message
          channelID
          channelName
          typeUserNotificationsByDate
          createdAt
          updatedAt
          userNotificationsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          avgRating
          typePostsByDate
          typePostsByRating
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
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        nextToken
      }
      subscriptions {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participantChannels {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
        }
        nextToken
      }
      notifications {
        items {
          id
          type
          message
          channelID
          channelName
          typeUserNotificationsByDate
          createdAt
          updatedAt
          userNotificationsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          avgRating
          typePostsByDate
          typePostsByRating
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
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        nextToken
      }
      subscriptions {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participantChannels {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
        }
        nextToken
      }
      notifications {
        items {
          id
          type
          message
          channelID
          channelName
          typeUserNotificationsByDate
          createdAt
          updatedAt
          userNotificationsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      avgRating
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
      typePostsByDate
      typePostsByRating
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      avgRating
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
      typePostsByDate
      typePostsByRating
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      avgRating
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
      typePostsByDate
      typePostsByRating
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
      disabled
      avgRating
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscribers {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participants {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
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
          avgRating
          typePostsByDate
          typePostsByRating
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        nextToken
      }
      typeChannelsByDate
      typeChannelsByRating
      createdAt
      notifications {
        items {
          id
          type
          message
          typeChannelNotificationsByDate
          createdAt
          updatedAt
          channelNotificationsId
        }
        nextToken
      }
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
      disabled
      avgRating
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscribers {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participants {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
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
          avgRating
          typePostsByDate
          typePostsByRating
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        nextToken
      }
      typeChannelsByDate
      typeChannelsByRating
      createdAt
      notifications {
        items {
          id
          type
          message
          typeChannelNotificationsByDate
          createdAt
          updatedAt
          channelNotificationsId
        }
        nextToken
      }
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
      disabled
      avgRating
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscribers {
        items {
          id
          createdAt
          updatedAt
          userSubscriptionsId
          channelSubscribersId
        }
        nextToken
      }
      participants {
        items {
          id
          createdAt
          updatedAt
          userParticipantChannelsId
          channelParticipantsId
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
          avgRating
          typePostsByDate
          typePostsByRating
          createdAt
          updatedAt
          userPostsId
          channelPostsId
        }
        nextToken
      }
      typeChannelsByDate
      typeChannelsByRating
      createdAt
      notifications {
        items {
          id
          type
          message
          typeChannelNotificationsByDate
          createdAt
          updatedAt
          channelNotificationsId
        }
        nextToken
      }
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userSubscriptionsId
      channelSubscribersId
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userSubscriptionsId
      channelSubscribersId
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userSubscriptionsId
      channelSubscribersId
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userParticipantChannelsId
      channelParticipantsId
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userParticipantChannelsId
      channelParticipantsId
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
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userParticipantChannelsId
      channelParticipantsId
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        content
        channel {
          id
          name
          topics
          disabled
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        avgRating
        ratings {
          nextToken
        }
        typePostsByDate
        typePostsByRating
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        content
        channel {
          id
          name
          topics
          disabled
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        avgRating
        ratings {
          nextToken
        }
        typePostsByDate
        typePostsByRating
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        content
        channel {
          id
          name
          topics
          disabled
          avgRating
          description
          image
          typeChannelsByDate
          typeChannelsByRating
          createdAt
          updatedAt
          userOwnedChannelsId
        }
        avgRating
        ratings {
          nextToken
        }
        typePostsByDate
        typePostsByRating
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
export const createChannelNotification = /* GraphQL */ `
  mutation CreateChannelNotification(
    $input: CreateChannelNotificationInput!
    $condition: ModelChannelNotificationConditionInput
  ) {
    createChannelNotification(input: $input, condition: $condition) {
      id
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      type
      message
      typeChannelNotificationsByDate
      createdAt
      updatedAt
      channelNotificationsId
    }
  }
`;
export const updateChannelNotification = /* GraphQL */ `
  mutation UpdateChannelNotification(
    $input: UpdateChannelNotificationInput!
    $condition: ModelChannelNotificationConditionInput
  ) {
    updateChannelNotification(input: $input, condition: $condition) {
      id
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      type
      message
      typeChannelNotificationsByDate
      createdAt
      updatedAt
      channelNotificationsId
    }
  }
`;
export const deleteChannelNotification = /* GraphQL */ `
  mutation DeleteChannelNotification(
    $input: DeleteChannelNotificationInput!
    $condition: ModelChannelNotificationConditionInput
  ) {
    deleteChannelNotification(input: $input, condition: $condition) {
      id
      channel {
        id
        name
        topics
        disabled
        avgRating
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
        typeChannelsByDate
        typeChannelsByRating
        createdAt
        notifications {
          nextToken
        }
        updatedAt
        userOwnedChannelsId
      }
      type
      message
      typeChannelNotificationsByDate
      createdAt
      updatedAt
      channelNotificationsId
    }
  }
`;
export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      message
      channelID
      channelName
      typeUserNotificationsByDate
      createdAt
      updatedAt
      userNotificationsId
    }
  }
`;
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      message
      channelID
      channelName
      typeUserNotificationsByDate
      createdAt
      updatedAt
      userNotificationsId
    }
  }
`;
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      message
      channelID
      channelName
      typeUserNotificationsByDate
      createdAt
      updatedAt
      userNotificationsId
    }
  }
`;
export const changeUserGroup = /* GraphQL */ `
  mutation ChangeUserGroup($id: ID!, $group: Group!) {
    changeUserGroup(id: $id, group: $group)
  }
`;
export const changeUserStatus = /* GraphQL */ `
  mutation ChangeUserStatus($id: ID!, $disable: Boolean!) {
    changeUserStatus(id: $id, disable: $disable)
  }
`;
