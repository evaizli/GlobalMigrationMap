import newsapi from "../newsApi";

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('f90c589cb0b84e28b26d4c61173dae45');

const selectNews = newsCategory => {
  return newsapi.v2
    .everything({
      sources:
        "abc-news,bbc-news,al-jazeera-english,google-news,the-new-york-times,the-verge,time,usa-today,the-washington-post",
      q: newsCategory,
      language: "en",
      sortBy: "popularity"
    })
    .then(res => {
      const articles = res.articles;
      const ul = document.getElementById("news-ul");
      ul.innerHTML = "";
      for (let i = 0; i < articles.length; i++) {
        const title = articles[i].title;
        const url = articles[i].url;
        const li = document.createElement("li");
        li.innerHTML = "<a href='" + url + "'>'" + title + "'</a>";
        ul.appendChild(li);
      }
      return articles;
    })
    .catch(err => {
      console.log(err);
    });
};

export default selectNews;
