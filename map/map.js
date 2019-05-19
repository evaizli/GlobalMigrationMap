import dataString from "../data/csv.js";
import csvToJsonFunction from "../data/data";


const migrantData = csvToJsonFunction(dataString);

// var countries = Datamap.prototype.worldTopo.objects.world.geometries;
// for (var i = 0, j = countries.length; i < j; i++) {
//     console.log(countries[i].properties);
// }


function createMap() {
    // const migrantData = csvToJsonFunction(dataString);
    return new Datamap({
        element: document.getElementById("basic_choropleth"),
        // projection: 'mercator',
        fills: {
            defaultFill: "#ABDDA4"
        },
        data: migrantData,
        geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
                return ['<div class="hoverinfo">', 
                        geography.properties.name, 
                        '<br/> 1990: ' + data.M1990, 
                        '<br/>  1995: ' + data.M1995, 
                        '<br/>  2000: ' + data.M2000, 
                        '<br/>  2005: ' + data.M2005, 
                        '<br/>  2010: ' + data.M2010, 
                        '<br/>  2015: ' + data.M2015, 
                        '<br/>  2017: ' + data.M2017,
                        '</div > '].join('');
            },
            highlightBorderWidth: 3
        },
    });
    
}


export default createMap;
