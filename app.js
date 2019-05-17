import loadMap from "./map/loadMap";
import selectNews from "./server/api/news_api";



document.addEventListener("DOMContentLoaded", () => {
    loadMap();

    selectNews("wage");
    let selectCategory = document.getElementById("category");
    selectCategory.addEventListener("change", (event) => {
        selectNews(event.target.value);
    });

});

