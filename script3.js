var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
  
    var t = JSON.parse(this.response);
    //console.log(t);
   let res=" ";
   t.forEach(function (t1){
       console.log(`Name:${t1.name}`);
       console.log(`Capital:${t1.capital}`);
       console.log(`Flag:${t1.flag}`)
       
   });
 
  
   
}
  
  
  else {
    
    console.log("Data is not available");
  }
};

xhr.send();
