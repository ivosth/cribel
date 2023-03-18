export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      ratings {
        items {
          id
          stars
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
          channel {
            name
            image
          }
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
          channel {
            name
            topics
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

export const getProfile = /* GraphQL */ `
  query getProfile($id: ID!) {
    getUser(id: $id) {
      id
      email
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
          topics
          description
          image
          createdAt
          updatedAt
          userOwnedChannelsId
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
          channel {
            name
          }
        }
        nextToken
      }
      createdAt
      updatedAt
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
        email
        emailVerified
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
      updatedAt
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
          owner
        }
        subscribers {
          items {
            user {
              id
              email
            }
          }
        }
        participants {
          items {
            user {
              id
              email
            }
          }
        }
        description
        image
        posts {
          items {
            id
            name
            content
            avgRating
            ratings {
              items {
                id
                postRatingsId
                userRatingsId
                stars
              }
            }
          }
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
          owner
        }
        subscribers {
          items {
            user {
              id
              email
            }
          }
        }
        participants {
          items {
            user {
              id
              email
            }
          }
        }
        description
        image
        posts {
          items {
            id
            name
            content
            avgRating
            ratings {
              items {
                id
                postRatingsId
                userRatingsId
                stars
              }
            }
          }
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
          owner
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
          items {
            id
            postRatingsId
            userRatingsId
            stars
          }
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
          owner
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
          items {
            id
            postRatingsId
            userRatingsId
            stars
          }
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
        owner {
          id
          email
          emailVerified
          role
          group
          createdAt
          updatedAt
          image
          owner
          familyName
          givenName
        }
        subscribers {
          items {
            user {
              id
              email
            }
          }
        }
        participants {
          items {
            user {
              id
              email
            }
          }
        }
        description
        image
        avgRating
        posts {
          items {
            id
            name
            content
            avgRating
            ratings {
              items {
                id
                postRatingsId
                userRatingsId
                stars
              }
            }
          }
        }
        createdAt
        updatedAt
        userOwnedChannelsId
      }
      nextToken
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
          description
          image
          avgRating
          createdAt
          updatedAt
          userOwnedChannelsId
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
        updatedAt
        userPostsId
        channelPostsId
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
          email
          emailVerified
          disabled
          givenName
          familyName
          image
          role
          group
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



export const getUserChannels = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      ownedChannels {
        items {
          id
          name
          topics
          userOwnedChannelsId
          disabled
        }
        nextToken
      }
      participantChannels {
        items {
          id
          channelID
          owner
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
