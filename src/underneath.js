var _= { };

(function() {

  _.each = function(collection,iteratee){

    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        var result = iteratee(collection[i], i, collection);

      } else {

        for(var key in collection){
          iteratee(collection[key], key, collection);

        }
      }
    }
  };


}).call(this);

