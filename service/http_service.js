function makePromiseCall(methodtype, url, async = true, data){
  console.log(url);
  return new Promise(function(resolve,reject){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if(xhttp.status >= 200 && xhttp.status < 300) {
        console.log(xhttp.responseText);
        resolve(xhttp.responseText);
      }
      else if(xhttp.status >= 400){
        reject({
          status: xhttp.status,
          statusText: xhttp.statusText
        });
        console.log("xhttp failed");
      }
    };
    xhttp.open(methodtype,url,async);
    xhttp.send();
  })
}
