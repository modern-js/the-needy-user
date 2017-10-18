// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */
const everything = new Promise(
  function(resolve, reject) {
    resolve(global.fetch('/tv').then(
      (a)=>{
        return global.fetch('/drink').then(
          (b)=>{
              return global.fetch('/food').then(
                (c)=>{
                  return [a,b,c];
                }
              );
          }
        );
      }
    ));
  }
);


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
api.get.me.everything = () => everything;

api.go.get = function (something){
  return  global.fetch(something);
}
api.go.get.me= function (something){
  return  global.fetch(something);
}
api.go.get.me.a = function(something){
  return  global.fetch(something);
}
api.go.get.me.everything = () => everything;

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
