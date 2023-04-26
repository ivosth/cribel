/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onCreateChannel(filter: $filter) {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onUpdateChannel(filter: $filter) {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel($filter: ModelSubscriptionChannelFilterInput) {
    onDeleteChannel(filter: $filter) {
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
export const onCreateSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnCreateSubscriptionsSubscribers(
    $filter: ModelSubscriptionSubscriptionsSubscribersFilterInput
  ) {
    onCreateSubscriptionsSubscribers(filter: $filter) {
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
export const onUpdateSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnUpdateSubscriptionsSubscribers(
    $filter: ModelSubscriptionSubscriptionsSubscribersFilterInput
  ) {
    onUpdateSubscriptionsSubscribers(filter: $filter) {
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
export const onDeleteSubscriptionsSubscribers = /* GraphQL */ `
  subscription OnDeleteSubscriptionsSubscribers(
    $filter: ModelSubscriptionSubscriptionsSubscribersFilterInput
  ) {
    onDeleteSubscriptionsSubscribers(filter: $filter) {
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
export const onCreateUsersParticipantChannels = /* GraphQL */ `
  subscription OnCreateUsersParticipantChannels(
    $filter: ModelSubscriptionUsersParticipantChannelsFilterInput
  ) {
    onCreateUsersParticipantChannels(filter: $filter) {
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
export const onUpdateUsersParticipantChannels = /* GraphQL */ `
  subscription OnUpdateUsersParticipantChannels(
    $filter: ModelSubscriptionUsersParticipantChannelsFilterInput
  ) {
    onUpdateUsersParticipantChannels(filter: $filter) {
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
export const onDeleteUsersParticipantChannels = /* GraphQL */ `
  subscription OnDeleteUsersParticipantChannels(
    $filter: ModelSubscriptionUsersParticipantChannelsFilterInput
  ) {
    onDeleteUsersParticipantChannels(filter: $filter) {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
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
export const onCreateChannelNotification = /* GraphQL */ `
  subscription OnCreateChannelNotification(
    $filter: ModelSubscriptionChannelNotificationFilterInput
  ) {
    onCreateChannelNotification(filter: $filter) {
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
export const onUpdateChannelNotification = /* GraphQL */ `
  subscription OnUpdateChannelNotification(
    $filter: ModelSubscriptionChannelNotificationFilterInput
  ) {
    onUpdateChannelNotification(filter: $filter) {
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
export const onDeleteChannelNotification = /* GraphQL */ `
  subscription OnDeleteChannelNotification(
    $filter: ModelSubscriptionChannelNotificationFilterInput
  ) {
    onDeleteChannelNotification(filter: $filter) {
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
export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onCreateUserNotification(filter: $filter) {
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
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onUpdateUserNotification(filter: $filter) {
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
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onDeleteUserNotification(filter: $filter) {
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
