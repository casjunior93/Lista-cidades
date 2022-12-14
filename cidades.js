const citiesJSON = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';

async function initializeData() {
    var lista_cidades = [];
    var cont = 0;
    await fetch(citiesJSON)
        .then(response => response.json())
        .then(async (data) => {
            await data.forEach((d) => {
                console.log(`${d.name}, ${d.state_name}, ${d.country_name}`)
                lista_cidades.push(`${d.name}, ${d.state_name}, ${d.country_name}`)
                cont++;
                console.log(cont);
            });
            var fs = require('fs');
            fs.writeFile("test.json", JSON.stringify({ cidades: lista_cidades }), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
}

initializeData();