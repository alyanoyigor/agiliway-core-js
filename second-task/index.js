// https://dkab.github.io/jasmine-tests/?spec=1

// 1
function sequence(start, step) {
  if (start === undefined) {
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  var result = start - step;
  return function () {
    result = result + step;
    return result;
  };
}

// 2
function take(fn, count) {
  var array = [];
  for (var index = 0; index < count; index++) {
    var item = fn();
    array.push(item);
  }
  return array;
}

// 3
function map(fn, array) {
  var resultArray = [];
  array.forEach(function (item) {
    var changedItem = fn(item);
    resultArray.push(changedItem);
  });
  return resultArray;
}

// 4
function fmap(firstFunc, secondFunc) {
  return function () {
    var resultSecondFunc = secondFunc.apply(null, arguments);
    return firstFunc(resultSecondFunc);
  };
}

// 5
function partial() {
  var firstFuncArgs = Array.prototype.slice.call(arguments),
    firstFunc = firstFuncArgs[0],
    firstFuncParams = firstFuncArgs.slice(1);
  return function () {
    var secondFuncArgs = Array.prototype.slice.call(arguments);
    var argumentList = firstFuncParams.concat(secondFuncArgs);
    return firstFunc.apply(null, argumentList);
  };
}

// 6
function partialAny() {
  var firstFuncArgs = Array.prototype.slice.call(arguments);
  return function () {
    var firstFunc = firstFuncArgs[0],
      firstFuncParams = firstFuncArgs.slice(1);
    var secondFuncParams = Array.prototype.slice.call(arguments);
    var argumentList = firstFuncParams
      .map(function (param) {
        if (param === undefined) {
          return secondFuncParams.shift();
        }
        return param;
      })
      .concat(secondFuncParams);
    return firstFunc.apply(null, argumentList);
  };
}

// 7
function bind(fn, context) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return fn.apply(context, args);
  };
}

// 8
function pluck(objectsArray, fieldName) {
  return objectsArray.map(function (object) {
    return object[fieldName];
  });
}

// 9
function filter(arr, fn) {
  var result = [];
  arr.forEach(function (item) {
    var isCorrectItem = fn(item);
    if (isCorrectItem) {
      result.push(item);
    }
  });
  return result;
}

// 10
function count(obj) {
  var count = 0;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      count++;
    }
  }
  return count;
}
