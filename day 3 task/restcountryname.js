let xhr = new XMLHttpRequest();
//console.log(xhr)
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response);
    for(let i=0; i<data.length; i++){
        console.log("name: ", data[i].name.common)
        console.log("region: ",data[i].region)
        console.log("subregion: ",data[i].subregion)
        console.log("population: ",data[i].population)
        console.log( " ")
    }
    
}