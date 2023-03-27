export const mainInfoArticleQuery = `query Articles {
    articles(last: 1) {
        id
        title
        slug
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
      slug
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
  articles {
    id 
    title
    slug
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

export const articleIdQuery = `query Article($slug: String) {
  article(where: {slug: $slug}) {
    id
    title
    image {
        url
    }
    shortDescription
    body {
        html
    }
    author {
        name
        image {
            url
        }
    }
  }
}`;

export const otherArticlesQuery = `query Articles {
   articles(first: 4) {
     id
     title
     readTime
     image {
        url
     }
     author {
        name 
        image {
            url
        }
     }
   }
}`;