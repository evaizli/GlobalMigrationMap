import loadMap from "./map/loadMap";
import allNews from "./server/api/news_api";


// function fetchNews(articles){
//     debugger
//     const ul = document.createElement("ul");

//     for (let i = 0; i < articles.length; i++) {
//         const article = articles[i];
//         var li = document.createElement('li');
//         li.innerHTML = article.title;
//         ul.appendChild(li);
//     }
//     document.getElementById("wages_news").appendChild(ul);
// }

document.addEventListener("DOMContentLoaded", () => {
    loadMap();
    // window.allNews = allNews;
    allNews;

});

