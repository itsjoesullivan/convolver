var isPromise = require('is-promise');
module.exports = function(context, impulseResponse) {
  var convolver = context.createConvolver();
  if (impulseResponse instanceof AudioBuffer) {
    convolver.buffer = impulseResponse;
  } else if (isPromise(impulseResponse)) {
    impulseResponse
      .then(function(buffer) {
        convolver.buffer = buffer;
      }, function(error) {
        throw error;
      });
  } else {
    throw new Error("Unrecognized impulse response type");
  }
  return convolver;
};
