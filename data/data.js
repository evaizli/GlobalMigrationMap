//var csv is the CSV file with headers
export default function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }
    let countries = {};
    for (let k = 0; k < result.length; k++){
        countries[result[k].Code] = result[k];
        delete result[k]["Code"];
    }
    return countries;
}