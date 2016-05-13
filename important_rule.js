'use strict'

function alwaysThrows() {
  throw new Error("OH NOES");
};

function increment(anInteger) {
  console.log(anInteger);
  return anInteger++;
};

var promise = Promise.resolve(increment(4))

Q.fcall(promise)
.then(increment)
.then(increment)
.then(increment)
.then(increment)
.then(alwaysThrows)
.then(increment)
.then(increment)
.then(increment)
.then(increment, console.log)

