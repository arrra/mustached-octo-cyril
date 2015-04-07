var _= { };

exports._ = _;
(function() {

  _.each = function(collection,iterator){

    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        var result = iteratee(collection[i], i, collection);
      }

    }else {

      for(var key in collection){
        iteratee(collection[key], key, collection);

      }
    }
  };

  _.filter = function(collection, iterator) {

    var filtered = [];

    _.each(collection, function(val){
      if(iterator(val)){
        filtered.push(val);
      }
    });

    return filtered;
  };

  _.reject = function(collection, iterator) {
    return _.filter(collection, function(value){
      return !iterator(value);
    });
  }

  _.map = function(array, iterator) {

    var mapped = [];

    for (var i = 0; i < array.length; i++) {
      mapped.push(iterator(array[i]));
    };

    return mapped;

  }



}).call(this);



