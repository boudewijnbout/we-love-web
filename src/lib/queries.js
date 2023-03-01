export const mainInfoArticleQuery = `query Articles {
    articles(last: 1) {
        id
        title
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
}` 