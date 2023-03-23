export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      image
      role
      group
      currentPosition
      description
      ownedChannels {
        items {
          id
          name
        }
        nextToken
      }
      subscriptions {
        items {
          id
          channelID
          channel {
            name
            image
          }
        }
        nextToken
      }
      participantChannels {
        items {
          channelID
          channel {
            name
          }
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;

export const getProfile = /* GraphQL */ `
  query getProfile($id: ID!) {
    getUser(id: $id) {
      givenName
      familyName
      currentPosition
      description
      image
      role
      group
      ownedChannels {
        items {
          id
          name
        }
        nextToken
      }
      participantChannels {
        items {
          channelID
          channel {
            name
          }
        }
        nextToken
      }
      owner
    }
  }
`;

export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      topics
      owner {
        id
        givenName
        familyName
      }
      subscribers {
        items {
          id
        }
        nextToken
      }
      participants {
        items {
          id
          userID
          user {
              familyName
              givenName
            }
        }
        nextToken
      }
      avgRating
      description
      image
      createdAt
      userOwnedChannelsId
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
        avgRating
        owner {
          id
          givenName
          familyName
          image
        }
        subscribers {
          items {
            id
          }
        }
        participants {
          items {
            id
          }
        }
        description
        image
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
        avgRating
        owner {
          id
          givenName
          familyName
          image
        }
        subscribers {
          items {
            id
          }
        }
        participants {
          items {
            id
          }
        }
        description
        image
        updatedAt
        userOwnedChannelsId
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
          givenName
          familyName
          image
        }
        content
        channel {
          id
          name
        }
        avgRating
        ratings {
          items {
            id
            postRatingsId
            userRatingsId
            stars
          }
        }
        createdAt
        userPostsId
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
          givenName
          familyName
          image
        }
        content
        channel {
          id
          name
        }
        avgRating
        ratings {
          items {
            id
            postRatingsId
            userRatingsId
            stars
          }
        }
        createdAt
        userPostsId
      }
      nextToken
    }
  }
`;


export const listUsersWithFilters = /* GraphQL */ `
      query ListUsersWithFilters(
      $filter: ModelUserFilterInput
      $limit: Int
      $nextToken: String

    ) {
      listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          givenName
          familyName
          role
          disabled
        }
        nextToken
      }
    }
  `;



export const getUserChannels = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      ownedChannels {
        items {
          id
          name
          topics
          disabled
        }
        nextToken
      }
      participantChannels {
        items {
          id
          channelID
          channel {
            name
            topics
            disabled
          }
        }
        nextToken
      }
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
          name
        }
        type
        message
        createdAt
        channelNotificationsId
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
        type
        message
        channelID
        channelName
        createdAt
      }
      nextToken
    }
  }
`;