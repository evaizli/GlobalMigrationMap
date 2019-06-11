// import loadMap from "./map/loadMap";
import createMap from "./map/map";
import selectNews from "./server/api/news_api";



document.addEventListener("DOMContentLoaded", () => {
    
    selectNews("wage");
    let selectCategory = document.getElementById("category");
    selectCategory.addEventListener("change", (event) => {
        selectNews(event.target.value);
    });
    createMap();

});

