function createMap() {

    return new Datamap({
        element: document.getElementById("basic_choropleth"),
        projection: 'mercator',
        fills: {
            defaultFill: "#ABDDA4",
            authorHasTraveledTo: "#fa0fa0"
        },
        data: {
            // USA: { fillKey: "authorHasTraveledTo", "population": 133000000 },
            // JPN: { fillKey: "authorHasTraveledTo" },
            // ITA: { fillKey: "authorHasTraveledTo" },
            // CRI: { fillKey: "authorHasTraveledTo" },
            // KOR: { fillKey: "authorHasTraveledTo" },
            // DEU: { fillKey: "authorHasTraveledTo" },
        }
    });

}


module.exports = createMap;
