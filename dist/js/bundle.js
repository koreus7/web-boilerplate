(function () {
'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isNumberPrime_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
function isNumberPrime(n) {
  if (n < 2 || n % 1 || n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  var root = Math.floor(Math.sqrt(n));
  for (var i = 5; i <= root; i += 6) {
    if (n % i === 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

exports["default"] = isNumberPrime;
module.exports = exports["default"];
});

unwrapExports(isNumberPrime_1);

console.log("Hello World!");

}());
//# sourceMappingURL=bundle.js.map
