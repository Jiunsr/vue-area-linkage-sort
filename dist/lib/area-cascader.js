module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(30);
var hide = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(27);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setPanelPosition; });
function contains(root, target) {
    // root 节点是否包含 target 节点
    var isElement = Object.prototype.toString.call(root).includes('Element') && Object.prototype.toString.call(target).includes('Element');
    if (!isElement) {
        return false;
    }
    var node = target;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function assert(condition) {
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!condition) {
        // throw new Error(`[vue-area-linkage]: ${msg}`);
        // fix #27
        console.error('[vue-area-linkage]: ' + msg);
    }
}

function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
}

function scrollIntoView(container, target) {
    if (!target) {
        container.scrollTop = 0;
        return;
    }

    // refrence: https://github.com/ElemeFE/element/blob/dev/src/utils/scroll-into-view.js
    var top = target.offsetTop;
    var bottom = target.offsetTop + target.offsetHeight;
    var viewRectTop = container.scrollTop;
    var viewRectBottom = viewRectTop + container.clientHeight;

    if (top < viewRectTop) {
        container.scrollTop = top;
    } else if (bottom > viewRectBottom) {
        container.scrollTop = bottom - container.clientHeight;
    }
}

function setPanelPosition(panelHeight, wrapRect) {
    var wrapHeight = wrapRect.height;
    var wrapTop = wrapRect.top;

    var docHeight = document.documentElement.clientHeight;
    var panelDefTop = wrapTop + wrapHeight;

    var diff = docHeight - panelDefTop;
    if (diff < panelHeight) {
        if (wrapTop > panelHeight) {
            return -(panelHeight + 10);
        } else {
            return diff - panelHeight;
        }
    } else {
        return wrapHeight;
    }
}



/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(3);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16);
var $keys = __webpack_require__(8);

__webpack_require__(38)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(3);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(37);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(0).Object.values;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(4);
var $values = __webpack_require__(43)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(8);
var toIObject = __webpack_require__(3);
var isEnum = __webpack_require__(15).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = find;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49), __webpack_require__(50)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(53);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(71)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(57)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(58);
var hide = __webpack_require__(11);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(72);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(75);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(24);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(74).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(27);
var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(68);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(33);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/values.js
var values = __webpack_require__(40);
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(44);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/lodash.find/index.js
var lodash_find = __webpack_require__(48);
var lodash_find_default = /*#__PURE__*/__webpack_require__.n(lodash_find);

// CONCATENATED MODULE: ./src/bus.js
var Bus = {
    _Vue: null,
    createEventBus: function createEventBus() {
        return new this._Vue();
    },
    saveVueRef: function saveVueRef(Vue) {
        this._Vue = Vue;
    }
};

/* harmony default export */ var bus = (Bus);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(20);

// CONCATENATED MODULE: ./components/area-cascader/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ var emitter = ({
    methods: {
        // dispatch (componentName, eventName, params) {
        //     let parent = this.$parent || this.$root;
        //     let name = parent.$options.name;

        //     while (parent && (!name || name !== componentName)) {
        //         parent = parent.$parent;

        //         if (parent) {
        //             name = parent.$options.name;
        //         }
        //     }
        //     if (parent) {
        //         parent.$emit.apply(parent, [eventName].concat(params));
        //     }
        // },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
});
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(91);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(101);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/area-cascader/cascader/caspanel.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var key = 0;

/* harmony default export */ var caspanel = ({
    name: 'Caspanel',
    inject: ['cascader'],
    mixins: [emitter],

    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },

    data: function data() {
        return {
            sublist: [],
            val: '', // 当前选中的值
            list: null
        };
    },


    watch: {
        data: function data() {
            this.sublist = [];
        }
    },

    methods: {
        getUniqueKey: function getUniqueKey() {
            return key++;
        },
        getBaseItem: function getBaseItem(item) {
            var backItem = assign_default()({}, item);
            if (backItem.children) {
                delete backItem.children;
            }
            return backItem;
        },
        handleClickItem: function handleClickItem(item) {
            this.cascader.handleMenuItemClick(item);
            if (!item.children) {
                this.sublist = [];
                this.cascader.eventBus.$emit('selected');
            } else {
                this.sublist = [].concat(item.children);
            }
        },
        triggerItem: function triggerItem(item, from) {
            var base = this.getBaseItem(item);
            this.cascader.handleMenuItemClick(item);

            if (!item.children) {
                this.sublist = [];
                this.cascader.eventBus.$emit('selected');
            } else {
                this.sublist = [].concat(item.children);
            }
        },
        initCaspanel: function initCaspanel(params) {
            var _this = this;

            var val = params.value;
            var value = [].concat(toConsumableArray_default()(val));

            for (var i = 0; i < value.length; i++) {
                for (var j = 0; j < this.data.length; j++) {
                    if (value[i] === this.data[j].value) {
                        this.triggerItem(this.data[j], params.from);
                        this.val = value[i];
                        value.splice(0, 1);
                        this.$nextTick(function () {
                            _this.broadcast('Caspanel', 'update-selected', {
                                value: value
                            });
                        });
                        break;
                    }
                }
            }
        },
        scrollToSelectedOption: function scrollToSelectedOption() {
            var _this2 = this;

            if (!this.list) {
                this.list = this.$refs.list;
            }
            var seletedOption = this.data.filter(function (item) {
                return item.value === _this2.val;
            });
            if (seletedOption.length) {
                var target = this.list.querySelector('.selected');
                Object(utils["d" /* scrollIntoView */])(this.list, target);
            }
        }
    },

    mounted: function mounted() {
        // 保存 ul
        this.list = this.$refs.list;
        // 根据 value 初始化选择数据
        this.$on('update-selected', this.initCaspanel);
        this.cascader.eventBus.$on('set-scroll-top', this.scrollToSelectedOption);
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f4a0d540","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/area-cascader/cascader/caspanel.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('ul',{ref:"list",staticClass:"cascader-menu-list"},_vm._l((_vm.data),function(item,index){return _c('li',{key:_vm.getUniqueKey(index),class:{
                'cascader-menu-option': true,
                'cascader-menu-extensible': item['children'],
                'selected': _vm.cascader.activeValues.includes(item.value)//cascader.useTmp ? cascader.tmpVals.includes(item.value) : cascader.vals.includes(item.value)
            },on:{"click":function($event){$event.stopPropagation();_vm.handleClickItem(item)}}},[_vm._v("\n            "+_vm._s(item.label)+"\n        ")])})),_vm._v(" "),(_vm.sublist && _vm.sublist.length)?_c('caspanel',{attrs:{"data":_vm.sublist}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var cascader_caspanel = (esExports);
// CONCATENATED MODULE: ./components/area-cascader/cascader/caspanel.vue
var normalizeComponent = __webpack_require__(12)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  caspanel,
  cascader_caspanel,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var area_cascader_cascader_caspanel = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/area-cascader/cascader/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var cascader = ({
    provide: function provide() {
        return {
            'cascader': this
        };
    },

    mixins: [emitter],
    props: {
        options: {
            type: Array,
            required: true
        },

        data: {
            type: Object,
            required: true
        },

        defaultsAreaCodes: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        size: {
            type: String,
            default: 'medium',
            validator: function validator(val) {
                return ['small', 'medium', 'large'].indexOf(val) > -1;
            }
        },

        separator: {
            type: String,
            default: '/'
        }
    },

    components: {
        'caspanel': area_cascader_cascader_caspanel
    },

    data: function data() {
        return {
            // 计算位置
            areaRect: null,
            top: 32,

            shown: false,
            eventBus: null,
            activeValues: [], // 当前激活项
            values: [], // 当前选择项
            labels: [], // 地区的文本
            label: '',
            isClickOutSide: false
        };
    },


    watch: {
        defaultsAreaCodes: function defaultsAreaCodes(val) {
            val.length && this.initValue();
        }
    },

    methods: {
        initValue: function initValue() {
            this.broadcast('Caspanel', 'update-selected', {
                value: this.defaultsAreaCodes
            });
            this.values = [].concat(this.defaultsAreaCodes);
        },
        getActiveLabels: function getActiveLabels(codes) {
            var provinces = this.data['86'];
            var citys = this.data[codes[0]];
            var l = codes.length;

            if (l < 2) {
                return [];
            }

            var labels = [];

            if (l === 2) {
                labels = [provinces[codes[0]], citys[codes[1]]];
            } else if (l === 3) {
                // fix #7
                var areas = this.data[codes[1]];
                labels = [provinces[codes[0]], citys[codes[1]], areas ? areas[codes[2]] : citys[codes[2]]];
            }

            return labels;
        },
        resetActiveVal: function resetActiveVal() {
            this.activeValues = [].concat(this.values);
            this.labels = this.getActiveLabels(this.values);
            if (!this.shown && this.values.length) {
                this.broadcast('Caspanel', 'update-selected', {
                    value: this.values
                });
            }
        },
        handleTriggerClick: function handleTriggerClick() {
            if (this.disabled) {
                return;
            }
            this.$emit('set-default');
            var tmp = this.shown;
            this.shown = !this.shown;

            if (!tmp) {
                this.isClickOutSide = false;
            } else {
                this.isClickOutSide = true;
                this.resetActiveVal();
            }
        },
        setPosition: function setPosition() {
            var panelHeight = parseInt(window.getComputedStyle(this.$refs.wrap, null).getPropertyValue('height'));
            this.top = Object(utils["e" /* setPanelPosition */])(panelHeight, this.areaRect);
        },
        handleDocClick: function handleDocClick(e) {
            var target = e.target;
            if (!Object(utils["b" /* contains */])(this.$el, target) && this.shown) {
                this.shown = false;
                this.isClickOutSide = true;
                this.resetActiveVal();
            }
        },
        handleDocResize: function handleDocResize() {
            var _this = this;

            this.areaRect = this.$refs.area.getBoundingClientRect();
            this.$nextTick(function () {
                _this.setPosition();
            });
        },
        handleMenuItemClick: function handleMenuItemClick(item, oldItem) {
            var label = item.label,
                value = item.value,
                children = item.children,
                panelIndex = item.panelIndex;


            var activeValues = this.activeValues;
            var labels = this.labels;

            activeValues = activeValues.slice(0, panelIndex + 1);
            activeValues[panelIndex] = value;
            labels = labels.slice(0, panelIndex + 1);
            labels[panelIndex] = label;

            this.activeValues = [].concat(activeValues);
            this.labels = [].concat(labels);
        },
        handleSelectedChange: function handleSelectedChange() {
            this.shown = false;
            this.values = [].concat(this.activeValues);
            this.label = this.labels.join(this.separator);
            if (!this.isClickOutSide) {
                this.$emit('change', this.values, this.labels);
            }
        },
        handleListEnter: function handleListEnter() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.setPosition();
                _this2.eventBus.$emit('set-scroll-top');
            });
        }
    },

    created: function created() {
        if (!bus._Vue) {
            throw new Error('[area-cascader]: Must be call Vue.use(VueAreaLinkage) before used');
        }
        this.eventBus = bus.createEventBus();
        this.eventBus.$on('selected', this.handleSelectedChange);
    },
    mounted: function mounted() {
        this.areaRect = this.$refs.area.getBoundingClientRect();
        this.top = this.areaRect.height;

        window.document.addEventListener('scroll', this.handleDocResize, false);
        window.addEventListener('resize', this.handleDocResize, false);
        window.document.addEventListener('click', this.handleDocClick, false);

        if (this.defaultsAreaCodes && this.defaultsAreaCodes.length) {
            this.initValue();
        }
    },
    beforeDestroy: function beforeDestroy() {
        window.document.removeEventListener('scroll', this.handleDocResize, false);
        window.removeEventListener('resize', this.handleDocResize, false);
        window.document.removeEventListener('click', this.handleDocClick, false);
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ac6bec7a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/area-cascader/cascader/index.vue
var cascader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"area",staticClass:"area-select",class:{
    'medium': _vm.size === 'medium',
    'small': _vm.size === 'small',
    'large': _vm.size === 'large',
    'is-disabled': _vm.disabled
}},[_c('span',{ref:"trigger",staticClass:"area-selected-trigger",on:{"click":function($event){$event.stopPropagation();_vm.handleTriggerClick($event)}}},[_vm._v(_vm._s(_vm.label ? _vm.label : _vm.placeholder))]),_vm._v(" "),_c('i',{class:['area-select-icon', { 'active': _vm.shown }],on:{"click":function($event){$event.stopPropagation();_vm.handleTriggerClick($event)}}}),_vm._v(" "),_c('transition',{attrs:{"name":"area-zoom-in-top"},on:{"before-enter":_vm.handleListEnter}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shown),expression:"shown"}],ref:"wrap",staticClass:"cascader-menu-list-wrap",style:({top: _vm.top + 'px'})},[_c('caspanel',{attrs:{"data":_vm.options}})],1)])],1)}
var cascader_staticRenderFns = []
var cascader_esExports = { render: cascader_render, staticRenderFns: cascader_staticRenderFns }
/* harmony default export */ var area_cascader_cascader = (cascader_esExports);
// CONCATENATED MODULE: ./components/area-cascader/cascader/index.vue
var cascader_normalizeComponent = __webpack_require__(12)
/* script */


/* template */

/* template functional */
var cascader___vue_template_functional__ = false
/* styles */
var cascader___vue_styles__ = null
/* scopeId */
var cascader___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cascader___vue_module_identifier__ = null
var cascader_Component = cascader_normalizeComponent(
  cascader,
  area_cascader_cascader,
  cascader___vue_template_functional__,
  cascader___vue_styles__,
  cascader___vue_scopeId__,
  cascader___vue_module_identifier__
)

/* harmony default export */ var components_area_cascader_cascader = (cascader_Component.exports);

// EXTERNAL MODULE: ./src/prefix-pinyin.js
var prefix_pinyin = __webpack_require__(105);
var prefix_pinyin_default = /*#__PURE__*/__webpack_require__.n(prefix_pinyin);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/area-cascader/index.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var area_cascader = ({
    name: 'area-cascader',
    components: {
        'v-cascader': components_area_cascader_cascader
    },
    props: {
        value: {
            required: true
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        type: {
            type: String,
            default: 'code', //  code-返回行政区域代码 text-返回文本 all-返回 code 和 text
            validator: function validator(val) {
                return ['all', 'code', 'text'].indexOf(val) > -1;
            }
        },
        level: {
            type: Number,
            default: 0, // 0->二联 1->三联
            validator: function validator(val) {
                return [0, 1].indexOf(val) > -1;
            }
        },
        size: {
            type: String,
            default: 'large',
            validator: function validator(val) {
                return ['small', 'medium', 'large'].indexOf(val) > -1;
            }
        },
        separator: {
            type: String,
            default: '/'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            required: true
        },
        dict: {
            type: Object,
            required: false
        }
    },

    data: function data() {
        if (!this.data || !this.data['86']) {
            throw new Error('[vue-area-linkage]: 需要提供地区数据：https://github.com/dwqs/area-data');
        }
        return {
            provinces: this.data['86'],
            citys: {},
            areas: {},
            // only array
            options: [],

            curProvince: '', // text
            curProvinceCode: '', // code
            curCity: '',
            curCityCode: '',
            curArea: '',
            curAreaCode: '',

            // 设置默认值的判断
            defaultsAreaCodes: [], // 默认值对应的 code
            defaults: [],
            isCode: false,
            isSetDefault: false
        };
    },


    watch: {
        value: function value(val) {
            if (!this.isSetDefault && Object(utils["c" /* isArray */])(val) && val.length === this.level + 2) {
                this.beforeSetDefault();
                this.setDefaultValue();
            }

            if (!this.isSetDefault && Object(utils["c" /* isArray */])(val) && val.length && val.length !== this.level + 2) {
                Object(utils["a" /* assert */])(false, '\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u503C\u548C level \u503C\u4E0D\u5339\u914D');
            }
        },
        curProvinceCode: function curProvinceCode(val) {
            var _this = this;

            this.curProvince = this.provinces[val];
            this.citys = this.data[val];

            if (!this.citys) {
                this.citys = defineProperty_default()({}, this.curProvinceCode, this.curProvince);
                this.curCity = this.curProvince;
                this.curCityCode = this.curCityCode;
                return;
            }

            var curCity = values_default()(this.citys)[0];
            var curCityCode = keys_default()(this.citys)[0];

            if (this.defaults[1]) {
                if (this.isCode) {
                    curCityCode = lodash_find_default()(keys_default()(this.citys), function (item) {
                        return item === _this.defaults[1];
                    });
                    Object(utils["a" /* assert */])(curCityCode, '\u57CE\u5E02 ' + this.defaults[1] + ' \u4E0D\u5B58\u5728\u4E8E\u7701\u4EFD ' + this.defaults[0] + ' \u4E2D');
                    curCity = this.citys[curCityCode];
                } else {
                    curCity = lodash_find_default()(this.citys, function (item) {
                        return item === _this.defaults[1];
                    });
                    Object(utils["a" /* assert */])(curCity, '\u57CE\u5E02 ' + this.defaults[1] + ' \u4E0D\u5B58\u5728\u4E8E\u7701\u4EFD ' + this.defaults[0] + ' \u4E2D');
                    curCityCode = lodash_find_default()(keys_default()(this.citys), function (item) {
                        return _this.citys[item] === _this.defaults[1];
                    });
                }
            }

            this.curCity = curCity;
            this.curCityCode = curCityCode;
        },
        curCityCode: function curCityCode(val) {
            var _this2 = this;

            this.curCity = this.citys[val];
            if (this.level === 0) {
                this.setDefaultsCodes();
            } else if (this.level === 1) {
                this.areas = this.data[val];
                if (!this.areas) {
                    this.areas = defineProperty_default()({}, this.curCityCode, this.curCity);
                    this.curArea = this.curCity;
                    this.curAreaCode = this.curCityCode;
                    return;
                }

                var curArea = values_default()(this.areas)[0];
                var curAreaCode = keys_default()(this.areas)[0];

                if (this.defaults[2]) {
                    if (this.isCode) {
                        curAreaCode = lodash_find_default()(keys_default()(this.areas), function (item) {
                            return item === _this2.defaults[2];
                        });
                        Object(utils["a" /* assert */])(curAreaCode, '\u53BF\u533A ' + this.defaults[2] + ' \u4E0D\u5B58\u5728\u4E8E\u57CE\u5E02 ' + this.defaults[1] + ' \u4E2D');
                        curArea = this.areas[curAreaCode];
                    } else {
                        curArea = lodash_find_default()(this.areas, function (item) {
                            return item === _this2.defaults[2];
                        });
                        Object(utils["a" /* assert */])(curArea, '\u53BF\u533A ' + this.defaults[2] + ' \u4E0D\u5B58\u5728\u4E8E\u57CE\u5E02 ' + this.defaults[1] + ' \u4E2D');
                        curAreaCode = lodash_find_default()(keys_default()(this.areas), function (item) {
                            return _this2.areas[item] === _this2.defaults[2];
                        });
                    }
                }

                this.curArea = curArea;
                this.curAreaCode = curAreaCode;
            }
        },
        curAreaCode: function curAreaCode(val) {
            this.curArea = this.areas[val];
            this.curAreaCode = val;
            this.setDefaultsCodes();
        }
    },

    methods: {
        beforeSetDefault: function beforeSetDefault() {
            var chinese = /^[\u4E00-\u9FA5\uF900-\uFA2D]{2,}$/;
            var num = /^\d{6,}$/;
            var isCode = num.test(this.value[0]);
            var isValid = void 0;

            if (!isCode) {
                isValid = this.value.every(function (item) {
                    return chinese.test(item);
                });
            } else {
                isValid = this.value.every(function (item) {
                    return num.test(item);
                });
            }
            Object(utils["a" /* assert */])(isValid, '传入的默认值参数有误');

            // 映射默认值，避免直接更改props
            this.defaults = [].concat(this.value);
            this.isCode = isCode;
        },
        setDefaultValue: function setDefaultValue() {
            var _this3 = this;

            var provinceCode = '';

            if (this.isCode) {
                provinceCode = this.defaults[0];
            } else {
                var province = lodash_find_default()(this.provinces, function (item) {
                    return item === _this3.defaults[0];
                });
                Object(utils["a" /* assert */])(province, '\u7701\u4EFD ' + this.defaults[0] + ' \u4E0D\u5B58\u5728');
                provinceCode = lodash_find_default()(keys_default()(this.provinces), function (item) {
                    return _this3.provinces[item] === _this3.defaults[0];
                });
            }
            this.curProvinceCode = provinceCode;

            // 还原默认值，避免用户选择出错
            this.$nextTick(function () {
                _this3.defaults = [];
                // this.isCode = false;
            });
        },
        handleChange: function handleChange(codes, labels) {
            var res = [];
            if (this.isSetDefault) {
                // this.emitter.emit('set-def-values', codes, labels);
            }
            this.isSetDefault = true;

            if (labels[0] === labels[1]) {
                // 纠正台湾省的 code 返回
                codes[1] = codes[0];
            }

            if (this.type === 'code') {
                res = [].concat(codes);
            } else if (this.type === 'text') {
                res = [].concat(labels);
            } else if (this.type === 'all') {
                res = codes.map(function (code, index) {
                    return defineProperty_default()({}, code, labels[index]);
                });
            }
            this.$emit('input', res);
            this.$emit('change', res);
        },
        iterate: function iterate(obj, panelIndex) {
            // panelIndex 表示所在 panel 的索引
            var temp = [];
            for (var key in obj) {
                temp.push({
                    label: obj[key],
                    value: key,
                    panelIndex: panelIndex
                });
            }
            return temp;
        },
        iterateCities: function iterateCities() {
            var temp = [];
            var provinces = this.iterate(this.data['86'], 0);

            for (var i = 0, l = provinces.length; i < l; i++) {
                var item = {};
                item['label'] = provinces[i].label;
                item['value'] = provinces[i].value;
                item['panelIndex'] = provinces[i].panelIndex;

                item['children'] = this.iterate(this.data[provinces[i].value], 1);
                temp.push(item);
            }

            return temp;
        },
        iterateAreas: function iterateAreas() {
            var temp = [];
            var cities = this.iterateCities();

            for (var i = 0, c = cities.length; i < c; i++) {
                var city = cities[i];
                for (var j = 0, l = city.children.length; j < l; j++) {
                    var item = city.children[j];
                    var areas = this.iterate(this.data[city.children[j].value], 2);
                    // fix #7
                    if (areas.length) {
                        item['children'] = areas;
                    } else {
                        item['children'] = [{
                            label: item.label,
                            value: item.value,
                            panelIndex: 2
                        }];
                    }
                }
                temp.push(city);
            }
            return temp;
        },
        setDefaultsCodes: function setDefaultsCodes() {
            if (this.isSetDefault) {
                return;
            }
            this.isSetDefault = true;

            var codes = [];
            switch (this.level) {
                case 0:
                    codes = [this.curProvinceCode, this.curCityCode];
                    break;
                case 1:
                    codes = [this.curProvinceCode, this.curCityCode, this.curAreaCode];
                    break;
            }
            this.defaultsAreaCodes = [].concat(codes);
        }
    },

    created: function created() {
        if (this.level === 0) {
            this.options = this.iterateCities();
        } else if (this.level === 1) {
            this.options = this.iterateAreas();
        } else {
            Object(utils["a" /* assert */])(false, '\u8BBE\u7F6E\u7684 level \u503C\u53EA\u652F\u6301 0/1');
        }
        /* 首字母匹配本地字典 */
        // let prefixKeys = Object.keys(prefix);
        var localPinyin = function localPinyin(name) {
            if (prefix_pinyin["prefix_pinyin_min"][name[0]]) {
                return prefix_pinyin["prefix_pinyin_min"][name[0]];
            }
            /* 递归匹配首字母 */
            // const matchPerf = (namePref, strNum) => {
            //     let name_pref = namePref.slice(0, strNum);
            //     let name_keys = prefixKeys.filter(key => key.startsWith(name_pref));
            //     /* 匹配结果 */
            //     if(name_keys.length){
            //         return prefix[name_keys[0]];
            //     }
            //     if(strNum<=0){
            //         return namePref
            //     }
            //     return matchPerf(namePref, strNum-=1);
            // }
            // let name_piny = matchPerf(name, 2);
            return name;
        };
        /* 用户自定义的覆盖默认排序 */
        if (this.dict && typeof_default()(this.dict) === 'object' && keys_default()(this.dict).length) {
            for (var dictKey in this.dict) {
                if (dictKey.length >= 2 && (dictKey.endsWith('省') || dictKey.endsWith('市') || dictKey.endsWith('区'))) {
                    var prefKey = dictKey.slice(0, dictKey.length - 1);
                    prefix_pinyin["prefix_pinyin"][prefKey] = this.dict[dictKey];
                } else {
                    prefix_pinyin["prefix_pinyin"][dictKey] = this.dict[dictKey];
                }
            }
        }
        /* 匹配首字母排序 */
        var matchName = function matchName(name) {
            if (Boolean(prefix_pinyin["prefix_pinyin"][name])) {
                return prefix_pinyin["prefix_pinyin"][name];
            }
            if (name.endsWith('省') || name.endsWith('市') || name.endsWith('区')) {
                var key_p = name.replace('省', '');
                var key_c = name.replace('市', '');
                var key_d = name.replace('区', '');
                var _prefix_py = localPinyin(name);
                return prefix_pinyin["prefix_pinyin"][key_p] || prefix_pinyin["prefix_pinyin"][key_c] || prefix_pinyin["prefix_pinyin"][key_d] || _prefix_py;
            }
            var prefix_py = localPinyin(name);
            return prefix_py;
        };
        /* 递归省市区按首字母排序 */
        var sortPostback = function sortPostback(list) {
            if (list instanceof Array) {
                list = list.sort(function (a, b) {
                    var a_prefix = matchName(a.label);
                    var b_prefix = matchName(b.label);
                    return a_prefix.localeCompare(b_prefix, 'en-US');
                });
            }
            if (list.some(function (item) {
                return item.hasOwnProperty('children');
            })) {
                for (var index in list) {
                    sortPostback(list[index].children);
                }
            }
        };
        sortPostback(this.options);

        if (Object(utils["c" /* isArray */])(this.value) && this.value.length === this.level + 2) {
            this.beforeSetDefault();
            this.setDefaultValue();
        }

        if (Object(utils["c" /* isArray */])(this.value) && this.value.length && this.value.length !== this.level + 2) {
            Object(utils["a" /* assert */])(false, '\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u503C\u548C level \u503C\u4E0D\u5339\u914D');
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0c946e9e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/area-cascader/index.vue
var area_cascader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"area-cascader-wrap"},[_c('v-cascader',{attrs:{"placeholder":_vm.placeholder,"options":_vm.options,"defaultsAreaCodes":_vm.defaultsAreaCodes,"size":_vm.size,"disabled":_vm.disabled,"separator":_vm.separator,"data":_vm.data},on:{"setDefault":function($event){_vm.isSetDefault = true},"change":_vm.handleChange}})],1)}
var area_cascader_staticRenderFns = []
var area_cascader_esExports = { render: area_cascader_render, staticRenderFns: area_cascader_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_area_cascader = (area_cascader_esExports);
// CONCATENATED MODULE: ./components/area-cascader/index.vue
var area_cascader_normalizeComponent = __webpack_require__(12)
/* script */


/* template */

/* template functional */
var area_cascader___vue_template_functional__ = false
/* styles */
var area_cascader___vue_styles__ = null
/* scopeId */
var area_cascader___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var area_cascader___vue_module_identifier__ = null
var area_cascader_Component = area_cascader_normalizeComponent(
  area_cascader,
  selectortype_template_index_0_components_area_cascader,
  area_cascader___vue_template_functional__,
  area_cascader___vue_styles__,
  area_cascader___vue_scopeId__,
  area_cascader___vue_module_identifier__
)

/* harmony default export */ var components_area_cascader = (area_cascader_Component.exports);

// CONCATENATED MODULE: ./components/area-cascader/index.js




components_area_cascader.install = function (Vue) {
    bus.saveVueRef(Vue);
    Vue.component(components_area_cascader.name, components_area_cascader);
};

/* harmony default export */ var components_area_cascader_0 = __webpack_exports__["default"] = (components_area_cascader);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(69);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(80);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(76);
module.exports = __webpack_require__(53).f('iterator');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(59);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(8);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var global = __webpack_require__(1);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(26);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(78);
var step = __webpack_require__(79);
var Iterators = __webpack_require__(26);
var toIObject = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(57)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(58);
var META = __webpack_require__(83).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(23);
var setToStringTag = __webpack_require__(52);
var uid = __webpack_require__(19);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(53);
var wksDefine = __webpack_require__(54);
var enumKeys = __webpack_require__(84);
var isArray = __webpack_require__(85);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(59);
var gOPNExt = __webpack_require__(86);
var $GOPD = __webpack_require__(87);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(8);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(60).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(15).f = $propertyIsEnumerable;
  __webpack_require__(55).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(8);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(15);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3);
var gOPN = __webpack_require__(60).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(15);
var createDesc = __webpack_require__(14);
var toIObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54)('asyncIterator');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54)('observable');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(92);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(94);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(30);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(16);
var call = __webpack_require__(95);
var isArrayIter = __webpack_require__(96);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(97);
var getIterFn = __webpack_require__(98);

$export($export.S + $export.F * !__webpack_require__(100)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(26);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(5);
var createDesc = __webpack_require__(14);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(99);
var ITERATOR = __webpack_require__(7)('iterator');
var Iterators = __webpack_require__(26);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(104) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(8);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(15);
var toObject = __webpack_require__(16);
var IObject = __webpack_require__(28);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

var prefix_pinyin = { "北京": "b", "东城": "d", "西城": "x", "朝阳": "c", "丰台": "f", "石景山": "s", "海淀": "h", "门头沟": "m", "房山": "f", "通州": "t", "顺义": "s", "昌平": "c", "大兴": "d", "怀柔": "h", "平谷": "p", "密云": "m", "延庆": "y", "天津": "t", "和平": "h", "河东": "h", "河西": "h", "南开": "n", "河北": "h", "红桥": "h", "东丽": "d", "西青": "x", "津南": "j", "北辰": "b", "武清": "w", "宝坻": "b", "滨海新区": "b", "宁河": "n", "静海": "j", "蓟州": "j", "石家庄": "s", "长安": "c", "桥西": "q", "新华": "x", "井陉矿区": "j", "裕华": "y", "藁城": "g", "鹿泉": "l", "栾城": "l", "井陉": "j", "正定": "z", "行唐": "x", "灵寿": "l", "高邑": "g", "深泽": "s", "赞皇": "z", "无极": "w", "平山": "p", "元氏": "y", "赵县": "z", "辛集": "x", "晋州": "j", "新乐": "x", "唐山": "t", "路南": "l", "路北": "l", "古冶": "g", "开平": "k", "丰南": "f", "丰润": "f", "曹妃甸": "c", "滦南": "l", "乐亭": "l", "迁西": "q", "玉田": "y", "遵化": "z", "迁安": "q", "滦州": "l", "秦皇岛": "q", "海港": "h", "山海关": "s", "北戴河": "b", "抚宁": "f", "青龙": "q", "昌黎": "c", "卢龙": "l", "邯郸": "h", "邯山": "h", "丛台": "c", "复兴": "f", "峰峰矿区": "f", "肥乡": "f", "永年": "y", "临漳": "l", "成安": "c", "大名": "d", "涉县": "s", "磁县": "c", "邱县": "q", "鸡泽": "j", "广平": "g", "馆陶": "g", "魏县": "w", "曲周": "q", "武安": "w", "邢台": "x", "襄都": "x", "信都": "x", "临城": "l", "内丘": "n", "柏乡": "b", "隆尧": "l", "任县": "r", "南和": "n", "宁晋": "n", "巨鹿": "j", "新河": "x", "广宗": "g", "平乡": "p", "威县": "w", "清河": "q", "临西": "l", "南宫": "n", "沙河": "s", "保定": "b", "竞秀": "j", "莲池": "l", "满城": "m", "清苑": "q", "徐水": "x", "涞水": "l", "阜平": "f", "定兴": "d", "唐县": "t", "高阳": "g", "容城": "r", "涞源": "l", "望都": "w", "安新": "a", "易县": "y", "曲阳": "q", "蠡县": "l", "顺平": "s", "博野": "b", "雄县": "x", "涿州": "z", "定州": "d", "安国": "a", "高碑店": "g", "张家口": "z", "桥东": "q", "宣化": "x", "下花园": "x", "万全": "w", "崇礼": "c", "张北": "z", "康保": "k", "沽源": "g", "尚义": "s", "蔚县": "y", "阳原": "y", "怀安": "h", "怀来": "h", "涿鹿": "z", "赤城": "c", "承德": "c", "双桥": "s", "双滦": "s", "鹰手营子矿区": "y", "承德县": "c", "兴隆": "x", "滦平": "l", "隆化": "l", "丰宁": "f", "宽城": "k", "围场": "w", "平泉": "p", "沧州": "c", "运河": "y", "沧县": "c", "青县": "q", "东光": "d", "海兴": "h", "盐山": "y", "肃宁": "s", "南皮": "n", "吴桥": "w", "献县": "x", "孟村": "m", "泊头": "b", "任丘": "r", "黄骅": "h", "河间": "h", "廊坊": "l", "安次": "a", "广阳": "g", "固安": "g", "永清": "y", "香河": "x", "大城": "d", "文安": "w", "大厂": "d", "霸州": "b", "三河": "s", "衡水": "h", "桃城": "t", "冀州": "j", "枣强": "z", "武邑": "w", "武强": "w", "饶阳": "r", "安平": "a", "故城": "g", "景县": "j", "阜城": "f", "深州": "s", "山西": "s", "太原": "t", "小店": "x", "迎泽": "y", "杏花岭": "x", "尖草坪": "j", "万柏林": "w", "晋源": "j", "清徐": "q", "阳曲": "y", "娄烦": "l", "古交": "g", "大同": "d", "新荣": "x", "平城": "p", "云冈": "y", "云州": "y", "阳高": "y", "天镇": "t", "广灵": "g", "灵丘": "l", "浑源": "h", "左云": "z", "阳泉": "y", "城区": "c", "矿区": "k", "郊区": "j", "平定": "p", "盂县": "y", "长治": "c", "潞州": "l", "上党": "s", "屯留": "t", "潞城": "l", "襄垣": "x", "平顺": "p", "黎城": "l", "壶关": "h", "长子": "z", "武乡": "w", "沁县": "q", "沁源": "q", "晋城": "j", "沁水": "q", "阳城": "y", "陵川": "l", "泽州": "z", "高平": "g", "朔州": "s", "朔城": "s", "平鲁": "p", "山阴": "s", "应县": "y", "右玉": "y", "怀仁": "h", "晋中": "j", "榆次": "y", "太谷": "t", "榆社": "y", "左权": "z", "和顺": "h", "昔阳": "x", "寿阳": "s", "祁县": "q", "平遥": "p", "灵石": "l", "介休": "j", "运城": "y", "盐湖": "y", "临猗": "l", "万荣": "w", "闻喜": "w", "稷山": "j", "新绛": "x", "绛县": "j", "垣曲": "y", "夏县": "x", "平陆": "p", "芮城": "r", "永济": "y", "河津": "h", "忻州": "x", "忻府": "x", "定襄": "d", "五台": "w", "代县": "d", "繁峙": "f", "宁武": "n", "静乐": "j", "神池": "s", "五寨": "w", "岢岚": "k", "河曲": "h", "保德": "b", "偏关": "p", "原平": "y", "临汾": "l", "尧都": "y", "曲沃": "q", "翼城": "y", "襄汾": "x", "洪洞": "h", "古县": "g", "安泽": "a", "浮山": "f", "吉县": "j", "乡宁": "x", "大宁": "d", "隰县": "x", "永和": "y", "蒲县": "p", "汾西": "f", "侯马": "h", "霍州": "h", "吕梁": "l", "离石": "l", "文水": "w", "交城": "j", "兴县": "x", "临县": "l", "柳林": "l", "石楼": "s", "岚县": "l", "方山": "f", "中阳": "z", "交口": "j", "孝义": "x", "汾阳": "f", "内蒙古": "n", "呼和浩特": "h", "新城": "x", "回民": "h", "玉泉": "y", "赛罕": "s", "土默特左旗": "t", "托克托": "t", "和林格尔": "h", "清水河": "q", "武川": "w", "包头": "b", "东河": "d", "昆都仑": "k", "青山": "q", "石拐": "s", "白云鄂博矿区": "b", "九原": "j", "土默特右旗": "t", "固阳": "g", "达尔罕茂明安联合旗": "d", "乌海": "w", "海勃湾": "h", "海南": "h", "乌达": "w", "赤峰": "c", "红山": "h", "元宝山": "y", "松山": "s", "阿鲁科尔沁旗": "a", "巴林左旗": "b", "巴林右旗": "b", "林西": "l", "克什克腾旗": "k", "翁牛特旗": "w", "喀喇沁旗": "k", "宁城": "n", "敖汉旗": "a", "通辽": "t", "科尔沁": "k", "科尔沁左翼中旗": "k", "科尔沁左翼后旗": "k", "开鲁": "k", "库伦旗": "k", "奈曼旗": "n", "扎鲁特旗": "z", "霍林郭勒": "h", "鄂尔多斯": "e", "东胜": "d", "康巴什": "k", "达拉特旗": "d", "准格尔旗": "z", "鄂托克前旗": "e", "鄂托克旗": "e", "杭锦旗": "h", "乌审旗": "w", "伊金霍洛旗": "y", "呼伦贝尔": "h", "海拉尔": "h", "扎赉诺尔区": "z", "阿荣旗": "a", "莫力达瓦": "m", "鄂伦春自治旗": "e", "鄂温克族自治旗": "e", "陈巴尔虎旗": "c", "新巴尔虎左旗": "x", "新巴尔虎右旗": "x", "满洲里": "m", "牙克石": "y", "扎兰屯": "z", "额尔古纳": "e", "根河": "g", "巴彦淖尔": "b", "临河": "l", "五原": "w", "磴口": "d", "乌拉特前旗": "w", "乌拉特中旗": "w", "乌拉特后旗": "w", "杭锦后旗": "h", "乌兰察布": "w", "集宁": "j", "卓资": "z", "化德": "h", "商都": "s", "兴和": "x", "凉城": "l", "察哈尔右翼前旗": "c", "察哈尔右翼中旗": "c", "察哈尔右翼后旗": "c", "四子王旗": "s", "丰镇": "f", "兴安": "x", "乌兰浩特": "w", "阿尔山": "a", "科尔沁右翼前旗": "k", "科尔沁右翼中旗": "k", "扎赉特旗": "z", "突泉": "t", "锡林郭勒": "x", "二连浩特": "e", "锡林浩特": "x", "阿巴嘎旗": "a", "苏尼特左旗": "s", "苏尼特右旗": "s", "东乌珠穆沁旗": "d", "西乌珠穆沁旗": "x", "太仆寺旗": "t", "镶黄旗": "x", "正镶白旗": "z", "正蓝旗": "z", "多伦": "d", "阿拉善": "a", "阿拉善左旗": "a", "阿拉善右旗": "a", "额济纳旗": "e", "辽宁": "l", "沈阳": "s", "沈河": "s", "大东": "d", "皇姑": "h", "铁西": "t", "苏家屯": "s", "浑南": "h", "沈北新区": "s", "于洪": "y", "辽中": "l", "康平": "k", "法库": "f", "新民": "x", "大连": "d", "中山": "z", "西岗": "x", "沙河口": "s", "甘井子": "g", "旅顺口": "l", "金州": "j", "普兰店": "p", "长海": "c", "瓦房店": "w", "庄河": "z", "鞍山": "a", "铁东": "t", "立山": "l", "千山": "q", "台安": "t", "岫岩": "x", "海城": "h", "抚顺": "f", "新抚": "x", "东洲": "d", "望花": "w", "顺城": "s", "抚顺县": "f", "新宾": "x", "清原": "q", "本溪": "b", "溪湖": "x", "明山": "m", "南芬": "n", "本溪满族自治县": "b", "桓仁": "h", "丹东": "d", "元宝": "y", "振兴": "z", "振安": "z", "宽甸": "k", "东港": "d", "凤城": "f", "锦州": "j", "古塔": "g", "凌河": "l", "太和": "t", "黑山": "h", "义县": "y", "凌海": "l", "北镇": "b", "营口": "y", "站前": "z", "西市": "x", "鲅鱼圈": "b", "老边": "l", "盖州": "g", "大石桥": "d", "阜新": "f", "海州": "h", "新邱": "x", "太平": "t", "清河门": "q", "细河": "x", "阜新蒙古族自治县": "f", "彰武": "z", "辽阳": "l", "白塔": "b", "文圣": "w", "宏伟": "h", "弓长岭": "g", "太子河": "t", "辽阳县": "l", "灯塔": "d", "盘锦": "p", "双台子": "s", "兴隆台": "x", "大洼": "d", "盘山": "p", "铁岭": "t", "银州": "y", "铁岭县": "t", "西丰": "x", "昌图": "c", "调兵山": "d", "开原": "k", "双塔": "s", "龙城": "l", "朝阳县": "c", "建平": "j", "喀喇沁左翼": "k", "北票": "b", "凌源": "l", "葫芦岛": "h", "连山": "l", "龙港": "l", "南票": "n", "绥中": "s", "建昌": "j", "兴城": "x", "吉林": "j", "长春": "c", "南关": "n", "二道": "e", "绿园": "l", "双阳": "s", "九台": "j", "农安": "n", "榆树": "y", "德惠": "d", "公主岭": "g", "吉林市": "j", "昌邑": "c", "龙潭": "l", "船营": "c", "丰满": "f", "永吉": "y", "蛟河": "j", "桦甸": "h", "舒兰": "s", "磐石": "p", "四平": "s", "梨树": "l", "伊通": "y", "双辽": "s", "辽源": "l", "龙山": "l", "西安": "x", "东丰": "d", "东辽": "d", "通化": "t", "东昌": "d", "二道江": "e", "通化县": "t", "辉南": "h", "柳河": "l", "梅河口": "m", "集安": "j", "白山": "b", "浑江": "h", "江源": "j", "抚松": "f", "靖宇": "j", "长白": "c", "临江": "l", "松原": "s", "宁江": "n", "前郭尔罗斯": "q", "长岭": "c", "乾安": "q", "扶余": "f", "白城": "b", "洮北": "t", "镇赉": "z", "通榆": "t", "洮南": "t", "大安": "d", "延边": "y", "延吉": "y", "图们": "t", "敦化": "d", "珲春": "h", "龙井": "l", "和龙": "h", "汪清": "w", "安图": "a", "黑龙江": "h", "哈尔滨": "h", "道里": "d", "南岗": "n", "道外": "d", "平房": "p", "松北": "s", "香坊": "x", "呼兰": "h", "阿城": "a", "双城": "s", "依兰": "y", "方正": "f", "宾县": "b", "巴彦": "b", "木兰": "m", "通河": "t", "延寿": "y", "尚志": "s", "五常": "w", "齐齐哈尔": "q", "龙沙": "l", "建华": "j", "铁锋": "t", "昂昂溪": "a", "富拉尔基区": "f", "碾子山": "n", "梅里斯达斡尔族区": "m", "龙江": "l", "依安": "y", "泰来": "t", "甘南": "g", "富裕": "f", "克山": "k", "克东": "k", "拜泉": "b", "讷河": "n", "鸡西": "j", "鸡冠": "j", "恒山": "h", "滴道": "d", "城子河": "c", "麻山": "m", "鸡东": "j", "虎林": "h", "密山": "m", "鹤岗": "h", "向阳": "x", "工农": "g", "南山": "n", "东山": "d", "兴山": "x", "萝北": "l", "绥滨": "s", "双鸭山": "s", "尖山": "j", "岭东": "l", "四方台": "s", "宝山": "b", "集贤": "j", "友谊": "y", "宝清": "b", "饶河": "r", "大庆": "d", "萨尔图": "s", "龙凤": "l", "让胡路": "r", "红岗": "h", "肇州": "z", "肇源": "z", "林甸": "l", "杜尔伯特": "d", "伊春": "y", "伊美": "y", "乌翠": "w", "友好": "y", "嘉荫": "j", "汤旺": "t", "丰林": "f", "大箐山": "d", "南岔": "n", "金林": "j", "铁力": "t", "佳木斯": "j", "前进": "q", "东风": "d", "桦南": "h", "桦川": "h", "汤原": "t", "同江": "t", "富锦": "f", "抚远": "f", "七台河": "q", "新兴": "x", "桃山": "t", "茄子河": "q", "勃利": "b", "牡丹江": "m", "东安": "d", "阳明": "y", "爱民": "a", "林口": "l", "绥芬河": "s", "海林": "h", "宁安": "n", "穆棱": "m", "东宁": "d", "黑河": "h", "爱辉": "a", "逊克": "x", "孙吴": "s", "北安": "b", "五大连池": "w", "嫩江": "n", "绥化": "s", "北林": "b", "望奎": "w", "兰西": "l", "青冈": "q", "庆安": "q", "明水": "m", "绥棱": "s", "安达": "a", "肇东": "z", "海伦": "h", "大兴安岭": "d", "漠河": "m", "呼玛": "h", "塔河": "t", "加格达奇区": "j", "上海": "s", "黄浦": "h", "徐汇": "x", "长宁": "c", "静安": "j", "普陀": "p", "虹口": "h", "杨浦": "y", "闵行": "m", "嘉定": "j", "浦东新区": "p", "金山": "j", "松江": "s", "青浦": "q", "奉贤": "f", "崇明": "c", "江苏": "j", "南京": "n", "玄武": "x", "秦淮": "q", "建邺": "j", "鼓楼": "g", "浦口": "p", "栖霞": "q", "雨花台": "y", "江宁": "j", "六合": "l", "溧水": "l", "高淳": "g", "无锡": "w", "锡山": "x", "惠山": "h", "滨湖": "b", "梁溪": "l", "新吴": "x", "江阴": "j", "宜兴": "y", "徐州": "x", "云龙": "y", "贾汪": "j", "泉山": "q", "铜山": "t", "丰县": "f", "沛县": "p", "睢宁": "s", "新沂": "x", "邳州": "p", "常州": "c", "天宁": "t", "钟楼": "z", "新北": "x", "武进": "w", "金坛": "j", "溧阳": "l", "苏州": "s", "虎丘": "h", "吴中": "w", "相城": "x", "姑苏": "g", "吴江": "w", "工业园区": "g", "常熟": "c", "张家港": "z", "昆山": "k", "太仓": "t", "南通": "n", "崇川": "c", "港闸": "g", "如东": "r", "启东": "q", "如皋": "r", "海门": "h", "海安": "h", "连云港": "l", "连云": "l", "赣榆": "g", "东海": "d", "灌云": "g", "灌南": "g", "淮安": "h", "淮安区": "h", "淮阴": "h", "清江浦": "q", "洪泽": "h", "涟水": "l", "盱眙": "x", "金湖": "j", "盐城": "y", "亭湖": "t", "盐都": "y", "大丰": "d", "响水": "x", "滨海": "b", "阜宁": "f", "射阳": "s", "建湖": "j", "东台": "d", "扬州": "y", "广陵": "g", "邗江": "h", "江都": "j", "宝应": "b", "仪征": "y", "高邮": "g", "镇江": "z", "京口": "j", "润州": "r", "丹徒": "d", "丹阳": "d", "扬中": "y", "句容": "j", "泰州": "t", "海陵": "h", "高港": "g", "姜堰": "j", "兴化": "x", "靖江": "j", "泰兴": "t", "宿迁": "s", "宿城": "s", "宿豫": "s", "沭阳": "s", "泗阳": "s", "泗洪": "s", "浙江": "z", "杭州": "h", "上城": "s", "下城": "x", "江干": "j", "拱墅": "g", "西湖": "x", "滨江": "b", "萧山": "x", "余杭": "y", "富阳": "f", "临安": "l", "桐庐": "t", "淳安": "c", "建德": "j", "宁波": "n", "海曙": "h", "江北": "j", "北仑": "b", "镇海": "z", "鄞州": "y", "奉化": "f", "象山": "x", "宁海": "n", "余姚": "y", "慈溪": "c", "温州": "w", "鹿城": "l", "龙湾": "l", "瓯海": "o", "洞头": "d", "永嘉": "y", "平阳": "p", "苍南": "c", "文成": "w", "泰顺": "t", "瑞安": "r", "乐清": "y", "嘉兴": "j", "南湖": "n", "秀洲": "x", "嘉善": "j", "海盐": "h", "海宁": "h", "平湖": "p", "桐乡": "t", "湖州": "h", "吴兴": "w", "南浔": "n", "德清": "d", "长兴": "c", "安吉": "a", "绍兴": "s", "越城": "y", "柯桥": "k", "上虞": "s", "新昌": "x", "诸暨": "z", "嵊州": "s", "金华": "j", "婺城": "w", "金东": "j", "武义": "w", "浦江": "p", "磐安": "p", "兰溪": "l", "义乌": "y", "东阳": "d", "永康": "y", "衢州": "q", "柯城": "k", "衢江": "q", "常山": "c", "开化": "k", "龙游": "l", "江山": "j", "舟山": "z", "定海": "d", "岱山": "d", "嵊泗": "s", "台州": "t", "椒江": "j", "黄岩": "h", "路桥": "l", "三门": "s", "天台": "t", "仙居": "x", "温岭": "w", "临海": "l", "玉环": "y", "丽水": "l", "莲都": "l", "青田": "q", "缙云": "j", "遂昌": "s", "松阳": "s", "云和": "y", "庆元": "q", "景宁": "j", "龙泉": "l", "安徽": "a", "合肥": "h", "瑶海": "y", "庐阳": "l", "蜀山": "s", "包河": "b", "长丰": "c", "肥东": "f", "肥西": "f", "庐江": "l", "巢湖": "c", "芜湖": "w", "镜湖": "j", "弋江": "y", "鸠江": "j", "三山": "s", "芜湖县": "w", "繁昌": "f", "南陵": "n", "无为": "w", "蚌埠": "b", "龙子湖": "l", "蚌山": "b", "禹会": "y", "淮上": "h", "怀远": "h", "五河": "w", "固镇": "g", "淮南": "h", "大通": "d", "田家庵": "t", "谢家集": "x", "八公山": "b", "潘集": "p", "凤台": "f", "寿县": "s", "马鞍山": "m", "花山": "h", "雨山": "y", "博望": "b", "当涂": "d", "含山": "h", "和县": "h", "淮北": "h", "杜集": "d", "相山": "x", "烈山": "l", "濉溪": "s", "铜陵": "t", "铜官": "t", "义安": "y", "枞阳": "z", "安庆": "a", "迎江": "y", "大观": "d", "宜秀": "y", "怀宁": "h", "太湖": "t", "宿松": "s", "望江": "w", "岳西": "y", "桐城": "t", "潜山": "q", "黄山": "h", "屯溪": "t", "黄山区": "h", "徽州": "h", "歙县": "s", "休宁": "x", "黟县": "y", "祁门": "q", "滁州": "c", "琅琊": "l", "南谯": "n", "来安": "l", "全椒": "q", "定远": "d", "凤阳": "f", "天长": "t", "明光": "m", "阜阳": "f", "颍州": "y", "颍东": "y", "颍泉": "y", "临泉": "l", "阜南": "f", "颍上": "y", "界首": "j", "宿州": "s", "埇桥": "y", "砀山": "d", "萧县": "x", "灵璧": "l", "泗县": "s", "六安": "l", "金安": "j", "裕安": "y", "叶集": "y", "霍邱": "h", "舒城": "s", "金寨": "j", "霍山": "h", "亳州": "b", "谯城": "q", "涡阳": "g", "蒙城": "m", "利辛": "l", "池州": "c", "贵池": "g", "东至": "d", "石台": "s", "青阳": "q", "宣城": "x", "宣州": "x", "郎溪": "l", "泾县": "j", "绩溪": "j", "旌德": "j", "宁国": "n", "广德": "g", "福建": "f", "福州": "f", "台江": "t", "仓山": "c", "马尾": "m", "晋安": "j", "长乐": "c", "闽侯": "m", "连江": "l", "罗源": "l", "闽清": "m", "永泰": "y", "平潭": "p", "福清": "f", "厦门": "x", "思明": "s", "海沧": "h", "湖里": "h", "集美": "j", "同安": "t", "翔安": "x", "莆田": "p", "城厢": "c", "涵江": "h", "荔城": "l", "秀屿": "x", "仙游": "x", "三明": "s", "梅列": "m", "三元": "s", "明溪": "m", "清流": "q", "宁化": "n", "大田": "d", "尤溪": "y", "沙县": "s", "将乐": "j", "泰宁": "t", "建宁": "j", "永安": "y", "泉州": "q", "鲤城": "l", "丰泽": "f", "洛江": "l", "泉港": "q", "惠安": "h", "安溪": "a", "永春": "y", "德化": "d", "金门": "j", "石狮": "s", "晋江": "j", "南安": "n", "漳州": "z", "芗城": "x", "龙文": "l", "云霄": "y", "漳浦": "z", "诏安": "z", "长泰": "c", "南靖": "n", "平和": "p", "华安": "h", "龙海": "l", "南平": "n", "延平": "y", "建阳": "j", "顺昌": "s", "浦城": "p", "光泽": "g", "松溪": "s", "政和": "z", "邵武": "s", "武夷山": "w", "建瓯": "j", "龙岩": "l", "新罗": "x", "永定": "y", "长汀": "c", "上杭": "s", "武平": "w", "连城": "l", "漳平": "z", "宁德": "n", "蕉城": "j", "霞浦": "x", "古田": "g", "屏南": "p", "寿宁": "s", "周宁": "z", "柘荣": "z", "福安": "f", "福鼎": "f", "江西": "j", "南昌": "n", "东湖": "d", "青云谱": "q", "青山湖": "q", "新建": "x", "红谷滩": "h", "南昌县": "n", "安义": "a", "进贤": "j", "景德镇": "j", "昌江": "c", "珠山": "z", "浮梁": "f", "乐平": "l", "萍乡": "p", "安源": "a", "湘东": "x", "莲花": "l", "上栗": "s", "芦溪": "l", "九江": "j", "濂溪": "l", "浔阳": "x", "柴桑": "c", "武宁": "w", "修水": "x", "永修": "y", "德安": "d", "都昌": "d", "湖口": "h", "彭泽": "p", "瑞昌": "r", "共青城": "g", "庐山": "l", "新余": "x", "渝水": "y", "分宜": "f", "鹰潭": "y", "月湖": "y", "余江": "y", "贵溪": "g", "赣州": "g", "章贡": "z", "南康": "n", "赣县": "g", "信丰": "x", "大余": "d", "上犹": "s", "崇义": "c", "安远": "a", "龙南": "l", "定南": "d", "全南": "q", "宁都": "n", "于都": "y", "兴国": "x", "会昌": "h", "寻乌": "x", "石城": "s", "瑞金": "r", "吉安": "j", "吉州": "j", "青原": "q", "吉安县": "j", "吉水": "j", "峡江": "x", "新干": "x", "永丰": "y", "泰和": "t", "遂川": "s", "万安": "w", "安福": "a", "永新": "y", "井冈山": "j", "宜春": "y", "袁州": "y", "奉新": "f", "万载": "w", "上高": "s", "宜丰": "y", "靖安": "j", "铜鼓": "t", "丰城": "f", "樟树": "z", "高安": "g", "抚州": "f", "临川": "l", "东乡": "d", "南城": "n", "黎川": "l", "南丰": "n", "崇仁": "c", "乐安": "l", "宜黄": "y", "金溪": "j", "资溪": "z", "广昌": "g", "上饶": "s", "信州": "x", "广丰": "g", "广信": "g", "玉山": "y", "铅山": "y", "横峰": "h", "弋阳": "y", "余干": "y", "鄱阳": "p", "万年": "w", "婺源": "w", "德兴": "d", "山东": "s", "济南": "j", "历下": "l", "市中": "s", "槐荫": "h", "天桥": "t", "历城": "l", "长清": "c", "章丘": "z", "济阳": "j", "莱芜": "l", "钢城": "g", "平阴": "p", "商河": "s", "青岛": "q", "市南": "s", "市北": "s", "黄岛": "h", "崂山": "l", "李沧": "l", "城阳": "c", "即墨": "j", "胶州": "j", "平度": "p", "莱西": "l", "淄博": "z", "淄川": "z", "张店": "z", "博山": "b", "临淄": "l", "周村": "z", "桓台": "h", "高青": "g", "沂源": "y", "枣庄": "z", "薛城": "x", "峄城": "y", "台儿庄": "t", "山亭": "s", "滕州": "t", "东营": "d", "东营区": "d", "河口": "h", "垦利": "k", "利津": "l", "广饶": "g", "烟台": "y", "芝罘": "z", "福山": "f", "牟平": "m", "莱山": "l", "蓬莱": "p", "龙口": "l", "莱阳": "l", "莱州": "l", "招远": "z", "海阳": "h", "潍坊": "w", "潍城": "w", "寒亭": "h", "坊子": "f", "奎文": "k", "临朐": "l", "昌乐": "c", "青州": "q", "诸城": "z", "寿光": "s", "安丘": "a", "高密": "g", "济宁": "j", "任城": "r", "兖州": "y", "微山": "w", "鱼台": "y", "金乡": "j", "嘉祥": "j", "汶上": "w", "泗水": "s", "梁山": "l", "曲阜": "q", "邹城": "z", "泰安": "t", "泰山": "t", "岱岳": "d", "宁阳": "n", "东平": "d", "新泰": "x", "肥城": "f", "威海": "w", "环翠": "h", "文登": "w", "荣成": "r", "乳山": "r", "日照": "r", "岚山": "l", "五莲": "w", "莒县": "j", "临沂": "l", "兰山": "l", "罗庄": "l", "沂南": "y", "郯城": "t", "沂水": "y", "兰陵": "l", "费县": "f", "平邑": "p", "莒南": "j", "蒙阴": "m", "临沭": "l", "德州": "d", "德城": "d", "陵城": "l", "宁津": "n", "庆云": "q", "临邑": "l", "齐河": "q", "平原": "p", "夏津": "x", "武城": "w", "乐陵": "l", "禹城": "y", "聊城": "l", "东昌府": "d", "茌平": "c", "阳谷": "y", "莘县": "s", "东阿": "d", "冠县": "g", "高唐": "g", "临清": "l", "滨州": "b", "滨城": "b", "沾化": "z", "惠民": "h", "阳信": "y", "无棣": "w", "博兴": "b", "邹平": "z", "菏泽": "h", "牡丹": "m", "定陶": "d", "曹县": "c", "单县": "s", "成武": "c", "巨野": "j", "郓城": "y", "鄄城": "j", "东明": "d", "河南": "h", "郑州": "z", "中原": "z", "二七": "e", "管城回族区": "g", "金水": "j", "上街": "s", "惠济": "h", "中牟": "z", "巩义": "g", "荥阳": "x", "新密": "x", "新郑": "x", "登封": "d", "开封": "k", "龙亭": "l", "顺河回族区": "s", "禹王台": "y", "祥符": "x", "杞县": "q", "通许": "t", "尉氏": "w", "兰考": "l", "洛阳": "l", "老城": "l", "西工": "x", "瀍河回族区": "c", "涧西": "j", "吉利": "j", "洛龙": "l", "孟津": "m", "新安": "x", "栾川": "l", "嵩县": "s", "汝阳": "r", "宜阳": "y", "洛宁": "l", "伊川": "y", "偃师": "y", "平顶山": "p", "卫东": "w", "石龙": "s", "湛河": "z", "宝丰": "b", "叶县": "y", "鲁山": "l", "郏县": "j", "舞钢": "w", "汝州": "r", "安阳": "a", "文峰": "w", "北关": "b", "殷都": "y", "龙安": "l", "安阳县": "a", "汤阴": "t", "滑县": "h", "内黄": "n", "林州": "l", "鹤壁": "h", "鹤山": "h", "山城": "s", "淇滨": "q", "浚县": "x", "淇县": "q", "新乡": "x", "红旗": "h", "卫滨": "w", "凤泉": "f", "牧野": "m", "新乡县": "x", "获嘉": "h", "原阳": "y", "延津": "y", "封丘": "f", "卫辉": "w", "辉县": "h", "长垣": "c", "焦作": "j", "解放": "j", "中站": "z", "马村": "m", "山阳": "s", "修武": "x", "博爱": "b", "武陟": "w", "温县": "w", "沁阳": "q", "孟州": "m", "濮阳": "p", "华龙": "h", "清丰": "q", "南乐": "n", "范县": "f", "台前": "t", "濮阳县": "p", "许昌": "x", "魏都": "w", "建安": "j", "鄢陵": "y", "襄城": "x", "禹州": "y", "长葛": "c", "漯河": "l", "源汇": "y", "郾城": "y", "召陵": "s", "舞阳": "w", "临颍": "l", "三门峡": "s", "湖滨": "h", "陕州": "s", "渑池": "m", "卢氏": "l", "义马": "y", "灵宝": "l", "南阳": "n", "宛城": "w", "卧龙": "w", "南召": "n", "方城": "f", "西峡": "x", "镇平": "z", "内乡": "n", "淅川": "x", "社旗": "s", "唐河": "t", "新野": "x", "桐柏": "t", "邓州": "d", "商丘": "s", "梁园": "l", "睢阳": "s", "民权": "m", "睢县": "s", "宁陵": "n", "柘城": "z", "虞城": "y", "夏邑": "x", "永城": "y", "信阳": "x", "浉河": "s", "平桥": "p", "罗山": "l", "光山": "g", "新县": "x", "商城": "s", "固始": "g", "潢川": "h", "淮滨": "h", "息县": "x", "周口": "z", "川汇": "c", "淮阳": "h", "扶沟": "f", "西华": "x", "商水": "s", "沈丘": "s", "郸城": "d", "太康": "t", "鹿邑": "l", "项城": "x", "驻马店": "z", "驿城": "y", "西平": "x", "上蔡": "s", "平舆": "p", "正阳": "z", "确山": "q", "泌阳": "b", "汝南": "r", "遂平": "s", "新蔡": "x", "济源": "j", "湖北": "h", "武汉": "w", "江岸": "j", "江汉": "j", "硚口": "q", "汉阳": "h", "武昌": "w", "洪山": "h", "东西湖": "d", "汉南": "h", "蔡甸": "c", "江夏": "j", "黄陂": "h", "新洲": "x", "黄石": "h", "黄石港": "h", "西塞山": "x", "下陆": "x", "铁山": "t", "阳新": "y", "大冶": "d", "十堰": "s", "茅箭": "m", "张湾": "z", "郧阳": "y", "郧西": "y", "竹山": "z", "竹溪": "z", "房县": "f", "丹江口": "d", "宜昌": "y", "西陵": "x", "伍家岗": "w", "点军": "d", "猇亭": "x", "夷陵": "y", "远安": "y", "秭归": "z", "长阳": "c", "五峰": "w", "宜都": "y", "当阳": "d", "枝江": "z", "襄阳": "x", "樊城": "f", "襄州": "x", "南漳": "n", "谷城": "g", "保康": "b", "老河口": "l", "枣阳": "z", "宜城": "y", "鄂州": "e", "梁子湖": "l", "华容": "h", "鄂城": "e", "荆门": "j", "东宝": "d", "掇刀": "d", "沙洋": "s", "钟祥": "z", "京山": "j", "孝感": "x", "孝南": "x", "孝昌": "x", "大悟": "d", "云梦": "y", "应城": "y", "安陆": "a", "汉川": "h", "荆州": "j", "沙市": "s", "荆州区": "j", "公安": "g", "监利": "j", "江陵": "j", "石首": "s", "洪湖": "h", "松滋": "s", "黄冈": "h", "黄州": "h", "团风": "t", "红安": "h", "罗田": "l", "英山": "y", "浠水": "x", "蕲春": "q", "黄梅": "h", "麻城": "m", "武穴": "w", "咸宁": "x", "咸安": "x", "嘉鱼": "j", "通城": "t", "崇阳": "c", "通山": "t", "赤壁": "c", "随州": "s", "曾都": "z", "随县": "s", "广水": "g", "恩施": "e", "恩施市": "e", "利川": "l", "建始": "j", "巴东": "b", "宣恩": "x", "咸丰": "x", "来凤": "l", "鹤峰": "h", "仙桃": "x", "潜江": "q", "天门": "t", "神农架": "s", "神农架林区": "s", "湖南": "h", "长沙": "c", "芙蓉": "f", "天心": "t", "岳麓": "y", "开福": "k", "雨花": "y", "望城": "w", "长沙县": "c", "浏阳": "l", "宁乡": "n", "株洲": "z", "荷塘": "h", "芦淞": "l", "石峰": "s", "天元": "t", "渌口": "l", "攸县": "y", "茶陵": "c", "炎陵": "y", "醴陵": "l", "湘潭": "x", "雨湖": "y", "岳塘": "y", "湘潭县": "x", "湘乡": "x", "韶山": "s", "衡阳": "h", "珠晖": "z", "雁峰": "y", "石鼓": "s", "蒸湘": "z", "南岳": "n", "衡阳县": "h", "衡南": "h", "衡山": "h", "衡东": "h", "祁东": "q", "耒阳": "l", "常宁": "c", "邵阳": "s", "双清": "s", "大祥": "d", "北塔": "b", "新邵": "x", "邵阳县": "s", "隆回": "l", "洞口": "d", "绥宁": "s", "新宁": "x", "城步": "c", "武冈": "w", "邵东": "s", "岳阳": "y", "岳阳楼": "y", "云溪": "y", "君山": "j", "岳阳县": "y", "湘阴": "x", "平江": "p", "汨罗": "m", "临湘": "l", "常德": "c", "武陵": "w", "鼎城": "d", "安乡": "a", "汉寿": "h", "澧县": "l", "临澧": "l", "桃源": "t", "石门": "s", "津市": "j", "张家界": "z", "武陵源": "w", "慈利": "c", "桑植": "s", "益阳": "y", "资阳": "z", "赫山": "h", "南县": "n", "桃江": "t", "安化": "a", "沅江": "y", "郴州": "c", "北湖": "b", "苏仙": "s", "桂阳": "g", "宜章": "y", "永兴": "y", "嘉禾": "j", "临武": "l", "汝城": "r", "桂东": "g", "安仁": "a", "资兴": "z", "永州": "y", "零陵": "l", "冷水滩": "l", "祁阳": "q", "双牌": "s", "道县": "d", "江永": "j", "宁远": "n", "蓝山": "l", "新田": "x", "江华": "j", "怀化": "h", "鹤城": "h", "中方": "z", "沅陵": "y", "辰溪": "c", "溆浦": "x", "会同": "h", "麻阳": "m", "新晃": "x", "芷江": "z", "靖州": "j", "通道": "t", "洪江": "h", "娄底": "l", "娄星": "l", "双峰": "s", "新化": "x", "冷水江": "l", "涟源": "l", "湘西": "x", "吉首": "j", "泸溪": "l", "凤凰": "f", "花垣": "h", "保靖": "b", "古丈": "g", "永顺": "y", "广东": "g", "广州": "g", "荔湾": "l", "越秀": "y", "海珠": "h", "天河": "t", "白云": "b", "黄埔": "h", "番禺": "p", "花都": "h", "南沙": "n", "从化": "c", "增城": "z", "韶关": "s", "武江": "w", "浈江": "z", "曲江": "q", "始兴": "s", "仁化": "r", "翁源": "w", "乳源": "r", "新丰": "x", "乐昌": "l", "南雄": "n", "深圳": "s", "罗湖": "l", "福田": "f", "宝安": "b", "龙岗": "l", "盐田": "y", "龙华": "l", "坪山": "p", "光明": "g", "珠海": "z", "香洲": "x", "斗门": "d", "金湾": "j", "汕头": "s", "龙湖": "l", "金平": "j", "濠江": "h", "潮阳": "c", "潮南": "c", "澄海": "c", "南澳": "n", "佛山": "f", "禅城": "c", "南海": "n", "顺德": "s", "三水": "s", "高明": "g", "江门": "j", "蓬江": "p", "江海": "j", "新会": "x", "台山": "t", "恩平": "e", "湛江": "z", "赤坎": "c", "霞山": "x", "坡头": "p", "麻章": "m", "遂溪": "s", "徐闻": "x", "廉江": "l", "雷州": "l", "吴川": "w", "茂名": "m", "茂南": "m", "电白": "d", "高州": "g", "化州": "h", "信宜": "x", "肇庆": "z", "端州": "d", "鼎湖": "d", "高要": "g", "广宁": "g", "怀集": "h", "封开": "f", "德庆": "d", "四会": "s", "惠州": "h", "惠城": "h", "惠阳": "h", "博罗": "b", "惠东": "h", "龙门": "l", "梅州": "m", "梅江": "m", "梅县": "m", "大埔": "d", "丰顺": "f", "五华": "w", "平远": "p", "蕉岭": "j", "兴宁": "x", "汕尾": "s", "海丰": "h", "陆河": "l", "陆丰": "l", "河源": "h", "源城": "y", "紫金": "z", "龙川": "l", "连平": "l", "东源": "d", "阳江": "y", "江城": "j", "阳东": "y", "阳西": "y", "阳春": "y", "清远": "q", "清城": "q", "清新区": "q", "佛冈": "f", "阳山": "y", "连南": "l", "英德": "y", "连州": "l", "东莞": "d", "潮州": "c", "湘桥": "x", "潮安": "c", "饶平": "r", "揭阳": "j", "榕城": "r", "揭东": "j", "揭西": "j", "惠来": "h", "普宁": "p", "云浮": "y", "云城": "y", "云安": "y", "郁南": "y", "罗定": "l", "广西": "g", "南宁": "n", "青秀": "q", "江南": "j", "西乡塘": "x", "良庆": "l", "邕宁": "y", "武鸣": "w", "隆安": "l", "马山": "m", "上林": "s", "宾阳": "b", "横县": "h", "柳州": "l", "城中": "c", "鱼峰": "y", "柳南": "l", "柳北": "l", "柳江": "l", "柳城": "l", "鹿寨": "l", "融安": "r", "融水": "r", "三江": "s", "桂林": "g", "秀峰": "x", "叠彩": "d", "七星": "q", "雁山": "y", "临桂": "l", "阳朔": "y", "灵川": "l", "全州": "q", "永福": "y", "灌阳": "g", "龙胜": "l", "资源": "z", "平乐": "p", "恭城": "g", "荔浦": "l", "梧州": "w", "万秀": "w", "长洲": "c", "龙圩": "l", "苍梧": "c", "藤县": "t", "蒙山": "m", "岑溪": "c", "北海": "b", "银海": "y", "铁山港": "t", "合浦": "h", "防城港": "f", "港口": "g", "防城": "f", "上思": "s", "东兴": "d", "钦州": "q", "钦南": "q", "钦北": "q", "灵山": "l", "浦北": "p", "贵港": "g", "港北": "g", "港南": "g", "覃塘": "q", "平南": "p", "桂平": "g", "玉林": "y", "玉州": "y", "福绵": "f", "容县": "r", "陆川": "l", "博白": "b", "兴业": "x", "北流": "b", "百色": "b", "右江": "y", "田阳": "t", "田东": "t", "德保": "d", "那坡": "n", "凌云": "l", "乐业": "l", "田林": "t", "西林": "x", "隆林": "l", "靖西": "j", "平果": "p", "贺州": "h", "八步": "b", "平桂": "p", "昭平": "z", "钟山": "z", "富川": "f", "河池": "h", "金城江": "j", "宜州": "y", "南丹": "n", "天峨": "t", "凤山": "f", "东兰": "d", "罗城": "l", "环江": "h", "巴马": "b", "都安": "d", "大化": "d", "来宾": "l", "兴宾": "x", "忻城": "x", "象州": "x", "武宣": "w", "金秀": "j", "合山": "h", "崇左": "c", "江州": "j", "扶绥": "f", "宁明": "n", "龙州": "l", "大新": "d", "天等": "t", "凭祥": "p", "海口": "h", "秀英": "x", "琼山": "q", "美兰": "m", "三亚": "s", "海棠": "h", "吉阳": "j", "天涯": "t", "崖州": "y", "三沙": "s", "西沙": "x", "儋州": "d", "五指山": "w", "琼海": "q", "文昌": "w", "万宁": "w", "东方": "d", "定安": "d", "屯昌": "t", "澄迈": "c", "临高": "l", "白沙": "b", "乐东": "l", "陵水": "l", "保亭": "b", "琼中": "q", "重庆": "c", "重庆城区": "c", "万州": "w", "涪陵": "f", "渝中": "y", "大渡口": "d", "沙坪坝": "s", "九龙坡": "j", "南岸": "n", "北碚": "b", "綦江": "q", "大足": "d", "渝北": "y", "巴南": "b", "黔江": "q", "长寿": "c", "江津": "j", "合川": "h", "永川": "y", "南川": "n", "璧山": "b", "铜梁": "t", "潼南": "t", "荣昌": "r", "开州": "k", "梁平": "l", "武隆": "w", "重庆郊县": "c", "城口": "c", "丰都": "f", "垫江": "d", "忠县": "z", "云阳": "y", "奉节": "f", "巫山": "w", "巫溪": "w", "石柱": "s", "秀山": "x", "酉阳": "y", "彭水": "p", "四川": "s", "成都": "c", "锦江": "j", "青羊": "q", "金牛": "j", "武侯": "w", "成华": "c", "龙泉驿": "l", "青白江": "q", "新都": "x", "温江": "w", "双流": "s", "郫都": "p", "金堂": "j", "大邑": "d", "蒲江": "p", "新津": "x", "都江堰": "d", "彭州": "p", "邛崃": "q", "崇州": "c", "简阳": "j", "自贡": "z", "自流井": "z", "贡井": "g", "沿滩": "y", "荣县": "r", "富顺": "f", "攀枝花": "p", "东区": "d", "西区": "x", "仁和": "r", "米易": "m", "盐边": "y", "泸州": "l", "江阳": "j", "纳溪": "n", "龙马潭": "l", "泸县": "l", "合江": "h", "叙永": "x", "古蔺": "g", "德阳": "d", "旌阳": "j", "罗江": "l", "中江": "z", "广汉": "g", "什邡": "s", "绵竹": "m", "绵阳": "m", "涪城": "f", "游仙": "y", "安州": "a", "三台": "s", "盐亭": "y", "梓潼": "z", "北川": "b", "平武": "p", "江油": "j", "广元": "g", "利州": "l", "昭化": "z", "朝天": "c", "旺苍": "w", "青川": "q", "剑阁": "j", "苍溪": "c", "遂宁": "s", "船山": "c", "安居": "a", "蓬溪": "p", "大英": "d", "射洪": "s", "内江": "n", "威远": "w", "资中": "z", "隆昌": "l", "乐山": "l", "沙湾": "s", "五通桥": "w", "金口河": "j", "犍为": "q", "井研": "j", "夹江": "j", "沐川": "m", "峨边": "e", "马边": "m", "峨眉山": "e", "南充": "n", "顺庆": "s", "高坪": "g", "嘉陵": "j", "南部": "n", "营山": "y", "蓬安": "p", "仪陇": "y", "西充": "x", "阆中": "l", "眉山": "m", "东坡": "d", "彭山": "p", "仁寿": "r", "洪雅": "h", "丹棱": "d", "青神": "q", "宜宾": "y", "翠屏": "c", "南溪": "n", "叙州": "x", "江安": "j", "高县": "g", "珙县": "g", "筠连": "j", "兴文": "x", "屏山": "p", "广安": "g", "广安区": "g", "前锋": "q", "岳池": "y", "武胜": "w", "邻水": "l", "华蓥": "h", "达州": "d", "通川": "t", "达川": "d", "宣汉": "x", "开江": "k", "大竹": "d", "渠县": "q", "万源": "w", "雅安": "y", "雨城": "y", "名山": "m", "荥经": "y", "汉源": "h", "石棉": "s", "天全": "t", "芦山": "l", "宝兴": "b", "巴中": "b", "巴州": "b", "恩阳": "e", "通江": "t", "南江": "n", "平昌": "p", "雁江": "y", "安岳": "a", "乐至": "l", "阿坝": "a", "马尔康": "m", "汶川": "w", "理县": "l", "茂县": "m", "松潘": "s", "九寨沟": "j", "金川": "j", "小金": "x", "黑水": "h", "壤塘": "r", "阿坝县": "a", "若尔盖": "r", "红原": "h", "甘孜": "g", "康定": "k", "泸定": "l", "丹巴": "d", "九龙": "j", "雅江": "y", "道孚": "d", "炉霍": "l", "甘孜县": "g", "新龙": "x", "德格": "d", "白玉": "b", "石渠": "s", "色达": "s", "理塘": "l", "巴塘": "b", "乡城": "x", "稻城": "d", "得荣": "d", "凉山": "l", "西昌": "x", "木里": "m", "盐源": "y", "德昌": "d", "会理": "h", "会东": "h", "宁南": "n", "普格": "p", "布拖": "b", "金阳": "j", "昭觉": "z", "喜德": "x", "冕宁": "m", "越西": "y", "甘洛": "g", "美姑": "m", "雷波": "l", "贵州": "g", "贵阳": "g", "南明": "n", "云岩": "y", "花溪": "h", "乌当": "w", "观山湖": "g", "开阳": "k", "息烽": "x", "修文": "x", "清镇": "q", "六盘水": "l", "六枝特": "l", "水城": "s", "盘州": "p", "遵义": "z", "红花岗": "h", "汇川": "h", "播州": "b", "桐梓": "t", "绥阳": "s", "正安": "z", "道真": "d", "务川": "w", "凤冈": "f", "湄潭": "m", "余庆": "y", "习水": "x", "赤水": "c", "仁怀": "r", "安顺": "a", "西秀": "x", "平坝": "p", "普定": "p", "镇宁": "z", "关岭": "g", "紫云": "z", "毕节": "b", "七星关": "q", "大方": "d", "黔西": "q", "金沙": "j", "织金": "z", "纳雍": "n", "威宁": "w", "赫章": "h", "铜仁": "t", "碧江": "b", "万山": "w", "江口": "j", "玉屏": "y", "石阡": "s", "思南": "s", "印江": "y", "德江": "d", "沿河": "y", "松桃": "s", "黔西南": "q", "兴义": "x", "兴仁": "x", "普安": "p", "晴隆": "q", "贞丰": "z", "望谟": "w", "册亨": "c", "安龙": "a", "黔东南": "q", "凯里": "k", "黄平": "h", "施秉": "s", "三穗": "s", "镇远": "z", "岑巩": "c", "天柱": "t", "锦屏": "j", "剑河": "j", "黎平": "l", "榕江": "r", "从江": "c", "雷山": "l", "麻江": "m", "丹寨": "d", "黔南": "q", "都匀": "d", "福泉": "f", "荔波": "l", "贵定": "g", "瓮安": "w", "独山": "d", "平塘": "p", "罗甸": "l", "长顺": "c", "龙里": "l", "惠水": "h", "三都": "s", "云南": "y", "昆明": "k", "盘龙": "p", "官渡": "g", "西山": "x", "东川": "d", "呈贡": "c", "晋宁": "j", "富民": "f", "宜良": "y", "石林": "s", "嵩明": "s", "禄劝": "l", "寻甸": "x", "安宁": "a", "曲靖": "q", "麒麟": "q", "沾益": "z", "马龙": "m", "陆良": "l", "师宗": "s", "罗平": "l", "富源": "f", "会泽": "h", "宣威": "x", "玉溪": "y", "红塔": "h", "江川": "j", "通海": "t", "华宁": "h", "易门": "y", "峨山": "e", "新平": "x", "元江": "y", "澄江": "c", "保山": "b", "隆阳": "l", "施甸": "s", "龙陵": "l", "昌宁": "c", "腾冲": "t", "昭通": "z", "昭阳": "z", "鲁甸": "l", "巧家": "q", "盐津": "y", "大关": "d", "永善": "y", "绥江": "s", "镇雄": "z", "彝良": "y", "威信": "w", "水富": "s", "丽江": "l", "古城": "g", "玉龙": "y", "永胜": "y", "华坪": "h", "宁蒗": "n", "普洱": "p", "思茅": "s", "宁洱": "n", "墨江": "m", "景东": "j", "景谷": "j", "镇沅": "z", "孟连": "m", "澜沧": "l", "西盟": "x", "临沧": "l", "临翔": "l", "凤庆": "f", "云县": "y", "永德": "y", "镇康": "z", "双江": "s", "耿马": "g", "沧源": "c", "楚雄": "c", "楚雄市": "c", "双柏": "s", "牟定": "m", "南华": "n", "姚安": "y", "大姚": "d", "永仁": "y", "元谋": "y", "武定": "w", "禄丰": "l", "红河": "h", "个旧": "g", "开远": "k", "蒙自": "m", "弥勒": "m", "屏边": "p", "建水": "j", "石屏": "s", "泸西": "l", "元阳": "y", "红河县": "h", "绿春": "l", "文山": "w", "文山市": "w", "砚山": "y", "西畴": "x", "麻栗坡": "m", "马关": "m", "丘北": "q", "广南": "g", "富宁": "f", "西双版纳": "x", "景洪": "j", "勐海": "m", "勐腊": "m", "大理": "d", "大理市": "d", "漾濞": "y", "祥云": "x", "宾川": "b", "弥渡": "m", "南涧": "n", "巍山": "w", "永平": "y", "洱源": "e", "剑川": "j", "鹤庆": "h", "德宏": "d", "瑞丽": "r", "芒市": "m", "梁河": "l", "盈江": "y", "陇川": "l", "怒江": "n", "泸水": "l", "福贡": "f", "贡山": "g", "兰坪": "l", "迪庆": "d", "香格里拉": "x", "德钦": "d", "维西": "w", "西藏": "x", "拉萨": "l", "城关": "c", "堆龙德庆区": "d", "达孜": "d", "林周": "l", "当雄": "d", "尼木": "n", "曲水": "q", "墨竹工卡": "m", "日喀则": "r", "桑珠孜": "s", "南木林": "n", "江孜": "j", "定日": "d", "萨迦": "s", "拉孜": "l", "昂仁": "a", "谢通门": "x", "白朗": "b", "仁布": "r", "康马": "k", "定结": "d", "仲巴": "z", "亚东": "y", "吉隆": "j", "聂拉木": "n", "萨嘎": "s", "岗巴": "g", "昌都": "c", "卡若": "k", "江达": "j", "贡觉": "g", "类乌齐": "l", "丁青": "d", "察雅": "c", "八宿": "b", "左贡": "z", "芒康": "m", "洛隆": "l", "边坝": "b", "林芝": "l", "巴宜": "b", "工布江达": "g", "米林": "m", "墨脱": "m", "波密": "b", "察隅": "c", "朗县": "l", "山南": "s", "乃东": "n", "扎囊": "z", "贡嘎": "g", "桑日": "s", "琼结": "q", "曲松": "q", "措美": "c", "洛扎": "l", "加查": "j", "隆子": "l", "错那": "c", "浪卡子": "l", "那曲": "n", "色尼": "s", "嘉黎": "j", "比如": "b", "聂荣": "n", "安多": "a", "申扎": "s", "索县": "s", "班戈": "b", "巴青": "b", "尼玛": "n", "双湖": "s", "阿里": "a", "普兰": "p", "札达": "z", "噶尔": "g", "日土": "r", "革吉": "g", "改则": "g", "措勤": "c", "陕西": "s", "碑林": "b", "莲湖": "l", "灞桥": "b", "未央": "w", "雁塔": "y", "阎良": "y", "临潼": "l", "高陵": "g", "鄠邑": "h", "蓝田": "l", "周至": "z", "铜川": "t", "王益": "w", "印台": "y", "耀州": "y", "宜君": "y", "宝鸡": "b", "渭滨": "w", "金台": "j", "陈仓": "c", "凤翔": "f", "岐山": "q", "扶风": "f", "眉县": "m", "陇县": "l", "千阳": "q", "麟游": "l", "凤县": "f", "太白": "t", "咸阳": "x", "秦都": "q", "杨陵": "y", "渭城": "w", "三原": "s", "泾阳": "j", "乾县": "q", "礼泉": "l", "永寿": "y", "长武": "c", "旬邑": "x", "淳化": "c", "武功": "w", "兴平": "x", "彬州": "b", "渭南": "w", "临渭": "l", "华州": "h", "潼关": "t", "大荔": "d", "合阳": "h", "澄城": "c", "蒲城": "p", "白水": "b", "富平": "f", "韩城": "h", "华阴": "h", "延安": "y", "宝塔": "b", "安塞": "a", "延长": "y", "延川": "y", "志丹": "z", "吴起": "w", "甘泉": "g", "富县": "f", "洛川": "l", "宜川": "y", "黄龙": "h", "黄陵": "h", "子长": "z", "汉中": "h", "汉台": "h", "南郑": "n", "城固": "c", "洋县": "y", "西乡": "x", "勉县": "m", "宁强": "n", "略阳": "l", "镇巴": "z", "留坝": "l", "佛坪": "f", "榆林": "y", "榆阳": "y", "横山": "h", "府谷": "f", "靖边": "j", "定边": "d", "绥德": "s", "米脂": "m", "佳县": "j", "吴堡": "w", "清涧": "q", "子洲": "z", "神木": "s", "安康": "a", "汉滨": "h", "汉阴": "h", "石泉": "s", "宁陕": "n", "紫阳": "z", "岚皋": "l", "平利": "p", "镇坪": "z", "旬阳": "x", "白河": "b", "商洛": "s", "商州": "s", "洛南": "l", "丹凤": "d", "商南": "s", "镇安": "z", "柞水": "z", "甘肃": "g", "兰州": "l", "七里河": "q", "西固": "x", "红古": "h", "永登": "y", "皋兰": "g", "榆中": "y", "嘉峪关": "j", "金昌": "j", "永昌": "y", "白银": "b", "白银区": "b", "平川": "p", "靖远": "j", "会宁": "h", "景泰": "j", "天水": "t", "秦州": "q", "麦积": "m", "清水": "q", "秦安": "q", "甘谷": "g", "武山": "w", "张家川": "z", "武威": "w", "凉州": "l", "民勤": "m", "古浪": "g", "天祝": "t", "张掖": "z", "甘州": "g", "肃南": "s", "民乐": "m", "临泽": "l", "高台": "g", "山丹": "s", "平凉": "p", "崆峒": "k", "泾川": "j", "灵台": "l", "崇信": "c", "庄浪": "z", "静宁": "j", "华亭": "h", "酒泉": "j", "肃州": "s", "金塔": "j", "瓜州": "g", "肃北": "s", "阿克塞": "a", "玉门": "y", "敦煌": "d", "庆阳": "q", "西峰": "x", "庆城": "q", "环县": "h", "华池": "h", "合水": "h", "正宁": "z", "宁县": "n", "镇原": "z", "定西": "d", "安定": "a", "通渭": "t", "陇西": "l", "渭源": "w", "临洮": "l", "漳县": "z", "岷县": "m", "陇南": "l", "武都": "w", "成县": "c", "文县": "w", "宕昌": "t", "康县": "k", "西和": "x", "礼县": "l", "徽县": "h", "两当": "l", "临夏": "l", "临夏市": "l", "临夏县": "l", "康乐": "k", "永靖": "y", "广河": "g", "和政": "h", "东乡族自治县": "d", "积石山": "j", "合作": "h", "临潭": "l", "卓尼": "z", "舟曲": "z", "迭部": "d", "玛曲": "m", "碌曲": "l", "夏河": "x", "青海": "q", "西宁": "x", "城东": "c", "城西": "c", "城北": "c", "湟中": "h", "湟源": "h", "海东": "h", "乐都": "l", "平安": "p", "民和": "m", "互助": "h", "化隆": "h", "循化": "x", "海北": "h", "门源": "m", "祁连": "q", "海晏": "h", "刚察": "g", "黄南": "h", "同仁": "t", "尖扎": "j", "泽库": "z", "共和": "g", "同德": "t", "贵德": "g", "兴海": "x", "贵南": "g", "果洛": "g", "玛沁": "m", "班玛": "b", "甘德": "g", "达日": "d", "久治": "j", "玛多": "m", "玉树": "y", "玉树市": "y", "杂多": "z", "称多": "c", "治多": "z", "囊谦": "n", "曲麻莱": "q", "海西": "h", "格尔木": "g", "德令哈": "d", "茫崖": "m", "乌兰": "w", "都兰": "d", "天峻": "t", "大柴旦行政委员会": "d", "宁夏": "n", "银川": "y", "兴庆": "x", "西夏": "x", "金凤": "j", "永宁": "y", "贺兰": "h", "灵武": "l", "石嘴山": "s", "大武口": "d", "惠农": "h", "平罗": "p", "吴忠": "w", "利通": "l", "红寺堡": "h", "盐池": "y", "同心": "t", "青铜峡": "q", "固原": "g", "原州": "y", "西吉": "x", "隆德": "l", "泾源": "j", "彭阳": "p", "中卫": "z", "沙坡头": "s", "中宁": "z", "海原": "h", "新疆": "x", "乌鲁木齐": "w", "天山": "t", "沙依巴克区": "s", "新市": "x", "水磨沟": "s", "头屯河": "t", "达坂城": "d", "米东": "m", "乌鲁木齐县": "w", "克拉玛依": "k", "独山子": "d", "克拉玛依区": "k", "白碱滩": "b", "乌尔禾": "w", "吐鲁番": "t", "高昌": "g", "鄯善": "s", "托克逊": "t", "哈密": "h", "伊州": "y", "巴里坤": "b", "伊吾": "y", "昌吉": "c", "昌吉市": "c", "阜康": "f", "呼图壁": "h", "玛纳斯": "m", "奇台": "q", "吉木萨尔": "j", "木垒": "m", "博尔塔拉": "b", "博乐": "b", "阿拉山口": "a", "精河": "j", "温泉": "w", "巴音郭楞": "b", "库尔勒": "k", "轮台": "l", "尉犁": "y", "若羌": "r", "且末": "q", "焉耆": "y", "和静": "h", "和硕": "h", "博湖": "b", "阿克苏": "a", "阿克苏市": "a", "库车": "k", "温宿": "w", "沙雅": "s", "新和": "x", "拜城": "b", "乌什": "w", "阿瓦提": "a", "柯坪": "k", "克孜勒苏": "k", "阿图什": "a", "阿克陶": "a", "阿合奇": "a", "乌恰": "w", "喀什": "k", "喀什市": "k", "疏附": "s", "疏勒": "s", "英吉沙": "y", "泽普": "z", "莎车": "s", "叶城": "y", "麦盖提": "m", "岳普湖": "y", "伽师": "j", "巴楚": "b", "塔什库尔干": "t", "和田": "h", "和田市": "h", "和田县": "h", "墨玉": "m", "皮山": "p", "洛浦": "l", "策勒": "c", "于田": "y", "民丰": "m", "伊犁": "y", "伊宁市": "y", "奎屯": "k", "霍尔果斯": "h", "伊宁县": "y", "察布查尔": "c", "霍城": "h", "巩留": "g", "新源": "x", "昭苏": "z", "特克斯": "t", "尼勒克": "n", "塔城": "t", "塔城市": "t", "乌苏": "w", "额敏": "e", "托里": "t", "裕民": "y", "和布克赛尔": "h", "阿勒泰": "a", "阿勒泰市": "a", "布尔津": "b", "富蕴": "f", "福海": "f", "哈巴河": "h", "青河": "q", "吉木乃": "j", "石河子": "s", "阿拉尔": "a", "图木舒克": "t", "五家渠": "w", "北屯": "b", "铁门关": "t", "双河": "s", "可克达拉": "k", "昆玉": "k", "胡杨河": "h", "台湾": "t", "台北": "t", "中正": "z", "万华": "w", "信义": "x", "士林": "s", "北投": "b", "内湖": "n", "南港": "n", "高雄": "g", "前金": "q", "苓雅": "l", "盐埕": "y", "鼓山": "g", "旗津": "q", "前镇": "q", "三民": "s", "左营": "z", "楠梓": "n", "小港": "x", "仁武": "r", "大社": "d", "冈山": "g", "路竹": "l", "阿莲": "a", "田寮": "t", "燕巢": "y", "桥头": "q", "梓官": "z", "弥陀": "m", "湖内": "h", "大寮": "d", "林园": "l", "鸟松": "n", "大树": "d", "旗山": "q", "美浓": "m", "六龟": "l", "内门": "n", "杉林": "s", "甲仙": "j", "那玛夏": "n", "茂林": "m", "茄萣": "q", "台南": "t", "中西": "z", "南区": "n", "北区": "b", "安南": "a", "归仁": "g", "左镇": "z", "玉井": "y", "楠西": "n", "南化": "n", "仁德": "r", "关庙": "g", "龙崎": "l", "官田": "g", "麻豆": "m", "佳里": "j", "西港": "x", "七股": "q", "将军": "j", "学甲": "x", "北门": "b", "新营": "x", "后壁": "h", "六甲": "l", "下营": "x", "柳营": "l", "盐水": "y", "善化": "s", "大内": "d", "山上": "s", "台中": "t", "中区": "z", "西屯": "x", "南屯": "n", "大里": "d", "雾峰": "w", "乌日": "w", "丰原": "f", "后里": "h", "石冈": "s", "东势": "d", "新社": "x", "潭子": "t", "大雅": "d", "神冈": "s", "大肚": "d", "沙鹿": "s", "梧栖": "w", "大甲": "d", "外埔": "w", "南投": "n", "南投市": "n", "中寮": "z", "草屯": "c", "国姓": "g", "埔里": "b", "仁爱": "r", "名间": "m", "集集": "j", "水里": "s", "鱼池": "y", "鹿谷": "l", "基隆": "j", "安乐": "a", "暖暖": "n", "七堵": "q", "新竹市": "x", "香山": "x", "嘉义市": "j", "万里": "w", "板桥": "b", "汐止": "x", "深坑": "s", "石碇": "s", "瑞芳": "r", "平溪": "p", "双溪": "s", "贡寮": "g", "新店": "x", "坪林": "p", "乌来": "w", "中和": "z", "土城": "t", "三峡": "s", "树林": "s", "莺歌": "y", "三重": "s", "新庄": "x", "芦洲": "l", "五股": "w", "八里": "b", "淡水": "d", "三芝": "s", "宜兰": "y", "宜兰市": "y", "头城": "t", "礁溪": "j", "壮围": "z", "员山": "y", "罗东": "l", "三星": "s", "五结": "w", "冬山": "d", "苏澳": "s", "新竹县": "x", "竹北": "z", "新埔": "x", "关西": "g", "芎林": "x", "竹东": "z", "尖石": "j", "北埔": "b", "峨眉": "e", "桃园": "t", "中坜": "z", "平镇": "p", "杨梅": "y", "新屋": "x", "观音": "g", "桃园区": "t", "龟山": "g", "八德": "b", "大溪": "d", "大园": "d", "芦竹": "l", "苗栗": "m", "竹南": "z", "头份": "t", "三湾": "s", "南庄": "n", "狮潭": "s", "后龙": "h", "通霄": "t", "苑里": "y", "苗栗市": "m", "造桥": "z", "头屋": "t", "公馆": "g", "大湖": "d", "铜锣": "t", "三义": "s", "卓兰": "z", "彰化": "z", "彰化市": "z", "芬园": "f", "花坛": "h", "秀水": "x", "鹿港": "l", "福兴": "f", "线西": "x", "和美": "h", "伸港": "s", "员林": "y", "社头": "s", "埔心": "b", "大村": "d", "埔盐": "b", "田中": "t", "北斗": "b", "田尾": "t", "埤头": "p", "溪州": "x", "竹塘": "z", "二林": "e", "芳苑": "f", "二水": "e", "嘉义县": "j", "番路": "f", "梅山": "m", "竹崎": "z", "阿里山": "a", "中埔": "z", "水上": "s", "鹿草": "l", "太保": "t", "朴子": "p", "东石": "d", "六脚": "l", "新港": "x", "民雄": "m", "大林": "d", "溪口": "x", "义竹": "y", "布袋": "b", "云林": "y", "斗南": "d", "大埤": "d", "虎尾": "h", "土库": "t", "褒忠": "b", "台西": "t", "仑背": "l", "麦寮": "m", "斗六": "d", "林内": "l", "古坑": "g", "莿桐": "c", "西螺": "x", "二仑": "e", "北港": "b", "水林": "s", "口湖": "k", "四湖": "s", "元长": "y", "屏东": "p", "屏东市": "p", "三地门": "s", "雾台": "w", "玛家": "m", "九如": "j", "里港": "l", "高树": "g", "盐埔": "y", "麟洛": "l", "竹田": "z", "内埔": "n", "万丹": "w", "泰武": "t", "来义": "l", "万峦": "w", "崁顶": "k", "新埤": "x", "南州": "n", "林边": "l", "琉球": "l", "佳冬": "j", "新园": "x", "枋寮": "f", "枋山": "f", "春日": "c", "狮子": "s", "车城": "c", "恒春": "h", "满州": "m", "台东": "t", "台东市": "t", "绿岛": "l", "兰屿": "l", "卑南": "b", "鹿野": "l", "关山": "g", "海端": "h", "池上": "c", "成功": "c", "长滨": "c", "金峰": "j", "大武": "d", "达仁": "d", "太麻里": "t", "花莲": "h", "花莲市": "h", "秀林": "x", "寿丰": "s", "凤林": "f", "光复": "g", "丰滨": "f", "瑞穗": "r", "玉里": "y", "卓溪": "z", "富里": "f", "澎湖": "p", "马公": "m", "西屿": "x", "望安": "w", "七美": "q", "湖西": "h", "香港": "x", "澳门": "a", "国外": "g" };
var prefix_pinyin_min = { "北": "b", "东": "d", "西": "x", "朝": "c", "丰": "f", "石": "s", "海": "h", "门": "m", "房": "f", "通": "t", "顺": "s", "昌": "c", "大": "d", "怀": "h", "平": "p", "密": "m", "延": "y", "天": "t", "和": "h", "河": "h", "南": "n", "红": "h", "津": "j", "武": "w", "宝": "b", "滨": "b", "宁": "n", "静": "j", "蓟": "j", "长": "c", "桥": "q", "新": "x", "井": "j", "裕": "y", "藁": "g", "鹿": "l", "栾": "l", "正": "z", "行": "x", "灵": "l", "高": "g", "深": "s", "赞": "z", "无": "w", "元": "y", "赵": "z", "辛": "x", "晋": "j", "唐": "t", "路": "l", "古": "g", "开": "k", "曹": "c", "滦": "l", "乐": "l", "迁": "q", "玉": "y", "遵": "z", "秦": "q", "山": "s", "抚": "f", "青": "q", "卢": "l", "邯": "h", "丛": "c", "复": "f", "峰": "f", "肥": "f", "永": "y", "临": "l", "成": "c", "涉": "s", "磁": "c", "邱": "q", "鸡": "j", "广": "g", "馆": "g", "魏": "w", "曲": "q", "邢": "x", "襄": "x", "信": "x", "内": "n", "柏": "b", "隆": "l", "任": "r", "巨": "j", "威": "w", "清": "q", "沙": "s", "保": "b", "竞": "j", "莲": "l", "满": "m", "徐": "x", "涞": "l", "阜": "f", "定": "d", "容": "r", "望": "w", "安": "a", "易": "y", "蠡": "l", "博": "b", "雄": "x", "涿": "z", "张": "z", "宣": "x", "下": "x", "万": "w", "崇": "c", "康": "k", "沽": "g", "尚": "s", "蔚": "y", "阳": "y", "赤": "c", "承": "c", "双": "s", "鹰": "y", "兴": "x", "宽": "k", "围": "w", "沧": "c", "运": "y", "盐": "y", "肃": "s", "吴": "w", "献": "x", "孟": "m", "泊": "b", "黄": "h", "廊": "l", "固": "g", "香": "x", "文": "w", "霸": "b", "三": "s", "衡": "h", "桃": "t", "冀": "j", "枣": "z", "饶": "r", "故": "g", "景": "j", "太": "t", "小": "x", "迎": "y", "杏": "x", "尖": "j", "娄": "l", "云": "y", "浑": "h", "左": "z", "城": "c", "矿": "k", "郊": "j", "盂": "y", "潞": "l", "上": "s", "屯": "t", "黎": "l", "壶": "h", "沁": "q", "陵": "l", "泽": "z", "朔": "s", "应": "y", "右": "y", "榆": "y", "昔": "x", "寿": "s", "祁": "q", "介": "j", "闻": "w", "稷": "j", "绛": "j", "垣": "y", "夏": "x", "芮": "r", "忻": "x", "五": "w", "代": "d", "繁": "f", "神": "s", "岢": "k", "偏": "p", "原": "y", "尧": "y", "翼": "y", "洪": "h", "浮": "f", "吉": "j", "乡": "x", "隰": "x", "蒲": "p", "汾": "f", "侯": "h", "霍": "h", "吕": "l", "离": "l", "交": "j", "柳": "l", "岚": "l", "方": "f", "中": "z", "孝": "x", "呼": "h", "回": "h", "赛": "s", "土": "t", "托": "t", "包": "b", "昆": "k", "白": "b", "九": "j", "达": "d", "乌": "w", "松": "s", "阿": "a", "巴": "b", "林": "l", "克": "k", "翁": "w", "喀": "k", "敖": "a", "科": "k", "库": "k", "奈": "n", "扎": "z", "鄂": "e", "准": "z", "杭": "h", "伊": "y", "莫": "m", "陈": "c", "牙": "y", "额": "e", "根": "g", "磴": "d", "集": "j", "卓": "z", "化": "h", "商": "s", "凉": "l", "察": "c", "四": "s", "突": "t", "锡": "x", "二": "e", "苏": "s", "镶": "x", "多": "d", "辽": "l", "沈": "s", "皇": "h", "铁": "t", "于": "y", "法": "f", "甘": "g", "旅": "l", "金": "j", "普": "p", "瓦": "w", "庄": "z", "鞍": "a", "立": "l", "千": "q", "台": "t", "岫": "x", "本": "b", "溪": "x", "明": "m", "桓": "h", "丹": "d", "振": "z", "凤": "f", "锦": "j", "凌": "l", "黑": "h", "义": "y", "营": "y", "站": "z", "鲅": "b", "老": "l", "盖": "g", "细": "x", "彰": "z", "宏": "h", "弓": "g", "灯": "d", "盘": "p", "银": "y", "调": "d", "龙": "l", "建": "j", "葫": "h", "连": "l", "绥": "s", "绿": "l", "农": "n", "德": "d", "公": "g", "船": "c", "蛟": "j", "桦": "h", "舒": "s", "磐": "p", "梨": "l", "辉": "h", "梅": "m", "江": "j", "靖": "j", "前": "q", "乾": "q", "扶": "f", "洮": "t", "镇": "z", "图": "t", "敦": "d", "珲": "h", "汪": "w", "哈": "h", "道": "d", "依": "y", "宾": "b", "木": "m", "齐": "q", "昂": "a", "富": "f", "碾": "n", "泰": "t", "拜": "b", "讷": "n", "恒": "h", "滴": "d", "麻": "m", "虎": "h", "鹤": "h", "向": "x", "工": "g", "萝": "l", "岭": "l", "友": "y", "萨": "s", "让": "r", "肇": "z", "杜": "d", "嘉": "j", "汤": "t", "佳": "j", "同": "t", "七": "q", "茄": "q", "勃": "b", "牡": "m", "爱": "a", "穆": "m", "逊": "x", "孙": "s", "嫩": "n", "兰": "l", "庆": "q", "漠": "m", "塔": "t", "加": "j", "虹": "h", "杨": "y", "闵": "m", "浦": "p", "奉": "f", "玄": "x", "鼓": "g", "栖": "q", "雨": "y", "六": "l", "溧": "l", "惠": "h", "梁": "l", "宜": "y", "贾": "j", "泉": "q", "铜": "t", "沛": "p", "睢": "s", "邳": "p", "常": "c", "钟": "z", "相": "x", "姑": "g", "港": "g", "如": "r", "启": "q", "赣": "g", "灌": "g", "淮": "h", "涟": "l", "盱": "x", "亭": "t", "响": "x", "射": "s", "扬": "y", "邗": "h", "仪": "y", "京": "j", "润": "r", "句": "j", "姜": "j", "宿": "s", "沭": "s", "泗": "s", "浙": "z", "拱": "g", "萧": "x", "余": "y", "桐": "t", "淳": "c", "鄞": "y", "象": "x", "慈": "c", "温": "w", "瓯": "o", "洞": "d", "苍": "c", "瑞": "r", "秀": "x", "湖": "h", "绍": "s", "越": "y", "柯": "k", "诸": "z", "嵊": "s", "婺": "w", "衢": "q", "舟": "z", "岱": "d", "椒": "j", "仙": "x", "丽": "l", "缙": "j", "遂": "s", "合": "h", "瑶": "y", "庐": "l", "蜀": "s", "巢": "c", "芜": "w", "镜": "j", "弋": "y", "鸠": "j", "蚌": "b", "禹": "y", "田": "t", "谢": "x", "八": "b", "潘": "p", "马": "m", "花": "h", "当": "d", "含": "h", "烈": "l", "濉": "s", "枞": "z", "岳": "y", "潜": "q", "徽": "h", "歙": "s", "休": "x", "黟": "y", "滁": "c", "琅": "l", "来": "l", "全": "q", "颍": "y", "界": "j", "埇": "y", "砀": "d", "叶": "y", "亳": "b", "谯": "q", "涡": "g", "蒙": "m", "利": "l", "池": "c", "贵": "g", "郎": "l", "泾": "j", "绩": "j", "旌": "j", "福": "f", "仓": "c", "闽": "m", "罗": "l", "厦": "x", "思": "s", "翔": "x", "莆": "p", "涵": "h", "荔": "l", "尤": "y", "将": "j", "鲤": "l", "洛": "l", "漳": "z", "芗": "x", "诏": "z", "华": "h", "光": "g", "政": "z", "邵": "s", "蕉": "j", "霞": "x", "屏": "p", "周": "z", "柘": "z", "进": "j", "珠": "z", "萍": "p", "湘": "x", "芦": "l", "濂": "l", "浔": "x", "柴": "c", "修": "x", "都": "d", "彭": "p", "共": "g", "渝": "y", "分": "f", "月": "y", "章": "z", "会": "h", "寻": "x", "峡": "x", "袁": "y", "樟": "z", "资": "z", "铅": "y", "横": "h", "鄱": "p", "济": "j", "历": "l", "市": "s", "槐": "h", "莱": "l", "钢": "g", "崂": "l", "李": "l", "即": "j", "胶": "j", "淄": "z", "沂": "y", "薛": "x", "峄": "y", "滕": "t", "垦": "k", "烟": "y", "芝": "z", "牟": "m", "蓬": "p", "招": "z", "潍": "w", "寒": "h", "坊": "f", "奎": "k", "兖": "y", "微": "w", "鱼": "y", "汶": "w", "邹": "z", "环": "h", "荣": "r", "乳": "r", "日": "r", "莒": "j", "郯": "t", "费": "f", "聊": "l", "茌": "c", "莘": "s", "冠": "g", "沾": "z", "菏": "h", "单": "s", "郓": "y", "鄄": "j", "郑": "z", "管": "g", "巩": "g", "荥": "y", "登": "d", "祥": "x", "杞": "q", "尉": "y", "瀍": "c", "涧": "j", "嵩": "s", "汝": "r", "偃": "y", "卫": "w", "湛": "z", "鲁": "l", "郏": "j", "舞": "w", "殷": "y", "滑": "h", "淇": "q", "浚": "x", "牧": "m", "获": "h", "封": "f", "焦": "j", "解": "j", "濮": "p", "范": "f", "许": "x", "鄢": "y", "漯": "l", "源": "y", "郾": "y", "召": "s", "陕": "s", "渑": "m", "宛": "w", "卧": "w", "淅": "x", "社": "s", "邓": "d", "民": "m", "虞": "y", "浉": "s", "潢": "h", "息": "x", "川": "c", "郸": "d", "项": "x", "驻": "z", "驿": "y", "确": "q", "泌": "b", "硚": "q", "汉": "h", "蔡": "c", "十": "s", "茅": "m", "郧": "y", "竹": "z", "伍": "w", "点": "d", "猇": "x", "夷": "y", "远": "y", "秭": "z", "枝": "z", "樊": "f", "谷": "g", "荆": "j", "掇": "d", "监": "j", "团": "t", "英": "y", "浠": "x", "蕲": "q", "咸": "x", "随": "s", "曾": "z", "恩": "e", "芙": "f", "浏": "l", "株": "z", "荷": "h", "渌": "l", "攸": "y", "茶": "c", "炎": "y", "醴": "l", "韶": "s", "雁": "y", "蒸": "z", "耒": "l", "君": "j", "汨": "m", "鼎": "d", "澧": "l", "桑": "s", "益": "y", "赫": "h", "沅": "y", "郴": "c", "桂": "g", "零": "l", "冷": "l", "蓝": "l", "辰": "c", "溆": "x", "芷": "z", "泸": "l", "番": "f", "从": "c", "增": "z", "浈": "z", "始": "s", "仁": "r", "坪": "p", "斗": "d", "汕": "s", "濠": "h", "潮": "c", "澄": "c", "佛": "f", "禅": "c", "坡": "p", "廉": "l", "雷": "l", "茂": "m", "电": "d", "端": "d", "陆": "l", "紫": "z", "揭": "j", "榕": "r", "郁": "y", "良": "l", "邕": "y", "融": "r", "叠": "d", "恭": "g", "梧": "w", "藤": "t", "岑": "c", "防": "f", "钦": "q", "覃": "q", "百": "b", "那": "n", "贺": "h", "昭": "z", "凭": "p", "琼": "q", "美": "m", "崖": "y", "儋": "d", "重": "c", "涪": "f", "綦": "q", "黔": "q", "璧": "b", "潼": "t", "垫": "d", "忠": "z", "巫": "w", "酉": "y", "郫": "p", "邛": "q", "简": "j", "自": "z", "贡": "g", "沿": "y", "攀": "p", "米": "m", "纳": "n", "叙": "x", "什": "s", "绵": "m", "游": "y", "梓": "z", "旺": "w", "剑": "j", "犍": "q", "夹": "j", "沐": "m", "峨": "e", "阆": "l", "眉": "m", "翠": "c", "珙": "g", "筠": "j", "邻": "l", "渠": "q", "雅": "y", "名": "m", "理": "l", "壤": "r", "若": "r", "炉": "l", "色": "s", "稻": "d", "得": "d", "布": "b", "喜": "x", "冕": "m", "观": "g", "水": "s", "汇": "h", "播": "b", "务": "w", "湄": "m", "习": "x", "关": "g", "毕": "b", "织": "z", "碧": "b", "印": "y", "晴": "q", "贞": "z", "册": "c", "凯": "k", "施": "s", "瓮": "w", "独": "d", "官": "g", "呈": "c", "禄": "l", "麒": "q", "师": "s", "腾": "t", "巧": "q", "彝": "y", "墨": "m", "澜": "l", "耿": "g", "楚": "c", "姚": "y", "个": "g", "弥": "m", "砚": "y", "丘": "q", "勐": "m", "漾": "y", "巍": "w", "洱": "e", "芒": "m", "盈": "y", "陇": "l", "怒": "n", "迪": "d", "维": "w", "拉": "l", "堆": "d", "尼": "n", "仲": "z", "亚": "y", "聂": "n", "岗": "g", "卡": "k", "类": "l", "丁": "d", "边": "b", "波": "b", "朗": "l", "乃": "n", "措": "c", "错": "c", "浪": "l", "比": "b", "申": "s", "索": "s", "班": "b", "札": "z", "噶": "g", "革": "g", "改": "g", "碑": "b", "灞": "b", "未": "w", "阎": "y", "鄠": "h", "王": "w", "耀": "y", "渭": "w", "岐": "q", "麟": "l", "礼": "l", "旬": "x", "彬": "b", "韩": "h", "志": "z", "子": "z", "洋": "y", "勉": "m", "略": "l", "留": "l", "府": "f", "柞": "z", "皋": "g", "麦": "m", "崆": "k", "酒": "j", "瓜": "g", "岷": "m", "宕": "t", "两": "l", "积": "j", "迭": "d", "玛": "m", "碌": "l", "湟": "h", "互": "h", "循": "x", "刚": "g", "果": "g", "久": "j", "杂": "z", "称": "c", "治": "z", "囊": "n", "格": "g", "茫": "m", "头": "t", "吐": "t", "鄯": "s", "奇": "q", "精": "j", "轮": "l", "且": "q", "焉": "y", "疏": "s", "莎": "s", "伽": "j", "皮": "p", "策": "c", "特": "t", "可": "k", "胡": "h", "士": "s", "苓": "l", "旗": "q", "楠": "n", "冈": "g", "燕": "y", "鸟": "n", "杉": "s", "甲": "j", "归": "g", "学": "x", "后": "h", "善": "s", "雾": "w", "潭": "t", "外": "w", "草": "c", "国": "g", "埔": "b", "基": "j", "暖": "n", "板": "b", "汐": "x", "树": "s", "莺": "y", "淡": "d", "礁": "j", "壮": "z", "员": "y", "冬": "d", "芎": "x", "龟": "g", "苗": "m", "狮": "s", "苑": "y", "造": "z", "芬": "f", "线": "x", "伸": "s", "埤": "p", "芳": "f", "朴": "p", "褒": "b", "仑": "l", "莿": "c", "口": "k", "里": "l", "崁": "k", "琉": "l", "枋": "f", "春": "c", "车": "c", "卑": "b", "澎": "p", "澳": "a" };
module.exports = { prefix_pinyin: prefix_pinyin, prefix_pinyin_min: prefix_pinyin_min };

/***/ })
/******/ ]);