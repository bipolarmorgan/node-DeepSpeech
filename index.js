// const EventEmitter = require("events");
// const streamServer = require("./sample_streaming");

const dsb = require("./dsBuffer");
const dsf = require("./dsFile");
// const dss = require("./dsStreaming");

function dsBuffer(buffer) {
  if (buffer == null) return 1;

  return new Promise(function(resolve, reject) {
    dsb(buffer)
      .then(function(data) {
        resolve(data);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

function dsFile(filepath) {
  if (filepath == null) return 1;

  return new Promise(function(resolve, reject) {
    dsf(filepath)
      .then(function(data) {
        resolve(data);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

// function dsStreaming(emmiter) {
//   const myEmitter = emmiter || new EventEmitter();
//   const audioStreamCb = dss(myEmitter);
//   streamServer(audioStreamCb, myEmitter);
// }

module.exports = {
  dsBuffer: dsBuffer,
  dsFile: dsFile
  // dsStreaming: dsStreaming
};
