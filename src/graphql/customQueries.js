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