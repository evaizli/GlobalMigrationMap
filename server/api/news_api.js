const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f90c589cb0b84e28b26d4c61173dae45');


const allNews = newsapi.v2.everything({
    sources: 'bbc-news,the-verge',
    q: 'wage',
    language: 'en',
    sortBy: 'popularity',
   
    }).then(res => {
        const articles = res.articles;
        const ul = document.createElement("ul");

        for (let i = 0; i < articles.length; i++) {
            const title = articles[i].title;
            const url = articles[i].url;
            const li = document.createElement('li');
            li.innerHTML = "<a href='" + url + "'>'" + title + "'</a>" ;
            ul.appendChild(li);
        }
        document.getElementById("wages_news").appendChild(ul);
        return articles;
   
    })
    .catch(err => { 
        console.log(err);
    });

    export default allNews;