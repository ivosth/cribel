export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      emailVerified
      givenName
      familyName
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
          channel {
            name
          }
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
          rol
          group
          createdAt
          updatedAt
          userPhotoId
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
        nextToken
      }
    }
  `;
