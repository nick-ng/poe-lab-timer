const fs = require('fs');
const { shapeLog, splitLines } = require('./index');

const readPromise = (path, encoding = 'utf8') => new Promise((resolve, reject) => {
  fs.readFile(path, encoding, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const readAndSplitLines = async (path) => {
  try {
    const string = await readPromise(path);
    return splitLines(string);
  } catch (err) {
    console.log(err);
  }
  return [];
}

const getLog = async (path) => {
  try {
    const rawLog = await readPromise(path);
    return shapeLog(rawLog);
  } catch (err) {
    console.log(err);
  }
  return [];
}

module.exports = {
  readPromise,
  readAndSplitLines,
  getLog,
}
