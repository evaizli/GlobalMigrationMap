import dataString from "../data/csv.js";
import csvToJsonFunction from "../data/data";


const migrantData = csvToJsonFunction(dataString);
// console.log(migrantData);



function createMap() {

    return new Datamap({
        element: document.getElementById("basic_choropleth"),
        projection: 'mercator',
        geographyConfig: {
            highlightBorderColor: '#bada55',
            highlightBorderWidth: 3
        },
        
        fills: {
            defaultFill: "#ABDDA4"
        },
        data: {
            migrantData
        },
    });

}


export default createMap;
