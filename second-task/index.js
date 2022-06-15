// https://dkab.github.io/jasmine-tests/?spec=1

// 1
function sequence(start, step) {
  start = start || 0;
  step = step || 1;
  var result = start - step;
  return function () {
    result += step;
    return result;
  };
}

// 2
function take(fn, count) {
  var array = [];
  while (count--) {
    array.push(fn());
  }
  return array;
}

// 3
function map(fn, array) {
  var resultArray = [];
  for (var index = 0; index < array.length; index++) {
    var changedElement = fn(array[index]);
    resultArray.push(changedElement);
  }
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
  var firstFuncArgs = Array.prototype.slice.call(arguments);
  var firstFunc = firstFuncArgs[0];
  var firstFuncParams = firstFuncArgs.slice(1);

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
    var firstFunc = firstFuncArgs[0];
    var firstFuncParams = firstFuncArgs.slice(1);
    var secondFuncParams = Array.prototype.slice.call(arguments);

    for (var index = 0; index < firstFuncParams.length; index++) {
      if (firstFuncParams[index] === undefined) {
        firstFuncParams[index] = secondFuncParams.shift();
      }
    }

    var argumentList = firstFuncParams.concat(secondFuncParams);
    return firstFunc.apply(null, argumentList);
  };
}

// 7
function bind(fn, context) {
  return function () {
    var argumentList = Array.prototype.slice.call(arguments);
    return fn.apply(context, argumentList);
  };
}

// 8
function pluck(objectsArray, fieldName) {
  var result = [];
  for (var index = 0; index < objectsArray.length; index++) {
    result.push(objectsArray[index][fieldName]);
  }
  return result;
}

// 9
function filter(array, fn) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
    var item = array[index];
    fn(item) && result.push(item);
  }
  return result;
}

// 10
function count(obj) {
  return Object.keys(obj).length;
}
