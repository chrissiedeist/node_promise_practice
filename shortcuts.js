'use-strict'

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

var promiseShortcut = Promise.resolve('SECRET VALUE');

promise.then(console.log);
promiseShortcut.then(console.log);

var rejectThisPromise = Promise.reject(new Error('ERROR OCCURED'));

function onRejected(error) {
  console.log(error.message);
}

rejectThisPromise.catch(function(error) {
  console.log(error.message);
});


