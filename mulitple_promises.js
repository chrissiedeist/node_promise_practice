'use strict'

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    var counter = 0;
    var returnVals = [];

    promise1.then(function(returnVal){
      counter++;
      returnVals[0] = returnVal;

      if (counter >= 2)
        fulfill(returnVals);
    });

    promise2.then(function(returnVal){
      counter++
      returnVals[1] = returnVal;

      if (counter >= 2)
        fulfill(returnVals);
    });
  });
};

all(getPromise1(), getPromise2()).then(console.log);
