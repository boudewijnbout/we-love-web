export const mainInfoArticleQuery = `query Articles {
    articles(last: 1) {
        id
        title
        readTime
        image {
            url
        }
        author {
            image {
              url
            }
            name
          }
    }
}`;

export const mainArticleQuery = `query Articles {
  articles(last: 1, skip:1) {
      id
      title
      readTime
      image {
        url
      }
      author {
        image {
          url
        }
        name
      }
  }
}`;

export const articlesQuery = `query Articles {
  articles(last: 2, skip: 2) {
    id 
    title
    readTime
    image {
      url
    }
    author {
      image {
        url
      }
      name
    }
  }
}`;
