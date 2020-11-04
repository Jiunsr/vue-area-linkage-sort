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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(26);
var hide = __webpack_require__(15);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(37);
var toPrimitive = __webpack_require__(38);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(20);
var defined = __webpack_require__(12);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(12);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


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

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(11);
var $keys = __webpack_require__(7);

__webpack_require__(35)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(33)(false);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(34);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var fails = __webpack_require__(5);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(0).Object.values;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(1);
var $values = __webpack_require__(42)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(7);
var toIObject = __webpack_require__(8);
var isEnum = __webpack_require__(28).f;
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(44);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 47 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48), __webpack_require__(49)(module)))

/***/ }),
/* 48 */
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(29);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/values.js
var values = __webpack_require__(39);
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(43);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/lodash.find/index.js
var lodash_find = __webpack_require__(47);
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
var utils = __webpack_require__(17);

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
var toConsumableArray = __webpack_require__(59);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(79);
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
var normalizeComponent = __webpack_require__(6)
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
var cascader_normalizeComponent = __webpack_require__(6)
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
var prefix_pinyin = __webpack_require__(84);
var prefix_pinyin_default = /*#__PURE__*/__webpack_require__.n(prefix_pinyin);

// EXTERNAL MODULE: ./node_modules/pinyin/lib/web-pinyin.js
var web_pinyin = __webpack_require__(85);
var web_pinyin_default = /*#__PURE__*/__webpack_require__.n(web_pinyin);

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
        /* 匹配首字母排序 */
        var matchName = function matchName(name) {
            if (Boolean(prefix_pinyin["prefix_pinyin"][name])) {
                return prefix_pinyin["prefix_pinyin"][name];
            }
            if (name.endsWith('省') || name.endsWith('市') || name.endsWith('区')) {
                var key_p = name.replace('省', '');
                var key_c = name.replace('市', '');
                var key_d = name.replace('区', '');
                var _prefix_py = web_pinyin_default()(name)[0];
                return prefix_pinyin["prefix_pinyin"][key_p] || prefix_pinyin["prefix_pinyin"][key_c] || prefix_pinyin["prefix_pinyin"][key_d] || _prefix_py[0];
            }
            var prefix_py = web_pinyin_default()(name)[0];
            return prefix_py[0];
        };
        /* 递归省市区按首字母排序 */
        var sortPostback = function sortPostback(list) {
            if (list instanceof Array) {
                list = list.sort(function (a, b) {
                    var a_prefix = matchName(a.label);
                    var b_prefix = matchName(b.label);
                    return a_prefix.localeCompare(b_prefix, 'zh-CN');
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f33aef8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/area-cascader/index.vue
var area_cascader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"area-cascader-wrap"},[_c('v-cascader',{attrs:{"placeholder":_vm.placeholder,"options":_vm.options,"defaultsAreaCodes":_vm.defaultsAreaCodes,"size":_vm.size,"disabled":_vm.disabled,"separator":_vm.separator,"data":_vm.data},on:{"setDefault":function($event){_vm.isSetDefault = true},"change":_vm.handleChange}})],1)}
var area_cascader_staticRenderFns = []
var area_cascader_esExports = { render: area_cascader_render, staticRenderFns: area_cascader_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_area_cascader = (area_cascader_esExports);
// CONCATENATED MODULE: ./components/area-cascader/index.vue
var area_cascader_normalizeComponent = __webpack_require__(6)
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(60);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(72);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(63)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(64)(String, 'String', function (iterated) {
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(12);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(65);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(66);
var hide = __webpack_require__(15);
var has = __webpack_require__(13);
var Iterators = __webpack_require__(50);
var $iterCreate = __webpack_require__(67);
var setToStringTag = __webpack_require__(51);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(10)('iterator');
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
/* 65 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(68);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(51);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(7);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(11);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(26);
var $export = __webpack_require__(1);
var toObject = __webpack_require__(11);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var toLength = __webpack_require__(22);
var createProperty = __webpack_require__(75);
var getIterFn = __webpack_require__(76);

$export($export.S + $export.F * !__webpack_require__(78)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(50);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(77);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(50);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(10)('toStringTag');
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(82) });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(7);
var gOPS = __webpack_require__(83);
var pIE = __webpack_require__(28);
var toObject = __webpack_require__(11);
var IObject = __webpack_require__(20);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function () {
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
/* 83 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

var prefix_pinyin = { "北京": "b", "东城": "d", "西城": "x", "朝阳": "c", "丰台": "f", "石景山": "s", "海淀": "h", "门头沟": "m", "房山": "f", "通州": "t", "顺义": "s", "昌平": "c", "大兴": "d", "怀柔": "h", "平谷": "p", "密云": "m", "延庆": "y", "天津": "t", "和平": "h", "河东": "h", "河西": "h", "南开": "n", "河北": "h", "红桥": "h", "东丽": "d", "西青": "x", "津南": "j", "北辰": "b", "武清": "w", "宝坻": "b", "滨海新区": "b", "宁河": "n", "静海": "j", "蓟州": "j", "石家庄": "s", "长安": "c", "桥西": "q", "新华": "x", "井陉矿区": "j", "裕华": "y", "藁城": "g", "鹿泉": "l", "栾城": "l", "井陉": "j", "正定": "z", "行唐": "x", "灵寿": "l", "高邑": "g", "深泽": "s", "赞皇": "z", "无极": "w", "平山": "p", "元氏": "y", "赵县": "z", "辛集": "x", "晋州": "j", "新乐": "x", "唐山": "t", "路南": "l", "路北": "l", "古冶": "g", "开平": "k", "丰南": "f", "丰润": "f", "曹妃甸": "c", "滦南": "l", "乐亭": "l", "迁西": "q", "玉田": "y", "遵化": "z", "迁安": "q", "滦州": "l", "秦皇岛": "q", "海港": "h", "山海关": "s", "北戴河": "b", "抚宁": "f", "青龙": "q", "昌黎": "c", "卢龙": "l", "邯郸": "h", "邯山": "h", "丛台": "c", "复兴": "f", "峰峰矿区": "f", "肥乡": "f", "永年": "y", "临漳": "l", "成安": "c", "大名": "d", "涉县": "s", "磁县": "c", "邱县": "q", "鸡泽": "j", "广平": "g", "馆陶": "g", "魏县": "w", "曲周": "q", "武安": "w", "邢台": "x", "襄都": "x", "信都": "x", "临城": "l", "内丘": "n", "柏乡": "b", "隆尧": "l", "任县": "r", "南和": "n", "宁晋": "n", "巨鹿": "j", "新河": "x", "广宗": "g", "平乡": "p", "威县": "w", "清河": "q", "临西": "l", "南宫": "n", "沙河": "s", "保定": "b", "竞秀": "j", "莲池": "l", "满城": "m", "清苑": "q", "徐水": "x", "涞水": "l", "阜平": "f", "定兴": "d", "唐县": "t", "高阳": "g", "容城": "r", "涞源": "l", "望都": "w", "安新": "a", "易县": "y", "曲阳": "q", "蠡县": "l", "顺平": "s", "博野": "b", "雄县": "x", "涿州": "z", "定州": "d", "安国": "a", "高碑店": "g", "张家口": "z", "桥东": "q", "宣化": "x", "下花园": "x", "万全": "w", "崇礼": "c", "张北": "z", "康保": "k", "沽源": "g", "尚义": "s", "蔚县": "y", "阳原": "y", "怀安": "h", "怀来": "h", "涿鹿": "z", "赤城": "c", "承德": "c", "双桥": "s", "双滦": "s", "鹰手营子矿区": "y", "承德县": "c", "兴隆": "x", "滦平": "l", "隆化": "l", "丰宁": "f", "宽城": "k", "围场": "w", "平泉": "p", "沧州": "c", "运河": "y", "沧县": "c", "青县": "q", "东光": "d", "海兴": "h", "盐山": "y", "肃宁": "s", "南皮": "n", "吴桥": "w", "献县": "x", "孟村": "m", "泊头": "b", "任丘": "r", "黄骅": "h", "河间": "h", "廊坊": "l", "安次": "a", "广阳": "g", "固安": "g", "永清": "y", "香河": "x", "大城": "d", "文安": "w", "大厂": "d", "霸州": "b", "三河": "s", "衡水": "h", "桃城": "t", "冀州": "j", "枣强": "z", "武邑": "w", "武强": "w", "饶阳": "r", "安平": "a", "故城": "g", "景县": "j", "阜城": "f", "深州": "s", "山西": "s", "太原": "t", "小店": "x", "迎泽": "y", "杏花岭": "x", "尖草坪": "j", "万柏林": "w", "晋源": "j", "清徐": "q", "阳曲": "y", "娄烦": "l", "古交": "g", "大同": "d", "新荣": "x", "平城": "p", "云冈": "y", "云州": "y", "阳高": "y", "天镇": "t", "广灵": "g", "灵丘": "l", "浑源": "h", "左云": "z", "阳泉": "y", "城区": "c", "矿区": "k", "郊区": "j", "平定": "p", "盂县": "y", "长治": "c", "潞州": "l", "上党": "s", "屯留": "t", "潞城": "l", "襄垣": "x", "平顺": "p", "黎城": "l", "壶关": "h", "长子": "z", "武乡": "w", "沁县": "q", "沁源": "q", "晋城": "j", "沁水": "q", "阳城": "y", "陵川": "l", "泽州": "z", "高平": "g", "朔州": "s", "朔城": "s", "平鲁": "p", "山阴": "s", "应县": "y", "右玉": "y", "怀仁": "h", "晋中": "j", "榆次": "y", "太谷": "t", "榆社": "y", "左权": "z", "和顺": "h", "昔阳": "x", "寿阳": "s", "祁县": "q", "平遥": "p", "灵石": "l", "介休": "j", "运城": "y", "盐湖": "y", "临猗": "l", "万荣": "w", "闻喜": "w", "稷山": "j", "新绛": "x", "绛县": "j", "垣曲": "y", "夏县": "x", "平陆": "p", "芮城": "r", "永济": "y", "河津": "h", "忻州": "x", "忻府": "x", "定襄": "d", "五台": "w", "代县": "d", "繁峙": "f", "宁武": "n", "静乐": "j", "神池": "s", "五寨": "w", "岢岚": "k", "河曲": "h", "保德": "b", "偏关": "p", "原平": "y", "临汾": "l", "尧都": "y", "曲沃": "q", "翼城": "y", "襄汾": "x", "洪洞": "h", "古县": "g", "安泽": "a", "浮山": "f", "吉县": "j", "乡宁": "x", "大宁": "d", "隰县": "x", "永和": "y", "蒲县": "p", "汾西": "f", "侯马": "h", "霍州": "h", "吕梁": "l", "离石": "l", "文水": "w", "交城": "j", "兴县": "x", "临县": "l", "柳林": "l", "石楼": "s", "岚县": "l", "方山": "f", "中阳": "z", "交口": "j", "孝义": "x", "汾阳": "f", "内蒙古": "n", "呼和浩特": "h", "新城": "x", "回民": "h", "玉泉": "y", "赛罕": "s", "土默特左旗": "t", "托克托": "t", "和林格尔": "h", "清水河": "q", "武川": "w", "包头": "b", "东河": "d", "昆都仑": "k", "青山": "q", "石拐": "s", "白云鄂博矿区": "b", "九原": "j", "土默特右旗": "t", "固阳": "g", "达尔罕茂明安联合旗": "d", "乌海": "w", "海勃湾": "h", "海南": "h", "乌达": "w", "赤峰": "c", "红山": "h", "元宝山": "y", "松山": "s", "阿鲁科尔沁旗": "a", "巴林左旗": "b", "巴林右旗": "b", "林西": "l", "克什克腾旗": "k", "翁牛特旗": "w", "喀喇沁旗": "k", "宁城": "n", "敖汉旗": "a", "通辽": "t", "科尔沁": "k", "科尔沁左翼中旗": "k", "科尔沁左翼后旗": "k", "开鲁": "k", "库伦旗": "k", "奈曼旗": "n", "扎鲁特旗": "z", "霍林郭勒": "h", "鄂尔多斯": "e", "东胜": "d", "康巴什": "k", "达拉特旗": "d", "准格尔旗": "z", "鄂托克前旗": "e", "鄂托克旗": "e", "杭锦旗": "h", "乌审旗": "w", "伊金霍洛旗": "y", "呼伦贝尔": "h", "海拉尔": "h", "扎赉诺尔区": "z", "阿荣旗": "a", "莫力达瓦": "m", "鄂伦春自治旗": "e", "鄂温克族自治旗": "e", "陈巴尔虎旗": "c", "新巴尔虎左旗": "x", "新巴尔虎右旗": "x", "满洲里": "m", "牙克石": "y", "扎兰屯": "z", "额尔古纳": "e", "根河": "g", "巴彦淖尔": "b", "临河": "l", "五原": "w", "磴口": "d", "乌拉特前旗": "w", "乌拉特中旗": "w", "乌拉特后旗": "w", "杭锦后旗": "h", "乌兰察布": "w", "集宁": "j", "卓资": "z", "化德": "h", "商都": "s", "兴和": "x", "凉城": "l", "察哈尔右翼前旗": "c", "察哈尔右翼中旗": "c", "察哈尔右翼后旗": "c", "四子王旗": "s", "丰镇": "f", "兴安": "x", "乌兰浩特": "w", "阿尔山": "a", "科尔沁右翼前旗": "k", "科尔沁右翼中旗": "k", "扎赉特旗": "z", "突泉": "t", "锡林郭勒": "x", "二连浩特": "e", "锡林浩特": "x", "阿巴嘎旗": "a", "苏尼特左旗": "s", "苏尼特右旗": "s", "东乌珠穆沁旗": "d", "西乌珠穆沁旗": "x", "太仆寺旗": "t", "镶黄旗": "x", "正镶白旗": "z", "正蓝旗": "z", "多伦": "d", "阿拉善": "a", "阿拉善左旗": "a", "阿拉善右旗": "a", "额济纳旗": "e", "辽宁": "l", "沈阳": "s", "沈河": "s", "大东": "d", "皇姑": "h", "铁西": "t", "苏家屯": "s", "浑南": "h", "沈北新区": "s", "于洪": "y", "辽中": "l", "康平": "k", "法库": "f", "新民": "x", "大连": "d", "中山": "z", "西岗": "x", "沙河口": "s", "甘井子": "g", "旅顺口": "l", "金州": "j", "普兰店": "p", "长海": "c", "瓦房店": "w", "庄河": "z", "鞍山": "a", "铁东": "t", "立山": "l", "千山": "q", "台安": "t", "岫岩": "x", "海城": "h", "抚顺": "f", "新抚": "x", "东洲": "d", "望花": "w", "顺城": "s", "抚顺县": "f", "新宾": "x", "清原": "q", "本溪": "b", "溪湖": "x", "明山": "m", "南芬": "n", "本溪满族自治县": "b", "桓仁": "h", "丹东": "d", "元宝": "y", "振兴": "z", "振安": "z", "宽甸": "k", "东港": "d", "凤城": "f", "锦州": "j", "古塔": "g", "凌河": "l", "太和": "t", "黑山": "h", "义县": "y", "凌海": "l", "北镇": "b", "营口": "y", "站前": "z", "西市": "x", "鲅鱼圈": "b", "老边": "l", "盖州": "g", "大石桥": "d", "阜新": "f", "海州": "h", "新邱": "x", "太平": "t", "清河门": "q", "细河": "x", "阜新蒙古族自治县": "f", "彰武": "z", "辽阳": "l", "白塔": "b", "文圣": "w", "宏伟": "h", "弓长岭": "g", "太子河": "t", "辽阳县": "l", "灯塔": "d", "盘锦": "p", "双台子": "s", "兴隆台": "x", "大洼": "d", "盘山": "p", "铁岭": "t", "银州": "y", "铁岭县": "t", "西丰": "x", "昌图": "c", "调兵山": "d", "开原": "k", "双塔": "s", "龙城": "l", "朝阳县": "c", "建平": "j", "喀喇沁左翼": "k", "北票": "b", "凌源": "l", "葫芦岛": "h", "连山": "l", "龙港": "l", "南票": "n", "绥中": "s", "建昌": "j", "兴城": "x", "吉林": "j", "长春": "c", "南关": "n", "二道": "e", "绿园": "l", "双阳": "s", "九台": "j", "农安": "n", "榆树": "y", "德惠": "d", "公主岭": "g", "吉林市": "j", "昌邑": "c", "龙潭": "l", "船营": "c", "丰满": "f", "永吉": "y", "蛟河": "j", "桦甸": "h", "舒兰": "s", "磐石": "p", "四平": "s", "梨树": "l", "伊通": "y", "双辽": "s", "辽源": "l", "龙山": "l", "西安": "x", "东丰": "d", "东辽": "d", "通化": "t", "东昌": "d", "二道江": "e", "通化县": "t", "辉南": "h", "柳河": "l", "梅河口": "m", "集安": "j", "白山": "b", "浑江": "h", "江源": "j", "抚松": "f", "靖宇": "j", "长白": "c", "临江": "l", "松原": "s", "宁江": "n", "前郭尔罗斯": "q", "长岭": "c", "乾安": "q", "扶余": "f", "白城": "b", "洮北": "t", "镇赉": "z", "通榆": "t", "洮南": "t", "大安": "d", "延边": "y", "延吉": "y", "图们": "t", "敦化": "d", "珲春": "h", "龙井": "l", "和龙": "h", "汪清": "w", "安图": "a", "黑龙江": "h", "哈尔滨": "h", "道里": "d", "南岗": "n", "道外": "d", "平房": "p", "松北": "s", "香坊": "x", "呼兰": "h", "阿城": "a", "双城": "s", "依兰": "y", "方正": "f", "宾县": "b", "巴彦": "b", "木兰": "m", "通河": "t", "延寿": "y", "尚志": "s", "五常": "w", "齐齐哈尔": "q", "龙沙": "l", "建华": "j", "铁锋": "t", "昂昂溪": "a", "富拉尔基区": "f", "碾子山": "n", "梅里斯达斡尔族区": "m", "龙江": "l", "依安": "y", "泰来": "t", "甘南": "g", "富裕": "f", "克山": "k", "克东": "k", "拜泉": "b", "讷河": "n", "鸡西": "j", "鸡冠": "j", "恒山": "h", "滴道": "d", "城子河": "c", "麻山": "m", "鸡东": "j", "虎林": "h", "密山": "m", "鹤岗": "h", "向阳": "x", "工农": "g", "南山": "n", "东山": "d", "兴山": "x", "萝北": "l", "绥滨": "s", "双鸭山": "s", "尖山": "j", "岭东": "l", "四方台": "s", "宝山": "b", "集贤": "j", "友谊": "y", "宝清": "b", "饶河": "r", "大庆": "d", "萨尔图": "s", "龙凤": "l", "让胡路": "r", "红岗": "h", "肇州": "z", "肇源": "z", "林甸": "l", "杜尔伯特": "d", "伊春": "y", "伊美": "y", "乌翠": "w", "友好": "y", "嘉荫": "j", "汤旺": "t", "丰林": "f", "大箐山": "d", "南岔": "n", "金林": "j", "铁力": "t", "佳木斯": "j", "前进": "q", "东风": "d", "桦南": "h", "桦川": "h", "汤原": "t", "同江": "t", "富锦": "f", "抚远": "f", "七台河": "q", "新兴": "x", "桃山": "t", "茄子河": "q", "勃利": "b", "牡丹江": "m", "东安": "d", "阳明": "y", "爱民": "a", "林口": "l", "绥芬河": "s", "海林": "h", "宁安": "n", "穆棱": "m", "东宁": "d", "黑河": "h", "爱辉": "a", "逊克": "x", "孙吴": "s", "北安": "b", "五大连池": "w", "嫩江": "n", "绥化": "s", "北林": "b", "望奎": "w", "兰西": "l", "青冈": "q", "庆安": "q", "明水": "m", "绥棱": "s", "安达": "a", "肇东": "z", "海伦": "h", "大兴安岭": "d", "漠河": "m", "呼玛": "h", "塔河": "t", "加格达奇区": "j", "上海": "s", "黄浦": "h", "徐汇": "x", "长宁": "c", "静安": "j", "普陀": "p", "虹口": "h", "杨浦": "y", "闵行": "m", "嘉定": "j", "浦东新区": "p", "金山": "j", "松江": "s", "青浦": "q", "奉贤": "f", "崇明": "c", "江苏": "j", "南京": "n", "玄武": "x", "秦淮": "q", "建邺": "j", "鼓楼": "g", "浦口": "p", "栖霞": "q", "雨花台": "y", "江宁": "j", "六合": "l", "溧水": "l", "高淳": "g", "无锡": "w", "锡山": "x", "惠山": "h", "滨湖": "b", "梁溪": "l", "新吴": "x", "江阴": "j", "宜兴": "y", "徐州": "x", "云龙": "y", "贾汪": "j", "泉山": "q", "铜山": "t", "丰县": "f", "沛县": "p", "睢宁": "s", "新沂": "x", "邳州": "p", "常州": "c", "天宁": "t", "钟楼": "z", "新北": "x", "武进": "w", "金坛": "j", "溧阳": "l", "苏州": "s", "虎丘": "h", "吴中": "w", "相城": "x", "姑苏": "g", "吴江": "w", "工业园区": "g", "常熟": "c", "张家港": "z", "昆山": "k", "太仓": "t", "南通": "n", "崇川": "c", "港闸": "g", "如东": "r", "启东": "q", "如皋": "r", "海门": "h", "海安": "h", "连云港": "l", "连云": "l", "赣榆": "g", "东海": "d", "灌云": "g", "灌南": "g", "淮安": "h", "淮安区": "h", "淮阴": "h", "清江浦": "q", "洪泽": "h", "涟水": "l", "盱眙": "x", "金湖": "j", "盐城": "y", "亭湖": "t", "盐都": "y", "大丰": "d", "响水": "x", "滨海": "b", "阜宁": "f", "射阳": "s", "建湖": "j", "东台": "d", "扬州": "y", "广陵": "g", "邗江": "h", "江都": "j", "宝应": "b", "仪征": "y", "高邮": "g", "镇江": "z", "京口": "j", "润州": "r", "丹徒": "d", "丹阳": "d", "扬中": "y", "句容": "j", "泰州": "t", "海陵": "h", "高港": "g", "姜堰": "j", "兴化": "x", "靖江": "j", "泰兴": "t", "宿迁": "s", "宿城": "s", "宿豫": "s", "沭阳": "s", "泗阳": "s", "泗洪": "s", "浙江": "z", "杭州": "h", "上城": "s", "下城": "x", "江干": "j", "拱墅": "g", "西湖": "x", "滨江": "b", "萧山": "x", "余杭": "y", "富阳": "f", "临安": "l", "桐庐": "t", "淳安": "c", "建德": "j", "宁波": "n", "海曙": "h", "江北": "j", "北仑": "b", "镇海": "z", "鄞州": "y", "奉化": "f", "象山": "x", "宁海": "n", "余姚": "y", "慈溪": "c", "温州": "w", "鹿城": "l", "龙湾": "l", "瓯海": "o", "洞头": "d", "永嘉": "y", "平阳": "p", "苍南": "c", "文成": "w", "泰顺": "t", "瑞安": "r", "乐清": "y", "嘉兴": "j", "南湖": "n", "秀洲": "x", "嘉善": "j", "海盐": "h", "海宁": "h", "平湖": "p", "桐乡": "t", "湖州": "h", "吴兴": "w", "南浔": "n", "德清": "d", "长兴": "c", "安吉": "a", "绍兴": "s", "越城": "y", "柯桥": "k", "上虞": "s", "新昌": "x", "诸暨": "z", "嵊州": "s", "金华": "j", "婺城": "w", "金东": "j", "武义": "w", "浦江": "p", "磐安": "p", "兰溪": "l", "义乌": "y", "东阳": "d", "永康": "y", "衢州": "q", "柯城": "k", "衢江": "q", "常山": "c", "开化": "k", "龙游": "l", "江山": "j", "舟山": "z", "定海": "d", "岱山": "d", "嵊泗": "s", "台州": "t", "椒江": "j", "黄岩": "h", "路桥": "l", "三门": "s", "天台": "t", "仙居": "x", "温岭": "w", "临海": "l", "玉环": "y", "丽水": "l", "莲都": "l", "青田": "q", "缙云": "j", "遂昌": "s", "松阳": "s", "云和": "y", "庆元": "q", "景宁": "j", "龙泉": "l", "安徽": "a", "合肥": "h", "瑶海": "y", "庐阳": "l", "蜀山": "s", "包河": "b", "长丰": "c", "肥东": "f", "肥西": "f", "庐江": "l", "巢湖": "c", "芜湖": "w", "镜湖": "j", "弋江": "y", "鸠江": "j", "三山": "s", "芜湖县": "w", "繁昌": "f", "南陵": "n", "无为": "w", "蚌埠": "b", "龙子湖": "l", "蚌山": "b", "禹会": "y", "淮上": "h", "怀远": "h", "五河": "w", "固镇": "g", "淮南": "h", "大通": "d", "田家庵": "t", "谢家集": "x", "八公山": "b", "潘集": "p", "凤台": "f", "寿县": "s", "马鞍山": "m", "花山": "h", "雨山": "y", "博望": "b", "当涂": "d", "含山": "h", "和县": "h", "淮北": "h", "杜集": "d", "相山": "x", "烈山": "l", "濉溪": "s", "铜陵": "t", "铜官": "t", "义安": "y", "枞阳": "z", "安庆": "a", "迎江": "y", "大观": "d", "宜秀": "y", "怀宁": "h", "太湖": "t", "宿松": "s", "望江": "w", "岳西": "y", "桐城": "t", "潜山": "q", "黄山": "h", "屯溪": "t", "黄山区": "h", "徽州": "h", "歙县": "s", "休宁": "x", "黟县": "y", "祁门": "q", "滁州": "c", "琅琊": "l", "南谯": "n", "来安": "l", "全椒": "q", "定远": "d", "凤阳": "f", "天长": "t", "明光": "m", "阜阳": "f", "颍州": "y", "颍东": "y", "颍泉": "y", "临泉": "l", "阜南": "f", "颍上": "y", "界首": "j", "宿州": "s", "埇桥": "y", "砀山": "d", "萧县": "x", "灵璧": "l", "泗县": "s", "六安": "l", "金安": "j", "裕安": "y", "叶集": "y", "霍邱": "h", "舒城": "s", "金寨": "j", "霍山": "h", "亳州": "b", "谯城": "q", "涡阳": "g", "蒙城": "m", "利辛": "l", "池州": "c", "贵池": "g", "东至": "d", "石台": "s", "青阳": "q", "宣城": "x", "宣州": "x", "郎溪": "l", "泾县": "j", "绩溪": "j", "旌德": "j", "宁国": "n", "广德": "g", "福建": "f", "福州": "f", "台江": "t", "仓山": "c", "马尾": "m", "晋安": "j", "长乐": "c", "闽侯": "m", "连江": "l", "罗源": "l", "闽清": "m", "永泰": "y", "平潭": "p", "福清": "f", "厦门": "x", "思明": "s", "海沧": "h", "湖里": "h", "集美": "j", "同安": "t", "翔安": "x", "莆田": "p", "城厢": "c", "涵江": "h", "荔城": "l", "秀屿": "x", "仙游": "x", "三明": "s", "梅列": "m", "三元": "s", "明溪": "m", "清流": "q", "宁化": "n", "大田": "d", "尤溪": "y", "沙县": "s", "将乐": "j", "泰宁": "t", "建宁": "j", "永安": "y", "泉州": "q", "鲤城": "l", "丰泽": "f", "洛江": "l", "泉港": "q", "惠安": "h", "安溪": "a", "永春": "y", "德化": "d", "金门": "j", "石狮": "s", "晋江": "j", "南安": "n", "漳州": "z", "芗城": "x", "龙文": "l", "云霄": "y", "漳浦": "z", "诏安": "z", "长泰": "c", "南靖": "n", "平和": "p", "华安": "h", "龙海": "l", "南平": "n", "延平": "y", "建阳": "j", "顺昌": "s", "浦城": "p", "光泽": "g", "松溪": "s", "政和": "z", "邵武": "s", "武夷山": "w", "建瓯": "j", "龙岩": "l", "新罗": "x", "永定": "y", "长汀": "c", "上杭": "s", "武平": "w", "连城": "l", "漳平": "z", "宁德": "n", "蕉城": "j", "霞浦": "x", "古田": "g", "屏南": "p", "寿宁": "s", "周宁": "z", "柘荣": "z", "福安": "f", "福鼎": "f", "江西": "j", "南昌": "n", "东湖": "d", "青云谱": "q", "青山湖": "q", "新建": "x", "红谷滩": "h", "南昌县": "n", "安义": "a", "进贤": "j", "景德镇": "j", "昌江": "c", "珠山": "z", "浮梁": "f", "乐平": "l", "萍乡": "p", "安源": "a", "湘东": "x", "莲花": "l", "上栗": "s", "芦溪": "l", "九江": "j", "濂溪": "l", "浔阳": "x", "柴桑": "c", "武宁": "w", "修水": "x", "永修": "y", "德安": "d", "都昌": "d", "湖口": "h", "彭泽": "p", "瑞昌": "r", "共青城": "g", "庐山": "l", "新余": "x", "渝水": "y", "分宜": "f", "鹰潭": "y", "月湖": "y", "余江": "y", "贵溪": "g", "赣州": "g", "章贡": "z", "南康": "n", "赣县": "g", "信丰": "x", "大余": "d", "上犹": "s", "崇义": "c", "安远": "a", "龙南": "l", "定南": "d", "全南": "q", "宁都": "n", "于都": "y", "兴国": "x", "会昌": "h", "寻乌": "x", "石城": "s", "瑞金": "r", "吉安": "j", "吉州": "j", "青原": "q", "吉安县": "j", "吉水": "j", "峡江": "x", "新干": "x", "永丰": "y", "泰和": "t", "遂川": "s", "万安": "w", "安福": "a", "永新": "y", "井冈山": "j", "宜春": "y", "袁州": "y", "奉新": "f", "万载": "w", "上高": "s", "宜丰": "y", "靖安": "j", "铜鼓": "t", "丰城": "f", "樟树": "z", "高安": "g", "抚州": "f", "临川": "l", "东乡": "d", "南城": "n", "黎川": "l", "南丰": "n", "崇仁": "c", "乐安": "l", "宜黄": "y", "金溪": "j", "资溪": "z", "广昌": "g", "上饶": "s", "信州": "x", "广丰": "g", "广信": "g", "玉山": "y", "铅山": "y", "横峰": "h", "弋阳": "y", "余干": "y", "鄱阳": "p", "万年": "w", "婺源": "w", "德兴": "d", "山东": "s", "济南": "j", "历下": "l", "市中": "s", "槐荫": "h", "天桥": "t", "历城": "l", "长清": "c", "章丘": "z", "济阳": "j", "莱芜": "l", "钢城": "g", "平阴": "p", "商河": "s", "青岛": "q", "市南": "s", "市北": "s", "黄岛": "h", "崂山": "l", "李沧": "l", "城阳": "c", "即墨": "j", "胶州": "j", "平度": "p", "莱西": "l", "淄博": "z", "淄川": "z", "张店": "z", "博山": "b", "临淄": "l", "周村": "z", "桓台": "h", "高青": "g", "沂源": "y", "枣庄": "z", "薛城": "x", "峄城": "y", "台儿庄": "t", "山亭": "s", "滕州": "t", "东营": "d", "东营区": "d", "河口": "h", "垦利": "k", "利津": "l", "广饶": "g", "烟台": "y", "芝罘": "z", "福山": "f", "牟平": "m", "莱山": "l", "蓬莱": "p", "龙口": "l", "莱阳": "l", "莱州": "l", "招远": "z", "海阳": "h", "潍坊": "w", "潍城": "w", "寒亭": "h", "坊子": "f", "奎文": "k", "临朐": "l", "昌乐": "c", "青州": "q", "诸城": "z", "寿光": "s", "安丘": "a", "高密": "g", "济宁": "j", "任城": "r", "兖州": "y", "微山": "w", "鱼台": "y", "金乡": "j", "嘉祥": "j", "汶上": "w", "泗水": "s", "梁山": "l", "曲阜": "q", "邹城": "z", "泰安": "t", "泰山": "t", "岱岳": "d", "宁阳": "n", "东平": "d", "新泰": "x", "肥城": "f", "威海": "w", "环翠": "h", "文登": "w", "荣成": "r", "乳山": "r", "日照": "r", "岚山": "l", "五莲": "w", "莒县": "j", "临沂": "l", "兰山": "l", "罗庄": "l", "沂南": "y", "郯城": "t", "沂水": "y", "兰陵": "l", "费县": "f", "平邑": "p", "莒南": "j", "蒙阴": "m", "临沭": "l", "德州": "d", "德城": "d", "陵城": "l", "宁津": "n", "庆云": "q", "临邑": "l", "齐河": "q", "平原": "p", "夏津": "x", "武城": "w", "乐陵": "l", "禹城": "y", "聊城": "l", "东昌府": "d", "茌平": "c", "阳谷": "y", "莘县": "s", "东阿": "d", "冠县": "g", "高唐": "g", "临清": "l", "滨州": "b", "滨城": "b", "沾化": "z", "惠民": "h", "阳信": "y", "无棣": "w", "博兴": "b", "邹平": "z", "菏泽": "h", "牡丹": "m", "定陶": "d", "曹县": "c", "单县": "s", "成武": "c", "巨野": "j", "郓城": "y", "鄄城": "j", "东明": "d", "河南": "h", "郑州": "z", "中原": "z", "二七": "e", "管城回族区": "g", "金水": "j", "上街": "s", "惠济": "h", "中牟": "z", "巩义": "g", "荥阳": "x", "新密": "x", "新郑": "x", "登封": "d", "开封": "k", "龙亭": "l", "顺河回族区": "s", "禹王台": "y", "祥符": "x", "杞县": "q", "通许": "t", "尉氏": "w", "兰考": "l", "洛阳": "l", "老城": "l", "西工": "x", "瀍河回族区": "c", "涧西": "j", "吉利": "j", "洛龙": "l", "孟津": "m", "新安": "x", "栾川": "l", "嵩县": "s", "汝阳": "r", "宜阳": "y", "洛宁": "l", "伊川": "y", "偃师": "y", "平顶山": "p", "卫东": "w", "石龙": "s", "湛河": "z", "宝丰": "b", "叶县": "y", "鲁山": "l", "郏县": "j", "舞钢": "w", "汝州": "r", "安阳": "a", "文峰": "w", "北关": "b", "殷都": "y", "龙安": "l", "安阳县": "a", "汤阴": "t", "滑县": "h", "内黄": "n", "林州": "l", "鹤壁": "h", "鹤山": "h", "山城": "s", "淇滨": "q", "浚县": "x", "淇县": "q", "新乡": "x", "红旗": "h", "卫滨": "w", "凤泉": "f", "牧野": "m", "新乡县": "x", "获嘉": "h", "原阳": "y", "延津": "y", "封丘": "f", "卫辉": "w", "辉县": "h", "长垣": "c", "焦作": "j", "解放": "j", "中站": "z", "马村": "m", "山阳": "s", "修武": "x", "博爱": "b", "武陟": "w", "温县": "w", "沁阳": "q", "孟州": "m", "濮阳": "p", "华龙": "h", "清丰": "q", "南乐": "n", "范县": "f", "台前": "t", "濮阳县": "p", "许昌": "x", "魏都": "w", "建安": "j", "鄢陵": "y", "襄城": "x", "禹州": "y", "长葛": "c", "漯河": "l", "源汇": "y", "郾城": "y", "召陵": "s", "舞阳": "w", "临颍": "l", "三门峡": "s", "湖滨": "h", "陕州": "s", "渑池": "m", "卢氏": "l", "义马": "y", "灵宝": "l", "南阳": "n", "宛城": "w", "卧龙": "w", "南召": "n", "方城": "f", "西峡": "x", "镇平": "z", "内乡": "n", "淅川": "x", "社旗": "s", "唐河": "t", "新野": "x", "桐柏": "t", "邓州": "d", "商丘": "s", "梁园": "l", "睢阳": "s", "民权": "m", "睢县": "s", "宁陵": "n", "柘城": "z", "虞城": "y", "夏邑": "x", "永城": "y", "信阳": "x", "浉河": "s", "平桥": "p", "罗山": "l", "光山": "g", "新县": "x", "商城": "s", "固始": "g", "潢川": "h", "淮滨": "h", "息县": "x", "周口": "z", "川汇": "c", "淮阳": "h", "扶沟": "f", "西华": "x", "商水": "s", "沈丘": "s", "郸城": "d", "太康": "t", "鹿邑": "l", "项城": "x", "驻马店": "z", "驿城": "y", "西平": "x", "上蔡": "s", "平舆": "p", "正阳": "z", "确山": "q", "泌阳": "b", "汝南": "r", "遂平": "s", "新蔡": "x", "济源": "j", "湖北": "h", "武汉": "w", "江岸": "j", "江汉": "j", "硚口": "q", "汉阳": "h", "武昌": "w", "洪山": "h", "东西湖": "d", "汉南": "h", "蔡甸": "c", "江夏": "j", "黄陂": "h", "新洲": "x", "黄石": "h", "黄石港": "h", "西塞山": "x", "下陆": "x", "铁山": "t", "阳新": "y", "大冶": "d", "十堰": "s", "茅箭": "m", "张湾": "z", "郧阳": "y", "郧西": "y", "竹山": "z", "竹溪": "z", "房县": "f", "丹江口": "d", "宜昌": "y", "西陵": "x", "伍家岗": "w", "点军": "d", "猇亭": "x", "夷陵": "y", "远安": "y", "秭归": "z", "长阳": "c", "五峰": "w", "宜都": "y", "当阳": "d", "枝江": "z", "襄阳": "x", "樊城": "f", "襄州": "x", "南漳": "n", "谷城": "g", "保康": "b", "老河口": "l", "枣阳": "z", "宜城": "y", "鄂州": "e", "梁子湖": "l", "华容": "h", "鄂城": "e", "荆门": "j", "东宝": "d", "掇刀": "d", "沙洋": "s", "钟祥": "z", "京山": "j", "孝感": "x", "孝南": "x", "孝昌": "x", "大悟": "d", "云梦": "y", "应城": "y", "安陆": "a", "汉川": "h", "荆州": "j", "沙市": "s", "荆州区": "j", "公安": "g", "监利": "j", "江陵": "j", "石首": "s", "洪湖": "h", "松滋": "s", "黄冈": "h", "黄州": "h", "团风": "t", "红安": "h", "罗田": "l", "英山": "y", "浠水": "x", "蕲春": "q", "黄梅": "h", "麻城": "m", "武穴": "w", "咸宁": "x", "咸安": "x", "嘉鱼": "j", "通城": "t", "崇阳": "c", "通山": "t", "赤壁": "c", "随州": "s", "曾都": "z", "随县": "s", "广水": "g", "恩施": "e", "恩施市": "e", "利川": "l", "建始": "j", "巴东": "b", "宣恩": "x", "咸丰": "x", "来凤": "l", "鹤峰": "h", "仙桃": "x", "潜江": "q", "天门": "t", "神农架": "s", "神农架林区": "s", "湖南": "h", "长沙": "c", "芙蓉": "f", "天心": "t", "岳麓": "y", "开福": "k", "雨花": "y", "望城": "w", "长沙县": "c", "浏阳": "l", "宁乡": "n", "株洲": "z", "荷塘": "h", "芦淞": "l", "石峰": "s", "天元": "t", "渌口": "l", "攸县": "y", "茶陵": "c", "炎陵": "y", "醴陵": "l", "湘潭": "x", "雨湖": "y", "岳塘": "y", "湘潭县": "x", "湘乡": "x", "韶山": "s", "衡阳": "h", "珠晖": "z", "雁峰": "y", "石鼓": "s", "蒸湘": "z", "南岳": "n", "衡阳县": "h", "衡南": "h", "衡山": "h", "衡东": "h", "祁东": "q", "耒阳": "l", "常宁": "c", "邵阳": "s", "双清": "s", "大祥": "d", "北塔": "b", "新邵": "x", "邵阳县": "s", "隆回": "l", "洞口": "d", "绥宁": "s", "新宁": "x", "城步": "c", "武冈": "w", "邵东": "s", "岳阳": "y", "岳阳楼": "y", "云溪": "y", "君山": "j", "岳阳县": "y", "湘阴": "x", "平江": "p", "汨罗": "m", "临湘": "l", "常德": "c", "武陵": "w", "鼎城": "d", "安乡": "a", "汉寿": "h", "澧县": "l", "临澧": "l", "桃源": "t", "石门": "s", "津市": "j", "张家界": "z", "武陵源": "w", "慈利": "c", "桑植": "s", "益阳": "y", "资阳": "z", "赫山": "h", "南县": "n", "桃江": "t", "安化": "a", "沅江": "y", "郴州": "c", "北湖": "b", "苏仙": "s", "桂阳": "g", "宜章": "y", "永兴": "y", "嘉禾": "j", "临武": "l", "汝城": "r", "桂东": "g", "安仁": "a", "资兴": "z", "永州": "y", "零陵": "l", "冷水滩": "l", "祁阳": "q", "双牌": "s", "道县": "d", "江永": "j", "宁远": "n", "蓝山": "l", "新田": "x", "江华": "j", "怀化": "h", "鹤城": "h", "中方": "z", "沅陵": "y", "辰溪": "c", "溆浦": "x", "会同": "h", "麻阳": "m", "新晃": "x", "芷江": "z", "靖州": "j", "通道": "t", "洪江": "h", "娄底": "l", "娄星": "l", "双峰": "s", "新化": "x", "冷水江": "l", "涟源": "l", "湘西": "x", "吉首": "j", "泸溪": "l", "凤凰": "f", "花垣": "h", "保靖": "b", "古丈": "g", "永顺": "y", "广东": "g", "广州": "g", "荔湾": "l", "越秀": "y", "海珠": "h", "天河": "t", "白云": "b", "黄埔": "h", "番禺": "p", "花都": "h", "南沙": "n", "从化": "c", "增城": "z", "韶关": "s", "武江": "w", "浈江": "z", "曲江": "q", "始兴": "s", "仁化": "r", "翁源": "w", "乳源": "r", "新丰": "x", "乐昌": "l", "南雄": "n", "深圳": "s", "罗湖": "l", "福田": "f", "宝安": "b", "龙岗": "l", "盐田": "y", "龙华": "l", "坪山": "p", "光明": "g", "珠海": "z", "香洲": "x", "斗门": "d", "金湾": "j", "汕头": "s", "龙湖": "l", "金平": "j", "濠江": "h", "潮阳": "c", "潮南": "c", "澄海": "c", "南澳": "n", "佛山": "f", "禅城": "c", "南海": "n", "顺德": "s", "三水": "s", "高明": "g", "江门": "j", "蓬江": "p", "江海": "j", "新会": "x", "台山": "t", "恩平": "e", "湛江": "z", "赤坎": "c", "霞山": "x", "坡头": "p", "麻章": "m", "遂溪": "s", "徐闻": "x", "廉江": "l", "雷州": "l", "吴川": "w", "茂名": "m", "茂南": "m", "电白": "d", "高州": "g", "化州": "h", "信宜": "x", "肇庆": "z", "端州": "d", "鼎湖": "d", "高要": "g", "广宁": "g", "怀集": "h", "封开": "f", "德庆": "d", "四会": "s", "惠州": "h", "惠城": "h", "惠阳": "h", "博罗": "b", "惠东": "h", "龙门": "l", "梅州": "m", "梅江": "m", "梅县": "m", "大埔": "d", "丰顺": "f", "五华": "w", "平远": "p", "蕉岭": "j", "兴宁": "x", "汕尾": "s", "海丰": "h", "陆河": "l", "陆丰": "l", "河源": "h", "源城": "y", "紫金": "z", "龙川": "l", "连平": "l", "东源": "d", "阳江": "y", "江城": "j", "阳东": "y", "阳西": "y", "阳春": "y", "清远": "q", "清城": "q", "清新区": "q", "佛冈": "f", "阳山": "y", "连南": "l", "英德": "y", "连州": "l", "东莞": "d", "潮州": "c", "湘桥": "x", "潮安": "c", "饶平": "r", "揭阳": "j", "榕城": "r", "揭东": "j", "揭西": "j", "惠来": "h", "普宁": "p", "云浮": "y", "云城": "y", "云安": "y", "郁南": "y", "罗定": "l", "广西": "g", "南宁": "n", "青秀": "q", "江南": "j", "西乡塘": "x", "良庆": "l", "邕宁": "y", "武鸣": "w", "隆安": "l", "马山": "m", "上林": "s", "宾阳": "b", "横县": "h", "柳州": "l", "城中": "c", "鱼峰": "y", "柳南": "l", "柳北": "l", "柳江": "l", "柳城": "l", "鹿寨": "l", "融安": "r", "融水": "r", "三江": "s", "桂林": "g", "秀峰": "x", "叠彩": "d", "七星": "q", "雁山": "y", "临桂": "l", "阳朔": "y", "灵川": "l", "全州": "q", "永福": "y", "灌阳": "g", "龙胜": "l", "资源": "z", "平乐": "p", "恭城": "g", "荔浦": "l", "梧州": "w", "万秀": "w", "长洲": "c", "龙圩": "l", "苍梧": "c", "藤县": "t", "蒙山": "m", "岑溪": "c", "北海": "b", "银海": "y", "铁山港": "t", "合浦": "h", "防城港": "f", "港口": "g", "防城": "f", "上思": "s", "东兴": "d", "钦州": "q", "钦南": "q", "钦北": "q", "灵山": "l", "浦北": "p", "贵港": "g", "港北": "g", "港南": "g", "覃塘": "q", "平南": "p", "桂平": "g", "玉林": "y", "玉州": "y", "福绵": "f", "容县": "r", "陆川": "l", "博白": "b", "兴业": "x", "北流": "b", "百色": "b", "右江": "y", "田阳": "t", "田东": "t", "德保": "d", "那坡": "n", "凌云": "l", "乐业": "l", "田林": "t", "西林": "x", "隆林": "l", "靖西": "j", "平果": "p", "贺州": "h", "八步": "b", "平桂": "p", "昭平": "z", "钟山": "z", "富川": "f", "河池": "h", "金城江": "j", "宜州": "y", "南丹": "n", "天峨": "t", "凤山": "f", "东兰": "d", "罗城": "l", "环江": "h", "巴马": "b", "都安": "d", "大化": "d", "来宾": "l", "兴宾": "x", "忻城": "x", "象州": "x", "武宣": "w", "金秀": "j", "合山": "h", "崇左": "c", "江州": "j", "扶绥": "f", "宁明": "n", "龙州": "l", "大新": "d", "天等": "t", "凭祥": "p", "海口": "h", "秀英": "x", "琼山": "q", "美兰": "m", "三亚": "s", "海棠": "h", "吉阳": "j", "天涯": "t", "崖州": "y", "三沙": "s", "西沙": "x", "儋州": "d", "五指山": "w", "琼海": "q", "文昌": "w", "万宁": "w", "东方": "d", "定安": "d", "屯昌": "t", "澄迈": "c", "临高": "l", "白沙": "b", "乐东": "l", "陵水": "l", "保亭": "b", "琼中": "q", "重庆": "c", "重庆城区": "c", "万州": "w", "涪陵": "f", "渝中": "y", "大渡口": "d", "沙坪坝": "s", "九龙坡": "j", "南岸": "n", "北碚": "b", "綦江": "q", "大足": "d", "渝北": "y", "巴南": "b", "黔江": "q", "长寿": "c", "江津": "j", "合川": "h", "永川": "y", "南川": "n", "璧山": "b", "铜梁": "t", "潼南": "t", "荣昌": "r", "开州": "k", "梁平": "l", "武隆": "w", "重庆郊县": "c", "城口": "c", "丰都": "f", "垫江": "d", "忠县": "z", "云阳": "y", "奉节": "f", "巫山": "w", "巫溪": "w", "石柱": "s", "秀山": "x", "酉阳": "y", "彭水": "p", "四川": "s", "成都": "c", "锦江": "j", "青羊": "q", "金牛": "j", "武侯": "w", "成华": "c", "龙泉驿": "l", "青白江": "q", "新都": "x", "温江": "w", "双流": "s", "郫都": "p", "金堂": "j", "大邑": "d", "蒲江": "p", "新津": "x", "都江堰": "d", "彭州": "p", "邛崃": "q", "崇州": "c", "简阳": "j", "自贡": "z", "自流井": "z", "贡井": "g", "沿滩": "y", "荣县": "r", "富顺": "f", "攀枝花": "p", "东区": "d", "西区": "x", "仁和": "r", "米易": "m", "盐边": "y", "泸州": "l", "江阳": "j", "纳溪": "n", "龙马潭": "l", "泸县": "l", "合江": "h", "叙永": "x", "古蔺": "g", "德阳": "d", "旌阳": "j", "罗江": "l", "中江": "z", "广汉": "g", "什邡": "s", "绵竹": "m", "绵阳": "m", "涪城": "f", "游仙": "y", "安州": "a", "三台": "s", "盐亭": "y", "梓潼": "z", "北川": "b", "平武": "p", "江油": "j", "广元": "g", "利州": "l", "昭化": "z", "朝天": "c", "旺苍": "w", "青川": "q", "剑阁": "j", "苍溪": "c", "遂宁": "s", "船山": "c", "安居": "a", "蓬溪": "p", "大英": "d", "射洪": "s", "内江": "n", "威远": "w", "资中": "z", "隆昌": "l", "乐山": "l", "沙湾": "s", "五通桥": "w", "金口河": "j", "犍为": "q", "井研": "j", "夹江": "j", "沐川": "m", "峨边": "e", "马边": "m", "峨眉山": "e", "南充": "n", "顺庆": "s", "高坪": "g", "嘉陵": "j", "南部": "n", "营山": "y", "蓬安": "p", "仪陇": "y", "西充": "x", "阆中": "l", "眉山": "m", "东坡": "d", "彭山": "p", "仁寿": "r", "洪雅": "h", "丹棱": "d", "青神": "q", "宜宾": "y", "翠屏": "c", "南溪": "n", "叙州": "x", "江安": "j", "高县": "g", "珙县": "g", "筠连": "j", "兴文": "x", "屏山": "p", "广安": "g", "广安区": "g", "前锋": "q", "岳池": "y", "武胜": "w", "邻水": "l", "华蓥": "h", "达州": "d", "通川": "t", "达川": "d", "宣汉": "x", "开江": "k", "大竹": "d", "渠县": "q", "万源": "w", "雅安": "y", "雨城": "y", "名山": "m", "荥经": "y", "汉源": "h", "石棉": "s", "天全": "t", "芦山": "l", "宝兴": "b", "巴中": "b", "巴州": "b", "恩阳": "e", "通江": "t", "南江": "n", "平昌": "p", "雁江": "y", "安岳": "a", "乐至": "l", "阿坝": "a", "马尔康": "m", "汶川": "w", "理县": "l", "茂县": "m", "松潘": "s", "九寨沟": "j", "金川": "j", "小金": "x", "黑水": "h", "壤塘": "r", "阿坝县": "a", "若尔盖": "r", "红原": "h", "甘孜": "g", "康定": "k", "泸定": "l", "丹巴": "d", "九龙": "j", "雅江": "y", "道孚": "d", "炉霍": "l", "甘孜县": "g", "新龙": "x", "德格": "d", "白玉": "b", "石渠": "s", "色达": "s", "理塘": "l", "巴塘": "b", "乡城": "x", "稻城": "d", "得荣": "d", "凉山": "l", "西昌": "x", "木里": "m", "盐源": "y", "德昌": "d", "会理": "h", "会东": "h", "宁南": "n", "普格": "p", "布拖": "b", "金阳": "j", "昭觉": "z", "喜德": "x", "冕宁": "m", "越西": "y", "甘洛": "g", "美姑": "m", "雷波": "l", "贵州": "g", "贵阳": "g", "南明": "n", "云岩": "y", "花溪": "h", "乌当": "w", "观山湖": "g", "开阳": "k", "息烽": "x", "修文": "x", "清镇": "q", "六盘水": "l", "六枝特": "l", "水城": "s", "盘州": "p", "遵义": "z", "红花岗": "h", "汇川": "h", "播州": "b", "桐梓": "t", "绥阳": "s", "正安": "z", "道真": "d", "务川": "w", "凤冈": "f", "湄潭": "m", "余庆": "y", "习水": "x", "赤水": "c", "仁怀": "r", "安顺": "a", "西秀": "x", "平坝": "p", "普定": "p", "镇宁": "z", "关岭": "g", "紫云": "z", "毕节": "b", "七星关": "q", "大方": "d", "黔西": "q", "金沙": "j", "织金": "z", "纳雍": "n", "威宁": "w", "赫章": "h", "铜仁": "t", "碧江": "b", "万山": "w", "江口": "j", "玉屏": "y", "石阡": "s", "思南": "s", "印江": "y", "德江": "d", "沿河": "y", "松桃": "s", "黔西南": "q", "兴义": "x", "兴仁": "x", "普安": "p", "晴隆": "q", "贞丰": "z", "望谟": "w", "册亨": "c", "安龙": "a", "黔东南": "q", "凯里": "k", "黄平": "h", "施秉": "s", "三穗": "s", "镇远": "z", "岑巩": "c", "天柱": "t", "锦屏": "j", "剑河": "j", "黎平": "l", "榕江": "r", "从江": "c", "雷山": "l", "麻江": "m", "丹寨": "d", "黔南": "q", "都匀": "d", "福泉": "f", "荔波": "l", "贵定": "g", "瓮安": "w", "独山": "d", "平塘": "p", "罗甸": "l", "长顺": "c", "龙里": "l", "惠水": "h", "三都": "s", "云南": "y", "昆明": "k", "盘龙": "p", "官渡": "g", "西山": "x", "东川": "d", "呈贡": "c", "晋宁": "j", "富民": "f", "宜良": "y", "石林": "s", "嵩明": "s", "禄劝": "l", "寻甸": "x", "安宁": "a", "曲靖": "q", "麒麟": "q", "沾益": "z", "马龙": "m", "陆良": "l", "师宗": "s", "罗平": "l", "富源": "f", "会泽": "h", "宣威": "x", "玉溪": "y", "红塔": "h", "江川": "j", "通海": "t", "华宁": "h", "易门": "y", "峨山": "e", "新平": "x", "元江": "y", "澄江": "c", "保山": "b", "隆阳": "l", "施甸": "s", "龙陵": "l", "昌宁": "c", "腾冲": "t", "昭通": "z", "昭阳": "z", "鲁甸": "l", "巧家": "q", "盐津": "y", "大关": "d", "永善": "y", "绥江": "s", "镇雄": "z", "彝良": "y", "威信": "w", "水富": "s", "丽江": "l", "古城": "g", "玉龙": "y", "永胜": "y", "华坪": "h", "宁蒗": "n", "普洱": "p", "思茅": "s", "宁洱": "n", "墨江": "m", "景东": "j", "景谷": "j", "镇沅": "z", "孟连": "m", "澜沧": "l", "西盟": "x", "临沧": "l", "临翔": "l", "凤庆": "f", "云县": "y", "永德": "y", "镇康": "z", "双江": "s", "耿马": "g", "沧源": "c", "楚雄": "c", "楚雄市": "c", "双柏": "s", "牟定": "m", "南华": "n", "姚安": "y", "大姚": "d", "永仁": "y", "元谋": "y", "武定": "w", "禄丰": "l", "红河": "h", "个旧": "g", "开远": "k", "蒙自": "m", "弥勒": "m", "屏边": "p", "建水": "j", "石屏": "s", "泸西": "l", "元阳": "y", "红河县": "h", "绿春": "l", "文山": "w", "文山市": "w", "砚山": "y", "西畴": "x", "麻栗坡": "m", "马关": "m", "丘北": "q", "广南": "g", "富宁": "f", "西双版纳": "x", "景洪": "j", "勐海": "m", "勐腊": "m", "大理": "d", "大理市": "d", "漾濞": "y", "祥云": "x", "宾川": "b", "弥渡": "m", "南涧": "n", "巍山": "w", "永平": "y", "洱源": "e", "剑川": "j", "鹤庆": "h", "德宏": "d", "瑞丽": "r", "芒市": "m", "梁河": "l", "盈江": "y", "陇川": "l", "怒江": "n", "泸水": "l", "福贡": "f", "贡山": "g", "兰坪": "l", "迪庆": "d", "香格里拉": "x", "德钦": "d", "维西": "w", "西藏": "x", "拉萨": "l", "城关": "c", "堆龙德庆区": "d", "达孜": "d", "林周": "l", "当雄": "d", "尼木": "n", "曲水": "q", "墨竹工卡": "m", "日喀则": "r", "桑珠孜": "s", "南木林": "n", "江孜": "j", "定日": "d", "萨迦": "s", "拉孜": "l", "昂仁": "a", "谢通门": "x", "白朗": "b", "仁布": "r", "康马": "k", "定结": "d", "仲巴": "z", "亚东": "y", "吉隆": "j", "聂拉木": "n", "萨嘎": "s", "岗巴": "g", "昌都": "c", "卡若": "k", "江达": "j", "贡觉": "g", "类乌齐": "l", "丁青": "d", "察雅": "c", "八宿": "b", "左贡": "z", "芒康": "m", "洛隆": "l", "边坝": "b", "林芝": "l", "巴宜": "b", "工布江达": "g", "米林": "m", "墨脱": "m", "波密": "b", "察隅": "c", "朗县": "l", "山南": "s", "乃东": "n", "扎囊": "z", "贡嘎": "g", "桑日": "s", "琼结": "q", "曲松": "q", "措美": "c", "洛扎": "l", "加查": "j", "隆子": "l", "错那": "c", "浪卡子": "l", "那曲": "n", "色尼": "s", "嘉黎": "j", "比如": "b", "聂荣": "n", "安多": "a", "申扎": "s", "索县": "s", "班戈": "b", "巴青": "b", "尼玛": "n", "双湖": "s", "阿里": "a", "普兰": "p", "札达": "z", "噶尔": "g", "日土": "r", "革吉": "g", "改则": "g", "措勤": "c", "陕西": "s", "碑林": "b", "莲湖": "l", "灞桥": "b", "未央": "w", "雁塔": "y", "阎良": "y", "临潼": "l", "高陵": "g", "鄠邑": "h", "蓝田": "l", "周至": "z", "铜川": "t", "王益": "w", "印台": "y", "耀州": "y", "宜君": "y", "宝鸡": "b", "渭滨": "w", "金台": "j", "陈仓": "c", "凤翔": "f", "岐山": "q", "扶风": "f", "眉县": "m", "陇县": "l", "千阳": "q", "麟游": "l", "凤县": "f", "太白": "t", "咸阳": "x", "秦都": "q", "杨陵": "y", "渭城": "w", "三原": "s", "泾阳": "j", "乾县": "q", "礼泉": "l", "永寿": "y", "长武": "c", "旬邑": "x", "淳化": "c", "武功": "w", "兴平": "x", "彬州": "b", "渭南": "w", "临渭": "l", "华州": "h", "潼关": "t", "大荔": "d", "合阳": "h", "澄城": "c", "蒲城": "p", "白水": "b", "富平": "f", "韩城": "h", "华阴": "h", "延安": "y", "宝塔": "b", "安塞": "a", "延长": "y", "延川": "y", "志丹": "z", "吴起": "w", "甘泉": "g", "富县": "f", "洛川": "l", "宜川": "y", "黄龙": "h", "黄陵": "h", "子长": "z", "汉中": "h", "汉台": "h", "南郑": "n", "城固": "c", "洋县": "y", "西乡": "x", "勉县": "m", "宁强": "n", "略阳": "l", "镇巴": "z", "留坝": "l", "佛坪": "f", "榆林": "y", "榆阳": "y", "横山": "h", "府谷": "f", "靖边": "j", "定边": "d", "绥德": "s", "米脂": "m", "佳县": "j", "吴堡": "w", "清涧": "q", "子洲": "z", "神木": "s", "安康": "a", "汉滨": "h", "汉阴": "h", "石泉": "s", "宁陕": "n", "紫阳": "z", "岚皋": "l", "平利": "p", "镇坪": "z", "旬阳": "x", "白河": "b", "商洛": "s", "商州": "s", "洛南": "l", "丹凤": "d", "商南": "s", "镇安": "z", "柞水": "z", "甘肃": "g", "兰州": "l", "七里河": "q", "西固": "x", "红古": "h", "永登": "y", "皋兰": "g", "榆中": "y", "嘉峪关": "j", "金昌": "j", "永昌": "y", "白银": "b", "白银区": "b", "平川": "p", "靖远": "j", "会宁": "h", "景泰": "j", "天水": "t", "秦州": "q", "麦积": "m", "清水": "q", "秦安": "q", "甘谷": "g", "武山": "w", "张家川": "z", "武威": "w", "凉州": "l", "民勤": "m", "古浪": "g", "天祝": "t", "张掖": "z", "甘州": "g", "肃南": "s", "民乐": "m", "临泽": "l", "高台": "g", "山丹": "s", "平凉": "p", "崆峒": "k", "泾川": "j", "灵台": "l", "崇信": "c", "庄浪": "z", "静宁": "j", "华亭": "h", "酒泉": "j", "肃州": "s", "金塔": "j", "瓜州": "g", "肃北": "s", "阿克塞": "a", "玉门": "y", "敦煌": "d", "庆阳": "q", "西峰": "x", "庆城": "q", "环县": "h", "华池": "h", "合水": "h", "正宁": "z", "宁县": "n", "镇原": "z", "定西": "d", "安定": "a", "通渭": "t", "陇西": "l", "渭源": "w", "临洮": "l", "漳县": "z", "岷县": "m", "陇南": "l", "武都": "w", "成县": "c", "文县": "w", "宕昌": "t", "康县": "k", "西和": "x", "礼县": "l", "徽县": "h", "两当": "l", "临夏": "l", "临夏市": "l", "临夏县": "l", "康乐": "k", "永靖": "y", "广河": "g", "和政": "h", "东乡族自治县": "d", "积石山": "j", "合作": "h", "临潭": "l", "卓尼": "z", "舟曲": "z", "迭部": "d", "玛曲": "m", "碌曲": "l", "夏河": "x", "青海": "q", "西宁": "x", "城东": "c", "城西": "c", "城北": "c", "湟中": "h", "湟源": "h", "海东": "h", "乐都": "l", "平安": "p", "民和": "m", "互助": "h", "化隆": "h", "循化": "x", "海北": "h", "门源": "m", "祁连": "q", "海晏": "h", "刚察": "g", "黄南": "h", "同仁": "t", "尖扎": "j", "泽库": "z", "共和": "g", "同德": "t", "贵德": "g", "兴海": "x", "贵南": "g", "果洛": "g", "玛沁": "m", "班玛": "b", "甘德": "g", "达日": "d", "久治": "j", "玛多": "m", "玉树": "y", "玉树市": "y", "杂多": "z", "称多": "c", "治多": "z", "囊谦": "n", "曲麻莱": "q", "海西": "h", "格尔木": "g", "德令哈": "d", "茫崖": "m", "乌兰": "w", "都兰": "d", "天峻": "t", "大柴旦行政委员会": "d", "宁夏": "n", "银川": "y", "兴庆": "x", "西夏": "x", "金凤": "j", "永宁": "y", "贺兰": "h", "灵武": "l", "石嘴山": "s", "大武口": "d", "惠农": "h", "平罗": "p", "吴忠": "w", "利通": "l", "红寺堡": "h", "盐池": "y", "同心": "t", "青铜峡": "q", "固原": "g", "原州": "y", "西吉": "x", "隆德": "l", "泾源": "j", "彭阳": "p", "中卫": "z", "沙坡头": "s", "中宁": "z", "海原": "h", "新疆": "x", "乌鲁木齐": "w", "天山": "t", "沙依巴克区": "s", "新市": "x", "水磨沟": "s", "头屯河": "t", "达坂城": "d", "米东": "m", "乌鲁木齐县": "w", "克拉玛依": "k", "独山子": "d", "克拉玛依区": "k", "白碱滩": "b", "乌尔禾": "w", "吐鲁番": "t", "高昌": "g", "鄯善": "s", "托克逊": "t", "哈密": "h", "伊州": "y", "巴里坤": "b", "伊吾": "y", "昌吉": "c", "昌吉市": "c", "阜康": "f", "呼图壁": "h", "玛纳斯": "m", "奇台": "q", "吉木萨尔": "j", "木垒": "m", "博尔塔拉": "b", "博乐": "b", "阿拉山口": "a", "精河": "j", "温泉": "w", "巴音郭楞": "b", "库尔勒": "k", "轮台": "l", "尉犁": "y", "若羌": "r", "且末": "q", "焉耆": "y", "和静": "h", "和硕": "h", "博湖": "b", "阿克苏": "a", "阿克苏市": "a", "库车": "k", "温宿": "w", "沙雅": "s", "新和": "x", "拜城": "b", "乌什": "w", "阿瓦提": "a", "柯坪": "k", "克孜勒苏": "k", "阿图什": "a", "阿克陶": "a", "阿合奇": "a", "乌恰": "w", "喀什": "k", "喀什市": "k", "疏附": "s", "疏勒": "s", "英吉沙": "y", "泽普": "z", "莎车": "s", "叶城": "y", "麦盖提": "m", "岳普湖": "y", "伽师": "j", "巴楚": "b", "塔什库尔干": "t", "和田": "h", "和田市": "h", "和田县": "h", "墨玉": "m", "皮山": "p", "洛浦": "l", "策勒": "c", "于田": "y", "民丰": "m", "伊犁": "y", "伊宁市": "y", "奎屯": "k", "霍尔果斯": "h", "伊宁县": "y", "察布查尔": "c", "霍城": "h", "巩留": "g", "新源": "x", "昭苏": "z", "特克斯": "t", "尼勒克": "n", "塔城": "t", "塔城市": "t", "乌苏": "w", "额敏": "e", "托里": "t", "裕民": "y", "和布克赛尔": "h", "阿勒泰": "a", "阿勒泰市": "a", "布尔津": "b", "富蕴": "f", "福海": "f", "哈巴河": "h", "青河": "q", "吉木乃": "j", "石河子": "s", "阿拉尔": "a", "图木舒克": "t", "五家渠": "w", "北屯": "b", "铁门关": "t", "双河": "s", "可克达拉": "k", "昆玉": "k", "胡杨河": "h", "台湾": "t", "台北": "t", "中正": "z", "万华": "w", "信义": "x", "士林": "s", "北投": "b", "内湖": "n", "南港": "n", "高雄": "g", "前金": "q", "苓雅": "l", "盐埕": "y", "鼓山": "g", "旗津": "q", "前镇": "q", "三民": "s", "左营": "z", "楠梓": "n", "小港": "x", "仁武": "r", "大社": "d", "冈山": "g", "路竹": "l", "阿莲": "a", "田寮": "t", "燕巢": "y", "桥头": "q", "梓官": "z", "弥陀": "m", "湖内": "h", "大寮": "d", "林园": "l", "鸟松": "n", "大树": "d", "旗山": "q", "美浓": "m", "六龟": "l", "内门": "n", "杉林": "s", "甲仙": "j", "那玛夏": "n", "茂林": "m", "茄萣": "q", "台南": "t", "中西": "z", "南区": "n", "北区": "b", "安南": "a", "归仁": "g", "左镇": "z", "玉井": "y", "楠西": "n", "南化": "n", "仁德": "r", "关庙": "g", "龙崎": "l", "官田": "g", "麻豆": "m", "佳里": "j", "西港": "x", "七股": "q", "将军": "j", "学甲": "x", "北门": "b", "新营": "x", "后壁": "h", "六甲": "l", "下营": "x", "柳营": "l", "盐水": "y", "善化": "s", "大内": "d", "山上": "s", "台中": "t", "中区": "z", "西屯": "x", "南屯": "n", "大里": "d", "雾峰": "w", "乌日": "w", "丰原": "f", "后里": "h", "石冈": "s", "东势": "d", "新社": "x", "潭子": "t", "大雅": "d", "神冈": "s", "大肚": "d", "沙鹿": "s", "梧栖": "w", "大甲": "d", "外埔": "w", "南投": "n", "南投市": "n", "中寮": "z", "草屯": "c", "国姓": "g", "埔里": "b", "仁爱": "r", "名间": "m", "集集": "j", "水里": "s", "鱼池": "y", "鹿谷": "l", "基隆": "j", "安乐": "a", "暖暖": "n", "七堵": "q", "新竹市": "x", "香山": "x", "嘉义市": "j", "万里": "w", "板桥": "b", "汐止": "x", "深坑": "s", "石碇": "s", "瑞芳": "r", "平溪": "p", "双溪": "s", "贡寮": "g", "新店": "x", "坪林": "p", "乌来": "w", "中和": "z", "土城": "t", "三峡": "s", "树林": "s", "莺歌": "y", "三重": "s", "新庄": "x", "芦洲": "l", "五股": "w", "八里": "b", "淡水": "d", "三芝": "s", "宜兰": "y", "宜兰市": "y", "头城": "t", "礁溪": "j", "壮围": "z", "员山": "y", "罗东": "l", "三星": "s", "五结": "w", "冬山": "d", "苏澳": "s", "新竹县": "x", "竹北": "z", "新埔": "x", "关西": "g", "芎林": "x", "竹东": "z", "尖石": "j", "北埔": "b", "峨眉": "e", "桃园": "t", "中坜": "z", "平镇": "p", "杨梅": "y", "新屋": "x", "观音": "g", "桃园区": "t", "龟山": "g", "八德": "b", "大溪": "d", "大园": "d", "芦竹": "l", "苗栗": "m", "竹南": "z", "头份": "t", "三湾": "s", "南庄": "n", "狮潭": "s", "后龙": "h", "通霄": "t", "苑里": "y", "苗栗市": "m", "造桥": "z", "头屋": "t", "公馆": "g", "大湖": "d", "铜锣": "t", "三义": "s", "卓兰": "z", "彰化": "z", "彰化市": "z", "芬园": "f", "花坛": "h", "秀水": "x", "鹿港": "l", "福兴": "f", "线西": "x", "和美": "h", "伸港": "s", "员林": "y", "社头": "s", "埔心": "b", "大村": "d", "埔盐": "b", "田中": "t", "北斗": "b", "田尾": "t", "埤头": "p", "溪州": "x", "竹塘": "z", "二林": "e", "芳苑": "f", "二水": "e", "嘉义县": "j", "番路": "f", "梅山": "m", "竹崎": "z", "阿里山": "a", "中埔": "z", "水上": "s", "鹿草": "l", "太保": "t", "朴子": "p", "东石": "d", "六脚": "l", "新港": "x", "民雄": "m", "大林": "d", "溪口": "x", "义竹": "y", "布袋": "b", "云林": "y", "斗南": "d", "大埤": "d", "虎尾": "h", "土库": "t", "褒忠": "b", "台西": "t", "仑背": "l", "麦寮": "m", "斗六": "d", "林内": "l", "古坑": "g", "莿桐": "c", "西螺": "x", "二仑": "e", "北港": "b", "水林": "s", "口湖": "k", "四湖": "s", "元长": "y", "屏东": "p", "屏东市": "p", "三地门": "s", "雾台": "w", "玛家": "m", "九如": "j", "里港": "l", "高树": "g", "盐埔": "y", "麟洛": "l", "竹田": "z", "内埔": "n", "万丹": "w", "泰武": "t", "来义": "l", "万峦": "w", "崁顶": "k", "新埤": "x", "南州": "n", "林边": "l", "琉球": "l", "佳冬": "j", "新园": "x", "枋寮": "f", "枋山": "f", "春日": "c", "狮子": "s", "车城": "c", "恒春": "h", "满州": "m", "台东": "t", "台东市": "t", "绿岛": "l", "兰屿": "l", "卑南": "b", "鹿野": "l", "关山": "g", "海端": "h", "池上": "c", "成功": "c", "长滨": "c", "金峰": "j", "大武": "d", "达仁": "d", "太麻里": "t", "花莲": "h", "花莲市": "h", "秀林": "x", "寿丰": "s", "凤林": "f", "光复": "g", "丰滨": "f", "瑞穗": "r", "玉里": "y", "卓溪": "z", "富里": "f", "澎湖": "p", "马公": "m", "西屿": "x", "望安": "w", "七美": "q", "湖西": "h", "香港": "x", "澳门": "a", "国外": "g" };
module.exports = { prefix_pinyin: prefix_pinyin };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 解压拼音库。
// @param {Object} dict_combo, 压缩的拼音库。
// @param {Object} 解压的拼音库。
function buildPinyinCache(dict_combo){
  let hans;
  let uncomboed = {};

  for(let py in dict_combo){
    hans = dict_combo[py];
    for(let i = 0, han, l = hans.length; i < l; i++){
      han = hans.charCodeAt(i);
      if(!uncomboed.hasOwnProperty(han)){
        uncomboed[han] = py;
      }else{
        uncomboed[han] += "," + py;
      }
    }
  }

  return uncomboed;
}

const PINYIN_DICT = buildPinyinCache(__webpack_require__(86));
const Pinyin = __webpack_require__(87);
const pinyin = new Pinyin(PINYIN_DICT);

module.exports = pinyin.convert.bind(pinyin);
module.exports.compare = pinyin.compare.bind(pinyin);
module.exports.STYLE_NORMAL = Pinyin.STYLE_NORMAL;
module.exports.STYLE_TONE = Pinyin.STYLE_TONE;
module.exports.STYLE_TONE2 = Pinyin.STYLE_TONE2;
module.exports.STYLE_TO3NE = Pinyin.STYLE_TO3NE;
module.exports.STYLE_INITIALS = Pinyin.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = Pinyin.STYLE_FIRST_LETTER;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
"a":"",
"ā":"吖锕錒",
"á":"嗄",
"ǎ":"",
"à":"",
"āi":"哎哀埃娭溾嗳銰锿噯諰鎄",
"ái":"啀娾捱皑凒隑嵦溰嘊敱敳皚磑癌",
"ǎi":"毐昹娾欸絠嗳矮蔼躷噯濭藹譪霭靄",
"ài":"艾伌欬爱砹硋堨焥隘嗌嗳塧嫒愛碍叆暧瑷僾噯壒嬡懓薆鴱懝曖璦賹餲皧瞹馤礙譺鑀鱫靉",
"ān":"安侒峖桉氨偣庵菴谙啽媕萻葊痷腤裺鹌蓭誝鞍鞌盦諳馣鮟盫鵪韽鶕",
"án":"玵啽雸儑",
"ǎn":"垵俺唵埯铵揞晻罯銨",
"àn":"厈屵屽犴岸咹按洝荌案胺豻堓隌晻暗貋儑錌闇黯",
"āng":"肮骯",
"áng":"卬岇昂昻",
"ǎng":"",
"àng":"枊盎醠",
"āo":"泑柪眑梎軪熝爊",
"áo":"敖厫隞嗷嗸嶅廒慠滶獓蔜遨骜摮獒璈磝墽翱聱螯翶謷謸翺鳌鏕鏖鰲鷔鼇",
"ǎo":"艹抝芺袄眑郩镺媪媼襖",
"ào":"岙扷抝坳垇岰柪傲奡軪奧嫯嶅慠澚隩墺嶴懊擙澳鏊驁",
"ba":"罷",
"bā":"丷八仈巴叭朳玐夿岜扷芭峇柭疤哱哵捌笆粑羓蚆釟豝鲃魞",
"bá":"叐犮抜妭拔茇炦癹胈菝詙跋軷颰魃鼥",
"bǎ":"钯鈀靶",
"bà":"坝弝爸皅垻跁鲃魞鲅鲌罷鮁鮊覇矲霸壩灞欛",
"bāi":"挀掰擘",
"bái":"白",
"bǎi":"百佰栢瓸捭竡粨絔摆擺襬",
"bài":"呗庍拝败拜唄敗猈稗粺薭贁韛",
"bān":"扳攽朌肦班般颁斑搬斒頒搫瘢鳻螌褩癍辬",
"bǎn":"阪坂岅昄板版瓪钣粄舨鈑蝂魬闆",
"bàn":"办半伴扮坢姅怑绊柈秚湴絆跘鉡靽辦瓣",
"bāng":"邦垹帮捠梆浜邫幇幚縍幫鞤",
"bǎng":"绑綁牓膀髈",
"bàng":"玤挷蚄傍棒棓硥谤塝搒稖蒡蛖蜯镑縍艕謗鎊",
"bāo":"勹包佨孢苞枹胞剝笣煲龅裦蕔褒襃闁齙",
"báo":"窇雹",
"bǎo":"宝怉饱保鸨宲珤堢媬葆寚飹飽褓駂鳵緥鴇賲藵寳寶靌",
"bào":"勽犳报怉抱豹趵铇菢蚫袌報鉋鲍骲髱虣鮑儤曓嚗曝爆犦忁鑤",
"bei":"呗唄",
"bēi":"陂卑杯柸盃庳桮悲揹棓椑碑鹎箄諀鞞藣鵯",
"běi":"鉳",
"bèi":"贝孛狈貝邶备昁杮牬苝郥钡俻倍悖狽偝偹梖珼鄁備僃惫棑棓焙琲軰辈愂碚禙蓓蛽犕褙誖鞁骳輩鋇憊糒鞴鐾",
"bēn":"泍贲栟喯犇賁锛漰錛蟦",
"běn":"夲本苯奙畚翉楍",
"bèn":"坋坌泍炃倴捹桳渀笨逩撪",
"bēng":"伻祊奟崩絣閍嗙嵭痭嘣綳繃",
"béng":"甮甭",
"běng":"埄埲菶琣琫綳繃鞛",
"bèng":"泵迸堋逬揼跰塴綳甏镚繃蹦鏰",
"bī":"皀屄偪毴逼楅榌豍螕鵖鲾鎞鰏",
"bí":"荸鼻嬶",
"bǐ":"匕比夶朼佊吡妣沘疕纰彼毞肶柀秕俾娝笔粃紕舭啚崥筆鄙聛貏",
"bì":"币必毕闬闭佖坒庇芘诐邲咇妼怭怶畁畀肶苾哔柲毖珌畐疪祕胇荜贲陛毙狴畢笓粊袐铋婢敝旇梐紴翍萆萞閇閈閉堛弼弻愊愎湢皕禆筚詖貱賁赑嗶彃滗滭煏痺痹睤睥腷蓖蓽蜌裨跸鉍閟飶幣弊熚獙碧稫箅箆綼蔽鄪馝幤潷獘罼襅駜髲壁嬖廦篦篳縪薜觱避鮅斃濞蹕鞞髀奰璧鄨鎞鏎饆繴襣襞鞸韠魓躃躄驆鶝朇贔鐴鷝鷩鼊",
"biān":"辺边炞砭笾猵编萹煸牑甂箯糄編臱蝙鞕獱邉鍽鳊邊鞭鯾鯿籓籩",
"biǎn":"贬疺窆匾貶惼揙碥稨褊糄鴘藊覵鶣",
"biàn":"卞弁忭抃汳汴苄釆变峅玣変昪覍徧缏遍閞辡緶艑諚辧辨辩辫辮辯變",
"biāo":"灬杓标飑骉髟彪淲猋脿颩僄墂幖摽滮蔈颮骠標熛膔膘麃瘭磦镖飚飙儦檦篻颷瀌藨謤爂臕贆鏢穮镳飈飆飊飇鑣驫",
"biáo":"嫑",
"biǎo":"表婊裱諘褾錶檦",
"biào":"俵摽鳔",
"biē":"柭憋蟞癟鳖鱉鼈虌龞",
"bié":"別柲莂蛂徶襒蟞蹩",
"biě":"癟",
"biè":"別彆",
"bīn":"汃邠玢砏宾彬梹傧斌椕滨缤槟瑸豩賓賔镔儐濒頻濱濵虨豳檳璸瀕霦繽鑌顮",
"bǐn":"",
"bìn":"摈殡膑髩儐擯鬂殯臏髌鬓髕鬢",
"bīng":"冫仌仒氷冰兵幷栟掤梹蛃絣槟鋲檳",
"bǐng":"丙邴陃怲抦秉苪昞昺柄炳饼眪偋屛寎棅琕禀稟鈵鉼鞆餅餠鞞鞸",
"bìng":"並併幷枋垪庰倂栤病窉竝偋傡寎摒誁鮩靐",
"bo":"啵蔔噃",
"bō":"癶拨波癷玻剝哱盋砵趵钵饽紴缽菠袰溊碆鉢僠嶓撥播餑磻礡蹳皪驋鱍",
"bó":"仢彴肑驳帛狛瓝苩侼柭胉郣亳挬浡瓟秡袯钹铂桲淿脖舶萡袹博殕渤葧鹁愽搏猼鉑鈸馎鲌僰榑煿牔箔膊艊誖馛駁踣鋍镈壆馞駮鮊穛襏謈嚗懪簙鎛餺鵓糪髆髉欂襮礴鑮",
"bǒ":"癷蚾跛",
"bò":"孹擗擘檗檘譒蘗",
"bū":"峬庯逋钸晡鈽誧餔錻鯆鵏",
"bú":"鳪轐醭",
"bǔ":"卟补哺捕捬補鸔",
"bù":"布佈吥步咘怖抪歩歨柨钚勏埔埗悑捗荹部埠婄瓿鈈廍蔀箁踄郶篰餢",
"cā":"嚓擦攃",
"cǎ":"礤礸",
"cà":"遪囃",
"cāi":"偲猜",
"cái":"才扐材财財裁纔",
"cǎi":"毝倸啋埰婇寀彩採棌睬跴綵踩",
"cài":"埰寀菜蔡縩",
"cān":"參叄飡骖叅喰湌傪嬠餐爘驂囋",
"cán":"残蚕惭殘慚摲蝅慙蠺蠶",
"cǎn":"惨朁慘憯穇篸黪黲",
"càn":"灿孱傪粲嘇摻儏澯薒燦璨謲鏒",
"cāng":"仓仺伧沧苍玱鸧倉舱傖凔嵢滄獊蒼瑲濸篬艙螥鶬",
"cáng":"匨臧欌鑶",
"càng":"賶",
"cāo":"撡操糙",
"cáo":"曺曹傮嘈嶆慒漕蓸槽褿艚螬鏪",
"cǎo":"屮艸草愺慅懆騲",
"cào":"肏鄵襙鼜",
"cè":"夨冊册厕恻拺测荝敇畟側厠笧粣萗廁惻測策萴筞筴蓛箣憡簎",
"cēn":"參叄叅嵾穇篸",
"cén":"岑汵埁涔笒",
"cēng":"噌",
"céng":"层曽層嶒橧竲驓",
"cèng":"蹭",
"cī":"呰呲玼疵趀偨跐縒骴髊蠀齹",
"cí":"词珁兹垐柌祠茨瓷粢詞辝慈甆辞磁雌鹚糍辤飺餈嬨濨薋鴜礠辭鷀鶿",
"cǐ":"此佌泚玼皉啙跐鮆",
"cì":"朿次佽刾庛茦栨莿絘蛓赐螆賜",
"cōng":"匆囪囱苁忩枞茐怱悤棇焧葱楤漗聡蓯蔥骢暰樅樬潨熜瑽璁聦聪瞛篵聰蟌鍯繱鏓鏦騘驄",
"cóng":"丛徔従婃孮徖從悰淙琮碂慒漎潀潈誴賨賩樷錝藂叢灇欉爜",
"cǒng":"",
"còng":"愡憁謥",
"cōu":"",
"cóu":"",
"cǒu":"",
"còu":"凑湊傶楱腠辏輳",
"cū":"怚粗觕麁麄橻麆麤",
"cú":"徂殂",
"cǔ":"皻",
"cù":"促猝脨媨瘄蔟誎趗噈憱踧醋瘯踿簇縬趨鼀蹙蹵蹴顣",
"cuān":"汆撺鋑镩蹿攛躥鑹",
"cuán":"濽櫕巑攢灒欑穳",
"cuàn":"窜殩熶窽篡窾簒竄爨",
"cuī":"隹崔脺催凗嵟缞墔慛摧榱漼槯磪縗鏙",
"cuǐ":"漼熣璀趡皠",
"cuì":"伜忰疩倅粋紣翆脃脆啐啛崒悴淬萃椊毳焠琗瘁粹綷翠膵膬濢竁襊顇臎",
"cūn":"邨村皴踆澊竴膥",
"cún":"存侟拵壿澊",
"cǔn":"刌忖",
"cùn":"寸吋籿",
"cuō":"搓瑳遳磋蹉醝鎈",
"cuó":"虘嵯嵳痤睉矬蒫瘥蔖鹾酂鹺酇",
"cuǒ":"脞",
"cuò":"剉剒厝夎挫莡莝庴措逪锉蓌错縒諎銼錯",
"chā":"扠扱芆臿挿偛嗏插揷馇銟锸艖疀嚓鍤鎈餷",
"chá":"秅苴垞査茬茶捈梌嵖搽猹靫楂槎詧察摖檫",
"chǎ":"紁蹅镲鑔",
"chà":"仛奼汊岔侘衩诧剎姹紁詫",
"chāi":"芆肞钗釵",
"chái":"犲侪柴豺祡喍儕",
"chǎi":"茝",
"chài":"虿袃訍瘥蠆囆",
"chān":"辿觇梴搀覘裧摻緂鋓幨襜攙",
"chán":"苂婵谗單孱棎湹禅馋煘缠僝嶃嶄獑蝉誗鋋儃嬋廛潹潺緾澶磛禪毚螹蟐鄽瀍繟蟬儳劖繵蟾酁嚵壥巉瀺欃纏纒躔镵艬讒鑱饞",
"chǎn":"产刬旵丳斺浐剗谄啴產産铲阐蒇剷嵼摌滻嘽幝蕆諂閳骣燀簅冁繟醦譂鏟闡囅灛讇",
"chàn":"忏刬剗硟摲幝幨燀懴儳懺羼韂顫",
"chāng":"伥昌倀娼淐猖菖阊椙琩裮锠錩閶鲳闛鯧鼚",
"cháng":"仩仧兏肠苌镸長尝偿常徜瓺萇場甞腸嘗塲嫦瑺膓償嚐鲿鱨",
"chǎng":"昶惝場敞僘厰塲廠氅鋹",
"chàng":"怅玚畅鬯唱悵焻瑒暢畼誯韔",
"chāo":"抄弨怊欩钞訬焯超鈔勦摷綽劋樔窼",
"cháo":"牊晁巣巢鄛鼌漅樔潮窲罺鼂轈謿",
"chǎo":"炒眧粆焣煼槱麨巐",
"chào":"仦仯耖觘",
"chē":"伡車俥砗唓莗硨蛼",
"ché":"",
"chě":"扯偖撦奲",
"chè":"屮彻呫坼迠烢烲焎聅掣揊硩頙徹摰撤澈勶瞮爡",
"chen":"伧傖",
"chēn":"肜抻郴捵棽琛嗔綝瘨瞋諃賝謓",
"chén":"尘臣忱沉辰陈迧茞宸栕莀莐陳敐晨桭梣訦谌軙愖跈鈂煁蔯塵敶樄瘎霃螴諶薼麎曟鷐",
"chěn":"趻硶碜墋夦磣踸鍖贂醦",
"chèn":"衬爯疢龀偁趂趁榇稱齓齔儭嚫穪谶櫬襯讖",
"chēng":"朾阷泟柽爯凈棦浾琤偁淨碀蛏晿牚搶赪僜憆摚稱靗撐撑緽橖橕瞠赬頳檉竀罉鎗矃穪蟶鏿鐣饓鐺",
"chéng":"氶丞成朾呈承枨诚郕乗城埩娍宬峸洆荿埕挰晟浧珹掁珵窚脭铖堘惩揨棖椉程筬絾裎塍塖溗誠畻酲鋮憕撜澂橙檙鯎瀓懲騬",
"chěng":"侱徎悜逞骋庱睈裎騁",
"chèng":"秤牚稱竀穪",
"chi":"麶",
"chī":"吃妛哧彨胵蚩鸱瓻眵笞粚喫訵嗤媸摛痴絺樆噄殦瞝誺噭螭鴟鵄癡魑齝攡彲黐",
"chí":"弛池驰迟坻沶狋茌迡持柢竾荎俿歭耛菭蚳赿筂貾遅跢遟馳箈箎墀徲漦踟遲篪謘鍉邌鶗鶙",
"chǐ":"叺伬扡呎肔侈卶齿垑奓拸胣恥耻蚇袳豉欼歯袲裭誃鉹褫齒",
"chì":"彳叱斥佁杘灻赤饬侙抶勅恜柅炽勑捇眙翄翅敕烾啻湁飭傺痸腟誃鉓雴憏瘈翤遫銐慗慸瘛翨熾懘趩鶒鷘",
"chōng":"充忡沖茺浺珫翀舂嘃摏徸憃憧衝罿艟蹖",
"chóng":"虫崈崇痋隀漴褈緟蝩蟲爞",
"chǒng":"宠埫寵",
"chòng":"铳揰銃",
"chou":"鮘",
"chōu":"抽牰婤掫紬搊跾瘳篘醔犨犫",
"chóu":"怞俦诪帱栦惆梼畤紬绸菗椆畴絒愁皗稠筹裯詶酧酬綢踌儔雔嚋嬦幬懤盩薵檮燽雠疇籌躊醻讐讎雦",
"chǒu":"丒丑吜杽杻偢瞅醜矁魗",
"chòu":"臰遚殠",
"chu":"橻",
"chū":"出岀初榋摢摴樗貙櫖齣",
"chú":"刍除芻耝厨滁蒢豠锄媰耡蒭蜍趎鉏雏犓廚篨鋤橱幮櫉藸蟵躇雛櫥蹰鶵躕",
"chǔ":"処杵础椘處储楮禇楚褚濋儲檚璴礎齭齼",
"chù":"亍処竌怵泏绌豖欪炪竐俶敊埱珿絀菆傗鄐慉搐滀触閦儊嘼諔憷斶歜臅黜觸矗",
"chuā":"欻",
"chuǎ":"",
"chuà":"",
"chuāi":"搋",
"chuái":"膗",
"chuǎi":"",
"chuài":"啜欼膪踹",
"chuān":"巛川氚穿猭瑏",
"chuán":"舡舩剶船圌遄傳椯椽歂暷篅膞輲",
"chuǎn":"舛荈喘堾歂僢踳",
"chuàn":"汌串玔钏釧猭賗鶨",
"chuāng":"刅疮窓創窗牎摐牕瘡窻",
"chuáng":"床牀喠噇朣橦",
"chuǎng":"闯傸磢闖",
"chuàng":"怆刱剏剙創愴",
"chuī":"吹炊龡",
"chuí":"垂倕埀桘陲捶菙圌搥棰腄槌硾锤箠錘鎚顀",
"chuǐ":"",
"chuì":"惙",
"chūn":"芚旾杶春萅媋暙椿槆瑃箺蝽橁輴櫄鰆鶞",
"chún":"纯肫陙唇浱純莼脣湻犉滣蒓鹑漘蓴膞醇醕錞鯙鶉",
"chǔn":"朐偆萶惷睶賰蠢",
"chuō":"逴趠踔戳繛",
"chuò":"辶吷辵拺哾娖娕啜婥婼惙涰淖辍酫綽踀箹輟鋜龊擉磭餟繛歠鏃嚽齪鑡孎",
"da":"繨",
"dā":"咑哒耷笚嗒搭褡噠墶撘鎝鎉",
"dá":"达迏迖迚呾妲怛沓垯炟羍荅荙畗剳匒惮畣笪逹溚詚達跶靼憚薘鞑燵蟽鐽韃龖龘",
"dǎ":"",
"dà":"亣汏眔",
"dāi":"呆呔獃懛",
"dǎi":"歹逮傣",
"dài":"代诒轪侢垈岱帒甙绐迨带怠柋殆玳贷帯貣軑埭帶紿蚮袋軚逮釱棣詒貸軩瑇跢廗箉叇曃緿蝳駘鮘鴏戴艜黛簤蹛瀻霴襶黱靆",
"dān":"丹妉単眈砃耼耽郸聃躭酖單媅愖殚瘅匰箪褝鄲頕儋勯擔殫甔癉襌簞聸",
"dǎn":"伔刐抌玬瓭胆衴疸紞赕亶馾撢撣賧燀黕膽皽黵",
"dàn":"旦但帎呾沊泹狚诞唌柦疍訑啗啖惔惮淡萏蛋啿弾氮腅蜑觛亶瘅窞蓞誕僤噉馾髧儋嘾彈憚醈憺擔澹禫餤駳鴠癉膻癚嚪繵贉霮饏黮",
"dāng":"珰裆筜當儅噹澢璫襠簹艡蟷鐺闣",
"dǎng":"党谠當擋譡黨攩灙欓讜",
"dàng":"氹凼圵宕砀垱荡档偒菪婸崵愓瓽逿嵣當雼潒碭儅瞊蕩趤壋擋檔璗盪礑簜蘯闣",
"dāo":"刀刂忉朷氘舠釖鱽裯魛螩",
"dáo":"捯",
"dǎo":"导岛陦島捣祷禂搗隝嘄嶋嶌槝導隯壔嶹擣蹈檮禱",
"dào":"辺到帱悼梼焘盗菿椡盜絩道稲箌翢噵稻艔衜檤衟幬燾翿軇瓙纛",
"de":"旳",
"dē":"嘚",
"dé":"恴淂蚮悳惪棏锝徳德鍀",
"dēi":"嘚",
"děi":"",
"dèn":"扥扽",
"dēng":"灯登豋僜噔嬁燈璒竳簦艠蹬",
"děng":"等戥",
"dèng":"邓凳鄧隥墱嶝憕瞪磴镫櫈瀓覴鐙",
"dī":"氐仾低奃岻彽秪袛啲埞羝隄堤渧趆滴碮樀磾鞮鏑",
"dí":"扚廸旳狄肑籴苖迪唙敌浟涤荻啇梑笛觌靮滌蓧馰髢嘀嫡翟蔋蔐頔敵篴镝嚁藡豴蹢鏑糴覿鸐",
"dǐ":"氐厎坘诋邸阺呧坻弤抵拞枑柢牴砥掋菧觝詆軧楴聜骶鯳",
"dì":"坔旳杕玓怟枤苐俤哋埅帝埊娣逓递偙梊焍珶眱祶第菂谛釱媂揥棣渧睇缔蒂遆僀楴禘腣遞鉪墆墑墬嵽摕疐碲蔕蝃遰慸甋締蝭嶳諦諟踶螮",
"diǎ":"嗲",
"diān":"佔敁掂傎厧嵮滇槇槙瘨窴颠蹎巅顚顛癫巓攧巔癲齻",
"dián":"",
"diǎn":"典奌点婰敟椣跕碘蒧蕇踮點嚸",
"diàn":"电阽坫店垫扂玷痁钿婝惦淀奠琔殿痶蜔鈿電墊壂橂橝澱靛磹癜簟驔",
"diāo":"刁叼汈刟虭凋奝弴彫蛁椆琱貂碉鳭瞗錭雕鮉鲷簓鼦鯛鵰",
"diǎo":"扚屌鳥",
"diào":"弔伄吊钓盄窎訋掉釣铞铫絩鈟竨蓧誂銚銱雿魡調瘹窵鋽藋鑃",
"diē":"爹跌褺",
"dié":"佚怢泆苵迭咥垤峌恎挕昳柣绖胅瓞眣耊啑戜眰谍喋堞崼幉惵揲畳絰耋臷詄趃跕軼镻叠楪殜牃牒跮嵽碟蜨褋槢艓蝶疂諜蹀鴩螲鲽鞢曡疉鰈疊氎",
"diě":"",
"diè":"哋",
"dīng":"仃叮奵帄玎甼町疔盯耵虰酊釘靪",
"dǐng":"奵艼顶酊頂鼎嵿鼑濎薡鐤",
"dìng":"订忊饤矴定訂釘飣啶掟萣铤椗腚碇锭碠聢蝊鋌錠磸顁",
"diū":"丟丢铥颩銩",
"dōng":"东冬咚岽東苳昸氡倲鸫埬娻崬崠涷笗菄徚氭蝀鮗鼕鯟鶇鶫",
"dǒng":"揰董墥嬞懂箽蕫諌",
"dòng":"动冻侗垌姛峒恫挏栋洞狪胨迵凍戙烔胴動娻崠硐棟湩絧腖働勭燑駧霘",
"dōu":"吺枓侸唗兜兠蔸橷瞗篼",
"dóu":"唞",
"dǒu":"乧阧抖钭陡蚪鈄",
"dòu":"吋豆郖浢狵荳逗饾鬥梪毭渎脰酘痘閗窦鬦鋀餖斣瀆闘竇鬪鬬鬭",
"dū":"厾剢阇嘟督醏闍",
"dú":"独涜渎椟牍犊裻読獨錖凟匵嬻瀆櫝殰牘犢瓄皾騳黩讀豄贕韣髑鑟韇韥黷讟",
"dǔ":"竺笃堵暏琽赌睹覩賭篤",
"dù":"芏妒杜妬姤荰秺晵渡靯镀螙斁殬鍍蠧蠹",
"duān":"耑偳剬媏端褍鍴",
"duǎn":"短",
"duàn":"段断塅缎葮椴煅瑖腶碫锻緞毈簖鍛斷躖籪",
"duī":"垖堆塠痽磓镦鴭鐓鐜",
"duǐ":"啍頧",
"duì":"队对兊兌対杸祋怼陮敓敚隊碓綐對憞憝濧濻薱懟瀢瀩譈譵轛",
"dūn":"吨惇蜳墪墫墩撴獤噸撉橔犜礅蹾蹲驐",
"dǔn":"盹趸躉",
"dùn":"伅坉庉忳沌炖盾砘逇钝顿遁鈍楯頓碷遯憞潡燉踲",
"duo":"",
"duō":"夛多咄哆畓剟掇敠敪毲裰跢嚉",
"duó":"仛夺沰铎剫敓敚喥痥鈬奪凙踱鐸",
"duǒ":"朵朶哚垜挆埵崜缍袳椯硾趓躱躲綞亸軃鬌嚲奲",
"duò":"杕杝刴剁枤沲陊陏饳垜尮挆挅柁柂柮桗舵隋媠惰隓跢跥跺飿馱墮憜駄墯隳鵽",
"ē":"妸妿娿婀屙痾",
"é":"讹吪囮迗俄峉哦娥峩峨涐莪珴訛皒睋鈋锇鹅磀誐鋨頟额魤額鵞鵝譌",
"ě":"枙娿砨惡頋噁騀鵈",
"è":"厄戹歺岋阨呃扼苊阸呝枙砐轭咢咹垩姶洝砈匎敋蚅饿偔卾堊娾悪硆谔軛鄂阏堮堨崿惡愕湂萼豟軶遌遏鈪廅搕搤搹琧痷腭僫蝁锷鹗蕚遻頞颚餓噩擜覨諤閼餩鍔鳄歞顎礘櫮鰐鶚鰪讍齃鑩齶鱷",
"ēi":"诶欸誒",
"éi":"诶欸誒",
"ěi":"诶欸誒",
"èi":"诶欸誒",
"ēn":"奀恩蒽煾",
"ěn":"峎",
"èn":"摁",
"ēng":"鞥",
"ér":"儿而児杒侕兒陑峏洏耏荋栭胹唲梕袻鸸粫聏輀鲕隭髵鮞鴯轜",
"ěr":"尒尓尔耳迩洱饵栮毦珥铒衈爾鉺餌駬薾邇趰",
"èr":"二弍弐佴刵咡贰貮貳誀樲髶",
"fā":"冹沷発發彂醗醱",
"fá":"乏伐姂坺垡浌疺罚茷阀栰笩傠筏瞂罰閥墢罸橃藅",
"fǎ":"佱法峜砝鍅灋",
"fà":"珐琺髪蕟髮",
"fān":"帆忛犿拚畨勫噃嬏幡憣旙旛繙翻藩轓颿籓飜鱕",
"fán":"凢凣凡匥杋柉矾籵钒舤烦舧笲釩棥煩緐墦樊蕃燔璠膰薠襎羳蹯瀿礬蘩鐇鐢蠜鷭",
"fǎn":"反払仮返橎",
"fàn":"氾犯奿汎泛饭范贩畈訉軓婏桳梵盕笵販軬飰飯滼嬎範輽瀪",
"fāng":"匚方邡汸芳枋牥祊钫淓蚄堏趽鈁錺鴋",
"fáng":"防妨房肪埅鲂魴",
"fǎng":"仿访彷纺昉昘瓬眆倣旊眪紡舫訪髣鶭",
"fàng":"放趽",
"fēi":"飞妃非飛啡婓婔渄绯扉斐暃猆靟裶緋蜚霏鲱餥馡騑騛鯡飝",
"féi":"肥疿淝腓痱蜰",
"fěi":"朏胐匪诽奜悱斐棐榧翡蕜誹篚",
"fèi":"吠犻芾废杮柹沸狒肺胏昲胇费俷剕厞疿砩陫屝笰萉廃費痱镄廢曊橃橨癈鼣濷蟦櫠鐨靅",
"fēn":"吩帉纷芬昐氛玢砏竕衯紛翂梤棻訜躮酚鈖雰馚朆餴饙",
"fén":"坆坟妢岎汾朌枌炃羒蚠蚡棼焚蒶隫墳幩濆獖蕡魵鳻橨燌燓豮鼢羵鼖豶轒鐼馩黂",
"fěn":"粉黺",
"fèn":"坋弅奋忿秎偾愤粪僨憤獖瞓奮橨膹糞鲼瀵鱝",
"fēng":"丰仹凨凬夆妦沣沨凮枫炐封疯盽砜風埄峰峯莑偑桻烽琒堼崶渢猦葑锋楓犎蜂熢瘋碸僼篈鄷鋒檒豐鎽鏠酆寷灃蘴霻蠭靊飌麷",
"féng":"夆浲逢堸溄馮摓漨綘艂縫",
"fěng":"讽風覂唪諷",
"fèng":"凤奉俸桻湗焨煈赗鳯鳳鴌縫賵",
"fó":"仏仸坲梻",
"fōu":"",
"fóu":"紑",
"fǒu":"缶妚炰缹缻殕雬鴀",
"fū":"伕邞呋妋抙姇枎玞肤怤柎砆胕荂衭娐尃捊荴旉琈紨趺酜麸稃跗鈇筟綒鄜孵粰蓲敷膚鳺麩糐麬麱懯璷",
"fú":"乀巿弗払伏凫甶刜孚扶芣芙芾咈姇宓岪帗怫枎泭绂绋苻茀俘垘枹柫柭氟洑炥玸畉畐祓罘胕茯郛韨鳬哹垺栿浮畗砩莩蚨袚匐桴涪烰琈符笰紱紼翇艴菔虙袱幅棴絥罦葍福綍艀蜉辐鉘鉜颫鳧榑稪箁箙粰褔豧韍颰幞澓蝠髴鴔諨踾輻鮄癁襆鮲黻襥鵩纀鶝",
"fǔ":"阝呒抚甫乶府弣拊斧俌俛柎郙俯蚥釡釜捬脯辅椨焤盙腑滏蜅腐輔嘸撫頫鬴簠黼",
"fù":"讣付妇负附咐坿彿竎阜驸复峊柎洑祔訃負赴蚥袝偩冨婏婦捬紨蚹傅媍富復秿萯蛗覄詂赋椱缚腹鲋榑禣複褔赙緮蕧蝜蝮賦駙嬔縛輹鮒賻鍑鍢鳆覆馥鰒",
"gā":"旮伽夾嘎嘠",
"gá":"钆軋尜釓嘎嘠噶錷",
"gǎ":"尕玍朒嘎嘠",
"gà":"尬魀",
"gāi":"侅该郂陔垓姟峐荄晐赅畡祴絯隑該豥賅賌",
"gǎi":"忋改絠",
"gài":"丐乢匄匃杚钙摡溉葢鈣戤概槩蓋漑槪瓂",
"gān":"甘忓迀攼玕肝咁坩泔矸苷柑玵竿疳酐粓凲尲尴筸漧鳱尶尷魐",
"gǎn":"仠芉皯秆衦赶敢桿稈感澉趕橄擀澸篢簳鳡鱤",
"gàn":"佄旰汵盰绀倝凎淦紺詌骭幹榦檊簳贑赣贛灨",
"gāng":"冈冮刚纲肛岡牨疘矼缸剛罡堈崗掆釭棡犅堽摃碙綱罁鋼鎠",
"gǎng":"岗犺崗",
"gàng":"焵焹筻槓鋼戅戆戇",
"gāo":"皋羔羙高皐髙臯睪槔睾槹獋橰篙糕餻櫜韟鷎鼛鷱",
"gǎo":"夰杲菒稁搞缟槀槁稾稿镐縞藁檺藳鎬",
"gào":"吿告勂诰郜峼祮祰锆筶禞誥鋯",
"gē":"戈仡圪扢犵纥戓肐牫咯紇饹哥袼鸽割彁滒戨歌鴚擱謌鴿鎶",
"gé":"呄佮佫匌挌阁革敋格鬲愅猲臵蛒裓隔颌嗝塥滆觡搿槅膈閣閤獦镉鞈韐骼臈諽輵擱鮥鮯櫊鎑鎘韚轕鞷騔",
"gě":"個哿笴舸嘅嗰蓋鲄",
"gè":"亇吤茖虼個硌铬箇鉻",
"gěi":"給",
"gēn":"根跟",
"gén":"哏",
"gěn":"",
"gèn":"亙亘艮茛揯搄",
"gēng":"刯庚畊浭耕菮椩焿絙絚赓鹒緪縆羮賡羹鶊",
"gěng":"郠哽埂峺挭绠耿莄梗綆鲠骾鯁",
"gèng":"堩緪縆",
"gōng":"工弓公厷功攻杛侊糿糼肱宫紅宮恭躬龚匑塨幊愩觥躳慐匔碽篢髸觵龏龔",
"gǒng":"廾巩汞拱唝拲栱珙嗊輁澒銾鞏",
"gòng":"贡羾唝貢嗊愩慐熕",
"gōu":"佝沟芶钩痀袧缑鈎溝鉤緱褠篝簼鞲韝",
"gǒu":"芶岣狗苟枸玽耉耇笱耈蚼豿",
"gòu":"呴坸构诟购垢姤冓啂夠够傋訽媾彀搆詬遘雊構煹觏撀糓覯購",
"gū":"杚呱咕姑孤沽泒苽巭巬柧轱唃唂罛鸪笟菇菰蛄蓇觚軱軲辜酤稒鈲磆箍箛嫴篐橭鮕鴣",
"gú":"",
"gǔ":"夃古扢抇汩诂谷股牯罟羖逧钴傦啒淈脵蛊嗗尳愲詁馉毂賈鈷鼔鼓嘏榖皷鹘穀縎糓薣濲皼臌轂餶櫎瀔盬瞽鶻蠱",
"gù":"固怘故凅顾堌崓崮梏牿棝祻雇榾痼锢僱錮鲴鯝顧",
"guā":"瓜刮呱胍栝桰铦鸹歄煱颪趏劀緺銛諣踻銽颳鴰騧",
"guá":"",
"guǎ":"冎叧呙呱咼剐剮寡",
"guà":"卦坬诖挂啩掛罣袿絓罫褂詿",
"guāi":"乖",
"guái":"叏",
"guǎi":"拐枴柺罫箉",
"guài":"夬怪恠",
"guān":"关纶官矜覌倌矝莞涫棺蒄窤閞綸関瘝癏観闗鳏關鰥觀鱞",
"guǎn":"莞馆琯痯筦斡管輨璭舘錧館鳤",
"guàn":"卝毌丱贯泴覌悺惯掼淉貫悹祼慣摜潅遦樌盥罆雚観躀鏆灌爟瓘矔礶鹳罐觀鑵欟鱹鸛",
"guāng":"光灮炚炛炗咣垙姯挄洸茪桄烡珖胱硄僙輄潢銧黆",
"guǎng":"広犷廣獷臩",
"guàng":"俇桄逛臦撗",
"guī":"归圭妫规邽皈茥闺帰珪胿亀硅窐袿規媯廆椝瑰郌嫢摫閨鲑嬀嶲槣槻槼鳺璝瞡龜鮭巂歸雟鬶騩櫰櫷瓌蘬鬹",
"guǐ":"宄氿朹轨庋佹匦诡陒垝姽恑攱癸軌鬼庪祪軓匭晷湀蛫觤詭厬簋蟡",
"guì":"攰刿刽昋炅攱贵桂桧匮眭硊趹椢猤筀貴溎蓕跪匱瞆劊劌嶡撌槶螝樻檜瞶禬簂櫃癐襘鐀鳜鞼鑎鱖鱥",
"gǔn":"丨衮惃硍绲袞辊滚蓘裷滾緄蔉磙緷輥鲧鮌鯀",
"gùn":"睔謴",
"guo":"",
"guō":"呙咼咶埚郭啯堝崞渦猓楇聒鈛锅墎瘑嘓彉濄蝈鍋彍蟈懖矌",
"guó":"囗囯囶囻国圀敋喐國帼掴腘摑幗慖漍聝蔮膕虢簂馘",
"guǒ":"果惈淉菓馃椁褁槨粿綶蜾裹輠餜櫎",
"guò":"過腂鐹",
"hā":"虾紦铪鉿蝦",
"há":"",
"hǎ":"奤",
"hà":"",
"hāi":"咍嗨",
"hái":"郂孩骸還嚡",
"hǎi":"海胲烸塰酼醢",
"hài":"亥妎拸骇害氦猲絯嗐餀駭駴饚",
"han":"兯爳",
"hān":"犴佄顸哻蚶酣頇嫨谽憨馠魽歛鼾",
"hán":"邗含汵邯函肣凾虷唅圅娢浛笒崡晗梒涵焓琀寒嵅韩椷甝筨馯蜬澏鋡韓",
"hǎn":"丆罕浫喊豃闞",
"hàn":"仠厈汉屽忓扞闬攼旰旱肣唅垾悍捍涆猂莟晘焊菡釬閈皔睅傼蛿颔馯撖漢蔊蜭鳱暵熯輚銲鋎憾撼翰螒頷顄駻譀雗瀚鶾",
"hāng":"",
"háng":"邟妔苀迒斻杭垳绗桁笐航蚢颃裄貥筕絎頏魧",
"hàng":"忼沆笐",
"hāo":"茠蒿嚆薅薧",
"háo":"乚毜呺竓皋蚝毫椃嗥獆號貉噑獔豪嘷獋諕儫嚎壕濠籇蠔譹",
"hǎo":"郝",
"hào":"昊侴昦秏哠恏悎浩耗晧淏傐皓鄗滈滜聕號暠暤暭澔皜皞镐曍皡薃皥藃鎬颢灏顥鰝灝",
"hē":"诃抲欱訶嗬蠚",
"hé":"禾纥呙劾咊咼姀河郃峆曷柇狢盇籺紇阂饸敆盉盍荷釛啝涸渮盒菏萂龁喛惒粭訸颌楁毼澕蓋詥貈貉鉌阖鲄朅熆閡閤餄鹖麧噈頜篕翮螛魺礉闔鞨齕覈鶡皬鑉龢",
"hě":"",
"hè":"咊抲垎贺哬袔隺寉焃惒猲賀嗃煂碋熇褐赫鹤翯嚇壑癋謞燺爀鶮鶴靍靎鸖靏",
"hēi":"黒黑嗨潶",
"hén":"拫痕鞎",
"hěn":"佷哏很狠詪噷",
"hèn":"恨噷",
"hēng":"亨哼悙涥脝",
"héng":"姮恆恒桁烆珩胻鸻撗橫衡鴴鵆蘅鑅",
"hèng":"悙啈橫",
"hng":"哼",
"hōng":"叿吽呍灴轰訇烘軣揈渹焢硡谾薨輷嚝鍧巆轟",
"hóng":"厷仜弘叿妅屸吰宏汯玒瓨纮闳宖泓玜苰垬娂沗洪竑紅羾荭虹浤浲紘翃耾硔紭谹鸿渱溄竤粠葓葒鈜閎綋翝谼潂鉷鞃魟篊鋐彋霐黉霟鴻黌",
"hǒng":"唝晎嗊愩慐",
"hòng":"讧訌閧撔澒銾蕻闂鬨闀",
"hōu":"齁",
"hóu":"矦鄇喉帿猴葔瘊睺銗篌糇翭骺翵鍭餱鯸",
"hǒu":"吼吽犼呴",
"hòu":"后郈厚垕後洉矦茩逅候堠豞鲎鲘鮜鱟",
"hū":"乎乯匢虍芴呼垀忽昒曶泘苸恗烀芔轷匫唿惚淴虖軤雽嘑寣滹雐幠戯歑戱膴戲謼",
"hú":"囫抇弧狐瓳胡壶隺壷斛焀喖壺媩搰湖猢絗葫鹄楜煳瑚瓡嘝蔛鹕鹘槲箶縎蝴衚魱縠螜醐頶觳鍸餬礐鵠瀫鬍鰗鶘鶦鶻鶮",
"hǔ":"乕汻虎浒俿淲萀琥虝滸錿鯱",
"hù":"互弖戶戸户冱芐帍护沍沪岵怙戽昈曶枑姱怘祜笏粐婟扈瓠楛嗃嗀綔鄠雽嫭嫮摢滬蔰槴熩鳸濩簄豰鍙嚛鹱觷護鳠頀鱯鸌",
"huā":"吪芲花砉埖婲華椛硴蒊嘩糀誮錵蘤",
"huá":"呚姡骅華釪釫铧滑猾嘩搳撶劃磆蕐螖鋘譁鏵驊鷨",
"huà":"夻杹枠画话崋桦華婳畫嬅畵觟話劃摦樺嫿槬澅諙諣黊繣舙譮",
"huái":"怀佪徊淮槐褢踝懐褱懷瀤櫰耲蘹",
"huài":"咶壊壞蘾",
"huān":"欢犿狟貆歓鴅懁鵍酄嚾孉懽獾歡讙貛驩",
"huán":"环郇峘洹狟荁垸桓萈萑堚寏絙雈獂綄羦蒝貆锾瞏圜嬛寰澴缳還阛環豲鍰雚镮鹮糫繯鐶闤鬟瓛",
"huǎn":"睆缓緩",
"huàn":"幻奂肒奐宦唤换浣涣烉患梙焕逭喚喛嵈愌換渙痪煥瑍綄豢漶瘓槵鲩擐澣藧鯇攌嚾轘鯶鰀",
"huāng":"巟肓荒衁宺朚塃慌",
"huáng":"皇偟凰隍黄喤堭媓崲徨惶揘湟葟遑黃楻煌瑝墴潢獚锽熿璜篁艎蝗癀磺穔諻簧蟥鍠餭鳇趪韹鐄騜鰉鱑鷬",
"huǎng":"汻怳恍炾宺晄奛谎幌詤熀熿縨謊兤櫎爌",
"huàng":"愰滉榥曂皝鎤皩",
"hui":"",
"huī":"灰灳诙咴恢拻挥洃虺袆晖烣珲豗婎媈揮翚辉隓暉椲楎煇琿睢禈詼墮幑睳褘噅噕撝翬輝麾徽隳瀈蘳孈鰴",
"huí":"囘回囬佪廻廽恛洄茴迴烠蚘逥痐缋蛕蛔蜖藱鮰繢",
"huǐ":"虺悔烠毀毁螝毇檓燬譭",
"huì":"卉屷屶汇讳泋哕浍绘芔荟诲恚恵桧烩贿彗晦秽喙廆惠湏絵缋翙阓匯彚彙會滙詯賄颒僡嘒瘣蔧誨銊圚寭慧憓暳槥潓潰蕙噦嬒徻橞殨澮濊獩璤薈薉諱頮檅檜燴璯篲藱餯嚖懳瞺穢繢蟪櫘繪翽譓儶鏸闠鐬靧譿顪",
"hūn":"昏昬荤婚惛涽焄阍棔殙湣葷睧睯蔒閽轋",
"hún":"忶浑珲馄渾湷琿魂餛鼲",
"hǔn":"",
"hùn":"诨俒眃倱圂婫掍焝溷尡慁睴觨諢",
"huō":"吙秴耠劐攉騞",
"huó":"佸姡活秮秳趏",
"huǒ":"灬火伙邩钬鈥漷煷夥",
"huò":"沎或货咟俰捇眓获閄剨喐掝祸貨惑旤湱禍漷窢蒦锪嚄奯擭濊濩獲篧鍃霍檴謋雘矆礊穫镬嚯彟瀖耯艧藿蠖嚿曤臛癨矐鑊韄靃彠",
"jī":"丌讥击刉叽饥乩刏圾机玑肌芨矶鸡枅苙咭剞唧姬屐积笄飢基庴喞嵆嵇幾攲敧朞犄筓缉赍嗘畸稘跻鳮僟毄箕綨緁銈嘰撃槣樭畿緝觭諅賫踑躸齑墼撽機激璣禨積錤隮懠擊磯簊羁賷櫅耭雞譏韲鶏譤鐖饑癪躋鞿魕鶺鷄羇虀鑇覉鑙齏羈鸄覊",
"jí":"乁亽亼及尐伋吉岌彶忣汲级即极皀亟佶诘郆卽叝姞急皍笈級堲揤疾觙偮卙唶楖淁焏谻戢棘極殛湒集塉嫉愱楫蒺蝍趌辑槉耤膌銡嶯潗濈瘠箿蕀蕺諔趞踖鞊鹡檝螏輯磼簎藉襋蹐鍓艥籍轚鏶霵齎躤雧",
"jǐ":"己丮妀屰犱泲虮挤脊掎済鱾幾戟給嵴麂魢撠憿橶擠濟穖蟣",
"jì":"彐彑旡计记伎坖妓忌技汥芰际剂季哜垍既洎紀茍茤荠計迹剤畟紒继觊記偈寄寂帺徛悸旣梞済绩塈惎臮葪蔇兾勣痵継蓟裚跡際鬾魝摖暨漃漈禝稩穊誋跽霁魥鲚暩瞉稷諅鲫冀劑曁禨穄薊襀髻嚌懠檕濟穖績繋罽薺覬鮆檵櫅櫭璾蹟鯽鵋齌廭懻癠穧繫蘎骥鯚瀱繼蘮鱀蘻霽鰶鰿鷑鱭驥",
"jia":"",
"jiā":"加乫伽夾宊抸佳拁泇徍枷毠浃珈哿埉挾浹痂梜笳耞袈傢猳葭跏椵犌腵鉫嘉擖镓糘豭貑鴐鎵麚",
"jiá":"圿夾忦扴郏拮荚郟唊恝莢戛脥袷铗戞猰蛱裌颉颊蛺鋏頬頰鴶鵊",
"jiǎ":"甲岬叚玾胛斚钾婽徦斝椵賈鉀榎槚瘕檟",
"jià":"驾架嫁幏賈榢價稼駕",
"jiān":"戋奸尖幵坚歼冿戔玪肩艰姧姦兼堅帴惤猏笺菅菺豜傔揃湔牋犍缄葌閒間雃靬搛椷椾煎瑊睷碊缣蒹豣漸監箋蔪樫熞稴緘蕑蕳鋑鲣鳽鹣熸篯縑鋻艱鞬餰馢麉瀐濺鞯鳒鵑殱礛籈鵳攕瀸鰔櫼殲譼鰜鶼礷籛韀鰹囏虃鑯韉",
"jiǎn":"囝拣枧俭柬茧倹挸捡笕减剪帴揵梘检湕趼堿揀揃検減睑硷裥詃锏弿暕瑐筧简絸谫彅戩戬碱儉翦鋄撿橏篯檢藆襇襉謇蹇瞼礆簡繭謭鎫鬋鰎鹸瀽蠒鐗鐧鹻籛譾襺鹼",
"jiàn":"件見侟建饯剑洊牮荐贱俴健剣栫涧珔舰剱徤揵袸谏釰釼寋旔朁楗毽腱臶跈践閒間賎鉴键僣僭榗槛漸監劎劍墹澗箭糋諓賤趝踐踺劒劔薦諫鋻鍵餞瞷瞯磵礀螹鍳鞬擶檻濺繝瀳覵覸譛鏩聻艦轞鐱鑒鑑鑬鑳",
"jiāng":"江姜茳畕豇將葁畺摪翞僵漿螀壃缰薑橿殭螿鳉疅礓繮韁鱂",
"jiǎng":"讲奖桨傋塂蒋奨奬蔣槳獎耩膙講顜",
"jiàng":"匞匠夅弜洚绛將弶強絳畺酱勥滰嵹摾漿彊犟糡醤糨醬櫤謽",
"jiāo":"艽交郊姣娇峧浇茮茭骄胶敎喬椒焦蛟跤僬嘐虠鲛嬌嶕嶣憍憢澆膠蕉燋膲礁穚鮫鵁鹪簥蟭轇鐎驕鷦鷮",
"jiáo":"矯",
"jiǎo":"臫佼恔挢狡绞饺捁晈烄笅皎脚釥铰搅湫筊絞勦敫湬煍腳賋僥摎摷暞踋鉸餃儌劋徺撟撹樔徼憿敽敿燞曒璬矯皦蟜繳譑孂纐攪灚鱎龣",
"jiào":"叫呌峤挍訆悎珓窌笅轿较敎斍覐窖筊覚滘較嘂嘄嘦斠漖酵噍嶠潐噭嬓徼獥癄藠趭轎醮灂覺譥皭釂",
"jie":"價",
"jiē":"阶疖哜皆袓接掲痎秸菨階喈喼嗟堦媘嫅椄湝結脻街裓楬煯瑎稭鞂擑蝔嚌癤謯鶛",
"jié":"卩卪孑尐讦扢刧刦劫岊昅杢刼劼杰疌衱诘拮洁狤迼倢桀桔桝洯紒莭訐偈偼啑婕崨捷掶袷袺傑媫嵑結絜蛣颉嵥搩楶滐睫節蜐詰趌跲鉣截榤碣竭蓵鲒嶱潔羯誱踕镼鞊頡幯擳嶻擮礍鍻鮚巀蠞蠘蠽",
"jiě":"姐毑媎觧飷檞",
"jiè":"丯介吤妎岕庎戒屆届斺玠畍界疥砎衸诫借悈紒蚧唶徣堺楐琾蛶觧骱犗耤誡褯魪嶰藉鎅鶡",
"jīn":"巾今仐斤钅竻釒金津矜砛荕衿觔埐珒矝紟惍琎菳堻琻筋釿璡鹶黅襟",
"jǐn":"侭卺巹紧堇婜菫僅厪谨锦嫤廑慬漌緊蓳馑槿瑾儘錦謹饉",
"jìn":"伒劤妗近进枃勁浕荩晉晋浸烬笒紟赆唫祲進煡臸僅寖搢溍缙靳墐嫤慬榗瑨盡馸僸凚歏殣觐噤嬐濅縉賮嚍壗嬧濜藎燼璶覲贐齽",
"jīng":"坕坙巠京泾经茎亰秔荊荆涇粇婛惊旍旌猄経菁晶稉腈葏睛粳經兢箐精綡聙鋞橸鲸鯨鶁鶄麖鼱驚麠",
"jǐng":"井丼阱刭坓宑汫汬肼剄穽殌儆頚幜憬擏澋璄憼暻璟璥頸蟼警",
"jìng":"劤妌弪径迳俓勁婙浄胫倞凈弳徑痉竞莖逕婧桱梷殑淨竟竫脛敬痙竧靓傹靖境獍誩踁静靚憼曔镜靜瀞鵛鏡競竸",
"jiōng":"冂冋坰扃埛扄浻絅銄駉駫蘏蘔",
"jiǒng":"冏囧泂炅迥侰炯逈浻烱絅煚窘颎綗臦僒煛熲澃褧燛顈臩",
"jiòng":"",
"jiū":"丩勼纠朻牞究糺鸠糾赳阄萛啾揂揪剹揫鳩摎稵樛鬏鬮",
"jiú":"",
"jiǔ":"九乆久乣氿奺汣杦灸玖糺舏韭紤酒镹韮",
"jiù":"匛旧臼咎疚柩柾倃捄桕匓厩救就廄廐舅僦廏慦殧舊鹫匶鯦麔欍齨鷲",
"jū":"凥伡抅車匊居岨泃狙苴驹俥毩疽眗砠罝陱娵婮崌掬梮涺揟椐毱琚腒趄跔跙锔裾雎艍蜛諊踘躹鋦駒據鋸鮈鴡檋鞠鞫鶋",
"jú":"局泦侷狊挶桔啹婅淗焗菊郹椈湨犑輂僪粷蓻跼閰趜鋦橘駶繘鵙蹫鵴巈蘜鶪鼰鼳驧",
"jǔ":"咀岨弆举枸矩莒挙椇筥榉榘蒟龃聥舉踽擧櫸齟欅襷",
"jù":"巨乬巪讵姖岠怇拒洰苣邭具怐怚拠昛歫炬珇秬钜俱倨倶剧烥粔耟蚷袓埧埾惧詎距焣犋跙鉅飓蒩虡豦锯寠愳窭聚駏劇勮屦踞鮔壉懅據澽窶螶遽鋸屨颶瞿貗簴躆醵忂懼鐻",
"juān":"姢勌娟捐涓朘梋焆瓹脧圏裐鹃勬鋑鋗镌鞙鎸鐫蠲",
"juǎn":"呟巻帣埍捲菤锩臇錈闂",
"juàn":"奆劵奍巻帣弮倦勌悁桊狷绢隽婘惓淃瓹眷鄄圏棬椦睊絭罥腃雋睠絹飬慻蔨嶲鋗餋獧縳巂羂讂",
"juē":"噘撅撧屩屫",
"jué":"亅孒孓决刔氒诀吷妜弡抉決芵叕泬玨玦挗珏疦砄绝虳埆捔欮蚗袦崫崛掘斍桷覐觖訣赽趹傕厥焳矞絕絶覚趉鈌劂瑴谲駃噊嶡嶥憰撅熦爴獗瘚蕝蕨觮鴂鴃噱壆憠橜橛燋璚爵臄镢櫭繘蟨蟩爑譎蹷蹶髉匷矍覺鐍鐝鳜灍爝觼穱彏戄攫玃鷢矡貜躩钁",
"juě":"蹶",
"juè":"誳",
"jūn":"军君均汮姰袀軍钧莙蚐桾皲鈞碅筠皸皹覠銁銞鲪頵麇龜鍕鮶麏麕",
"jǔn":"",
"jùn":"呁俊郡陖埈峻捃浚隽馂骏晙焌珺棞畯竣葰雋儁箘箟蜠賐寯懏餕燇濬駿鵘鵔鵕攈攟",
"kā":"喀",
"kǎ":"佧咔咯垰胩裃鉲",
"kāi":"开奒揩锎開鐦",
"kǎi":"凯剀垲恺闿豈铠凱剴嘅慨蒈塏嵦愷輆暟锴鍇鎧闓颽",
"kài":"忾炌欯欬烗勓愒愾濭鎎",
"kān":"刊栞勘龛堪嵁戡龕",
"kǎn":"凵冚坎扻侃砍莰偘埳惂欿歁槛輡檻顑竷轗",
"kàn":"衎崁墈阚瞰磡闞竷鬫矙",
"kāng":"忼闶砊粇康閌嫝嵻慷漮槺穅糠躿鏮鱇",
"káng":"",
"kǎng":"",
"kàng":"亢伉匟邟囥抗犺闶炕钪鈧閌",
"kāo":"尻嵪髛",
"kǎo":"丂攷考拷洘栲烤薧",
"kào":"洘铐犒銬鲓靠鮳鯌",
"kē":"匼柯牁牱珂科轲疴砢趷钶蚵铪嵙棵痾萪軻颏嗑搕犐稞窠鈳榼薖鉿颗樖瞌磕蝌頦窼醘顆髁礚",
"ké":"殻揢殼翗",
"kě":"岢炣渇嵑敤渴軻閜磆嶱",
"kè":"克刻剋勀勊客峇恪娔尅悈袔课堁氪骒愘硞缂衉嗑愙歁溘锞碦緙艐課濭錁礊騍",
"kēi":"剋尅",
"kēn":"",
"kěn":"肎肯肻垦恳啃龂豤貇龈墾錹懇",
"kèn":"珢掯硍裉褃",
"kēng":"劥阬坈坑妔挳硁殸牼揁硜铿硻摼誙銵鍞鏗",
"kěng":"硻",
"kōng":"倥埪崆悾涳椌硿箜躻錓鵼",
"kǒng":"孔倥恐悾",
"kòng":"矼控羫鞚",
"kōu":"抠芤眍眗剾彄摳瞘",
"kǒu":"口劶竘",
"kòu":"叩扣佝怐敂冦宼寇釦窛筘滱蔲蔻瞉簆鷇",
"kū":"扝刳矻郀朏枯胐哭桍秙窋堀圐跍窟骷鮬",
"kú":"",
"kǔ":"狜苦楛",
"kù":"库俈绔庫捁秙焅袴喾硞絝裤瘔酷廤褲嚳",
"kuā":"咵姱恗晇絓舿誇",
"kuǎ":"侉垮楇銙",
"kuà":"胯趶誇跨骻",
"kuǎi":"蒯擓",
"kuài":"巜凷圦块快侩郐哙浍狯脍欳塊蒉會筷駃鲙儈墤鄶噲廥澮獪璯膾旝糩鱠",
"kuān":"宽寛寬臗髋鑧髖",
"kuǎn":"梡欵款歀窽窾",
"kuàn":"",
"kuāng":"匡迋劻诓邼匩哐恇洭硄筐筺誆軭",
"kuáng":"忹抂狅狂诳軖軠誑鵟",
"kuǎng":"夼儣懭",
"kuàng":"卝丱邝圹纩况旷岲況矿昿贶框眖砿眶絋絖貺軦鉱鋛鄺壙黋懬曠爌矌礦穬纊鑛",
"kuī":"亏刲岿悝盔窥聧窺虧顝闚巋",
"kuí":"奎晆逵鄈隗馗喹揆葵骙戣暌楏楑魁睽蝰頯櫆藈鍨鍷騤夔蘷巙虁犪躨",
"kuǐ":"尯煃跬頍磈蹞",
"kuì":"尯胿匮喟媿愧愦蒉馈匱瞆嘳嬇憒潰篑聭聩蕢殨膭謉瞶餽簣聵籄饋",
"kūn":"坤昆堃堒婫崑崐晜猑菎裈焜琨髠裩貇锟髡鹍潉蜫褌髨熴瑻醌錕鲲騉鯤鵾鶤",
"kǔn":"悃捆阃壸梱祵硱稇裍壼稛綑閫閸",
"kùn":"困涃睏",
"kuò":"扩拡挄适秮秳铦筈萿葀蛞阔廓漷銛噋銽頢髺擴濶闊鞟韕霩鞹鬠",
"la":"鞡",
"lā":"垃柆砬菈搚磖邋",
"lá":"旯剌砬揦磖嚹",
"lǎ":"喇藞",
"là":"剌翋揦溂揧楋瘌蜡蝋辢辣蝲臈擸攋爉臘鬎櫴瓎镴鯻蠟鑞",
"lái":"来來俫倈崃徕涞莱郲婡崍庲徠梾淶猍萊逨棶琜筙铼箂錸騋鯠鶆麳",
"lǎi":"襰",
"lài":"疠娕徕唻婡徠赉睐睞赖誺賚濑賴頼癘顂癞鵣攋瀨瀬籁藾櫴癩籟",
"lán":"兰岚拦栏啉婪惏嵐葻阑暕蓝谰厱澜褴儖斓篮懢燣燷藍襕镧闌璼幱襤譋攔瀾灆籃繿蘫蘭斕欄襴囒灡籣欗讕躝襽鑭韊",
"lǎn":"览浨揽缆榄漤罱醂壈懒覧擥嬾懶孄覽孏攬灠欖爦顲纜",
"làn":"坔烂滥燗嚂壏濫爁爛瓓爤爦糷钄",
"lāng":"啷",
"láng":"勆郞哴欴狼嫏廊斏桹琅蓈榔瑯硠稂锒筤艆蜋郒樃螂躴鋃鎯駺",
"lǎng":"崀朗朖烺塱蓢誏朤",
"làng":"埌浪莨阆筤蒗誏閬",
"lāo":"捞粩撈",
"láo":"労劳牢窂哰崂浶勞痨铹僗嘮嶗憦憥朥癆磱簩蟧醪鐒顟髝",
"lǎo":"耂老佬咾恅狫荖栳珯硓铑蛯銠鮱轑",
"lào":"涝絡嗠耢酪嫪嘮憦樂澇躼橯耮軂",
"le":"饹",
"lē":"嘞",
"lè":"仂阞叻忇扐氻艻牞玏泐竻砳楽韷餎樂簕鳓鰳鱳",
"lei":"嘞",
"lēi":"",
"léi":"絫雷嫘缧蔂樏畾磥檑縲攂礌镭櫑瓃羸礧纍罍蘲鐳轠儽鑘靁虆鱩欙纝鼺",
"lěi":"厽耒诔垒洡塁絫傫誄瘣樏磊蕌磥蕾儡壘癗礌藟櫑櫐矋礨礧灅蠝蘽讄壨鑸鸓",
"lèi":"泪洡类涙淚祱絫酹銇頛頪錑攂颣類礧纇蘱禷",
"lēng":"稜",
"léng":"唥崚塄楞碐稜薐",
"lěng":"冷",
"lèng":"倰堎愣睖踜",
"li":"",
"lī":"",
"lí":"刕杝厘柂剓狸离荲骊悡梨梸犁琍菞喱棃犂鹂剺漓睝筣缡艃蓠嫠孷樆璃盠竰貍犛糎蔾褵鋫鲡黎篱縭罹錅蟍謧醨嚟藜邌釐離鯏斄瓈蟸鏫鯬鵹麗黧囄灕蘺蠫孋廲劙鑗穲籬纚驪鱺鸝",
"lǐ":"礼李里俚峛峢娌峲悝浬逦理裡锂粴裏豊鋰鲤澧禮鯉醴蠡鳢邐鱧欚纚鱱",
"lì":"力历厉屴扐立吏扚朸利励叓呖坜杝沥苈例叕岦戾枥沴沵疠苙迣俐俪栃栎疬砅茘荔赲轹郦唎娳悧栛栗浰涖猁珕砬砺砾秝莉莅鬲唳婯悷笠粒粝脷蚸蛎傈凓厤棙痢蛠詈跞雳厯塛慄搮溧睙蒞蒚蜊鉝鳨厲暦歴瑮綟蜧銐蝷镉勵曆歷篥隷鴗巁檪濿癘磿隸鬁儮擽曞櫔爄犡禲蠇鎘嚦壢攊櫟瀝瓅礪藶麗櫪爏瓑皪盭礫糲蠣儷癧礰纅酈鷅麜囇孋攦觻躒轢欐讈轣攭瓥靂靋",
"liǎ":"俩倆",
"lián":"奁连帘怜涟莲連梿联裢亷嗹廉慩溓漣蓮匲奩槏槤熑覝劆匳噒嫾憐磏聨聫褳鲢濂濓縺翴聮薕螊櫣燫聯臁謰蹥檶鎌镰瀮簾蠊鬑鐮鰱籢籨",
"liǎn":"莶敛梿琏脸裣慩摙溓槤璉蔹嬚薟斂櫣歛臉鄻襝羷蘞蘝醶",
"liàn":"练炼恋殓僆堜媡湅萰链摙楝煉瑓潋稴練澰錬殮鍊鏈瀲鰊戀纞",
"liāng":"",
"liáng":"良俍莨梁涼椋辌粱粮墚踉樑輬駺糧",
"liǎng":"両两兩俩倆唡啢掚脼裲緉蜽魉魎",
"liàng":"亮倞哴悢谅涼辆喨晾湸靓輌踉諒輛鍄",
"liāo":"蹽",
"liáo":"辽疗窌聊尞僚寥嵺憀摎漻膋嘹嫽寮嶚嶛憭敹樛獠缭遼暸橑璙膫療竂鹩屪廫簝繚藔蟟蟧豂賿蹘爎爒飂髎飉鷯",
"liǎo":"钌釕鄝缪蓼憭繆曢爎镽爒",
"liào":"尥尦钌炓料釕廖撂窷镣鐐",
"lie":"",
"liē":"",
"lié":"",
"liě":"忚毟挘",
"liè":"列劣劦冽劽姴挒洌茢迾哷埓埒栵浖烈烮捩猎猟脟棙蛚煭聗趔綟巤獦颲燤儠巁鮤鴷擸爄獵爉犣躐鬛鬣鱲",
"līn":"拎",
"lín":"厸邻阾林临冧啉崊惏晽琳粦碄箖粼綝鄰隣嶙潾獜遴斴暽燐璘辚霖疄瞵磷臨繗翷麐轔壣瀶鏻鳞驎鱗麟",
"lǐn":"菻亃僯箖凜凛撛廩廪懍懔澟檁檩癝癛",
"lìn":"吝恡悋赁焛亃痳賃蔺獜橉甐膦閵疄藺蹸躏躙躪轥",
"líng":"伶刢灵呤囹坽夌姈岺彾泠狑苓昤朎柃玲瓴〇凌皊砱秢竛羐袊铃陵鸰婈崚掕棂淩琌笭紷绫羚翎聆舲菱蛉衑祾詅跉軨稜蓤裬鈴閝零龄綾蔆輘霊駖澪蕶錂霗魿鲮鴒鹷燯霝霛齢酃鯪孁齡櫺醽靈欞爧麢龗",
"lǐng":"岺袊领領嶺",
"lìng":"另炩蘦",
"liū":"熘澑蹓",
"liú":"刘畄斿浏流留旈琉畱硫裗媹嵧旒蒥蓅骝摎榴漻瑠飗劉瑬瘤磂镏駠鹠橊璢疁镠癅蟉駵嚠懰瀏藰鎏鎦麍鏐飀鐂騮飅鰡鶹驑",
"liǔ":"柳栁桞珋桺绺锍綹熮罶鋶橮嬼懰羀藰",
"liù":"窌翏塯廇遛澑磂磟鹨鎦霤餾雡飂鬸鷚",
"lo":"咯",
"lóng":"龙屸尨咙泷茏昽栊珑胧眬砻竜聋隆湰滝嶐槞漋癃窿篭龍儱蘢鏧霳嚨巃巄瀧曨朧櫳爖瓏襱矓礲礱蠬蠪龓龒籠聾豅躘靇鑨驡鸗",
"lǒng":"陇垅垄拢篢篭龍隴儱徿壟壠攏竉龓籠躘",
"lòng":"哢梇硦儱徿贚",
"lou":"喽嘍瞜",
"lōu":"摟",
"lóu":"剅娄偻婁喽溇蒌僂楼嘍寠廔慺漊蔞遱樓熡耧蝼瞜耬艛螻謱貗軁髅鞻髏鷜",
"lǒu":"嵝塿嶁摟甊篓簍",
"lòu":"陋屚漏瘘镂瘻瘺鏤",
"lū":"噜撸謢嚕擼",
"lú":"卢庐芦垆枦泸炉栌胪轳舮鸬玈舻颅鈩鲈馿魲盧嚧壚廬攎瀘獹璷蘆曥櫨爐瓐臚矑籚纑罏艫蠦轤鑪顱髗鱸鸕黸",
"lǔ":"卤虏掳鹵硵鲁虜塷滷蓾樐澛魯擄橹氇磠穞镥瀂櫓氌艣鏀艪鐪鑥",
"lù":"圥甪陆侓坴彔录峍勎赂辂陸娽淕淥渌硉菉逯鹿椂琭祿禄僇剹勠盝睩稑賂路輅塶廘摝漉箓粶緑蓼蔍戮樚熝膔趢踛辘醁潞穋蕗錄錴録璐簏螰鴼簶蹗轆騄鹭簬簵鏕鯥鵦鵱麓鏴騼籙觻虂鷺",
"luán":"娈孪峦挛栾鸾脔滦銮鵉圝奱孌孿巒攣曫欒灓羉臡臠圞灤虊鑾癴癵鸞",
"luǎn":"卵覶",
"luàn":"乱釠乿亂薍灓",
"lūn":"掄",
"lún":"仑伦囵沦纶芲侖轮倫陯圇婨崘崙掄淪菕棆腀碖綸耣蜦論踚輪磮錀鯩",
"lǔn":"埨惀碖稐耣",
"lùn":"惀溣碖論",
"luo":"囉囖",
"luō":"捋頱囉囖",
"luó":"寽罗猡脶萝逻椤腡锣箩骡镙螺攎羅覶鏍儸覼騾囉攞玀蘿邏欏驘鸁籮鑼饠囖",
"luǒ":"剆倮砢捰蓏裸躶瘰蠃臝曪攭癳",
"luò":"泺咯峈洛荦骆洜珞捰渃硌硦笿絡蛒跞詻摞漯犖雒駱磱鮥鵅擽濼攊皪躒纙",
"lǘ":"驴闾榈閭氀膢瞜櫚藘驢",
"lǚ":"吕呂侣郘侶挔捛捋旅梠焒祣偻稆铝屡絽缕僂屢慺膂褛鋁履膐褸儢縷穭鷜",
"lǜ":"垏律哷虑嵂氯葎滤綠緑慮箻膟勴繂濾櫖爈卛鑢",
"lüè":"寽掠畧略锊稤圙鋢鋝",
"ma":"嗎嘛麽",
"mā":"亇妈孖庅媽嫲榪螞",
"má":"菻麻嗎痲痳嘛嫲蔴犘蟇",
"mǎ":"马犸杩玛码馬嗎溤獁遤瑪碼螞鎷鰢鷌",
"mà":"杩祃閁骂傌睰嘜榪禡罵螞駡鬕",
"mái":"薶霾",
"mǎi":"买荬買嘪蕒鷶",
"mài":"劢迈佅売麦卖唛脈麥衇勱賣邁霡霢",
"mān":"颟顢",
"mán":"姏悗蛮絻谩慲摱馒樠瞞鞔謾饅鳗鬘鬗鰻矕蠻",
"mǎn":"娨屘満满滿螨襔蟎鏋矕",
"màn":"曼僈鄤墁嫚幔慢摱漫獌缦蔄槾澫熳澷镘縵鏝蘰",
"māng":"牤",
"máng":"邙吂忙汒芒尨杗杧盲盳厖恾笀茫哤娏庬浝狵朚牻硭釯铓痝蛖鋩駹蘉",
"mǎng":"莽莾硥茻壾漭蟒蠎",
"màng":"",
"māo":"貓",
"máo":"毛矛芼枆牦茅茆旄罞渵軞酕堥嵍楙锚緢鉾髦氂犛蝥貓髳錨蟊鶜",
"mǎo":"冇卯夘乮峁戼泖昴铆笷蓩鉚",
"mào":"冃皃芼冐茂柕眊秏贸旄耄袤覒媢帽萺貿鄚愗暓毷瑁瞀貌鄮蝐懋",
"me":"庅麽麼嚜",
"mē":"嚒",
"mè":"濹嚰",
"méi":"坆沒枚玫苺栂眉脄莓梅珻脢郿堳媒嵋湄湈猸睂葿楣楳煤瑂禖腜塺槑酶镅鹛鋂霉穈徾鎇攗鶥黴",
"měi":"毎每凂美挴浼羙媄嵄渼媺镁嬍燘躾鎂黣",
"mèi":"妹抺沬旀昧祙袂眛媚寐殙痗跊鬽煝睸韎魅篃蝞嚜櫗",
"mēn":"悶椚",
"mén":"门们扪汶怋玧钔門們閅捫菛璊瞞穈鍆亹斖虋",
"mèn":"悗惛焖悶暪燜鞔懑懣",
"mēng":"掹擝矇",
"méng":"尨甿虻庬莔萌溕盟雺甍鄳儚橗瞢蕄蝱鄸鋂髳幪懜懞濛獴曚朦檬氋礞鯍鹲艨矒靀霿饛顭鸏",
"měng":"黾冡勐猛黽锰艋蜢瞢懜懞蟒錳懵蠓鯭矒鼆",
"mèng":"孟梦夢夣懜霥癦",
"mī":"咪瞇",
"mí":"冞祢迷袮猕谜蒾詸摵瞇謎醚彌擟瞴縻藌麊麋麿檷禰靡瀰獼蘪麛镾戂攠瓕蘼爢醾醿鸍釄",
"mǐ":"米芈侎沵羋弭洣敉粎脒渳葞蔝銤彌濔孊攠灖",
"mì":"冖糸汨沕宓怽枈觅峚祕宻密淧覔覓幂谧塓幎覛嘧榓滵漞熐蔤蜜鼏冪樒幦濗謐櫁簚羃",
"mián":"宀芇杣眠婂绵媔棉綿緜臱蝒嬵檰櫋矈矊矏",
"miǎn":"丏汅免沔黾勉眄娩莬偭冕勔渑喕媔愐湎睌缅葂黽絻腼澠緬靦鮸",
"miàn":"靣面牑糆麫麪麺麵",
"miāo":"喵",
"miáo":"苗媌描瞄鹋嫹緢鶓",
"miǎo":"厸仯劰杪眇秒淼渺缈篎緲藐邈",
"miào":"妙庙玅竗庿缪廟繆",
"miē":"乜吀咩哶孭",
"mié":"",
"miè":"灭烕眜覕搣滅蔑薎鴓幭懱瀎篾櫗簚礣蠛衊鑖鱴",
"mín":"民忟垊姄岷忞怋旻旼玟苠珉盿砇罠崏捪渂琘琝缗暋瑉痻碈鈱緍緡賯錉鴖鍲",
"mǐn":"皿冺刡忟闵呡忞抿泯黾勄敃闽悯敏笢笽惽湏湣閔黽愍敯暋僶閩慜憫潣簢鳘蠠鰵",
"míng":"名明鸣洺眀茗冥朙眳铭鄍嫇溟猽蓂詺暝榠銘鳴瞑螟覭",
"mǐng":"佲姳凕嫇慏酩",
"mìng":"命掵",
"miǔ":"",
"miù":"谬缪繆謬",
"mō":"摸嚤",
"mó":"庅尛谟嫫馍摹膜骳麽麼魹橅糢嬤嬷謨謩擵饃蘑髍魔劘戂攠饝",
"mǒ":"懡",
"mò":"末圽沒妺帓殁歿歾沫茉陌帞昩枺狢皌眜眿砞秣莈眽絈袹絔蛨貃嗼塻寞漠獏蓦貈貊貉銆靺墨嫼瘼瞐瞙镆魩黙縸默瀎貘嚜藦蟔鏌爅驀礳纆耱",
"mōu":"哞",
"móu":"牟侔劺呣恈敄桙眸谋堥蛑缪踎謀繆鍪鴾麰鞪",
"mǒu":"厶某",
"mòu":"",
"mú":"毪氁",
"mǔ":"母亩牡坶姆拇畂峔牳畆畒胟娒畝畞砪畮鉧踇",
"mù":"木仫目凩朷牟沐狇坶炑牧苜毣莯蚞钼募雮墓幙幕慔楘睦鉬慕暯暮缪樢艒霂穆縸繆鞪",
"n":"",
"ń":"唔嗯",
"ň":"嗯",
"na":"",
"nā":"",
"ná":"秅拏拿挐嗱蒘搻誽镎鎿",
"nǎ":"乸雫",
"nà":"吶妠抐纳肭郍衲钠納袦捺笚笝豽軜貀鈉蒳靹魶",
"nái":"腉搱摨孻",
"nǎi":"乃奶艿氖疓妳廼迺倷釢嬭",
"nài":"佴奈柰耏耐萘渿鼐褦螚錼",
"nān":"囝囡",
"nán":"男抩枏侽柟娚畘莮喃遖暔楠諵難",
"nǎn":"赧揇湳萳煵腩嫨蝻戁",
"nàn":"妠婻諵難",
"nāng":"儾囔",
"náng":"乪涳搑憹嚢蠰饟馕欜饢",
"nǎng":"搑擃瀼曩攮灢馕",
"nàng":"儾齉",
"nāo":"孬",
"náo":"呶怓挠峱桡硇铙猱蛲詉碙摎撓嶩憹橈獶蟯夒譊鐃巎獿",
"nǎo":"垴恼悩脑匘脳堖惱嫐瑙腦碯憹獶",
"nào":"闹婥淖閙鬧臑",
"ne":"",
"né":"",
"nè":"疒讷吶抐眲訥",
"néi":"",
"něi":"娞浽馁脮腇餒鮾鯘",
"nèi":"內氝氞錗",
"nèn":"恁媆嫩嫰",
"néng":"",
"něng":"螚",
"nèng":"",
"ńg":"唔嗯",
"ňg":"嗯",
"nī":"妮",
"ní":"尼坭怩抳籾倪屔秜郳铌埿婗淣猊蚭棿蛪跜鈮聣蜺馜觬貎輗霓鲵鯢麑齯臡",
"nǐ":"伱伲你拟妳抳狔苨柅婗掜旎晲棿孴儞儗隬懝擬濔薿檷聻",
"nì":"屰氼伲抐昵胒逆匿眤秜堄惄嫟愵睨腻暱縌誽膩嬺",
"niān":"拈蔫",
"nián":"年秊哖姩秥粘溓鲇鮎鲶鵇黏鯰",
"niǎn":"涊淰焾辇榐辗撚撵碾輦簐蹍攆蹨躎",
"niàn":"卄廿念姩唸埝悥惗艌",
"niáng":"娘嬢孃釀",
"niǎng":"",
"niàng":"酿醸釀",
"niǎo":"鸟茑袅鳥嫋裊蔦樢嬝褭嬲",
"niào":"脲",
"niē":"捏揑",
"nié":"苶",
"niě":"",
"niè":"乜帇圼峊枿陧涅痆聂臬啮掜菍隉敜湼嗫嵲踂噛摰槷踗踙銸镊镍嶭篞臲鋷錜颞蹑嚙聶鎳闑孼孽櫱籋蘖囁攝齧巕糱糵蠥鑈囐囓讘躡鑷顳钀",
"nín":"囜恁脌您",
"nǐn":"拰",
"níng":"咛狞苧柠聍寍寕甯寗寜寧儜凝橣嚀嬣擰獰薴檸聹鑏鬡鸋",
"nǐng":"擰矃",
"nìng":"佞侫泞倿寍寕甯寗寜寧澝擰濘",
"niū":"妞孧",
"niú":"牜牛汼怓",
"niǔ":"忸扭沑狃纽杻炄钮紐莥鈕靵",
"niù":"抝",
"nóng":"农侬哝浓脓秾農儂辳噥濃蕽檂燶禯膿癑穠襛譨醲欁鬞",
"nǒng":"繷",
"nòng":"挊挵癑齈",
"nóu":"羺",
"nǒu":"",
"nòu":"搙槈耨獳檽鎒鐞",
"nú":"奴伮孥帑驽笯駑",
"nǔ":"伮努弩砮胬",
"nù":"怒傉搙",
"nuán":"奻渜",
"nuǎn":"渜湪暖煖煗餪",
"nuàn":"",
"nuó":"挪梛傩橠難儺",
"nuǒ":"袳袲",
"nuò":"耎诺喏掿毭逽愞搙搦锘搻榒稬諾蹃糑鍩懧懦糥穤糯",
"nǘ":"",
"nǚ":"钕籹釹",
"nǜ":"沑衂恧朒衄聏",
"nüè":"虐婩硸瘧",
"o":"筽",
"ō":"喔噢",
"ó":"哦",
"ǒ":"嚄",
"ò":"哦",
"ou":"",
"ōu":"讴吽沤欧殴瓯鸥區嘔塸漚歐毆熰甌膒鴎櫙藲謳鏂鷗",
"óu":"",
"ǒu":"吘禺偶腢嘔熰耦蕅藕",
"òu":"怄沤嘔慪漚",
"pā":"汃妑苩皅趴舥啪葩",
"pá":"杷爬钯掱琶筢潖",
"pǎ":"",
"pà":"汃帊帕怕袙",
"pāi":"拍",
"pái":"俳徘猅棑牌箄輫簲簰犤",
"pǎi":"廹",
"pài":"沠哌派渒湃蒎鎃",
"pān":"眅畨萠潘攀籓",
"pán":"丬爿肨柈洀胖眫湴盘跘媻幋蒰搫槃盤磐縏膰磻蹒瀊蟠蹣鎜鞶",
"pǎn":"坢盻",
"pàn":"冸判沜拚泮炍肨叛牉盼胖畔聁袢詊溿頖鋬闆鵥襻鑻",
"pāng":"乓汸沗胮雱滂膖霶",
"páng":"厐夆尨彷庞逄庬趽舽嫎徬膀篣螃鳑龎龐鰟",
"pǎng":"嗙耪覫",
"pàng":"炐肨胖眫",
"pāo":"抛拋脬萢藨穮",
"páo":"咆垉庖狍炰爮瓟袍铇匏烰袌跁軳鉋鞄褜麃麅",
"pǎo":"",
"pào":"奅疱皰砲袌靤麭嚗礟礮",
"pēi":"妚呸怌抷肧柸胚衃醅",
"péi":"阫陪培婄毰赔锫裵裴賠錇",
"pěi":"俖琣",
"pèi":"伂妃沛犻佩帔姵斾柭旆浿珮配淠棑媐蓜辔馷嶏霈攈轡",
"pēn":"噴濆歕",
"pén":"瓫盆湓葐",
"pěn":"呠翸",
"pèn":"喯噴",
"pēng":"亨匉怦抨泙恲胓砰梈烹硑絣軯剻閛漰嘭駍磞",
"péng":"芃朋挷竼倗捀莑堋弸淜袶棚椖傰塜塳搒漨痭硼稝蓬鹏樥熢憉澎輣篣篷膨錋韸髼蟚蟛鬅纄蘕韼鵬騯鬔鑝",
"pěng":"捧淎皏摓",
"pèng":"掽椪碰閛槰踫磞",
"pi":"榌",
"pī":"丕伓伾妚批纰邳坯岯怶披抷枈炋狉狓砒悂秛秠紕铍陴旇翍耚豾釽鈚鉟銔磇駓髬噼錃錍魾憵礕礔鎞霹",
"pí":"皮仳阰纰芘陂枇肶毘毗疲笓紕蚍郫铍啤埤崥猈蚾蚽豼焷琵禆脾腗裨鈹鲏罴膍蜱罷隦魮壀螕鮍篺螷貔鞞鵧羆朇鼙蠯",
"pǐ":"匹庀疋仳圮吡苉悂脴痞銢嶏諀鴄擗噽癖嚭",
"pì":"屁埤淠揊嫓媲睥潎稫僻澼嚊濞甓疈譬闢鷿鸊",
"piān":"囨偏媥楄犏篇翩鍂鶣",
"pián":"骈胼缏腁楩賆跰瑸緶骿蹁駢璸騈",
"piǎn":"覑谝貵諞",
"piàn":"猵骗魸獱騗騙",
"piāo":"剽勡嘌嫖彯慓缥飘旚縹翲螵犥飃飄魒",
"piáo":"嫖瓢薸闝",
"piǎo":"莩殍缥瞟篻縹醥皫顠",
"piào":"僄彯徱骠驃鰾",
"piē":"氕覕潎撆暼瞥",
"piě":"丿苤鐅",
"piè":"嫳",
"pīn":"拚姘拼砏礗穦馪驞",
"pín":"玭贫娦貧琕嫔嬪薲嚬矉蘋蠙颦顰",
"pǐn":"品榀",
"pìn":"牝汖聘",
"pīng":"乒甹俜娉涄砯聠艵頩",
"píng":"平评凭呯坪岼泙郱帡庰枰洴玶胓荓瓶帲淜硑萍蚲塀幈焩甁缾蓱蛢評馮軿鲆凴竮鉼慿箳輧憑鮃檘簈蘋",
"pǐng":"屛",
"pìng":"",
"pō":"钋陂坡岥泺泼釙翍颇溌酦頗潑醗濼醱鏺",
"pó":"婆嘙搫蔢鄱皤櫇嚩",
"pǒ":"叵尀钷笸鉕箥駊髲",
"pò":"廹岶敀昢洦珀哱烞砶破粕奤湐猼蒪魄",
"pōu":"抙剖娝捊",
"póu":"抔抙垺捊掊裒箁",
"pǒu":"咅哣婄掊棓犃",
"pū":"攵攴扑抪炇柨陠痡秿噗撲潽鋪鯆",
"pú":"圤匍捗莆菩菐葡蒲蒱僕箁酺墣獛璞濮瞨穙镤贌纀鏷",
"pǔ":"圃埔浦烳普圑溥暜谱諩擈樸氆檏镨譜蹼鐠",
"pù":"痡舗舖鋪曝",
"qi":"啐",
"qī":"七迉沏恓柒倛凄桤郪娸悽戚捿桼淒萋喰攲敧棲欹欺紪缉傶褄僛嘁墄慽榿漆緀慼緝諆踦螇霋蹊魌鏚鶈",
"qí":"丌亓伎祁圻岓岐忯芪亝斉歧畁祇祈肵俟疧荠剘斊旂竒耆脐蚔蚑蚚陭颀埼崎帺掑淇猉畦萁萕跂軝釮骐骑嵜棊棋琦琪祺蛴隑愭碁碕稘褀锜頎鬿旗粸綥綨綦蜝蜞齊璂禥蕲觭螧錡鲯懠濝薺藄鄿檱櫀簯簱臍騎騏鳍蘄鯕鵸鶀麒籏艩蠐鬐騹鰭玂麡",
"qǐ":"乞邔企屺芑启呇杞玘盀唘豈起啔啓啟婍梩绮袳跂晵棨綮綺諬闙",
"qì":"气讫忔扱気汔迄呚弃汽矵芞亟呮泣炁盵咠洓竐栔欫氣訖唭焏夡愒棄湆湇葺滊碛摖暣甈碶噐憇槭趞器憩磜磧磩藒礘罊蟿鐑",
"qiā":"抲掐袷揢葜擖",
"qiá":"",
"qiǎ":"拤峠跒酠鞐",
"qià":"圶冾匼咭帢恰洽胢殎硈愘磍髂",
"qiān":"千仟阡圱圲奷扦汘芊迁佥岍杄汧茾欦竏臤钎拪牵粁悭挳蚈谸婜孯牽釺掔谦鈆僉愆签鉛骞鹐慳搴摼撁厱磏諐遷鳽褰謙顅檶攐攑櫏簽鏲鵮孅攓騫籖鬜鬝籤韆",
"qián":"仱岒忴扲拑玪乹前炶荨钤歬虔蚙钱钳偂掮揵軡亁媊朁犍葥鈐煔鉗墘榩箝銭撍潛潜羬蕁橬錢黔鎆黚騝濳騚灊鰬",
"qiǎn":"凵肷唊淺嵰遣槏膁蜸谴缱繾譴鑓",
"qiàn":"欠刋伣芡俔茜倩悓堑掅傔棈椠欿嗛慊皘蒨塹歉綪蔳儙槧篏輤篟壍嬱縴",
"qiāng":"羌戕戗斨枪玱矼羗猐啌跄嗴椌溬獇腔嗆搶蜣锖嶈戧摤槍牄瑲羫锵篬謒蹌蹡鎗鏘鏹鶬",
"qiáng":"強墙嫱蔷樯漒蔃墻嬙廧彊薔檣牆艢蘠",
"qiǎng":"強羟搶羥墏彊繈襁镪繦鏹",
"qiàng":"戗炝唴跄嗆戧摪熗羻",
"qiāo":"帩硗郻喿嵪煍跷鄥鄡劁勪幓敲毃踍锹墝碻磝頝骹墽幧橇燆缲橾磽鍬鍫礉繑繰趬蹺蹻鏒鐰",
"qiáo":"乔侨峤荍荞桥硚菬喬睄僑摮槗谯嘺墧嫶嶠憔潐蕎鞒樵橋燋犞癄瞧礄翹櫵藮譙趫鐈鞽顦",
"qiǎo":"丂巧釥愀髜",
"qiào":"诮陗峭窍偢殻殼誚髚僺嘺撬箾噭撽鞘韒礉竅翹鞩躈",
"qiē":"苆",
"qié":"癿伽茄聺",
"qiě":"",
"qiè":"厒妾怯疌郄匧窃悏挈栔洯帹惬淁笡愜椄猰蛪趄跙嗛慊朅稧箧锲篋踥穕鍥鯜竊籡",
"qīn":"兓侵钦衾骎菳媇嵚欽嵰綅誛嶔親顉駸鮼寴",
"qín":"庈忴扲芩芹肣矜埐珡矝秦耹菦蚙捦菳琴琹禽覃鈙鈫雂勤嗪嫀溱靲廑慬噙嶜擒斳鳹懄檎澿瘽螓懃蠄鵭",
"qǐn":"坅昑笉梫赾寑锓寝寖寢鋟螼",
"qìn":"吢吣抋沁唚菣揿搇撳寴瀙藽",
"qīng":"靑青氢轻倾卿郬圊埥寈氫淸清軽傾綪蜻輕錆鲭鯖鑋",
"qíng":"夝甠剠勍啨情殑硘晴棾氰葝暒擏樈擎檠黥",
"qǐng":"苘顷请庼頃廎漀請檾謦",
"qìng":"庆凊掅殸渹碃箐綮靘慶磬親儬濪罄櫦",
"qiōng":"",
"qióng":"卭邛宆穷穹茕桏惸琁筇笻赹焪焭琼舼蛬蛩煢熍睘跫銎瞏窮儝嬛憌橩璚藑瓊竆藭瓗",
"qiòng":"",
"qiū":"丘丠邱坵恘秌秋恷蚯媝湫萩楸湬塸蓲鹙篍緧蝵穐趥龜橚鳅蟗鞦鞧蘒鰌鰍鶖蠤龝",
"qiú":"厹叴囚扏犰玌艽芁朹汓肍求虬泅牫虯俅觓訅訄酋唒浗紌莍逎逑釚梂殏毬球赇釻頄崷巯渞湭皳盚遒煪絿蛷裘巰觩賕璆蝤銶醔鮂鼽鯄鰽",
"qiǔ":"搝糗",
"qiù":"",
"qū":"伹佉匤岖诎阹驱呿坥屈岴抾浀祛胠袪區焌紶蛆躯煀筁粬蛐詘趍嶇憈駆敺觑誳駈麹髷魼趨麯覰覷軀鶌麴黢覻驅鰸鱋",
"qú":"佢劬斪朐胊菃衐鸲淭絇翑蚼葋軥蕖璖磲螶鴝璩翵蟝瞿鼩蘧忂灈戵欋氍爠籧臞癯欔蠷衢躣蠼鑺鸜",
"qǔ":"苣取竘娶紶詓竬蝺龋齲",
"qù":"去厺刞欪耝阒觑閴麮闃鼁覰覷覻",
"quān":"奍弮悛圏棬椦箞鐉",
"quán":"全权佺狋诠姾峑恮泉洤荃拳牷辁啳埢婘惓捲痊硂铨椦湶犈筌絟葲搼楾瑔觠詮跧輇蜷銓槫権踡縓醛駩闎鳈鬈騡孉巏鰁權齤矔蠸颧顴灥",
"quǎn":"犭犬犮畎烇绻綣虇",
"quàn":"劝牶勧韏勸灥",
"quē":"炔缺缼蚗蒛阙闕",
"qué":"瘸",
"què":"汋却卻埆崅悫琷傕敠敪棤硞确阕塙搉皵碏阙鹊愨榷墧慤碻確趞燩闋礐闕鵲礭",
"qūn":"夋囷逡箘歏",
"qún":"宭峮帬裙羣群裠麇",
"qǔn":"",
"rán":"呥肰衻袇蚦袡蚺然髥嘫髯燃繎",
"rǎn":"冄冉姌苒染珃媣蒅熯橪",
"ràn":"",
"rāng":"",
"ráng":"穣儴勷瀼獽蘘禳瓤穰躟鬤",
"rǎng":"壌壤攘爙纕",
"ràng":"让懹譲讓",
"ráo":"娆荛饶桡嬈蕘橈襓饒",
"rǎo":"扰娆隢嬈擾",
"rào":"绕遶穘繞",
"ré":"捼",
"rě":"喏惹",
"rè":"热渃熱",
"rén":"亻人仁壬忈朲忎秂芢魜銋鵀",
"rěn":"忍荏栠栣荵秹菍棯稔綛躵銋",
"rèn":"刃刄认仞仭讱屻岃扨纫妊杒牣纴肕轫韧饪祍姙紉衽紝訒軔梕袵釰釼絍腍鈓靱靭韌飪認餁",
"rēng":"扔",
"réng":"仍辸礽芿陾",
"rì":"日驲囸氜衵釰釼鈤馹",
"róng":"戎肜栄狨绒茙茸荣容峵毧烿傛媶嵘搑絨羢嫆嵤搈榵溶蓉榕榮熔瑢穁槦縙蝾褣镕螎融駥嬫嶸爃鎔瀜曧蠑",
"rǒng":"冗宂坈傇軵縙氄",
"ròng":"穃縙",
"róu":"厹禸柔粈脜媃揉渘葇楺煣瑈腬糅蝚蹂輮鍒鞣瓇騥鰇鶔",
"rǒu":"韖",
"ròu":"肉宍楺譳",
"rū":"嶿",
"rú":"邚如吺侞帤茹挐桇袽铷渪筎蒘銣蕠蝡儒鴑嚅嬬孺濡獳薷鴽曘檽襦繻蠕颥醹顬鱬",
"rǔ":"汝肗乳辱鄏擩",
"rù":"入扖杁洳嗕媷溽缛蓐鳰褥縟",
"ruán":"堧撋壖",
"ruǎn":"阮朊软耎偄軟媆瑌腝碝緛輭檽瓀礝",
"ruàn":"緛",
"ruí":"苼桵甤緌蕤",
"ruǐ":"惢蕋蕊橤繠壡蘃蘂",
"ruì":"兊兌抐汭芮枘笍蚋锐瑞蜹睿銳鋭叡鏸",
"rún":"瞤",
"rǔn":"",
"rùn":"闰润閏閠潤橍膶",
"ruó":"挼捼",
"ruò":"叒偌弱鄀婼渃焫楉嵶蒻箬篛爇鰙鰯鶸",
"sa":"",
"sā":"仨",
"sǎ":"訯靸潵鞈攃灑躠纚",
"sà":"卅泧钑飒脎萨鈒摋隡馺蕯颯薩櫒鏾",
"sāi":"毢愢揌毸腮嘥噻鳃顋鰓",
"sǎi":"嗮",
"sài":"赛僿賽簺",
"san":"壭",
"sān":"三弎叁參叄叅毶毵厁毿犙鬖",
"sǎn":"仐伞傘糁馓糝糤糣繖鏒鏾饊",
"sàn":"俕帴閐潵",
"sāng":"桒桑喪槡",
"sǎng":"嗓搡磉褬颡鎟顙",
"sàng":"喪",
"sāo":"掻慅搔溞缫懆缲螦繅鳋颾騒繰騷鰠鱢",
"sǎo":"埽掃嫂",
"sào":"埽掃瘙懆氉矂髞",
"sē":"閪",
"sè":"色拺洓栜涩啬渋粣铯雭歮琗嗇瑟摵歰銫槭澁廧懎擌濇濏瘷穑薔澀璱瀒穡鎍繬穯轖鏼闟譅飋",
"sēn":"森椮槮襂",
"sěn":"",
"sēng":"僧鬙",
"sèng":"",
"sī":"厶纟丝司糹糸私咝泀俬恖虒鸶偲傂媤愢斯絲缌蛳楒禗鉰飔凘厮禠罳蜤銯锶嘶噝廝撕澌磃緦蕬鋖燍螄鍶蟖蟴颸騦鯣鐁鷥鼶",
"sí":"",
"sǐ":"死愢",
"sì":"巳亖四寺汜佀兕姒泤祀価孠杫泗饲驷俟娰枱柶洠牭洍涘肂飤梩笥耛耜釲竢覗嗣肆貄鈶鈻飴飼榹銉禩駟蕼儩騃瀃",
"sōng":"忪枀松枩娀柗倯凇崧庺梥淞菘愡揔棇嵩硹憽濍檧鬆",
"sóng":"",
"sǒng":"怂悚捒耸竦傱愯楤嵷摗漎慫聳駷",
"sòng":"吅讼宋诵送颂訟頌誦鎹餸",
"sōu":"凁捒捜鄋嗖廀廋搜溲獀蒐蓃馊摉飕摗锼撨艘螋醙鎪餿颼颾鏉騪",
"sǒu":"叜叟傁棷蓃嗾瞍擞薮擻藪櫢籔",
"sòu":"欶嗽擞瘶擻",
"sū":"甦酥稡稣窣穌鯂蘇蘓櫯囌",
"sú":"圱俗",
"sǔ":"",
"sù":"玊夙诉泝肃洬涑珟素莤速埣梀殐粛骕傃棴粟訴谡嗉塑塐嫊愫溯溸肅遡鹔僳愬摵榡膆蔌觫趚遬憟樕樎潥碿鋉餗潚縤橚璛簌縮藗謖蹜驌鱐鷫",
"suān":"狻痠酸",
"suǎn":"匴篹",
"suàn":"祘笇筭蒜算",
"suī":"夊芕虽倠哸娞浽荾荽眭毸滖睢缞嗺熣濉縗鞖雖",
"suí":"绥隋随遀綏隨瓍髄",
"suǐ":"膸瀡髓",
"suì":"亗岁砕祟谇埣嵗遂歲歳煫睟碎隧嬘澻穂誶賥檖燧璲禭穗穟繀襚邃旞繐繸譢鐆鏸鐩韢",
"sūn":"狲荪孫喰飧飱搎猻蓀槂蕵薞",
"sǔn":"扻损笋隼筍損榫箰簨鎨鶽",
"sùn":"摌",
"suō":"唆娑挱莏莎傞挲桫梭睃嗍嗦羧蓑摍趖簑簔縮鮻",
"suó":"",
"suǒ":"所乺唢索琑琐嫅惢锁嗩暛溑獕瑣褨璅縒鎍鎖鎻鏁",
"suò":"逤溹蜶",
"shā":"杀杉纱乷剎砂唦挱殺猀粆紗莎挲桬毮铩痧硰摋蔱裟榝樧魦鲨閷髿鎩鯊鯋繺",
"shá":"啥",
"shǎ":"傻儍",
"shà":"倽唼啑帹菨萐喢嗄廈歃翜歰箑翣濈閯霎",
"shāi":"筛篩諰簁簛籭",
"shǎi":"摋",
"shài":"晒攦曬",
"shān":"山彡邖圸删刪杉芟姍姗衫钐埏挻柵炶狦珊舢痁脠軕笘釤閊傓跚剼搧煔嘇幓煽潸澘穇檆縿膻鯅羴羶",
"shán":"",
"shǎn":"闪陕炶陝閃閄晱煔睒摻熌覢",
"shàn":"讪汕姍姗疝钐剡訕赸掞釤善單椫禅銏骟僐鄯儃墡墠撣潬缮嬗嶦擅敾樿歚禪膳磰謆赡繕蟮蟺譱贍鐥饍騸鳝鳣灗鱓鱔",
"shang":"",
"shāng":"伤殇商愓湯觞傷禓墒慯滳漡蔏殤熵螪觴謪鬺",
"shǎng":"垧扄晌埫赏樉賞鋿鏛贘鑜",
"shàng":"丄尙尚恦绱緔鞝",
"shāo":"娋弰烧莦焼萷旓筲艄輎蕱燒鞘髾鮹",
"sháo":"勺芍杓苕柖玿韶",
"shǎo":"",
"shào":"佋劭卲邵绍柖哨娋袑紹睄綤潲",
"shē":"奓奢猞赊畭畬畲輋賒賖檨",
"shé":"舌佘虵阇揲蛥闍磼",
"shě":"舍捨",
"shè":"厍设社泏舎舍厙挕涉涻渉設赦弽慑摂滠慴蔎歙蠂韘騇懾攝灄麝欇",
"shéi":"誰",
"shēn":"申屾扟伸身侁冞呻妽籶绅罙诜姺柛氠珅穼籸娠峷甡眒砷莘參叄堔敒深紳兟叅棽葠裑訷嫀搷罧蓡詵幓甧糁蔘糂燊薓駪鲹曑糝糣鯓鵢鯵鰺",
"shén":"神榊鉮鰰",
"shěn":"邥吲弞抌审矤哂矧宷谂谉婶淰渖訠棯審諗頣魫曋瞫嬸瀋覾讅",
"shèn":"肾侺昚胂涁眘渗祳脤谌腎葚愼慎椹瘆蜄蜃滲鋠瘮黮",
"shēng":"升生阩呏声斘昇枡泩狌苼殅牲珄竔陞曻陹殸笙湦焺甥鉎聲鍟鼪鵿",
"shéng":"渑绳憴澠縄繉繩譝",
"shěng":"眚偗渻",
"shèng":"圣乗娍胜晠晟剰剩勝椉貹嵊琞聖墭榺蕂橳賸",
"shi":"辻籂",
"shī":"尸失师厔呞虱诗邿鸤屍施浉狮師絁釶湤湿葹溮溼獅蒒蓍詩鉇嘘瑡酾鳲噓箷蝨鳾褷鲺濕鍦鯴鰤鶳襹釃",
"shí":"十饣乭时竍実实旹飠姼峕炻祏蚀埘宲時莳寔湜遈塒嵵溡蒔鉐實榯碩蝕鲥鮖鼫識鼭鰣",
"shǐ":"史矢乨豕使始驶兘宩屎狶痑笶榁鉂駛",
"shì":"士礻丗世仕市示卋式忕亊忯戺事侍势呩柹视试饰冟咶室峙恀恃拭昰是枾柿狧眂贳适栻烒眎眡耆舐莳轼逝铈啫埶畤秲視釈崼崻弑徥惿揓谥貰释勢嗜弒楴煶睗筮蒔觢試軾鈰鉃飾舓誓適鉽馶奭銴餝餙噬嬕澨澤諡諟遾檡螫謚簭襫醳釋鰘",
"shōu":"収收敊",
"shóu":"熟",
"shǒu":"扌手守垨首艏",
"shòu":"寿受狩兽售授涭绶痩膄壽夀瘦綬嘼獣獸鏉",
"shū":"书殳疋忬抒纾叔杸枢陎姝倐倏捈書殊紓婌悆掓梳淑焂菽軗鄃琡疎疏舒摅毹毺綀输瑹跾踈樞緰蔬輸橾鮛儵攄瀭鵨",
"shú":"朮尗秫孰赎蒣塾熟璹贖",
"shǔ":"鼡暏暑稌黍署蜀鼠數潻薥薯曙癙藷襡糬襩屬籔蠴鱪鱰",
"shù":"朮戍束沭述侸俞兪咰怸怷树竖荗恕捒庻庶絉蒁術隃尌裋竪腧鉥墅漱潄數澍豎樹濖錰霔鏣鶐虪",
"shuā":"唰",
"shuǎ":"耍",
"shuà":"誜",
"shuāi":"缞摔縗",
"shuǎi":"甩",
"shuài":"帅帥蟀卛",
"shuān":"闩拴閂栓絟",
"shuàn":"涮腨槫",
"shuāng":"双泷霜雙孀瀧骦孇騻欆礵鷞鹴艭驦鸘",
"shuǎng":"爽塽慡漺縔鏯",
"shuàng":"灀",
"shuí":"谁脽誰",
"shuǐ":"氵水氺閖",
"shuì":"帨挩捝涗涚娷祱稅税裞睡說説",
"shǔn":"吮楯",
"shùn":"顺眴舜順蕣橓瞚瞤瞬鬊",
"shuō":"說説",
"shuò":"妁洬烁朔铄欶矟搠蒴銏愬槊獡碩數箾鎙爍鑠",
"ta":"侤",
"tā":"他它牠祂趿铊塌榙溻鉈褟闧",
"tá":"",
"tǎ":"塔溚墖獭鮙鳎獺鰨",
"tà":"沓挞狧闼粏崉涾傝嗒搨遝遢阘榻毾漯禢撻澾誻踏鞈嚃橽錔濌蹋鞜鎉鎑闒鞳蹹躂嚺闟闥譶躢",
"tāi":"囼孡珆胎",
"tái":"旲邰坮抬骀枱炱炲菭跆鲐箈臺颱駘儓鮐嬯擡薹檯斄籉",
"tǎi":"奤",
"tài":"太冭夳忕汏忲汰汱态肽钛泰舦酞鈦溙態燤",
"tān":"坍贪怹啴痑舑貪摊滩嘽潬瘫擹攤灘癱",
"tán":"坛昙倓谈郯埮婒惔弾覃榃痰锬谭嘾墰墵彈憛潭談醈壇曇橝澹燂錟檀顃罈藫壜繵譚貚醰譠罎",
"tǎn":"忐坦袒钽菼毯僋鉭嗿緂儃憳憻暺醓璮襢",
"tàn":"叹炭倓埮探傝湠僋嘆碳舕歎",
"tāng":"铴湯嘡劏羰蝪薚镗蹚鏜闛鞺鼞",
"táng":"坣唐堂傏啺愓棠鄌塘嵣搪溏蓎隚榶漟煻瑭禟膅樘磄糃膛橖篖糖螗踼糛螳赯醣鎕餹鏜闛饄鶶",
"tǎng":"伖帑偒傥耥躺镋鎲儻戃灙曭爣矘钂",
"tàng":"烫铴摥燙鐋",
"tāo":"夲夵弢抭涛绦掏涭絛詜嫍幍慆搯滔槄瑫韬飸縚縧濤謟轁鞱韜饕",
"táo":"匋迯咷洮逃桃陶啕梼淘绹萄祹裪綯蜪鞀醄鞉鋾駣檮饀騊鼗",
"tǎo":"讨討",
"tào":"套",
"tè":"忑忒特脦犆铽慝鋱蟘",
"tēng":"熥膯鼟",
"téng":"疼痋幐腾誊漛滕邆縢螣駦謄儯藤騰籐鰧籘虅驣",
"tèng":"霯",
"tī":"剔梯锑踢銻擿鷉鷈體",
"tí":"苐厗荑桋绨偍珶啼媂媞崹惿渧稊缇罤遆鹈嗁瑅禔綈睼碮褆徲漽磃緹蕛题趧蹄醍謕蹏鍗鳀題鮷鵜騠鯷鶗鶙禵鷤",
"tǐ":"挮徥躰骵醍軆體",
"tì":"戻奃屉剃朑俶倜悌挮涕眣绨逖啑屜悐惕掦笹逷屟惖揥替棣綈裼褅歒殢髰薙嚏鬀嚔瓋鬄籊趯",
"tiān":"天兲呑婖添酟靔黇靝",
"tián":"田屇沺恬畑畋盷胋钿甛甜菾湉塡搷阗瑱碵緂磌窴鴫璳闐鷆鷏",
"tiǎn":"奵忝殄倎栝唺悿淟紾铦晪琠腆觍痶睓舔銛餂覥賟銽錪",
"tiàn":"掭菾琠瑱舚",
"tiāo":"旫佻庣恌條祧聎",
"tiáo":"芀朷岧岹苕迢祒條笤萔铫蓚蓨蓧龆樤蜩銚調鋚鞗髫鲦鯈鎥齠鰷",
"tiǎo":"宨晀朓脁窕誂斢窱嬥",
"tiào":"啁眺粜絩覜趒糶",
"tiē":"怗贴萜聑貼跕",
"tié":"",
"tiě":"铁蛈鉄僣銕鐡鐵驖",
"tiè":"呫飻餮",
"tīng":"厅庁汀听庍耓厛烃桯烴渟綎鞓聴聼廰聽廳",
"tíng":"邒廷亭庭莛停婷嵉渟筳葶蜓楟榳閮霆聤蝏諪鼮",
"tǐng":"圢甼町侹侱娗挺涏梃烶珽脡铤艇颋誔鋌閮頲",
"tìng":"忊梃濎",
"tōng":"囲炵通痌絧嗵蓪樋",
"tóng":"仝佟彤侗峂庝哃垌峒峝狪茼晍桐浵烔砼蚒偅痌眮秱铜硧童粡絧詷赨酮鉖僮勭鉵銅餇鲖潼獞曈朣橦氃燑犝膧瞳穜鮦",
"tǒng":"侗统捅桶筒統筩綂",
"tòng":"恸痛衕慟憅",
"tou":"",
"tōu":"偸偷婾媮緰鋀鍮",
"tóu":"亠投骰頭",
"tǒu":"妵紏敨飳斢黈蘣",
"tòu":"透埱",
"tu":"汢",
"tū":"凸宊禿秃怢突涋捸堗湥痜葖嶀鋵鵚鼵",
"tú":"図图凃峹庩徒悇捈涂荼莵途啚屠梌菟揬稌趃塗嵞瘏筡腯蒤鈯圗圖廜摕潳瑹跿酴墿馟檡鍎駼鵌鶟鷋鷵",
"tǔ":"土圡钍唋釷",
"tù":"兎迌兔唋莵堍菟鋀鵵",
"tuān":"湍猯圕煓貒",
"tuán":"団团抟剸團塼慱摶漙槫篿檲鏄糰鷒鷻",
"tuǎn":"畽墥疃",
"tuàn":"彖湪猯褖貒",
"tuī":"忒推蓷藬讉",
"tuí":"弚颓僓隤墤尵橔頺頹頽魋穨蘈蹪",
"tuǐ":"俀聉腿僓蹆骽",
"tuì":"侻退娧煺蛻蜕螁駾",
"tūn":"吞呑旽涒啍朜焞噋憞暾",
"tún":"坉庉忳芚饨蛌豘豚軘飩鲀魨霕黗臀臋",
"tǔn":"氽",
"tùn":"",
"tuō":"乇仛讬托扡汑饦杔侂咃咜拕拖沰挩捝莌袉袥託啴涶脫脱飥馲魠鮵",
"tuó":"阤驮佗陀陁坨岮沱沲狏驼侻柁砤砣袉铊鸵紽堶媠詑跎酡碢鉈馱槖駄鋖駞駝橐鮀鴕鼧騨鼍驒驝鼉",
"tuǒ":"彵妥庹椭楕嫷撱橢鵎鰖",
"tuò":"杝柝毤唾涶萚跅毻嶞箨蘀籜",
"wa":"哇",
"wā":"屲穵呙劸咼哇徍挖洼娲畖窊唲啘媧窐嗗瓾蛙搲溛漥窪鼃攨韈",
"wá":"娃",
"wǎ":"佤邷咓砙瓸搲",
"wà":"帓袜婠聉嗢搲腽膃韎襪韤",
"wai":"",
"wāi":"呙咼歪喎竵瀤",
"wǎi":"崴",
"wài":"外顡",
"wān":"毌夗弯剜埦婠帵捥塆湾睕蜿潫豌鋺彎壪灣",
"wán":"丸刓汍纨芄完岏忨抏杬玩笂紈捖蚖顽烷琓貦頑翫",
"wǎn":"夘夗倇唍挽盌莞莬埦婉惋捥晚晥梚涴绾脘菀萖惌晩晼椀琬皖畹碗箢綩綰輓踠鋔鋺",
"wàn":"卍卐妧杤捥脕掔腕萬絻綄輐槾澫鋄瞣薍錽蟃贃鎫贎",
"wāng":"尣尫尪汪尩瀇",
"wáng":"亾兦仼莣蚟朚",
"wǎng":"罓罒网彺忹抂徃往枉罖罔迬惘菵暀棢蛧辋網蝄誷輞瀇魍",
"wàng":"妄忘迋旺盳徍望暀朢",
"wēi":"厃危威倭烓偎逶隇隈喴媙崴嵔愄揋揻葨葳微椳楲溦煨詴蜲縅蝛覣嶶薇燰鳂癐癓巍鰃鰄霺",
"wéi":"囗韦圩囲围帏沩违闱隹峗峞洈為韋桅涠唯帷惟硙维喡圍媁嵬幃湋溈爲琟違潍維蓶鄬撝潙潿醀濰鍏闈鮠壝矀覹犩欈",
"wěi":"伟伪纬芛苇炜玮洧娓屗捤浘荱诿偉偽唩崣捼梶痏硊萎隗骩媁嵔廆徫愇渨猥葦蒍骫骪暐椲煒瑋痿腲艉韪僞嶉撱碨磈鲔寪緯蔿諉踓韑頠薳儰濻鍡鮪瀢韙颹韡亹瓗斖",
"wèi":"卫未位味苿為畏胃叞軎猚硙菋谓喂喡媦渭爲猬煟墛瞆碨蔚蜼慰熭犚磑緭蝟衛懀罻衞謂餧鮇螱褽餵魏藯轊鏏霨鳚蘶饖瓗讆躗讏躛",
"wēn":"昷塭温缊榅殟溫瑥辒韫榲瘟緼縕豱輼轀鎾饂鳁鞰鰛鰮",
"wén":"文彣芠炆玟闻紋蚉蚊珳阌雯瘒聞馼駇魰鳼鴍螡閺閿蟁闅鼤繧闦",
"wěn":"伆刎吻呅忟抆呡忞歾肳紊桽脗稳穏穩",
"wèn":"问妏汶紋莬問渂揾搵絻顐璺",
"wēng":"翁嗡滃鹟聬螉鎓鶲",
"wěng":"勜奣塕嵡滃蓊暡瞈攚",
"wèng":"瓮蕹甕罋齆",
"wō":"挝倭莴唩涹渦猧萵喔窝窩蜗撾濄緺蝸踒薶",
"wǒ":"呙我咼婑婐捰",
"wò":"仴沃肟卧枂臥偓捾涴媉幄握渥焥硪楃腛斡瞃濣瓁臒龌馧龏齷",
"wū":"乌圬弙扜扝汚汙污邬呜巫杅杇於屋洿诬钨烏剭窏釫惡鄔嗚誈僫歍誣箼鋘螐鴮鎢鰞",
"wú":"无毋吳吴吾呉芜郚唔娪峿洖浯茣莁梧珸祦無铻鹀蜈墲蕪鋙鋘橆璑蟱鯃鵐譕鼯鷡",
"wǔ":"乄五午仵伍妩庑忤怃迕旿武玝侮倵娒捂逜陚啎娬牾堥珷摀碔鹉熓瑦舞嫵廡憮潕儛甒膴瞴鵡躌",
"wù":"兀勿务戊阢屼扤坞岉杌沕芴忢旿物矹俉卼敄柮误務唔娪悟悞悮粅趶晤焐婺嵍惡渞痦隖靰骛塢奦嵨溩雺雾僫寤熃誤鹜鋈窹霚鼿霧齀蘁騖鶩",
"xī":"夕兮邜吸忚扱汐西希扸卥昔析矽穸肸肹俙咥咭徆怸恓诶郗饻唏奚娭屖息悕氥浠牺狶莃唽悉惜晞桸欷淅渓烯焁焈琋硒羛菥赥釸傒惁晰晳焟焬犀睎稀粞翖翕舾鄎厀嵠徯溪煕皙碏蒠裼锡僖榽熄熈熙獡緆蜥覡誒豨閪餏嘻噏嬆嬉嶲憘潝瘜磎膝凞暿樨橀歙熻熺熹窸羲螅螇錫燨犠瞦礂蟋豀谿豯貕蹊巂糦繥釐雟鯑鵗觹譆醯鏭鐊隵嚱巇曦爔犧酅饎觽鼷蠵鸂觿鑴",
"xí":"习郋席習袭觋雭喺媳椺蒵蓆嶍漝趘槢薂隰檄謵鎴霫鳛飁騱騽鰼襲驨",
"xǐ":"杫枲玺徙喜葈葸鈢鉩鉨屣漇蓰銑憘憙暿橲歖禧諰壐縰謑鳃蟢蹝釐璽鰓瓕鱚囍矖纚躧",
"xì":"匸卌扢屃忾饩呬忥怬细郄钑係恄欪盻郤屓欯绤細釳阋傒摡椞舃舄趇隙愾慀滊禊綌蒵赩隟墍熂犔稧戯潟澙蕮覤戱縘黖戲磶虩餼鬩繫闟霼屭衋",
"xiā":"呷虲疨虾谺傄閕煆颬瘕瞎蝦鰕",
"xiá":"匣侠狎俠峡柙炠狭陜埉峽烚狹珨祫捾硖笚翈舺陿徦硤遐敮暇瑕筪舝瘕碬辖磍蕸縖螛赮魻轄鍜霞鎋黠騢鶷",
"xiǎ":"閕閜",
"xià":"丅下乤圷芐疜夏梺廈睱諕嚇懗罅夓鎼鏬",
"xiān":"仚仙屳先奾佡忺氙杴欦祆秈苮姺枮籼珗莶掀铦搟綅跹酰锨僊僲嘕摻銛暹銽韯嬐憸薟鍁繊褼韱鮮蹮馦孅廯攕醶纎鶱襳躚纖鱻",
"xián":"伭咞闲咁妶弦臤贤咸唌挦涎玹盷胘娴娹婱絃舷蚿衔啣湺痫蛝閑閒鹇嗛嫌溓衘甉銜嫻嫺憪撏澖稴羬誸賢諴輱醎癇癎瞯藖礥鹹麙贒鑦鷴鷼鷳",
"xiǎn":"彡冼狝显险崄毨烍猃蚬険赻筅尟尠搟禒蜆跣銑箲險嶮獫獮藓鍌鮮燹顕幰攇櫶蘚譣玁韅顯灦",
"xiàn":"咞岘苋見现线臽限姭宪県陥哯垷娊峴涀莧軐陷埳晛現硍馅睍絤綖缐羡塪搚溓献粯羨腺僩僴槏綫誢憪撊線鋧憲橌橺縣錎餡壏懢豏麲瀗臔獻糮鏾霰鼸",
"xiāng":"乡芗香郷厢啍鄉鄊廂湘缃萫葙鄕楿稥薌箱緗膷襄儴勷忀骧麘欀瓖镶鱜纕鑲驤",
"xiáng":"夅瓨佭庠羏栙祥絴翔詳跭",
"xiǎng":"享亯响蚃饷晑飨想銄餉鲞蠁鮝鯗響饗饟鱶",
"xiàng":"向姠项珦象缿衖項像勨嶑潒銗閧曏橡襐闂嚮蟓鐌鱌",
"xiāo":"灲灱呺枭侾哓枵骁宯宵庨消烋绡莦虓逍鸮婋梟焇猇萧痚痟睄硣硝窙翛销嗃揱綃蛸嘐歊潇熇箫踃嘵憢撨獟獢箾銷霄骹彇膮蕭颵魈鴞穘簘藃蟂蟏鴵嚣瀟簫蟰髇櫹嚻囂髐鷍蠨驍毊虈",
"xiáo":"姣洨郩崤淆訤殽誵",
"xiǎo":"小晓暁筱筿皛曉篠謏皢",
"xiào":"孝効咲恔俲哮效涍笑啸傚敩殽嗃詨嘋嘨誟嘯薂歗熽斅斆",
"xiē":"娎揳猲楔歇滊獦蝎蠍",
"xié":"劦协旪協胁垥奊峫恊拹挾脇脅脋衺偕斜梋谐絜翓颉嗋愶慀搚携瑎綊熁膎鲑勰撷擕緳縀缬蝢鞋諧燲鮭嚡擷鞵儶襭孈攜讗龤",
"xiě":"写冩寫藛",
"xiè":"伳灺泻祄绁缷卸枻洩炨炧卨屑栧偞偰徢械烲焎禼紲亵媟屟渫絏絬谢僁塮觟觧榍榝榭褉靾噧寫屧暬樧碿緤嶰廨懈澥獬糏薤薢邂韰燮褻謝夑瀉鞢韘瀣爕繲蟹蠏齘齛纈齥齂躠躞",
"xīn":"忄心邤妡忻辛昕杺欣盺俽莘惞訢鈊锌新歆廞鋅噺噷嬜薪馨鑫馫",
"xín":"枔襑镡礥鐔",
"xǐn":"伈",
"xìn":"阠伩囟孞炘軐脪衅訫愖焮馸顖舋釁",
"xīng":"狌星垶骍惺猩煋瑆腥觪箵篂興謃鮏曐觲騂皨鯹",
"xíng":"刑邢饧巠形陉侀郉哘型洐荥钘陘娙硎铏鈃蛵滎鉶銒鋞餳",
"xǐng":"睲醒擤",
"xìng":"杏姓幸性荇倖莕婞悻涬葕睲緈鋞嬹臖",
"xiōng":"凶匂兄兇匈芎讻忷汹哅恟洶胷胸訩詾賯",
"xióng":"雄熊熋",
"xiǒng":"焽焸",
"xiòng":"诇詗夐敻",
"xiū":"俢修咻庥烌烋羞脩脙鸺臹貅馐樇銝髤髹鎀鮴鵂鏅饈鱃飍",
"xiú":"苬",
"xiǔ":"朽滫潃糔",
"xiù":"秀岫峀珛绣袖琇锈嗅溴綉璓褏褎銹螑嚊繍鏅繡鏥鏽齅",
"xū":"圩戌旴姁疞盱欨砉胥须眗訏顼偦虗虚裇許谞媭揟欻湏湑虛須楈綇頊嘘墟稰蓲需魆噓嬃歔緰縃蕦蝑歘藇諝燸譃魖驉鑐鬚",
"xú":"俆冔徐禑蒣",
"xǔ":"呴姁诩浒栩珝喣湑蛡暊詡滸稰鄦糈諿醑盨",
"xù":"旭伵序旴汿芧侐卹妶怴沀叙恓恤昫朐洫垿晇欰殈烅珬勗勖喐惐掝敍敘淢烼绪续蚼酗壻婿朂溆矞絮聓訹慉滀煦続蓄賉槒漵潊盢瞁緒聟蓿銊嘼獝稸緖藇藚續鱮",
"xuān":"吅轩昍咺宣弲晅軒梋谖喧塇媗愃愋揎萲萱暄煊瑄蓒睻儇禤箮翧蝖鋗嬛懁蕿諠諼鞙駨鍹駽矎翾藼蘐蠉譞鰚讂",
"xuán":"玄伭妶玹痃悬琁蜁嫙漩暶璇縣檈璿懸",
"xuǎn":"咺选烜喛暅選癣癬",
"xuàn":"怰泫昡炫绚眩袨铉琄眴衒渲絢楥楦鉉夐敻碹蔙镟颴縼繏鏇贙",
"xuē":"疶蒆靴薛辥辪鞾",
"xué":"穴斈乴学峃茓泶袕鸴敩踅噱壆學嶨澩燢觷鷽",
"xuě":"彐雪樰膤艝轌鳕鱈",
"xuè":"吷坹岤怴泬狘疦桖谑滈趐謔瞲瀥",
"xūn":"坃勋埙焄勛塤煇窨勲勳薫嚑壎獯薰曛燻臐矄蘍壦爋纁醺",
"xún":"廵寻巡旬杊畃询郇咰姰峋恂洵浔紃荀荨栒桪毥珣偱眴尋循揗詢鄩鲟噚潯蕁攳樳燅燖璕駨蟫蟳爓鱘鱏灥",
"xùn":"卂训讯伨汛迅驯侚巺徇狥迿逊孫殉毥浚訊訓訙奞巽殾稄遜馴愻噀潠蕈濬爋顨鶽鑂",
"ya":"",
"yā":"丫圧吖亞庘押枒垭鸦桠鸭啞孲铔椏鴉錏鴨壓鵶鐚",
"yá":"牙伢厑岈芽厓拁琊笌蚜堐崕崖涯猚釾睚衙漄齖",
"yǎ":"疋厊庌挜疨唖啞掗痖雅瘂蕥",
"yà":"劜圠轧亚冴襾覀讶亜犽迓亞玡軋姶娅挜砑俹氩埡婭掗訝铔揠氬猰聐圔椻稏碣窫潝磍壓瓛齾",
"yān":"恹剦烟珚胭崦淊淹焑焉菸阉殗渰湮傿歅煙硽鄢嫣漹嶖樮醃橪閹閼嬮懨篶懕臙黫黰",
"yán":"讠厃延闫严妍芫訁言岩昖沿炏炎郔唌埏姸娫狿莚娮梴盐啱琂硏訮閆阎喦嵓嵒筵綖蜒塩揅楌詽碞蔅羬颜厳虤閻檐顏顔嚴壛巌簷櫩壧巖巗欕礹鹽麣",
"yǎn":"夵抁沇乵兖俨兗匽弇衍剡偃厣掞掩眼萒郾酓隁嵃愝扊揜晻棪渰渷琰遃隒椼硽罨裺演褗戭窴蝘魇噞嬐躽縯檿黡厴甗鰋鶠黤儼黬黭龑孍顩鼴巘巚曮魘鼹礹齴黶",
"yàn":"厌妟觃牪匽姲彥彦洝砚唁宴晏烻艳覎验偐掞焔猏硏谚隁喭堰敥棪殗焱焰猒硯雁傿椻溎滟豣鳫厭墕暥熖酽鳱嬊谳餍鴈燄諺赝鬳嚈嬮曕鴳酀騐験嚥嬿艶贋軅曣爓醶騴齞鷃灔贗囐觾讌醼饜驗鷰艷灎釅驠灧讞豓豔灩",
"yāng":"央姎抰泱柍殃胦眏秧鸯鉠雵鞅鍈鴦",
"yáng":"扬阦阳旸杨炀玚飏佯劷氜疡钖垟徉昜洋羏烊珜眻陽婸崵崸愓揚蛘敭暘楊煬瑒禓瘍諹輰鍚鴹颺鰑霷鸉",
"yǎng":"卬佒咉坱岟养柍炴氧眏痒紻傟勜楧軮慃氱蝆飬養駚懩攁瀁癢礢",
"yàng":"怏柍恙样烊羕楧詇煬様漾鞅樣瀁",
"yāo":"幺夭吆妖枖殀祅約訞喓葽楆腰鴁撽邀鴢",
"yáo":"爻尧匋尭肴垚姚峣恌轺倄烑珧皐窕窑铫隃傜堯揺殽谣軺嗂媱徭愮搖摇滧猺遙遥僥摿暚榣瑤瑶銚飖餆嶢嶤徺磘窯窰餚繇謡謠鎐鳐颻蘨邎顤鰩鱙",
"yǎo":"仸宎岆抭杳枖狕苭咬柼眑窅窈舀偠婹崾溔蓔榚闄騕齩鷕",
"yào":"怮穾药烄袎窔筄葯詏愮熎瘧覞靿樂獟箹鹞薬鼼曜燿艞藥矅耀纅鷂讑",
"ye":"亪",
"yē":"吔耶倻椰暍歋窫噎潱擨蠮",
"yé":"爷耶峫捓揶铘爺瑘釾鋣鎁",
"yě":"也冶埜野嘢漜壄",
"yè":"业曳页曵邺夜抴亱拽枼洂頁捙晔枽烨液焆谒堨揲殗腋葉墷楪業煠痷馌僷曅燁璍擖擛曄皣瞱緤鄴靥嶪嶫澲謁餣擫曗瞸鍱擪爗礏鎑饁鵺鐷靨驜瓛鸈",
"yi":"弬",
"yī":"一乊弌辷衤伊衣医吚壱依祎咿洢悘渏猗畩郼铱壹揖蛜禕嫛漪稦銥嬄撎噫夁瑿鹥繄檹毉醫黟譩鷖黳",
"yí":"乁仪匜圯夷彵迆冝宐杝沂诒侇宜怡沶狏狋迤迱饴咦姨峓恞拸柂洟珆瓵荑贻迻宧巸扅栘桋眙胰袘貤痍移萓釶椬羠蛦詒貽遗媐暆椸煕誃跠頉颐飴儀熪箷遺嶬彛彜螔頥頤寲嶷簃顊鮧鴺彞彝謻鏔籎觺讉",
"yǐ":"乚乛乙已以扡迆钇佁攺矣苡叕苢迤迱庡舣蚁釔倚扆笖逘酏偯猗崺攲敧旑鈘鉯鳦裿旖輢嬟敼螘檥礒艤蟻顗轙齮",
"yì":"乂义亿弋刈忆艺仡匇肊艾议阣亦伇屹异忔芅伿佚劮呓坄役抑杙耴苅译邑佾呭呹妷峄怈怿易枍欥泆炈秇绎衪诣驿俋奕帟帠弈昳枻浂玴疫羿轶唈垼悒挹栺栧欭浥浳益袘袣谊貤勚埶埸悘悥掜殹異羛翊翌萟訳訲豙豛逸釴隿幆敡晹棭殔湙焲焬蛡詍跇軼鄓鈠骮亄兿嗌意溢獈痬睪竩缢義肄裔裛詣勩嫕廙榏潩瘗膉蓺蜴駅億槸毅熠熤熼瘞篒誼镒鹝鹢黓儗劓圛墿嬑嶧憶懌曀殪澺燚瘱瞖穓縊艗薏螠褹寱懝斁曎檍歝燡燱翳翼臆貖鮨癔藝藙贀鎰镱繶繹豷霬鯣鶃鶂鶍瀷蘙議譯醳醷饐囈鐿鷁鷊懿襼驛鷧虉鸃鷾讛齸",
"yīn":"囙因阥阴侌垔姻洇茵荫音骃栶欭氤陰凐秵裀铟陻隂喑堙婣愔湮筃絪歅溵禋蒑蔭慇瘖銦磤緸鞇諲霒駰噾濦闉霠齗韾",
"yín":"冘乑伒吟圻犾苂斦烎垠泿圁峾狺珢荶訔訚唫婬寅崟崯淫訡银鈝龂滛碒鄞夤蔩銀龈噖殥璌誾嚚檭蟫霪齦鷣",
"yǐn":"廴尹引吲饮粌蚓硍赺淾鈏飲隠靷飮朄輑磤趛檃瘾隱嶾濥縯螾檼蘟櫽癮讔",
"yìn":"廴印茚洕胤荫垽梀堷湚猌飲廕隠飮窨酳慭癊憗憖隱鮣懚",
"yīng":"応旲英柍荥偀桜珱莺啨婴媖愥渶绬朠楧焽焸煐瑛嫈碤锳嘤撄甇緓缨罂蝧賏樱璎噟罃褮霙鴬鹦嬰應膺韺甖鹰鶑鶧嚶孆孾攖瀴罌蘡譍櫻瓔礯譻鶯鑍纓蠳鷪軈鷹鸎鸚",
"yíng":"夃盁迎茔盈荧浧耺莹営桯萤萦营蛍溁溋萾僌塋嵤楹滢蓥滎潆熒蝇瑩禜蝿嬴營縈螢濙濚濴藀覮謍赢瀅爃蠅鎣巆攍瀛瀠瀯櫿贏灐籝灜籯",
"yǐng":"矨郢浧梬颍颕颖摬影潁瘿穎頴覮巊廮瀴鐛癭",
"yìng":"応映眏暎硬媵膡鞕應瀴鱦",
"yo":"喲",
"yō":"唷喲",
"yōng":"拥痈邕庸傭嗈鄘雍墉嫞慵滽槦牅牗銿噰壅擁澭郺镛臃癕雝鏞鳙廱灉饔鱅鷛癰",
"yóng":"喁揘颙顒鰫",
"yǒng":"永甬咏怺泳俑勈勇栐埇悀柡恿惥愑湧硧詠塎嵱彮愹蛹慂踊鲬噰澭踴鯒",
"yòng":"用苚砽蒏醟",
"yōu":"优妋忧攸呦怮泑幽峳浟逌悠羪麀滺憂優鄾嚘懮瀀獶櫌纋耰獿",
"yóu":"尢冘尤由甴汼沋犹邮怞油肬怣斿柚疣庮秞莜莤莸郵铀偤蚰訧逰揂游猶遊鱿楢猷鈾鲉輏駀蕕蝣魷輶鮋繇櫾",
"yǒu":"友丣卣苃酉羑栯莠梄聈铕湵楢禉蜏銪槱牖牗黝懮",
"yòu":"又右幼佑佦侑孧泑狖哊囿姷宥峟柚牰祐诱迶唀梎痏蚴亴貁釉酭誘鼬櫾",
"yū":"込扜扝纡迃迂穻陓紆唹淤盓瘀箊",
"yú":"丂亐于邘伃余妤扵杅欤玗玙於盂臾衧鱼乻俞兪捓禺竽舁茰虶娛娯娪娱桙狳谀酑馀渔萸釪隃隅雩魚堣堬婾媀媮崳嵎嵛揄楰渝湡畬腴萮逾骬愚楡榆歈牏瑜艅虞觎漁睮窬舆褕歶羭蕍蝓諛雓餘魣嬩懙澞覦踰歟璵螸輿鍝謣髃鮽旟籅騟鯲蘛轝鰅鷠鸆齵",
"yǔ":"伛宇屿羽穻俁俣挧禹圄祤偊匬圉庾敔鄅斞萭傴寙楀瑀瘐與語窳頨龉噳嶼懙貐斔穥麌齬",
"yù":"肀玉驭圫聿芌芋吾妪忬汩灹饫欥育郁俞昱狱禺秗茟俼叞峪彧栯浴砡钰预域堉悆惐捥欲淢淯痏粖翑袬谕逳阈喅喩喻媀寓庽御棛棜棫焴琙琟矞硢硲裕遇飫馭鹆奧愈滪煜稢罭艈蒮蓣誉鈺預僪嫗嶎戫毓澚獄瘉緎蜟蜮語輍銉隩慾潏熨稶蓹薁豫遹鋊鳿澦燏燠蕷藇諭錥閾鴧鴪鴥儥礇禦魊鹬癒礖礜篽醧鵒櫲饇蘌譽鐭霱雤欎驈鬻籞鱊鷸鸒欝軉鬰鬱灪籲爩",
"yuān":"夗囦肙鸢剈冤弲悁眢鸳寃涴渆渁渊渕惌淵葾棩蒬蜎裷鹓箢鳶蜵駌鋺鴛嬽鵷灁鼘鼝",
"yuán":"元円贠邧园妧沅芫杬茒垣爰貟原員圆笎蚖袁厡酛傆喛圎媛援湲猨缘鈨鼋園圓塬媴嫄楥溒源猿蒝榞榬辕緣縁蝝蝯褤魭圜橼羱薗螈黿謜轅鎱櫞邍騵鶢鶰厵",
"yuǎn":"盶逺遠薳鋺",
"yuàn":"夗妴苑怨院垸衏傆媛掾瑗禐愿裫褑噮願",
"yuē":"曰曱扚約啘箹矱",
"yuě":"哕噦",
"yuè":"月戉兊刖兌妜岄抈礿岳枂泧玥恱栎哾悅悦蚏蚎軏钺阅捳跀跃粤越鈅楽粵鉞說説樂閲閱嬳樾篗髺嶽臒龠擽矆櫟籆瀹蘥黦爚禴趯躍籥鑰鸑籰鸙",
"yūn":"涒缊蒀暈氲煴蒕氳熅煾奫緼蝹縕赟馧贇",
"yún":"云勻匀伝囩妘抣沄纭芸昀畇眃秐貟郧員涢紜耘耺鄖雲愪溳筠筼蒷熉澐蕓鋆橒篔縜",
"yǔn":"允阭夽抎狁玧陨荺殒喗鈗隕煴殞熅馻磒賱霣齫齳",
"yùn":"孕贠运枟郓恽貟員菀鄆酝傊惲愠缊運慍暈榅煇腪韫韵褞熨緷緼蕰蕴縕薀醖醞餫藴鞰韗韞蘊韻",
"zā":"帀匝沞迊咂拶桚紥紮鉔噈魳臜臢",
"zá":"杂沯砸偺喒韴雑襍雜囃囋囐雥",
"zǎ":"咋偺喒",
"zāi":"災灾甾哉栽烖畠菑渽溨睵賳",
"zǎi":"宰崽",
"zài":"再在扗抂洅傤載酨儎縡",
"zān":"兂撍糌橵篸簪簮鵤鐕鐟",
"zán":"偺喒",
"zǎn":"拶昝桚寁揝噆撍儧攅儹攢趱趲",
"zàn":"暂暫賛赞錾鄼濽蹔酂瓉贊鏩鏨瓒酇囋灒讃瓚禶穳襸讚饡",
"zāng":"匨牂羘赃賍臧賘贓髒贜",
"zǎng":"驵駔",
"zàng":"奘弉脏塟葬臧蔵銺臓臟",
"zāo":"傮遭糟蹧醩",
"záo":"凿鑿",
"zǎo":"早枣栆蚤棗璅澡璪薻藻",
"zào":"灶皁皂唣唕造梍喿慥煰艁噪簉燥竃竈譟趮躁",
"zé":"则択沢咋泎责迮則唶啧帻笮舴責溭滜睪矠飵嘖嫧幘箦蔶樍歵諎赜擇澤皟瞔簀耫礋襗謮賾蠌灂齚齰鸅",
"zè":"仄庂汄昃昗捑側崱稄",
"zéi":"贼戝賊鲗蠈鰂鱡",
"zēn":"撍",
"zěn":"怎",
"zèn":"谮譖",
"zēng":"曽増鄫增憎缯橧璔縡矰磳竲罾繒譄鱛",
"zěng":"",
"zèng":"锃綜缯鋥熷甑赠繒鬵贈囎",
"zi":"嗭",
"zī":"孖孜甾茊兹呲咨姕姿茲栥玆畠紎赀资崰淄秶缁菑谘赼嗞孳嵫椔湽滋粢葘辎鄑孶禌觜訾貲資趑锱稵緕緇鈭镃龇輜鼒澬薋諮趦輺錙髭鲻鍿鎡璾頾頿鯔鶅齍纃鰦齜",
"zí":"蓻",
"zǐ":"子吇芓姉姊杍沝矷秄胏呰秭籽耔茈虸笫梓釨啙紫滓訿榟橴",
"zì":"字自芓秄洓茡荢倳剚恣牸渍眦眥菑胔胾漬",
"zōng":"宗枞倧骔堫嵏嵕惾棕猣腙葼朡椶潈稯綜緃樅熧緵翪蝬踨踪磫繌鍐豵蹤騌鬃騣鬉鬷鯮鯼鑁",
"zǒng":"总倊偬捴惣揔搃焧傯蓗嵸摠潀稯総熜緫縂燪縱總",
"zòng":"昮疭從猔碂粽潨糉緵瘲縦縱繌糭",
"zōu":"邹驺诹郰陬掫菆棸棷鄒箃緅諏鄹鲰鯫黀騶齱齺",
"zǒu":"赱走搊鯐",
"zòu":"奏揍媰楱",
"zū":"怚柤租菹葅蒩",
"zú":"卆足倅哫崒崪族椊稡箤踤镞鎐鏃",
"zǔ":"诅阻组俎柤爼珇祖唨組詛靻鎺",
"zù":"",
"zuān":"鉆劗躜鑚躦鑽",
"zuǎn":"繤缵纂纉籫纘",
"zuàn":"揝篹賺攥",
"zuī":"厜朘嗺樶蟕纗",
"zuí":"",
"zuǐ":"咀觜嶊嘴噿濢璻",
"zuì":"冣栬絊酔晬最祽睟稡罪辠槜酻蕞醉嶵檇鋷錊檌欈",
"zūn":"尊噂墫嶟遵樽繜罇鶎鐏鳟鱒鷷",
"zǔn":"僔撙繜譐",
"zùn":"拵捘栫袸銌瀳",
"zuo":"咗",
"zuō":"嘬穝",
"zuó":"苲昨柮秨莋捽笮稓筰鈼",
"zuǒ":"左佐繓",
"zuò":"作坐阼岝岞怍侳柞祚胙唑座袏做葄葃酢蓙飵諎糳",
"zhā":"吒咋抯挓柤査哳紥偧紮揸渣楂飵劄摣潳皶樝觰皻譇齄齇",
"zhá":"札甴軋闸剳蚻铡喋煠牐閘劄箚霅耫鍘譗",
"zhǎ":"厏拃苲眨砟鲊鲝諎鮓鮺",
"zhà":"乍吒灹诈怍咤奓柞宱痄蚱喥溠詐搾鲊榨鮓醡",
"zhāi":"亝哜夈粂捚斋側斎摘榸齊嚌擿齋",
"zhái":"厇宅翟擇檡",
"zhǎi":"厏抧窄鉙",
"zhài":"责债砦責債寨瘵",
"zhān":"岾怗枬沾毡旃栴粘蛅飦惉詀趈詹閚谵鳽噡嶦薝邅霑氈氊瞻覱鹯旜譫饘鳣驙魙鱣鸇",
"zhán":"讝",
"zhǎn":"斩飐展盏斬琖搌盞嶃嶄榐辗颭嫸醆橏輾皽黵",
"zhàn":"佔战栈桟站偡绽菚嵁棧湛戦碊僝綻嶘戰虥虦覱轏譧欃蘸驏",
"zhāng":"弡张張章傽鄣嫜彰慞漳獐粻蔁遧暲樟璋餦蟑鏱騿鱆麞",
"zhǎng":"仉仧兏長掌漲幥礃鞝",
"zhàng":"丈仗扙帐杖胀账粀帳涱脹痮障墇嶂幛漲賬瘬瘴瞕",
"zhāo":"佋钊妱巶招昭炤釗啁釽鉊鳭駋鍣皽",
"zháo":"",
"zhǎo":"爫找沼菬瑵",
"zhào":"兆诏枛垗炤狣赵笊肁啅旐棹罀詔照罩箌肈肇趙曌濯燳鮡櫂瞾羄",
"zhe":"嗻",
"zhē":"嗻嫬遮螫",
"zhé":"乇厇扸杔歽矺砓籷虴哲埑粍袩啠悊晢晣辄喆棏聑蛰詟搩蜇谪馲摺輒慹磔輙銸辙蟄嚞謫謺鮿轍讁讋",
"zhě":"者乽啫锗赭踷褶鍺襵",
"zhè":"柘浙這淛嗻蔗樜鹧蟅鷓",
"zhèi":"",
"zhēn":"贞针侦侲帧枮浈珎珍胗貞帪桢眞真砧祯針偵酙寊幀揕湞葴遉嫃搸斟椹楨溱獉甄禎蒖蓁鉁榛槙殝瑧碪禛潧箴樼澵臻薽錱轃鍼籈鱵",
"zhén":"",
"zhěn":"诊抮枕姫弫昣轸屒畛疹眕袗紾聄萙竧裖覙診軫嫃缜槙稹駗縝縥辴鬒黰",
"zhèn":"圳阵纼甽侲挋陣鸩振朕栚紖桭眹赈塦揕絼榐瑱誫賑鋴镇震鴆鎮鎭",
"zhēng":"凧争佂姃征怔爭糽埩峥炡狰烝眐脀钲埥崝崢掙猙睁聇铮媜揁筝徰睜蒸踭鉦徴箏綪錚徵篜鬇癥鏳",
"zhěng":"氶抍糽拯掟晸愸撜整",
"zhèng":"氶证诤郑政徎钲掙幁証塣諍靕鄭憕鴊證",
"zhī":"之支卮汁芝巵汥呮泜肢栀祗秓胑胝衼倁栺疷祬脂隻梔菭椥臸搘稙綕榰蜘馶憄鳷鴲織鼅蘵",
"zhí":"执侄妷直秇姪郦値值聀釞埴執淔职戠植犆禃絷臷跖瓡摕摭馽嬂慹漐潪踯樴膱縶職蟙蹠軄躑",
"zhǐ":"夂止凪劧旨阯坁址帋扺汦沚纸芷坧抧杫祇祉茋咫恉指枳洔砋秖衹轵淽疻紙蚔訨趾軹黹禔筫絺酯墌徴徵槯藢襧",
"zhì":"至芖坁志忮扻豸制厔垁帙帜斦治炙质迣郅俧峙庢庤挃柣栉洷祑陟娡徏挚捗晊桎歭狾秩致袟贽轾乿偫剬徝掷梽楖猘畤痓痔眰秲秷窒紩翐袠觗貭铚鸷傂崻彘智滞痣蛭骘寘廌搱滍稚筫置跱輊锧雉墆滯潌疐瘈聜製覟誌銍幟憄摨摯潪熫稺膣觯質踬銴鋕擳旘瀄璏緻隲駤鴙儨劕懥擲擿櫛穉螲懫織贄櫍瓆觶騭鯯礩豑鶨騺驇躓鷙鑕豒",
"zhōng":"夂伀汷刣妐彸忪忠泈炂终柊盅衳钟舯衷終鈡幒蔠蜙锺銿螤鴤螽鍾斔鼨蹱鐘籦",
"zhǒng":"肿冢喠尰塚歱煄腫瘇種徸踵穜",
"zhòng":"仲众妕狆祌茽衶蚛偅眾堹媑筗衆種緟諥",
"zhōu":"州舟诌侜周洲炿诪烐珘辀郮啁婤徟掫淍矪週鸼喌赒輈翢銂賙輖霌駲嚋盩謅鵃騆譸",
"zhóu":"妯軸碡",
"zhǒu":"肘帚疛胕菷晭睭箒鯞",
"zhòu":"纣伷呪咒宙绉冑咮昼紂胄荮皱酎晝粙椆葤詋軸甃僽皺駎噣縐繇薵骤籀籕籒驟",
"zhū":"侏诛邾洙茱株珠诸猪硃秼袾铢絑蛛誅跦槠潴蕏蝫銖橥諸豬駯鮢鴸瀦藸鼄櫧櫫鯺蠩",
"zhú":"朮竹竺炢笁茿烛窋逐笜舳逫瘃蓫敱磩築篴斀燭蠋躅鱁劚孎灟斸曯欘爥蠾钃",
"zhǔ":"丶主劯宔拄砫罜陼帾渚煑煮詝褚嘱濐燝麈瞩屬囑鸀矚",
"zhù":"伫佇住纻芧苎坾拀杼注苧贮迬驻乼壴柱柷殶炷祝疰眝砫祩竚莇紵紸羜蛀尌嵀註貯跓軴铸筯鉒飳馵嗻墸箸翥樦澍鋳駐築篫麆簗櫡鑄",
"zhuā":"抓挝撾檛膼簻髽",
"zhuǎ":"爫",
"zhuāi":"拽",
"zhuǎi":"跩",
"zhuài":"拽睉",
"zhuān":"专叀専恮砖耑專剸鄟塼嫥漙瑼甎磗膞颛磚諯篿蟤顓鱄",
"zhuǎn":"孨転膞竱轉",
"zhuàn":"灷啭転堟蒃傳瑑腞僎僝赚撰篆馔篹縳襈賺簨贃譔饌囀籑",
"zhuāng":"妆庄妝庒荘娤桩莊梉湷粧装裝樁糚",
"zhuǎng":"奘",
"zhuàng":"壮壯状狀壵焋僮漴撞戅戆戇",
"zhuī":"隹骓锥錐騅鵻",
"zhuǐ":"沝",
"zhuì":"坠笍奞娷缀隊惴甀缒腏畷硾膇墜綴赘縋諈醊錣礈贅鑆",
"zhūn":"圫宒忳迍肫窀谆啍諄衠",
"zhǔn":"准埻凖準稕綧",
"zhùn":"旽訰稕綧",
"zhuō":"拙炪倬捉桌梲棁涿淖棳棹焯窧槕穛鐯穱",
"zhuó":"圴彴汋犳灼卓叕妰茁斫浊丵剢捔浞烵诼酌啄啅娺聉斱斮晫椓琸硺窡罬蓔墌撯擆斲禚劅諁諑趠鋜噣濁燋篧擢斀斵濯藋櫡謶镯繳鵫灂蠗鐲籗鷟蠿籱",
"zhuò":"",
"chǎng,ān,hàn": "厂",
"dīng,zhēng": "丁",
"bǔ,bo": "卜",
"jǐ,jī": "几",
"le,liǎo": "了",
"gān,gàn": "干",
"dà,dài,tài": "大",
"yǔ,yù,yú": "与",
"shàng,shǎng": "上",
"wàn,mò": "万",
"gè,gě": "个各",
"me,mó,ma,yāo": "么",
"guǎng,ān": "广",
"wáng,wú": "亡",
"nǚ,rǔ": "女",
"chā,chá,chǎ": "叉",
"wáng,wàng": "王",
"fū,fú": "夫",
"zhā,zā,zhá": "扎",
"bù,fǒu": "不",
"qū,ōu": "区",
"chē,jū": "车",
"qiè,qiē": "切",
"wǎ,wà": "瓦",
"tún,zhūn": "屯",
"shǎo,shào": "少",
"zhōng,zhòng": "中",
"nèi,nà": "内",
"jiàn,xiàn": "见",
"cháng,zhǎng": "长",
"shén,shí": "什",
"piàn,piān": "片",
"pú,pū": "仆",
"huà,huā": "化",
"chóu,qiú": "仇",
"zhuǎ,zhǎo": "爪",
"jǐn,jìn": "仅",
"fù,fǔ": "父",
"cóng,zòng": "从",
"fēn,fèn": "分",
"shì,zhī": "氏",
"fēng,fěng": "风",
"gōu,gòu": "勾",
"liù,lù": "六",
"dǒu,dòu": "斗",
"wèi,wéi": "为",
"chǐ,chě": "尺",
"yǔ,yú": "予",
"dǎ,dá": "打",
"zhèng,zhēng": "正症挣",
"bā,pá": "扒",
"jié,jiē": "节结",
"shù,shú,zhú": "术",
"kě,kè": "可",
"shí,dàn": "石",
"kǎ,qiǎ": "卡",
"běi,bèi": "北",
"zhàn,zhān": "占",
"qiě,jū": "且",
"yè,xié": "叶",
"hào,háo": "号",
"zhī,zhǐ": "只",
"dāo,tāo": "叨",
"zǎi,zǐ,zī": "仔",
"lìng,líng,lǐng": "令",
"lè,yuè": "乐",
"jù,gōu": "句",
"chù,chǔ": "处",
"tóu,tou": "头",
"níng,nìng,zhù": "宁",
"zhào,shào": "召",
"fā,fà": "发",
"tái,tāi": "台苔",
"káng,gāng": "扛",
"dì,de": "地",
"sǎo,sào": "扫",
"chǎng,cháng": "场",
"pǔ,pò,pō,piáo": "朴",
"guò,guo,guō": "过",
"yā,yà": "压",
"yǒu,yòu": "有",
"kuā,kuà": "夸",
"xié,yá,yé,yú,xú": "邪",
"jiá,jiā,gā,xiá": "夹",
"huà,huá": "划",
"dāng,dàng": "当",
"tù,tǔ": "吐",
"xià,hè": "吓",
"tóng,tòng": "同",
"qū,qǔ": "曲",
"ma,má,mǎ": "吗",
"qǐ,kǎi": "岂",
"zhū,shú": "朱",
"chuán,zhuàn": "传",
"xiū,xǔ": "休",
"rèn,rén": "任",
"huá,huà,huā": "华",
"jià,jiè,jie": "价",
"fèn,bīn": "份",
"yǎng,áng": "仰",
"xiě,xuè": "血",
"sì,shì": "似",
"háng,xíng": "行",
"huì,kuài": "会",
"hé,gě": "合",
"chuàng,chuāng": "创",
"chōng,chòng": "冲",
"qí,jì,zī,zhāi": "齐",
"yáng,xiáng": "羊",
"bìng,bīng": "并",
"hàn,hán": "汗",
"tāng,shāng": "汤",
"xīng,xìng": "兴",
"xǔ,hǔ": "许",
"lùn,lún": "论",
"nà,nǎ,nèi,nā": "那",
"jìn,jǐn": "尽",
"sūn,xùn": "孙",
"xì,hū": "戏",
"hǎo,hào": "好",
"tā,jiě": "她",
"guān,guàn": "观冠",
"hóng,gōng": "红",
"xiān,qiàn": "纤",
"jì,jǐ": "纪济",
"yuē,yāo": "约",
"nòng,lòng": "弄",
"yuǎn,yuàn": "远",
"huài,pēi,pī,péi": "坏",
"zhé,shé,zhē": "折",
"qiǎng,qiāng,chēng": "抢",
"ké,qiào": "壳",
"fāng,fáng": "坊",
"bǎ,bà": "把",
"gān,gǎn": "杆",
"sū,sù": "苏",
"gàng,gāng": "杠",
"gèng,gēng": "更",
"lì,lí": "丽",
"hái,huán": "还",
"fǒu,pǐ": "否",
"xiàn,xuán": "县",
"zhù,chú": "助",
"ya,yā": "呀",
"chǎo,chāo": "吵",
"yuán,yún,yùn": "员",
"ba,bā": "吧",
"bié,biè": "别",
"dīng,dìng": "钉",
"gū,gù": "估",
"hé,hē,hè": "何",
"tǐ,tī,bèn": "体",
"bó,bǎi,bà": "伯",
"yòng,yōng": "佣",
"fó,fú,bì,bó": "佛",
"dù,dǔ": "肚",
"guī,jūn,qiū": "龟",
"jiǎo,jué": "角",
"tiáo,tiāo": "条",
"xì,jì": "系",
"yìng,yīng": "应",
"zhè,zhèi": "这",
"jiān,jiàn": "间监",
"mēn,mèn": "闷",
"dì,tì,tuí": "弟",
"shā,shà": "沙",
"shà,shā": "煞",
"méi,mò": "没",
"shěn,chén": "沈",
"shí,zhì": "识",
"niào,suī": "尿",
"wěi,yǐ": "尾",
"ē,ā": "阿",
"jìn,jìng": "劲",
"zòng,zǒng": "纵",
"wén,wèn": "纹",
"mǒ,mò,mā": "抹",
"dān,dàn,dǎn": "担",
"chāi,cā": "拆",
"jū,gōu": "拘",
"lā,lá": "拉",
"bàn,pàn": "拌",
"zé,zhái": "择",
"qí,jī": "其奇",
"ruò,rě": "若",
"píng,pēng": "苹",
"zhī,qí": "枝",
"guì,jǔ": "柜",
"sàng,sāng": "丧",
"cì,cī": "刺",
"yǔ,yù": "雨语",
"bēn,bèn": "奔",
"qī,qì": "妻",
"zhuǎn,zhuàn,zhuǎi": "转",
"xiē,suò": "些",
"ne,ní": "呢",
"tiě,tiē,tiè,": "帖",
"lǐng,líng": "岭",
"zhī,zhì": "知织",
"hé,hè,huó,huò,hú": "和",
"gòng,gōng": "供共",
"wěi,wēi": "委",
"cè,zè,zhāi": "侧",
"pò,pǎi": "迫",
"de,dì,dí": "的",
"cǎi,cài": "采",
"fú,fù": "服",
"dǐ,de": "底",
"jìng,chēng": "净",
"juàn,juǎn": "卷",
"quàn,xuàn": "券",
"dān,shàn,chán": "单",
"qiǎn,jiān": "浅",
"xiè,yì": "泄",
"pō,bó": "泊",
"pào,pāo": "泡",
"ní,nì": "泥",
"zé,shì": "泽",
"kōng,kòng,kǒng": "空",
"láng,làng": "郎",
"xiáng,yáng": "详",
"lì,dài": "隶",
"shuā,shuà": "刷",
"jiàng,xiáng": "降",
"cān,shēn,cēn,sān": "参",
"dú,dài": "毒",
"kuà,kū": "挎",
"dǎng,dàng": "挡",
"kuò,guā": "括",
"shí,shè": "拾",
"tiāo,tiǎo": "挑",
"shèn,shén": "甚",
"xiàng,hàng": "巷",
"nán,nā": "南",
"xiāng,xiàng": "相",
"chá,zhā": "查",
"bǎi,bó,bò": "柏",
"yào,yāo": "要",
"yán,yàn": "研",
"qì,qiè": "砌",
"bèi,bēi": "背",
"shěng,xǐng": "省",
"xiāo,xuē": "削",
"hǒng,hōng,hòng": "哄",
"mào,mò": "冒",
"yǎ,yā": "哑",
"sī,sāi": "思",
"mǎ,mā,mà": "蚂",
"huá,huā": "哗",
"yè,yàn,yān": "咽",
"zán,zǎ": "咱",
"hā,hǎ,hà": "哈",
"nǎ,něi,na,né": "哪",
"hāi,ké": "咳",
"gǔ,gū": "骨",
"gāng,gàng": "钢",
"yào,yuè": "钥",
"kàn,kān": "看",
"zhòng,zhǒng,chóng": "种",
"biàn,pián": "便",
"zhòng,chóng": "重",
"xìn,shēn": "信",
"zhuī,duī": "追",
"dài,dāi": "待",
"shí,sì,yì": "食",
"mài,mò": "脉",
"jiāng,jiàng": "将浆",
"dù,duó": "度",
"qīn,qìng": "亲",
"chà,chā,chāi,cī": "差",
"zhà,zhá": "炸",
"pào,páo,bāo": "炮",
"sǎ,xǐ": "洒",
"xǐ,xiǎn": "洗",
"jué,jiào": "觉",
"biǎn,piān": "扁",
"shuō,shuì,yuè": "说",
"lǎo,mǔ": "姥",
"gěi,jǐ": "给",
"luò,lào": "络",
"zǎi,zài": "载",
"mái,mán": "埋",
"shāo,shào": "捎稍",
"dū,dōu": "都",
"ái,āi": "挨",
"mò,mù": "莫",
"è,wù,ě,wū": "恶",
"xiào,jiào": "校",
"hé,hú": "核",
"yūn,yùn": "晕",
"huàng,huǎng": "晃",
"ài,āi": "唉",
"ā,á,ǎ,à,a": "啊",
"bà,ba,pí": "罢",
"zuàn,zuān": "钻",
"qiān,yán": "铅",
"chéng,shèng": "乘",
"mì,bì": "秘泌",
"chēng,chèn,chèng": "称",
"dào,dǎo": "倒",
"tǎng,cháng": "倘",
"chàng,chāng": "倡",
"chòu,xiù": "臭",
"shè,yè,yì": "射",
"gē,gé": "胳搁",
"shuāi,cuī": "衰",
"liáng,liàng": "凉量",
"chù,xù": "畜",
"páng,bàng": "旁磅",
"zhǎng,zhàng": "涨",
"yǒng,chōng": "涌",
"qiāo,qiǎo": "悄",
"jiā,jia,jie": "迦家",
"dú,dòu": "读",
"shàn,shān": "扇",
"shān,shàn": "苫",
"bèi,pī": "被",
"tiáo,diào,zhōu": "调",
"bō,bāo": "剥",
"néng,nài": "能",
"nán,nàn,nuó": "难",
"pái,pǎi": "排",
"jiào,jiāo": "教",
"jù,jū": "据",
"zhù,zhuó,zhe": "著",
"jūn,jùn": "菌",
"lè,lēi": "勒",
"shāo,sào": "梢",
"fù,pì": "副",
"piào,piāo": "票",
"shèng,chéng": "盛",
"què,qiāo,qiǎo": "雀",
"chí,shi": "匙",
"mī,mí": "眯",
"la,lā": "啦",
"shé,yí": "蛇",
"lèi,léi,lěi": "累",
"zhǎn,chán": "崭",
"quān,juàn,juān": "圈",
"lóng,lǒng": "笼",
"dé,děi,de": "得",
"jiǎ,jià": "假",
"māo,máo": "猫",
"xuán,xuàn": "旋",
"zhe,zhuó,zháo,zhāo": "着",
"lǜ,shuài": "率",
"gài,gě,hé": "盖",
"lín,lìn": "淋",
"qú,jù": "渠",
"jiàn,jiān": "渐溅",
"hùn,hún": "混",
"sù,xiǔ,xiù": "宿",
"tán,dàn": "弹",
"yǐn,yìn": "隐",
"jǐng,gěng": "颈",
"lǜ,lù": "绿",
"qū,cù": "趋",
"tí,dī,dǐ": "提",
"jiē,qì": "揭",
"lǒu,lōu": "搂",
"qī,jī": "期",
"sàn,sǎn": "散",
"gě,gé": "葛",
"zhāo,cháo": "朝",
"luò,là,lào": "落",
"yǐ,yī": "椅",
"gùn,hùn": "棍",
"zhí,shi": "殖",
"xià,shà": "厦",
"liè,liě": "裂",
"jǐng,yǐng": "景",
"pēn,pèn": "喷",
"pǎo,páo": "跑",
"hē,hè,yè": "喝",
"pù,pū": "铺",
"zhù,zhú": "筑",
"dá,dā": "答",
"bǎo,bǔ,pù": "堡",
"ào,yù": "奥",
"fān,pān": "番",
"là,xī": "腊",
"gǎng,jiǎng": "港",
"céng,zēng": "曾",
"yú,tōu": "愉",
"qiáng,qiǎng,jiàng": "强",
"shǔ,zhǔ": "属",
"zhōu,yù": "粥",
"shè,niè": "摄",
"tián,zhèn": "填",
"méng,mēng,měng": "蒙",
"jìn,jīn": "禁",
"lù,liù": "碌",
"tiào,táo": "跳",
"é,yǐ": "蛾",
"jiě,jiè,xiè": "解",
"shù,shǔ,shuò": "数",
"liū,liù": "溜",
"sāi,sài,sè": "塞",
"pì,bì": "辟",
"fèng,féng": "缝",
"piě,piē": "撇",
"mó,mú": "模",
"bǎng,bàng": "榜",
"shang,cháng": "裳",
"xiān,xiǎn": "鲜",
"yí,nǐ": "疑",
"gāo,gào": "膏",
"piāo,piào,piǎo": "漂",
"suō,sù": "缩",
"qù,cù": "趣",
"sā,sǎ": "撒",
"tàng,tāng": "趟",
"héng,hèng": "横",
"mán,mén": "瞒",
"bào,pù": "暴",
"mó,mā": "摩",
"hú,hū,hù": "糊",
"pī,pǐ": "劈",
"yàn,yān": "燕",
"báo,bó,bò": "薄",
"mó,mò": "磨",
"jiǎo,zhuó": "缴",
"cáng,zàng": "藏",
"fán,pó": "繁",
"bì,bei": "臂",
"chàn,zhàn": "颤",
"jiāng,qiáng": "疆",
"jiáo,jué,jiào": "嚼",
"rǎng,rāng": "嚷",
"lù,lòu": "露",
"náng,nāng": "囊",
"hāng,bèn": "夯",
"āo,wā": "凹",
"féng,píng": "冯",
"xū,yù": "吁",
"lèi,lē": "肋",
"lūn,lún": "抡",
"jiè,gài": "芥",
"xīn,xìn": "芯",
"chā,chà": "杈",
"xiāo,xiào": "肖",
"zhī,zī": "吱",
"ǒu,ōu,òu": "呕",
"nà,nè": "呐",
"qiàng,qiāng": "呛",
"tún,dùn": "囤",
"kēng,háng": "吭",
"diàn,tián": "佃",
"sì,cì": "伺",
"diàn,tián,shèng": "甸",
"páo,bào": "刨",
"duì,ruì,yuè": "兑",
"kē,kě": "坷",
"tuò,tà,zhí": "拓",
"fú,bì": "拂",
"nǐng,níng,nìng": "拧",
"ào,ǎo,niù": "拗",
"kē,hē": "苛",
"yān,yǎn": "奄",
"hē,a,kē": "呵",
"gā,kā": "咖",
"jiǎo,yáo": "侥",
"chà,shā": "刹",
"nüè,yào": "疟",
"máng,méng": "氓",
"gē,yì": "疙",
"jǔ,jù": "沮",
"zú,cù": "卒",
"wǎn,yuān": "宛",
"mí,mǐ": "弥",
"qì,qiè,xiè": "契",
"xié,jiā": "挟",
"duò,duǒ": "垛",
"zhà,shān,shi,cè": "栅",
"bó,bèi": "勃",
"zhóu,zhòu": "轴",
"liē,liě,lié,lie": "咧",
"yo,yō": "哟",
"qiào,xiào": "俏",
"hóu,hòu": "侯",
"píng,bǐng": "屏",
"nà,nuó": "娜",
"pá,bà": "耙",
"qī,xī": "栖",
"jiǎ,gǔ": "贾",
"láo,lào": "唠",
"bàng,bèng": "蚌",
"gōng,zhōng": "蚣",
"li,lǐ,lī": "哩",
"juè,jué": "倔",
"yīn,yān,yǐn": "殷",
"wō,guō": "涡",
"lào,luò": "烙",
"niǎn,niē": "捻",
"yè,yē": "掖",
"chān,xiān,càn,shǎn": "掺",
"dǎn,shàn": "掸",
"fēi,fěi": "菲",
"qián,gān": "乾",
"shuò,shí": "硕",
"luō,luó,luo": "啰",
"hǔ,xià": "唬",
"dāng,chēng": "铛",
"xiǎn,xǐ": "铣",
"jiǎo,jiáo": "矫",
"kuǐ,guī": "傀",
"jì,zhài": "祭",
"tǎng,chǎng": "淌",
"chún,zhūn": "淳",
"wèi,yù": "尉",
"duò,huī": "堕",
"chuò,chāo": "绰",
"bēng,běng,bèng": "绷",
"zōng,zèng": "综",
"zhuó,zuó": "琢",
"chuǎi,chuài,chuāi,tuán,zhuī": "揣",
"péng,bāng": "彭",
"zhuī,chuí": "椎",
"léng,lēng,líng": "棱",
"qiào,qiáo": "翘",
"zhā,chā": "喳",
"há,gé": "蛤",
"qiàn,kàn": "嵌",
"yān,ā": "腌",
"dūn,duì": "敦",
"kuì,huì": "溃",
"sāo,sǎo": "骚",
"kǎi,jiē": "楷",
"pín,bīn": "频",
"liú,liù": "馏",
"nì,niào": "溺",
"jiǎo,chāo": "剿",
"áo,āo": "熬",
"màn,wàn": "蔓",
"chá,chā": "碴",
"xūn,xùn": "熏",
"da,dá": "瘩",
"tuì,tùn": "褪",
"liáo,liāo": "撩",
"cuō,zuǒ": "撮",
"cháo,zhāo": "嘲",
"hēi,mò": "嘿",
"zhuàng,chuáng": "幢",
"jī,qǐ": "稽",
"biě,biē": "瘪",
"liáo,lào,lǎo": "潦",
"chéng,dèng": "澄",
"lèi,léi": "擂",
"mò,má": "蟆",
"liáo,liǎo": "燎",
"liào,liǎo": "瞭",
"sào,sāo": "臊",
"mí,méi": "糜",
"huò,huō,huá": "豁",
"pù,bào": "瀑",
"zǎn,cuán": "攒",
"bò,bǒ": "簸",
"bó,bù": "簿",
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assign = __webpack_require__(88);
// XXX: Symbol when web support.
const PINYIN_STYLE = {
  NORMAL: 0,       // 普通风格，不带声调。
  TONE: 1,         // 标准风格，声调在韵母的第一个字母上。
  TONE2: 2,        // 声调以数字形式在拼音之后，使用数字 0~4 标识。
  TO3NE: 5,        // 声调以数字形式在声母之后，使用数字 0~4 标识。
  INITIALS: 3,     // 仅需要声母部分。
  FIRST_LETTER: 4, // 仅保留首字母。
};
const DEFAULT_OPTIONS = {
  style: PINYIN_STYLE.TONE, // 风格
  segment: false,           // 分词。
  heteronym: false,         // 多音字
};

// 声母表。
const INITIALS = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",");
// 韵母表。
//const FINALS = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
// 带声调字符。
const PHONETIC_SYMBOL = __webpack_require__(89);
const RE_PHONETIC_SYMBOL = new RegExp("([" + Object.keys(PHONETIC_SYMBOL).join("") + "])", "g");
const RE_TONE2 = /([aeoiuvnm])([0-4])$/;

/*
 * 格式化拼音为声母（Initials）形式。
 * @param {String}
 * @return {String}
 */
function initials(pinyin) {
  for (let i = 0, l = INITIALS.length; i < l; i++){
    if (pinyin.indexOf(INITIALS[i]) === 0) {
      return INITIALS[i];
    }
  }
  return "";
}

class Pinyin {
  constructor (dict) {
    this._dict = dict;
  }

  // @param {String} hans 要转为拼音的目标字符串（汉字）。
  // @param {Object} options, 可选，用于指定拼音风格，是否启用多音字。
  // @return {Array} 返回的拼音列表。
  convert (hans, options) {

    if (typeof hans !== "string") {
      return [];
    }

    options = assign({}, DEFAULT_OPTIONS, options);

    let pys = [];
    let nohans = "";

    for(let i = 0, firstCharCode, words, l = hans.length; i < l; i++){

      words = hans[i];
      firstCharCode = words.charCodeAt(0);

      if(this._dict[firstCharCode]){

        // ends of non-chinese words.
        if(nohans.length > 0){
          pys.push([nohans]);
          nohans = ""; // reset non-chinese words.
        }

        pys.push(this.single_pinyin(words, options));

      }else{
        nohans += words;
      }
    }

    // 清理最后的非中文字符串。
    if(nohans.length > 0){
      pys.push([nohans]);
      nohans = ""; // reset non-chinese words.
    }
    return pys;
  }

  // 单字拼音转换。
  // @param {String} han, 单个汉字
  // @return {Array} 返回拼音列表，多音字会有多个拼音项。
  single_pinyin (han, options) {

    if (typeof han !== "string") {
      return [];
    }
    if (han.length !== 1) {
      return this.single_pinyin(han.charAt(0), options);
    }

    let hanCode = han.charCodeAt(0);

    if (!this._dict[hanCode]) {
      return [han];
    }

    let pys = this._dict[hanCode].split(",");
    if(!options.heteronym){
      return [Pinyin.toFixed(pys[0], options.style)];
    }

    // 临时存储已存在的拼音，避免多音字拼音转换为非注音风格出现重复。
    let py_cached = {};
    let pinyins = [];
    for(let i = 0, py, l = pys.length; i < l; i++){
      py = Pinyin.toFixed(pys[i], options.style);
      if(py_cached.hasOwnProperty(py)){
        continue;
      }
      py_cached[py] = py;

      pinyins.push(py);
    }
    return pinyins;
  }

  /**
   * 格式化拼音风格。
   *
   * @param {String} pinyin TONE 风格的拼音。
   * @param {ENUM} style 目标转换的拼音风格。
   * @return {String} 转换后的拼音。
   */
  static toFixed (pinyin, style) {
    let tone = ""; // 声调。
    let first_letter;
    let py;
    switch(style){
    case PINYIN_STYLE.INITIALS:
      return initials(pinyin);

    case PINYIN_STYLE.FIRST_LETTER:
      first_letter = pinyin.charAt(0);
      if (PHONETIC_SYMBOL.hasOwnProperty(first_letter)) {
        first_letter = PHONETIC_SYMBOL[first_letter].charAt(0);
      }
      return first_letter;

    case PINYIN_STYLE.NORMAL:
      return pinyin.replace(RE_PHONETIC_SYMBOL, function($0, $1_phonetic){
        return PHONETIC_SYMBOL[$1_phonetic].replace(RE_TONE2, "$1");
      });

    case PINYIN_STYLE.TO3NE:
      return pinyin.replace(RE_PHONETIC_SYMBOL, function($0, $1_phonetic){
        return PHONETIC_SYMBOL[$1_phonetic];
      });

    case PINYIN_STYLE.TONE2:
      py = pinyin.replace(RE_PHONETIC_SYMBOL, function($0, $1){
        // 声调数值。
        tone = PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$2");

        return PHONETIC_SYMBOL[$1].replace(RE_TONE2, "$1");
      });
      return py + tone;

    case PINYIN_STYLE.TONE:
    default:
      return pinyin;
    }
  }

  /**
   * 比较两个汉字转成拼音后的排序顺序，可以用作默认的拼音排序算法。
   *
   * @param {String} hanA 汉字字符串 A。
   * @return {String} hanB 汉字字符串 B。
   * @return {Number} 返回 -1，0，或 1。
   */
  compare (hanA, hanB) {
    const pinyinA = this.convert(hanA, DEFAULT_OPTIONS);
    const pinyinB = this.convert(hanB, DEFAULT_OPTIONS);
    return String(pinyinA).localeCompare(String(pinyinB));
  }

  static get STYLE_NORMAL () {
    return PINYIN_STYLE.NORMAL;
  }
  static get STYLE_TONE () {
    return PINYIN_STYLE.TONE;
  }
  static get STYLE_TONE2 () {
    return PINYIN_STYLE.TONE2;
  }
  static get STYLE_TO3NE () {
    return PINYIN_STYLE.TO3NE;
  }
  static get STYLE_INITIALS () {
    return PINYIN_STYLE.INITIALS;
  }
  static get STYLE_FIRST_LETTER () {
    return PINYIN_STYLE.FIRST_LETTER;
  }
  static get DEFAULT_OPTIONS () {
    return DEFAULT_OPTIONS;
  }
}

module.exports = Pinyin;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// 带声调字符。
module.exports = {
  "ā": "a1",
  "á": "a2",
  "ǎ": "a3",
  "à": "a4",
  "ē": "e1",
  "é": "e2",
  "ě": "e3",
  "è": "e4",
  "ō": "o1",
  "ó": "o2",
  "ǒ": "o3",
  "ò": "o4",
  "ī": "i1",
  "í": "i2",
  "ǐ": "i3",
  "ì": "i4",
  "ū": "u1",
  "ú": "u2",
  "ǔ": "u3",
  "ù": "u4",
  "ü": "v0",
  "ǘ": "v2",
  "ǚ": "v3",
  "ǜ": "v4",
  "ń": "n2",
  "ň": "n3",
  "": "m2",
};


/***/ })
/******/ ]);