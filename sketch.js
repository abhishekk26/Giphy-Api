var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=rainbow";


function setup() {
  noCanvas();
var e=createElement('h1','Results :')    
e.style('color','red');  
var url = api + apiKey + query;
  loadJSON(url, gotData,'jsonp');
}

function gotData(giphy) {
  //for (var i = 0; i < giphy.data.length; i++) {
      console.log(giphy.data[0].images.original.url);
    
    createImg(giphy.data[0].images.original.url);
  //}

}