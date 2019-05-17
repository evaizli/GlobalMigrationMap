import createMap from "./map";


function loadMap() {
    const map = createMap();
    mapColor(map);
}

function mapColor(map) {
    const colors = d3.scale.category10();

    window.setInterval(function () {
        map.updateChoropleth({
            USA: colors(Math.random() * 10),
            RUS: colors(Math.random() * 100),
            AUS: { fillKey: 'authorHasTraveledTo' },
            BRA: colors(Math.random() * 50),
            CAN: colors(Math.random() * 50),
            ZAF: colors(Math.random() * 50),
            IND: colors(Math.random() * 50),
        });
    }, 100);
}

export default loadMap;