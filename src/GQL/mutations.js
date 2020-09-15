import gql from "graphql-tag";

export const GET_LOGIN = gql`
  mutation GetLogin($email: String!, $password: String!) {
    getLogin(input: { email: $email, password: $password }) {
      token
      usuario
    }
  }
`;

export const DELETE_RESOURCE = gql`
  mutation PullInProject($id: ID!, $target: String!, $resourceId: String!) {
    pullInProject(id: $id, target: $target, resourceId: $resourceId) {
      success
    }
  }
`;

export const NEW_PROJECT = gql`
  mutation CreateProject(
    $title: String!
    $description: String!
    $board: String!
    $repo: String!
  ) {
    createProject(
      input: {
        title: $title
        description: $description
        weekly: { boards: [$board] }
        resources: { repos: [$repo] }
      }
    ) {
      data {
        title
        description
        id
      }
    }
  }
`;

export const NEW_REPO = gql`
  mutation CreateRepo($githubId: String!) {
    createRepo(input: { githubId: $githubId }) {
      data {
        id
      }
    }
  }
`;

export const NEW_BOARD = gql`
  mutation CreateBoard($resourceid: String!, $activeList: String!) {
    createBoard(input: { resourceid: $resourceid, activeList: $activeList }) {
      data {
        id
      }
    }
  }
`;

export const PUSH_NEW_TASK = gql`
  mutation PushTaskIntoProject($id: ID!, $target: String!, $data: String!) {
    pushInProject(id: $id, data: $data, target: $target) {
      success
    }
  }
`;

export const NEW_TASK = gql`
  mutation CreatTask(
    $tags: [String!]
    $resource: resourceInput!
    $type: String
  ) {
    createTask(input: { tags: $tags, resource: $resource, type: $type }) {
      success
      data {
        id
      }
    }
  }
`;

export const NEW_HERO = gql`
  mutation CreateHero($name: String!, $tags: [String!], $links: [LinkInput!]) {
    createHeroe(input: { name: $name, tags: $tags, links: $links }) {
      data {
        id
      }
    }
  }
`;

export const NEW_STREAM = gql`
  mutation CreateStream($tags: [String!], $feedlyStreamsid: [String!]) {
    createStream(input: { feedlyStreamsid: $feedlyStreamsid, tags: $tags }) {
      data {
        id
      }
    }
  }
`;

export const PUSH_NEW_SOURCE = gql`
  mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {
    pushInProject(id: $id, data: $data, target: $target) {
      success
    }
  }
`;

export const NEW_RESOURCE = gql`
  mutation CreateResource($website: String!, $name: String!, $tags: [String!]) {
    createResource(input: { website: $website, name: $name, tags: $tags }) {
      data {
        id
      }
    }
  }
`;

export const NEW_NOTEBOOK = gql`
  mutation CreateNotebook(
    $sections: [String!]
    $onenoteId: ID!
    $tags: [String!]
  ) {
    createNotebook(
      input: { sections: $sections, onenoteId: $onenoteId, tags: $tags }
    ) {
      data {
        id
      }
    }
  }
`;

export const PUSH_NEW_RESOURCE = gql`
  mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {
    pushInProject(id: $id, data: $data, target: $target) {
      success
    }
  }
`;
