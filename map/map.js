import dataString from "../data/csv.js";
import csvToJsonFunction from "../data/data";

function createMap() {
    const migrantData = csvToJsonFunction(dataString);
    const offsetHeight = document.getElementById("basic_choropleth").offsetHeight;
    const offsetWidth = document.getElementById("basic_choropleth").offsetWidth;
    // debugger
    let map =  new Datamap({
        element: document.getElementById("basic_choropleth"),
        responsive: true,
        height: offsetHeight,
        width: offsetWidth*(.90),
        fills: {
            EXTREME: "#ff6666",
            HIGH:"#FFCCCC",
            MEDIUM:"#ABDDA4",
            LOW: "#E5FFCC",
            defaultFill: "#A0A0A0"
        },
        data: migrantData,
        geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
                return ['<div class="hoverinfo">', 
                        '<b>' + geography.properties.name, "</b><br/>" +
                        '<br/><b> Est. Annual Avg:</b> ' + data.avg, " M<br/>" + 
                        '<br/><b> 1990:</b> ' + (data.M1990/1000000).toFixed(2), " M<br/>" + 
                        '<br/><b> 1995:</b> ' + (data.M1995 / 1000000).toFixed(2), " M <br/>" + 
                        '<br/><b>  2000:</b> ' + (data.M2000 / 1000000).toFixed(2), " M <br/>" + 
                        '<br/><b>  2005:</b> ' + (data.M2005 / 1000000).toFixed(2), " M <br/>" + 
                        '<br/><b>  2010:</b> ' + (data.M2010 / 1000000).toFixed(2), " M <br/>" + 
                        '<br/><b>  2015:</b> ' + (data.M2015 / 1000000).toFixed(2), " M<br/>" + 
                        '<br/><b>  2017:</b> ' + (data.M2017 / 1000000).toFixed(2), " M <br/>" +
                        '</div > '].join('');
            },
            highlightBorderWidth: 3,
        },
    });
    window.addEventListener("resize", () =>{
        map.resize();
    });
}


export default createMap;
