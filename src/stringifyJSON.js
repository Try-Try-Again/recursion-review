// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var returnString = '';
  //var determineValue = function(obj) {
    if (typeof obj === "function") {
      return {};
    }
  if (typeof obj === 'boolean') {
      return `${obj}`;
    }
    if (typeof obj === 'number') {
      return `${obj}`;
    }
    if (obj === null) {
      return `${obj}`;
    }
    if (typeof obj === 'string') {
      return `"${obj}"`;
    }

  if (Array.isArray(obj)) {
    returnString += '[';
    for (var i = 0; i < obj.length; i++) {
      returnString += stringifyJSON(obj[i]);
      if (i < obj.length - 1){
        returnString += ',';
      }
    }
    returnString += ']';
  } else if (typeof obj === 'object') {
    returnString += '{';
    for (var key in obj) {
      if (typeof obj[key] === "function") {
        return '{}';
      }

      returnString += `"${key}":`;
      returnString += stringifyJSON(obj[key]) + ','; //`"${obj[key]}",`;

      //if (i < obj.length - 1){
        //returnString += ',';
      //}
    }
    if (Object.keys(obj).length > 0) {
      returnString = returnString.substring(0, returnString.length - 1);
    }
    returnString += '}';
  }
  var result = `${returnString}`;
  console.log('FINAL RESULT: ', result);
  return result;
};