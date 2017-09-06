var app = function(){
  
  var url = "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";
  makeRequest(url, requestComplete);

}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if( this.status !== 200 ) return;

  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  localStorage.setItem( 'beers', jsonString );
  populateList(beers);
}

var populateList = function(beers){
  var ul = document.querySelector('#beer-list');

  beers.forEach(function(beer){
    var li = document.createElement('li');
    var img = document.createElement('img');
    var div = document.createElement('div');
    var h2 = document.createElement('h2');



    img.src = beer.image_url;
    img.width = "50";
    img.height = "150";
    
    h2.innerText = beer.name;

    li.appendChild(h2);
    div.appendChild(img);
    ul.appendChild(li);
    ul.appendChild(div);
  })
}


window.addEventListener('load', app);