'use-strict'

function attachTitle(name) {
  return 'DR. ' + name;
};

promise = Promise.resolve('MANHATTAN');

promise_2 = new Promise(function(fulfill, reject) {
  if (4 == 3) {
    fulfill('FULFILLED');
  } else {
    reject('REJECTED');
  }
});

promise_2.then(attachTitle, attachTitle).then(console.log);
