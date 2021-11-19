	var xhr = new XMLHttpRequest();
	
	xhr.open(
	  "GET",
	  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
	);
	
	xhr.onload = function () {
	  
	  if (xhr.status >= 200 && xhr.status < 300) {
	  
	    var t = JSON.parse(this.response);
	    	     for(let i of t){
	       if(i.currencies[0].code=="USD"){
	      console.log(`
	      Country:${i.name}
      `);
	    }
	  }
	   }
	  
	  
	  else {
	    	    console.log("Data is not available");
	  }
	};
	
	xhr.send();
	
