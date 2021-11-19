var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
  
    var t = JSON.parse(this.response);

    //console.log(t);
   let y= t.reduce(function(accmulator,pop){
    return accmulator+pop.population;   
    },0);

    console.log(`Total population:${y}`);
  }
  

  else {
    
    console.log("Data is not available");
  }
};

xhr.send();
