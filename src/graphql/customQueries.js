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
          channel {
            name
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
          user {
              familyName
              givenName
            }
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
          owner {
            familyName
            givenName
            image
          }
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
          givenName
          familyName
          image
          role
          group
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
        nextToken
      }
    }
  `;
