import gql from "graphql-tag";

export const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    getProjectById(id: $id) {
      title
      id
      daily {
        tasks {
          resource {
            title
            about
          }
          tags
        }
      }
      sources {
        heroes {
          name
          tags
          links {
            name: website
            url: urlLink
          }
        }
        streams {
          feedlyItems {
            id
            items {
              origin {
                title
                htmlUrl
              }
              webfeeds {
                logo
              }
              keywords
              title
              content {
                content
              }
              categories {
                label
              }
              visual {
                url
              }
              summary {
                content
              }
              label
              author
            }
          }
        }
      }
      resources {
        notebooks {
          id
          onenoteId
          resource: onenoteNotebook {
            name: displayName
            url: sectionsUrl
          }
          sections: onenoteSections {
            name: displayName
            url: sectionsUrl
          }
        }
        resources {
          name
          tags
          website
        }
        repos {
          info: githubRepo {
            name
            owner {
              login
              avatar_url
            }
            description
            url
            language
          }
          technologies
        }
      }

      weekly {
        boards {
          id
          cards: trelloCardsFromActiveList {
            title: name
            date: dueReminder
            description: desc
            labels {
              green
              yellow
              orange
              red
              purple
              blue
              sky
              lime
              pink
              black
            }
          }
          info: trelloBoard {
            name
            prefs {
              backgroundImage
            }
            url: shortUrl
          }
          list: trelloActiveList {
            name
          }
        }
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query {
    getAllProjects {
      id
      title
      description
      thumb
    }
  }
`;

export const GET_ALL_HEROS = gql`
  query {
    getAllHeroes {
      id
      tags
      name
      links {
        name: website
        url: urlLink
      }
    }
  }
`;

export const GET_GITHUB_REPOS = gql`
  query {
    getAllGithubRepos {
      language
      id
      description
      name
      owner {
        login
        avatar_url
      }
    }
  }
`;

export const GET_FEEDLY_STREAMS = gql`
  query {
    getFeedsFromFeedly {
      id
      label
    }
  }
`;

export const GET_ONENOTE_NOTEBOOKS = gql`
  query {
    getNotebooksFromOnenote {
      name: displayName
      id
    }
  }
`;

export const GET_ONENOTE_SECTIONS = gql`
  query GetOnenoteNotebook($notebookId: String!) {
    getSectionsFromOnenote(notebookId: $notebookId) {
      name: displayName
      id
    }
  }
`;
