var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
  
    var t = JSON.parse(this.response);
    //console.log(t);
  let data= t
  .filter((t)=>t.region=="Asia")
  .map((t)=>t.name)
  console.log(`Name of the country:${data}`);
   }
  
  
  else {
    
    console.log("Data is not available");
  }
};

xhr.send();
