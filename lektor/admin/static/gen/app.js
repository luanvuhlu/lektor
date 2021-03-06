webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var loadTranslations = function loadTranslations() {
  var ctx = __webpack_require__(113);
  var rv = {};
  ctx.keys().forEach(function (key) {
    var langIdMatch = key.match(/([a-z]+)/);
    rv[langIdMatch[1]] = ctx(key);
  });
  return rv;
};

var i18n = {
  translations: loadTranslations(),

  currentLanguage: 'en',

  setLanguageFromLocale: function setLanguageFromLocale(locale) {
    if (locale) {
      var lang = locale.split(/[-_]/)[0].toLowerCase();
      if (this.translations[lang] !== undefined) {
        this.currentLanguage = lang;
      }
    }
  },
  trans: function trans(key) {
    var rv = void 0;
    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
      rv = key[i18n.currentLanguage];
      if (rv === undefined) {
        rv = key.en;
      }
      return rv;
    }
    return i18n.translations[i18n.currentLanguage][key] || key;
  }
};

exports.default = i18n;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slug = function slug(string, opts) {
  opts = opts || {};
  string = string.toString();
  if (typeof opts === 'string') {
    opts = { replacement: opts };
  }
  opts.mode = opts.mode || slug.defaults.mode;
  var defaults = slug.defaults.modes[opts.mode];
  ['replacement', 'multicharmap', 'charmap', 'remove'].forEach(function (key) {
    opts[key] = opts[key] || defaults[key];
  });
  if (typeof opts.symbols === 'undefined') {
    opts.symbols = defaults.symbols;
  }
  var lengths = [];
  Object.keys(opts.multicharmap).forEach(function (key) {
    var len = key.length;
    if (lengths.indexOf(len) === -1) {
      lengths.push(len);
    }
  });
  var result = '';

  var _loop = function _loop(_char, _i, l) {
    _char = string[_i];
    if (!lengths.some(function (len) {
      var str = string.substr(_i, len);
      if (opts.multicharmap[str]) {
        _i += len - 1;
        _char = opts.multicharmap[str];
        return true;
      } else return false;
    })) {
      if (opts.charmap[_char]) {
        _char = opts.charmap[_char];
      }
    }
    _char = _char.replace(/[^\w\s\-._~]/g, ''); // allowed
    if (opts.remove) _char = _char.replace(opts.remove, ''); // add flavour
    result += _char;
    char = _char;
    i = _i;
  };

  for (var char, i = 0, l = string.length; i < l; i++) {
    _loop(char, i, l);
  }
  result = result.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
  result = result.replace(/[-\s]+/g, opts.replacement); // convert spaces
  return result.replace(opts.replacement + '$', ''); // remove trailing separator
};

slug.defaults = {
  mode: 'pretty'
};

slug.multicharmap = slug.defaults.multicharmap = {
  '<3': 'love', '&&': 'and', '||': 'or', 'w/': 'with'

  // https://code.djangoproject.com/browser/django/trunk/django/contrib/admin/media/js/urlify.js
};slug.charmap = slug.defaults.charmap = {
  // latin
  'À': 'A',
  'Á': 'A',
  'Â': 'A',
  'Ã': 'A',
  'Ä': 'Ae',
  'Å': 'A',
  'Æ': 'AE',
  'Ç': 'C',
  'È': 'E',
  'É': 'E',
  'Ê': 'E',
  'Ë': 'E',
  'Ì': 'I',
  'Í': 'I',
  'Î': 'I',
  'Ï': 'I',
  'Ð': 'D',
  'Ñ': 'N',
  'Ò': 'O',
  'Ó': 'O',
  'Ô': 'O',
  'Õ': 'O',
  'Ö': 'Oe',
  'Ő': 'O',
  'Ø': 'O',
  'Ù': 'U',
  'Ú': 'U',
  'Û': 'U',
  'Ü': 'Ue',
  'Ű': 'U',
  'Ý': 'Y',
  'Þ': 'TH',
  'ß': 'ss',
  'à': 'a',
  'á': 'a',
  'â': 'a',
  'ã': 'a',
  'ä': 'ae',
  'å': 'a',
  'æ': 'ae',
  'ç': 'c',
  'è': 'e',
  'é': 'e',
  'ê': 'e',
  'ë': 'e',
  'ì': 'i',
  'í': 'i',
  'î': 'i',
  'ï': 'i',
  'ð': 'd',
  'ñ': 'n',
  'ò': 'o',
  'ó': 'o',
  'ô': 'o',
  'õ': 'o',
  'ö': 'oe',
  'ő': 'o',
  'ø': 'o',
  'ù': 'u',
  'ú': 'u',
  'û': 'u',
  'ü': 'ue',
  'ű': 'u',
  'ý': 'y',
  'þ': 'th',
  'ÿ': 'y',
  'ẞ': 'SS',
  // greek
  'α': 'a',
  'β': 'b',
  'γ': 'g',
  'δ': 'd',
  'ε': 'e',
  'ζ': 'z',
  'η': 'h',
  'θ': '8',
  'ι': 'i',
  'κ': 'k',
  'λ': 'l',
  'μ': 'm',
  'ν': 'n',
  'ξ': '3',
  'ο': 'o',
  'π': 'p',
  'ρ': 'r',
  'σ': 's',
  'τ': 't',
  'υ': 'y',
  'φ': 'f',
  'χ': 'x',
  'ψ': 'ps',
  'ω': 'w',
  'ά': 'a',
  'έ': 'e',
  'ί': 'i',
  'ό': 'o',
  'ύ': 'y',
  'ή': 'h',
  'ώ': 'w',
  'ς': 's',
  'ϊ': 'i',
  'ΰ': 'y',
  'ϋ': 'y',
  'ΐ': 'i',
  'Α': 'A',
  'Β': 'B',
  'Γ': 'G',
  'Δ': 'D',
  'Ε': 'E',
  'Ζ': 'Z',
  'Η': 'H',
  'Θ': '8',
  'Ι': 'I',
  'Κ': 'K',
  'Λ': 'L',
  'Μ': 'M',
  'Ν': 'N',
  'Ξ': '3',
  'Ο': 'O',
  'Π': 'P',
  'Ρ': 'R',
  'Σ': 'S',
  'Τ': 'T',
  'Υ': 'Y',
  'Φ': 'F',
  'Χ': 'X',
  'Ψ': 'PS',
  'Ω': 'W',
  'Ά': 'A',
  'Έ': 'E',
  'Ί': 'I',
  'Ό': 'O',
  'Ύ': 'Y',
  'Ή': 'H',
  'Ώ': 'W',
  'Ϊ': 'I',
  'Ϋ': 'Y',
  // turkish
  'ş': 's',
  'Ş': 'S',
  'ı': 'i',
  'İ': 'I',
  'ğ': 'g',
  'Ğ': 'G',
  // russian
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'h',
  'ц': 'c',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sh',
  'ъ': 'u',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'H',
  'Ц': 'C',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Sh',
  'Ъ': 'U',
  'Ы': 'Y',
  'Ь': '',
  'Э': 'E',
  'Ю': 'Yu',
  'Я': 'Ya',
  // ukranian
  'Є': 'Ye',
  'І': 'I',
  'Ї': 'Yi',
  'Ґ': 'G',
  'є': 'ye',
  'і': 'i',
  'ї': 'yi',
  'ґ': 'g',
  // czech
  'č': 'c',
  'ď': 'd',
  'ě': 'e',
  'ň': 'n',
  'ř': 'r',
  'š': 's',
  'ť': 't',
  'ů': 'u',
  'ž': 'z',
  'Č': 'C',
  'Ď': 'D',
  'Ě': 'E',
  'Ň': 'N',
  'Ř': 'R',
  'Š': 'S',
  'Ť': 'T',
  'Ů': 'U',
  'Ž': 'Z',
  // polish
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ś': 's',
  'ź': 'z',
  'ż': 'z',
  'Ą': 'A',
  'Ć': 'C',
  'Ę': 'E',
  'Ł': 'L',
  'Ń': 'N',
  'Ś': 'S',
  'Ź': 'Z',
  'Ż': 'Z',
  // latvian
  'ā': 'a',
  'ē': 'e',
  'ģ': 'g',
  'ī': 'i',
  'ķ': 'k',
  'ļ': 'l',
  'ņ': 'n',
  'ū': 'u',
  'Ā': 'A',
  'Ē': 'E',
  'Ģ': 'G',
  'Ī': 'I',
  'Ķ': 'K',
  'Ļ': 'L',
  'Ņ': 'N',
  'Ū': 'U',
  // lithuanian
  'ė': 'e',
  'į': 'i',
  'ų': 'u',
  'Ė': 'E',
  'Į': 'I',
  'Ų': 'U',
  // romanian
  'ț': 't',
  'Ț': 'T',
  'ţ': 't',
  'Ţ': 'T',
  'ș': 's',
  'Ș': 'S',
  'ă': 'a',
  'Ă': 'A',
  // currency
  '€': 'euro',
  '₢': 'cruzeiro',
  '₣': 'french franc',
  '£': 'pound',
  '₤': 'lira',
  '₥': 'mill',
  '₦': 'naira',
  '₧': 'peseta',
  '₨': 'rupee',
  '₩': 'won',
  '₪': 'new shequel',
  '₫': 'dong',
  '₭': 'kip',
  '₮': 'tugrik',
  '₯': 'drachma',
  '₰': 'penny',
  '₱': 'peso',
  '₲': 'guarani',
  '₳': 'austral',
  '₴': 'hryvnia',
  '₵': 'cedi',
  '¢': 'cent',
  '¥': 'yen',
  '元': 'yuan',
  '円': 'yen',
  '﷼': 'rial',
  '₠': 'ecu',
  '¤': 'currency',
  '฿': 'baht',
  '$': 'dollar',
  '₹': 'indian rupee',
  // symbols
  '©': '(c)',
  'œ': 'oe',
  'Œ': 'OE',
  '∑': 'sum',
  '®': '(r)',
  '†': '+',
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '∂': 'd',
  'ƒ': 'f',
  '™': 'tm',
  '℠': 'sm',
  '…': '...',
  '˚': 'o',
  'º': 'o',
  'ª': 'a',
  '•': '*',
  '∆': 'delta',
  '∞': 'infinity',
  '♥': 'love',
  '&': 'and',
  '|': 'or',
  '<': 'less',
  '>': 'greater',
  '=': 'equals'
};

slug.defaults.modes = {
  pretty: {
    replacement: '-',
    symbols: true,
    remove: /[.]/g,
    charmap: slug.defaults.charmap,
    multicharmap: slug.defaults.multicharmap
  }
};

var utils = {
  slugify: slug,

  getCanonicalUrl: function getCanonicalUrl(localPath) {
    return $LEKTOR_CONFIG.site_root.match(/^(.*?)\/*$/)[1] + '/' + utils.stripLeadingSlash(localPath);
  },
  isValidUrl: function isValidUrl(url) {
    return !!url.match(/^(https?|ftp):\/\/\S+$/);
  },
  stripLeadingSlash: function stripLeadingSlash(string) {
    return string.match(/^\/*(.*?)$/)[1];
  },
  stripTrailingSlash: function stripTrailingSlash(string) {
    return string.match(/^(.*?)\/*$/)[1];
  },
  joinFsPath: function joinFsPath(a, b) {
    return utils.stripTrailingSlash(a) + '/' + utils.stripLeadingSlash(b);
  },
  flipSetValue: function flipSetValue(originalSet, value, isActive) {
    if (isActive) {
      return utils.addToSet(originalSet || [], value);
    } else {
      return utils.removeFromSet(originalSet || [], value);
    }
  },
  addToSet: function addToSet(originalSet, value) {
    for (var _i2 = 0; _i2 < originalSet.length; _i2++) {
      if (originalSet[_i2] === value) {
        return originalSet;
      }
    }
    var rv = originalSet.slice();
    rv.push(value);
    return rv;
  },
  removeFromSet: function removeFromSet(originalSet, value) {
    var rv = null;
    var off = 0;
    for (var _i3 = 0; _i3 < originalSet.length; _i3++) {
      if (originalSet[_i3] === value) {
        if (rv === null) {
          rv = originalSet.slice();
        }
        rv.splice(_i3 - off++, 1);
      }
    }
    return rv === null ? originalSet : rv;
  },
  urlPathsConsideredEqual: function urlPathsConsideredEqual(a, b) {
    if (a == null || b == null) {
      return false;
    }
    return utils.stripTrailingSlash(a) === utils.stripTrailingSlash(b);
  },
  fsPathFromAdminObservedPath: function fsPathFromAdminObservedPath(adminPath) {
    var base = $LEKTOR_CONFIG.site_root.match(/^(.*?)\/*$/)[1];
    if (adminPath.substr(0, base.length) !== base) {
      return null;
    }
    return '/' + adminPath.substr(base.length).match(/^\/*(.*?)\/*$/)[1];
  },
  getParentFsPath: function getParentFsPath(fsPath) {
    return fsPath.match(/^(.*?)\/([^/]*)$/)[1];
  },
  getApiUrl: function getApiUrl(url) {
    return $LEKTOR_CONFIG.admin_root + '/api' + url;
  },
  loadData: function loadData(url, params, options, createPromise) {
    options = options || {};
    return createPromise(function (resolve, reject) {
      _jquery2.default.ajax({
        url: utils.getApiUrl(url),
        data: params,
        method: options.method || 'GET'
      }).done(function (data) {
        resolve(data);
      }).fail(function () {
        reject({
          code: 'REQUEST_FAILED'
        });
      });
    });
  },
  apiRequest: function apiRequest(url, options, createPromise) {
    options = options || {};
    options.url = utils.getApiUrl(url);
    if (options.json !== undefined) {
      options.data = JSON.stringify(options.json);
      options.contentType = 'application/json';
      delete options.json;
    }
    if (!options.method) {
      options.method = 'GET';
    }

    return createPromise(function (resolve, reject) {
      _jquery2.default.ajax(options).done(function (data) {
        resolve(data);
      }).fail(function () {
        reject({
          code: 'REQUEST_FAILED'
        });
      });
    });
  },
  fsToUrlPath: function fsToUrlPath(fsPath) {
    var segments = fsPath.match(/^\/*(.*?)\/*$/)[1].split('/');
    if (segments.length === 1 && segments[0] === '') {
      segments = [];
    }
    segments.unshift('root');
    return segments.join(':');
  },
  urlToFsPath: function urlToFsPath(urlPath) {
    var segments = urlPath.match(/^:*(.*?):*$/)[1].split(':');
    if (segments.length < 1 || segments[0] !== 'root') {
      return null;
    }
    segments[0] = '';
    return segments.join('/');
  },
  urlPathToSegments: function urlPathToSegments(urlPath) {
    if (!urlPath) {
      return null;
    }
    var rv = urlPath.match(/^:*(.*?):*$/)[1].split('/');
    if (rv.length >= 1 && rv[0] === 'root') {
      return rv.slice(1);
    }
    return null;
  },
  scrolledToBottom: function scrolledToBottom() {
    return document.body.offsetHeight + document.body.scrollTop >= document.body.scrollHeight;
  },
  getPlatform: function getPlatform() {
    if (navigator.appVersion.indexOf('Win') !== -1) {
      return 'windows';
    } else if (navigator.appVersion.indexOf('Mac') !== -1) {
      return 'mac';
    } else if (navigator.appVersion.indexOf('X11') !== -1 || navigator.appVersion.indexOf('Linux') !== -1) {
      return 'linux';
    }
    return 'other';
  },
  isMetaKey: function isMetaKey(event) {
    if (utils.getPlatform() === 'mac') {
      return event.metaKey;
    } else {
      return event.ctrlKey;
    }
  }
};

exports.default = utils;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _BaseComponent2 = __webpack_require__(112);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_BaseComponent) {
  _inherits(Component, _BaseComponent);

  function Component(props, context) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props, context));

    _this._unlistenBeforeLeavingRoute = null;
    return _this;
  }

  /* helper function for forwarding props down the tree */


  _createClass(Component, [{
    key: 'getRoutingProps',
    value: function getRoutingProps() {
      return {
        location: this.props.location,
        params: this.props.params,
        route: this.props.route,
        routeParams: this.props.routeParams,
        routes: this.props.routes
      };
    }

    /* helper that can generate a path to a rule */

  }, {
    key: 'getPathToAdminPage',
    value: function getPathToAdminPage(name, params) {
      var _this2 = this;

      var parts = this.props.routes.map(function (x) {
        return x.name;
      });
      if (name !== null) {
        if (name.substr(0, 1) === '.') {
          parts[parts.length - 1] = name.substr(1);
        } else {
          parts = name.split('.');
        }
      }

      var rv = [];
      var node = this.props.routes[0];
      if (node.name !== parts.shift()) {
        return null;
      }
      rv.push(node.path);

      parts.forEach(function (part) {
        for (var i = 0; i < node.childRoutes.length; i++) {
          if (node.childRoutes[i].name === part) {
            node = node.childRoutes[i];
            rv.push(node.path);
            return;
          }
        }
        node = null;
      });

      return rv.join('/').replace(/:[a-zA-Z]+/g, function (m) {
        var key = m.substr(1);
        return params[key] || _this2.props.params[key];
      });
    }

    /* helper to transition to a specific page */

  }, {
    key: 'transitionToAdminPage',
    value: function transitionToAdminPage(name, params) {
      this.context.router.push(this.getPathToAdminPage(name, params));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentDidMount', this).call(this);
      if (this.context.router !== undefined && this.props.route !== undefined) {
        this._unlistenBeforeLeavingRoute = this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentWillUnmount', this).call(this);
      if (this._unlistenBeforeLeavingRoute) {
        this._unlistenBeforeLeavingRoute();
      }
    }
  }, {
    key: 'routerWillLeave',
    value: function routerWillLeave(nextLocation) {
      if (_dialogSystem2.default.preventNavigation()) {
        return false;
      } else {
        _dialogSystem2.default.dismissDialog();
      }
    }
  }]);

  return Component;
}(_BaseComponent3.default);

Component.contextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Component;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorDialog = __webpack_require__(148);

var _errorDialog2 = _interopRequireDefault(_errorDialog);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bringUpDialog = function bringUpDialog(error) {
  if (!_dialogSystem2.default.dialogIsOpen()) {
    _dialogSystem2.default.showDialog(_errorDialog2.default, {
      error: error
    });
  }
};

var makeRichPromise = function makeRichPromise(callback) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bringUpDialog;

  var rv = new Promise(callback);
  var then = rv.then;
  var hasRejectionHandler = false;

  rv.then(null, function (value) {
    if (!hasRejectionHandler) {
      return fallback(value);
    }
  });

  rv.then = function (onFulfilled, onRejected) {
    if (onRejected) {
      hasRejectionHandler = true;
    }
    return then.call(rv, onFulfilled, onRejected);
  };

  return rv;
};

exports.default = makeRichPromise;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(64)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(66)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hub = __webpack_require__(22);

var _hub2 = _interopRequireDefault(_hub);

var _events = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogSystem = function () {
  function DialogSystem() {
    _classCallCheck(this, DialogSystem);

    this._dialogInstance = null;
  }

  // invoked by the application once the dialog has been created.


  _createClass(DialogSystem, [{
    key: 'notifyDialogInstance',
    value: function notifyDialogInstance(dialog) {
      this._dialogInstance = dialog;
    }

    // given a dialog class this will instruct the application to bring up
    // the dialog and display it.

  }, {
    key: 'showDialog',
    value: function showDialog(dialog, options) {
      // if the current dialog prevents navigation, then we just silently
      // will not show the dialog.
      if (!this.preventNavigation()) {
        _hub2.default.emit(new _events.DialogChangedEvent({
          dialog: dialog,
          dialogOptions: options || {}
        }));
      }
    }

    // tells the application to dismiss the current dialog.

  }, {
    key: 'dismissDialog',
    value: function dismissDialog() {
      if (!this.preventNavigation()) {
        _hub2.default.emit(new _events.DialogChangedEvent({
          currentDialog: null
        }));
      }
    }

    // indicates if a dialog is shown

  }, {
    key: 'dialogIsOpen',
    value: function dialogIsOpen() {
      return !!this._dialogInstance;
    }

    // returns true if the current dialog prevents navigation.

  }, {
    key: 'preventNavigation',
    value: function preventNavigation() {
      return this._dialogInstance && this._dialogInstance.preventNavigation !== undefined && this._dialogInstance.preventNavigation();
    }
  }]);

  return DialogSystem;
}();

var dialogSystem = new DialogSystem();

exports.default = dialogSystem;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* a react component baseclass that has some basic knowledge about
   the record it works with. */
var RecordComponent = function (_Component) {
  _inherits(RecordComponent, _Component);

  function RecordComponent() {
    _classCallCheck(this, RecordComponent);

    return _possibleConstructorReturn(this, (RecordComponent.__proto__ || Object.getPrototypeOf(RecordComponent)).apply(this, arguments));
  }

  _createClass(RecordComponent, [{
    key: 'isRecordPreviewActive',

    /* checks if the record preview is active. */
    value: function isRecordPreviewActive() {
      var routes = this.props.routes;
      return routes.length > 0 && routes[routes.length - 1].component.name === 'PreviewPage';
    }

    /* this returns the current record path segments as array */

  }, {
    key: 'getRecordPathSegments',
    value: function getRecordPathSegments() {
      var path = this.props.params.path;
      return path ? _utils2.default.urlPathToSegments(path) : [];
    }
  }, {
    key: '_getRecordPathAndAlt',
    value: function _getRecordPathAndAlt() {
      var path = this.props.params.path;
      if (!path) {
        return [null, null];
      }
      var items = path.split(/\+/, 2);
      return [_utils2.default.urlToFsPath(items[0]), items[1]];
    }

    /* this returns the path of the current record.  If the current page does
     * not have a path component then null is returned. */

  }, {
    key: 'getRecordPath',
    value: function getRecordPath() {
      var _getRecordPathAndAlt2 = this._getRecordPathAndAlt(),
          _getRecordPathAndAlt3 = _slicedToArray(_getRecordPathAndAlt2, 1),
          path = _getRecordPathAndAlt3[0];

      return path;
    }

    /* returns the current alt */

  }, {
    key: 'getRecordAlt',
    value: function getRecordAlt() {
      var _getRecordPathAndAlt4 = this._getRecordPathAndAlt(),
          _getRecordPathAndAlt5 = _slicedToArray(_getRecordPathAndAlt4, 2),
          alt = _getRecordPathAndAlt5[1];

      return !alt ? '_primary' : alt;
    }

    /* return the url path for the current record path (or a modified one)
       by preserving or overriding the alt */

  }, {
    key: 'getUrlRecordPathWithAlt',
    value: function getUrlRecordPathWithAlt(newPath, newAlt) {
      if (newPath === undefined || newPath === null) {
        newPath = this.getRecordPath();
      }
      if (newAlt === undefined || newAlt === null) {
        newAlt = this.getRecordAlt();
      }
      var rv = _utils2.default.fsToUrlPath(newPath);
      if (newAlt !== '_primary') {
        rv += '+' + newAlt;
      }
      return rv;
    }

    /* returns the parent path if available */

  }, {
    key: 'getParentRecordPath',
    value: function getParentRecordPath() {
      return _utils2.default.getParentFsPath(this.getRecordPath());
    }

    /* returns true if this is the root record */

  }, {
    key: 'isRootRecord',
    value: function isRootRecord() {
      return this.getRecordPath() === '';
    }

    /* returns the breadcrumbs for the current record path */

  }, {
    key: 'getRecordCrumbs',
    value: function getRecordCrumbs() {
      var segments = this.getRecordPathSegments();
      if (segments === null) {
        return [];
      }

      segments.unshift('root');

      var rv = [];
      for (var i = 0; i < segments.length; i++) {
        var curpath = segments.slice(0, i + 1).join(':');
        rv.push({
          id: 'path:' + curpath,
          urlPath: curpath,
          segments: segments.slice(1, i + 1),
          title: segments[i]
        });
      }

      return rv;
    }
  }]);

  return RecordComponent;
}(_Component3.default);

exports.default = RecordComponent;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hub = function () {
  function Hub() {
    _classCallCheck(this, Hub);

    this._subscriptions = {};
  }

  /* subscribes a callback to an event */


  _createClass(Hub, [{
    key: 'subscribe',
    value: function subscribe(event, callback) {
      if (typeof event !== 'string') {
        event = event.getEventType();
      }

      var subs = this._subscriptions[event];
      if (subs === undefined) {
        this._subscriptions[event] = subs = [];
      }

      for (var i = 0; i < subs.length; i++) {
        if (subs[i] === callback) {
          return false;
        }
      }

      subs.push(callback);
      return true;
    }

    /* unsubscribes a callback from an event */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(event, callback) {
      if (typeof event !== 'string') {
        event = event.getEventType();
      }

      var subs = this._subscriptions[event];
      if (subs === undefined) {
        return false;
      }

      for (var i = 0; i < subs.length; i++) {
        if (subs[i] === callback) {
          subs.splice(i, 1);
          return true;
        }
      }
      return false;
    }

    /* emits an event with some parameters */

  }, {
    key: 'emit',
    value: function emit(event) {
      var subs = this._subscriptions[event.type];
      if (subs !== undefined) {
        subs.forEach(function (callback) {
          try {
            callback(event);
          } catch (e) {
            console.log('Event callback failed: ', e, 'callback=', callback, 'event=', event);
          }
        });
      }
    }
  }]);

  return Hub;
}();

var hub = new Hub();

exports.default = hub;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, [{
    key: 'toString',
    value: function toString() {
      return '[Event ' + this.type + ']';
    }
  }, {
    key: 'type',
    get: function get() {
      return Object.getPrototypeOf(this).constructor.getEventType();
    }
  }]);

  return Event;
}();

Event.getEventType = function () {
  return this.name;
};

var RecordEvent = function (_Event) {
  _inherits(RecordEvent, _Event);

  function RecordEvent(options) {
    _classCallCheck(this, RecordEvent);

    var _this = _possibleConstructorReturn(this, (RecordEvent.__proto__ || Object.getPrototypeOf(RecordEvent)).call(this, options = options || {}));

    _this.recordPath = options.recordPath;
    return _this;
  }

  return RecordEvent;
}(Event);

var AttachmentsChangedEvent = function (_RecordEvent) {
  _inherits(AttachmentsChangedEvent, _RecordEvent);

  function AttachmentsChangedEvent(options) {
    _classCallCheck(this, AttachmentsChangedEvent);

    var _this2 = _possibleConstructorReturn(this, (AttachmentsChangedEvent.__proto__ || Object.getPrototypeOf(AttachmentsChangedEvent)).call(this, options = options || {}));

    _this2.attachmentsAdded = options.attachmentsAdded || [];
    _this2.attachmentsRemoved = options.attachmentsRemoved || [];
    return _this2;
  }

  return AttachmentsChangedEvent;
}(RecordEvent);

var DialogChangedEvent = function (_Event2) {
  _inherits(DialogChangedEvent, _Event2);

  function DialogChangedEvent(options) {
    _classCallCheck(this, DialogChangedEvent);

    var _this3 = _possibleConstructorReturn(this, (DialogChangedEvent.__proto__ || Object.getPrototypeOf(DialogChangedEvent)).call(this, options = options || {}));

    _this3.dialog = options.dialog;
    _this3.dialogOptions = options.dialogOptions;
    return _this3;
  }

  return DialogChangedEvent;
}(Event);

exports.Event = Event;
exports.RecordEvent = RecordEvent;
exports.AttachmentsChangedEvent = AttachmentsChangedEvent;
exports.DialogChangedEvent = DialogChangedEvent;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicWidgetMixin = exports.ValidationFailure = undefined;

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ValidationFailure(options) {
  this.message = options.message || _i18n2.default.trans('INVALID_INPUT');
  this.type = options.type || 'error';
}

var BasicWidgetMixin = {
  propTypes: {
    value: _propTypes2.default.any,
    type: _propTypes2.default.object,
    placeholder: _propTypes2.default.any,
    onChange: _propTypes2.default.func
  },

  getInputClass: function getInputClass() {
    var rv = 'form-control';
    if (this.props.type.size === 'small') {
      rv = 'input-sm ' + rv;
    } else if (this.props.type.size === 'large') {
      rv = 'input-lg ' + rv;
    }
    return rv;
  },
  getValidationFailure: function getValidationFailure() {
    if (this.getValidationFailureImpl) {
      return this.getValidationFailureImpl();
    }
    return null;
  }
};

exports.ValidationFailure = ValidationFailure;
exports.BasicWidgetMixin = BasicWidgetMixin;

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideDialog = function (_Component) {
  _inherits(SlideDialog, _Component);

  function SlideDialog(props) {
    _classCallCheck(this, SlideDialog);

    var _this = _possibleConstructorReturn(this, (SlideDialog.__proto__ || Object.getPrototypeOf(SlideDialog)).call(this, props));

    _this._onKeyPress = _this._onKeyPress.bind(_this);
    return _this;
  }

  _createClass(SlideDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(SlideDialog.prototype.__proto__ || Object.getPrototypeOf(SlideDialog.prototype), 'componentDidMount', this).call(this);
      if (this.props.closeOnEscape) {
        window.addEventListener('keydown', this._onKeyPress);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this._onKeyPress);
      _get(SlideDialog.prototype.__proto__ || Object.getPrototypeOf(SlideDialog.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: '_onKeyPress',
    value: function _onKeyPress(event) {
      if (event.which === 27 && this.props.closeOnEscape) {
        event.preventDefault();
        _dialogSystem2.default.dismissDialog();
      }
    }
  }, {
    key: '_onCloseClick',
    value: function _onCloseClick(event) {
      event.preventDefault();
      _dialogSystem2.default.dismissDialog();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          hasCloseButton = _props.hasCloseButton,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'title', 'hasCloseButton', 'className']);

      className = (className || '') + ' sliding-panel container';
      return _react2.default.createElement(
        'div',
        _extends({ className: className }, props),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-md-offset-4' },
          hasCloseButton && _react2.default.createElement(
            'a',
            {
              href: '#',
              className: 'close-btn',
              onClick: this._onCloseClick.bind(this)
            },
            _i18n2.default.trans('CLOSE')
          ),
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          children
        )
      );
    }
  }]);

  return SlideDialog;
}(_Component3.default);

SlideDialog.propTypes = {
  title: _propTypes2.default.string,
  hasCloseButton: _propTypes2.default.bool,
  closeOnEscape: _propTypes2.default.bool
};

exports.default = SlideDialog;

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _primitiveWidgets = __webpack_require__(156);

var _primitiveWidgets2 = _interopRequireDefault(_primitiveWidgets);

var _multiWidgets = __webpack_require__(157);

var _multiWidgets2 = _interopRequireDefault(_multiWidgets);

var _flowWidget = __webpack_require__(158);

var _flowWidget2 = _interopRequireDefault(_flowWidget);

var _fakeWidgets = __webpack_require__(160);

var _fakeWidgets2 = _interopRequireDefault(_fakeWidgets);

var _mixins = __webpack_require__(24);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _ToggleGroup = __webpack_require__(161);

var _ToggleGroup2 = _interopRequireDefault(_ToggleGroup);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var widgetComponents = {
  'singleline-text': _primitiveWidgets2.default.SingleLineTextInputWidget,
  'multiline-text': _primitiveWidgets2.default.MultiLineTextInputWidget,
  'datepicker': _primitiveWidgets2.default.DateInputWidget,
  'integer': _primitiveWidgets2.default.IntegerInputWidget,
  'float': _primitiveWidgets2.default.FloatInputWidget,
  'checkbox': _primitiveWidgets2.default.BooleanInputWidget,
  'url': _primitiveWidgets2.default.UrlInputWidget,
  'slug': _primitiveWidgets2.default.SlugInputWidget,
  'flow': _flowWidget2.default.FlowWidget,
  'checkboxes': _multiWidgets2.default.CheckboxesInputWidget,
  'select': _multiWidgets2.default.SelectInputWidget,
  'f-line': _fakeWidgets2.default.LineWidget,
  'f-spacing': _fakeWidgets2.default.SpacingWidget,
  'f-info': _fakeWidgets2.default.InfoWidget,
  'f-heading': _fakeWidgets2.default.HeadingWidget
};

var FallbackWidget = (0, _createReactClass2.default)({
  displayName: 'FallbackWidget',
  mixins: [_mixins.BasicWidgetMixin],

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'em',
        null,
        'Widget "',
        this.props.type.widget,
        '" not implemented (used by type "',
        this.props.type.name,
        '")'
      )
    );
  }
});

var FieldBox = function (_Component) {
  _inherits(FieldBox, _Component);

  function FieldBox() {
    _classCallCheck(this, FieldBox);

    return _possibleConstructorReturn(this, (FieldBox.__proto__ || Object.getPrototypeOf(FieldBox)).apply(this, arguments));
  }

  _createClass(FieldBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          value = _props.value,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          disabled = _props.disabled;

      var className = 'col-md-' + getFieldColumns(field) + ' field-box';
      var innerClassName = 'field';
      var inner = void 0;

      if (field.name.substr(0, 1) === '_') {
        innerClassName += ' system-field';
      }

      var Widget = getWidgetComponentWithFallback(field.type);
      if (Widget.isFakeWidget) {
        inner = _react2.default.createElement(Widget, { key: field.name, type: field.type, field: field });
      } else {
        var description = null;
        if (field.description_i18n) {
          description = _react2.default.createElement(
            'div',
            { className: 'help-text' },
            _i18n2.default.trans(field.description_i18n)
          );
        }
        inner = _react2.default.createElement(
          'dl',
          { className: innerClassName },
          !field.hide_label ? _react2.default.createElement(
            'dt',
            null,
            _i18n2.default.trans(field.label_i18n)
          ) : null,
          _react2.default.createElement(
            'dd',
            null,
            description,
            _react2.default.createElement(Widget, {
              value: value,
              onChange: onChange,
              type: field.type,
              placeholder: placeholder,
              disabled: disabled
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className, key: field.name },
        inner
      );
    }
  }]);

  return FieldBox;
}(_Component3.default);

FieldBox.propTypes = {
  value: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  field: _propTypes2.default.any,
  placeholder: _propTypes2.default.any
};

var getWidgetComponent = function getWidgetComponent(type) {
  return widgetComponents[type.widget] || null;
};

var getWidgetComponentWithFallback = function getWidgetComponentWithFallback(type) {
  return widgetComponents[type.widget] || FallbackWidget;
};

var getFieldColumns = function getFieldColumns(field) {
  var widthSpec = (field.type.width || '1/1').split('/');
  return Math.min(12, Math.max(2, parseInt(12 * +widthSpec[0] / +widthSpec[1])));
};

var getFieldRows = function getFieldRows(fields, isIllegalField) {
  var normalFields = [];
  var systemFields = [];

  if (!isIllegalField) {
    isIllegalField = function isIllegalField(x) {
      return false;
    };
  }

  fields.forEach(function (field) {
    if (!isIllegalField(field)) {
      if (field.name.substr(0, 1) === '_') {
        systemFields.push(field);
      } else {
        normalFields.push(field);
      }
    }
  });

  var processFields = function processFields(rv, rowType, fields) {
    var currentColumns = 0;
    var row = [];

    fields.forEach(function (field) {
      var columns = getFieldColumns(field);
      if (columns + currentColumns > 12) {
        rv.push([rowType, row]);
        currentColumns = 0;
        row = [];
      }
      row.push(field);
      currentColumns += columns;
    });

    if (row.length > 0) {
      rv.push([rowType, row]);
    }
  };

  var rv = [];
  processFields(rv, 'normal', normalFields);
  processFields(rv, 'system', systemFields);
  return rv;
};

var renderFieldRows = function renderFieldRows(fields, isIllegalField, renderFunc) {
  var rv = {
    normal: [],
    system: []
  };

  var rows = getFieldRows(fields, isIllegalField);

  rows.forEach(function (item, idx) {
    var _item = _slicedToArray(item, 2),
        rowType = _item[0],
        row = _item[1];

    rv[rowType].push(_react2.default.createElement(
      'div',
      { className: 'row field-row', key: rowType + '-' + idx },
      row.map(renderFunc)
    ));
  });

  return [rv.normal, rv.system.length > 1 ? _react2.default.createElement(
    _ToggleGroup2.default,
    {
      key: 'sys',
      groupTitle: _i18n2.default.trans('SYSTEM_FIELDS'),
      defaultVisibility: false },
    rv.system
  ) : null];
};

exports.default = {
  getWidgetComponent: getWidgetComponent,
  getWidgetComponentWithFallback: getWidgetComponentWithFallback,
  getFieldRows: getFieldRows,
  renderFieldRows: renderFieldRows,
  getFieldColumns: getFieldColumns,
  FallbackWidget: FallbackWidget,
  FieldBox: FieldBox
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userLabel = {

  // formats a user label appropriately
  format: function format(inputConfig) {
    var label = null;
    if (typeof inputConfig === 'string') {
      label = inputConfig;
    } else {
      label = _i18n2.default.trans(inputConfig);
    }
    if (!label) {
      return _react2.default.createElement('span', { className: '' });
    }

    var iconData = label.match(/^\[\[\s*(.*?)\s*(;\s*(.*?))?\s*\]\]$/); // eslint-disable-line no-useless-escape
    if (iconData) {
      var className = 'fa fa-' + iconData[1];
      if ((iconData[3] || '').match(/90|180|270/)) {
        className += ' fa-rotate-' + iconData[3];
      }
      return _react2.default.createElement('i', { className: className });
    }

    return _react2.default.createElement(
      'span',
      null,
      label
    );
  }
};

exports.default = userLabel;

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(32);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LektorLink = function (_Component) {
  _inherits(LektorLink, _Component);

  function LektorLink() {
    _classCallCheck(this, LektorLink);

    return _possibleConstructorReturn(this, (LektorLink.__proto__ || Object.getPrototypeOf(LektorLink)).apply(this, arguments));
  }

  _createClass(LektorLink, [{
    key: 'render',
    value: function render() {
      var path = this.props.to;
      if (path.substr(0, 1) !== '/') {
        path = $LEKTOR_CONFIG.admin_root + '/' + path;
      }
      return _react2.default.createElement(
        _reactRouter.Link,
        { to: path, activeClassName: 'active' },
        this.props.children
      );
    }
  }]);

  return LektorLink;
}(_Component3.default);

LektorLink.propTypes = {
  to: _propTypes2.default.string
};

module.exports = LektorLink;

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecordEditComponent = function (_RecordComponent) {
  _inherits(RecordEditComponent, _RecordComponent);

  function RecordEditComponent() {
    _classCallCheck(this, RecordEditComponent);

    return _possibleConstructorReturn(this, (RecordEditComponent.__proto__ || Object.getPrototypeOf(RecordEditComponent)).apply(this, arguments));
  }

  _createClass(RecordEditComponent, [{
    key: 'hasPendingChanges',
    value: function hasPendingChanges() {
      return false;
    }
  }, {
    key: 'routerWillLeave',
    value: function routerWillLeave(nextLocation) {
      var rv = _get(RecordEditComponent.prototype.__proto__ || Object.getPrototypeOf(RecordEditComponent.prototype), 'routerWillLeave', this).call(this, nextLocation);
      if (rv !== undefined) {
        return rv;
      }
      if (this.hasPendingChanges()) {
        return _i18n2.default.trans('UNLOAD_ACTIVE_TAB');
      }
    }
  }]);

  return RecordEditComponent;
}(_RecordComponent3.default);

exports.default = RecordEditComponent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(32);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _bootstrap = __webpack_require__(58);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _bootstrapExtras = __webpack_require__(139);

var _bootstrapExtras2 = _interopRequireDefault(_bootstrapExtras);

var _fontAwesome = __webpack_require__(140);

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

var _nativePromiseOnly = __webpack_require__(59);

var _nativePromiseOnly2 = _interopRequireDefault(_nativePromiseOnly);

var _eventSourcePolyfill = __webpack_require__(144);

var _eventSourcePolyfill2 = _interopRequireDefault(_eventSourcePolyfill);

var _App = __webpack_require__(145);

var _App2 = _interopRequireDefault(_App);

var _Dash = __webpack_require__(154);

var _Dash2 = _interopRequireDefault(_Dash);

var _EditPage = __webpack_require__(155);

var _EditPage2 = _interopRequireDefault(_EditPage);

var _DeletePage = __webpack_require__(162);

var _DeletePage2 = _interopRequireDefault(_DeletePage);

var _PreviewPage = __webpack_require__(163);

var _PreviewPage2 = _interopRequireDefault(_PreviewPage);

var _AddChildPage = __webpack_require__(164);

var _AddChildPage2 = _interopRequireDefault(_AddChildPage);

var _AddAttachmentPage = __webpack_require__(165);

var _AddAttachmentPage2 = _interopRequireDefault(_AddAttachmentPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-unused-vars */


// polyfill for internet explorer

/* eslint-enable no-unused-vars */

// route targets


_i18n2.default.currentLanguage = $LEKTOR_CONFIG.lang;

var BadRoute = function (_Component) {
  _inherits(BadRoute, _Component);

  function BadRoute() {
    _classCallCheck(this, BadRoute);

    return _possibleConstructorReturn(this, (BadRoute.__proto__ || Object.getPrototypeOf(BadRoute)).apply(this, arguments));
  }

  _createClass(BadRoute, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Nothing to see here'
        ),
        _react2.default.createElement(
          'p',
          null,
          'There is really nothing to see here.'
        )
      );
    }
  }]);

  return BadRoute;
}(_Component3.default);

BadRoute.contextTypes = {
  router: _propTypes2.default.func
};

var routes = function () {
  // route setup
  return _react2.default.createElement(
    _reactRouter.Route,
    { name: 'app', path: $LEKTOR_CONFIG.admin_root, component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { name: 'edit', path: ':path/edit', component: _EditPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'delete', path: ':path/delete', component: _DeletePage2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'preview', path: ':path/preview', component: _PreviewPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'add-child', path: ':path/add-child', component: _AddChildPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'upload', path: ':path/upload', component: _AddAttachmentPage2.default }),
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dash2.default }),
    _react2.default.createElement('route', { path: '*', component: BadRoute })
  );
}();

var dash = document.getElementById('dash');

if (dash) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    routes
  ), dash);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(29);
var invariant = __webpack_require__(20);
var warning = __webpack_require__(30);

var ReactPropTypesSecret = __webpack_require__(31);
var checkPropTypes = __webpack_require__(65);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(20);
  var warning = __webpack_require__(30);
  var ReactPropTypesSecret = __webpack_require__(31);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(29);
var invariant = __webpack_require__(20);
var ReactPropTypesSecret = __webpack_require__(31);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// the base component.  This really should not exist in the first place
// but react is a bit meh when it comes to what's on the base component
// which breaks super.  This is why we do this here.  Note that this is
// also used by the standalone admin UI app.



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    return _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).apply(this, arguments));
  }

  _createClass(BaseComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }]);

  return BaseComponent;
}(_react2.default.Component);

exports.default = BaseComponent;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ca.json": 114,
	"./de.json": 115,
	"./en.json": 116,
	"./es.json": 117,
	"./fr.json": 118,
	"./it.json": 119,
	"./ja.json": 120,
	"./ko.json": 121,
	"./nl.json": 122,
	"./pl.json": 123,
	"./pt.json": 124,
	"./ru.json": 125,
	"./zh.json": 126
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 113;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Tornar al Lloc Web","UNLOAD_ACTIVE_TAB":"Hi ha informació sense desar, està segur que vol abandonar aquesta pàgina?","EDIT_METADATA":"Editar Metadades","EDIT":"Editar","DELETE":"Esborrar","PREVIEW":"Previsualitzar","ALTS":"Alternatives","PRIMARY_ALT":"Primària","PRIMARY_OVERLAY":"Overlaid","ADD_CHILD_PAGE":"Afegir Pàgina","ADD_ATTACHMENT":"Afegir Adjunt","ATTACHMENT_ACTIONS":"Accions sobre els Adjunts","PAGE_ACTIONS":"Accions sobre la Pàgina","NO_CHILD_PAGES":"Sense Subpàgines","CHILD_PAGES":"Subpàgines","NO_ATTACHMENTS":"Sense Adjunts","ATTACHMENTS":"Adjunts","ADD_ATTACHMENT_TO":"Afegir Adjunt a “%s”","ADD_ATTACHMENT_NOTE":"Pot pujar un nou adjunt aquí.","UPLOAD":"Pujar","PROGRESS":"Avenç","ERROR_PREFIX":"Error: ","ERROR_NO_ID_PROVIDED":"No s'ha proporcionat un ID.","ERROR_PAGE_ID_DUPLICATE":"Ja existeix una pàgina amb aquest ID (%s).","ERROR_INVALID_ID":"ID invàlid","ERROR_INVALID_DATE":"Data invàlida","ERROR_INVALID_NUMBER":"Número no vàlid","ERROR_INVALID_URL":"URL no vàlida","ERROR":"Error","ERROR_OCURRED":"Ha ocorregut un Error","ERROR_REQUEST_FAILED":"No s'ha pogut enviar la tasca al servidor.  Potser el servidor està apagat o és inaccessible","ERROR_SERVER_UNAVAILABLE":"Servidor No Disponible","ERROR_SERVER_UNAVAILABLE_MESSAGE":"El servidor no respon.  Ha estat apagat o hi ha hagut un error crític que ha fet que estigui inoperatiu i hagi de ser reiniciat.","MODEL":"Model","ADD_CHILD_PAGE_TO":"Afegir Subpàgina a “%s”","ADD_CHILD_PAGE_NOTE":"Pot afegir una nova subpàgina aquí. Tingui en compte que el model o el ID no podrà ser canviat fàcilment més endavant.","CREATE_CHILD_PAGE":"Afegir pàgina filla","DELETE_ATTACHMENT_PROMPT":"Realment vol esborrar aquest adjunt?","DELETE_ATTACHMENT_ALT_PROMPT":"Realment vol esborrar les metadades d'aquest adjunt alternatiu?","DELETE_PAGE_PROMPT":"Vol realment esborrar aquesta pàgina?","DELETE_PAGE_ALT_PROMPT":"Realment desitja esborrar aquesta alternativa?","DELETE_PAGE_CHILDREN_WARNING":"També s'esborraran les subpàgines que pengin d'aquesta pàgina.","DELETE_RECORD":"Esborrar “%s”","DELETE_ALL_PAGE_ALTS":"Esborrar també totes les alternatives i fitxers adjunts.","DELETE_ALL_ATTACHMENT_ALTS":"Esborrar totes les alternatives de l'annex i el fitxer adjunt.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Esborrar només el registre principal.  Els adjunts, les alternatives i les subpàgines no seran esborrades.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Esborrar només les metadades del registre principal.","DELETE_PRIMARY_ALT_INFO":"Com aquest registre és una alternativa principal, pot ser esborrat per separat o conjuntament a la resta de continguts.","CHILD_PAGES_TO_BE_DELETED":"Subpàgines que seran esborrares:","ALTS_TO_BE_DELETED":"Alternatives que seran eliminades:","ATTACHMENTS_TO_BE_DELETED":"Adjunts que seran eliminats:","YES_DELETE":"Sí, esborrar","NO_CANCEL":"No, cancel·lar","SYSTEM_FIELDS":"Camps del Sistema","EDIT_ATTACHMENT_METADATA_OF":"Editar les Metadades de l'Adjunt “%s”","EDIT_PAGE_NAME":"Editar “%s”","SAVE_CHANGES":"Desar els canvis","BROWSE_FS":"Veure al Sistema de fitxers","BROWSE_FS_MAC":"Mostrar al Finder","BROWSE_FS_WINDOWS":"Mostrar a l'Explorador","ERROR_CANNOT_BROWSE_FS":"Error: el fitxer no existeix encara.","REMOVE_FLOWBLOCK_PROMPT":"¿Realment vol esborrar aquest block?","ADD_FLOWBLOCK":"Afegir Block","INVALID_INPUT":"Entrada invàlida","UP":"Amunt","DOWN":"Abaix","REMOVE":"Esborrar","ID":"ID","CLOSE":"Tancar","CANCEL":"Cancel·lar","BACK_TO_OVERVIEW":"Tornar a la Revisió","PUBLISH":"Publicar","PUBLISH_NOTE":"Des d'aquí pot publicar la versió actual del lloc web.","PUBLISH_SERVER":"Servidor Destinació","CURRENTLY_PUBLISHING":"Publicannt ...","STATE":"Estat","PUBLISH_DONE":"Publicat","PUBLISH_STATE_BUILDING":"Els canvis s'estan generant ...","PUBLISH_STATE_PUBLISH":"Els canvis s'estan publicant ...","PUBLISH_STATE_DONE":"Publicació finalitzada.","FIND_FILES":"Buscar Fitxers","FIND_FILES_PLACEHOLDER":"Introdueixi el nom de la pàgina ...","ATTACHMENT_TYPE":"Tipus d'adjunt","URL_SLUG":"URL personalitzada","TEMPLATE":"Plantilla","HIDE_PAGE":"Amagar pàgina","HIDE_PAGE_EXPLANATION":"Hauria d'estar oculta aquesta pàgina?","PAGE_IS_DISCOVERABLE":"La Pàgina és detectable","PAGE_IS_DISCOVERABLE_EXPLANATION":"Si s'habilita, la pàgina pot ser detectada, en cas contrari la URL del contingut ha de ser coneguda.","REFRESH_BUILD":"Regenerar Lloc Web","REFRESH_BUILD_NOTE":"Això esborra tots els resultats generats i llença una nova generació des de zero.  Això és útil en algunes situacions on els errors de sincronització o a les plantilles han causat un resultat corrupte.","CURRENTLY_REFRESHING_BUILD":"Regenerant ...","REFRESHING_BUILD_DONE":"Actualització finalitzada!","FAILED_TO_LAUNCH_LEKTOR":"Ha fallat l'execució de Lektor.","PROJECT":"Projecte","CLOSE_PROJECT":"Tancar Projecte","OPEN_PROJECT":"Obrir Projecte","BROWSE_WEBSITE":"Anar al Lloc Web","VIEW_ADMIN_PANEL":"Anar al Panell d'Administració","QUIT":"Sortir","FAILED_TO_LOAD_PROJECT":"Ha fallat la càrrega del projecte :(","LOADING_PROJECT":"Carregant projecte ...","INITIALIZING_LEKTOR":"Inicialitzant Lektor ...","QUIT_LEKTOR":"Sortir de Lektor","FILE":"Arxiu","UNDO":"Desfer","REDO":"Tornar a fer","CUT":"Tallar","COPY":"Copiar","PASTE":"Enganxar","SELECT_ALL":"Seleccionar-ho Tot","HELP":"Ajuda","VISIT_WEBSITE":"Visitar Web","INSTALL_SHELL_COMMAND":"Instalar Eina","INSTALL_SHELL_COMMAND_QUESTION":"Vol instal·lar la eina 'lektor'? Es requereixen permisos d'administració.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Ha fallat la instal·lació de l'eina.","INSTALL_SHELL_COMMAND_SUCCESS":"L'eina ha estat instal·lada amb èxit.","OPERATION_SUCCESS":"Amb èxit","YES":"Sí","NO":"No","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Error al intentar obrir el fitxer de contingut","OPEN_OTHER_PROJECT":"Obrir un altre Projecte","OPEN_OTHER_PROJECT_QUESTION":"Obrir aquest fitxer implica obrir un altre projecte (%s). El projecte actual serà tancat. Vol continuar?"}

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Zur Webseite","UNLOAD_ACTIVE_TAB":"Du hast ungespeicherte Änderungen, willst du die Seite wirklich verlassen?","EDIT_METADATA":"Metadaten bearbeiten","EDIT":"Bearbeiten","DELETE":"Löschen","PREVIEW":"Vorschau","ALTS":"Alternativen","PRIMARY_ALT":"Primär","PRIMARY_OVERLAY":"Überlagert","ADD_CHILD_PAGE":"Seite hinzufügen","ADD_ATTACHMENT":"Anhang hinzufügen","ATTACHMENT_ACTIONS":"Anhang-Aktionen","PAGE_ACTIONS":"Seiten-Aktionen","NO_CHILD_PAGES":"Keine Unterseiten","CHILD_PAGES":"Unterseiten","NO_ATTACHMENTS":"Keine Anhänge","ATTACHMENTS":"Anhänge","ADD_ATTACHMENT_TO":"Anhang zu “%s” hinzufügen","ADD_ATTACHMENT_NOTE":"Hier kannst du neue Anhänge hochladen.","UPLOAD":"Hochladen","PROGRESS":"Fortschritt","ERROR_PREFIX":"Fehler: ","ERROR_NO_ID_PROVIDED":"Es wurde keine ID eingegeben.","ERROR_PAGE_ID_DUPLICATE":"Eine Seite mit dieser ID (%s) existiert bereits.","ERROR_INVALID_ID":"Ungültige ID","ERROR_INVALID_DATE":"Ungültiges Datum","ERROR_INVALID_NUMBER":"Ungültige Zahl","ERROR_INVALID_URL":"Ungültige URL","ERROR":"Fehler","ERROR_OCURRED":"Ein Fehler ist aufgetreten","ERROR_REQUEST_FAILED":"Ein Befehl konnte nicht an den Server gesendet werden. Eventuell reagiert der Server nicht oder wurde gestoppt.","ERROR_SERVER_UNAVAILABLE":"Server unerreichbar","ERROR_SERVER_UNAVAILABLE_MESSAGE":"Der Server reagiert nicht. Entweder er wurde gestoppt oder ein kritischer Fehler ist aufgetreten und er muss neu gestartet werden.","MODEL":"Modell","ADD_CHILD_PAGE_TO":"Unterseite zu “%s” hinzufügen","ADD_CHILD_PAGE_NOTE":"Du kannst hier eine neue Unterseite hinzufügen.  Beachte, dass die ID und as Modell später nicht mehr verändert werden kann.","CREATE_CHILD_PAGE":"Unterseite hinzufügen","DELETE_ATTACHMENT_PROMPT":"Willst du den Anhang wirklich löschen?","DELETE_ATTACHMENT_ALT_PROMPT":"Willst du die Metadaten dieser Anhang-Alternative wirklich löschen?","DELETE_PAGE_PROMPT":"Willst du diese Seite wirklich löschen?","DELETE_PAGE_ALT_PROMPT":"Willst du diese Alternative wirklich löschen?","DELETE_PAGE_CHILDREN_WARNING":"Dies wird auch die Unterseiten der Seite löschen.","DELETE_RECORD":"“%s” Löschen","DELETE_ALL_PAGE_ALTS":"Alle Alternativen und angehängten Dateien mitlöschen.","DELETE_ALL_ATTACHMENT_ALTS":"Alle Alternativen und die angehängte Datei löschen.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Nur den Primäreintrag löschen. Anhänge, andere Alternativen und Unterseiten werden nicht gelöscht.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Nur die Metadaten des Primäreintrages löschen.","DELETE_PRIMARY_ALT_INFO":"Da dieser Eintrag eine Primäralternative ist, kann diese auch separat gelöscht werden oder zusammen mit allen anderen Inhalten.","CHILD_PAGES_TO_BE_DELETED":"Unterseiten, die gelöscht werden:","ALTS_TO_BE_DELETED":"Alternativen, die gelöscht werden:","ATTACHMENTS_TO_BE_DELETED":"Anhänge, die gelöscht werden:","YES_DELETE":"Ja, löschen","NO_CANCEL":"Nein, abbrechen","SYSTEM_FIELDS":"Systemfelder","EDIT_ATTACHMENT_METADATA_OF":"Bearbeite Metadaten von Anhang “%s”","EDIT_PAGE_NAME":"Bearbeite “%s”","SAVE_CHANGES":"Änderungen speichern","BROWSE_FS":"Im Dateisystem öffnen","BROWSE_FS_MAC":"In Finder anzeigen","BROWSE_FS_WINDOWS":"Im Explorer öffnen","ERROR_CANNOT_BROWSE_FS":"Fehler: Datei existiert noch nicht","REMOVE_FLOWBLOCK_PROMPT":"Willst du diesen Block wirklich entfernen?","ADD_FLOWBLOCK":"Block hinzufügen","INVALID_INPUT":"Ungültige Eingabe","UP":"Nach oben","DOWN":"Nach unten","REMOVE":"Entfernen","ID":"ID","CLOSE":"Schließen","CANCEL":"Abbrechen","BACK_TO_OVERVIEW":"Übersicht","PUBLISH":"Veröffentlichen","PUBLISH_NOTE":"Von hier aus kann der aktuelle Stand der Webseite publiziert werden.","PUBLISH_SERVER":"Ziel-Server","CURRENTLY_PUBLISHING":"Veröffentlichung …","STATE":"Status","PUBLISH_DONE":"Veröffentlicht","PUBLISH_STATE_BUILDING":"Änderungen werden gebaut ...","PUBLISH_STATE_PUBLISH":"Änderungen werden publiziert ...","PUBLISH_STATE_DONE":"Veröffentlichung fertiggestellt.","FIND_FILES":"Seiten Finden","FIND_FILES_PLACEHOLDER":"Seitenname eingeben ...","ATTACHMENT_TYPE":"Attachment type","URL_SLUG":"URL-Slug","TEMPLATE":"Vorlage","HIDE_PAGE":"Seite verstecken","HIDE_PAGE_EXPLANATION":"Soll diese Seite versteckt werden?","PAGE_IS_DISCOVERABLE":"Seite ist erkundbar","PAGE_IS_DISCOVERABLE_EXPLANATION":"Wenn dies aktiviert ist, wird Seite von Vorlagen verlinkt. Ansonsten muss die URL bekannt sein.","REFRESH_BUILD":"Änderungen regenerieren","REFRESH_BUILD_NOTE":"In machen Situationen kann es nützlich sein, alle Änderungen zu regenerieren.  Zum Beispiel können Synchronisationsfehler und kaputte Vorlagen manchmal dazu führen, dass Seiten fehlerhaft gebaut wurden.  Dies bringt Lektor dazu, alle Seiten neu zu bauen.","CURRENTLY_REFRESHING_BUILD":"Änderungen werden regeneriert ...","REFRESHING_BUILD_DONE":"Änderungen wurden regeneriert!","FAILED_TO_LAUNCH_LEKTOR":"Lektor konnte nicht gestartet werden.","PROJECT":"Projekt","CLOSE_PROJECT":"Projekt schließen","OPEN_PROJECT":"Projekt öffnen","BROWSE_WEBSITE":"Webseite anzeigen","VIEW_ADMIN_PANEL":"Admin-Panel öffnen","QUIT":"Beenden","FAILED_TO_LOAD_PROJECT":"Projekt konnte nicht geladen werden :(","LOADING_PROJECT":"Projekt wird geöffnet ...","INITIALIZING_LEKTOR":"Initialisiere Lektor ...","QUIT_LEKTOR":"Lektor beenden","FILE":"Datei","UNDO":"Rückgängig","REDO":"Wiederholen","CUT":"Ausschneiden","COPY":"Kopieren","PASTE":"Einfügen","SELECT_ALL":"Alles Markieren","HELP":"Hilfe","VISIT_WEBSITE":"Webseite öffnen","INSTALL_SHELL_COMMAND":"Shell-Befehl installieren","INSTALL_SHELL_COMMAND_QUESTION":"Möchtest du den 'lektor' Shell-Befehl installieren? Dies erfordert Admin-Rechte.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Konnte Shell-Befehl nicht installieren.","INSTALL_SHELL_COMMAND_SUCCESS":"Shell-Befehl wurde erfolgreich installiert.","OPERATION_SUCCESS":"Operation erfolgreich","YES":"Ja","NO":"Nein","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Konnte Datei nicht öffnen","OPEN_OTHER_PROJECT":"Anderes Projekt öffnen","OPEN_OTHER_PROJECT_QUESTION":"Um diese Datei zu öffnen, muss ein anderes Projekt (%s) geöffnet werden. Das aktuelle Projekt wird dadurch geschlossen. Fortfahren?"}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Return to Website","UNLOAD_ACTIVE_TAB":"You have unsaved information, are you sure you want to leave this page?","EDIT_METADATA":"Edit Metadata","EDIT":"Edit","DELETE":"Delete","PREVIEW":"Preview","ALTS":"Alternatives","PRIMARY_ALT":"Primary","PRIMARY_OVERLAY":"Overlaid","ADD_CHILD_PAGE":"Add Page","ADD_ATTACHMENT":"Add Attachment","ATTACHMENT_ACTIONS":"Attachment Actions","PAGE_ACTIONS":"Page Actions","NO_CHILD_PAGES":"No Subpages","CHILD_PAGES":"Subpages","NO_ATTACHMENTS":"No attachments","ATTACHMENTS":"Attachments","ADD_ATTACHMENT_TO":"Add Attachment to “%s”","ADD_ATTACHMENT_NOTE":"You can upload a new attachment here.","UPLOAD":"Upload","PROGRESS":"Progress","ERROR_PREFIX":"Error: ","ERROR_NO_ID_PROVIDED":"No ID provided.","ERROR_PAGE_ID_DUPLICATE":"A page with this ID (%s) exists already.","ERROR_INVALID_ID":"Invalid ID","ERROR_INVALID_DATE":"Invalid date","ERROR_INVALID_NUMBER":"Not a valid number","ERROR_INVALID_URL":"Not a valid URL","ERROR":"Error","ERROR_OCURRED":"An Error ocurred","ERROR_REQUEST_FAILED":"Could not send command to server.  Maybe the server was stopped or is unresponsive?","ERROR_SERVER_UNAVAILABLE":"Server Unavailable","ERROR_SERVER_UNAVAILABLE_MESSAGE":"The server is not responding.  Either it was stopped or a critical error made it not operable and it needs to be restarted.","MODEL":"Model","ADD_CHILD_PAGE_TO":"Add Subpage to “%s”","ADD_CHILD_PAGE_NOTE":"You can add a new subpage to the page here.  Note that the model or ID cannot be easily changed afterwards.","CREATE_CHILD_PAGE":"Add Child Page","DELETE_ATTACHMENT_PROMPT":"Do you really want to delete this attachment?","DELETE_ATTACHMENT_ALT_PROMPT":"Do you really want to delete the metadata of this attachment alternative?","DELETE_PAGE_PROMPT":"Do you really want to delete this page?","DELETE_PAGE_ALT_PROMPT":"Do you really want to delete this alternative?","DELETE_PAGE_CHILDREN_WARNING":"This will also delete the child subpages of this page.","DELETE_RECORD":"Delete “%s”","DELETE_ALL_PAGE_ALTS":"Also delete all alternatives and attached files.","DELETE_ALL_ATTACHMENT_ALTS":"Delete all alternatives and the attached file.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Delete only the primary record.  Attachments, alternatives and subpages will not be deleted.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Only delete the Metadata of the primary record.","DELETE_PRIMARY_ALT_INFO":"Because this record is a primary alternative it can be deleted separately or together with all other contents.","CHILD_PAGES_TO_BE_DELETED":"Subpages that will be deleted:","ALTS_TO_BE_DELETED":"Alternatives that will be deleted:","ATTACHMENTS_TO_BE_DELETED":"Attachments that will be deleted:","YES_DELETE":"Yes, delete","NO_CANCEL":"No, cancel","SYSTEM_FIELDS":"System Fields","EDIT_ATTACHMENT_METADATA_OF":"Edit Metadata of Attachment “%s”","EDIT_PAGE_NAME":"Edit “%s”","SAVE_CHANGES":"Save Changes","BROWSE_FS":"Browse in Filesystem","BROWSE_FS_MAC":"Reveal in Finder","BROWSE_FS_WINDOWS":"Open in Explorer","ERROR_CANNOT_BROWSE_FS":"Error: File does not exist yet.","REMOVE_FLOWBLOCK_PROMPT":"Do you really want to remove this block?","ADD_FLOWBLOCK":"Add Block","INVALID_INPUT":"Invalid Input","UP":"Up","DOWN":"Down","REMOVE":"Remove","ID":"ID","CLOSE":"Close","CANCEL":"Cancel","BACK_TO_OVERVIEW":"Back to Overview","PUBLISH":"Publish","PUBLISH_NOTE":"From here you can publish the current version of the website.","PUBLISH_SERVER":"Target Server","CURRENTLY_PUBLISHING":"Publishing …","STATE":"Status","PUBLISH_DONE":"Published","PUBLISH_STATE_BUILDING":"Changes are being built ...","PUBLISH_STATE_PUBLISH":"Changes are being published ...","PUBLISH_STATE_DONE":"Publishing done.","FIND_FILES":"Find Files","FIND_FILES_PLACEHOLDER":"Enter page name ...","ATTACHMENT_TYPE":"Attachment type","URL_SLUG":"URL slug","TEMPLATE":"Template","HIDE_PAGE":"Hide page","HIDE_PAGE_EXPLANATION":"Should this page be hidden?","PAGE_IS_DISCOVERABLE":"Page is discoverable","PAGE_IS_DISCOVERABLE_EXPLANATION":"If this is enabled the page can be discovered, otherwise the URL has to be known.","REFRESH_BUILD":"Refresh Build","REFRESH_BUILD_NOTE":"This deletes all cached build results which triggers a rebuilt from scratch.  This is useful in certain situations where sync errors or mistakes in templates caused corrupted output.","CURRENTLY_REFRESHING_BUILD":"Currently refreshing build ...","REFRESHING_BUILD_DONE":"Done refreshing build!","FAILED_TO_LAUNCH_LEKTOR":"Failed to launch Lektor.","PROJECT":"Project","CLOSE_PROJECT":"Close Project","OPEN_PROJECT":"Open Project","BROWSE_WEBSITE":"Browse Website","VIEW_ADMIN_PANEL":"View Admin Panel","QUIT":"Quit","FAILED_TO_LOAD_PROJECT":"Failed to load the project :(","LOADING_PROJECT":"Loading project ...","INITIALIZING_LEKTOR":"Initializing Lektor ...","QUIT_LEKTOR":"Quit Lektor","FILE":"File","UNDO":"Undo","REDO":"Redo","CUT":"Cut","COPY":"Copy","PASTE":"Paste","SELECT_ALL":"Select All","HELP":"Help","VISIT_WEBSITE":"Visit Website","INSTALL_SHELL_COMMAND":"Install Shell Command","INSTALL_SHELL_COMMAND_QUESTION":"Do you want to install the 'lektor' shell command? This requires admin rights.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Failed to install shell commands.","INSTALL_SHELL_COMMAND_SUCCESS":"Shell command was successfully installed.","OPERATION_SUCCESS":"Success","YES":"Yes","NO":"No","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Failed to open content file","OPEN_OTHER_PROJECT":"Open other Project","OPEN_OTHER_PROJECT_QUESTION":"Opening this file requires opening another project (%s). The current project will be closed. Do you want to continue?"}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Volver al Sitio Web","UNLOAD_ACTIVE_TAB":"Tiene información sin guardar, está seguro de que quiere abandonar esta página?","EDIT_METADATA":"Editar Metadatos","EDIT":"Editar","DELETE":"Borrar","PREVIEW":"Previsualizar","ALTS":"Alternativas","PRIMARY_ALT":"Primaria","PRIMARY_OVERLAY":"Overlaid","ADD_CHILD_PAGE":"Añadir Página","ADD_ATTACHMENT":"Añadir Adjunto","ATTACHMENT_ACTIONS":"Acciones de Adjunto","PAGE_ACTIONS":"Acciones de Página","NO_CHILD_PAGES":"Sin Subpáginas","CHILD_PAGES":"Subpáginas","NO_ATTACHMENTS":"Sin Adjuntos","ATTACHMENTS":"Adjuntos","ADD_ATTACHMENT_TO":"Añadir Adjunto a “%s”","ADD_ATTACHMENT_NOTE":"Puede cargar un nuevo adjunto aquí.","UPLOAD":"Cargar","PROGRESS":"Avance","ERROR_PREFIX":"Error: ","ERROR_NO_ID_PROVIDED":"No se proporcionó un ID.","ERROR_PAGE_ID_DUPLICATE":"Ya existe una página con este ID (%s).","ERROR_INVALID_ID":"ID inválido","ERROR_INVALID_DATE":"Fecha inválida","ERROR_INVALID_NUMBER":"Número no válido","ERROR_INVALID_URL":"URL no válida","ERROR":"Error","ERROR_OCURRED":"Ocurrió un Error","ERROR_REQUEST_FAILED":"No se pudo enviar el comando al servidor.  ¿Es posible que el servidor esté apagado o no responda?","ERROR_SERVER_UNAVAILABLE":"Servidor No Disponible","ERROR_SERVER_UNAVAILABLE_MESSAGE":"El servidor no responde.  Fue apagado o hubo un error crítico que lo hace inoperativo y necesita ser reiniciado.","MODEL":"Modelo","ADD_CHILD_PAGE_TO":"Añada Subpágina a “%s”","ADD_CHILD_PAGE_NOTE":"Puede añadir una nueva subpágina aquí.  Tenga en cuenta que el modelo o el ID no puede ser cambiado fácilmente más tarde.","CREATE_CHILD_PAGE":"Añada Página Hijo","DELETE_ATTACHMENT_PROMPT":"¿Quiere realmente borrar este anexo?","DELETE_ATTACHMENT_ALT_PROMPT":"¿Quiere realmente borrar los metadatos de esta alternativa de anexo?","DELETE_PAGE_PROMPT":"¿Quiere realmente borrar esta página?","DELETE_PAGE_ALT_PROMPT":"¿Quiere realmente borrar esta alternativa?","DELETE_PAGE_CHILDREN_WARNING":"Esto también borrará las subpáginas hijo de esta página.","DELETE_RECORD":"Borrar “%s”","DELETE_ALL_PAGE_ALTS":"Borrar también todas las alternativas y ficheros adjuntos.","DELETE_ALL_ATTACHMENT_ALTS":"Borrar todas las alternativas y el fichero adjunto.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Borra sólo el registro principal.  Los adjuntos, las alternativas y las subpáginas no serán borradas.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Borra sólo los metadatos del registro principal.","DELETE_PRIMARY_ALT_INFO":"Como este registro es una alternativa principal, puede ser borrado por separado o junto al resto de contenidos.","CHILD_PAGES_TO_BE_DELETED":"Subpáginas que serán borradas:","ALTS_TO_BE_DELETED":"Alternativas que serán borradas:","ATTACHMENTS_TO_BE_DELETED":"Adjuntos que serán borrados:","YES_DELETE":"Sí, borrar","NO_CANCEL":"No, cancelar","SYSTEM_FIELDS":"Campos de Sistema","EDIT_ATTACHMENT_METADATA_OF":"Editar los Metadatos del Adjunto “%s”","EDIT_PAGE_NAME":"Editar “%s”","SAVE_CHANGES":"Guardar los cambios","BROWSE_FS":"Navegar en el Sistema de ficheros","BROWSE_FS_MAC":"Mostrar en el Finder","BROWSE_FS_WINDOWS":"Abrir en el Explorador","ERROR_CANNOT_BROWSE_FS":"Error: el fichero no existe todavía.","REMOVE_FLOWBLOCK_PROMPT":"¿Quiere realmente borrar este bloque?","ADD_FLOWBLOCK":"Añadir Bloque","INVALID_INPUT":"Entrada inválida","UP":"Arriba","DOWN":"Abajo","REMOVE":"Eliminar","ID":"ID","CLOSE":"Cerrar","CANCEL":"Cancelar","BACK_TO_OVERVIEW":"Vuelve a Revisión","PUBLISH":"Publicar","PUBLISH_NOTE":"Desde aquí puede publicar la versión actual del sitio web.","PUBLISH_SERVER":"Servidor Destino","CURRENTLY_PUBLISHING":"Publicando …","STATE":"Estado","PUBLISH_DONE":"Publicado","PUBLISH_STATE_BUILDING":"Los cambios se están generando ...","PUBLISH_STATE_PUBLISH":"Los cambios están siendo publicados ...","PUBLISH_STATE_DONE":"Publicación finalizada.","FIND_FILES":"Encontrar Ficheros","FIND_FILES_PLACEHOLDER":"Introduzca el nombre de la página ...","ATTACHMENT_TYPE":"Tipo de adjunto","URL_SLUG":"URL personalizada","TEMPLATE":"Plantilla","HIDE_PAGE":"Ocultar página","HIDE_PAGE_EXPLANATION":"¿Debería estar oculta esta página?","PAGE_IS_DISCOVERABLE":"La Página es detectable","PAGE_IS_DISCOVERABLE_EXPLANATION":"Si esto está habilitado la página puede ser detectada, en caso contrario la URL ha de ser conocida.","REFRESH_BUILD":"Refrescar la Generación","REFRESH_BUILD_NOTE":"Esto borra todos los resultados generados y lanza una nueva generación desde cero. Esto es útil en ciertas situaciones donde errores de sincronización o en las plantillas causaron un resultado corrupto.","CURRENTLY_REFRESHING_BUILD":"Regenerando ...","REFRESHING_BUILD_DONE":"¡Acabó la regeneración!","FAILED_TO_LAUNCH_LEKTOR":"Falló la ejecución de Lektor.","PROJECT":"Proyecto","CLOSE_PROJECT":"Cerrar Proyecto","OPEN_PROJECT":"Abrir Proyecto","BROWSE_WEBSITE":"Navegar Sitio Web","VIEW_ADMIN_PANEL":"Ver Panel de Administración","QUIT":"Salir","FAILED_TO_LOAD_PROJECT":"Falló la carga del proyecto :(","LOADING_PROJECT":"Cargando proyecto ...","INITIALIZING_LEKTOR":"Inicializando Lektor ...","QUIT_LEKTOR":"Salir de Lektor","FILE":"Archivo","UNDO":"Deshacer","REDO":"Rehacer","CUT":"Cortar","COPY":"Copiar","PASTE":"Pegar","SELECT_ALL":"Seleccionar Todo","HELP":"Ayuda","VISIT_WEBSITE":"Visitar Web","INSTALL_SHELL_COMMAND":"Instalar Comando","INSTALL_SHELL_COMMAND_QUESTION":"¿Quiere instalar el comando 'lektor'? Son necesarios privilegios de administrador.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Falló la instalación de los comandos.","INSTALL_SHELL_COMMAND_SUCCESS":"El comando se instaló con éxito.","OPERATION_SUCCESS":"Con éxito","YES":"Sí","NO":"No","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Falló al abrir el fichero de contenido","OPEN_OTHER_PROJECT":"Abrir otro Proyecto","OPEN_OTHER_PROJECT_QUESTION":"Abrir este fichero requiere abrir otro proyecto (%s). El proyecto actual será cerrado. ¿Quiere continuar?"}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Retour au site Web","UNLOAD_ACTIVE_TAB":"Des informations ne sont pas enregistrées, voulez-vous vraiment quitter cette page ?","EDIT_METADATA":"Modifier les métadonnées","EDIT":"Modifier","DELETE":"Supprimer","PREVIEW":"Aperçu","ALTS":"Alternatives","PRIMARY_ALT":"Primaire","PRIMARY_OVERLAY":"Superposée","ADD_CHILD_PAGE":"Ajouter une page","ADD_ATTACHMENT":"Joindre un fichier","ATTACHMENT_ACTIONS":"Actions sur les fichiers joints","PAGE_ACTIONS":"Action sur les pages","NO_CHILD_PAGES":"Aucune sous-page","CHILD_PAGES":"Sous-pages","NO_ATTACHMENTS":"Aucun fichier joint","ATTACHMENTS":"Fichiers joints","ADD_ATTACHMENT_TO":"Joindre un fichier à « %s »","ADD_ATTACHMENT_NOTE":"Vous pouvez téléverser un nouveau fichier joint ici.","UPLOAD":"Téléverser","PROGRESS":"Progression","ERROR_PREFIX":"Erreur : ","ERROR_NO_ID_PROVIDED":"Erreur : aucun ID fourni.","ERROR_PAGE_ID_DUPLICATE":"Une page avec cet ID (%s) existe déjà.","ERROR_INVALID_ID":"ID non valide","ERROR_INVALID_DATE":"Date non valide","ERROR_INVALID_NUMBER":"Nombre non valide","ERROR_INVALID_URL":"URL non valide","ERROR":"Erreur","ERROR_OCURRED":"Une erreur a été rencontrée","ERROR_REQUEST_FAILED":"La commande n'a pas pu être envoyée au serveur. Le serveur a peut-être été arrêté ou ne répond plus ?","ERROR_SERVER_UNAVAILABLE":"Serveur indisponible","ERROR_SERVER_UNAVAILABLE_MESSAGE":"Le serveur ne répond pas. Il a dû être arrêté ou une erreur critique l'a rendu inopérant et il doit être redémarré.","MODEL":"Modèle","ADD_CHILD_PAGE_TO":"Ajouter une sous-page à « %s »","ADD_CHILD_PAGE_NOTE":"Vous pouvez ajouter une nouvelle sous-page à la page ici. Veuillez noter que le modèle ou l'ID ne peut pas être changé facilement ultérieurement.","CREATE_CHILD_PAGE":"Ajouter une sous-page","DELETE_ATTACHMENT_PROMPT":"Voulez-vous vraiment supprimer ce fichier joint ?","DELETE_ATTACHMENT_ALT_PROMPT":"Voulez-vous vraiment supprimer les métadonnées de ce fichier joint alternatif ?","DELETE_PAGE_PROMPT":"Voulez-vous vraiment supprimer cette page ?","DELETE_PAGE_ALT_PROMPT":"Voulez-vous vraiment supprimer cette version alternative ?","DELETE_PAGE_CHILDREN_WARNING":"Cela supprimera aussi les sous-pages de cette page.","DELETE_RECORD":"Supprimer « %s »","DELETE_ALL_PAGE_ALTS":"Supprimer aussi toutes les versions alternatives et les fichiers joints.","DELETE_ALL_ATTACHMENT_ALTS":"Supprimer toutes les versions alternatives et les fichiers joints.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Supprimer seulement le premier enregistrement. Les fichiers joints, versions alternatives et sous-pages ne seront pas supprimées.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Supprimer seulement les métadonnées de la pièce jointe primaire.","DELETE_PRIMARY_ALT_INFO":"Cet enregistrement étant l'alternative primaire, il peut être supprimé séparément ou avec tous les autres contenus.","CHILD_PAGES_TO_BE_DELETED":"Les sous-pages qui seront supprimées :","ALTS_TO_BE_DELETED":"Les versions alternatives qui seront supprimées :","ATTACHMENTS_TO_BE_DELETED":"Les fichiers joints qui seront supprimés :","YES_DELETE":"Oui, supprimer","NO_CANCEL":"Non, annuler","SYSTEM_FIELDS":"Champs système","EDIT_ATTACHMENT_METADATA_OF":"Modifier les métadonnées du fichier joint « %s »","EDIT_PAGE_NAME":"Modifier « %s »","SAVE_CHANGES":"Enregistrer les changements","BROWSE_FS":"Parcourir le système de fichiers","BROWSE_FS_MAC":"Révéler dans le Finder","BROWSE_FS_WINDOWS":"Ouvrir dans l'Explorateur","ERROR_CANNOT_BROWSE_FS":"Erreur : le fichier n'existe pas encore.","REMOVE_FLOWBLOCK_PROMPT":"Voulez-vous vraiment supprimer ce bloc ?","ADD_FLOWBLOCK":"Ajouter un bloc","INVALID_INPUT":"Saisie non valide","UP":"Haut","DOWN":"Bas","REMOVE":"Enlever","ID":"ID","CLOSE":"Fermer","CANCEL":"Annuler","BACK_TO_OVERVIEW":"Retour à l'aperçu","PUBLISH":"Publier","PUBLISH_NOTE":"À partir de maintenant, vous pouvez publier la version actuelle de votre site Web.","PUBLISH_SERVER":"Serveur cible","CURRENTLY_PUBLISHING":"Publication en cours…","STATE":"Statut","PUBLISH_DONE":"Publié","PUBLISH_STATE_BUILDING":"Les changements sont en cours de construction…","PUBLISH_STATE_PUBLISH":"Les changements  sont en cours de publication…","PUBLISH_STATE_DONE":"Publication effectuée.","FIND_FILES":"Trouver les fichiers","FIND_FILES_PLACEHOLDER":"Saisir le nom de la page…","ATTACHMENT_TYPE":"Type de fichier joint","URL_SLUG":"Motif d'URL (slug)","TEMPLATE":"Modèle","HIDE_PAGE":"Masquer la page","HIDE_PAGE_EXPLANATION":"Est-ce que cette page devrait être masquée ?","PAGE_IS_DISCOVERABLE":"La page est « découvrable »","PAGE_IS_DISCOVERABLE_EXPLANATION":"Si activé, la page pourra être retrouvée car elle sera indexée, sinon l'URL devra être connue pour y accéder.","REFRESH_BUILD":"Actualiser la construction","REFRESH_BUILD_NOTE":"Cela supprime tous les résultats de la construction et entraîne une reconstruction complète. C'est utile dans certaines situations où le résultat est corrompu suite à des erreurs de synchronisation ou de modèles.","CURRENTLY_REFRESHING_BUILD":"Actualisation de la construction en cours…","REFRESHING_BUILD_DONE":"Actualisation de la construction terminée","FAILED_TO_LAUNCH_LEKTOR":"Impossible de lancer Lektor.","PROJECT":"Projet","CLOSE_PROJECT":"Fermer le projet","OPEN_PROJECT":"Ouvrir le projet","BROWSE_WEBSITE":"Ouvrir le site Web","VIEW_ADMIN_PANEL":"Voir le panneau administrateur","QUIT":"Quitter","FAILED_TO_LOAD_PROJECT":"Impossible de charger le projet :(","LOADING_PROJECT":"Chargement du projet…","INITIALIZING_LEKTOR":"Initialisation de Lektor…","QUIT_LEKTOR":"Quitter Lektor","FILE":"Fichier","UNDO":"Annuler","REDO":"Rétablir","CUT":"Couper","COPY":"Copier","PASTE":"Coller","SELECT_ALL":"Sélectionner tout","HELP":"Aide","VISIT_WEBSITE":"Visiter le site Web","INSTALL_SHELL_COMMAND":"Installer la commande shell","INSTALL_SHELL_COMMAND_QUESTION":"Voulez-vous installer la commande shell « lektor » ? Cela nécessite des droits administrateurs.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Impossible d'installer les commandes shell.","INSTALL_SHELL_COMMAND_SUCCESS":"La commande shell  a été correctement installée.","OPERATION_SUCCESS":"Succès","YES":"Oui","NO":"Non","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Impossible d'ouvir le contenu du fichier","OPEN_OTHER_PROJECT":"Ouvrir un autre projet","OPEN_OTHER_PROJECT_QUESTION":"Ouvrir ce fichier nécessite d'ouvrir un autre projet (%s). Le projet actuel sera fermé. Voulez-vous vraiment continuer ?"}

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Torna al sito web","UNLOAD_ACTIVE_TAB":"Hai informazioni non salvate, sei sicuro di voler abbandonare questa pagina?","EDIT_METADATA":"Modifica metadati","EDIT":"Modifica","DELETE":"Cancella","PREVIEW":"Anteprima","ALTS":"Alternative","PRIMARY_ALT":"Primaria","PRIMARY_OVERLAY":"Sovrascritta","ADD_CHILD_PAGE":"Aggiungi pagina","ADD_ATTACHMENT":"Aggiungi allegato","ATTACHMENT_ACTIONS":"Azioni sull'allegato","PAGE_ACTIONS":"Azioni sulla pagina","NO_CHILD_PAGES":"Nessuna sottopagina","CHILD_PAGES":"Sottopagine","NO_ATTACHMENTS":"Nessun alleagto","ATTACHMENTS":"Allegati","ADD_ATTACHMENT_TO":"Aggiungi allegato a “%s”","ADD_ATTACHMENT_NOTE":"Puoi caricare un allegato qui.","UPLOAD":"Carica","PROGRESS":"Avanzamento","ERROR_PREFIX":"Errore: ","ERROR_NO_ID_PROVIDED":"Nessun ID fornito.","ERROR_PAGE_ID_DUPLICATE":"Una pagina con questo ID (%s) esiste già.","ERROR_INVALID_ID":"ID non valido","ERROR_INVALID_DATE":"Data non valida","ERROR_INVALID_NUMBER":"Non è un numero valido","ERROR_INVALID_URL":"Non è un indirizzo valido","ERROR":"Errore","ERROR_OCURRED":"È capitato un errore","ERROR_REQUEST_FAILED":"Impossibile inviare comandi al server.  Magari il server è stato spento o è sovraccarico?","ERROR_SERVER_UNAVAILABLE":"Server non disponibile","ERROR_SERVER_UNAVAILABLE_MESSAGE":"Il server non risponde.  Può essere spento o un errore critico l'ha reso non operativo ed è necessario riavviarlo.","MODEL":"Modello","ADD_CHILD_PAGE_TO":"Aggiungi sottopagina a “%s”","ADD_CHILD_PAGE_NOTE":"Puoi aggiungere una nuova sottopagina qui.  Tieni presente che il modello o l'ID non potranno essere cambiati facilmente in futuro.","CREATE_CHILD_PAGE":"Aggiungi sottopagina","DELETE_ATTACHMENT_PROMPT":"Vuoi veramente cancellare questo allegato?","DELETE_ATTACHMENT_ALT_PROMPT":"Vuoi veramente cancellare i metadati di questa alternativa all'allegato?","DELETE_PAGE_PROMPT":"Vuoi veramente cancellare questa pagina?","DELETE_PAGE_ALT_PROMPT":"Vuoi veramente cancellare questa alternativa?","DELETE_PAGE_CHILDREN_WARNING":"Questo cancellerà anche le sottopagine di questa pagina.","DELETE_RECORD":"Cancella “%s”","DELETE_ALL_PAGE_ALTS":"Cancella anche tutte le alternative ed i file allegati.","DELETE_ALL_ATTACHMENT_ALTS":"Cancella tutte le alternative ed il file allegato.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Cancella solo la pagina principale. Allegati, alternative e sottopagine nnon verranno cancellate.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Cancella solo i metadati dell'allegato principale.","DELETE_PRIMARY_ALT_INFO":"Dato che questo oggetto è l'alternativa primaria, può essere cancellato separatamente o insieme al resto del contenuto.","CHILD_PAGES_TO_BE_DELETED":"Sottopagine che verranno cancellate:","ALTS_TO_BE_DELETED":"Alternative che verranno cancellate:","ATTACHMENTS_TO_BE_DELETED":"Allegati che verranno cancellati:","YES_DELETE":"Si, cancella","NO_CANCEL":"No, annulla","SYSTEM_FIELDS":"Campi di sistema","EDIT_ATTACHMENT_METADATA_OF":"Modifica i metadati dell'allegato “%s”","EDIT_PAGE_NAME":"Modifica “%s”","SAVE_CHANGES":"Salva modifiche","BROWSE_FS":"Apri nel filesystem","BROWSE_FS_MAC":"Apri in Finder","BROWSE_FS_WINDOWS":"Apri in Esplora risorse","ERROR_CANNOT_BROWSE_FS":"Errore: il file non esiste.","REMOVE_FLOWBLOCK_PROMPT":"Vuoi davvero cancellare questo blocco?","ADD_FLOWBLOCK":"Aggiungi blocco","INVALID_INPUT":"Input invalido","UP":"Su","DOWN":"Giù","REMOVE":"Rimuovi","ID":"ID","CLOSE":"Chiudi","CANCEL":"Annulla","BACK_TO_OVERVIEW":"Torna alla panoramica","PUBLISH":"Pubblica","PUBLISH_NOTE":"Da qui puoi pubblicare la versione corrente del sito web.","PUBLISH_SERVER":"Server di destinazione","CURRENTLY_PUBLISHING":"Pubblicazione in corso...","STATE":"Stato","PUBLISH_DONE":"Pubblicato","PUBLISH_STATE_BUILDING":"Costruendo le pagine modificate...","PUBLISH_STATE_PUBLISH":"Pubblicando le pagine modificate...","PUBLISH_STATE_DONE":"Pubblicazione completata.","FIND_FILES":"Trova i file","FIND_FILES_PLACEHOLDER":"Inserisci il nome della pagina...","ATTACHMENT_TYPE":"Tipo dell'allegato","URL_SLUG":"Alias della pagina","TEMPLATE":"Template","HIDE_PAGE":"Nascondi pagina","HIDE_PAGE_EXPLANATION":"Questa pagina deve essere nascosta?","PAGE_IS_DISCOVERABLE":"La pagina può essere scoperta?","PAGE_IS_DISCOVERABLE_EXPLANATION":"Se è abilitato la pagina può essere scoperta, altrimenti l'indirizzo deve essere noto.","REFRESH_BUILD":"Esegui build completa","REFRESH_BUILD_NOTE":"Questo cancella tutti i risultati precedenti, eseguendo una build completa.  Questo è utile in casi in cui errori di sincronizzazione o errori nei template rendono il risultato corrotto.","CURRENTLY_REFRESHING_BUILD":"Eseguendo build completa...","REFRESHING_BUILD_DONE":"Build completa eseguita!","FAILED_TO_LAUNCH_LEKTOR":"Impossibile eseguire Lektor.","PROJECT":"Progetto","CLOSE_PROJECT":"Chiudi progetto","OPEN_PROJECT":"Apri progetto","BROWSE_WEBSITE":"Naviga nel sito web","VIEW_ADMIN_PANEL":"Mostra pannello di amministrazione","QUIT":"Esci","FAILED_TO_LOAD_PROJECT":"Impossibile caricare il progetto :(","LOADING_PROJECT":"Caricamento del progetto...","INITIALIZING_LEKTOR":"Preparazione di Lektor...","QUIT_LEKTOR":"Esci da Lektor","FILE":"File","UNDO":"Annulla","REDO":"Ripeti","CUT":"Taglia","COPY":"Copia","PASTE":"Incolla","SELECT_ALL":"Seleziona tutto","HELP":"Aiuto","VISIT_WEBSITE":"Visita il sito web","INSTALL_SHELL_COMMAND":"Installa comando shell","INSTALL_SHELL_COMMAND_QUESTION":"Vuoi installare il comando shell 'lektor'? Questo richiede privilegi di amministrazione.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Impossibile installare il comando shell.","INSTALL_SHELL_COMMAND_SUCCESS":"Il comando shell è stato installato con successo.","OPERATION_SUCCESS":"Successo","YES":"Si","NO":"No","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Impossibile aprire il file di contenuto","OPEN_OTHER_PROJECT":"Apri un altro progetto","OPEN_OTHER_PROJECT_QUESTION":"Aprire questo file richiede l'apertura di un altro progetto (%s). Il progetto corrente verrà chiuso. Vuoi proseguire?"}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Websiteに戻る","UNLOAD_ACTIVE_TAB":"保存していない編集があります、本当にページを離れますか?","EDIT_METADATA":"メタデータの編集","EDIT":"編集","DELETE":"削除","PREVIEW":"プレビュー","ALTS":"代替","PRIMARY_ALT":"プライマリー","PRIMARY_OVERLAY":"上書き","ADD_CHILD_PAGE":"ページの追加","ADD_ATTACHMENT":"アタッチメントの追加","ATTACHMENT_ACTIONS":"アタッチメントのアクション","PAGE_ACTIONS":"ページアクション","NO_CHILD_PAGES":"サブページはありません","CHILD_PAGES":"サブページ","NO_ATTACHMENTS":"アタッチメントはありません","ATTACHMENTS":"アタッチメント","ADD_ATTACHMENT_TO":"“%s”にアタッチメントを追加する","ADD_ATTACHMENT_NOTE":"ここに新しいアタッチメントをアップロードできます","UPLOAD":"アップロード","PROGRESS":"プログレス","ERROR_PREFIX":"エラー: ","ERROR_NO_ID_PROVIDED":"IDがありません","ERROR_PAGE_ID_DUPLICATE":"このID (%s) のページはすでに存在します","ERROR_INVALID_ID":"IDが不正です","ERROR_INVALID_DATE":"日付が不正です","ERROR_INVALID_NUMBER":"不正な番号です","ERROR_INVALID_URL":"URLが不正です","ERROR":"エラー","ERROR_OCURRED":"エラーが発生しました","ERROR_REQUEST_FAILED":"サーバーにコマンドが送れませんでした、サーバーが止まっているか応答がないのかもしれません","ERROR_SERVER_UNAVAILABLE":"サーバーアンアベイラブル","ERROR_SERVER_UNAVAILABLE_MESSAGE":"サーバーが応答しません、中断されたかクリティカルなエラーが発生したたためオペレーションが完了しなかったためリスタートが必要です。","MODEL":"モデル","ADD_CHILD_PAGE_TO":"“%s”にサブページを追加する","ADD_CHILD_PAGE_NOTE":"このページにサブページが作れます。注意: モデルまたはIDはその後簡単には変更できません。","CREATE_CHILD_PAGE":"チャイルドページを作る","DELETE_ATTACHMENT_PROMPT":"本当にこの添付を削除しますか？","DELETE_ATTACHMENT_ALT_PROMPT":"本当にこの添付代替のメタデータを削除しますか？","DELETE_PAGE_PROMPT":"このページを本当に削除しますか？","DELETE_PAGE_ALT_PROMPT":"この代替を本能に削除しますか?","DELETE_PAGE_CHILDREN_WARNING":"このページのサブページも削除されます","DELETE_RECORD":"“%s”を削除","DELETE_ALL_PAGE_ALTS":"すべての代替と添付も削除","DELETE_ALL_ATTACHMENT_ALTS":"すべての代替と添付を削除","DELETE_ONLY_PRIMARY_PAGE_ALT":"プライマリレコードのメタデータのみ削除。添付、代替、サブページは削除されません。","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"プライマリレコードのメタデータのみ削除","DELETE_PRIMARY_ALT_INFO":"このレコードはプライマリの代替のため、別に削除することも、他のすべてのコンポーネントともに削除することもできます。","CHILD_PAGES_TO_BE_DELETED":"サブページは削除されます:","ALTS_TO_BE_DELETED":"代替は削除されます:","ATTACHMENTS_TO_BE_DELETED":"添付は削除されます:","YES_DELETE":"はい、削除します","NO_CANCEL":"いいえ、キャンセルします","SYSTEM_FIELDS":"システムフィールド","EDIT_ATTACHMENT_METADATA_OF":"添付 “%s”のメタデータを編集","EDIT_PAGE_NAME":"“%s”を編集","SAVE_CHANGES":"編集を保存","BROWSE_FS":"ファイルシステムで閲覧する","BROWSE_FS_MAC":"ファインダーで開く","BROWSE_FS_WINDOWS":"エクスプローラで開く","ERROR_CANNOT_BROWSE_FS":"エラー: ファイルは存在しません","REMOVE_FLOWBLOCK_PROMPT":"このブロックを本当に削除しますか？","ADD_FLOWBLOCK":"ブロックを追加","INVALID_INPUT":"不正な入力","UP":"アップ","DOWN":"ダウン","REMOVE":"取り除く","ID":"ID","CLOSE":"閉じる","CANCEL":"キャンセル","BACK_TO_OVERVIEW":"オーバービューに戻る","PUBLISH":"公開","PUBLISH_NOTE":"ここから現行のウェブサイトを公開できます。","PUBLISH_SERVER":"ターゲットサーバー","CURRENTLY_PUBLISHING":"公開 …","STATE":"状態","PUBLISH_DONE":"公開中","PUBLISH_STATE_BUILDING":"変更がをビルドしています...","PUBLISH_STATE_PUBLISH":"変更が公開されました ...","PUBLISH_STATE_DONE":"公開完了","FIND_FILES":"ファイルを見つける","FIND_FILES_PLACEHOLDER":"ページ名を入力...","ATTACHMENT_TYPE":"添付タイプ","URL_SLUG":"URLストリング","TEMPLATE":"テンプレート","HIDE_PAGE":"ヘージを隠す","HIDE_PAGE_EXPLANATION":"このページを非表示にしますか?","PAGE_IS_DISCOVERABLE":"このページは外部から見ることが可能です","PAGE_IS_DISCOVERABLE_EXPLANATION":"有効にすることで、ページは発見可能になります、そうしない場合はアクセスするのにそのURLを知っている必要があります。","REFRESH_BUILD":"ビルドを更新","REFRESH_BUILD_NOTE":"これは、キャッシュ済みのビルド結果をすべて削除し、最初からの構築を開始します。同期のエラーやテンプレート内のミスにより出力が不正な場合に有効です。","CURRENTLY_REFRESHING_BUILD":"ビルドを更新中...","REFRESHING_BUILD_DONE":"ビルドを更新が完了しました!","FAILED_TO_LAUNCH_LEKTOR":"Lektorを開けるのに失敗しました","PROJECT":"プロジェクト","CLOSE_PROJECT":"プロジェクトを閉じる","OPEN_PROJECT":"プロジェクトを開ける","BROWSE_WEBSITE":"ブラウザで開く","VIEW_ADMIN_PANEL":"アドミンパネルを開く","QUIT":"終了","FAILED_TO_LOAD_PROJECT":"Failed to load the project :(","LOADING_PROJECT":"プロジェクトを読み込んでいます ...","INITIALIZING_LEKTOR":"Lektorを初期化しています ...","QUIT_LEKTOR":"Lektorを終了する","FILE":"ファイル","UNDO":"アンドゥー","REDO":"リドゥー","CUT":"カット","COPY":"コピー","PASTE":"ペースト","SELECT_ALL":"全てを選択","HELP":"ヘルプ","VISIT_WEBSITE":"Websiteを訪ねる","INSTALL_SHELL_COMMAND":"シェルコマンドをインストール","INSTALL_SHELL_COMMAND_QUESTION":"「lektor」のシェルコマンドをインストールしますか？。インストールするには管理権限が必要です。","FAILED_TO_INSTALL_SHELL_COMMANDS":"シェルコマンドのインストールに失敗しました。","INSTALL_SHELL_COMMAND_SUCCESS":"シェルコマンドのインストールに成功しました。","OPERATION_SUCCESS":"成功","YES":"はい","NO":"いいえ","OK":"了解","FAILED_TO_OPEN_CONTENT_FILE":"コンテンツファイルを開くのに失敗しました","OPEN_OTHER_PROJECT":"他のプロジェクトを開く","OPEN_OTHER_PROJECT_QUESTION":"このファイルを開くには、他のプロジェクト(%s)を開く必要があります。現在のプロジェクトは閉じられます、処理を継続しますか?"}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"사이트로 되돌아가기","UNLOAD_ACTIVE_TAB":"저장되지 않은 정보가 있습니다. 페이지를 떠나시겠습니까?","EDIT_METADATA":"메타데이터 수정","EDIT":"수정","DELETE":"삭제","PREVIEW":"미리보기","ALTS":"다른 언어","PRIMARY_ALT":"기본","PRIMARY_OVERLAY":"겹친","ADD_CHILD_PAGE":"페이지 추가","ADD_ATTACHMENT":"첨부 파일 추가","ATTACHMENT_ACTIONS":"첨부 파일 작업","PAGE_ACTIONS":"페이지 작업","NO_CHILD_PAGES":"하위 페이지 없음","CHILD_PAGES":"하위 페이지","NO_ATTACHMENTS":"첨부 파일 없음","ATTACHMENTS":"첨부 파일","ADD_ATTACHMENT_TO":"“%s“에서 첨부 파일 추가","ADD_ATTACHMENT_NOTE":"여기서 새로운 첨부 파일을 업로드할 수 있습니다.","UPLOAD":"업로드","PROGRESS":"진행","ERROR_PREFIX":"에러: ","ERROR_NO_ID_PROVIDED":"제공된 ID가 없습니다.","ERROR_PAGE_ID_DUPLICATE":"이 ID (%s) 페이지는 이미 존재합니다.","ERROR_INVALID_ID":"잘못된 ID","ERROR_INVALID_DATE":"잘못된 날짜","ERROR_INVALID_NUMBER":"유효한 숫자 아님","ERROR_INVALID_URL":"유효한 URL 아님","ERROR":"에러","ERROR_OCURRED":"오류 발생","ERROR_REQUEST_FAILED":"서버에 명령을 보내지 못했습니다. 서버가 중지되었거나 응답하지 않을 수도 있네요?","ERROR_SERVER_UNAVAILABLE":"서버를 사용할 수 없음","ERROR_SERVER_UNAVAILABLE_MESSAGE":"서버가 응답하지 않습니다. 서버가 중지되었거나, 재시작을 필요로 하는 치명적인 오류가 발생했습니다.","MODEL":"모델","ADD_CHILD_PAGE_TO":"“%s”에 하위 페이지 추가","ADD_CHILD_PAGE_NOTE":"이 페이지에서 새로운 하위 페이지를 추가할 수 있습니다.  중요, 나중에 모델이나 ID를 변경하기 어렵습니다.","CREATE_CHILD_PAGE":"하위 페이지 추가","DELETE_ATTACHMENT_PROMPT":"정말로 첨부 파일을 삭제하실 건가요?","DELETE_ATTACHMENT_ALT_PROMPT":"정말로 첨부 파일의 다른 언어에 대한 메타데이터를 삭제하실 건가요?","DELETE_PAGE_PROMPT":"정말로 이 페이지를 삭제하실 건가요?","DELETE_PAGE_ALT_PROMPT":"정말로 이 다른 언어를 삭제하실 건가요?","DELETE_PAGE_CHILDREN_WARNING":"이 페이지의 하위 페이지 또한 삭제됩니다.","DELETE_RECORD":"“%s” 삭제","DELETE_ALL_PAGE_ALTS":"또한, 모든 다른 언어와 첨부 파일을 삭제합니다.","DELETE_ALL_ATTACHMENT_ALTS":"모든 다른 언어와 첨부 파일을 삭제합니다.","DELETE_ONLY_PRIMARY_PAGE_ALT":"오직 주 레코드만 삭제됩니다. 첨부 파일, 다른 언어, 하위 페이지는 삭제되지 않습니다.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"오직 주 레코드의 메타데이터만 삭제됩니다.","DELETE_PRIMARY_ALT_INFO":"이 레코드는 기본 언어이기 때문에 별도로 삭제하거나 다른 콘텐츠 전부와 같이 삭제할 수 있습니다.","CHILD_PAGES_TO_BE_DELETED":"하위 페이지를 삭제합니다:","ALTS_TO_BE_DELETED":"다른 언어를 삭제합니다:","ATTACHMENTS_TO_BE_DELETED":"첨부 파일을 삭제합니다:","YES_DELETE":"네, 삭제","NO_CANCEL":"아니요, 취소","SYSTEM_FIELDS":"시스템 필드","EDIT_ATTACHMENT_METADATA_OF":"첨부 파일 “%s”의 메타데이터 수정","EDIT_PAGE_NAME":"“%s” 수정","SAVE_CHANGES":"변경 저장","BROWSE_FS":"파일 시스템 검색","BROWSE_FS_MAC":"파인더에서 검색","BROWSE_FS_WINDOWS":"탐색기에서 열기","ERROR_CANNOT_BROWSE_FS":"오류: 파일이 존재하지 않습니다.","REMOVE_FLOWBLOCK_PROMPT":"이 블록을 제거하시겠습니까?","ADD_FLOWBLOCK":"블록 추가","INVALID_INPUT":"잘못된 입력","UP":"위로","DOWN":"아래로","REMOVE":"제거","ID":"ID","CLOSE":"닫기","CANCEL":"취소","BACK_TO_OVERVIEW":"개요로 되돌아가기","PUBLISH":"발행","PUBLISH_NOTE":"여기서 웹사이트 현재 버전을 발행할 수 있습니다.","PUBLISH_SERVER":"대상 서버","CURRENTLY_PUBLISHING":"발행 중 ...","STATE":"상태","PUBLISH_DONE":"발행됨","PUBLISH_STATE_BUILDING":"변경 사항 빌드 중 ...","PUBLISH_STATE_PUBLISH":"변경 사항 발행 중 ...","PUBLISH_STATE_DONE":"발행 완료.","FIND_FILES":"파일 찾기","FIND_FILES_PLACEHOLDER":"페이지 이름 입력 ...","ATTACHMENT_TYPE":"첨부 파일 형식","URL_SLUG":"URL slug","TEMPLATE":"템플릿","HIDE_PAGE":"페이지 숨기기","HIDE_PAGE_EXPLANATION":"이 페이지를 숨길까요?","PAGE_IS_DISCOVERABLE":"페이지 다시보이기","PAGE_IS_DISCOVERABLE_EXPLANATION":"이 설정이 활성화되어있으면 페이지를 확인할 수 있습니다. 그렇지 않으면 URL만 확인할 수 있습니다.","REFRESH_BUILD":"새로운 빌드","REFRESH_BUILD_NOTE":"이 트리거는 처음부터 다시 빌드합니다. 그러면서 이전 빌드하면서 캐시된 결과를 삭제합니다. 이 기능은 동기화 오류나 템플릿에서 잘못된 설정으로 출력물에 문제가 있을 때 유용합니다.","CURRENTLY_REFRESHING_BUILD":"지금 새롭게 빌드 중 ...","REFRESHING_BUILD_DONE":"새로운 빌드를 완료하였습니다!","FAILED_TO_LAUNCH_LEKTOR":"실행하지 못하였습니다.","PROJECT":"프로젝트","CLOSE_PROJECT":"프로젝트 닫기","OPEN_PROJECT":"프로젝트 열기","BROWSE_WEBSITE":"웹사이트 찾아보기","VIEW_ADMIN_PANEL":"관리자 판넬 보기","QUIT":"나가기","FAILED_TO_LOAD_PROJECT":"프로젝트를 불러오지 못하였습니다. :(","LOADING_PROJECT":"프로젝트 불러오는 중 ...","INITIALIZING_LEKTOR":"Lektor 초기화 중 ...","QUIT_LEKTOR":"Lektor 나가기","FILE":"파일","UNDO":"실행 취소","REDO":"다시 실행","CUT":"잘라내기","COPY":"복사","PASTE":"붙여넣기","SELECT_ALL":"전부 선택","HELP":"도움말","VISIT_WEBSITE":"웹사이트 방문","INSTALL_SHELL_COMMAND":"쉘 커멘드 설치","INSTALL_SHELL_COMMAND_QUESTION":"'lektor' 쉘 명령을 설치하시겠습니까? 관리자 권한이 필요합니다.","FAILED_TO_INSTALL_SHELL_COMMANDS":"쉘 명령을 설치하지 못하였습니다.","INSTALL_SHELL_COMMAND_SUCCESS":"쉘 명령이 성공적으로 설치되었습니다.","OPERATION_SUCCESS":"완료","YES":"예","NO":"아니오","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"현재 파일을 열지 못하였습니다.","OPEN_OTHER_PROJECT":"다른 프로젝트 열기","OPEN_OTHER_PROJECT_QUESTION":"열려는 파일은 다른 프로젝트 (%s)를 열어야합니다. 현재 프로젝트는 종료됩니다. 계속 하시겠습니까?"}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Terug naar Website","UNLOAD_ACTIVE_TAB":"U hebt niet-opgeslagen data, weet je zeker dat je deze pagina wil verlaten?","EDIT_METADATA":"Bewerk Metadata","EDIT":"Bewerk","DELETE":"Verwijderen","PREVIEW":"Voorbeeld","ALTS":"Alternatieven","PRIMARY_ALT":"Primair","PRIMARY_OVERLAY":"Overlapt","ADD_CHILD_PAGE":"Pagina toevoegen","ADD_ATTACHMENT":"Bijlage toevoegen","ATTACHMENT_ACTIONS":"Bijlage Acties","PAGE_ACTIONS":"Pagina Acties","NO_CHILD_PAGES":"Geen Subpagina's","CHILD_PAGES":"Subpagina's","NO_ATTACHMENTS":"Geen bijlages","ATTACHMENTS":"Bijlages","ADD_ATTACHMENT_TO":"Voeg bijlage toe aan “%s”","ADD_ATTACHMENT_NOTE":"Je kan hier een nieuwe bijlage uploaden.","UPLOAD":"Upload","PROGRESS":"Vooruitgang","ERROR_PREFIX":"Fout: ","ERROR_NO_ID_PROVIDED":"Geen ID gegeven.","ERROR_PAGE_ID_DUPLICATE":"Een pagina met deze ID (%s) bestaat al.","ERROR_INVALID_ID":"Ongeldige ID","ERROR_INVALID_DATE":"Ongeldige datum","ERROR_INVALID_NUMBER":"Geen geldig getal","ERROR_INVALID_URL":"Geen geldige URL","ERROR":"Fout","ERROR_OCURRED":"Er is een fout opgetreden","ERROR_REQUEST_FAILED":"Kon het commando niet naar de server sturen. Misschien is de server gestopt of reageert deze niet?","ERROR_SERVER_UNAVAILABLE":"Server niet beschikbaar","ERROR_SERVER_UNAVAILABLE_MESSAGE":"De server reageert niet. Deze was gestopt of door een kritieke fout niet langer operationeel en moet worden herstart.","MODEL":"Model","ADD_CHILD_PAGE_TO":"Voeg Subpagina toe aan “%s”","ADD_CHILD_PAGE_NOTE":"U kan hier een nieuwe subpagina toevoegen. Merk op dat het model of de ID achteraf niet makkelijk gewijzigd kunnen worden.","CREATE_CHILD_PAGE":"Subpagina Toevoegen","DELETE_ATTACHMENT_PROMPT":"Weet je zeker dat je deze bijlage wilt verwijderen?","DELETE_ATTACHMENT_ALT_PROMPT":"Weet je zeker dat je de metadata van dit bijlage alternatief wilt verwijderen?","DELETE_PAGE_PROMPT":"Weet je zeker dat je deze pagina wilt verwijderen?","DELETE_PAGE_ALT_PROMPT":"Weet je zeker dat je dit alternatief wilt verwijderen?","DELETE_PAGE_CHILDREN_WARNING":"Dit zal ook de subpagina's van deze pagina verwijderen.","DELETE_RECORD":"Verwijder “%s”","DELETE_ALL_PAGE_ALTS":"Verwijder ook de alternatieven en bijlages.","DELETE_ALL_ATTACHMENT_ALTS":"Verwijder alle alternatieven en bijlages.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Verwijder enkel de primaire record. Bijlages, alternatieven en subpagina's zullen niet verwijderd worden.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Verwijder enkel de metadata van de primaire record.","DELETE_PRIMARY_ALT_INFO":"Omdat dit record een primair alternatief is, kan het apart verwijderd worden of samen met alle andere inhoud.","CHILD_PAGES_TO_BE_DELETED":"Subpagina's die verwijderd zullen worden:","ALTS_TO_BE_DELETED":"Alternatieven die verwijderd zullen worden:","ATTACHMENTS_TO_BE_DELETED":"Bijlages die verwijderd zullen worden:","YES_DELETE":"Ja, verwijder","NO_CANCEL":"Nee, annuleer","SYSTEM_FIELDS":"Systeem Velden","EDIT_ATTACHMENT_METADATA_OF":"Bewerk Metadata van Bijlage “%s”","EDIT_PAGE_NAME":"Bewerk “%s”","SAVE_CHANGES":"Wijzigingen opslaan","BROWSE_FS":"Blader in Bestandsysteem","BROWSE_FS_MAC":"Bekijk in Finder","BROWSE_FS_WINDOWS":"Open in Explorer","ERROR_CANNOT_BROWSE_FS":"Fout: Bestand bestaat nog niet.","REMOVE_FLOWBLOCK_PROMPT":"Weet je zeker dat je dit blok wilt verwijderen?","ADD_FLOWBLOCK":"Blok Toevoegen","INVALID_INPUT":"Ongeldige Invoer","UP":"Omhoog","DOWN":"Omlaag","REMOVE":"Verwijderen","ID":"ID","CLOSE":"Sluiten","CANCEL":"Annuleren","BACK_TO_OVERVIEW":"Terug naar Overzicht","PUBLISH":"Publiceren","PUBLISH_NOTE":"Van hieruit kan je de huidige versie van je website publiceren.","PUBLISH_SERVER":"Doelserver","CURRENTLY_PUBLISHING":"Publiceren …","STATE":"Status","PUBLISH_DONE":"Gepubliceerd","PUBLISH_STATE_BUILDING":"De wijzigingen worden gebouwd ...","PUBLISH_STATE_PUBLISH":"De wijzigingen worden gepuliceerd ...","PUBLISH_STATE_DONE":"Klaar met publiceren.","FIND_FILES":"Zoek bestanden","FIND_FILES_PLACEHOLDER":"Vul paginanaam in ...","ATTACHMENT_TYPE":"Type Bijlage","URL_SLUG":"URL slug","TEMPLATE":"Template","HIDE_PAGE":"Verberg pagina","HIDE_PAGE_EXPLANATION":"Moet deze pagina verborgen zijn?","PAGE_IS_DISCOVERABLE":"Deze pagina is vindbaar","PAGE_IS_DISCOVERABLE_EXPLANATION":"Als dit ingeschakeld is, is de pagina vindbaar. Anders moet de URL bekend zijn.","REFRESH_BUILD":"Ververs Build","REFRESH_BUILD_NOTE":"Dit verwijdert alle buildresultaten in de cache en veroorzaakt een volledige rebuild. Dit is nuttig in bepaalde situaties waar synchonisatiefouten of fouten in de templates de uitvoer corrupt hebben gemaakt.","CURRENTLY_REFRESHING_BUILD":"Bezig met verversen van de build ...","REFRESHING_BUILD_DONE":"Klaar met de build te verversen!","FAILED_TO_LAUNCH_LEKTOR":"Het starten van Lektor is mislukt.","PROJECT":"Project","CLOSE_PROJECT":"Sluit Project","OPEN_PROJECT":"Open Project","BROWSE_WEBSITE":"Bekijk Website","VIEW_ADMIN_PANEL":"Bekijk Admin Paneel","QUIT":"Afsluiten","FAILED_TO_LOAD_PROJECT":"Laden van het project is mislukt :(","LOADING_PROJECT":"Project laden ...","INITIALIZING_LEKTOR":"Lektor Initializeren ...","QUIT_LEKTOR":"Lektor Afsluiten","FILE":"Bestand","UNDO":"Ongedaan maken","REDO":"Opnieuw","CUT":"Knippen","COPY":"Kopiëren","PASTE":"Plakken","SELECT_ALL":"Selecteer alles","HELP":"Help","VISIT_WEBSITE":"Bezoek Website","INSTALL_SHELL_COMMAND":"Installeer Shell Commando","INSTALL_SHELL_COMMAND_QUESTION":"Weet je zeker dat je het 'lektor' shell commando wil installeren? Dit vereist admin rechten.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Installeren van de shell commando's mislukt.","INSTALL_SHELL_COMMAND_SUCCESS":"Shell commando's zijn geïnstalleerd.","OPERATION_SUCCESS":"Success","YES":"Ja","NO":"Nee","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Kon het inhoudbestand niet openen","OPEN_OTHER_PROJECT":"Open ander Project","OPEN_OTHER_PROJECT_QUESTION":"Om deze file te openen moet een ander project geopend worden (%s). Het huidige project zal gesloten worden. Wil je verdergaan?"}

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Wróć do strony","UNLOAD_ACTIVE_TAB":"Masz niezapisane dane, czy na pewno chcesz opuścić tą stronę ?","EDIT_METADATA":"Edytuj dane","EDIT":"Edycja","DELETE":"Usuń","PREVIEW":"Podgląd","ALTS":"Wersje językowe","PRIMARY_ALT":"Podstawowy język","PRIMARY_OVERLAY":"(Nałożony)","ADD_CHILD_PAGE":"Dodaj podstronę","ADD_ATTACHMENT":"Dodaj załącznik","ATTACHMENT_ACTIONS":"Operacje na załącznikach","PAGE_ACTIONS":"Operacje na stronach","NO_CHILD_PAGES":"Brak podstron","CHILD_PAGES":"Podstrony","NO_ATTACHMENTS":"Brak załączników","ATTACHMENTS":"Załączniki","ADD_ATTACHMENT_TO":"Dodaj załącznik do “%s”","ADD_ATTACHMENT_NOTE":"Możesz wgrać nowy załącznik tutaj.","UPLOAD":"Wgraj","PROGRESS":"Postęp","ERROR_PREFIX":"Błąd: ","ERROR_NO_ID_PROVIDED":"Nie podano ID.","ERROR_PAGE_ID_DUPLICATE":"Strona z ID: (%s) już istnieje.","ERROR_INVALID_ID":"Błędny ID","ERROR_INVALID_DATE":"Błędna data","ERROR_INVALID_NUMBER":"Błędny numer","ERROR_INVALID_URL":"Błędny adres URL","ERROR":"Błąd","ERROR_OCURRED":"Wystąpił błąd","ERROR_REQUEST_FAILED":"Nie można wysłać żądania do serwera. Może został zatrzymany, albo nie odpowiada?","ERROR_SERVER_UNAVAILABLE":"Serwer niedostępny","ERROR_SERVER_UNAVAILABLE_MESSAGE":"Serwer nie odpowiada. Został zatrzymany, albo wystąpił błąd krytyczny, który spowodował brak działania. Być może musi zostać zrestartowany.","MODEL":"Model","ADD_CHILD_PAGE_TO":"Dodaj podstronę do “%s”","ADD_CHILD_PAGE_NOTE":"Możesz dodać podstronę tutaj. Pamiętaj, że Model oraz ID nie mogą być zmienione później w prosty sposób.","CREATE_CHILD_PAGE":"Dodaj podstronę","DELETE_ATTACHMENT_PROMPT":"Czy na pewno chcesz usunąć ten załącznik?","DELETE_ATTACHMENT_ALT_PROMPT":"Czy na pewno chcesz usunąć dane załącznika dla tego języka?","DELETE_PAGE_PROMPT":"Czy na pewno chcesz usunąć tą stronę?","DELETE_PAGE_ALT_PROMPT":"Czy na pewno chcesz usunąć ten język?","DELETE_PAGE_CHILDREN_WARNING":"To spowoduje także usunięcie wszystkich podstron.","DELETE_RECORD":"Skasuj “%s”","DELETE_ALL_PAGE_ALTS":"Usuń również wszystkie wersje językowe oraz załączniki.","DELETE_ALL_ATTACHMENT_ALTS":"Usuń wszystkie wersje językowe oraz załączony plik.","DELETE_ONLY_PRIMARY_PAGE_ALT":"Usuń tylko podstawowy rekord.  Załączniki, wersje językowe oraz podstrony nie będę usunięte.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Usuń tylko dane podstawowego rekordu.","DELETE_PRIMARY_ALT_INFO":"Ponieważ ten rekord zawiera podstawową wersję językową może zostać usunięty osobno jak i razem z pozostałą zawartością.","CHILD_PAGES_TO_BE_DELETED":"Podstrony, które zostaną usunięte:","ALTS_TO_BE_DELETED":"Wersje językowe, które zostaną usunięte:","ATTACHMENTS_TO_BE_DELETED":"Załączniki, które zostaną usunięte:","YES_DELETE":"Tak, usuń","NO_CANCEL":"Nie, anuluj","SYSTEM_FIELDS":"Pola Systemowe","EDIT_ATTACHMENT_METADATA_OF":"Edytuj dane załącznika “%s”","EDIT_PAGE_NAME":"Edytuj “%s”","SAVE_CHANGES":"Zapisz zmiany","BROWSE_FS":"Otwórz w przeglądarce plików","BROWSE_FS_MAC":"Otwórz w Finderze","BROWSE_FS_WINDOWS":"Otwórz w eksploratorze plików","ERROR_CANNOT_BROWSE_FS":"Błąd: Plik jeszcze nie istnieje.","REMOVE_FLOWBLOCK_PROMPT":"Czy na pewno chcesz usunąć ten blok ?","ADD_FLOWBLOCK":"Dodaj blok","INVALID_INPUT":"Błędne dane wejściowe","UP":"W górę","DOWN":"W dół","REMOVE":"Usuń","ID":"ID","CLOSE":"Zamknij","CANCEL":"Anuluj","BACK_TO_OVERVIEW":"Powrót do przeglądu","PUBLISH":"Publikuj","PUBLISH_NOTE":"Stąd możesz opublikować aktualną wersję strony.","PUBLISH_SERVER":"Serwer Docelowy","CURRENTLY_PUBLISHING":"Publikowanie …","STATE":"Status","PUBLISH_DONE":"Opublikowany","PUBLISH_STATE_BUILDING":"Zmiany są wprowadzane ...","PUBLISH_STATE_PUBLISH":"Zmiany są publikowane ...","PUBLISH_STATE_DONE":"Publikowanie zakończone.","FIND_FILES":"Znadź Pliki","FIND_FILES_PLACEHOLDER":"Podaj nazwę strony ...","ATTACHMENT_TYPE":"Typ załącznika","URL_SLUG":"Przyjazny URL","TEMPLATE":"Szablon","HIDE_PAGE":"Ukryj stronę","HIDE_PAGE_EXPLANATION":"Czy ta strona powinna być ukryta?","PAGE_IS_DISCOVERABLE":"Strona jest 'widoczna'","PAGE_IS_DISCOVERABLE_EXPLANATION":"Jeśli włączone, strona jest widoczna na liście stron oraz w listingu dla danego rekordu. W przeciwnym razie, adres URL musi być znany","REFRESH_BUILD":"Zbuduj odświeżoną wersję","REFRESH_BUILD_NOTE":"To spowoduje usunięcie pamięci podręcznej i stworzenie wersji końcowej od nowa. Ta opcja jest przydatna w sytuacjach, gdzie błędy albo pomyłki synchronizacji w szablonach spowodowały uszkodzenie danych wyjściowych.","CURRENTLY_REFRESHING_BUILD":"Aktualnie odświeżam pakiet wyjściowy ...","REFRESHING_BUILD_DONE":"Zakończono odświeżanie pakietu wyjściowego!","FAILED_TO_LAUNCH_LEKTOR":"Nie udało się uruchomić Lektor.","PROJECT":"Projekt","CLOSE_PROJECT":"Zamknij projekt","OPEN_PROJECT":"Otwórz projekt","BROWSE_WEBSITE":"Przeglądaj stronę","VIEW_ADMIN_PANEL":"Przejdź do panelu administracyjnego","QUIT":"Wyjdź","FAILED_TO_LOAD_PROJECT":"Nie udało się załadować projektu :(","LOADING_PROJECT":"Ładowanie projektu ...","INITIALIZING_LEKTOR":"Inicjalizacja Lektor ...","QUIT_LEKTOR":"Opuść Lektor","FILE":"Plik","UNDO":"Cofnij","REDO":"Ponów","CUT":"Wytnij","COPY":"Kopiuj","PASTE":"Wklej","SELECT_ALL":"Zaznacz wszystko","HELP":"Pomoc","VISIT_WEBSITE":"Odwiedź stronę","INSTALL_SHELL_COMMAND":"Zainstaluj komendę powłoki","INSTALL_SHELL_COMMAND_QUESTION":"Czy chcesz zainstalować komendę 'lektor' w powłoce systemowej? Wygamane są uprawnienia administracyjne.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Nie udało się zainstalować komend w powłoce systemowej.","INSTALL_SHELL_COMMAND_SUCCESS":"Komenda została pomyślnie zainstalowana w powłoce systemowej.","OPERATION_SUCCESS":"Sukces","YES":"Tak","NO":"Nie","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Nie udało się otworzyć zawartości pliku","OPEN_OTHER_PROJECT":"Otwórz inny projekt","OPEN_OTHER_PROJECT_QUESTION":"Otwarcie tego pliku wymaga otwarcia kolejnego projektu (%s). Obecny projekt zostanie zamknięty. Czy chcesz kontynuować?"}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Retornar ao Site","UNLOAD_ACTIVE_TAB":"Você tem modificações não salvas, tem certeza que deseja deixar a página?","EDIT_METADATA":"Editar Metadado","EDIT":"Editar","DELETE":"Deletar","PREVIEW":"Pré-visualizar","ALTS":"Alternativas","PRIMARY_ALT":"Primária","PRIMARY_OVERLAY":"Revestida","ADD_CHILD_PAGE":"Add Página","ADD_ATTACHMENT":"Add Anexo","ATTACHMENT_ACTIONS":"Ações de Anexos","PAGE_ACTIONS":"Ações de Páginas","NO_CHILD_PAGES":"Sem sub-páginas","CHILD_PAGES":"Sub-páginas","NO_ATTACHMENTS":"Sem anexos","ATTACHMENTS":"Anexos","ADD_ATTACHMENT_TO":"Add anexo para “%s”","ADD_ATTACHMENT_NOTE":"Você pode subir um novo anexo aqui.","UPLOAD":"Upload","PROGRESS":"Progresso","ERROR_PREFIX":"Erro: ","ERROR_NO_ID_PROVIDED":"Nenhuma ID fornecida.","ERROR_PAGE_ID_DUPLICATE":"Uma página com este ID (%s) já existe.","ERROR_INVALID_ID":"ID inválido","ERROR_INVALID_DATE":"Data inválida","ERROR_INVALID_NUMBER":"Não é um número válido","ERROR_INVALID_URL":"Não é uma URL válida","ERROR":"Erro","ERROR_OCURRED":"Ocorreu um Erro","ERROR_REQUEST_FAILED":"Não foi possível enviar o comando ao servidor.  Talvez o servidor foi parado ou não está respondendo","ERROR_SERVER_UNAVAILABLE":"Servidor Não Disponível","ERROR_SERVER_UNAVAILABLE_MESSAGE":"O servidor não está respondendo.  Ou foi parado ou um erro sério o fez parar e precisa ser reiniciado.","MODEL":"Modelo","ADD_CHILD_PAGE_TO":"Add Sub-página para “%s”","ADD_CHILD_PAGE_NOTE":"Você pode adicionar uma nova sub-página aqui.  Note que o modelo ou o ID não podem ser mudados facilmente depois.","CREATE_CHILD_PAGE":"Add Página Filha","DELETE_ATTACHMENT_PROMPT":"Você tem certeza que deseja deletar este anexo?","DELETE_ATTACHMENT_ALT_PROMPT":"Você tem certeza que deseja deletar o metadado deste anexo alternativo?","DELETE_PAGE_PROMPT":"Você tem certeza que deseja deletar esta página","DELETE_PAGE_ALT_PROMPT":"Você tem certeza que deseja deletar esta alternativa?","DELETE_PAGE_CHILDREN_WARNING":"Isto também deletará as sub-páginas filhas desta página.","DELETE_RECORD":"Deletar “%s”","DELETE_ALL_PAGE_ALTS":"Também delete todas alternativas e arquivos de anexo.","DELETE_ALL_ATTACHMENT_ALTS":"Delete todas alternativas e arquivo de anexo","DELETE_ONLY_PRIMARY_PAGE_ALT":"Delete somente o registro primário.  Anexos, alternativas e sub-páginas não serão deletadas.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Delete somente o Metadado do registro primário.","DELETE_PRIMARY_ALT_INFO":"Porque este registro é uma alternativa primária ele pode ser deletado separadamente ou junto com todos os outros conteúdos.","CHILD_PAGES_TO_BE_DELETED":"Sub-páginas que serão deletadas:","ALTS_TO_BE_DELETED":"Alternativas que serão deletadas:","ATTACHMENTS_TO_BE_DELETED":"Anexos que serão deletados:","YES_DELETE":"Sim, deletar","NO_CANCEL":"Não, cancelar","SYSTEM_FIELDS":"Campos do Sistema","EDIT_ATTACHMENT_METADATA_OF":"Editar Metadado do Anexo “%s”","EDIT_PAGE_NAME":"Editar “%s”","SAVE_CHANGES":"Salvar Alterações","BROWSE_FS":"Navegar no Sistema","BROWSE_FS_MAC":"Mostrar no Finder","BROWSE_FS_WINDOWS":"Abrir no Explorer","ERROR_CANNOT_BROWSE_FS":"Erro: Arquivo não existe ainda.","REMOVE_FLOWBLOCK_PROMPT":"Você realmente deseja remover este bloco?","ADD_FLOWBLOCK":"Add Bloco","INVALID_INPUT":"Entrada Inválida","UP":"Cima","DOWN":"Baixo","REMOVE":"Remover","ID":"ID","CLOSE":"Fechar","CANCEL":"Cancelar","BACK_TO_OVERVIEW":"Voltar para Overview","PUBLISH":"Publicar","PUBLISH_NOTE":"Daqui você pode publicar a versão atual do website.","PUBLISH_SERVER":"Servidor Alvo","CURRENTLY_PUBLISHING":"Publicando …","STATE":"Status","PUBLISH_DONE":"Publicado","PUBLISH_STATE_BUILDING":"Mudanças estão sendo construídas ...","PUBLISH_STATE_PUBLISH":"Mudanças estão sendo publicadas ...","PUBLISH_STATE_DONE":"Publicação feita.","FIND_FILES":"Procurar Arquivos","FIND_FILES_PLACEHOLDER":"Entrar com o nome da página ...","ATTACHMENT_TYPE":"Tipo de anexo","URL_SLUG":"URL slug","TEMPLATE":"Template","HIDE_PAGE":"Esconder página","HIDE_PAGE_EXPLANATION":"Isto deveria ser escondido?","PAGE_IS_DISCOVERABLE":"Página é descobrível","PAGE_IS_DISCOVERABLE_EXPLANATION":"Se isto estiver ativo a página pode ser descoberta, caso contrário será necessário saber a URL.","REFRESH_BUILD":"Atualizar Build","REFRESH_BUILD_NOTE":"Isto deleta todos os resultados de builds em cache ativando uma build do zero.  Isto é útil em situações onde erros de sincronização ou erros no template causam saídas corrompidas.","CURRENTLY_REFRESHING_BUILD":"No momento atualizando a build ...","REFRESHING_BUILD_DONE":"Atualização da build feita!","FAILED_TO_LAUNCH_LEKTOR":"Falha ao iniciar o Lektor.","PROJECT":"Projeto","CLOSE_PROJECT":"Fechar Projeto","OPEN_PROJECT":"Abrir Projeto","BROWSE_WEBSITE":"Navegar no Website","VIEW_ADMIN_PANEL":"Ver Admin Painel","QUIT":"Sair","FAILED_TO_LOAD_PROJECT":"Falha ao carregar o projeto :(","LOADING_PROJECT":"Carregando o projeto ...","INITIALIZING_LEKTOR":"Iniciando o Lektor ...","QUIT_LEKTOR":"Sair do Lektor","FILE":"Arquivo","UNDO":"Desfazer","REDO":"Refazer","CUT":"Cortar","COPY":"Copiar","PASTE":"Colar","SELECT_ALL":"Selecionar Todos","HELP":"Ajuda","VISIT_WEBSITE":"Visitar Website","INSTALL_SHELL_COMMAND":"Instalar Shell Command","INSTALL_SHELL_COMMAND_QUESTION":"Você deseja instalar 'lektor' shell command? Isto requer permissões de administrador.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Falha ao instalar shell commands.","INSTALL_SHELL_COMMAND_SUCCESS":"Shell command foi instalado com sucesso.","OPERATION_SUCCESS":"Sucesso","YES":"Sim","NO":"Não","OK":"OK","FAILED_TO_OPEN_CONTENT_FILE":"Falha ao abrir o conteúdo do arquivo","OPEN_OTHER_PROJECT":"Abrir outro Projeto","OPEN_OTHER_PROJECT_QUESTION":"Abrir este arquivo requer abrir outro projeto (%s). O projeto atual será fechado. Deseja continuar?"}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"Вернуться на вебсайт","UNLOAD_ACTIVE_TAB":"Ваши изменения не сохранены. Вы уверены, что хотите покинуть страницу?","EDIT_METADATA":"Редактировать метаданные","EDIT":"Редактировать","DELETE":"Удалить","PREVIEW":"Предпросмотр","ALTS":"Варианты","PRIMARY_ALT":"Основной","PRIMARY_OVERLAY":"Оверлей","ADD_CHILD_PAGE":"Добавить страницу","ADD_ATTACHMENT":"Приложить файл","ATTACHMENT_ACTIONS":"Действия с вложением","PAGE_ACTIONS":"Действия со страницей","NO_CHILD_PAGES":"Вложенные страницы отсутствуют","CHILD_PAGES":"Вложенные страницы","NO_ATTACHMENTS":"Вложенные файлы отсутствуют","ATTACHMENTS":"Вложенные файлы","ADD_ATTACHMENT_TO":"Приложить файл к странице “%s”","ADD_ATTACHMENT_NOTE":"Здесь вы можете загрузить новый файл.","UPLOAD":"Загрузить","PROGRESS":"Прогресс","ERROR_PREFIX":"Ошибка: ","ERROR_NO_ID_PROVIDED":"Ошибка: Отсутсует ID.","ERROR_PAGE_ID_DUPLICATE":"Страница с ID (%s) уже существует.","ERROR_INVALID_ID":"Некорректный ID","ERROR_INVALID_DATE":"Некорректная дата","ERROR_INVALID_NUMBER":"Некорректное число","ERROR_INVALID_URL":"Некорректный URL","ERROR":"Ошибка","ERROR_OCURRED":"Произошла ошибка","ERROR_REQUEST_FAILED":"Ошибка при отправке команды на сервер.  Возможно, сервер остановлен или не отвечает.","ERROR_SERVER_UNAVAILABLE":"Сервер недоступен","ERROR_SERVER_UNAVAILABLE_MESSAGE":"Сервер не отвечает. Возможно, сервер остановлен или произошла критическая ошибка. Перезапустите сервер.","MODEL":"Модель","ADD_CHILD_PAGE_TO":"Создать вложенную страницу для “%s”","ADD_CHILD_PAGE_NOTE":"Здесь вы можете создать новую вложенную страницу. Имейте в виду, что вы не сможете легко изменить модель и ID после создания страницы.","CREATE_CHILD_PAGE":"Создать вложенную страницу","DELETE_ATTACHMENT_PROMPT":"Вы действительно хотите удалить это вложение?","DELETE_ATTACHMENT_ALT_PROMPT":"Вы действительно хотите удалить этот вариант вложения?","DELETE_PAGE_PROMPT":"Вы действительно хотите удалить эту страницу?","DELETE_PAGE_ALT_PROMPT":"Вы действительно хотите удалить этот вариант страницы?","DELETE_PAGE_CHILDREN_WARNING":"Страница будет удалена вместе со всеми вложенными страницами.","DELETE_RECORD":"Удалить “%s”","DELETE_ALL_PAGE_ALTS":"Удалить все варианты страницы и вложенные файлы.","DELETE_ALL_ATTACHMENT_ALTS":"Удалить все варианты вложенного файла","DELETE_ONLY_PRIMARY_PAGE_ALT":"Удалить только основную версию.  Вложеннные страницы, файлы и другие варианты страницы не будут удалены.","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"Удалить только основную версию.","DELETE_PRIMARY_ALT_INFO":"Данная версия является основной и может быть удалена как отдельно, так и вместе со всем содержимым.","CHILD_PAGES_TO_BE_DELETED":"Вложенные страницы, которые будут удалены:","ALTS_TO_BE_DELETED":"Версии, которые будут удалены:","ATTACHMENTS_TO_BE_DELETED":"Вложенные файлы, которые будут удалены:","YES_DELETE":"Да, удалить","NO_CANCEL":"Отмена","SYSTEM_FIELDS":"Системные поля","EDIT_ATTACHMENT_METADATA_OF":"Редактировать метаданные вложения “%s”","EDIT_PAGE_NAME":"Редактировать “%s”","SAVE_CHANGES":"Сохранить изменения","BROWSE_FS":"Посмотреть в файловой системе","BROWSE_FS_MAC":"Открыть в Finder","BROWSE_FS_WINDOWS":"Открыть в Обозревателе","ERROR_CANNOT_BROWSE_FS":"Ошибка: Файл не существует.","REMOVE_FLOWBLOCK_PROMPT":"Вы действительно хотите удалить этот блок?","ADD_FLOWBLOCK":"Добавить блок","INVALID_INPUT":"Некорректный ввод","UP":"Вверх","DOWN":"Вниз","REMOVE":"Удалить","ID":"Идентификатор (ID)","CLOSE":"Закрыть","CANCEL":"Отмена","BACK_TO_OVERVIEW":"На стартовую страницу","PUBLISH":"Опубликовать","PUBLISH_NOTE":"Здесь вы можете опубликовать текущую версию вебсайта.","PUBLISH_SERVER":"Сервер","CURRENTLY_PUBLISHING":"Публикация …","STATE":"Статус","PUBLISH_DONE":"Публикация завершена","PUBLISH_STATE_BUILDING":"Сборка изменений ...","PUBLISH_STATE_PUBLISH":"Публикация изменений ...","PUBLISH_STATE_DONE":"Публикация завершена.","FIND_FILES":"Поиск файла","FIND_FILES_PLACEHOLDER":"Введите имя страницы ...","ATTACHMENT_TYPE":"Тип вложения","URL_SLUG":"Краткий заголовок для URL","TEMPLATE":"Шаблон","HIDE_PAGE":"Скрыть страницу","HIDE_PAGE_EXPLANATION":"Скрыть данную страницу?","REFRESH_BUILD":"Обновить сборку","REFRESH_BUILD_NOTE":"В некоторых ситуациях бывает полезно заново пересобрать страницы вебсайта: например, когда произошёл сбой синхронизации или ошибка в шаблоне привела к некорректному отображению вебсайта.","CURRENTLY_REFRESHING_BUILD":"Обновление сборки ...","REFRESHING_BUILD_DONE":"Сборка обновлена!","FAILED_TO_LAUNCH_LEKTOR":"Не удалось запустить Lektor.","PROJECT":"Проект","CLOSE_PROJECT":"Закрыть проект","OPEN_PROJECT":"Открыть проект","BROWSE_WEBSITE":"Открыть вебсайт","VIEW_ADMIN_PANEL":"Открыть админ-панель","QUIT":"Выйти","FAILED_TO_LOAD_PROJECT":"Не удалось загрузить проект :(","LOADING_PROJECT":"Загрузка проекта ...","INITIALIZING_LEKTOR":"Инициализация Lektor ...","QUIT_LEKTOR":"Выйти из Lektor","FILE":"Файл","UNDO":"Отменить","REDO":"Повторить","CUT":"Вырезать","COPY":"Копировать","PASTE":"Вставить","SELECT_ALL":"Выделить всё","HELP":"Помощь","VISIT_WEBSITE":"Открыть вебсайт","INSTALL_SHELL_COMMAND":"Установить команду для терминала","INSTALL_SHELL_COMMAND_QUESTION":"Вы хотите установить команду 'lektor' для терминала? Для этого необходимы права администратора.","FAILED_TO_INSTALL_SHELL_COMMANDS":"Не удалось установить команду для терминала.","INSTALL_SHELL_COMMAND_SUCCESS":"Команда для терминала была успешно установлена.","OPERATION_SUCCESS":"Операция завершена успешно","YES":"Да","NO":"Нет","OK":"ОК"}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = {"RETURN_TO_WEBSITE":"回到網頁","UNLOAD_ACTIVE_TAB":"你還有未儲存的資訊，確定要離開這個頁面？","EDIT_METADATA":"編輯元資料","EDIT":"編輯","DELETE":"刪除","PREVIEW":"預覽","ALTS":"副語","PRIMARY_ALT":"主語","PRIMARY_OVERLAY":"Overlaid","ADD_CHILD_PAGE":"新增頁面","ADD_ATTACHMENT":"新增附件","ATTACHMENT_ACTIONS":"附件行為","PAGE_ACTIONS":"頁面行為","NO_CHILD_PAGES":"沒有附件","CHILD_PAGES":"子頁面","NO_ATTACHMENTS":"沒有附件","ATTACHMENTS":"附件","ADD_ATTACHMENT_TO":"新增附件到「%s」","ADD_ATTACHMENT_NOTE":"你可以在這裡上傳新的附件。","UPLOAD":"上傳","PROGRESS":"進度","ERROR_PREFIX":"錯誤：","ERROR_NO_ID_PROVIDED":"錯誤：沒有提供ID。","ERROR_PAGE_ID_DUPLICATE":"已經有頁面的ID跟這個ID（%s）一樣了。","ERROR_INVALID_ID":"無效的ID","ERROR_INVALID_DATE":"無效的日期","ERROR_INVALID_NUMBER":"無效的數字","ERROR_INVALID_URL":"無效的URL","ERROR":"錯誤","ERROR_OCURRED":"發生錯誤","ERROR_REQUEST_FAILED":"無法傳送指令到伺服器，可能它被關了或沒回應？","ERROR_SERVER_UNAVAILABLE":"伺服器掛掉了","ERROR_SERVER_UNAVAILABLE_MESSAGE":"伺服器目前沒回應，它可能已被關閉或是遇到嚴重錯誤導致無法運作，伺服器需要重新啟動。","MODEL":"模型","ADD_CHILD_PAGE_TO":"新增子面頁到 「%s」","ADD_CHILD_PAGE_NOTE":"你可以在這裡加入新的子頁面，注意模型及ID之後無法輕易更改。","CREATE_CHILD_PAGE":"新增子頁面","DELETE_ATTACHMENT_PROMPT":"真的要刪除這個附件？","DELETE_ATTACHMENT_ALT_PROMPT":"你真的想刪除這個副語附件的元資料嗎？","DELETE_PAGE_PROMPT":"真的要刪除這個頁面？","DELETE_PAGE_ALT_PROMPT":"你真的想刪除這個分支嗎？","DELETE_PAGE_CHILDREN_WARNING":"這也會把這個頁面的子頁面刪除。","DELETE_RECORD":"刪除「%s」","DELETE_ALL_PAGE_ALTS":"順便刪除所有副語及附加檔案。","DELETE_ALL_ATTACHMENT_ALTS":"刪除所有副語及附加檔案。","DELETE_ONLY_PRIMARY_PAGE_ALT":"只刪除主語的紀錄，附件、副語、及子頁面不會被刪除。","DELETE_ONLY_PRIMARY_ATTACHMENT_ALT":"只刪除主語紀錄的元資料。","DELETE_PRIMARY_ALT_INFO":"主語可以被單獨刪除，或是連同副語一起刪除。","CHILD_PAGES_TO_BE_DELETED":"即將被刪除的子頁面：","ALTS_TO_BE_DELETED":"即將被刪除的副語：","ATTACHMENTS_TO_BE_DELETED":"即將被刪除的附件：","YES_DELETE":"對，就是要把它刪掉！","NO_CANCEL":"還是不要好了...","SYSTEM_FIELDS":"系統欄位","EDIT_ATTACHMENT_METADATA_OF":"編輯附件「%s」的元資料","EDIT_PAGE_NAME":"編輯「%s」","SAVE_CHANGES":"儲存變更","BROWSE_FS":"用文件系統開啟","BROWSE_FS_MAC":"用Finder開啟","BROWSE_FS_WINDOWS":"用檔案總管開啟","ERROR_CANNOT_BROWSE_FS":"錯誤：檔案還沒有存在。","REMOVE_FLOWBLOCK_PROMPT":"你真的要刪掉這個區塊？","ADD_FLOWBLOCK":"新增區塊","INVALID_INPUT":"無效的輸入","UP":"上","DOWN":"下","REMOVE":"移除","ID":"ID","CLOSE":"關閉","CANCEL":"取消","BACK_TO_OVERVIEW":"回到總覽","PUBLISH":"發佈","PUBLISH_NOTE":"你可以在這裡發佈網站目前的版本。","PUBLISH_SERVER":"目標伺服器","CURRENTLY_PUBLISHING":"發佈中...","STATE":"狀態","PUBLISH_DONE":"已發佈","PUBLISH_STATE_BUILDING":"正在建置變更...","PUBLISH_STATE_PUBLISH":"正在發佈變更...","PUBLISH_STATE_DONE":"發佈完成。","FIND_FILES":"搜尋檔案","FIND_FILES_PLACEHOLDER":"輸入頁面名稱...","ATTACHMENT_TYPE":"附件類型","URL_SLUG":"URL縮略名","TEMPLATE":"模板","HIDE_PAGE":"隱藏頁面","HIDE_PAGE_EXPLANATION":"要隱藏這個頁面嗎？","PAGE_IS_DISCOVERABLE":"網頁可以被發現","PAGE_IS_DISCOVERABLE_EXPLANATION":"若啟用則這個頁面可以被發現，否則必須知道URL才能連結到這裡。","REFRESH_BUILD":"重新整理建置","REFRESH_BUILD_NOTE":"這會刪掉所有緩存的建置結果並導致重新置建。這在特殊情況（如同步錯誤、模板出錯等）下會有用。","CURRENTLY_REFRESHING_BUILD":"刷新建置中...","REFRESHING_BUILD_DONE":"完成刷新建置！","FAILED_TO_LAUNCH_LEKTOR":"啟動Lektor失敗。","PROJECT":"專案","CLOSE_PROJECT":"關閉專案","OPEN_PROJECT":"開啟專案","BROWSE_WEBSITE":"瀏覽網站","VIEW_ADMIN_PANEL":"查看管理員面板","QUIT":"離開","FAILED_TO_LOAD_PROJECT":"讀取專案失敗 QAQ","LOADING_PROJECT":"讀取專案中...","INITIALIZING_LEKTOR":"初始化Lektor中...","QUIT_LEKTOR":"離開Lektor","FILE":"檔案","UNDO":"復原","REDO":"重做","CUT":"剪下","COPY":"複製","PASTE":"貼上","SELECT_ALL":"全選","HELP":"說明","VISIT_WEBSITE":"參觀網站","INSTALL_SHELL_COMMAND":"安裝命令列模式","INSTALL_SHELL_COMMAND_QUESTION":"你想安裝lektor命令列模式嗎？ 這需要管理員權限。","FAILED_TO_INSTALL_SHELL_COMMANDS":"安裝命令列模式失敗。","INSTALL_SHELL_COMMAND_SUCCESS":"命令列模式安裝成功","OPERATION_SUCCESS":"成功","YES":"是","NO":"否","OK":"好","FAILED_TO_OPEN_CONTENT_FILE":"開啟檔案失敗","OPEN_OTHER_PROJECT":"開啟其它專案","OPEN_OTHER_PROJECT_QUESTION":"開啟這份檔案需要連同開啟另一個專案（%s），目前的專案將會被關閉，確定要繼續？"}

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)('[data-toggle=offcanvas]').click(function () {
    var target = (0, _jquery2.default)((0, _jquery2.default)(this).attr('data-target') || '.block-offcanvas');
    var isActive = target.is('.active');
    target.toggleClass('active', !isActive);
    (0, _jquery2.default)(this).toggleClass('active', !isActive);
  });
});

/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, exports) {

/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */

/*jslint indent: 2, vars: true, plusplus: true */
/*global setTimeout, clearTimeout */

(function (global) {
  "use strict";

  function Map() {
    this.data = {};
  }

  Map.prototype.get = function (key) {
    return this.data[key + "~"];
  };
  Map.prototype.set = function (key, value) {
    this.data[key + "~"] = value;
  };
  Map.prototype["delete"] = function (key) {
    delete this.data[key + "~"];
  };

  function EventTarget() {
    this.listeners = new Map();
  }

  function throwError(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }

  EventTarget.prototype.dispatchEvent = function (event) {
    event.target = this;
    var type = event.type.toString();
    var listeners = this.listeners;
    var typeListeners = listeners.get(type);
    if (typeListeners == undefined) {
      return;
    }
    var length = typeListeners.length;
    var i = -1;
    var listener = undefined;
    while (++i < length) {
      listener = typeListeners[i];
      try {
        listener.call(this, event);
      } catch (e) {
        throwError(e);
      }
    }
  };
  EventTarget.prototype.addEventListener = function (type, callback) {
    type = type.toString();
    var listeners = this.listeners;
    var typeListeners = listeners.get(type);
    if (typeListeners == undefined) {
      typeListeners = [];
      listeners.set(type, typeListeners);
    }
    var i = typeListeners.length;
    while (--i >= 0) {
      if (typeListeners[i] === callback) {
        return;
      }
    }
    typeListeners.push(callback);
  };
  EventTarget.prototype.removeEventListener = function (type, callback) {
    type = type.toString();
    var listeners = this.listeners;
    var typeListeners = listeners.get(type);
    if (typeListeners == undefined) {
      return;
    }
    var length = typeListeners.length;
    var filtered = [];
    var i = -1;
    while (++i < length) {
      if (typeListeners[i] !== callback) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      listeners["delete"](type);
    } else {
      listeners.set(type, filtered);
    }
  };

  function Event(type) {
    this.type = type;
    this.target = undefined;
  }

  function MessageEvent(type, options) {
    Event.call(this, type);
    this.data = options.data;
    this.lastEventId = options.lastEventId;
  }

  MessageEvent.prototype = Event.prototype;

  var XHR = global.XMLHttpRequest;
  var XDR = global.XDomainRequest;
  var isCORSSupported = XHR != undefined && (new XHR()).withCredentials != undefined;
  var isXHR = isCORSSupported;
  var Transport = isCORSSupported ? XHR : (XDR != undefined ? XDR : undefined);
  var WAITING = -1;
  var CONNECTING = 0;
  var OPEN = 1;
  var CLOSED = 2;
  var AFTER_CR = 3;
  var FIELD_START = 4;
  var FIELD = 5;
  var VALUE_START = 6;
  var VALUE = 7;
  var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;

  var MINIMUM_DURATION = 1000;
  var MAXIMUM_DURATION = 18000000;

  function getDuration(value, def) {
    var n = value;
    if (n !== n) {
      n = def;
    }
    return (n < MINIMUM_DURATION ? MINIMUM_DURATION : (n > MAXIMUM_DURATION ? MAXIMUM_DURATION : n));
  }

  function fire(that, f, event) {
    try {
      if (typeof f === "function") {
        f.call(that, event);
      }
    } catch (e) {
      throwError(e);
    }
  }

  function EventSource(url, options) {
    url = url.toString();

    var withCredentials = isCORSSupported && options != undefined && Boolean(options.withCredentials);
    var initialRetry = getDuration(1000, 0);
    var heartbeatTimeout = getDuration(45000, 0);

    var lastEventId = "";
    var that = this;
    var retry = initialRetry;
    var wasActivity = false;
    var xhr = options != undefined && options.Transport != undefined ? new options.Transport() : new Transport();
    var timeout = 0;
    var timeout0 = 0;
    var charOffset = 0;
    var currentState = WAITING;
    var dataBuffer = [];
    var lastEventIdBuffer = "";
    var eventTypeBuffer = "";
    var onTimeout = undefined;

    var state = FIELD_START;
    var field = "";
    var value = "";

    function close() {
      currentState = CLOSED;
      if (xhr != undefined) {
        xhr.abort();
        xhr = undefined;
      }
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (timeout0 !== 0) {
        clearTimeout(timeout0);
        timeout0 = 0;
      }
      that.readyState = CLOSED;
    }

    function onEvent(type) {
      var responseText = currentState === OPEN || currentState === CONNECTING ? xhr.responseText : "";
      var event = undefined;
      var isWrongStatusCodeOrContentType = false;

      if (currentState === CONNECTING) {
        var status = 0;
        var statusText = "";
        var contentType = undefined;
        if (isXHR) {
          try {
            status = xhr.status;
            statusText = xhr.statusText;
            contentType = xhr.getResponseHeader("Content-Type");
          } catch (error) {
            // https://bugs.webkit.org/show_bug.cgi?id=29121
            status = 0;
            statusText = "";
            contentType = undefined;
            // FF < 14, WebKit
            // https://bugs.webkit.org/show_bug.cgi?id=29658
            // https://bugs.webkit.org/show_bug.cgi?id=77854
          }
        } else if (type !== "" && type !== "error") {
          status = 200;
          statusText = "OK";
          contentType = xhr.contentType;
        }
        if (contentType == undefined) {
          contentType = "";
        }
        if (status === 0 && statusText === "" && type === "load" && responseText !== "") {
          status = 200;
          statusText = "OK";
          if (contentType === "") { // Opera 12
            var tmp = (/^data\:([^,]*?)(?:;base64)?,[\S]*$/).exec(url);
            if (tmp != undefined) {
              contentType = tmp[1];
            }
          }
        }
        if (status === 200 && contentTypeRegExp.test(contentType)) {
          currentState = OPEN;
          wasActivity = true;
          retry = initialRetry;
          that.readyState = OPEN;
          event = new Event("open");
          that.dispatchEvent(event);
          fire(that, that.onopen, event);
          if (currentState === CLOSED) {
            return;
          }
        } else {
          // Opera 12
          if (status !== 0 && (status !== 200 || contentType !== "")) {
            var message = "";
            if (status !== 200) {
              message = "EventSource's response has a status " + status + " " + statusText.replace(/\s+/g, " ") + " that is not 200. Aborting the connection.";
            } else {
              message = "EventSource's response has a Content-Type specifying an unsupported type: " + contentType.replace(/\s+/g, " ") + ". Aborting the connection.";
            }
            setTimeout(function () {
              throw new Error(message);
            }, 0);
            isWrongStatusCodeOrContentType = true;
          }
        }
      }

      if (currentState === OPEN) {
        if (responseText.length > charOffset) {
          wasActivity = true;
        }
        var i = charOffset - 1;
        var length = responseText.length;
        var c = "\n";
        while (++i < length) {
          c = responseText.charAt(i);
          if (state === AFTER_CR && c === "\n") {
            state = FIELD_START;
          } else {
            if (state === AFTER_CR) {
              state = FIELD_START;
            }
            if (c === "\r" || c === "\n") {
              if (field === "data") {
                dataBuffer.push(value);
              } else if (field === "id") {
                lastEventIdBuffer = value;
              } else if (field === "event") {
                eventTypeBuffer = value;
              } else if (field === "retry") {
                initialRetry = getDuration(Number(value), initialRetry);
                retry = initialRetry;
              } else if (field === "heartbeatTimeout") {
                heartbeatTimeout = getDuration(Number(value), heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(onTimeout, heartbeatTimeout);
                }
              }
              value = "";
              field = "";
              if (state === FIELD_START) {
                if (dataBuffer.length !== 0) {
                  lastEventId = lastEventIdBuffer;
                  if (eventTypeBuffer === "") {
                    eventTypeBuffer = "message";
                  }
                  event = new MessageEvent(eventTypeBuffer, {
                    data: dataBuffer.join("\n"),
                    lastEventId: lastEventIdBuffer
                  });
                  that.dispatchEvent(event);
                  if (eventTypeBuffer === "message") {
                    fire(that, that.onmessage, event);
                  }
                  if (currentState === CLOSED) {
                    return;
                  }
                }
                dataBuffer.length = 0;
                eventTypeBuffer = "";
              }
              state = c === "\r" ? AFTER_CR : FIELD_START;
            } else {
              if (state === FIELD_START) {
                state = FIELD;
              }
              if (state === FIELD) {
                if (c === ":") {
                  state = VALUE_START;
                } else {
                  field += c;
                }
              } else if (state === VALUE_START) {
                if (c !== " ") {
                  value += c;
                }
                state = VALUE;
              } else if (state === VALUE) {
                value += c;
              }
            }
          }
        }
        charOffset = length;
      }

      if ((currentState === OPEN || currentState === CONNECTING) &&
          (type === "load" || type === "error" || isWrongStatusCodeOrContentType || (charOffset > 1024 * 1024) || (timeout === 0 && !wasActivity))) {
        if (isWrongStatusCodeOrContentType) {
          close();
        } else {
          if (type === "" && timeout === 0 && !wasActivity) {
            setTimeout(function () {
              throw new Error("No activity within " + heartbeatTimeout + " milliseconds. Reconnecting.");
            }, 0);
          }
          currentState = WAITING;
          xhr.abort();
          if (timeout !== 0) {
            clearTimeout(timeout);
            timeout = 0;
          }
          if (retry > initialRetry * 16) {
            retry = initialRetry * 16;
          }
          if (retry > MAXIMUM_DURATION) {
            retry = MAXIMUM_DURATION;
          }
          timeout = setTimeout(onTimeout, retry);
          retry = retry * 2 + 1;

          that.readyState = CONNECTING;
        }
        event = new Event("error");
        that.dispatchEvent(event);
        fire(that, that.onerror, event);
      } else {
        if (timeout === 0) {
          wasActivity = false;
          timeout = setTimeout(onTimeout, heartbeatTimeout);
        }
      }
    }

    function onProgress() {
      onEvent("progress");
    }

    function onLoad() {
      onEvent("load");
    }

    function onError() {
      onEvent("error");
    }

    if (isXHR && global.opera != undefined) {
      // workaround for Opera issue with "progress" events
      timeout0 = setTimeout(function f() {
        if (xhr.readyState === 3) {
          onEvent("progress");
        }
        timeout0 = setTimeout(f, 500);
      }, 0);
    }

    onTimeout = function () {
      timeout = 0;
      if (currentState !== WAITING) {
        onEvent("");
        return;
      }

      // loading indicator in Safari, Chrome < 14
      if (isXHR && !("onloadend" in xhr) && global.document != undefined && global.document.readyState != undefined && global.document.readyState !== "complete") {
        timeout = setTimeout(onTimeout, 4);
        return;
      }

      // XDomainRequest#abort removes onprogress, onerror, onload
      xhr.onload = onLoad;
      xhr.onerror = onError;

      if (isXHR) {
        // improper fix to match Firefox behaviour, but it is better than just ignore abort
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
        // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
        // https://code.google.com/p/chromium/issues/detail?id=153570
        xhr.onabort = onError;

        // Firefox 3.5 - 3.6 - ? < 9.0
        // onprogress is not fired sometimes or delayed
        xhr.onreadystatechange = onProgress;
      }

      // loading indicator in Firefox
      // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
      if (xhr.sendAsBinary == undefined) {
        xhr.onprogress = onProgress;
      }

      wasActivity = false;
      timeout = setTimeout(onTimeout, heartbeatTimeout);

      charOffset = 0;
      currentState = CONNECTING;
      dataBuffer.length = 0;
      eventTypeBuffer = "";
      lastEventIdBuffer = lastEventId;
      value = "";
      field = "";
      state = FIELD_START;

      var s = url.slice(0, 5);
      if (s !== "data:" && s !== "blob:") {
        s = url + ((url.indexOf("?", 0) === -1 ? "?" : "&") + "lastEventId=" + encodeURIComponent(lastEventId) + "&r=" + (Math.random() + 1).toString().slice(2));
      } else {
        s = url;
      }
      xhr.open("GET", s, true);

      if (isXHR) {
        // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
        xhr.withCredentials = withCredentials;

        xhr.responseType = "text";

        // Request header field Cache-Control is not allowed by Access-Control-Allow-Headers.
        // "Cache-control: no-cache" are not honored in Chrome and Firefox
        // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
        //xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Accept", "text/event-stream");
        // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
        //xhr.setRequestHeader("Last-Event-ID", lastEventId);
      }

      xhr.send(undefined);
    };

    EventTarget.call(this);
    this.close = close;
    this.url = url;
    this.readyState = CONNECTING;
    this.withCredentials = withCredentials;

    this.onopen = undefined;
    this.onmessage = undefined;
    this.onerror = undefined;

    onTimeout();
  }

  function F() {
    this.CONNECTING = CONNECTING;
    this.OPEN = OPEN;
    this.CLOSED = CLOSED;
  }
  F.prototype = EventTarget.prototype;

  EventSource.prototype = new F();
  F.call(EventSource);

  var isEventSourceSupported = function () {
    if (global.EventSource != undefined) {
      try {
        var es = new global.EventSource("data:text/event-stream;charset=utf-8,");
        es.close();
        return es.withCredentials === false &&
               es.url !== ""; // to filter out Opera 12 implementation
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  if (Transport != undefined && !isEventSourceSupported()) {
    // Why replace a native EventSource ?
    // https://bugzilla.mozilla.org/show_bug.cgi?id=444328
    // https://bugzilla.mozilla.org/show_bug.cgi?id=831392
    // https://code.google.com/p/chromium/issues/detail?id=260144
    // https://code.google.com/p/chromium/issues/detail?id=225654
    // ...
    global.NativeEventSource = global.EventSource;
    global.EventSource = EventSource;
  }

}(this));


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _BreadCrumbs = __webpack_require__(146);

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _Sidebar = __webpack_require__(151);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _DialogSlot = __webpack_require__(152);

var _DialogSlot2 = _interopRequireDefault(_DialogSlot);

var _ServerStatus = __webpack_require__(153);

var _ServerStatus2 = _interopRequireDefault(_ServerStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'application' },
        _react2.default.createElement(_ServerStatus2.default, null),
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            _BreadCrumbs2.default,
            this.getRoutingProps(),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle',
                'data-toggle': 'offcanvas',
                'data-target': '.sidebar-block' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-list' }),
              _react2.default.createElement('span', { className: 'icon-list' }),
              _react2.default.createElement('span', { className: 'icon-list' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'editor container' },
          _react2.default.createElement(_DialogSlot2.default, this.getRoutingProps()),
          _react2.default.createElement(
            'div',
            { className: 'sidebar-block block-offcanvas block-offcanvas-left' },
            _react2.default.createElement(
              'nav',
              { className: 'sidebar col-md-2 col-sm-3 sidebar-offcanvas' },
              _react2.default.createElement(_Sidebar2.default, this.getRoutingProps())
            ),
            _react2.default.createElement(
              'div',
              { className: 'view col-md-10 col-sm-9' },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return App;
}(_Component3.default);

exports.default = App;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _Link = __webpack_require__(60);

var _Link2 = _interopRequireDefault(_Link);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _findFiles = __webpack_require__(147);

var _findFiles2 = _interopRequireDefault(_findFiles);

var _publish = __webpack_require__(149);

var _publish2 = _interopRequireDefault(_publish);

var _Refresh = __webpack_require__(150);

var _Refresh2 = _interopRequireDefault(_Refresh);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadCrumbs = function (_RecordComponent) {
  _inherits(BreadCrumbs, _RecordComponent);

  function BreadCrumbs(props) {
    _classCallCheck(this, BreadCrumbs);

    var _this = _possibleConstructorReturn(this, (BreadCrumbs.__proto__ || Object.getPrototypeOf(BreadCrumbs)).call(this, props));

    _this.state = {
      recordPathInfo: null
    };
    _this._onKeyPress = _this._onKeyPress.bind(_this);
    return _this;
  }

  _createClass(BreadCrumbs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(BreadCrumbs.prototype.__proto__ || Object.getPrototypeOf(BreadCrumbs.prototype), 'componentDidMount', this).call(this);
      this.updateCrumbs();
      window.addEventListener('keydown', this._onKeyPress);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      _get(BreadCrumbs.prototype.__proto__ || Object.getPrototypeOf(BreadCrumbs.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState);
      if (prevProps.params.path !== this.props.params.path) {
        this.updateCrumbs();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this._onKeyPress);
    }
  }, {
    key: 'updateCrumbs',
    value: function updateCrumbs() {
      var _this2 = this;

      var path = this.getRecordPath();
      if (path === null) {
        this.setState({
          recordPathInfo: null
        });
        return;
      }

      _utils2.default.loadData('/pathinfo', { path: path }, null, _richPromise2.default).then(function (resp) {
        _this2.setState({
          recordPathInfo: {
            path: path,
            segments: resp.segments
          }
        });
      });
    }
  }, {
    key: '_onKeyPress',
    value: function _onKeyPress(event) {
      // meta+g is open find files
      if (event.which === 71 && _utils2.default.isMetaKey(event)) {
        event.preventDefault();
        _dialogSystem2.default.showDialog(_findFiles2.default);
      }
    }
  }, {
    key: '_onCloseClick',
    value: function _onCloseClick(e) {
      _utils2.default.loadData('/previewinfo', {
        path: this.getRecordPath(),
        alt: this.getRecordAlt()
      }, null, _richPromise2.default).then(function (resp) {
        if (resp.url === null) {
          window.location.href = _utils2.default.getCanonicalUrl('/');
        } else {
          window.location.href = _utils2.default.getCanonicalUrl(resp.url);
        }
      });
    }
  }, {
    key: '_onFindFiles',
    value: function _onFindFiles(e) {
      _dialogSystem2.default.showDialog(_findFiles2.default);
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh(e) {
      _dialogSystem2.default.showDialog(_Refresh2.default);
    }
  }, {
    key: '_onPublish',
    value: function _onPublish(e) {
      _dialogSystem2.default.showDialog(_publish2.default);
    }
  }, {
    key: 'renderGlobalActions',
    value: function renderGlobalActions() {
      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this._onFindFiles.bind(this), title: _i18n2.default.trans('FIND_FILES') },
          _react2.default.createElement('i', { className: 'fa fa-search fa-fw' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this._onPublish.bind(this), title: _i18n2.default.trans('PUBLISH') },
          _react2.default.createElement('i', { className: 'fa fa-cloud-upload fa-fw' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this._onRefresh.bind(this), title: _i18n2.default.trans('REFRESH_BUILD') },
          _react2.default.createElement('i', { className: 'fa fa-refresh fa-fw' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default', onClick: this._onCloseClick.bind(this), title: _i18n2.default.trans('RETURN_TO_WEBSITE') },
          _react2.default.createElement('i', { className: 'fa fa-eye fa-fw' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var crumbs = [];
      var target = this.isRecordPreviewActive() ? '.preview' : '.edit';
      var lastItem = null;

      if (this.state.recordPathInfo != null) {
        crumbs = this.state.recordPathInfo.segments.map(function (item) {
          var urlPath = _this3.getUrlRecordPathWithAlt(item.path);
          var label = item.label_i18n ? _i18n2.default.trans(item.label_i18n) : item.label;
          var className = 'record-crumb';

          if (!item.exists) {
            label = item.id;
            className += ' missing-record-crumb';
          }
          lastItem = item;

          var adminPath = _this3.getPathToAdminPage(target, { path: urlPath });

          return _react2.default.createElement(
            'li',
            { key: item.path, className: className },
            _react2.default.createElement(
              _Link2.default,
              { to: adminPath },
              label
            )
          );
        });
      } else {
        crumbs = _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: this.getPathToAdminPage('.edit', { path: 'root' }) },
            _i18n2.default.trans('BACK_TO_OVERVIEW')
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'breadcrumbs' },
        _react2.default.createElement(
          'ul',
          { className: 'breadcrumb container' },
          this.props.children,
          crumbs,
          lastItem && lastItem.can_have_children ? _react2.default.createElement(
            'li',
            { className: 'new-record-crumb' },
            _react2.default.createElement(
              _Link2.default,
              { to: this.getPathToAdminPage('.add-child', {
                  path: this.getUrlRecordPathWithAlt(lastItem.path) }) },
              '+'
            )
          ) : null,
          ' ' /* this space is needed for chrome ... */,
          _react2.default.createElement(
            'li',
            { className: 'meta' },
            this.renderGlobalActions()
          )
        )
      );
    }
  }]);

  return BreadCrumbs;
}(_RecordComponent3.default);

exports.default = BreadCrumbs;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _SlideDialog = __webpack_require__(28);

var _SlideDialog2 = _interopRequireDefault(_SlideDialog);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FindFiles = function (_RecordComponent) {
  _inherits(FindFiles, _RecordComponent);

  function FindFiles(props) {
    _classCallCheck(this, FindFiles);

    var _this = _possibleConstructorReturn(this, (FindFiles.__proto__ || Object.getPrototypeOf(FindFiles)).call(this, props));

    _this.state = {
      query: '',
      currentSelection: -1,
      results: []
    };
    return _this;
  }

  _createClass(FindFiles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(FindFiles.prototype.__proto__ || Object.getPrototypeOf(FindFiles.prototype), 'componentDidMount', this).call(this);
      this.refs.q.focus();
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var _this2 = this;

      var q = e.target.value;

      if (q === '') {
        this.setState({
          query: '',
          results: [],
          currentSelection: -1
        });
      } else {
        this.setState({
          query: q
        });

        _utils2.default.apiRequest('/find', {
          data: {
            q: q,
            alt: this.getRecordAlt(),
            lang: _i18n2.default.currentLanguage
          },
          method: 'POST'
        }, _richPromise2.default).then(function (resp) {
          _this2.setState({
            results: resp.results,
            currentSelection: Math.min(_this2.state.currentSelection, resp.results.length - 1)
          });
        });
      }
    }
  }, {
    key: 'onInputKey',
    value: function onInputKey(e) {
      var sel = this.state.currentSelection;
      var max = this.state.results.length;
      if (e.which === 40) {
        e.preventDefault();
        sel = (sel + 1) % max;
      } else if (e.which === 38) {
        e.preventDefault();
        sel = (sel - 1 + max) % max;
      } else if (e.which === 13) {
        this.onActiveItem(this.state.currentSelection);
      }
      this.setState({
        currentSelection: sel
      });
    }
  }, {
    key: 'onActiveItem',
    value: function onActiveItem(index) {
      var item = this.state.results[index];
      if (item !== undefined) {
        var target = this.isRecordPreviewActive() ? '.preview' : '.edit';
        var urlPath = this.getUrlRecordPathWithAlt(item.path);
        _dialogSystem2.default.dismissDialog();
        this.transitionToAdminPage(target, { path: urlPath });
      }
    }
  }, {
    key: 'selectItem',
    value: function selectItem(index) {
      this.setState({
        currentSelection: Math.min(index, this.state.results.length - 1)
      });
    }
  }, {
    key: 'renderResults',
    value: function renderResults() {
      var _this3 = this;

      var rv = this.state.results.map(function (result, idx) {
        var parents = result.parents.map(function (item, idx) {
          return _react2.default.createElement(
            'span',
            { className: 'parent', key: idx },
            item.title
          );
        });

        return _react2.default.createElement(
          'li',
          {
            key: idx,
            className: idx === _this3.state.currentSelection ? 'active' : '',
            onClick: _this3.onActiveItem.bind(_this3, idx),
            onMouseEnter: _this3.selectItem.bind(_this3, idx) },
          parents,
          _react2.default.createElement(
            'strong',
            null,
            result.title
          )
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'search-results' },
        rv
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SlideDialog2.default,
        {
          hasCloseButton: true,
          closeOnEscape: true,
          title: _i18n2.default.trans('FIND_FILES') },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', { type: 'text',
            ref: 'q',
            className: 'form-control',
            value: this.state.query,
            onChange: this.onInputChange.bind(this),
            onKeyDown: this.onInputKey.bind(this),
            placeholder: _i18n2.default.trans('FIND_FILES_PLACEHOLDER') })
        ),
        this.renderResults()
      );
    }
  }]);

  return FindFiles;
}(_RecordComponent3.default);

exports.default = FindFiles;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _SlideDialog = __webpack_require__(28);

var _SlideDialog2 = _interopRequireDefault(_SlideDialog);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorDialog = function (_RecordComponent) {
  _inherits(ErrorDialog, _RecordComponent);

  function ErrorDialog() {
    _classCallCheck(this, ErrorDialog);

    return _possibleConstructorReturn(this, (ErrorDialog.__proto__ || Object.getPrototypeOf(ErrorDialog)).apply(this, arguments));
  }

  _createClass(ErrorDialog, [{
    key: 'onClose',
    value: function onClose() {
      _dialogSystem2.default.dismissDialog();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SlideDialog2.default,
        {
          hasCloseButton: true,
          closeOnEscape: true,
          title: _i18n2.default.trans('ERROR') },
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('ERROR_OCURRED'),
          ': ',
          _i18n2.default.trans('ERROR_' + this.props.error.code)
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary',
              onClick: this.onClose.bind(this) },
            _i18n2.default.trans('CLOSE')
          )
        )
      );
    }
  }]);

  return ErrorDialog;
}(_RecordComponent3.default);

ErrorDialog.propTypes = {
  error: _propTypes2.default.object
};

exports.default = ErrorDialog;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _SlideDialog = __webpack_require__(28);

var _SlideDialog2 = _interopRequireDefault(_SlideDialog);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Publish = function (_Component) {
  _inherits(Publish, _Component);

  function Publish(props) {
    _classCallCheck(this, Publish);

    var _this = _possibleConstructorReturn(this, (Publish.__proto__ || Object.getPrototypeOf(Publish)).call(this, props));

    _this.state = {
      servers: [],
      activeTarget: null,
      log: [],
      currentState: 'IDLE'
    };
    return _this;
  }

  _createClass(Publish, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Publish.prototype.__proto__ || Object.getPrototypeOf(Publish.prototype), 'componentDidMount', this).call(this);
      this.syncDialog();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get(Publish.prototype.__proto__ || Object.getPrototypeOf(Publish.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.syncDialog();
    }
  }, {
    key: 'preventNavigation',
    value: function preventNavigation() {
      return !this.isSafeToPublish();
    }
  }, {
    key: 'syncDialog',
    value: function syncDialog() {
      var _this2 = this;

      _utils2.default.loadData('/servers', {}, null, _richPromise2.default).then(function (_ref) {
        var servers = _ref.servers;

        _this2.setState({
          servers: servers,
          activeTarget: servers && servers.length ? servers[0].id : null
        });
      });
    }
  }, {
    key: 'isSafeToPublish',
    value: function isSafeToPublish() {
      return this.state.currentState === 'IDLE' || this.state.currentState === 'DONE';
    }
  }, {
    key: 'onPublish',
    value: function onPublish() {
      if (this.isSafeToPublish()) {
        this._beginBuild();
      }
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      _dialogSystem2.default.dismissDialog();
    }
  }, {
    key: '_beginBuild',
    value: function _beginBuild() {
      var _this3 = this;

      this.setState({
        log: [],
        currentState: 'BUILDING'
      });
      _utils2.default.apiRequest('/build', {
        method: 'POST'
      }, _richPromise2.default).then(function (resp) {
        _this3._beginPublish();
      });
    }
  }, {
    key: '_beginPublish',
    value: function _beginPublish() {
      var _this4 = this;

      this.setState({
        currentState: 'PUBLISH'
      });

      var es = new EventSource(_utils2.default.getApiUrl('/publish') + '?server=' + encodeURIComponent(this.state.activeTarget));
      es.addEventListener('message', function (event) {
        var data = JSON.parse(event.data);
        if (data === null) {
          _this4.setState({
            currentState: 'DONE'
          });
          es.close();
        } else {
          _this4.setState({
            log: _this4.state.log.concat(data.msg)
          });
        }
      });
    }
  }, {
    key: 'onSelectServer',
    value: function onSelectServer(event) {
      this.setState({
        activeTarget: event.target.value
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(Publish.prototype.__proto__ || Object.getPrototypeOf(Publish.prototype), 'componentDidUpdate', this).call(this);
      var node = this.refs.log;
      if (node) {
        node.scrollTop = node.scrollHeight;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var servers = this.state.servers.map(function (server) {
        return _react2.default.createElement(
          'option',
          { value: server.id, key: server.id },
          _i18n2.default.trans(server.name_i18n) + ' (' + server.short_target + ')'
        );
      });

      var progress = null;
      if (this.state.currentState !== 'IDLE') {
        progress = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            this.state.currentState !== 'DONE' ? _i18n2.default.trans('CURRENTLY_PUBLISHING') : _i18n2.default.trans('PUBLISH_DONE')
          ),
          _react2.default.createElement(
            'pre',
            null,
            _i18n2.default.trans('STATE') + ': ' + _i18n2.default.trans('PUBLISH_STATE_' + this.state.currentState)
          ),
          _react2.default.createElement(
            'pre',
            { ref: 'log', className: 'build-log' },
            this.state.log.join('\n')
          )
        );
      }

      return _react2.default.createElement(
        _SlideDialog2.default,
        {
          hasCloseButton: false,
          closeOnEscape: true,
          title: _i18n2.default.trans('PUBLISH') },
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('PUBLISH_NOTE')
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            _i18n2.default.trans('PUBLISH_SERVER')
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'select',
                {
                  value: this.state.activeTarget,
                  onChange: this.onSelectServer.bind(this),
                  className: 'form-control' },
                servers
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary',
              disabled: !this.isSafeToPublish(),
              onClick: this.onPublish.bind(this) },
            _i18n2.default.trans('PUBLISH')
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-default',
              disabled: !this.isSafeToPublish(),
              onClick: this.onCancel.bind(this) },
            _i18n2.default.trans(this.state.currentState === 'DONE' ? 'CLOSE' : 'CANCEL')
          )
        ),
        progress
      );
    }
  }]);

  return Publish;
}(_Component3.default);

exports.default = Publish;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _SlideDialog = __webpack_require__(28);

var _SlideDialog2 = _interopRequireDefault(_SlideDialog);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Refresh = function (_Component) {
  _inherits(Refresh, _Component);

  function Refresh(props) {
    _classCallCheck(this, Refresh);

    var _this = _possibleConstructorReturn(this, (Refresh.__proto__ || Object.getPrototypeOf(Refresh)).call(this, props));

    _this.state = {
      currentState: 'IDLE'
    };
    return _this;
  }

  _createClass(Refresh, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Refresh.prototype.__proto__ || Object.getPrototypeOf(Refresh.prototype), 'componentDidMount', this).call(this);
      this.syncDialog();
    }
  }, {
    key: 'preventNavigation',
    value: function preventNavigation() {
      return !this.isSafeToNavigate();
    }
  }, {
    key: 'isSafeToNavigate',
    value: function isSafeToNavigate() {
      return this.state.currentState === 'IDLE' || this.state.currentState === 'DONE';
    }
  }, {
    key: 'onRefresh',
    value: function onRefresh() {
      var _this2 = this;

      this.setState({
        currentState: 'CLEANING'
      });
      _utils2.default.apiRequest('/clean', {
        method: 'POST'
      }, _richPromise2.default).then(function (resp) {
        _this2.setState({
          currentState: 'DONE'
        });
      });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      _dialogSystem2.default.dismissDialog();
    }
  }, {
    key: 'render',
    value: function render() {
      var progress = null;
      if (this.state.currentState !== 'IDLE') {
        progress = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            this.state.currentState !== 'DONE' ? _i18n2.default.trans('CURRENTLY_REFRESHING_BUILD') : _i18n2.default.trans('REFRESHING_BUILD_DONE')
          )
        );
      }

      return _react2.default.createElement(
        _SlideDialog2.default,
        {
          hasCloseButton: false,
          closeOnEscape: true,
          title: _i18n2.default.trans('REFRESH_BUILD') },
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('REFRESH_BUILD_NOTE')
        ),
        progress,
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary',
              disabled: !this.isSafeToNavigate(),
              onClick: this.onRefresh.bind(this) },
            _i18n2.default.trans('REFRESH_BUILD')
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-default',
              disabled: !this.isSafeToNavigate(),
              onClick: this.onCancel.bind(this) },
            _i18n2.default.trans(this.state.currentState === 'DONE' ? 'CLOSE' : 'CANCEL')
          )
        )
      );
    }
  }]);

  return Refresh;
}(_Component3.default);

exports.default = Refresh;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _hub = __webpack_require__(22);

var _hub2 = _interopRequireDefault(_hub);

var _events = __webpack_require__(23);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _Link = __webpack_require__(60);

var _Link2 = _interopRequireDefault(_Link);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getBrowseButtonTitle = function getBrowseButtonTitle() {
  var platform = _utils2.default.getPlatform();
  if (platform === 'mac') {
    return _i18n2.default.trans('BROWSE_FS_MAC');
  } else if (platform === 'windows') {
    return _i18n2.default.trans('BROWSE_FS_WINDOWS');
  } else {
    return _i18n2.default.trans('BROWSE_FS');
  }
};

var CHILDREN_PER_PAGE = 15;

var ChildPosCache = function () {
  function ChildPosCache() {
    _classCallCheck(this, ChildPosCache);

    this.memo = [];
  }

  _createClass(ChildPosCache, [{
    key: 'rememberPosition',
    value: function rememberPosition(record, page) {
      for (var i = 0; i < this.memo.length; i++) {
        if (this.memo[i][0] === record) {
          this.memo[i][1] = page;
          return;
        }
      }
      this.memo.unshift([record, page]);
      if (this.memo.length > 5) {
        this.memo.length = 5;
      }
    }
  }, {
    key: 'getPosition',
    value: function getPosition(record, childCount) {
      for (var i = 0; i < this.memo.length; i++) {
        if (this.memo[i][0] === record) {
          var rv = this.memo[i][1];
          if (childCount !== undefined) {
            rv = Math.min(rv, Math.ceil(childCount / CHILDREN_PER_PAGE));
          }
          return rv;
        }
      }
      return 1;
    }
  }]);

  return ChildPosCache;
}();

var Sidebar = function (_RecordComponent) {
  _inherits(Sidebar, _RecordComponent);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.state = _this._getInitialState();
    _this.childPosCache = new ChildPosCache();
    _this.onAttachmentsChanged = _this.onAttachmentsChanged.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: '_getInitialState',
    value: function _getInitialState() {
      return {
        recordAttachments: [],
        recordChildren: [],
        recordAlts: [],
        canHaveAttachments: false,
        canHaveChildren: false,
        isAttachment: false,
        canBeDeleted: false,
        recordExists: false,
        lastRecordRequest: null,
        childrenPage: 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), 'componentDidMount', this).call(this);
      this._updateRecordInfo();

      _hub2.default.subscribe(_events.AttachmentsChangedEvent, this.onAttachmentsChanged);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState);
      if (prevProps.params.path !== this.props.params.path) {
        this._updateRecordInfo();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), 'componentWillUnmount', this).call(this);
      _hub2.default.unsubscribe(_events.AttachmentsChangedEvent, this.onAttachmentsChanged);
    }
  }, {
    key: 'onAttachmentsChanged',
    value: function onAttachmentsChanged(event) {
      if (event.recordPath === this.getRecordPath()) {
        this._updateRecordInfo();
      }
    }
  }, {
    key: '_updateRecordInfo',
    value: function _updateRecordInfo() {
      var _this2 = this;

      var path = this.getRecordPath();
      if (path === null) {
        this.setState(this._getInitialState());
        return;
      }

      this.setState({
        lastRecordRequest: path
      }, function () {
        _utils2.default.loadData('/recordinfo', { path: path }, null, _richPromise2.default).then(function (resp) {
          // we're already fetching something else.
          if (path !== _this2.state.lastRecordRequest) {
            return;
          }
          var alts = resp.alts;
          alts.sort(function (a, b) {
            var nameA = (a.is_primary ? 'A' : 'B') + _i18n2.default.trans(a.name_i18n);
            var nameB = (b.is_primary ? 'A' : 'B') + _i18n2.default.trans(b.name_i18n);
            return nameA === nameB ? 0 : nameA < nameB ? -1 : 1;
          });
          _this2.setState({
            recordAttachments: resp.attachments,
            recordChildren: resp.children,
            recordAlts: alts,
            canHaveAttachments: resp.can_have_attachments,
            canHaveChildren: resp.can_have_children,
            isAttachment: resp.is_attachment,
            canBeDeleted: resp.can_be_deleted,
            recordExists: resp.exists,
            childrenPage: _this2.childPosCache.getPosition(path, resp.children.length)
          });
        });
      });
    }
  }, {
    key: 'fsOpen',
    value: function fsOpen(event) {
      event.preventDefault();
      _utils2.default.apiRequest('/browsefs', { data: {
          path: this.getRecordPath(),
          alt: this.getRecordAlt()
        },
        // eslint-disable-next-line indent
        method: 'POST' }, _richPromise2.default).then(function (resp) {
        if (!resp.okay) {
          alert(_i18n2.default.trans('ERROR_CANNOT_BROWSE_FS'));
        }
      });
    }
  }, {
    key: 'renderPageActions',
    value: function renderPageActions() {
      var urlPath = this.getUrlRecordPathWithAlt();
      var links = [];
      var deleteLink = null;

      links.push(_react2.default.createElement(
        'li',
        { key: 'edit' },
        _react2.default.createElement(
          _Link2.default,
          { to: urlPath + '/edit' },
          this.state.isAttachment ? _i18n2.default.trans('EDIT_METADATA') : _i18n2.default.trans('EDIT')
        )
      ));

      if (this.state.canBeDeleted) {
        links.push(_react2.default.createElement(
          'li',
          { key: 'delete' },
          _react2.default.createElement(
            _Link2.default,
            { to: urlPath + '/delete' },
            _i18n2.default.trans('DELETE')
          )
        ));
      }

      links.push(_react2.default.createElement(
        'li',
        { key: 'preview' },
        _react2.default.createElement(
          _Link2.default,
          { to: urlPath + '/preview' },
          _i18n2.default.trans('PREVIEW')
        )
      ));

      if (this.state.recordExists) {
        links.push(_react2.default.createElement(
          'li',
          { key: 'fs-open' },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: this.fsOpen.bind(this) },
            getBrowseButtonTitle()
          )
        ));
      }

      if (this.state.canHaveChildren) {
        links.push(_react2.default.createElement(
          'li',
          { key: 'add-child' },
          _react2.default.createElement(
            _Link2.default,
            { to: urlPath + '/add-child' },
            _i18n2.default.trans('ADD_CHILD_PAGE')
          )
        ));
      }

      if (this.state.canHaveAttachments) {
        links.push(_react2.default.createElement(
          'li',
          { key: 'add-attachment' },
          _react2.default.createElement(
            _Link2.default,
            { to: urlPath + '/upload' },
            _i18n2.default.trans('ADD_ATTACHMENT')
          )
        ));
      }

      var title = this.state.isAttachment ? _i18n2.default.trans('ATTACHMENT_ACTIONS') : _i18n2.default.trans('PAGE_ACTIONS');

      return _react2.default.createElement(
        'div',
        { key: 'actions', className: 'section' },
        _react2.default.createElement(
          'h3',
          null,
          title
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          links,
          deleteLink
        )
      );
    }
  }, {
    key: 'renderAlts',
    value: function renderAlts() {
      var _this3 = this;

      if (this.state.recordAlts.length < 2) {
        return null;
      }

      var items = this.state.recordAlts.map(function (item) {
        var title = _i18n2.default.trans(item.name_i18n);
        var className = 'alt';
        if (item.is_primary) {
          title += ' (' + _i18n2.default.trans('PRIMARY_ALT') + ')';
        } else if (item.primary_overlay) {
          title += ' (' + _i18n2.default.trans('PRIMARY_OVERLAY') + ')';
        }
        if (!item.exists) {
          className += ' alt-missing';
        }

        var path = _this3.getPathToAdminPage(null, {
          path: _this3.getUrlRecordPathWithAlt(null, item.alt)
        });
        return _react2.default.createElement(
          'li',
          { key: item.alt, className: className },
          _react2.default.createElement(
            _Link2.default,
            { to: path },
            title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { key: 'alts', className: 'section' },
        _react2.default.createElement(
          'h3',
          null,
          _i18n2.default.trans('ALTS')
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          items
        )
      );
    }
  }, {
    key: 'renderChildPagination',
    value: function renderChildPagination() {
      var _this4 = this;

      var pages = Math.ceil(this.state.recordChildren.length / CHILDREN_PER_PAGE);
      if (pages <= 1) {
        return null;
      }
      var page = this.state.childrenPage;
      var goToPage = function goToPage(diff, event) {
        event.preventDefault();
        var newPage = page + diff;
        _this4.childPosCache.rememberPosition(_this4.getRecordPath(), newPage);
        _this4.setState({
          childrenPage: newPage
        });
      };

      return _react2.default.createElement(
        'li',
        { className: 'pagination' },
        page > 1 ? _react2.default.createElement(
          'a',
          { href: '#', onClick: goToPage.bind(this, -1) },
          '\xAB'
        ) : _react2.default.createElement(
          'em',
          null,
          '\xAB'
        ),
        _react2.default.createElement(
          'span',
          { className: 'page' },
          page + ' / ' + pages
        ),
        page < pages ? _react2.default.createElement(
          'a',
          { href: '#', onClick: goToPage.bind(this, +1) },
          '\xBB'
        ) : _react2.default.createElement(
          'em',
          null,
          '\xBB'
        )
      );
    }
  }, {
    key: 'renderChildActions',
    value: function renderChildActions() {
      var _this5 = this;

      var target = this.isRecordPreviewActive() ? 'preview' : 'edit';

      var children = this.state.recordChildren.slice((this.state.childrenPage - 1) * CHILDREN_PER_PAGE, this.state.childrenPage * CHILDREN_PER_PAGE);

      var items = children.map(function (child) {
        var urlPath = _this5.getUrlRecordPathWithAlt(child.path);
        return _react2.default.createElement(
          'li',
          { key: child.id },
          _react2.default.createElement(
            _Link2.default,
            { to: urlPath + '/' + target },
            _i18n2.default.trans(child.label_i18n)
          )
        );
      });

      if (items.length === 0) {
        items.push(_react2.default.createElement(
          'li',
          { key: '_missing' },
          _react2.default.createElement(
            'em',
            null,
            _i18n2.default.trans('NO_CHILD_PAGES')
          )
        ));
      }

      return _react2.default.createElement(
        'div',
        { key: 'children', className: 'section' },
        _react2.default.createElement(
          'h3',
          null,
          _i18n2.default.trans('CHILD_PAGES')
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav record-children' },
          this.renderChildPagination(),
          items
        )
      );
    }
  }, {
    key: 'renderAttachmentActions',
    value: function renderAttachmentActions() {
      var _this6 = this;

      var items = this.state.recordAttachments.map(function (atch) {
        var urlPath = _this6.getUrlRecordPathWithAlt(atch.path);
        return _react2.default.createElement(
          'li',
          { key: atch.id },
          _react2.default.createElement(
            _Link2.default,
            { to: urlPath + '/edit' },
            atch.id,
            ' (',
            atch.type,
            ')'
          )
        );
      });

      if (items.length === 0) {
        items.push(_react2.default.createElement(
          'li',
          { key: '_missing' },
          _react2.default.createElement(
            'em',
            null,
            _i18n2.default.trans('NO_ATTACHMENTS')
          )
        ));
      }

      return _react2.default.createElement(
        'div',
        { key: 'attachments', className: 'section' },
        _react2.default.createElement(
          'h3',
          null,
          _i18n2.default.trans('ATTACHMENTS')
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav record-attachments' },
          items
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var sections = [];

      if (this.getRecordPath() !== null) {
        sections.push(this.renderPageActions());
      }

      sections.push(this.renderAlts());

      if (this.state.canHaveChildren) {
        sections.push(this.renderChildActions());
      }

      if (this.state.canHaveAttachments) {
        sections.push(this.renderAttachmentActions());
      }

      return _react2.default.createElement(
        'div',
        { className: 'sidebar-wrapper' },
        sections
      );
    }
  }]);

  return Sidebar;
}(_RecordComponent3.default);

exports.default = Sidebar;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _dialogSystem = __webpack_require__(11);

var _dialogSystem2 = _interopRequireDefault(_dialogSystem);

var _events = __webpack_require__(23);

var _hub = __webpack_require__(22);

var _hub2 = _interopRequireDefault(_hub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogSlot = function (_Component) {
  _inherits(DialogSlot, _Component);

  function DialogSlot(props) {
    _classCallCheck(this, DialogSlot);

    var _this = _possibleConstructorReturn(this, (DialogSlot.__proto__ || Object.getPrototypeOf(DialogSlot)).call(this, props));

    _this.state = {
      currentDialog: null,
      currentDialogOptions: null
    };
    _this.onDialogChanged = _this.onDialogChanged.bind(_this);
    return _this;
  }

  _createClass(DialogSlot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(DialogSlot.prototype.__proto__ || Object.getPrototypeOf(DialogSlot.prototype), 'componentDidMount', this).call(this);
      _hub2.default.subscribe(_events.DialogChangedEvent, this.onDialogChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get(DialogSlot.prototype.__proto__ || Object.getPrototypeOf(DialogSlot.prototype), 'componentWillUnmount', this).call(this);
      _hub2.default.unsubscribe(_events.DialogChangedEvent, this.onDialogChanged);
    }
  }, {
    key: 'onDialogChanged',
    value: function onDialogChanged(event) {
      this.setState({
        currentDialog: event.dialog,
        currentDialogOptions: event.dialogOptions || {}
      });
    }
  }, {
    key: 'initDialogInstance',
    value: function initDialogInstance(dialog) {
      _dialogSystem2.default.notifyDialogInstance(dialog);
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dialog = null;
      if (this.state.currentDialog) {
        dialog = _react2.default.createElement(this.state.currentDialog, _extends({
          ref: function ref(_ref) {
            return _this2.initDialogInstance(_ref);
          }
        }, this.getRoutingProps(), this.state.currentDialogOptions));
      } else {
        _dialogSystem2.default.notifyDialogInstance(null);
      }

      if (!dialog) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'dialog-slot' },
        dialog,
        _react2.default.createElement('div', { className: 'interface-protector' })
      );
    }
  }]);

  return DialogSlot;
}(_Component3.default);

exports.default = DialogSlot;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerStatus = function (_Component) {
  _inherits(ServerStatus, _Component);

  function ServerStatus(props) {
    _classCallCheck(this, ServerStatus);

    var _this = _possibleConstructorReturn(this, (ServerStatus.__proto__ || Object.getPrototypeOf(ServerStatus)).call(this, props));

    _this.state = {
      serverIsUp: true,
      projectId: null
    };

    _this.intervalId = null;
    _this.onInterval = _this.onInterval.bind(_this);
    return _this;
  }

  _createClass(ServerStatus, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(ServerStatus.prototype.__proto__ || Object.getPrototypeOf(ServerStatus.prototype), 'componentDidMount', this).call(this);
      this.intervalId = window.setInterval(this.onInterval, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.intervalId !== null) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
      _get(ServerStatus.prototype.__proto__ || Object.getPrototypeOf(ServerStatus.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'onInterval',
    value: function onInterval() {
      var _this2 = this;

      _utils2.default.loadData('/ping', {}, null, _richPromise2.default).then(function (resp) {
        if (_this2.state.projectId === null) {
          _this2.setState({
            projectId: resp.project_id
          });
        }
        _this2.setState({
          serverIsUp: _this2.state.projectId === resp.project_id
        });
      }, function () {
        _this2.setState({
          serverIsUp: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.serverIsUp) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'server-down-panel' },
        _react2.default.createElement(
          'div',
          { className: 'server-down-dialog' },
          _react2.default.createElement(
            'h3',
            null,
            _i18n2.default.trans('ERROR_SERVER_UNAVAILABLE')
          ),
          _react2.default.createElement(
            'p',
            null,
            _i18n2.default.trans('ERROR_SERVER_UNAVAILABLE_MESSAGE')
          )
        )
      );
    }
  }]);

  return ServerStatus;
}(_Component3.default);

exports.default = ServerStatus;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dash = function (_Component) {
  _inherits(Dash, _Component);

  function Dash() {
    _classCallCheck(this, Dash);

    return _possibleConstructorReturn(this, (Dash.__proto__ || Object.getPrototypeOf(Dash)).apply(this, arguments));
  }

  _createClass(Dash, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Dash.prototype.__proto__ || Object.getPrototypeOf(Dash.prototype), 'componentDidMount', this).call(this);
      var rootPreview = $LEKTOR_CONFIG.admin_root + '/root/preview';
      this.context.router.push(rootPreview);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Dash;
}(_Component3.default);

exports.default = Dash;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = __webpack_require__(61);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _RecordEditComponent2 = __webpack_require__(62);

var _RecordEditComponent3 = _interopRequireDefault(_RecordEditComponent2);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _widgets = __webpack_require__(43);

var _widgets2 = _interopRequireDefault(_widgets);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPage = function (_RecordEditComponent) {
  _inherits(EditPage, _RecordEditComponent);

  function EditPage(props) {
    _classCallCheck(this, EditPage);

    var _this = _possibleConstructorReturn(this, (EditPage.__proto__ || Object.getPrototypeOf(EditPage)).call(this, props));

    _this.state = {
      recordInitialData: null,
      recordData: null,
      recordDataModel: null,
      recordInfo: null,
      hasPendingChanges: false
    };
    _this._onKeyPress = _this._onKeyPress.bind(_this);
    return _this;
  }

  _createClass(EditPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(EditPage.prototype.__proto__ || Object.getPrototypeOf(EditPage.prototype), 'componentDidMount', this).call(this);
      this.syncEditor();
      window.addEventListener('keydown', this._onKeyPress);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      /*
      if (nextProps.params.path !== this.props.params.path) {
        this.syncEditor();
      }
      */
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.params.path !== this.props.params.path) {
        this.syncEditor();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this._onKeyPress);
    }
  }, {
    key: 'hasPendingChanges',
    value: function hasPendingChanges() {
      return this.state.hasPendingChanges;
    }
  }, {
    key: '_onKeyPress',
    value: function _onKeyPress(event) {
      // meta+s is open find files
      if (event.which === 83 && _utils2.default.isMetaKey(event)) {
        event.preventDefault();
        this.saveChanges();
      }
    }
  }, {
    key: 'isIllegalField',
    value: function isIllegalField(field) {
      switch (field.name) {
        case '_id':
        case '_path':
        case '_gid':
        case '_alt':
        case '_source_alt':
        case '_model':
        case '_attachment_for':
          return true;
        case '_attachment_type':
          return !this.state.recordInfo.is_attachment;
      }
      return false;
    }
  }, {
    key: 'syncEditor',
    value: function syncEditor() {
      var _this2 = this;

      _utils2.default.loadData('/rawrecord', {
        path: this.getRecordPath(),
        alt: this.getRecordAlt()
      }, null, _richPromise2.default).then(function (resp) {
        _this2.setState({
          recordInitialData: resp.data,
          recordData: {},
          recordDataModel: resp.datamodel,
          recordInfo: resp.record_info,
          hasPendingChanges: false
        });
      });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(field, value) {
      var updates = {};
      updates[field.name] = { $set: value || '' };
      var rd = (0, _reactAddonsUpdate2.default)(this.state.recordData, updates);
      this.setState({
        recordData: rd,
        hasPendingChanges: true
      });
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      var _this3 = this;

      var rv = {};
      this.state.recordDataModel.fields.forEach(function (field) {
        if (_this3.isIllegalField(field)) {
          return;
        }

        var value = _this3.state.recordData[field.name];

        if (value !== undefined) {
          var Widget = _widgets2.default.getWidgetComponentWithFallback(field.type);
          if (Widget.serializeValue) {
            value = Widget.serializeValue(value, field.type);
          }
        } else {
          value = _this3.state.recordInitialData[field.name];
          if (value === undefined) {
            value = null;
          }
        }

        rv[field.name] = value;
      });

      return rv;
    }
  }, {
    key: 'saveChanges',
    value: function saveChanges() {
      var _this4 = this;

      var path = this.getRecordPath();
      var alt = this.getRecordAlt();
      var newData = this.getValues();
      _utils2.default.apiRequest('/rawrecord', { json: {
          data: newData, path: path, alt: alt },
        // eslint-disable-next-line indent
        method: 'PUT' }, _richPromise2.default).then(function (resp) {
        _this4.setState({
          hasPendingChanges: false
        }, function () {
          _this4.transitionToAdminPage('.preview', {
            path: _this4.getUrlRecordPathWithAlt(path)
          });
        });
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(event) {
      this.transitionToAdminPage('.delete', {
        path: this.getUrlRecordPathWithAlt()
      });
    }
  }, {
    key: 'getValueForField',
    value: function getValueForField(widget, field) {
      var value = this.state.recordData[field.name];
      if (value === undefined) {
        value = this.state.recordInitialData[field.name] || '';
        if (widget.deserializeValue) {
          value = widget.deserializeValue(value, field.type);
        }
      }
      return value;
    }
  }, {
    key: 'getPlaceholderForField',
    value: function getPlaceholderForField(widget, field) {
      if (field['default'] !== null) {
        if (widget.deserializeValue) {
          return widget.deserializeValue(field['default'], field.type);
        }
        return field['default'];
      } else if (field.name === '_slug') {
        return this.state.recordInfo.slug_format;
      } else if (field.name === '_template') {
        return this.state.recordInfo.default_template;
      } else if (field.name === '_attachment_type') {
        return this.state.recordInfo.implied_attachment_type;
      }
      return null;
    }
  }, {
    key: 'renderFormField',
    value: function renderFormField(field, idx) {
      var widget = _widgets2.default.getWidgetComponentWithFallback(field.type);
      return _react2.default.createElement(_widgets2.default.FieldBox, {
        key: idx,
        value: this.getValueForField(widget, field),
        placeholder: this.getPlaceholderForField(widget, field),
        field: field,
        onChange: this.onValueChange.bind(this, field),
        disabled: !(field.alts_enabled == null || field.alts_enabled ^ this.state.recordInfo.alt === '_primary')
      });
    }
  }, {
    key: 'renderFormFields',
    value: function renderFormFields() {
      return _widgets2.default.renderFieldRows(this.state.recordDataModel.fields, this.isIllegalField.bind(this), this.renderFormField.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      // we have not loaded anything yet.
      if (this.state.recordInfo === null) {
        return null;
      }

      var deleteButton = null;
      if (this.state.recordInfo.can_be_deleted) {
        deleteButton = _react2.default.createElement(
          'button',
          { type: 'submit', className: 'btn btn-default',
            onClick: this.deleteRecord.bind(this) },
          _i18n2.default.trans('DELETE')
        );
      }

      var title = this.state.recordInfo.is_attachment ? _i18n2.default.trans('EDIT_ATTACHMENT_METADATA_OF') : _i18n2.default.trans('EDIT_PAGE_NAME');

      var label = this.state.recordInfo.label_i18n ? _i18n2.default.trans(this.state.recordInfo.label_i18n) : this.state.recordInfo.label;

      return _react2.default.createElement(
        'div',
        { className: 'edit-area' },
        _react2.default.createElement(
          'h2',
          null,
          title.replace('%s', label)
        ),
        this.renderFormFields(),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary',
              onClick: this.saveChanges.bind(this) },
            _i18n2.default.trans('SAVE_CHANGES')
          ),
          deleteButton
        )
      );
    }
  }]);

  return EditPage;
}(_RecordEditComponent3.default);

exports.default = EditPage;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _mixins = __webpack_require__(24);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _userLabel = __webpack_require__(44);

var _userLabel2 = _interopRequireDefault(_userLabel);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isTrue = function isTrue(value) {
  return value === 'true' || value === 'yes' || value === '1';
};

var isValidDate = function isValidDate(year, month, day) {
  year = parseInt(year, 10);
  month = parseInt(month, 10);
  day = parseInt(day, 10);
  var date = new Date(year, month - 1, day);
  if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
    return true;
  }
  return false;
};

var InputWidgetMixin = {
  mixins: [_mixins.BasicWidgetMixin],

  onChange: function onChange(event) {
    var value = event.target.value;
    if (this.postprocessValue) {
      value = this.postprocessValue(value);
    }
    this.props.onChange(value);
  },
  render: function render() {
    var _props = this.props,
        type = _props.type,
        onChange = _props.onChange,
        className = _props.className,
        otherProps = _objectWithoutProperties(_props, ['type', 'onChange', 'className']);

    var help = null;
    var failure = this.getValidationFailure();
    className = className || '';
    className += ' input-group';

    if (failure !== null) {
      className += ' has-feedback has-' + failure.type;
      var valClassName = 'validation-block validation-block-' + failure.type;
      help = _react2.default.createElement(
        'div',
        { className: valClassName },
        failure.message
      );
    }

    var addon = null;
    var configuredAddon = type.addon_label_i18n;
    if (configuredAddon) {
      addon = _userLabel2.default.format(configuredAddon);
    } else if (this.getInputAddon) {
      addon = this.getInputAddon();
    }

    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', _extends({
          type: this.getInputType(),
          className: this.getInputClass(),
          onChange: onChange ? this.onChange : undefined
        }, otherProps)),
        addon ? _react2.default.createElement(
          'span',
          { className: 'input-group-addon' },
          addon
        ) : null
      ),
      help
    );
  }
};

var SingleLineTextInputWidget = (0, _createReactClass2.default)({
  displayName: 'SingleLineTextInputWidget',
  mixins: [InputWidgetMixin],

  getInputType: function getInputType() {
    return 'text';
  },
  getInputAddon: function getInputAddon() {
    return _react2.default.createElement('i', { className: 'fa fa-paragraph' });
  }
});

var SlugInputWidget = (0, _createReactClass2.default)({
  displayName: 'SlugInputWidget',
  mixins: [InputWidgetMixin],

  postprocessValue: function postprocessValue(value) {
    return value.replace(/\s+/g, '-');
  },
  getInputType: function getInputType() {
    return 'text';
  },
  getInputAddon: function getInputAddon() {
    return _react2.default.createElement('i', { className: 'fa fa-link' });
  }
});

var IntegerInputWidget = (0, _createReactClass2.default)({
  displayName: 'IntegerInputWidget',
  mixins: [InputWidgetMixin],

  postprocessValue: function postprocessValue(value) {
    return value.match(/^\s*(.*?)\s*$/)[1];
  },
  getValidationFailureImpl: function getValidationFailureImpl() {
    if (this.props.value && !this.props.value.match(/^-?\d+$/)) {
      return new _mixins.ValidationFailure({
        message: _i18n2.default.trans('ERROR_INVALID_NUMBER')
      });
    }
    return null;
  },
  getInputType: function getInputType() {
    return 'text';
  },
  getInputAddon: function getInputAddon() {
    return '0';
  }
});

var FloatInputWidget = (0, _createReactClass2.default)({
  displayName: 'FloatInputWidget',
  mixins: [InputWidgetMixin],

  postprocessValue: function postprocessValue(value) {
    return value.match(/^\s*(.*?)\s*$/)[1];
  },
  getValidationFailureImpl: function getValidationFailureImpl() {
    if (this.props.value && isNaN(parseFloat(this.props.value))) {
      return new _mixins.ValidationFailure({
        message: _i18n2.default.trans('ERROR_INVALID_NUMBER')
      });
    }
    return null;
  },
  getInputType: function getInputType() {
    return 'text';
  },
  getInputAddon: function getInputAddon() {
    return '0.0';
  }
});

var DateInputWidget = (0, _createReactClass2.default)({
  displayName: 'DateInputWidget',
  mixins: [InputWidgetMixin],

  postprocessValue: function postprocessValue(value) {
    value = value.match(/^\s*(.*?)\s*$/)[1];
    var match = value.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})\s*$/);
    var day = void 0,
        month = void 0,
        year = void 0;
    if (match) {
      day = parseInt(match[1], 10);
      month = parseInt(match[2], 10);
      year = parseInt(match[3], 10);
      return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    }
    return value;
  },
  getValidationFailureImpl: function getValidationFailureImpl() {
    if (!this.props.value) {
      return null;
    }

    var match = this.props.value.match(/^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/);
    if (match && isValidDate(match[1], match[2], match[3])) {
      return null;
    }

    return new _mixins.ValidationFailure({
      message: _i18n2.default.trans('ERROR_INVALID_DATE')
    });
  },
  getInputType: function getInputType() {
    return 'date';
  },
  getInputAddon: function getInputAddon() {
    return _react2.default.createElement('i', { className: 'fa fa-calendar' });
  }
});

var UrlInputWidget = (0, _createReactClass2.default)({
  displayName: 'UrlInputWidget',
  mixins: [InputWidgetMixin],

  getValidationFailureImpl: function getValidationFailureImpl() {
    if (this.props.value && !_utils2.default.isValidUrl(this.props.value)) {
      return new _mixins.ValidationFailure({
        message: _i18n2.default.trans('ERROR_INVALID_URL')
      });
    }
    return null;
  },
  getInputType: function getInputType() {
    return 'text';
  },
  getInputAddon: function getInputAddon() {
    return _react2.default.createElement('i', { className: 'fa fa-external-link' });
  }
});

var MultiLineTextInputWidget = (0, _createReactClass2.default)({
  displayName: 'MultiLineTextInputWidget',
  mixins: [_mixins.BasicWidgetMixin],

  onChange: function onChange(event) {
    this.recalculateSize();
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  },
  componentDidMount: function componentDidMount() {
    this.recalculateSize();
    window.addEventListener('resize', this.recalculateSize);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.recalculateSize);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    this.recalculateSize();
  },
  isInAutoResizeMode: function isInAutoResizeMode() {
    return this.props.rows === undefined;
  },
  recalculateSize: function recalculateSize() {
    if (!this.isInAutoResizeMode()) {
      return;
    }
    var diff = void 0;
    var node = this.refs.ta;

    if (window.getComputedStyle) {
      var s = window.getComputedStyle(node);
      if (s.getPropertyValue('box-sizing') === 'border-box' || s.getPropertyValue('-moz-box-sizing') === 'border-box' || s.getPropertyValue('-webkit-box-sizing') === 'border-box') {
        diff = 0;
      } else {
        diff = parseInt(s.getPropertyValue('padding-bottom') || 0, 10) + parseInt(s.getPropertyValue('padding-top') || 0, 10);
      }
    } else {
      diff = 0;
    }

    var updateScrollPosition = (0, _jquery2.default)(node).is(':focus');
    // Cross-browser compatibility for scroll position
    var oldScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var oldHeight = (0, _jquery2.default)(node).outerHeight();

    node.style.height = 'auto';
    var newHeight = node.scrollHeight - diff;
    node.style.height = newHeight + 'px';

    if (updateScrollPosition) {
      window.scrollTo(document.body.scrollLeft, oldScrollTop + (newHeight - oldHeight));
    }
  },
  render: function render() {
    var _props2 = this.props,
        className = _props2.className,
        type = _props2.type,
        onChange = _props2.onChange,
        style = _props2.style,
        otherProps = _objectWithoutProperties(_props2, ['className', 'type', 'onChange', 'style']); // eslint-disable-line no-unused-vars


    className = className || '';

    style = style || {};
    if (this.isInAutoResizeMode()) {
      style.display = 'block';
      style.overflow = 'hidden';
      style.resize = 'none';
    }

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement('textarea', _extends({
        ref: 'ta',
        className: this.getInputClass(),
        onChange: onChange ? this.onChange : undefined,
        style: style
      }, otherProps))
    );
  }
});

var BooleanInputWidget = (0, _createReactClass2.default)({
  displayName: 'BooleanInputWidget',
  mixins: [_mixins.BasicWidgetMixin],

  onChange: function onChange(event) {
    this.props.onChange(event.target.checked ? 'yes' : 'no');
  },
  componentDidMount: function componentDidMount() {
    var checkbox = this.refs.checkbox;
    if (!this.props.value && this.props.placeholder) {
      checkbox.indeterminate = true;
      checkbox.checked = isTrue(this.props.placeholder);
    } else {
      checkbox.indeterminate = false;
    }
  },
  render: function render() {
    var _props3 = this.props,
        className = _props3.className,
        type = _props3.type,
        placeholder = _props3.placeholder,
        onChange = _props3.onChange,
        value = _props3.value,
        otherProps = _objectWithoutProperties(_props3, ['className', 'type', 'placeholder', 'onChange', 'value']); // eslint-disable-line no-unused-vars


    className = (className || '') + ' checkbox';

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        'label',
        null,
        _react2.default.createElement('input', _extends({ type: 'checkbox'
        }, otherProps, {
          ref: 'checkbox',
          checked: isTrue(value),
          onChange: onChange ? this.onChange : undefined })),
        type.checkbox_label_i18n ? _i18n2.default.trans(type.checkbox_label_i18n) : null
      )
    );
  }
});

exports.default = {
  SingleLineTextInputWidget: SingleLineTextInputWidget,
  SlugInputWidget: SlugInputWidget,
  IntegerInputWidget: IntegerInputWidget,
  FloatInputWidget: FloatInputWidget,
  DateInputWidget: DateInputWidget,
  UrlInputWidget: UrlInputWidget,
  MultiLineTextInputWidget: MultiLineTextInputWidget,
  BooleanInputWidget: BooleanInputWidget
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _mixins = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckboxesInputWidget = (0, _createReactClass2.default)({
  displayName: 'CheckboxesInputWidget',
  mixins: [_mixins.BasicWidgetMixin],

  statics: {
    deserializeValue: function deserializeValue(value) {
      if (value === '') {
        return null;
      }
      var rv = value.split(',').map(function (x) {
        return x.match(/^\s*(.*?)\s*$/)[1];
      });
      if (rv.length === 1 && rv[0] === '') {
        rv = [];
      }
      return rv;
    },

    serializeValue: function serializeValue(value) {
      return (value || '').join(', ');
    }
  },

  onChange: function onChange(field, event) {
    var newValue = _utils2.default.flipSetValue(this.props.value, field, event.target.checked);
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  },

  isActive: function isActive(field) {
    var value = this.props.value;
    if (value == null) {
      value = this.props.placeholder;
      if (value == null) {
        return false;
      }
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item === field) {
          return true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return false;
  },

  render: function render() {
    var _this = this;

    var _props = this.props,
        className = _props.className,
        value = _props.value,
        placeholder = _props.placeholder,
        type = _props.type,
        otherProps = _objectWithoutProperties(_props, ['className', 'value', 'placeholder', 'type']); // eslint-disable-line no-unused-vars


    className = (className || '') + ' checkbox';

    var choices = this.props.type.choices.map(function (item) {
      return _react2.default.createElement(
        'div',
        { className: className, key: item[0] },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', _extends({ type: 'checkbox'
          }, otherProps, {
            checked: _this.isActive(item[0]),
            onChange: _this.onChange.bind(_this, item[0]) })),
          _i18n2.default.trans(item[1])
        )
      );
    });
    return _react2.default.createElement(
      'div',
      { className: 'checkboxes' },
      choices
    );
  }
});

var SelectInputWidget = (0, _createReactClass2.default)({
  displayName: 'SelectInputWidget',
  mixins: [_mixins.BasicWidgetMixin],

  onChange: function onChange(event) {
    this.props.onChange(event.target.value);
  },
  render: function render() {
    var _props2 = this.props,
        className = _props2.className,
        type = _props2.type,
        value = _props2.value,
        placeholder = _props2.placeholder,
        onChange = _props2.onChange,
        otherProps = _objectWithoutProperties(_props2, ['className', 'type', 'value', 'placeholder', 'onChange']); // eslint-disable-line no-unused-vars


    value = value || placeholder;

    var choices = this.props.type.choices.map(function (item) {
      return _react2.default.createElement(
        'option',
        { key: item[0], value: item[0] },
        _i18n2.default.trans(item[1])
      );
    });
    choices.unshift(_react2.default.createElement(
      'option',
      { key: '', value: '' },
      '----'
    ));

    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'select',
          _extends({
            className: this.getInputClass(),
            onChange: onChange ? this.onChange : null,
            value: value
          }, otherProps),
          choices
        )
      )
    );
  }
});

exports.default = {
  CheckboxesInputWidget: CheckboxesInputWidget,
  SelectInputWidget: SelectInputWidget
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _metaformat = __webpack_require__(159);

var _metaformat2 = _interopRequireDefault(_metaformat);

var _mixins = __webpack_require__(24);

var _userLabel = __webpack_require__(44);

var _userLabel2 = _interopRequireDefault(_userLabel);

var _widgets = __webpack_require__(43);

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* circular references require us to do this */
var getWidgetComponent = function getWidgetComponent(type) {
  return _widgets2.default.getWidgetComponent(type);
};

var getWidgets = function getWidgets() {
  return _widgets2.default;
};

var parseFlowFormat = function parseFlowFormat(value) {
  var blocks = [];
  var buf = [];
  var lines = value.split(/\r?\n/);
  var block = null;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;

      // leading whitespace is ignored.
      if (block === null && line.match(/^\s*$/)) {
        continue;
      }

      var blockStart = line.match(/^####\s*([^#]*?)\s*####\s*$/);
      if (!blockStart) {
        if (block === null) {
          // bad format :(
          return null;
        }
      } else {
        if (block !== null) {
          blocks.push([block, buf]);
          buf = [];
        }
        block = blockStart[1];
        continue;
      }

      buf.push(line.replace(/^#####(.*?)#####$/, '####$1####'));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (block !== null) {
    blocks.push([block, buf]);
  }

  return blocks;
};

var serializeFlowFormat = function serializeFlowFormat(blocks) {
  var rv = [];
  blocks.forEach(function (block) {
    var _block = _slicedToArray(block, 2),
        blockName = _block[0],
        lines = _block[1];

    rv.push('#### ' + blockName + ' ####\n');
    lines.forEach(function (line) {
      rv.push(line.replace(/^(####(.*)####)(\r?\n)?$/, '#$1#$3'));
    });
  });

  rv = rv.join('');

  /* we need to chop of the last newline if it exists because this would
     otherwise add a newline to the last block.  This is just a side effect
     of how we serialize the meta format internally */
  if (rv[rv.length - 1] === '\n') {
    rv = rv.substr(0, rv.length - 1);
  }

  return rv;
};

var deserializeFlowBlock = function deserializeFlowBlock(flowBlockModel, lines, localId) {
  var data = {};
  var rawData = {};

  _metaformat2.default.tokenize(lines).forEach(function (item) {
    var _item = _slicedToArray(item, 2),
        key = _item[0],
        lines = _item[1];

    var value = lines.join('');
    rawData[key] = value;
  });

  flowBlockModel.fields.forEach(function (field) {
    var value = rawData[field.name] || '';
    var Widget = getWidgetComponent(field.type);
    if (!value && field['default']) {
      value = field['default'];
    }
    if (Widget && Widget.deserializeValue) {
      value = Widget.deserializeValue(value, field.type);
    }
    data[field.name] = value;
  });

  return {
    localId: localId || null,
    flowBlockModel: flowBlockModel,
    data: data
  };
};

var serializeFlowBlock = function serializeFlowBlock(flockBlockModel, data) {
  var rv = [];
  flockBlockModel.fields.forEach(function (field) {
    var Widget = getWidgetComponent(field.type);
    if (Widget === null) {
      return;
    }

    var value = data[field.name];
    if (value === undefined || value === null) {
      return;
    }

    if (Widget.serializeValue) {
      value = Widget.serializeValue(value, field.type);
    }

    rv.push([field.name, value]);
  });
  return _metaformat2.default.serialize(rv);
};

// ever growing counter of block ids.  Good enough for what we do I think.
var lastBlockId = 0;

var FlowWidget = (0, _createReactClass2.default)({
  displayName: 'FlowWidget',
  mixins: [_mixins.BasicWidgetMixin],

  statics: {
    deserializeValue: function deserializeValue(value, type) {
      return parseFlowFormat(value).map(function (item) {
        var _item2 = _slicedToArray(item, 2),
            id = _item2[0],
            lines = _item2[1];

        var flowBlock = type.flowblocks[id];
        if (flowBlock !== undefined) {
          return deserializeFlowBlock(flowBlock, lines, ++lastBlockId);
        }
        return null;
      });
    },

    serializeValue: function serializeValue(value) {
      return serializeFlowFormat(value.map(function (item) {
        return [item.flowBlockModel.id, serializeFlowBlock(item.flowBlockModel, item.data)];
      }));
    }
  },

  // XXX: the modification of props is questionable

  moveBlock: function moveBlock(idx, offset, event) {
    event.preventDefault();

    var newIndex = idx + offset;
    if (newIndex < 0 || newIndex >= this.props.value.length) {
      return;
    }

    var tmp = this.props.value[newIndex];
    this.props.value[newIndex] = this.props.value[idx];
    this.props.value[idx] = tmp;

    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  },

  removeBlock: function removeBlock(idx, event) {
    event.preventDefault();

    if (confirm(_i18n2.default.trans('REMOVE_FLOWBLOCK_PROMPT'))) {
      this.props.value.splice(idx, 1);
      if (this.props.onChange) {
        this.props.onChange(this.props.value);
      }
    }
  },

  addNewBlock: function addNewBlock(key, event) {
    event.preventDefault();

    var flowBlockModel = this.props.type.flowblocks[key];

    // this is a rather ugly way to do this, but hey, it works.
    this.props.value.push(deserializeFlowBlock(flowBlockModel, [], ++lastBlockId));
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  },

  collapseBlock: function collapseBlock(idx) {
    this.props.value[idx].collapsed = true;
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  },

  expandBlock: function expandBlock(idx) {
    this.props.value[idx].collapsed = false;
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  },

  renderFormField: function renderFormField(blockInfo, field, idx) {
    var _this = this;

    var widgets = getWidgets();
    var value = blockInfo.data[field.name];
    var placeholder = field['default'];
    var Widget = widgets.getWidgetComponentWithFallback(field.type);
    if (Widget.deserializeValue && placeholder != null) {
      placeholder = Widget.deserializeValue(placeholder, field.type);
    }

    var onChange = !this.props.onChange ? null : function (value) {
      blockInfo.data[field.name] = value;
      _this.props.onChange(_this.props.value);
    };

    return _react2.default.createElement(widgets.FieldBox, {
      key: idx,
      value: value,
      placeholder: placeholder,
      field: field,
      onChange: onChange
    });
  },

  renderBlocks: function renderBlocks() {
    var _this2 = this;

    var widgets = getWidgets();

    return this.props.value.map(function (blockInfo, idx) {
      // bad block is no block
      if (blockInfo === null) {
        return null;
      }

      var fields = widgets.renderFieldRows(blockInfo.flowBlockModel.fields, null, _this2.renderFormField.bind(_this2, blockInfo));

      return _react2.default.createElement(
        'div',
        { key: blockInfo.localId, className: 'flow-block' },
        _react2.default.createElement(
          'div',
          { className: 'btn-group action-bar' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-xs',
              title: _this2.props.value[idx].collapsed ? _i18n2.default.trans('Expand') : _i18n2.default.trans('Collapse'),
              onClick: _this2.props.value[idx].collapsed ? _this2.expandBlock.bind(_this2, idx) : _this2.collapseBlock.bind(_this2, idx) },
            _react2.default.createElement('i', { className: _this2.props.value[idx].collapsed ? 'fa fa-expand' : 'fa fa-compress' })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-xs',
              title: _i18n2.default.trans('UP'),
              disabled: idx === 0,
              onClick: _this2.moveBlock.bind(_this2, idx, -1) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-up' })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-xs',
              title: _i18n2.default.trans('DOWN'),
              disabled: idx >= _this2.props.value.length - 1,
              onClick: _this2.moveBlock.bind(_this2, idx, 1) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-down' })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-xs',
              title: _i18n2.default.trans('REMOVE'),
              onClick: _this2.removeBlock.bind(_this2, idx) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-times' })
          )
        ),
        _react2.default.createElement(
          'h4',
          { className: 'block-name' },
          _userLabel2.default.format(blockInfo.flowBlockModel.name_i18n)
        ),
        _this2.props.value[idx].collapsed ? null : fields
      );
    });
  },
  renderAddBlockSection: function renderAddBlockSection() {
    var _this3 = this;

    var choices = [];

    this.props.type.flowblock_order.forEach(function (key) {
      var flowBlockModel = _this3.props.type.flowblocks[key];
      var label = flowBlockModel.button_label ? _userLabel2.default.format(flowBlockModel.button_label) : _userLabel2.default.format(flowBlockModel.name_i18n);
      choices.push([flowBlockModel.id, label, _i18n2.default.trans(flowBlockModel.name_i18n)]);
    });

    var buttons = choices.map(function (item) {
      var _item3 = _slicedToArray(item, 3),
          key = _item3[0],
          label = _item3[1],
          title = _item3[2];

      return _react2.default.createElement(
        'button',
        {
          className: 'btn btn-default',
          onClick: _this3.addNewBlock.bind(_this3, key),
          title: title,
          key: key },
        label
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'add-block' },
      _react2.default.createElement(
        'label',
        null,
        _i18n2.default.trans('ADD_FLOWBLOCK') + ': '
      ),
      _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        buttons
      )
    );
  },
  render: function render() {
    var className = this.props.className;

    className = (className || '') + ' flow';

    return _react2.default.createElement(
      'div',
      { className: className },
      this.renderBlocks(),
      this.renderAddBlockSection()
    );
  }
});

exports.default = {
  FlowWidget: FlowWidget
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var lineIsDashes = function lineIsDashes(line) {
  line = line.match(/^\s*(.*?)\s*$/)[1];
  return line.length >= 3 && line === new Array(line.length + 1).join('-');
};

var processBuf = function processBuf(buf) {
  var lines = buf.map(function (line) {
    if (lineIsDashes(line)) {
      line = line.substr(1);
    }
    return line;
  });

  if (lines.length > 0) {
    var lastLine = lines[lines.length - 1];
    if (lastLine.substr(lastLine.length - 1) === '\n') {
      lines[lines.length - 1] = lastLine.substr(0, lastLine.length - 1);
    }
  }

  return lines;
};

var tokenize = function tokenize(lines) {
  var key = null;
  var buf = [];
  var wantNewline = false;
  var rv = [];

  var flushItem = function flushItem() {
    rv.push([key, processBuf(buf)]);
    key = null;
    buf = [];
  };

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].match(/^(.*?)(\r?\n)*$/m)[1] + '\n';

    if (line.match(/^(.*?)\s*$/m)[1] === '---') {
      wantNewline = false;
      if (key !== null) {
        flushItem();
      }
    } else if (key !== null) {
      if (wantNewline) {
        wantNewline = false;
        if (line.match(/^\s*$/)) {
          continue;
        }
      }
      buf.push(line);
    } else {
      var bits = line.split(':');
      if (bits.length >= 2) {
        key = bits.shift().match(/^\s*(.*?)\s*$/m)[1];
        var firstBit = bits.join(':').match(/^[\t ]*(.*?)[\t ]*$/m)[1];
        if (!firstBit.match(/^\s*$/)) {
          buf = [firstBit];
        } else {
          buf = [];
          wantNewline = true;
        }
      }
    }
  }

  if (key !== null) {
    flushItem();
  }

  return rv;
};

var serialize = function serialize(blocks) {
  var rv = [];

  blocks.forEach(function (item, idx) {
    var _item = _slicedToArray(item, 2),
        key = _item[0],
        value = _item[1];

    if (idx > 0) {
      rv.push('---\n');
    }
    if (value.match(/([\r\n]|(^[\t ])|([\t ]$))/m)) {
      rv.push(key + ':\n');
      rv.push('\n');
      var lines = value.split(/\n/);
      if (lines[lines.length - 1] === '') {
        lines.pop();
      }
      lines.forEach(function (line, idx, arr) {
        if (lineIsDashes(line)) {
          line = '-' + line;
        }
        rv.push(line + '\n');
      });
    } else {
      rv.push(key + ': ' + value + '\n');
    }
  });

  return rv;
};

exports.default = {
  tokenize: tokenize,
  serialize: serialize
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _mixins = __webpack_require__(24);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FakeWidgetMixin = {
  mixins: [_mixins.BasicWidgetMixin],
  propTypes: {
    field: _propTypes2.default.any
  },

  statics: {
    isFakeWidget: true
  }
};

var LineWidget = (0, _createReactClass2.default)({
  displayName: 'LineWidget',
  mixins: [FakeWidgetMixin],

  render: function render() {
    return _react2.default.createElement('hr', null);
  }
});

var SpacingWidget = (0, _createReactClass2.default)({
  displayName: 'SpacingWidget',
  mixins: [FakeWidgetMixin],

  render: function render() {
    return _react2.default.createElement('div', { className: 'spacing' });
  }
});

var InfoWidget = (0, _createReactClass2.default)({
  displayName: 'InfoWidget',
  mixins: [FakeWidgetMixin],

  render: function render() {
    var label = _i18n2.default.trans(this.props.field.label_i18n);
    return _react2.default.createElement(
      'div',
      { className: 'info' },
      _react2.default.createElement(
        'p',
        null,
        label ? _react2.default.createElement(
          'strong',
          null,
          label + ': '
        ) : null,
        _i18n2.default.trans(this.props.field.description_i18n)
      )
    );
  }
});

var HeadingWidget = (0, _createReactClass2.default)({
  displayName: 'HeadingWidget',
  mixins: [FakeWidgetMixin],

  render: function render() {
    return _react2.default.createElement(
      'h3',
      null,
      _i18n2.default.trans(this.props.type.heading_i18n)
    );
  }
});

exports.default = {
  LineWidget: LineWidget,
  SpacingWidget: SpacingWidget,
  InfoWidget: InfoWidget,
  HeadingWidget: HeadingWidget
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Component2 = __webpack_require__(7);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleGroup = function (_Component) {
  _inherits(ToggleGroup, _Component);

  function ToggleGroup(props) {
    _classCallCheck(this, ToggleGroup);

    var _this = _possibleConstructorReturn(this, (ToggleGroup.__proto__ || Object.getPrototypeOf(ToggleGroup)).call(this, props));

    _this.state = {
      isVisible: props.defaultVisibility
    };
    return _this;
  }

  _createClass(ToggleGroup, [{
    key: 'toggle',
    value: function toggle(event) {
      event.preventDefault();
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          groupTitle = _props.groupTitle,
          children = _props.children,
          defaultVisibility = _props.defaultVisibility,
          otherProps = _objectWithoutProperties(_props, ['className', 'groupTitle', 'children', 'defaultVisibility']);

      className = (className || '') + ' toggle-group';
      if (this.state.isVisible) {
        className += ' toggle-group-open';
      } else {
        className += ' toggle-group-closed';
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: className }, otherProps),
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'h4',
            { className: 'toggle', onClick: this.toggle.bind(this) },
            groupTitle
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'children' },
          children
        )
      );
    }
  }]);

  return ToggleGroup;
}(_Component3.default);

ToggleGroup.propTypes = {
  groupTitle: _propTypes2.default.string,
  defaultVisibility: _propTypes2.default.bool
};

exports.default = ToggleGroup;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordEditComponent = __webpack_require__(62);

var _RecordEditComponent2 = _interopRequireDefault(_RecordEditComponent);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _hub = __webpack_require__(22);

var _hub2 = _interopRequireDefault(_hub);

var _events = __webpack_require__(23);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeletePage = function (_RecordComponent) {
  _inherits(DeletePage, _RecordComponent);

  function DeletePage(props) {
    _classCallCheck(this, DeletePage);

    var _this = _possibleConstructorReturn(this, (DeletePage.__proto__ || Object.getPrototypeOf(DeletePage)).call(this, props));

    _this.state = {
      recordInfo: null,
      deleteMasterRecord: true
    };
    return _this;
  }

  _createClass(DeletePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(DeletePage.prototype.__proto__ || Object.getPrototypeOf(DeletePage.prototype), 'componentDidMount', this).call(this);
      this.syncDialog();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _get(DeletePage.prototype.__proto__ || Object.getPrototypeOf(DeletePage.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      this.syncDialog();
    }
  }, {
    key: 'syncDialog',
    value: function syncDialog() {
      var _this2 = this;

      _utils2.default.loadData('/recordinfo', { path: this.getRecordPath() }, null, _richPromise2.default).then(function (resp) {
        _this2.setState({
          recordInfo: resp,
          deleteMasterRecord: _this2.isPrimary()
        });
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(event) {
      var _this3 = this;

      var path = this.getRecordPath();
      var parent = _utils2.default.getParentFsPath(path);
      var targetPath = void 0;
      if (parent === null) {
        targetPath = 'root';
      } else {
        targetPath = this.getUrlRecordPathWithAlt(parent);
      }

      _utils2.default.apiRequest('/deleterecord', { data: {
          path: path,
          alt: this.getRecordAlt(),
          delete_master: this.state.deleteMasterRecord ? '1' : '0'
        },
        // eslint-disable-next-line indent
        method: 'POST' }, _richPromise2.default).then(function (resp) {
        if (_this3.state.recordInfo.is_attachment) {
          _hub2.default.emit(new _events.AttachmentsChangedEvent({
            recordPath: _this3.getParentRecordPath(),
            attachmentsRemoved: [_this3.state.recordInfo.id]
          }));
        }
        _this3.transitionToAdminPage('.edit', { path: targetPath });
      });
    }
  }, {
    key: 'cancelDelete',
    value: function cancelDelete(event) {
      var urlPath = this.getUrlRecordPathWithAlt();
      this.transitionToAdminPage('.edit', { path: urlPath });
    }
  }, {
    key: 'onDeleteAllAltsChange',
    value: function onDeleteAllAltsChange(event) {
      this.setState({
        deleteMasterRecord: event.target.value === '1'
      });
    }
  }, {
    key: 'isPrimary',
    value: function isPrimary() {
      return this.getRecordAlt() === '_primary';
    }
  }, {
    key: 'render',
    value: function render() {
      var ri = this.state.recordInfo;

      if (!ri || !ri.can_be_deleted) {
        return null;
      }

      var elements = [];
      var children = [];
      var alts = [];
      var attachments = [];
      var altInfo = null;
      var altCount = 0;

      for (var i = 0; i < ri.alts.length; i++) {
        if (ri.alts[i].alt === this.getRecordAlt()) {
          altInfo = ri.alts[i];
        }
        if (ri.alts[i].exists) {
          altCount++;
        }
      }

      if (ri.is_attachment) {
        elements.push(_react2.default.createElement(
          'p',
          { key: 'attachment' },
          this.isPrimary() ? _i18n2.default.trans('DELETE_ATTACHMENT_PROMPT') : _i18n2.default.trans('DELETE_ATTACHMENT_ALT_PROMPT'),
          ' '
        ));
      } else {
        elements.push(_react2.default.createElement(
          'p',
          { key: 'child-info' },
          this.isPrimary() ? _i18n2.default.trans('DELETE_PAGE_PROMPT') : _i18n2.default.trans('DELETE_PAGE_ALT_PROMPT'),
          ' ',
          ri.children.length > 0 && this.isPrimary() ? _i18n2.default.trans('DELETE_PAGE_CHILDREN_WARNING') : null
        ));

        if (ri.children.length > 0) {
          children = ri.children.map(function (child) {
            return _react2.default.createElement(
              'li',
              { key: child.id },
              _i18n2.default.trans(child.label_i18n)
            );
          });
          if (ri.child_count > children.length) {
            children.push(_react2.default.createElement(
              'li',
              { key: '...' },
              '...'
            ));
          }
        }

        attachments = ri.attachments.map(function (atch) {
          return _react2.default.createElement(
            'li',
            { key: atch.id },
            atch.id,
            ' (',
            atch.type,
            ')'
          );
        });
      }

      if (altCount > 1 && this.getRecordAlt() === '_primary') {
        ri.alts.forEach(function (item) {
          if (!item.exists) {
            return;
          }
          var title = _i18n2.default.trans(item.name_i18n);
          if (item.is_primary) {
            title += ' (' + _i18n2.default.trans('PRIMARY_ALT') + ')';
          } else if (item.primary_overlay) {
            title += ' (' + _i18n2.default.trans('PRIMARY_OVERLAY') + ')';
          }
          alts.push(_react2.default.createElement(
            'li',
            { key: item.alt },
            title
          ));
        });
        elements.push(_react2.default.createElement(
          'p',
          { key: 'alt-warning' },
          _i18n2.default.trans('DELETE_PRIMARY_ALT_INFO')
        ));
        elements.push(_react2.default.createElement(
          'ul',
          { key: 'delete-all-alts' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', { type: 'radio', id: 'delete-all-alts', value: '1', name: 'delete-master-record', checked: this.state.deleteMasterRecord, onChange: this.onDeleteAllAltsChange.bind(this) }),
            ' ',
            _react2.default.createElement(
              'label',
              { htmlFor: 'delete-all-alts' },
              _i18n2.default.trans(ri.is_attachment ? 'DELETE_ALL_ATTACHMENT_ALTS' : 'DELETE_ALL_PAGE_ALTS')
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', { type: 'radio', id: 'delete-only-this-alt', value: '0', name: 'delete-master-record', checked: !this.state.deleteMasterRecord, onChange: this.onDeleteAllAltsChange.bind(this) }),
            ' ',
            _react2.default.createElement(
              'label',
              { htmlFor: 'delete-only-this-alt' },
              _i18n2.default.trans(ri.is_attachment ? 'DELETE_ONLY_PRIMARY_ATTACHMENT_ALT' : 'DELETE_ONLY_PRIMARY_PAGE_ALT')
            )
          )
        ));
      }

      var label = ri.label_i18n ? _i18n2.default.trans(ri.label_i18n) : ri.id;
      if (this.getRecordAlt() !== '_primary' && altInfo != null) {
        label += ' (' + _i18n2.default.trans(altInfo.name_i18n) + ')';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _i18n2.default.trans('DELETE_RECORD').replace('%s', label)
        ),
        elements,
        _react2.default.createElement(
          'div',
          { style: { display: this.state.deleteMasterRecord && alts.length > 0 ? 'block' : 'none' } },
          _react2.default.createElement(
            'h4',
            null,
            _i18n2.default.trans('ALTS_TO_BE_DELETED')
          ),
          _react2.default.createElement(
            'ul',
            null,
            alts
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: this.state.deleteMasterRecord && children.length > 0 ? 'block' : 'none' } },
          _react2.default.createElement(
            'h4',
            null,
            _i18n2.default.trans('CHILD_PAGES_TO_BE_DELETED')
          ),
          _react2.default.createElement(
            'ul',
            null,
            children
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: this.state.deleteMasterRecord && attachments.length > 0 ? 'block' : 'none' } },
          _react2.default.createElement(
            'h4',
            null,
            _i18n2.default.trans('ATTACHMENTS_TO_BE_DELETED')
          ),
          _react2.default.createElement(
            'ul',
            null,
            attachments
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary',
              onClick: this.deleteRecord.bind(this) },
            _i18n2.default.trans('YES_DELETE')
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default',
              onClick: this.cancelDelete.bind(this) },
            _i18n2.default.trans('NO_CANCEL')
          )
        )
      );
    }
  }]);

  return DeletePage;
}(_RecordEditComponent2.default);

exports.default = DeletePage;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewPage = function (_RecordComponent) {
  _inherits(PreviewPage, _RecordComponent);

  function PreviewPage(props) {
    _classCallCheck(this, PreviewPage);

    var _this = _possibleConstructorReturn(this, (PreviewPage.__proto__ || Object.getPrototypeOf(PreviewPage)).call(this, props));

    _this.state = {
      pageUrl: null,
      pageUrlFor: null
    };
    return _this;
  }

  _createClass(PreviewPage, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _get(PreviewPage.prototype.__proto__ || Object.getPrototypeOf(PreviewPage.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      this.setState({}, this.syncState.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(PreviewPage.prototype.__proto__ || Object.getPrototypeOf(PreviewPage.prototype), 'componentDidMount', this).call(this);
      this.syncState();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.getUrlRecordPathWithAlt() !== this.state.pageUrlFor;
    }
  }, {
    key: 'syncState',
    value: function syncState() {
      var _this2 = this;

      var alt = this.getRecordAlt();
      var path = this.getRecordPath();
      if (path === null) {
        this.setState(this.getInitialState());
        return;
      }

      var recordUrl = this.getUrlRecordPathWithAlt();
      _utils2.default.loadData('/previewinfo', { path: path, alt: alt }, null, _richPromise2.default).then(function (resp) {
        _this2.setState({
          pageUrl: resp.url,
          pageUrlFor: recordUrl
        });
      });
    }
  }, {
    key: 'getIntendedPath',
    value: function getIntendedPath() {
      if (this.state.pageUrlFor === this.getUrlRecordPathWithAlt()) {
        return this.state.pageUrl;
      }
      return null;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this3 = this;

      var frame = this.refs.iframe;
      var intendedPath = this.getIntendedPath();
      if (intendedPath !== null) {
        var framePath = this.getFramePath();

        if (!_utils2.default.urlPathsConsideredEqual(intendedPath, framePath)) {
          frame.src = _utils2.default.getCanonicalUrl(intendedPath);
        }

        frame.onload = function (event) {
          _this3.onFrameNavigated();
        };
      }
    }
  }, {
    key: 'getFramePath',
    value: function getFramePath() {
      var frameLocation = this.refs.iframe.contentWindow.location;
      if (frameLocation.href === 'about:blank') {
        return frameLocation.href;
      }
      return _utils2.default.fsPathFromAdminObservedPath(frameLocation.pathname);
    }
  }, {
    key: 'onFrameNavigated',
    value: function onFrameNavigated() {
      var _this4 = this;

      var fsPath = this.getFramePath();
      if (fsPath === null) {
        return;
      }
      _utils2.default.loadData('/matchurl', { url_path: fsPath }, null, _richPromise2.default).then(function (resp) {
        if (resp.exists) {
          var urlPath = _this4.getUrlRecordPathWithAlt(resp.path, resp.alt);
          _this4.transitionToAdminPage('.preview', { path: urlPath });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'preview' },
        _react2.default.createElement('iframe', { ref: 'iframe' })
      );
    }
  }]);

  return PreviewPage;
}(_RecordComponent3.default);

exports.default = PreviewPage;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _userLabel = __webpack_require__(44);

var _userLabel2 = _interopRequireDefault(_userLabel);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _widgets = __webpack_require__(43);

var _widgets2 = _interopRequireDefault(_widgets);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getGoodDefaultModel = function getGoodDefaultModel(models) {
  if (models.page !== undefined) {
    return 'page';
  }
  var choices = Object.keys(models);
  choices.sort();
  return choices[0];
};

var AddChildPage = function (_RecordComponent) {
  _inherits(AddChildPage, _RecordComponent);

  function AddChildPage(props) {
    _classCallCheck(this, AddChildPage);

    var _this = _possibleConstructorReturn(this, (AddChildPage.__proto__ || Object.getPrototypeOf(AddChildPage)).call(this, props));

    _this.state = {
      newChildInfo: null,
      id: undefined,
      selectedModel: null
    };
    return _this;
  }

  _createClass(AddChildPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(AddChildPage.prototype.__proto__ || Object.getPrototypeOf(AddChildPage.prototype), 'componentDidMount', this).call(this);
      this.syncDialog();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _get(AddChildPage.prototype.__proto__ || Object.getPrototypeOf(AddChildPage.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      this.syncDialog();
    }
  }, {
    key: 'syncDialog',
    value: function syncDialog() {
      var _this2 = this;

      _utils2.default.loadData('/newrecord', { path: this.getRecordPath() }, null, _richPromise2.default).then(function (resp) {
        var selectedModel = resp.implied_model;
        if (!selectedModel) {
          selectedModel = getGoodDefaultModel(resp.available_models);
        }

        _this2.setState({
          newChildInfo: resp,
          id: undefined,
          primary: undefined,
          selectedModel: selectedModel
        });
      });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(id, value) {
      var obj = {};
      obj[id] = value;
      this.setState(obj);
    }
  }, {
    key: 'getAvailableModels',
    value: function getAvailableModels() {
      var rv = [];
      for (var key in this.state.newChildInfo.available_models) {
        var model = this.state.newChildInfo.available_models[key];
        rv.push(model);
      }
      rv.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      return rv;
    }
  }, {
    key: 'onModelSelected',
    value: function onModelSelected(event) {
      this.setState({
        selectedModel: event.target.value
      });
    }
  }, {
    key: 'getImpliedId',
    value: function getImpliedId() {
      return _utils2.default.slugify(this.state.primary || '').toLowerCase();
    }
  }, {
    key: 'getPrimaryField',
    value: function getPrimaryField() {
      var model = this.state.selectedModel;
      return this.state.newChildInfo.available_models[model].primary_field;
    }
  }, {
    key: 'createRecord',
    value: function createRecord() {
      var _this3 = this;

      var errMsg = function errMsg(text) {
        alert(_i18n2.default.trans('ERROR_PREFIX') + text);
      };

      var id = this.state.id || this.getImpliedId();
      if (!id) {
        errMsg(_i18n2.default.trans('ERROR_NO_ID_PROVIDED'));
        return;
      }

      var data = {};
      var params = { id: id, path: this.getRecordPath(), data: data };
      if (!this.state.newChildInfo.implied_model) {
        data['_model'] = this.state.selectedModel;
      }
      var primaryField = this.getPrimaryField();
      if (primaryField) {
        data[primaryField.name] = this.state.primary;
      }

      _utils2.default.apiRequest('/newrecord', { json: params, method: 'POST' }, _richPromise2.default).then(function (resp) {
        if (resp.exists) {
          errMsg(_i18n2.default.trans('ERROR_PAGE_ID_DUPLICATE').replace('%s', id));
        } else if (!resp.valid_id) {
          errMsg(_i18n2.default.trans('ERROR_INVALID_ID').replace('%s', id));
        } else {
          var urlPath = _this3.getUrlRecordPathWithAlt(resp.path);
          _this3.transitionToAdminPage('.edit', { path: urlPath });
        }
      });
    }
  }, {
    key: 'renderFields',
    value: function renderFields() {
      var _this4 = this;

      var fields = [];

      if (!this.state.newChildInfo.implied_model) {
        var choices = this.getAvailableModels().map(function (model) {
          return _react2.default.createElement(
            'option',
            { value: model.id, key: model.id },
            _i18n2.default.trans(model.name_i18n)
          );
        });
        fields.push(_react2.default.createElement(
          'div',
          { className: 'row', key: '_model' },
          _react2.default.createElement(
            'div',
            { className: 'field-box col-md-12' },
            _react2.default.createElement(
              'dl',
              { className: 'field' },
              _react2.default.createElement(
                'dt',
                null,
                _i18n2.default.trans('MODEL')
              ),
              _react2.default.createElement(
                'dd',
                null,
                _react2.default.createElement(
                  'select',
                  { value: this.state.selectedModel,
                    className: 'form-control',
                    onChange: this.onModelSelected.bind(this) },
                  choices
                )
              )
            )
          )
        ));
      }

      var addField = function addField(id, field, placeholder) {
        var value = _this4.state[id];
        var Widget = _widgets2.default.getWidgetComponentWithFallback(field.type);
        if (Widget.deserializeValue) {
          value = Widget.deserializeValue(value, field.type);
        }
        fields.push(_react2.default.createElement(
          'div',
          { className: 'row field-row', key: field.name },
          _react2.default.createElement(
            'div',
            { className: 'field-box col-md-12' },
            _react2.default.createElement(
              'dl',
              { className: 'field' },
              _react2.default.createElement(
                'dt',
                null,
                _userLabel2.default.format(field.label_i18n || field.label)
              ),
              _react2.default.createElement(
                'dd',
                null,
                _react2.default.createElement(Widget, {
                  value: value,
                  placeholder: placeholder,
                  onChange: _this4.onValueChange.bind(_this4, id),
                  type: field.type
                })
              )
            )
          )
        ));
      };

      var primaryField = this.getPrimaryField();
      if (primaryField) {
        addField('primary', primaryField);
      }

      addField('id', {
        name: '_id',
        label: _i18n2.default.trans('ID'),
        type: { name: 'slug', widget: 'slug' }
      }, this.getImpliedId());

      return fields;
    }
  }, {
    key: 'render',
    value: function render() {
      var nci = this.state.newChildInfo;

      if (!nci) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'edit-area' },
        _react2.default.createElement(
          'h2',
          null,
          _i18n2.default.trans('ADD_CHILD_PAGE_TO').replace('%s', this.state.newChildInfo.label)
        ),
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('ADD_CHILD_PAGE_NOTE')
        ),
        this.renderFields(),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.createRecord.bind(this) },
            _i18n2.default.trans('CREATE_CHILD_PAGE')
          )
        )
      );
    }
  }]);

  return AddChildPage;
}(_RecordComponent3.default);

exports.default = AddChildPage;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RecordComponent2 = __webpack_require__(16);

var _RecordComponent3 = _interopRequireDefault(_RecordComponent2);

var _hub = __webpack_require__(22);

var _hub2 = _interopRequireDefault(_hub);

var _events = __webpack_require__(23);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _richPromise = __webpack_require__(8);

var _richPromise2 = _interopRequireDefault(_richPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddAttachmentPage = function (_RecordComponent) {
  _inherits(AddAttachmentPage, _RecordComponent);

  function AddAttachmentPage(props) {
    _classCallCheck(this, AddAttachmentPage);

    var _this = _possibleConstructorReturn(this, (AddAttachmentPage.__proto__ || Object.getPrototypeOf(AddAttachmentPage)).call(this, props));

    _this.state = {
      newAttachmentInfo: null,
      currentFiles: [],
      isUploading: false,
      currentProgress: 0
    };
    return _this;
  }

  _createClass(AddAttachmentPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncDialog();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.syncDialog();
    }
  }, {
    key: 'syncDialog',
    value: function syncDialog() {
      var _this2 = this;

      _utils2.default.loadData('/newattachment', { path: this.getRecordPath() }, null, _richPromise2.default).then(function (resp) {
        _this2.setState({
          newAttachmentInfo: resp
        });
      });
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(event) {
      this.refs.file.click();
    }
  }, {
    key: 'onUploadProgress',
    value: function onUploadProgress(event) {
      var newProgress = Math.round(event.loaded * 100 / event.total);
      if (newProgress !== this.state.currentProgress) {
        this.setState({
          currentProgress: newProgress
        });
      }
    }
  }, {
    key: 'onUploadComplete',
    value: function onUploadComplete(resp, event) {
      var _this3 = this;

      this.setState({
        isUploading: false,
        newProgress: 100
      }, function () {
        _hub2.default.emit(new _events.AttachmentsChangedEvent({
          recordPath: _this3.getRecordPath(),
          attachmentsAdded: resp.buckets.map(function (bucket) {
            return bucket.stored_filename;
          })
        }));
      });
    }
  }, {
    key: 'onFileSelected',
    value: function onFileSelected(event) {
      var _this4 = this;

      if (this.state.isUploading) {
        return;
      }

      var files = this.refs.file.files;
      this.setState({
        currentFiles: Array.prototype.slice.call(files, 0),
        isUploading: true
      });

      var formData = new FormData();
      formData.append('path', this.getRecordPath());

      for (var i = 0; i < files.length; i++) {
        formData.append('file', files[i], files[i].name);
      }

      var xhr = new XMLHttpRequest();
      xhr.open('POST', _utils2.default.getApiUrl('/newattachment'));
      xhr.onload = function (event) {
        _this4.onUploadComplete(JSON.parse(xhr.responseText), event);
      };
      xhr.upload.onprogress = function (event) {
        _this4.onUploadProgress(event);
      };
      xhr.send(formData);
    }
  }, {
    key: 'renderCurrentFiles',
    value: function renderCurrentFiles() {
      var files = this.state.currentFiles.map(function (file) {
        return _react2.default.createElement(
          'li',
          { key: file.name },
          file.name,
          ' (',
          file.type,
          ')'
        );
      });
      return _react2.default.createElement(
        'ul',
        null,
        files
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var nai = this.state.newAttachmentInfo;

      if (!nai) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _i18n2.default.trans('ADD_ATTACHMENT_TO').replace('%s', nai.label)
        ),
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('ADD_ATTACHMENT_NOTE')
        ),
        this.renderCurrentFiles(),
        _react2.default.createElement(
          'p',
          null,
          _i18n2.default.trans('PROGRESS'),
          ': ',
          this.state.currentProgress,
          '%'
        ),
        _react2.default.createElement('input', { type: 'file', ref: 'file', multiple: true,
          style: { display: 'none' }, onChange: this.onFileSelected.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.uploadFile.bind(this) },
            _i18n2.default.trans('UPLOAD')
          )
        )
      );
    }
  }]);

  return AddAttachmentPage;
}(_RecordComponent3.default);

exports.default = AddAttachmentPage;

/***/ })
],[63]);
//# sourceMappingURL=app.js.map