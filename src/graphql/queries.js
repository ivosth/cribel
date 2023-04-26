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
        notifications {
          nextToken
        }
        createdAt
        updatedAt
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
      nextToken
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $typePostsByDate: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      typePostsByDate: $typePostsByDate
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const postsByRating = /* GraphQL */ `
  query PostsByRating(
    $typePostsByRating: String!
    $avgRating: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByRating(
      typePostsByRating: $typePostsByRating
      avgRating: $avgRating
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const channelsByDate = /* GraphQL */ `
  query ChannelsByDate(
    $typeChannelsByDate: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelsByDate(
      typeChannelsByDate: $typeChannelsByDate
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const channelsByRating = /* GraphQL */ `
  query ChannelsByRating(
    $typeChannelsByRating: String!
    $avgRating: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelsByRating(
      typeChannelsByRating: $typeChannelsByRating
      avgRating: $avgRating
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscriptionsSubscribers = /* GraphQL */ `
  query GetSubscriptionsSubscribers($id: ID!) {
    getSubscriptionsSubscribers(id: $id) {
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
        }
        createdAt
        updatedAt
        userSubscriptionsId
        channelSubscribersId
      }
      nextToken
    }
  }
`;
export const getUsersParticipantChannels = /* GraphQL */ `
  query GetUsersParticipantChannels($id: ID!) {
    getUsersParticipantChannels(id: $id) {
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
        }
        createdAt
        updatedAt
        userParticipantChannelsId
        channelParticipantsId
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
        }
        post {
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
export const getChannelNotification = /* GraphQL */ `
  query GetChannelNotification($id: ID!) {
    getChannelNotification(id: $id) {
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
export const listChannelNotifications = /* GraphQL */ `
  query ListChannelNotifications(
    $filter: ModelChannelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannelNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        type
        message
        typeChannelNotificationsByDate
        createdAt
        updatedAt
        channelNotificationsId
      }
      nextToken
    }
  }
`;
export const channelNotificationsByDate = /* GraphQL */ `
  query ChannelNotificationsByDate(
    $typeChannelNotificationsByDate: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChannelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelNotificationsByDate(
      typeChannelNotificationsByDate: $typeChannelNotificationsByDate
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        type
        message
        typeChannelNotificationsByDate
        createdAt
        updatedAt
        channelNotificationsId
      }
      nextToken
    }
  }
`;
export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
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
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const userNotificationsByDate = /* GraphQL */ `
  query UserNotificationsByDate(
    $typeUserNotificationsByDate: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotificationsByDate(
      typeUserNotificationsByDate: $typeUserNotificationsByDate
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
