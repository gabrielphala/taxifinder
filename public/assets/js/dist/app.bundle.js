/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Ludr/index.js":
/*!************************!*\
  !*** ../Ludr/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _src_Components_Component__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Components": () => (/* reexport safe */ _src_Components__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Config": () => (/* reexport safe */ _src_Config__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Events": () => (/* reexport safe */ _src_Events__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Group": () => (/* reexport safe */ _src_Groups_Group__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Layout": () => (/* reexport safe */ _src_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Load": () => (/* reexport safe */ _src_App__WEBPACK_IMPORTED_MODULE_11__.Load),
/* harmony export */   "Middleware": () => (/* reexport safe */ _src_Middleware__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Next": () => (/* reexport safe */ _src_App__WEBPACK_IMPORTED_MODULE_11__.Next),
/* harmony export */   "Reload": () => (/* reexport safe */ _src_App__WEBPACK_IMPORTED_MODULE_11__.Reload),
/* harmony export */   "Route": () => (/* reexport safe */ _src_Router_Route__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Router": () => (/* reexport safe */ _src_Router__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Singleton": () => (/* reexport safe */ _src_Singleton__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Store": () => (/* reexport safe */ _src_Store__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Layouts/Layout */ "../Ludr/src/Layouts/Layout.js");
/* harmony import */ var _src_Components_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Components/Component */ "../Ludr/src/Components/Component.js");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Components */ "../Ludr/src/Components/index.js");
/* harmony import */ var _src_Groups_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Groups/Group */ "../Ludr/src/Groups/Group.js");
/* harmony import */ var _src_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Router */ "../Ludr/src/Router/index.js");
/* harmony import */ var _src_Router_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Router/Route */ "../Ludr/src/Router/Route.js");
/* harmony import */ var _src_Singleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Singleton */ "../Ludr/src/Singleton.js");
/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Store */ "../Ludr/src/Store.js");
/* harmony import */ var _src_Events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Events */ "../Ludr/src/Events.js");
/* harmony import */ var _src_Middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Middleware */ "../Ludr/src/Middleware.js");
/* harmony import */ var _src_Config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Config */ "../Ludr/src/Config.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/App */ "../Ludr/src/App.js");













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Layout: _src_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  Component: _src_Components_Component__WEBPACK_IMPORTED_MODULE_1__["default"],
  Components: _src_Components__WEBPACK_IMPORTED_MODULE_2__["default"],
  Group: _src_Groups_Group__WEBPACK_IMPORTED_MODULE_3__["default"],
  Router: _src_Router__WEBPACK_IMPORTED_MODULE_4__["default"],
  Route: _src_Router_Route__WEBPACK_IMPORTED_MODULE_5__["default"],
  Singleton: _src_Singleton__WEBPACK_IMPORTED_MODULE_6__["default"],
  Store: _src_Store__WEBPACK_IMPORTED_MODULE_7__["default"],
  Events: _src_Events__WEBPACK_IMPORTED_MODULE_8__["default"],
  Middleware: _src_Middleware__WEBPACK_IMPORTED_MODULE_9__["default"],
  Config: _src_Config__WEBPACK_IMPORTED_MODULE_10__["default"],
  Load: _src_App__WEBPACK_IMPORTED_MODULE_11__.Load,
  Next: _src_App__WEBPACK_IMPORTED_MODULE_11__.Next,
  Reload: _src_App__WEBPACK_IMPORTED_MODULE_11__.Reload
});

/***/ }),

/***/ "../Ludr/src/App.js":
/*!**************************!*\
  !*** ../Ludr/src/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Load": () => (/* binding */ Load),
/* harmony export */   "Next": () => (/* binding */ Next),
/* harmony export */   "Reload": () => (/* binding */ Reload)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "../Ludr/src/Router/index.js");
/* harmony import */ var _Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layouts */ "../Ludr/src/Layouts/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "../Ludr/src/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _Middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Middleware */ "../Ludr/src/Middleware.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components */ "../Ludr/src/Components/index.js");







/**
 * Load route
 * @date 2022-08-08
 */
const Load = () => {
  if (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].showInfo) {
    console.log(`base views: ${_Config__WEBPACK_IMPORTED_MODULE_2__["default"].baseViews}` + `\ncomponent views: ${_Config__WEBPACK_IMPORTED_MODULE_2__["default"].componentViews}` + `\nlayout views: ${_Config__WEBPACK_IMPORTED_MODULE_2__["default"].layoutViews}`);
  }
  _Utils__WEBPACK_IMPORTED_MODULE_3__["default"].setUpHandleBarsHelpers();
  _Utils__WEBPACK_IMPORTED_MODULE_3__["default"].detectNavigation();
  const route = _Router__WEBPACK_IMPORTED_MODULE_0__["default"].getRoute();
  _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute = route;
  _Layouts__WEBPACK_IMPORTED_MODULE_1__["default"].build(route.layout);
  _Middleware__WEBPACK_IMPORTED_MODULE_4__["default"].run();
};

/**
 * Switch route 
 * @date 2022-08-08
 * @param {path} path
 */
const Next = path => {
  const currentRoute = _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute;
  const nextRoute = _Router__WEBPACK_IMPORTED_MODULE_0__["default"].getRoute(path);
  _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute = nextRoute;
  _Layouts__WEBPACK_IMPORTED_MODULE_1__["default"]["switch"](currentRoute, nextRoute);
  _Middleware__WEBPACK_IMPORTED_MODULE_4__["default"].run();
  nextRoute.updateHistory(path);
  _Components__WEBPACK_IMPORTED_MODULE_5__["default"].initNavEvents();
  _Components__WEBPACK_IMPORTED_MODULE_5__["default"].initHighlightNavItems();
};
const Reload = () => {
  _Layouts__WEBPACK_IMPORTED_MODULE_1__["default"].reload();
  _Middleware__WEBPACK_IMPORTED_MODULE_4__["default"].run();
};

/***/ }),

/***/ "../Ludr/src/Components/Component.js":
/*!*******************************************!*\
  !*** ../Ludr/src/Components/Component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../Ludr/src/Components/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "../Ludr/src/Config.js");
/* harmony import */ var _Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Url */ "../Ludr/src/Url.js");
/* harmony import */ var _Env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Env */ "../Ludr/src/Env.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");





class Component {
  /**
   * Create component
   * @date 2022-08-08
   * @param {string} name
   * @param {object} attr
   */
  constructor(name, {
    path,
    nav,
    scope,
    data = {}
  } = null) {
    this.name = name;
    this.nav = nav;
    this.scope = scope;
    this.linkActiveClass = '';
    this._content = '';
    this.events = {};
    this.data = _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].merge({
      mainObj: _Env__WEBPACK_IMPORTED_MODULE_3__["default"].globalContainer,
      refObj: data
    });
    path = _Utils__WEBPACK_IMPORTED_MODULE_4__["default"].hasExt(path) ? path : `${path}.${_Config__WEBPACK_IMPORTED_MODULE_1__["default"].viewsExt}`;
    this.path = _Url__WEBPACK_IMPORTED_MODULE_2__["default"].cleanURL(`${_Config__WEBPACK_IMPORTED_MODULE_1__["default"].componentViews}/${path}`);
  }
  get content() {
    return this._content;
  }
  set content(content) {
    this._content = content;
  }
  onBeforeLoad(callback) {
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].beforeLoad(this.name);
    this.events.beforeLoad = callback;
    return this;
  }
  onLoaded(callback) {
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].loaded(this.name);
    this.events.loaded = callback;
    return this;
  }
}
;

/**
 * Create component
 * @date 2022-08-08
 * @param {string} name
 * @param {object} attr
 * @return {Component}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, attr) => _index__WEBPACK_IMPORTED_MODULE_0__["default"].add(name, new Component(name, attr)));

/***/ }),

/***/ "../Ludr/src/Components/index.js":
/*!***************************************!*\
  !*** ../Ludr/src/Components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router */ "../Ludr/src/Router/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _Groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Groups */ "../Ludr/src/Groups/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "../Ludr/src/App.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Components {
  constructor() {
    if (Components.instance) return Components.instance;
    this.components = {};
    this.navComponents = {};
    this.oldNavItems = {};
    this.events = {
      beforeLoad: [],
      loaded: []
    };
    Components.instance = this;
  }

  /**
   * desc
   * @date 2022-08-08
   * @param {string} name
   * @param {object} component
   */
  add(name, component) {
    if (component.nav) this.navComponents[name] = component;
    return this.components[name] = component;
  }
  /**
   * Checks whether a component exists
   * @date 2022-08-08
   * @param {string} name
   * @return {boolean}
   */
  exists(name) {
    return this.components[name] ? true : false;
  }

  /**
   * Returns a component that is associated with the given name
   * @date 2022-08-08
   * @param {string} name
   * @return {object}
   */
  use(name) {
    if (this.components[name]) return this.components[name];else if (_Groups__WEBPACK_IMPORTED_MODULE_2__["default"].exists(name)) return this.use(_Groups__WEBPACK_IMPORTED_MODULE_2__["default"].getComponent(name));
    if (!this.components[name]) throw `Component not found: could not find component with name (${name})`;
  }

  /**
   * Checks whether a given route is within the specified scope
   * @date 2022-08-08
   * @param {string | array} scope
   * @param {string} routeName
   * @return {boolean}
   */
  isInScope(scope, routeName) {
    if (scope && scope.includes(routeName) || scope == 'all') return true;
    return false;
  }
  /**
   * Loops through the navigation components
   * @date 2022-08-08
   * @param {function} callback
   */
  iterateOverComponents(callback) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].iterate(this.navComponents, component => {
      if (!this.isInScope(this.navComponents[component].scope, _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.name)) return;
      callback(this.navComponents[component]);
    });
  }
  /**
   * Loops through navigation elements of a given component
   * @date 2022-08-08
   * @param {object} component
   * @param {function} callback
   */
  iterateOverNavItems(component, callback) {
    let {
      parent,
      targets: targetClasses
    } = component.nav;
    const parents = document.getElementsByClassName(parent);
    Array.from(parents).forEach(parent => {
      targetClasses = Array.isArray(targetClasses) ? targetClasses : [targetClasses];
      targetClasses.forEach(targetClass => {
        const targetElements = parent.getElementsByClassName(targetClass);
        Array.from(targetElements).forEach(targetElement => {
          if (component.linkActiveClass && !targetElement.dataset.linkactive) targetElement.dataset.linkactive = component.linkActiveClass;
          callback(targetElement);
        });
      });
    });
  }
  /**
   * Highlights a navigation element that matches the current location path
   * @date 2022-08-08
   * @param {object} navItem
   * @param {object} component
   */
  hightlightNavItems(navItem, component) {
    if (!navItem.dataset.linkaddress || !navItem.dataset.linkactive) return;

    // if current path matches nav item, activate the item, remember it and return;
    if (navItem.dataset.linkaddress == location.pathname) {
      this.oldNavItems[component.name] = navItem;
      return navItem.classList.add(navItem.dataset.linkactive);
    }
    if (navItem.dataset.linkmultiple && component.nav && component.nav.linkmultiple) {
      // Grouped routes, essentially same page with multiple tabs
      const tabs = component.nav.linkmultiple[navItem.dataset.linkmultiple];

      // if page (route) to render is a tab within @var tabs, make it active
      if (this.isInScope(tabs, _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.name)) {
        navItem.classList.add(navItem.dataset.linkactive);
        this.oldNavItems[component.name] = navItem;
      }
    }
  }
  unhighlightOld() {
    _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].iterate(this.oldNavItems, navItem => {
      this.oldNavItems[navItem].classList.remove(this.oldNavItems[navItem].dataset.linkactive);
    });
  }

  /**
   * Loops through all navigation components then their elements
   * and highlights the element that matches the current location pathname
   * @date 2022-08-08
   */
  initHighlightNavItems() {
    // de-activate previously activated navItems
    this.unhighlightOld();
    this.iterateOverComponents(component => {
      this.iterateOverNavItems(component, navItem => {
        this.hightlightNavItems(navItem, component);
      });
    });
  }

  /**
   * Loops through all navigation components then their elements
   * and adds on-click event-listners
   * @date 2022-08-08
   */
  onClick() {
    this.iterateOverComponents(component => {
      this.iterateOverNavItems(component, navItem => {
        if (!navItem.dataset.linkaddress || !navItem.dataset.linkactive || navItem.dataset.eventsadded) return;
        navItem.setAttribute('data-eventsadded', true);
        navItem.addEventListener('click', async e => {
          // replace components with new ones, corresponding to the new page
          (0,_App__WEBPACK_IMPORTED_MODULE_3__.Next)(e.currentTarget.dataset.linkaddress);

          // if some nav components have been modified, re-set events
          this.onClick();

          // if there are new components that need highlighting, highlight them
          this.initHighlightNavItems();
        });
      });
    });
  }

  /**
   * Initiates navigation events
   * @date 2022-08-08
   */
  initNavEvents() {
    this.onClick();
  }
  initEvents(type) {
    this.events[type].forEach(componentName => {
      const component = this.components[componentName];
      if (!this.isInScope(component.scope, _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.name)) return;
      component.events[type](this.components[componentName]);
    });
  }
  beforeLoad(name) {
    this.events.beforeLoad.push(name);
  }
  loaded(name) {
    this.events.loaded.push(name);
  }
}());

/***/ }),

/***/ "../Ludr/src/Config.js":
/*!*****************************!*\
  !*** ../Ludr/src/Config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Url */ "../Ludr/src/Url.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../Ludr/src/Utils.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Config {
  constructor() {
    if (Config.instance == null) {
      this.options = {
        logs: {
          warn: true,
          info: false
        },
        views: {
          base: '/assets/js/src/',
          components: 'components',
          layouts: 'layouts',
          ext: 'hbs'
        },
        page: {
          title: 'Made with Ludr'
        }
      };
      Config.instance = this;
    }
    return Config.instance;
  }
  /**
   * Sets config options
   * @date 2022-08-08
   * @param {object} options
   */
  set(options) {
    this.options = _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].merge({
      refObj: this.options,
      mainObj: options
    });
  }

  /**
   * Returns warning log status
   * @date 2022-08-08
   * @return {boolean}
   */
  get showWarning() {
    return this.options.logs.warn;
  }

  /**
   * Sets info log status
   * @date 2022-08-08
   * @param {string} status
   */
  set showInfo(status) {
    this.options.logs.info = status;
  }

  /**
   * Returns info log status
   * @date 2022-08-08
   * @return {boolean}
   */
  get showInfo() {
    return this.options.logs.info;
  }

  /**
   * Sets main title
   * @date 2022-08-08
   * @param {string} pageTitle
   */
  set pageTitle(pageTitle) {
    this.options.page.title = pageTitle;
  }

  /**
   * Returns main title
   * @date 2022-08-08
   * @returns {string}
   */
  get pageTitle() {
    return this.options.page.title;
  }

  /**
   * Returns views' base path
   * @date 2022-08-08
   * @return {string}
   */
  get baseViews() {
    return _Url__WEBPACK_IMPORTED_MODULE_0__["default"].cleanURL(this.options.views.base);
  }

  /**
   *  Returns components' views' path
   * @date 2022-08-08
   * @return {string}
   */
  get componentViews() {
    return _Url__WEBPACK_IMPORTED_MODULE_0__["default"].cleanURL(this.options.views.base + '/' + this.options.views.components);
  }

  /**
   * Returns layouts' views' path
   * @date 2022-08-08
   * @return {string}
   */
  get layoutViews() {
    return _Url__WEBPACK_IMPORTED_MODULE_0__["default"].cleanURL(this.options.views.base + '/' + this.options.views.layouts);
  }

  /**
   * Returns preferred extenstion
   * @date 2022-08-08
   * @return {string}
   */
  get viewsExt() {
    return this.options.views.ext;
  }
}());

/***/ }),

/***/ "../Ludr/src/Env.js":
/*!**************************!*\
  !*** ../Ludr/src/Env.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Env {
  constructor() {
    if (Env.instance) return Env.instance;
    if (!Handlebars) throw 'Ludr.js Requires handlebars.js to work';
    this.handlebars = Handlebars;
    this.container = {
      __meta: 'Name: Ludr. Author: Gabriel Phala.'
    };
    this.globalContainer = {
      __meta: 'Name: Ludr. Author: Gabriel Phala.'
    };
    Env.instance = this;
  }

  /**
   * Save key-value pairs
   * @date 2022-08-08
   * @param {string} key
   * @param {number | string | object} value
   * @param {boolean} isGlobal
   */
  put(key, value, isGlobal) {
    if (!isGlobal) return this.container[key] = value;
    this.globalContainer[key] = value;
  }

  /**
   * Returns a value associated with the given key
   * @date 2022-08-08
   * @param {key} key
   * @return {number | string | object}
   */
  get(key) {
    return this.container[key] || this.globalContainer[key];
  }

  /**
   * Removes a value associated with the given key
   * @date 2022-08-08
   * @param {string} key
   */
  remove(key) {
    delete this.container[key];
    delete this.globalContainer[key];
  }
}());

/***/ }),

/***/ "../Ludr/src/Events.js":
/*!*****************************!*\
  !*** ../Ludr/src/Events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "../Ludr/src/Router/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../Ludr/src/Utils.js");


class Events {
  /**
   * Stores event handlers 
   * @date 2022-08-08
   * @param {object | null} obj
   * @return {Events}
   */
  constructor(obj = null) {
    this.eventHandlers = !Events.instance ? {} : Events.instance.eventHandlers;
    if (obj) this.addEventHandlers(obj);
    Events.instance = !Events.instance ? this : Events.instance;
    return Events.instance;
  }

  /**
   * Stores event handlers 
   * @date 2022-08-08
   * @param {object} obj
   */
  addEventHandlers(obj) {
    Object.getOwnPropertyNames(obj.prototype).forEach(eventHandler => {
      if (eventHandler == 'constructor') return;
      this.eventHandlers[`${obj.name + '.' + eventHandler}`] = obj.prototype[eventHandler];
    });
  }
  getTargets() {
    this.targets = Array.from(document.querySelectorAll('[data-eventid]'));
  }
  sortTargets() {
    this.sortedTargets = {};
    Array.from(this.targets).forEach(element => {
      this.sortedTargets[element.dataset.eventid] = element;
    });
  }

  /**
   * Sets event listeners
   * @date 2022-08-08
   * @param {object} events
   */
  setEventListeners(events) {
    this.getTargets();
    this.sortTargets();
    const len = Object.getOwnPropertyNames(this.sortedTargets).length;
    for (let i = 0; i < len; i++) {
      if (this.sortedTargets[i].dataset && this.sortedTargets[i].dataset.eventsadded) continue;
      _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].iterate(events[i], event => {
        // Remove the 'on' prefix, and set event
        const eventType = events[i][event][0].substring(2);
        const params = JSON.parse(JSON.stringify(events[i][event][1]));
        if (!params[0]) params.shift();
        const originalParams = params.length;
        const eventHandler = e => {
          e.preventDefault();
          // remove old event object
          if (params.length > originalParams) params.pop();
          params.push(e);
          if (!this.eventHandlers[event]) throw `No corresponding event handler: there is no handler with the name: (${event})`;
          this.eventHandlers[event](...params);
        };

        // add new event
        this.sortedTargets[i].addEventListener(eventType, eventHandler);
      });
      this.sortedTargets[i].setAttribute('data-eventsadded', true);
    }
  }
}

/***/ }),

/***/ "../Ludr/src/Groups/Group.js":
/*!***********************************!*\
  !*** ../Ludr/src/Groups/Group.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../Ludr/src/Groups/index.js");


/**
 * Creates a component group
 * @date 2022-08-08
 * @param {string} name
 * @param {array} routes
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, routes) => _index__WEBPACK_IMPORTED_MODULE_0__["default"].add(name, routes));

/***/ }),

/***/ "../Ludr/src/Groups/index.js":
/*!***********************************!*\
  !*** ../Ludr/src/Groups/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router */ "../Ludr/src/Router/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Groups {
  constructor() {
    if (Groups.instance) return Groups.instance;
    this.groups = {};
    Groups.instance = this;
  }

  /**
   * Caches the group
   * @date 2022-08-08
   * @param {string} name
   * @param {array} routes
   */
  add(name, routes) {
    this.groups[name] = routes;
  }

  /**
   * Checks whether the group exists
   * @date 2022-08-08
   * @param {name} name
   * @return {boolean}
   */
  exists(name) {
    return this.groups[name] ? true : false;
  }

  /**
   * Gets the group that matches the given name and loops through each route
   * and finds a route whose url(s) match(es) the current url and returns its component name
   * @date 2022-08-08
   * @param {name} name
   * @return {string}
   */
  getComponent(name) {
    let componentName;
    this.groups[name].forEach(route => {
      if (route.urls && route.urls == _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.url || route.urls && route.urls.includes(_Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.url) || route.url && route.url == _Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.url) componentName = route.component;
    });
    if (!componentName) throw `Component not found: Group (${name}) has no component for endpoint (${location.pathname})`;
    return componentName;
  }
}());

/***/ }),

/***/ "../Ludr/src/Layouts/Layout.js":
/*!*************************************!*\
  !*** ../Ludr/src/Layouts/Layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "../Ludr/src/Config.js");
/* harmony import */ var _Url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Url */ "../Ludr/src/Url.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "../Ludr/src/Layouts/index.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components */ "../Ludr/src/Components/index.js");
/* harmony import */ var _Env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Env */ "../Ludr/src/Env.js");
/* harmony import */ var _Middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Middleware */ "../Ludr/src/Middleware.js");
/* harmony import */ var _Lexer_Blueprint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Lexer/Blueprint */ "../Ludr/src/Lexer/Blueprint.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Router */ "../Ludr/src/Router/index.js");









class Layout {
  constructor(name, path, data = {}) {
    this.name = name;
    this.content = '';
    this.componentCallStack = {};
    this.data = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].merge({
      mainObj: _Env__WEBPACK_IMPORTED_MODULE_5__["default"].globalContainer,
      refObj: data
    });
    path = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].hasExt(path) ? path : `${path}.${_Config__WEBPACK_IMPORTED_MODULE_0__["default"].viewsExt}`;
    this.path = _Url__WEBPACK_IMPORTED_MODULE_1__["default"].cleanURL(`${_Config__WEBPACK_IMPORTED_MODULE_0__["default"].layoutViews}/${path}`);
  }

  /**
   * Removes all labels from the content
   * @date 2022-08-08
   */
  removeLabels() {
    this.content = this.content.replace(/ludr_component_start(.*?);/g, '');
    this.content = this.content.replace(/ludr_link_active_class(.*?);/g, '');
    this.content = this.content.replace(/ludr_component_end/g, '');
  }

  /**
   * Caches component content and resolves nested components
   * @date 2022-08-08
   * @param {object} components
   * @param {string | object} parent
   */
  async parseComponents(components, parent = 'none') {
    for (let i = 0; i < components.length; i++) {
      const componentName = components[i].trim(),
        component = _Components__WEBPACK_IMPORTED_MODULE_4__["default"].use(componentName);

      // if component has no content, fetch it and compile it
      component.content = !component.content ? _Env__WEBPACK_IMPORTED_MODULE_5__["default"].handlebars.compile(await _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].fetch(component.path))(component.data) : component.content;
      const nestedComponents = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].extractComponentNames(component.content);
      this.componentCallStack[componentName] = this.componentCallStack[componentName] || ``;
      this.componentCallStack[componentName] += parent != 'none' ? ` ${parent.name + ' ' + this.componentCallStack[parent.name]}` : '';
      if (this.componentCallStack[componentName].split(' ').indexOf(componentName) > 0) throw `Recursive inclusion of component: (${componentName})`;

      // so we can append 'ludr_component_end' without getting unwanted results
      let content = component.content.trim();
      this.content = this.content.replace(new RegExp(`@ludr_component${components[i]}end`, 'gi'), `${parent != 'none' ? content : 'ludr_component_start ' + componentName + ';' + content + ' ludr_component_end'}`);
      if (nestedComponents) await this.parseComponents(nestedComponents, component);
      component.linkActiveClass = component.linkActiveClass || _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].extractLinkActiveClass(component.content).trim();
    }
  }

  /**
   * Populates layout with components' content
   * and assigns a blueprint to current route
   * @date 2022-08-08
   */
  build() {
    _Middleware__WEBPACK_IMPORTED_MODULE_6__["default"].once(async next => {
      const layoutContent = await _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].fetch(this.path);
      this.content = _Env__WEBPACK_IMPORTED_MODULE_5__["default"].handlebars.compile(layoutContent)(this.data);
      const components = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].extractComponentNames(this.content);
      await this.parseComponents(components);
      const router = _Router__WEBPACK_IMPORTED_MODULE_8__["default"].use(_Router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.name);
      const blueprint = new _Lexer_Blueprint__WEBPACK_IMPORTED_MODULE_7__["default"](this.name, this.content);
      const {
        blueprint: _blueprint,
        events,
        layout
      } = blueprint.makeBlueprint();
      this.content = layout;
      router.blueprint = _blueprint;
      router.events = events;
      this.removeLabels();
      next();
    });
  }

  /**
   * extracts key-value pairs from modifiers
   * @date 2022-08-08
   * @param {string} modifiers
   * @param {function} callback
   */
  getModifierKeyValuePair(modifiers, callback) {
    let isInQuotes = false,
      key = '',
      value = '';
    for (let i = 0; i < modifiers.length; i++) {
      if (modifiers[i] == '=' && `"'`.includes(modifiers[i + 1])) continue;
      if (isInQuotes) {
        if (`"'`.includes(modifiers[i])) {
          callback(key, value);
          isInQuotes = false;
          key = '';
          value = '';
          continue;
        }
        value += modifiers[i];
        continue;
      }
      if (`"'`.includes(modifiers[i]) && !isInQuotes) {
        isInQuotes = true;
        continue;
      }
      key += modifiers[i];
      if (key && (modifiers[i + 1] == ' ' || modifiers[i + 1] == '' || !modifiers[i + 1])) {
        callback(key, true);
        key = '';
        value = '';
      }
    }
  }
  getElement(element) {
    return element.id.type == 'id' ? document.getElementById(element.id.value) : document.getElementsByClassName(element.id.value)[0];
  }

  /**
   * Removes old elements not used by current blueprint
   * @date 2022-08-08
   * @param {object} oldBlueprint
   * @param {object} currentBlueprint
   */
  removeUnusedElements(oldBlueprint, currentBlueprint) {
    let removedParents = [];

    // get element indices
    let currentElementIndex = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getLastElement(currentBlueprint);
    for (let i = 0; i < oldBlueprint.length - 1; i++) {
      let element = oldBlueprint[i],
        id = element.id.value;
      if (currentElementIndex[id] >= 0 && this.haveSameParent(element.parent.id, currentBlueprint[currentElementIndex[id]].parent.id)) continue;
      if (element.isParent) removedParents.push(id);
      if (!removedParents.includes(element.parent.id.value)) this.getElement(element).remove();
    }
  }
  getParent(element) {
    return element.parent.id.value == 'root' ? document.getElementsByClassName('ludr-container')[0] : this.getElement(element.parent);
  }
  haveSameParent(parent1Id, parent2Id) {
    return parent1Id.value == parent2Id.value && parent1Id.type == parent2Id.type;
  }

  /**
   * Adds new elements not used by old blueprint
   * @date 2022-08-08
   * @param {object} oldBlueprint
   * @param {object} currentBlueprint
   */
  addNewElements(oldBlueprint, currentBlueprint) {
    let currentElementIndex = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getLastElement(currentBlueprint),
      oldElementIndex = _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getLastElement(oldBlueprint);
    for (let i = 0; i < currentBlueprint.length - 1; i++) {
      const element = currentBlueprint[i],
        id = element.id.value,
        oldElement = oldBlueprint[oldElementIndex[id]];
      if (!(oldElementIndex[id] >= 0) || oldElementIndex[id] >= 0 && !this.haveSameParent(element.parent.id, oldElement.parent.id)) {
        let previousElement = currentBlueprint[currentElementIndex[id] - 1];
        const newElement = document.createElement(element.element.type);
        this.getModifierKeyValuePair(element.modifiers.trim(), (key, value) => {
          key = key.trim();
          if (key) newElement.setAttribute(key, value);
        });
        newElement.innerHTML = element.element.innerText;
        if (previousElement && element.hierachy == previousElement.hierachy) {
          let sibling = this.getElement(previousElement);
          sibling.parentNode.insertBefore(newElement, sibling.nextSibling);
        } else {
          let parent = this.getParent(element);
          parent.append(newElement);
        }
      } else if (oldElement && oldElement.element.innerText != element.element.innerText) {
        const elementToChange = this.getElement(element);
        elementToChange.innerHTML = element.element.innerText;
      }
    }
  }
}

/**
 * Creates and returns a new layout
 * @date 2022-08-08
 * @param {string} name
 * @param {string} path
 * @return {Layout}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, path) => _index__WEBPACK_IMPORTED_MODULE_3__["default"].add(name, new Layout(name, path)));

/***/ }),

/***/ "../Ludr/src/Layouts/index.js":
/*!************************************!*\
  !*** ../Ludr/src/Layouts/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Middleware */ "../Ludr/src/Middleware.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components */ "../Ludr/src/Components/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "../Ludr/src/Events.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Router */ "../Ludr/src/Router/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Layouts {
  /**
   * @date 2022-08-08
   * @return {Layouts}
   */
  constructor() {
    if (Layouts.instance) return Layouts.instance;
    this.layouts = {};
    Layouts.instance = this;
  }

  /**
   * Add new layout to the cache and returns it
   * @date 2022-08-08
   * @param {string} name
   * @param {object} layout
   * @return {object}
   */
  add(name, layout) {
    return this.layouts[name] = layout;
  }

  /**
   * Returns a layout
   * @date 2022-08-08
   * @param {string} name
   * @return {object}
   */
  use(name) {
    if (!this.layouts[name]) throw `No corresponding layout: there is no pre-defined layout with the name: (${name})`;
    return this.layouts[name];
  }

  /**
   * Populates layout with components' content
   * and prepends layout content to the document body 
   * @date 2022-08-08
   * @param {name} name
   */
  build(name) {
    if (!this.layouts[name]) throw `No corresponding layout: there is no pre-defined layout with the name: (${name})`;
    this.layouts[name].build();
    _Middleware__WEBPACK_IMPORTED_MODULE_0__["default"].once(() => {
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initEvents('beforeLoad');
      _Utils__WEBPACK_IMPORTED_MODULE_2__["default"].prependToBody(this.layouts[name].content);
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initNavEvents();
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initHighlightNavItems();
      const router = _Router__WEBPACK_IMPORTED_MODULE_4__["default"].use(_Router__WEBPACK_IMPORTED_MODULE_4__["default"].currentRoute.name);
      new _Events__WEBPACK_IMPORTED_MODULE_3__["default"]().setEventListeners(router.events);
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initEvents('loaded');
      _Router__WEBPACK_IMPORTED_MODULE_4__["default"].initOnRouteReady();
    });
  }

  /**
   * Removes unused elements and adss new elements
   * @date 2022-08-08
   * @param {object} oldRoute
   * @param {object} currentRoute
   */
  switch(oldRoute, currentRoute) {
    const layout = this.layouts[currentRoute.layout];
    if (!layout) throw `No corresponding layout: there is no pre-defined layout with the name: (${currentRoute.layout})`;
    if (!currentRoute.blueprint) layout.build();
    _Middleware__WEBPACK_IMPORTED_MODULE_0__["default"].once(next => {
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initEvents('beforeLoad');
      layout.removeUnusedElements(oldRoute.blueprint, currentRoute.blueprint);
      layout.addNewElements(oldRoute.blueprint, currentRoute.blueprint);
      new _Events__WEBPACK_IMPORTED_MODULE_3__["default"]().setEventListeners(currentRoute.events);
      _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initEvents('loaded');
      _Router__WEBPACK_IMPORTED_MODULE_4__["default"].initOnRouteReady();
      next();
    });
  }
  reload() {
    _Components__WEBPACK_IMPORTED_MODULE_1__["default"].initEvents('loaded');
  }
}());

/***/ }),

/***/ "../Ludr/src/Lexer/Blueprint.js":
/*!**************************************!*\
  !*** ../Ludr/src/Lexer/Blueprint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blueprint)
/* harmony export */ });
/* harmony import */ var _Chars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chars */ "../Ludr/src/Lexer/Chars.js");
/* harmony import */ var _EventTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTypes */ "../Ludr/src/Lexer/EventTypes.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lexer */ "../Ludr/src/Lexer/Lexer.js");




class Blueprint extends _Lexer__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(name, layout) {
    super(layout);
    this.layoutName = name;
    this.blueprint = [];
    this.events = {
      counter: 0,
      list: []
    };
    this.componentTree = [];
    this.elementIndex = {};
  }
  set layout(newLayout) {
    this.str = newLayout;
  }
  get layout() {
    return this.str;
  }
  get currentComponent() {
    return this.componentTree[this.componentTree.length - 1];
  }
  getParent(hierachy) {
    let parent = {
      id: {
        type: 'root',
        value: 'root'
      }
    };
    for (let i = this.blueprint.length - 1; i >= 0; i--) {
      const element = this.blueprint[i];
      if (element.hierachy == hierachy) {
        parent = {
          id: {
            type: element.id.type,
            value: element.id.value
          }
        };
        this.blueprint[this.elementIndex[element.id.value]].isParent = true;
        break;
      }
    }
    return parent;
  }
  getNonParents(callback) {
    this.blueprint.forEach(element => {
      if (!element.isParent) {
        callback(element);
      }
    });
  }
  getModifier(name, endPos) {
    const pos = this.layout.indexOf(`${name}=`, this.pos.index);
    let modifier = '',
      quotationMarks = 0,
      index = pos + name.length + 1;
    if (pos == -1 || pos >= endPos) return {
      modifier: null,
      pos
    };
    do {
      if (`"'`.includes(this.layout[index])) {
        quotationMarks++;
        index++;
        continue;
      }
      modifier += this.layout[index];
      index++;
    } while (quotationMarks < 2);
    return {
      modifier,
      pos
    };
  }
  getEvents(str) {
    let events = [];
    for (let i = 0; i < str.length; i++) {
      let event = '';
      while (_Chars__WEBPACK_IMPORTED_MODULE_0__.alpha.includes(str[i])) {
        event += str[i];
        i++;
      }
      ;
      if (_EventTypes__WEBPACK_IMPORTED_MODULE_1__["default"].includes(event)) events.push(event);
    }
    return events;
  }
  parseEvents(token, tokenIndex, currentIndex) {
    let outsideParam = true,
      mainQuotes,
      end = false,
      index = tokenIndex,
      strevents = '';
    while (!end) {
      ++index;
      if (outsideParam && this.layout[index] == ' ') {
        continue;
      } else if (mainQuotes && `"'`.includes(this.layout[index]) && this.layout[index] != mainQuotes) {
        outsideParam = !outsideParam;
      } else if (!mainQuotes && (this.layout[index] == '\'' || this.layout[index] == '"')) {
        mainQuotes = this.layout[index];
        continue;
      } else if (mainQuotes && this.layout[index] == mainQuotes) {
        end = true;
        const eventPointer = `data-eventid="${this.events.counter}"`,
          defStart = tokenIndex - token.length,
          defEnd = index + 1;
        const eventDefinition = this.layout.substring(defStart, defEnd);
        this.layout = this.layout.replace(eventDefinition, eventPointer);
        this.pos.index = currentIndex;
        this.events.counter++;
        continue;
      }
      strevents += this.layout[index];
    }
    const events = {};
    const eventArr = strevents.trim().split(';');
    eventArr.forEach(event => {
      const lParamPos = event.indexOf('(');
      const params = event.substring(lParamPos + 1, event.length - 1);
      const resolvedParams = [];
      params.split(',').forEach(param => {
        if (`'"`.includes(param.charAt(0))) return resolvedParams.push(param.substring(1, param.length - 1));
        resolvedParams.push(param);
      });
      events[event.substring(0, lParamPos)] = [token, resolvedParams];
    });
    this.events.list.push(events);
  }
  makeBlueprint() {
    let previousToken,
      hierachy = 0,
      elementCount = 0,
      isInsideComponent = false,
      totalComponentLines = 1,
      classes = [];
    while (this.currentChar != null) {
      if (this.currentChar == "\n" && isInsideComponent) {
        this.currentComponent.line++;
        totalComponentLines++;
      }
      if (" \t\r".includes(this.currentChar)) {
        this.next();
        continue;
      }
      let token = _Chars__WEBPACK_IMPORTED_MODULE_0__.alpha.includes(this.currentChar) ? this.makeString() : this.currentChar;
      if (previousToken == 'ludr_component_start') {
        this.componentTree.push({
          line: 0,
          name: token,
          parent: isInsideComponent ? this.currentComponent.name : 'none',
          hasRoot: false,
          rootHierachy: hierachy + 1
        });
        isInsideComponent = true;
      } else if (token == 'ludr_component_end') {
        if (this.currentComponent.parent == 'none') isInsideComponent = false;
        this.componentTree.pop();
      } else if (_Chars__WEBPACK_IMPORTED_MODULE_0__.elements.includes(token) && this.lookBehind(token) == '<') {
        if (!_Chars__WEBPACK_IMPORTED_MODULE_0__.singletonElements.includes(token)) ++hierachy;
        let lastCharPosOTag = this.layout.indexOf('>', this.pos.index);
        let modifiers = this.layout.substring(this.pos.index, lastCharPosOTag);
        let {
          modifier: id,
          pos: idPod
        } = this.getModifier('id', lastCharPosOTag);
        let {
          modifier: _class,
          pos: classPos
        } = this.getModifier('class', lastCharPosOTag);
        _class = _class ? _class.split(' ')[0] : null;
        let classIsUniq = false;
        let events = this.getEvents(modifiers);
        let currentTokenIndex = this.pos.index;
        events.forEach(event => {
          const eventDefPos = modifiers.indexOf(event);
          if (eventDefPos != -1) {
            this.parseEvents(event, eventDefPos + event.length + this.pos.index, currentTokenIndex);
          }
        });
        lastCharPosOTag = this.layout.indexOf('>', this.pos.index);
        modifiers = this.layout.substring(this.pos.index, lastCharPosOTag);
        if (isInsideComponent && hierachy != this.currentComponent.rootHierachy) continue;
        if (!classes.includes(_class)) {
          classes.push(_class);
          classIsUniq = true;
        }
        let errorLine = isInsideComponent ? this.currentComponent.line : this.pos.line - totalComponentLines + 1;
        let errorMsg = isInsideComponent ? `Element: ${token}, at line ${errorLine}, in component: ${this.currentComponent.name}, has no id or unique class` : `Element: ${token}, at line ${errorLine}, in layout: ${this.layoutName}, has no id or unique class`;
        const hasId = !(id == null || id.trim() == '' || idPod > lastCharPosOTag);
        const hasClass = !(_class == null || _class.trim() == '' || classPos > lastCharPosOTag || !classIsUniq);
        if (!hasClass && !hasId) throw errorMsg;
        if (isInsideComponent && this.currentComponent.hasRoot) throw `Root element count exeeded: Component (${this.currentComponent.name}) has a root element.`;
        const firstOrderId = id ? id : _class;
        const parent = this.getParent(hierachy - 1);
        let componentInnerHTML;
        let elementStartPos = this.layout.indexOf(`<${token + modifiers}>`, this.pos.index - token.length - 2) + `<${token + modifiers}>`.length;
        this.elementIndex[firstOrderId] = elementCount++;
        this.blueprint.push({
          id: {
            type: id ? 'id' : 'class',
            value: firstOrderId
          },
          isParent: false,
          element: {
            innerText: '',
            type: token,
            startPos: elementStartPos
          },
          component: {
            isComponent: isInsideComponent,
            innerHTML: componentInnerHTML
          },
          hierachy,
          modifiers,
          parent
        });
        if (this.currentComponent) this.currentComponent.hasRoot = true;
      }
      if (_Chars__WEBPACK_IMPORTED_MODULE_0__.elements.includes(token) && this.lookBehind(token) == '/' && this.lookBehind(token, 2) == '<') hierachy--;
      previousToken = token;
      this.next();
    }
    this.getNonParents(element => {
      let suffix = element.component.isComponent ? ' ludr_component_end' : '';
      let endPos = this.layout.indexOf(`</${element.element.type}>${suffix}`, element.element.startPos);
      element.element.innerText = this.layout.substring(element.element.startPos, endPos);
    });
    this.blueprint.push(this.elementIndex);
    return {
      blueprint: this.blueprint,
      events: this.events.list,
      layout: this.layout
    };
  }
}
;

/***/ }),

/***/ "../Ludr/src/Lexer/Chars.js":
/*!**********************************!*\
  !*** ../Ludr/src/Lexer/Chars.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "numbers": () => (/* binding */ numbers),
/* harmony export */   "singletonElements": () => (/* binding */ singletonElements)
/* harmony export */ });
const numbers = '0123456789';
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const elements = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video'];
const singletonElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

/***/ }),

/***/ "../Ludr/src/Lexer/EventTypes.js":
/*!***************************************!*\
  !*** ../Ludr/src/Lexer/EventTypes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['onabort', 'onafterprint', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onended', 'onerror', 'onfocus', 'onfocusin', 'onfocusout', 'onfullscreenchange', 'onfullscreenerror', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmessage', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseover', 'onmouseout', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onopen', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onresize', 'onreset', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onshow', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart', 'ontransitionend', 'onunload', 'onvolumechange']);

/***/ }),

/***/ "../Ludr/src/Lexer/Lexer.js":
/*!**********************************!*\
  !*** ../Ludr/src/Lexer/Lexer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lexer)
/* harmony export */ });
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ "../Ludr/src/Lexer/Position.js");
/* harmony import */ var _Chars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chars */ "../Ludr/src/Lexer/Chars.js");


class Lexer {
  /**
   * @date 2022-08-08
   * @param {str} str
   */
  constructor(str) {
    this.str = str;
    this.currentChar = null;
    this.pos = new _Position__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.next();
  }

  /**
   * Moves to the next character in the given string
   * @date 2022-08-08
   */
  next() {
    this.pos.next(this.currentChar);
    this.currentChar = this.pos.index < this.str.length ? this.str[this.pos.index] : null;
  }

  /**
   * Returns a char behind of the current char, at an offset
   * @date 2022-08-08
   * @param {string} token
   * @param {number} offset
   * @return {string}
   */
  lookBehind(token, offset = 1) {
    return this.str[this.pos.index - token.length - offset] || null;
  }

  /**
   * Returns a char ahead of the current char, at an offset
   * @date 2022-08-08
   * @param {number} offset
   * @return {string}
   */
  lookAhead(offset = 0) {
    return this.str[this.pos.index + offset] || null;
  }

  /**
   * Makes a string token from a larger string
   * @date 2022-08-08
   * @return {string}
   */
  makeString() {
    const letters = _Chars__WEBPACK_IMPORTED_MODULE_1__.numbers + _Chars__WEBPACK_IMPORTED_MODULE_1__.alpha + '_-.';
    let str = '';
    while (letters.includes(this.currentChar)) {
      str += this.currentChar;
      this.next();
    }
    ;
    return str;
  }
}
;

/***/ }),

/***/ "../Ludr/src/Lexer/Position.js":
/*!*************************************!*\
  !*** ../Ludr/src/Lexer/Position.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Position)
/* harmony export */ });
class Position {
  constructor() {
    this.index = -1;
    this.line = 1;
    this.col = 1;
  }

  /**
   * Increments current index by 1 if no new line is encountered
   * column is incremented by 1, otherwise, line is incremented by 1 and column reset to 1
   * @date 2022-08-08
   * @param {string} char
   */
  next(char) {
    this.index++;
    this.col++;
    if (char == '\n') {
      this.line++;
      this.col = 1;
    }
  }
}

/***/ }),

/***/ "../Ludr/src/Middleware.js":
/*!*********************************!*\
  !*** ../Ludr/src/Middleware.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "../Ludr/src/Router/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Middleware {
  constructor() {
    if (!Middleware.instance) {
      this.middleware = [];
      this.reset();
      Middleware.instance = this;
    }
    return Middleware.instance;
  }
  get index() {
    return this.middlewareIndex++;
  }
  repeat(scope, callback) {
    this.add(scope, callback);
  }

  /**
   * @date 2022-08-08
   * @param {scope} scope
   * @param {callback} callback
   */
  once(scope, callback) {
    this.add(scope, callback, true);
  }
  add(scope, callback, once = false) {
    let _scope = scope;
    scope = !callback ? null : scope;
    callback = !callback ? _scope : callback;
    scope = Array.isArray(scope) ? scope : [scope];
    this.middleware.push({
      scope,
      hasRun: false,
      once,
      callback
    });
  }

  /**
   * Removes the last middleware
   * @deprecated since 1.0.4
   * @date 2022-08-08
   */
  pop() {
    this.middleware.pop();
  }

  /**
   * Removes all used once-off middleware
   * Resets ready-middleware
   * @date 2022-08-08
   */
  reset() {
    let newMiddleware = [];
    this.middlewareIndex = 0;
    this.readyMiddleware = [];
    this.middleware.forEach(middleware => {
      if (middleware.hasRun) return;
      newMiddleware.push(middleware);
    });
    this.middleware = newMiddleware;
  }

  /**
   * Executes the next inline middleware
   * @date 2022-08-08
   */
  exec() {
    let index = this.middlewareIndex;
    const {
      callback,
      hasRun,
      once
    } = this.readyMiddleware[this.index] || {
      callback: 'done'
    };
    if (typeof callback != 'function') return;
    if (once && hasRun) return this.exec();else if (once && !hasRun) this.readyMiddleware[index].hasRun = true;
    callback(() => this.exec());
  }

  /**
   * Readies all middleware that are in scope
   * Executes first inline middleware
   * @date 2022-08-08
   */
  run() {
    this.reset();
    this.middleware.forEach(middleware => {
      if (!middleware.scope[0] || middleware.scope.includes(_Router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.name)) this.readyMiddleware.push(middleware);
    });
    this.exec();
  }
}());

/***/ }),

/***/ "../Ludr/src/Router/Route.js":
/*!***********************************!*\
  !*** ../Ludr/src/Router/Route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "../Ludr/src/Config.js");
/* harmony import */ var _Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts */ "../Ludr/src/Layouts/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "../Ludr/src/Router/index.js");



class Route {
  /**
   * Creates a new route
   * @date 2022-08-08
   * @param {string} name
   * @param {object} attr
   */
  constructor(name, {
    title,
    subTitle,
    url,
    tags,
    layout
  }) {
    this.name = name;
    this.title = title;
    this.subTitle = subTitle;
    this.url = url;
    this.tags = tags;
    this.params = {};
    this.query = {};
    this.layout = layout;
    this.blueprint = null;
  }

  /**
   * Updates the 'document' location of a browser without reloading the whole page
   * @date 2022-08-08
   * @param {string} path
   */
  updateHistory(path) {
    const pageTitle = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].pageTitle + ' | ' + this.title;
    document.title = pageTitle;
    history.pushState(_Layouts__WEBPACK_IMPORTED_MODULE_1__["default"].use(this.layout).content, pageTitle, path);
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, attr) => _index__WEBPACK_IMPORTED_MODULE_2__["default"].add(name, new Route(name, attr)));

/***/ }),

/***/ "../Ludr/src/Router/index.js":
/*!***********************************!*\
  !*** ../Ludr/src/Router/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "../Ludr/src/Utils.js");
/* harmony import */ var _Url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Url */ "../Ludr/src/Url.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Router {
  constructor() {
    if (!Router.instance) {
      this.routes = {};
      this.currentRoute = {};
      this.preDefinedEvents = {
        onRouteReady: []
      };
      this.events = [];
      Router.instance = this;
    }
    return Router.instance;
  }
  /**
   * Returns params associated with the current route
   * @date 2022-08-08
   * @return {string}
   */
  get currentParams() {
    return this.currentRoute.params;
  }

  /**
   * Caches the route and returns it
   * @date 2022-08-08
   * @param {string} name
   * @param {object} route
   * @return {object}
   */
  add(name, route) {
    return this.routes[name] = route;
  }
  /**
   * Returns a route that matches the given name
   * @date 2022-08-08
   * @param {name} name
   * @return {object}
   */
  use(name) {
    if (!this.routes[name]) throw `Non-existant route: trying to use route (${name}) that doesn't exist!`;
    return this.routes[name];
  }
  /**
   * Returns an array with routes that match the given tag
   * @date 2022-08-08
   * @param {string} tag
   * @param {string} attr
   * @return {array}
   */
  getRoutesByTag(tag, attr = 'name') {
    const routesToReturn = [];
    _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].iterate(this.routes, routeName => {
      if (this.routes[routeName].tags && this.routes[routeName].tags.includes(tag)) routesToReturn.push(this.routes[routeName][attr]);
    });
    return routesToReturn;
  }
  getRoutesByTags(tags, attr = 'name') {
    const routesToReturn = [];
    tags = Array.isArray(tags) ? tags : [tags];
    _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].iterate(this.routes, routeName => {
      let isPageAdded = false;
      tags.forEach(tag => {
        if (!isPageAdded && this.routes[routeName].tags && this.routes[routeName].tags.includes(tag)) {
          isPageAdded = true;
          routesToReturn.push(this.routes[routeName][attr]);
        }
      });
    });
    return routesToReturn;
  }
  /**
   * Returns a route that matches the given url
   * @date 2022-08-08
   * @param {string} url
   * @return {object}
   */
  getRoute(url = location.pathname) {
    let route;
    _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].iterate(this.routes, routeName => {
      if (_Url__WEBPACK_IMPORTED_MODULE_1__["default"].compare(this.routes[routeName].url, url)) route = this.routes[routeName];
    });
    if (!route) throw `Route not found: there is no pre-defined route that matches the path: (${url})`;
    route.params = _Url__WEBPACK_IMPORTED_MODULE_1__["default"].getParams(route.url, url);
    route.query = new URLSearchParams(location.search);
    return route;
  }
  initOnRouteReady() {
    this.preDefinedEvents.onRouteReady.forEach(eventHandler => {
      eventHandler();
    });
  }
  onRouteReady(callback) {
    this.preDefinedEvents.onRouteReady.push(callback);
  }
}());

/***/ }),

/***/ "../Ludr/src/Singleton.js":
/*!********************************!*\
  !*** ../Ludr/src/Singleton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Env */ "../Ludr/src/Env.js");


/**
 * Save key-value pairs
 * @date 2022-08-08
 * @param {string} key
 * @param {number | string | object} value
 * @param {boolean} isGlobal
 */
const put = (key, value, isGlobal = false) => _Env__WEBPACK_IMPORTED_MODULE_0__["default"].put(key, value, isGlobal);

/**
 * Returns a value associated with the given key
 * @date 2022-08-08
 * @param {key} key
 * @return {number | string | object}
 */
const get = key => _Env__WEBPACK_IMPORTED_MODULE_0__["default"].get(key);

/**
 * Removes a value associated with the given key
 * @date 2022-08-08
 * @param {string} key
 */
const remove = key => _Env__WEBPACK_IMPORTED_MODULE_0__["default"].remove(key);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  put,
  get,
  remove
});

/***/ }),

/***/ "../Ludr/src/Store.js":
/*!****************************!*\
  !*** ../Ludr/src/Store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const save = (key, value) => {
  localStorage.setItem(`_ludr.${key}`, JSON.stringify({
    data: value
  }));
};
const get = key => JSON.parse(localStorage.getItem(`_ludr.${key}`)).data;
const remove = key => localStorage.removeItem(key);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({
  save,
  get,
  remove
}));

/***/ }),

/***/ "../Ludr/src/Url.js":
/*!**************************!*\
  !*** ../Ludr/src/Url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Url {
  /**
   * Checks whether the url segment starts with a colon
   * @date 2022-08-08
   * @param {string} urlSegment
   * @return {boolean}
   */
  static isPlaceholder(urlSegment) {
    return urlSegment.charAt(0) == ':';
  }
  /**
   * Removes redundant forward slashes
   * @date 2022-08-08
   * @param {string} url
   * @return {string}
   */
  static cleanURL(url) {
    let cleanUrl = '';
    for (let i = 0; i < url.length; i++) {
      let currentChar = url.charAt(i),
        nextChar = url.charAt(i + 1);
      if (nextChar && currentChar == nextChar && currentChar == '/') continue;
      cleanUrl += currentChar;
    }
    return cleanUrl;
  }
  /**
   * Makes a pair of arrays from a pair of url strings 
   * @date 2022-08-08
   * @param {string} unresolvedUrl
   * @param {string} resolvedUrl
   * @return {object}
   */
  static getUrlPair(unresolvedUrl, resolvedUrl) {
    return {
      unresolvedUrlArray: unresolvedUrl.split('/'),
      resolvedUrlArray: resolvedUrl.split('/')
    };
  }

  /**
   * Gets a key-value pair of url params
   * @date 2022-08-08
   * @param {string} unresolvedUrl
   * @param {string} resolvedUrl
   * @return {object}
   */
  static getParams(unresolvedUrl, resolvedUrl) {
    const {
      unresolvedUrlArray,
      resolvedUrlArray
    } = Url.getUrlPair(unresolvedUrl, resolvedUrl);
    let params = {};
    for (let i = 0; i < resolvedUrlArray.length; i++) {
      if (unresolvedUrlArray[i] && Url.isPlaceholder(unresolvedUrlArray[i])) params[unresolvedUrlArray[i].slice(1)] = resolvedUrlArray[i];
    }
    return params;
  }

  /**
   * Compares a 'variable' url string to a normal url string
   * @date 2022-08-08
   * @param {string} unresolvedUrl
   * @param {string} resolvedUrl
   * @return {boolean}
   */
  static compare(unresolvedUrl, resolvedUrl) {
    const {
      unresolvedUrlArray,
      resolvedUrlArray
    } = Url.getUrlPair(unresolvedUrl, resolvedUrl);
    let urlsSame = true;
    if (unresolvedUrlArray.length != resolvedUrlArray.length) return false;
    for (let i = 0; i < resolvedUrlArray.length; i++) {
      if (unresolvedUrlArray[i] && Url.isPlaceholder(unresolvedUrlArray[i])) continue;
      if (unresolvedUrlArray[i] != resolvedUrlArray[i]) urlsSame = false;
    }
    return urlsSame;
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Url);

/***/ }),

/***/ "../Ludr/src/Utils.js":
/*!****************************!*\
  !*** ../Ludr/src/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Env */ "../Ludr/src/Env.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "../Ludr/src/App.js");


class Utils {
  /**
   * Prepends html to document's body
   * @date 2022-08-08
   * @param {html} html
   */
  static prependToBody(html) {
    let ludrContainer = document.getElementsByClassName('ludr-container')[0];
    if (!ludrContainer) {
      ludrContainer = document.createElement('div');
      ludrContainer.className = 'ludr-container';
    }
    ludrContainer.innerHTML = html;
    document.body.prepend(ludrContainer);
  }
  static detectNavigation() {
    window.onpopstate = e => {
      (0,_App__WEBPACK_IMPORTED_MODULE_1__.Next)(e.currentTarget.window.location.pathname);
    };
  }

  /**
   * Fetch
   * @date 2022-08-08
   * @param {string} uri
   * @param {object} options
   * @return {string}
   */
  static async fetch(uri, {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body
  } = {}) {
    const response = await fetch(uri, {
      method,
      headers,
      body: JSON.stringify(body)
    });
    return await response.text();
  }
  /**
   * Converts array to object
   * @date 2022-08-08
   * @param {object} obj
   * @param {array} parents
   * @return {object}
   */
  static arrayToObject(obj, parents) {
    let replaceValue;
    for (let i = 0; i < parents.length; i++) {
      replaceValue = !replaceValue ? obj[parents[i]] : replaceValue[parents[i]];
    }
    return replaceValue;
  }
  static getLastElement(arr) {
    return arr[arr.length - 1];
  }
  /**
   * Loops through an object
   * @date 2022-08-08
   * @param {object} obj
   * @param {function} callback
   */
  static iterate(obj, callback) {
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      callback(key);
    }
  }
  /**
   * Combines two objects
   * @date 2022-08-08
   * @param { refObj, mainObj, parents = [] } data
   * @return {object}
   */
  static merge({
    refObj,
    mainObj,
    parents = []
  }) {
    for (const key in refObj) {
      if (!refObj.hasOwnProperty(key)) continue;
      parents.push(key);
      if (typeof refObj[key] != 'object') {
        let replaceValue = Utils.arrayToObject(mainObj, parents);
        if (replaceValue) refObj[key] = replaceValue;
        parents.pop();
        continue;
      }
      Utils.merge({
        refObj: refObj[key],
        mainObj,
        parents
      });
      parents.pop();
    }
    return mainObj;
  }
  /**
   * Extracts component names from a string
   * @date 2022-08-08
   * @param {string} string
   * @return {array}
   */
  static extractComponentNames(string) {
    const rawTags = string.match(/@ludr_component(.*?)end/gi) || [];
    let tags = [];
    rawTags.forEach(rawTag => {
      tags.push(rawTag.replace('@ludr_component', '').replace('end', ''));
    });
    return tags;
  }
  /**
   * Sets up handlebars helpers
   * @date 2022-08-08
   */
  static setUpHandleBarsHelpers() {
    _Env__WEBPACK_IMPORTED_MODULE_0__["default"].handlebars.registerHelper('component', function (str) {
      return `@ludr_component ${str} end`;
    });
    _Env__WEBPACK_IMPORTED_MODULE_0__["default"].handlebars.registerHelper('globalLinkActive', function (str) {
      const linkActiveClassArr = str.split('data:');
      return linkActiveClassArr.length == 1 ? `ludr_link_active_class ${str};` : `ludr_link_active_class ${_Env__WEBPACK_IMPORTED_MODULE_0__["default"].get(linkActiveClassArr[1])};`;
    });
    _Env__WEBPACK_IMPORTED_MODULE_0__["default"].handlebars.registerHelper('link', function (str) {
      return `data-linkaddress="${str}"`;
    });
    _Env__WEBPACK_IMPORTED_MODULE_0__["default"].handlebars.registerHelper('linkActive', function (str) {
      return `data-linkactive="${str}"`;
    });
  }

  /**
   * @date 2022-08-08
   * @param {string} string
   * @return {string}
   */
  static extractLinkActiveClass(string) {
    const linkActiveClasses = string.match(/ludr_link_active_class(.*?);/gi) || [];
    return linkActiveClasses[linkActiveClasses.length - 1] ? linkActiveClasses[linkActiveClasses.length - 1].replace('ludr_link_active_class', '').replace(';', '') : '';
  }
  /**
   * Checks whether a path has an extention
   * @date 2022-08-08
   * @param {string} path
   * @return {boolean}
   */
  static hasExt(path) {
    const pathArr = path.split('.');
    return pathArr[pathArr.length - 1] == 'hbs' || pathArr[pathArr.length - 1] == 'handlebars';
  }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./public/assets/js/src/components/admin/index.js":
/*!********************************************************!*\
  !*** ./public/assets/js/src/components/admin/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.sidenav', {
    path: 'admin/sidenav',
    scope: ['admin.sessions', 'admin.sessions.closed'],
    nav: {
      parent: 'sidenav',
      targets: ['sidenav__top__item', 'sidenav__top__item']
    }
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.login', {
    path: 'admin/login'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.header', {
    path: 'admin/header',
    scope: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.getRoutesByTags('admin')
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.nav', {
    path: 'admin/nav',
    scope: ['admin.sessions', 'admin.sessions.closed'],
    nav: {
      parent: 'container__main__nav',
      targets: ['container__main__nav__ul__item']
    }
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.sessions.search', {
    path: 'admin/search'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.sessions', {
    path: 'admin/sessions',
    scope: ['admin.sessions', 'admin.sessions.closed']
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.session.residences', {
    path: 'admin/session.residences',
    scope: ['admin.session.residences']
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.votes', {
    path: 'admin/votes',
    scope: ['admin.votes']
  });
});

/***/ }),

/***/ "./public/assets/js/src/components/base/index.js":
/*!*******************************************************!*\
  !*** ./public/assets/js/src/components/base/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('error', {
    path: 'base/error'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('base.header', {
    path: 'base/header'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('base.home.main', {
    path: 'base/home.main'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('base.footer', {
    path: 'base/footer'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('thank.you', {
    path: 'base/thank.you'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('contact.us', {
    path: 'base/contact.us'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('faq', {
    path: 'base/faq'
  });
});

/***/ }),

/***/ "./public/assets/js/src/components/index.js":
/*!**************************************************!*\
  !*** ./public/assets/js/src/components/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./public/assets/js/src/components/modals/index.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin */ "./public/assets/js/src/components/admin/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./public/assets/js/src/components/base/index.js");
/* harmony import */ var _resident__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resident */ "./public/assets/js/src/components/resident/index.js");
/* harmony import */ var _titles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titles */ "./public/assets/js/src/components/titles/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_admin__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_base__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_resident__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_titles__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./public/assets/js/src/components/modals/index.js":
/*!*********************************************************!*\
  !*** ./public/assets/js/src/components/modals/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('modal.sessions', {
    path: 'modals/sessions'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('modal.casting', {
    path: 'modals/casting'
  });
});

/***/ }),

/***/ "./public/assets/js/src/components/resident/index.js":
/*!***********************************************************!*\
  !*** ./public/assets/js/src/components/resident/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.sidenav', {
    path: 'resident/sidenav',
    scope: ['resident.sessions'],
    nav: {
      parent: 'sidenav',
      targets: ['sidenav__top__item', 'sidenav__bottom__item']
    }
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.header', {
    path: 'resident/header',
    scope: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.getRoutesByTags('resident')
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.register.main', {
    path: 'resident/register.main'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.register.otp', {
    path: 'resident/register.otp'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.password.reset', {
    path: 'resident/password.reset'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.password.renew', {
    path: 'resident/password.renew'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.login', {
    path: 'resident/login'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.vote', {
    path: 'resident/vote',
    scope: ['resident.vote']
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.sessions', {
    path: 'resident/sessions',
    scope: ['resident.sessions']
  });
});

/***/ }),

/***/ "./public/assets/js/src/components/titles/index.js":
/*!*********************************************************!*\
  !*** ./public/assets/js/src/components/titles/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.sessions.title', {
    path: 'titles/admin.sessions'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.session.residences.title', {
    path: 'titles/admin.session.residences'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('admin.votes.title', {
    path: 'titles/admin.votes'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.vote.title', {
    path: 'titles/resident.vote'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Component)('resident.sessions.title', {
    path: 'titles/resident.sessions'
  });
});

/***/ }),

/***/ "./public/assets/js/src/events/Admin.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/events/Admin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_show_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/show-error */ "./public/assets/js/src/helpers/show-error.js");
/* harmony import */ var _helpers_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/string */ "./public/assets/js/src/helpers/string.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  new class Admin extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Admin);
    }
    async login(e) {
      e.preventDefault();
      const body = {
        email: $('#admin-email').val(),
        password: $('#admin-password').val()
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/a/login', {
        body
      });
      if (response.successful) return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(response.redirect);
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
  }();
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('admin.header').onLoaded(() => {
    let date = new Date(),
      hours = date.getHours(),
      message = '';
    if (hours < 12) message = 'Good morning';else if (hours >= 12 && hours < 18) message = 'Good afternoon';else message = 'Good evenening';
    $('#header-greetings').text(`${message}, ${(0,_helpers_string__WEBPACK_IMPORTED_MODULE_3__.capitalize)(Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('adminInfo').lastname)}`);
  });
});

/***/ }),

/***/ "./public/assets/js/src/events/Password.js":
/*!*************************************************!*\
  !*** ./public/assets/js/src/events/Password.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/popup */ "./public/assets/js/src/helpers/popup.js");
/* harmony import */ var _helpers_show_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/show-error */ "./public/assets/js/src/helpers/show-error.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  new class Password extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Password);
    }
    async reset(e) {
      e.preventDefault();
      const body = {
        email: $('#student-email').val()
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/password/reset', {
        body
      });
      if (response.successful) return (0,_helpers_popup__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: 'success',
        title: 'Reset request sent',
        message: 'Reset link sent to your email'
      });
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_3__["default"])(response.error);
    }
    async renew(e) {
      e.preventDefault();
      const body = {
        password: $('#student-password').val(),
        passwordAgain: $('#student-password-again').val(),
        resetToken: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentRoute.query.get('k'),
        resetId: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentRoute.query.get('id')
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/password/renew', {
        body
      });
      if (response.successful) return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)('/login');
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_3__["default"])(response.error);
    }
  }();
});

/***/ }),

/***/ "./public/assets/js/src/events/Resident.js":
/*!*************************************************!*\
  !*** ./public/assets/js/src/events/Resident.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_show_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/show-error */ "./public/assets/js/src/helpers/show-error.js");
/* harmony import */ var _helpers_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/string */ "./public/assets/js/src/helpers/string.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  new class Resident extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Resident);
    }
    async register(e) {
      e.preventDefault();
      const body = {
        email: $('#student-email').val(),
        password: $('#student-password').val(),
        passwordAgain: $('#student-password-again').val()
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/register', {
        body
      });
      if (response.successful) {
        (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)('/register/verify');
        Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.save('otpId', response.otp);
        Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.save('residentId', response.residentId);
        return;
      }
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
    async resendCode() {
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/register/resend-otp', {
        body: {
          residentId: Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.get('residentId')
        }
      });
      if (response.successful) {
        Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.save('otpId', response.otp);
        return;
      }
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
    async verify(e) {
      e.preventDefault();
      const body = {
        otp: $('#student-otp').val(),
        otpId: Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.get('otpId'),
        residentId: Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.get('residentId')
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/register/verify', {
        body
      });
      if (response.successful) {
        Ludr__WEBPACK_IMPORTED_MODULE_0__.Store.remove('otpId');
        return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(`/login`);
      }
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
    async login(e) {
      e.preventDefault();
      const body = {
        email: $('#student-email').val(),
        password: $('#student-password').val()
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/login', {
        body
      });
      if (response.successful) return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(response.redirect);
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
  }();
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('resident.header').onLoaded(() => {
    let date = new Date(),
      hours = date.getHours(),
      message = '';
    if (hours < 12) message = 'Good morning';else if (hours >= 12 && hours < 18) message = 'Good afternoon';else message = 'Good evenening';
    $('#header-greetings').text(`${message}, ${(0,_helpers_string__WEBPACK_IMPORTED_MODULE_3__.capitalize)(Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('userInfo').lastname)}`);
  });
});

/***/ }),

/***/ "./public/assets/js/src/events/Session.js":
/*!************************************************!*\
  !*** ./public/assets/js/src/events/Session.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_show_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/show-error */ "./public/assets/js/src/helpers/show-error.js");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/modal */ "./public/assets/js/src/helpers/modal.js");
/* harmony import */ var _helpers_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/format */ "./public/assets/js/src/helpers/format.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  class Session extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Session);
    }
    static showSessions(sessions, type = 'admin') {
      if (!sessions || sessions && sessions.length == 0) {
        $(`#${type}-session-list`).html('');
        return $('#no-sessions').show();
      }
      $('#no-sessions').hide();
      $(`#${type}-session-list`).html(type == 'admin' ? (0,_helpers_format__WEBPACK_IMPORTED_MODULE_4__.formatAdminSessions)(sessions) : (0,_helpers_format__WEBPACK_IMPORTED_MODULE_4__.formatResidentSessions)(sessions));
    }
    static async loadClosedAdminSessions() {
      const sessions = (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/session/fetch/closed')).sessions;
      Session.showSessions(sessions);
      $('.table__body__row--view-session').on('click', e => {
        const ref = e.currentTarget.dataset.sessionref.toLowerCase();
        (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(`/a/${Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentParams.username}/${ref}/residences`);
      });
    }
    static async loadAdminSessions() {
      const sessions = (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/session/fetch/all')).sessions;
      Session.showSessions(sessions);
    }
    static async loadResidentSessions(e) {
      const sessions = (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/session/fetch/resident')).sessions;
      Session.showSessions(sessions, 'resident');
      $('.table__body__row--view-session').on('click', e => {
        const ref = e.currentTarget.dataset.sessionref.toLowerCase();
        (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(`/r/${Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('userInfo').lastname.toLowerCase()}/${ref}/vote`);
      });
    }
    async createSession(e) {
      e.preventDefault();
      const body = {
        startDate: $('#session-start-date').val(),
        endDate: $('#session-end-date').val(),
        name: $('#session-name').val()
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/session/add', {
        body
      });
      if (response.successful) {
        (0,_helpers_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)('new-session');
        (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Reload)();
      }
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_2__["default"])(response.error);
    }
  }
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('admin.sessions').onLoaded(async () => {
    if (Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentRoute.name == 'admin.sessions') return await Session.loadAdminSessions();
    await Session.loadClosedAdminSessions();
  });
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('resident.sessions').onLoaded(async () => {
    await Session.loadResidentSessions();
  });
  new Session();
});

/***/ }),

/***/ "./public/assets/js/src/events/System.js":
/*!***********************************************!*\
  !*** ./public/assets/js/src/events/System.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/popup */ "./public/assets/js/src/helpers/popup.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  new class System extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(System);
    }
    link(link) {
      (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(link);
    }
    async logout(link) {
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(link, {
        method: 'POST'
      });
      if (response.successful) return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(response.redirect);
      (0,_helpers_popup__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: 'error',
        title: 'Redirect failed',
        message: 'Sorry, could not redirect'
      });
    }
  }();
});

/***/ }),

/***/ "./public/assets/js/src/events/Tools.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/events/Tools.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/modal */ "./public/assets/js/src/helpers/modal.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  new class Tools extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Tools);
    }
    openModal(parent) {
      (0,_helpers_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(parent);
    }
    closeModal(parent) {
      (0,_helpers_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(parent);
    }
  }();
});

/***/ }),

/***/ "./public/assets/js/src/events/Vote.js":
/*!*********************************************!*\
  !*** ./public/assets/js/src/events/Vote.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");
/* harmony import */ var _helpers_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/popup */ "./public/assets/js/src/helpers/popup.js");
/* harmony import */ var _helpers_show_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/show-error */ "./public/assets/js/src/helpers/show-error.js");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/modal */ "./public/assets/js/src/helpers/modal.js");
/* harmony import */ var _helpers_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/format */ "./public/assets/js/src/helpers/format.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  class Vote extends Ludr__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
      super(Vote);
    }
    async submit(e) {
      e.preventDefault();
      const body = {
        sessionRef: Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('pageParams').sessionId.toUpperCase(),
        candidates: Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('candidates')
      };
      const response = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/vote/add', {
        body
      });
      if (response.successful) {
        Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.remove('candidates');
        return (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Next)(`/thank-you`);
      }
      (0,_helpers_show_error__WEBPACK_IMPORTED_MODULE_3__["default"])(response.error);
    }
    cast() {
      const votes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
      if (votes.length > 10) return (0,_helpers_popup__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: 'error',
        title: 'Too many candidates',
        message: 'Please select no more than 10 candidates'
      });else if (votes.length == 0) return (0,_helpers_popup__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: 'error',
        title: 'No candidates chosen',
        message: 'Please select at least 1 candidate'
      });
      const candidateIds = [];
      let selectedCandidates = '';
      votes.forEach(vote => {
        candidateIds.push(vote.value);
        selectedCandidates += `
                    <div class="twin-labels twin-labels--border flex">
                        <p>Candidate: </p>
                        <p>${$('p', vote.parentElement)[0].innerText}</p>
                    </div>
                `;
      });
      Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('candidates', candidateIds);
      $('#selected-candidates').html(selectedCandidates);
      (0,_helpers_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)('vote-casting');
    }
    static async loadVotes() {
      const votes = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/votes/fetch/session/residence', {
        body: {
          residence: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentParams.residenceName.toUpperCase(),
          session: Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentParams.sessionRef.toUpperCase()
        }
      }).votes;
      if (!votes || votes && votes.length == 0) {
        $('#admin-votes-list').html('');
        return $('#no-votes').show();
      }
      $('#no-votes').hide();
      $('#admin-votes-list').html((0,_helpers_format__WEBPACK_IMPORTED_MODULE_5__.formatAdminVotes)(votes));
    }
    static async loadCandidates() {
      $('#candidates').html((0,_helpers_format__WEBPACK_IMPORTED_MODULE_5__.formatResidentCandidates)((await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/candidates/fetch/residence')).candidates));
    }
  }
  const vote = new Vote();
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('resident.vote').onLoaded(async () => {
    await Vote.loadCandidates();
  });
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Components.use('admin.votes').onLoaded(async () => {
    await Vote.loadVotes();
  });
});

/***/ }),

/***/ "./public/assets/js/src/events/index.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/events/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin */ "./public/assets/js/src/events/Admin.js");
/* harmony import */ var _Resident__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resident */ "./public/assets/js/src/events/Resident.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Session */ "./public/assets/js/src/events/Session.js");
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vote */ "./public/assets/js/src/events/Vote.js");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tools */ "./public/assets/js/src/events/Tools.js");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Password */ "./public/assets/js/src/events/Password.js");
/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./System */ "./public/assets/js/src/events/System.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_Tools__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_Admin__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_Session__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_Vote__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_Resident__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_Password__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_System__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./public/assets/js/src/groups/index.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/groups/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('admin.page.title', [{
    component: 'admin.sessions.title',
    urls: ['/a/:username/sessions', '/a/:username/sessions/closed']
  }, {
    component: 'admin.session.residences.title',
    url: '/a/:username/:sessionRef/residences'
  }, {
    component: 'admin.votes.title',
    url: '/a/:username/votes/:sessionRef/:residenceName'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('admin.search', [{
    component: 'admin.sessions.search',
    urls: ['/a/:username/sessions', '/a/:username/sessions/closed']
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('admin.main', [{
    component: 'admin.sessions',
    urls: ['/a/:username/sessions', '/a/:username/sessions/closed']
  }, {
    component: 'admin.session.residences',
    url: '/a/:username/:sessionRef/residences'
  }, {
    component: 'admin.votes',
    url: '/a/:username/votes/:sessionRef/:residenceName'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('resident.page.title', [{
    component: 'resident.sessions.title',
    url: '/r/:username/sessions'
  }, {
    component: 'resident.vote.title',
    url: '/r/:username/:sessionId/vote'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('resident.main', [{
    component: 'resident.sessions',
    url: '/r/:username/sessions'
  }, {
    component: 'resident.vote',
    url: '/r/:username/:sessionId/vote'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('logger', [{
    component: 'resident.register.main',
    url: '/register'
  }, {
    component: 'resident.register.otp',
    url: '/register/verify'
  }, {
    component: 'resident.login',
    url: '/login'
  }, {
    component: 'admin.login',
    url: '/a/login'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('password.manager', [{
    component: 'resident.password.reset',
    url: '/password/reset'
  }, {
    component: 'resident.password.renew',
    url: '/password/renew'
  }]);
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Group)('info.main', [{
    component: 'contact.us',
    url: '/contact-us'
  }, {
    component: 'faq',
    url: '/faq'
  }]);
});

/***/ }),

/***/ "./public/assets/js/src/helpers/datetime.js":
/*!**************************************************!*\
  !*** ./public/assets/js/src/helpers/datetime.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticDate": () => (/* binding */ getStaticDate)
/* harmony export */ });
const getMonths = () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const makeTime = date => {
  let hours = date.getHours(),
    minutes = date.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let time = hours + ':' + minutes,
    day = date.getDate(),
    month = getMonths()[date.getMonth()],
    year = date.getFullYear().toString();
  return {
    time,
    day,
    month,
    year
  };
};
const getStaticDate = date => {
  const {
    time,
    day,
    month,
    year
  } = makeTime(date);
  return `${time}, ${day} ${month} ${year[2] + year[3]}'`;
};

/***/ }),

/***/ "./public/assets/js/src/helpers/fetch.js":
/*!***********************************************!*\
  !*** ./public/assets/js/src/helpers/fetch.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (uri, {
  method = 'POST',
  headers = {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body
} = {}) => {
  const response = await fetch(uri, {
    method,
    headers,
    body: JSON.stringify(body)
  });
  return await response.json();
});

/***/ }),

/***/ "./public/assets/js/src/helpers/format.js":
/*!************************************************!*\
  !*** ./public/assets/js/src/helpers/format.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatAdminSessions": () => (/* binding */ formatAdminSessions),
/* harmony export */   "formatAdminVotes": () => (/* binding */ formatAdminVotes),
/* harmony export */   "formatResidentCandidates": () => (/* binding */ formatResidentCandidates),
/* harmony export */   "formatResidentSessions": () => (/* binding */ formatResidentSessions)
/* harmony export */ });
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime */ "./public/assets/js/src/helpers/datetime.js");

const formatAdminSessions = sessions => {
  let result = '';
  sessions.forEach(session => {
    result += `
            <ul class="table__body__row table__body__row--view-session flex anchor" data-sessionref="${session.ref}">
                <li class="table__body__row__item">${session.ref}</li>
                <li class="table__body__row__item">${session.name}</li>
                <li class="table__body__row__item">${(0,_datetime__WEBPACK_IMPORTED_MODULE_0__.getStaticDate)(new Date(session.dates.startDate))}</li>
                <li class="table__body__row__item">${(0,_datetime__WEBPACK_IMPORTED_MODULE_0__.getStaticDate)(new Date(session.dates.endDate))}</li>
            </ul>
        `;
  });
  return result;
};
const formatResidentSessions = sessions => {
  let result = '';
  sessions.forEach(session => {
    result += `
            <ul class="table__body__row table__body__row--view-session flex anchor" data-sessionref="${session.ref}">
                <li class="table__body__row__item">${session.ref}</li>
                <li class="table__body__row__item">${session.name}</li>
                <li class="table__body__row__item">${(0,_datetime__WEBPACK_IMPORTED_MODULE_0__.getStaticDate)(new Date(session.dates.startDate))}</li>
                <li class="table__body__row__item">${(0,_datetime__WEBPACK_IMPORTED_MODULE_0__.getStaticDate)(new Date(session.dates.endDate))}</li>
            </ul>
        `;
  });
  return result;
};
const formatResidentCandidates = candidates => {
  let result = '',
    count = 1;
  candidates.forEach(candidate => {
    result += `
            <div class="vote__positions__position card">
                <div class="vote__positions__position__profile image--back" style="background-size: contain; background-image: url('/assets/uploads/profiles/${candidate.studentNumber}.jpg');"></div>
                <div class="vote__positions__position__details card__body">
                    <div class="checkbox flex flex--a-center">
                        <input type="checkbox" name="candidates" id="candidate-${count}" hidden value="${candidate._id}">
                        <label for="candidate-${count}"></label>
                        <div class="vote__item__back"></div>
                        <p>${candidate.lastname + ' ' + candidate.initials}</p>
                    </div>
                </div>
            </div>
        `;
    count++;
  });
  return result;
};
const formatAdminVotes = votes => {
  let result = '',
    count = 1;
  votes.forEach(vote => {
    result += `
            <ul class="table__body__row flex">
                <li class="table__body__row__item">${count}</li>
                <li class="table__body__row__item">${vote.session.ref}</li>
                <li class="table__body__row__item">${vote.candidate.lastname + ' ' + vote.candidate.initials + ', ' + vote.candidate.studentNumber}</li>
                <li class="table__body__row__item">${vote.count}</li>
            </ul>
        `;
    count++;
  });
  return result;
};

/***/ }),

/***/ "./public/assets/js/src/helpers/modal.js":
/*!***********************************************!*\
  !*** ./public/assets/js/src/helpers/modal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
const openModal = parent => {
  $(`#${parent}-modal`).removeClass('modal--closed');
};
const closeModal = parent => {
  $(`#${parent}-modal`).addClass('modal--closed');
};

/***/ }),

/***/ "./public/assets/js/src/helpers/popup.js":
/*!***********************************************!*\
  !*** ./public/assets/js/src/helpers/popup.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  type,
  title,
  message
}) => {
  if (!$('.popup-container')[0]) $('<div class="popup-container">').appendTo(document.body);
  let popup = $('.popup'),
    length = Array.from(popup).length,
    icon = type == 'error' ? 'exclamation' : 'check';
  $(`
        <div class="popup popup--${type} flex" style="margin-top: ${length * 30}px; z-index: ${length + 1}">
            <div class="popup__icon flex flex--j-center flex--a-center">
                <svg class="image--icon">
                    <use href="#${icon}"></use>
                </svg>
            </div>
            <div class="popup__message">
                <h4>${title}</h4>
                <p>${message}</p>
                <svg class="popup__message__close image--icon">
                    <use href="#cross"></use>
                </svg>
            </div>
        </div>
    `).appendTo($('.popup-container')[0]);
  $($('.popup__message__close')[length]).on('click', e => {
    const popup = $(e.currentTarget.parentElement.parentElement);
    popup.removeClass('popup--open');
    setTimeout(() => {
      popup.remove();
    }, 1000);
  });
  setTimeout(() => {
    $('.popup')[length].classList.add('popup--open');
  }, 200);
});

/***/ }),

/***/ "./public/assets/js/src/helpers/show-error.js":
/*!****************************************************!*\
  !*** ./public/assets/js/src/helpers/show-error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((error, parentId = 'main-error') => {
  const parent = $(`#${parentId}`);
  parent.show();
  $('.error-container__p__text', parent[0]).html(error);
});

/***/ }),

/***/ "./public/assets/js/src/helpers/string.js":
/*!************************************************!*\
  !*** ./public/assets/js/src/helpers/string.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize)
/* harmony export */ });
const capitalize = str => {
  const arr = str.split(' ');
  let newString = '';
  arr.forEach(word => {
    newString += ' ' + word[0] + word.substring(1).toLowerCase();
  });
  return newString;
};

/***/ }),

/***/ "./public/assets/js/src/layouts/index.js":
/*!***********************************************!*\
  !*** ./public/assets/js/src/layouts/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('home', 'home');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('logger', 'logger');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('info', 'info');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('password.manager', 'password.manager');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('admin.default', 'admin.default');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('admin.no.search', 'admin.no.search');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('resident.default', 'resident.default');
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Layout)('thank.you', 'thank.you');
});

/***/ }),

/***/ "./public/assets/js/src/middleware/index.js":
/*!**************************************************!*\
  !*** ./public/assets/js/src/middleware/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./public/assets/js/src/helpers/fetch.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Middleware.repeat(async next => {
    Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('pageParams', Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentParams, true);
    next();
  });
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Middleware.repeat(Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.getRoutesByTag('resident'), async next => {
    if (!Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('userInfo')) Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('userInfo', (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/r/details')).resident, true);
    next();
  });
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Middleware.repeat(Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.getRoutesByTag('admin'), async next => {
    if (!Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('adminInfo')) Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('adminInfo', (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/a/details')).admin, true);
    next();
  });
  Ludr__WEBPACK_IMPORTED_MODULE_0__.Middleware.repeat(['resident.vote'], async next => {
    if (!Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.get('sessionInfo')) Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('sessionInfo', (await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`/session/fetch/${Ludr__WEBPACK_IMPORTED_MODULE_0__.Router.currentParams.sessionId.toUpperCase()}`)).session, true);
    next();
  });
});

/***/ }),

/***/ "./public/assets/js/src/routes/admin.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/routes/admin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.login', {
    title: 'Admin login',
    url: '/a/login',
    layout: 'logger'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.logout', {
    title: 'Resident logout',
    url: '/a/logout'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.sessions', {
    title: 'Voting sessions',
    url: '/a/:username/sessions',
    tags: ['admin'],
    layout: 'admin.default'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.sessions.closed', {
    title: 'Voting sessions',
    url: '/a/:username/sessions/closed',
    tags: ['admin'],
    layout: 'admin.default'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.sessions.residences', {
    title: 'Residences',
    url: '/a/:username/:sessionRef/residences',
    tags: ['admin'],
    layout: 'admin.no.search'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('admin.votes', {
    title: 'Voting results',
    url: '/a/:username/votes/:sessionRef/:residenceName',
    tags: ['admin'],
    layout: 'admin.no.search'
  });
});

/***/ }),

/***/ "./public/assets/js/src/routes/base.js":
/*!*********************************************!*\
  !*** ./public/assets/js/src/routes/base.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('base.hoome', {
    title: 'Home',
    url: '/',
    layout: 'home'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('thank.you', {
    title: 'Thank you for voting',
    url: '/thank-you',
    layout: 'thank.you'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('contact.us', {
    title: 'Thank you for voting',
    url: '/contact-us',
    layout: 'info'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('faq', {
    title: 'Frequently asked questions ',
    url: '/faq',
    layout: 'info'
  });
});

/***/ }),

/***/ "./public/assets/js/src/routes/index.js":
/*!**********************************************!*\
  !*** ./public/assets/js/src/routes/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./public/assets/js/src/routes/base.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin */ "./public/assets/js/src/routes/admin.js");
/* harmony import */ var _resident__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resident */ "./public/assets/js/src/routes/resident.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_base__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_admin__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_resident__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./public/assets/js/src/routes/resident.js":
/*!*************************************************!*\
  !*** ./public/assets/js/src/routes/resident.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.register', {
    title: 'Resident register',
    url: '/register',
    layout: 'logger'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.register.verify', {
    title: 'Resident register',
    url: '/register/verify',
    layout: 'logger'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.password.reset', {
    title: 'Resident password reset',
    url: '/password/reset',
    layout: 'password.manager'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.password.renew', {
    title: 'Resident forgot renew',
    url: '/password/renew',
    layout: 'password.manager'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.login', {
    title: 'Resident login',
    url: '/login',
    layout: 'logger'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.sessions', {
    title: 'Resident sessions',
    url: '/r/:username/sessions',
    tags: ['resident'],
    layout: 'resident.default'
  });
  (0,Ludr__WEBPACK_IMPORTED_MODULE_0__.Route)('resident.vote', {
    title: 'Resident vote',
    url: '/r/:username/:sessionId/vote',
    tags: ['resident'],
    layout: 'resident.default'
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./public/assets/js/src/app.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Ludr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Ludr */ "../Ludr/index.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "./public/assets/js/src/middleware/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts */ "./public/assets/js/src/layouts/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./public/assets/js/src/components/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./public/assets/js/src/routes/index.js");
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups */ "./public/assets/js/src/groups/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events */ "./public/assets/js/src/events/index.js");







Ludr__WEBPACK_IMPORTED_MODULE_0__.Singleton.put('link-active', 'sidenav__top__item--active');
(0,_routes__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_layouts__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_groups__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_events__WEBPACK_IMPORTED_MODULE_6__["default"])();
Ludr__WEBPACK_IMPORTED_MODULE_0__["default"].Config.showInfo = true;
Ludr__WEBPACK_IMPORTED_MODULE_0__["default"].Config.pageTitle = 'Res Elections';
Ludr__WEBPACK_IMPORTED_MODULE_0__["default"].Load();
})();

/******/ })()
;