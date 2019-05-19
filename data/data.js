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
        let avg = ((parseInt(result[k]["M1990"]) + parseInt(result[k]["M1995"]) + parseInt(result[k]['M2000']) + parseInt(result[k]["M2005"]) + parseInt(result[k]['M2010']) + parseInt(result[k]["M2015"])+ parseInt(result[k]['M2017']))/7/1000000).toFixed();
        result[k]["avg"] = avg;
        let color = "";
        if (avg <= 1){
            color = "LOW";
        } else if (avg > 1 && avg <= 5){
            color = "MEDIUM";
        } else if ( avg > 5 && avg <= 9 ){
            color = "HIGH";
        } else {
            color = "EXTREME";
        }
        result[k]["fillKey"] = color;
        console.log(result)
    }
    return countries;
}