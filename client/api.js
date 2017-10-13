// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */



// define the api-client object to be exported
const api = { go: function(something){
  return  global.fetch(something);
  
  }, 
  get: function(something){
  return  global.fetch(something);
  }, 
};
api.get.me = function(something){
  return  global.fetch(something);
}
api.get.me.a = function(something){
  return  global.fetch(something);
}
api.get.me.everything = function(){
  return   Promise.resolve();
}
api.go.get = function (something){
  return  global.fetch(something);
}
api.go.get.me= function (something){
  return  global.fetch(something);
}
api.go.get.me.a = function(something){
  return  global.fetch(something);
}

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
