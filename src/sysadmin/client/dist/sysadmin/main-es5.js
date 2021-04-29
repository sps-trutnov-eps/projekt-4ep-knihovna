(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+XE+":
    /*!*****************************************!*\
      !*** ./src/app/alerts/alert.service.ts ***!
      \*****************************************/

    /*! exports provided: AlertService */

    /***/
    function XE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var _alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert-type */
      "ZcUV");
      /* harmony import */


      var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert */
      "J7PR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.active = [];
        }

        _createClass(AlertService, [{
          key: "show",
          value: function show(message) {
            var _this = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].info;
            var alert = new _alert__WEBPACK_IMPORTED_MODULE_1__["Alert"](message, type);
            this.active.push(alert);
            setTimeout(function () {
              return _this.active.shift();
            }, 2000);
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)();
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "/yrG":
    /*!************************************************************************!*\
      !*** ./src/app/http-interceptors/with-credentials-http-interceptor.ts ***!
      \************************************************************************/

    /*! exports provided: WithCredentialsHttpInterceptor */

    /***/
    function yrG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithCredentialsHttpInterceptor", function () {
        return WithCredentialsHttpInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WithCredentialsHttpInterceptor = /*#__PURE__*/function () {
        function WithCredentialsHttpInterceptor() {
          _classCallCheck(this, WithCredentialsHttpInterceptor);
        }

        _createClass(WithCredentialsHttpInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var requestWithCredentials = request.clone({
              withCredentials: true
            });
            return next.handle(requestWithCredentials);
          }
        }]);

        return WithCredentialsHttpInterceptor;
      }();

      WithCredentialsHttpInterceptor.ɵfac = function WithCredentialsHttpInterceptor_Factory(t) {
        return new (t || WithCredentialsHttpInterceptor)();
      };

      WithCredentialsHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WithCredentialsHttpInterceptor,
        factory: WithCredentialsHttpInterceptor.ɵfac
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\senkyr\OneDrive - Střední průmyslová škola, Trutnov, Školní 101\Archive\SPS\projekty\2019-20\2019p2\trida-4ep\projekt-4ep\src\sysadmin\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "14tG":
    /*!*******************************************!*\
      !*** ./src/app/app-initialize.service.ts ***!
      \*******************************************/

    /*! exports provided: AppInitializeService */

    /***/
    function tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInitializeService", function () {
        return AppInitializeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/users/user.service */
      "AE6H");
      /* harmony import */


      var _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/sign-in/sign-in.service */
      "1Td7");

      var AppInitializeService = /*#__PURE__*/function () {
        function AppInitializeService(userService, signInService) {
          _classCallCheck(this, AppInitializeService);

          this.userService = userService;
          this.signInService = signInService;
        }

        _createClass(AppInitializeService, [{
          key: "intialize",
          value: function intialize() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userService.getSignedIn().toPromise();

                    case 2:
                      user = _context.sent;
                      if (user !== null) this.signInService.signIn(user);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppInitializeService;
      }();

      AppInitializeService.ɵfac = function AppInitializeService_Factory(t) {
        return new (t || AppInitializeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]));
      };

      AppInitializeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AppInitializeService,
        factory: AppInitializeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "1Td7":
    /*!*************************************************!*\
      !*** ./src/app/core/sign-in/sign-in.service.ts ***!
      \*************************************************/

    /*! exports provided: SignInService */

    /***/
    function Td7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInService", function () {
        return SignInService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignInService = /*#__PURE__*/function () {
        function SignInService() {
          _classCallCheck(this, SignInService);

          this.signedUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._signedUser = null;
        }

        _createClass(SignInService, [{
          key: "signedUser",
          get: function get() {
            return this._signedUser;
          }
        }, {
          key: "signIn",
          value: function signIn(user) {
            this._signedUser = user;
            this.signedUserChanged.emit();
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this._signedUser = null;
            this.signedUserChanged.emit();
          }
        }]);

        return SignInService;
      }();

      SignInService.ɵfac = function SignInService_Factory(t) {
        return new (t || SignInService)();
      };

      SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SignInService,
        factory: SignInService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "20UA":
    /*!*********************************!*\
      !*** ./src/app/core/api/api.ts ***!
      \*********************************/

    /*! exports provided: API_URL */

    /***/
    function UA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Url of api root.");
      /***/
    },

    /***/
    "3l7y":
    /*!************************************************************************!*\
      !*** ./src/app/pages/app/main-navigation/main-navigation.component.ts ***!
      \************************************************************************/

    /*! exports provided: SIGN_OUT_URL, USER_MODULE_URL, LIBRARIAN_MODULE_URL, MainNavigationComponent */

    /***/
    function l7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIGN_OUT_URL", function () {
        return SIGN_OUT_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_MODULE_URL", function () {
        return USER_MODULE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIBRARIAN_MODULE_URL", function () {
        return LIBRARIAN_MODULE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function () {
        return MainNavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/sign-in/sign-in.service */
      "1Td7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MainNavigationComponent_ng_container_3_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Knihovn\xEDk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.librarianModuleUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function MainNavigationComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " U\u017Eivatel\xE9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " U\u017Eivatel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainNavigationComponent_ng_container_3_a_11_Template, 3, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavigationComponent_ng_container_3_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Odhl\xE1sit se ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.userModuleUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signedUser.isLibrarian);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.signedUser.userName, " ");
        }
      }

      var SIGN_OUT_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Sign out page url.");
      var USER_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("User module root page url.");
      var LIBRARIAN_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Librarian module root page url.");

      var MainNavigationComponent = /*#__PURE__*/function () {
        function MainNavigationComponent(signInService, signOutUrl, userModuleUrl, librarianModuleUrl, location) {
          _classCallCheck(this, MainNavigationComponent);

          this.signInService = signInService;
          this.signOutUrl = signOutUrl;
          this.userModuleUrl = userModuleUrl;
          this.librarianModuleUrl = librarianModuleUrl;
          this.location = location;
        }

        _createClass(MainNavigationComponent, [{
          key: "signedUser",
          get: function get() {
            return this.signInService.signedUser;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.signInService.signOut();
            window.location.href = this.signOutUrl + "?redirectUrl=" + this.userModuleUrl;
          }
        }]);

        return MainNavigationComponent;
      }();

      MainNavigationComponent.ɵfac = function MainNavigationComponent_Factory(t) {
        return new (t || MainNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SIGN_OUT_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](USER_MODULE_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LIBRARIAN_MODULE_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
      };

      MainNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainNavigationComponent,
        selectors: [["app-main-navigation"]],
        decls: 4,
        vars: 1,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/", 1, "navbar-brand"], [4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-user-friends"], [1, "nav-item", "nav-link", 3, "href"], [1, "fas", "fa-book"], ["class", "nav-item nav-link", 3, "href", 4, "ngIf"], [1, "dropdown"], ["role", "button", "id", "userDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle", "nav-item", "nav-link", "active", "text-left", "border-0"], [1, "fas", "fa-user"], ["aria-labelledby", "userDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "btn", "btn-link", "pl-3", 3, "click"], [1, "fas", "fa-sign-out-alt", "pr-1"], [1, "fas", "fa-book-medical"]],
        template: function MainNavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Knihovna SP\u0160 Trutnov");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainNavigationComponent_ng_container_3_Template, 20, 3, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedUser !== null);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "5vRF":
    /*!********************************************!*\
      !*** ./src/app/pages/app/app.component.ts ***!
      \********************************************/

    /*! exports provided: AppComponent */

    /***/
    function vRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main-navigation/main-navigation.component */
      "3l7y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-footer/main-footer.component */
      "AYlX");
      /* harmony import */


      var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../alerts/alert-view/alert-view.component */
      "bDBe");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "router-outlet-flex-grow-1"], [1, "fixed-top", "p-5", "alert-view-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-alert-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_1__["MainNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__["MainFooterComponent"], _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_4__["AlertViewComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.alert-view-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWxlcnQtdmlldy1jb250YWluZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "7BV3":
    /*!************************************************************!*\
      !*** ./src/app/core/users/user-name-already-used-error.ts ***!
      \************************************************************/

    /*! exports provided: UserNameAlreadyUsedError */

    /***/
    function BV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserNameAlreadyUsedError", function () {
        return UserNameAlreadyUsedError;
      });

      var UserNameAlreadyUsedError = /*#__PURE__*/function (_Error) {
        _inherits(UserNameAlreadyUsedError, _Error);

        var _super = _createSuper(UserNameAlreadyUsedError);

        function UserNameAlreadyUsedError() {
          _classCallCheck(this, UserNameAlreadyUsedError);

          return _super.apply(this, arguments);
        }

        return UserNameAlreadyUsedError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      /***/

    },

    /***/
    "AE6H":
    /*!********************************************!*\
      !*** ./src/app/core/users/user.service.ts ***!
      \********************************************/

    /*! exports provided: UserService */

    /***/
    function AE6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user */
      "EKWA");
      /* harmony import */


      var _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-name-already-used-error */
      "7BV3");
      /* harmony import */


      var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api/api */
      "20UA");
      /* harmony import */


      var _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-has-active-borrows-error */
      "bid+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserService = /*#__PURE__*/function () {
        function UserService(httpClient, apiUrl) {
          _classCallCheck(this, UserService);

          this.httpClient = httpClient;
          this.apiUrl = apiUrl;
        }

        _createClass(UserService, [{
          key: "getAll",
          value: function getAll() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var parameters = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, options.idFilter !== undefined && {
              "id-filter": options.idFilter.toString()
            }), options.userNameFilter !== undefined && {
              "user-name-filter": options.userNameFilter
            }), options.firstNameFilter !== undefined && {
              "first-name-filter": options.firstNameFilter
            }), options.lastNameFilter !== undefined && {
              "last-name-filter": options.lastNameFilter
            }), options.emailFilter !== undefined && {
              "email-filter": options.emailFilter
            }), options.isLibrarianFilter !== undefined && {
              "is-librarian-filter": options.isLibrarianFilter.toString()
            }), options.isAdministratorFilter !== undefined && {
              "is-administrator-filter": options.isAdministratorFilter.toString()
            });
            return this.httpClient.get("".concat(this.apiUrl, "/users/index.php"), {
              params: parameters
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
              return u.map(function (u) {
                return new _user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
              });
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.httpClient.get("".concat(this.apiUrl, "/users/index.php?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
              return new _user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
            }));
          }
        }, {
          key: "getSignedIn",
          value: function getSignedIn() {
            return this.httpClient.get("".concat(this.apiUrl, "/users/index.php?id=")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
              return e.status === 401 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
              return u === null ? null : new _user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
            }));
          }
        }, {
          key: "add",
          value: function add(user, password) {
            var id = user.id,
                withoutId = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(user, ["id"]);
            var withPassword = Object.assign(Object.assign({}, withoutId), {
              password: password
            });
            return this.httpClient.post("".concat(this.apiUrl, "/users/index.php"), withPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
              return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
              return new _user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
            }));
          }
        }, {
          key: "update",
          value: function update(user, password) {
            var userData = password === undefined ? user : Object.assign(Object.assign({}, user), {
              password: password
            });
            return this.httpClient.put("".concat(this.apiUrl, "/users/index.php?id=").concat(user.id), userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
              return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
              return new _user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
            }));
          }
        }, {
          key: "remove",
          value: function remove(user) {
            return this.httpClient["delete"]("".concat(this.apiUrl, "/users/index.php?id=").concat(user.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
              return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_6__["UserHasActiveBorrowsError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_api_api__WEBPACK_IMPORTED_MODULE_5__["API_URL"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AYlX":
    /*!****************************************************************!*\
      !*** ./src/app/pages/app/main-footer/main-footer.component.ts ***!
      \****************************************************************/

    /*! exports provided: MainFooterComponent */

    /***/
    function AYlX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function () {
        return MainFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MainFooterComponent = function MainFooterComponent() {
        _classCallCheck(this, MainFooterComponent);
      };

      MainFooterComponent.ɵfac = function MainFooterComponent_Factory(t) {
        return new (t || MainFooterComponent)();
      };

      MainFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainFooterComponent,
        selectors: [["app-main-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "p-1", "pr-2", "text-muted", "text-right", "text-sm"], ["href", "https://www.spstrutnov.cz", "target", "_blank"]],
        template: function MainFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Administrace knihovny ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SP\u0160 Trutnov");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Ag98":
    /*!************************************************!*\
      !*** ./src/app/pages/users/users.component.ts ***!
      \************************************************/

    /*! exports provided: UsersComponent */

    /***/
    function Ag98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_core_users_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/users/user */
      "EKWA");
      /* harmony import */


      var _user_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-view-model */
      "mt7z");
      /* harmony import */


      var src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/alerts/alert-type */
      "ZcUV");
      /* harmony import */


      var src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/users/user-name-already-used-error */
      "7BV3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/users/user-has-active-borrows-error */
      "bid+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/users/user.service */
      "AE6H");
      /* harmony import */


      var src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/alerts/alert.service */
      "+XE+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UsersComponent_tr_44_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r4.original.id);
        }
      }

      function UsersComponent_tr_44_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 33);
        }
      }

      function UsersComponent_tr_44_i_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_tr_44_i_26_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.remove(user_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_tr_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UsersComponent_tr_44_ng_container_2_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UsersComponent_tr_44_i_3_Template, 1, 0, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_5_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newUserName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_7_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_9_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newFirstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_11_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newLastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_13_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_16_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newIsLibrarian = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_19_listener($event) {
            var user_r4 = ctx.$implicit;
            return user_r4.newIsAdministrator = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);

            var user_r4 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r19.save(user_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Ulo\u017Eit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);

            var user_r4 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r21.discard(user_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Zahodit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, UsersComponent_tr_44_i_26_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("table-warning", (user_r4.isChanged || user_r4.original === null) && user_r4 !== ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r4.original !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r4.original === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", !user_r4.isUserNameValid && user_r4 !== ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newUserName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", !user_r4.isPasswordValid && user_r4 !== ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", user_r4.original === null ? "Nevypln\u011Bno" : "Nezm\u011Bn\u011Bno")("ngModel", user_r4.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newFirstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newLastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", !user_r4.isEmailValid && user_r4 !== ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newIsLibrarian);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", user_r4.newIsAdministrator);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invisible", !user_r4.isChanged && user_r4.original !== null || user_r4 === ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !user_r4.isValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invisible", !user_r4.isChanged && user_r4.original !== null || user_r4 === ctx_r0.newUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r4.original !== null);
        }
      }

      function UsersComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Na\u010D\xEDt\xE1n\xED...");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Datab\xE1ze neobsahuje \u017E\xE1dn\xE9 z\xE1znamy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UsersComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Podle zadan\xFDch krit\xE9ri\xED nebyly nalezeny \u017E\xE1dn\xE9 z\xE1znamy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(userService, alertService) {
          var _this2 = this;

          _classCallCheck(this, UsersComponent);

          this.userService = userService;
          this.alertService = alertService;
          this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", this.idFilterValidator),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            isLibrarian: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
            isAdministrator: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false)
          });
          this.filterForm.valueChanges.subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.users = undefined;
                      _context2.next = 3;
                      return this.refreshUsers();

                    case 3:
                      if (!this.isFiltred) this.addNewUser();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }

        _createClass(UsersComponent, [{
          key: "hasChanges",
          get: function get() {
            var _this3 = this;

            return this.users !== undefined && this.users.some(function (u) {
              return (u.isChanged || u.original === null) && u !== _this3.newUser;
            });
          }
        }, {
          key: "isAllValid",
          get: function get() {
            var _this4 = this;

            return this.users === undefined || this.users.every(function (u) {
              return u.isValid || u === _this4.newUser;
            });
          }
        }, {
          key: "isFiltred",
          get: function get() {
            return this.filterForm.get("id").value != "" || this.filterForm.get("userName").value != "" || this.filterForm.get("firstName").value != "" || this.filterForm.get("lastName").value != "" || this.filterForm.get("email").value != "" || this.filterForm.get("isLibrarian").value != false || this.filterForm.get("isAdministrator").value != false;
          }
        }, {
          key: "isIdFilterValid",
          get: function get() {
            return !this.filterForm.get("id").invalid;
          }
        }, {
          key: "changesText",
          get: function get() {
            if (this.users === undefined) return "";
            var changesCount = this.users.filter(function (u) {
              return u.isChanged;
            }).length;
            if (changesCount === 0) return "";else if (changesCount === 1) return "".concat(changesCount, " zm\u011Bna.");else if (changesCount > 1 && changesCount < 5) return "".concat(changesCount, " zm\u011Bny.");else return "".concat(changesCount, " zm\u011Bn.");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.refreshUsers();

                    case 2:
                      this.addNewUser();

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.newUser != undefined && this.newUser.isChanged) this.addNewUser();
            if (this.hasChanges) this.filterForm.disable({
              emitEvent: false
            });else this.filterForm.enable({
              emitEvent: false
            });
          }
        }, {
          key: "refreshUsers",
          value: function refreshUsers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var idFilterControl, idFilter, userNameFilter, firstNameFilter, lastNameFilter, emailFilter, isLibrarianFilter, isAdministratorFilter, options;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      idFilterControl = this.filterForm.get("id");
                      idFilter = idFilterControl.value;
                      userNameFilter = this.filterForm.get("userName").value;
                      firstNameFilter = this.filterForm.get("firstName").value;
                      lastNameFilter = this.filterForm.get("lastName").value;
                      emailFilter = this.filterForm.get("email").value;
                      isLibrarianFilter = this.filterForm.get("isLibrarian").value;
                      isAdministratorFilter = this.filterForm.get("isAdministrator").value;
                      options = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, idFilter !== "" && !idFilterControl.invalid && {
                        idFilter: parseInt(idFilter)
                      }), userNameFilter !== "" && {
                        userNameFilter: userNameFilter
                      }), firstNameFilter !== "" && {
                        firstNameFilter: firstNameFilter
                      }), lastNameFilter !== "" && {
                        lastNameFilter: lastNameFilter
                      }), emailFilter !== "" && {
                        emailFilter: emailFilter
                      }), isLibrarianFilter !== false && {
                        isLibrarianFilter: isLibrarianFilter
                      }), isAdministratorFilter !== false && {
                        isAdministratorFilter: isAdministratorFilter
                      });
                      _context4.next = 11;
                      return this.userService.getAll(options).toPromise();

                    case 11:
                      this.users = _context4.sent.map(function (u) {
                        return new _user_view_model__WEBPACK_IMPORTED_MODULE_2__["UserViewModel"](u, u.userName, "", u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
                      });

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addNewUser",
          value: function addNewUser() {
            this.newUser = new _user_view_model__WEBPACK_IMPORTED_MODULE_2__["UserViewModel"](null, "", "", "", "", "", false, false);
            this.users.unshift(this.newUser);
          }
        }, {
          key: "save",
          value: function save(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var newUser, u, newPassword, _u;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(user.original != null)) {
                        _context5.next = 17;
                        break;
                      }

                      u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_1__["User"](user.original.id, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                      newPassword = user.newPassword === "" ? undefined : user.newPassword;
                      _context5.prev = 3;
                      _context5.next = 6;
                      return this.userService.update(u, newPassword).toPromise();

                    case 6:
                      newUser = _context5.sent;
                      _context5.next = 15;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](3);

                      if (!(_context5.t0 instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__["UserNameAlreadyUsedError"])) {
                        _context5.next = 14;
                        break;
                      }

                      this.alertService.show("U\u017Eivatelsk\xE9 jm\xE9no '".concat(u.userName, "' ji\u017E pou\u017E\xEDv\xE1 n\u011Bkdo jin\xFD."), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error);
                      return _context5.abrupt("return");

                    case 14:
                      throw _context5.t0;

                    case 15:
                      _context5.next = 30;
                      break;

                    case 17:
                      _u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_1__["User"](0, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                      _context5.prev = 18;
                      _context5.next = 21;
                      return this.userService.add(_u, user.newPassword).toPromise();

                    case 21:
                      newUser = _context5.sent;
                      _context5.next = 30;
                      break;

                    case 24:
                      _context5.prev = 24;
                      _context5.t1 = _context5["catch"](18);

                      if (!(_context5.t1 instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_4__["UserNameAlreadyUsedError"])) {
                        _context5.next = 29;
                        break;
                      }

                      this.alertService.show("U\u017Eivatelsk\xE9 jm\xE9no '".concat(_u.userName, "' ji\u017E pou\u017E\xEDv\xE1 n\u011Bkdo jin\xFD."), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error);
                      return _context5.abrupt("return");

                    case 29:
                      throw _context5.t1;

                    case 30:
                      user.original = newUser;
                      user.resetToOriginal();

                    case 32:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[3, 9], [18, 24]]);
            }));
          }
        }, {
          key: "discard",
          value: function discard(user) {
            if (user.original == null) this.users.splice(this.users.indexOf(user), 1);else user.resetToOriginal();
          }
        }, {
          key: "remove",
          value: function remove(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.userService.remove(user.original).toPromise();

                    case 3:
                      this.users.splice(this.users.indexOf(user), 1);
                      _context6.next = 12;
                      break;

                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](0);

                      if (!(_context6.t0 instanceof src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_6__["UserHasActiveBorrowsError"])) {
                        _context6.next = 11;
                        break;
                      }

                      this.alertService.show("Nelze smazat uživatele s aktivními výpůjčkami.", src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error);
                      return _context6.abrupt("return");

                    case 11:
                      throw _context6.t0;

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 6]]);
            }));
          }
        }, {
          key: "saveAll",
          value: function saveAll() {
            var _this5 = this;

            this.users.filter(function (u) {
              return u.isChanged;
            }).forEach(function (u) {
              return _this5.save(u);
            });
          }
        }, {
          key: "discardAll",
          value: function discardAll() {
            var _this6 = this;

            this.users.filter(function (u) {
              return u.isChanged || u.original === null && u !== _this6.newUser;
            }).forEach(function (u) {
              return _this6.discard(u);
            });
          }
        }, {
          key: "idFilterValidator",
          value: function idFilterValidator(control) {
            if (/^(0|(-?[1-9][0-9]*)|)$/.test(control.value)) return null;else return {
              invalidId: true
            };
          }
        }, {
          key: "import",
          value: function _import() {
            var _this7 = this;

            var kontrola = 0;
            var validniRadky = [];
            var element = document.createElement("input");
            element.type = "file";
            element.addEventListener("change", function () {
              var file = element.files[0];
              var reader = new FileReader();
              reader.readAsText(file, "UTF-8");

              reader.onload = function () {
                var soubor = reader.result;
                var radky = soubor.split(/\r\n?|\n/);

                for (var i = 0; i < radky.length; i++) {
                  var atributyUsera = radky[i].split(",");

                  if (atributyUsera.length != 7 || atributyUsera[5] != "true" && atributyUsera[5] != "false" || atributyUsera[6] != "true" && atributyUsera[6] != "false") {
                    _this7.alertService.show("Chyba na řádku " + (i + 1), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error);

                    kontrola++;
                  } else {
                    validniRadky.push(atributyUsera);
                  }
                }

                if (kontrola == 0) {
                  for (var _i = 0; _i < radky.length; _i++) {
                    var validniRadek = validniRadky.pop();
                    var uzivatel = new _user_view_model__WEBPACK_IMPORTED_MODULE_2__["UserViewModel"](null, validniRadek[0], validniRadek[1], validniRadek[2], validniRadek[3], validniRadek[4], validniRadek[5] === "true", validniRadek[6] === "true");

                    _this7.users.unshift(uzivatel);
                  }
                }
              };
            });
            element.click();
          }
        }, {
          key: "export",
          value: function _export() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var soubor, uzivatele, i, uzivatel;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      soubor = "";
                      _context7.next = 3;
                      return this.userService.getAll().toPromise();

                    case 3:
                      uzivatele = _context7.sent;

                      for (i = 0; i < uzivatele.length; i++) {
                        uzivatel = uzivatele[i];
                        if (i != 0) soubor += "\n";
                        soubor += uzivatel.userName;
                        soubor += ",";
                        soubor += uzivatel.firstName;
                        soubor += ",";
                        soubor += uzivatel.lastName;
                        soubor += ",";
                        soubor += uzivatel.email;
                        soubor += ",";
                        soubor += uzivatel.isLibrarian;
                        soubor += ",";
                        soubor += uzivatel.isAdministrator;
                      }

                      this.downloadBlob("Sysadmin - export uživatelů.txt", new Blob([soubor]));

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "downloadBlob",
          value: function downloadBlob(fileName, blob) {
            var url = URL.createObjectURL(blob);
            var linkElement = document.createElement("a");
            linkElement.download = fileName;
            linkElement.href = url;
            linkElement.click();
            URL.revokeObjectURL(url);
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.ɵfac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]));
      };

      UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: UsersComponent,
        selectors: [["app-users"]],
        decls: 48,
        vars: 13,
        consts: [[1, "d-flex", "align-items-center"], [1, "m-4", "flex-grow-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "btn", "btn-secondary", "m-1", "mr-4", 3, "click"], [1, "table", "table-striped", "table-hover"], [3, "formGroup"], [1, "sticky-top", "bg-white", "table-column-id"], ["type", "text", "formControlName", "id", 1, "form-control", "form-control-sm"], [1, "table-column-fill", "sticky-top", "bg-white"], ["type", "text", "formControlName", "userName", 1, "form-control", "form-control-sm"], [1, "table-column-fill", "sticky-top", "bg-white", "align-top"], ["type", "text", "formControlName", "firstName", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "lastName", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "email", 1, "form-control", "form-control-sm"], [1, "sticky-top", "bg-white"], [1, "form-check", "text-center"], ["type", "checkbox", "formControlName", "isLibrarian", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer"], ["type", "checkbox", "formControlName", "isAdministrator", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer"], [1, "sticky-top", "bg-white", "text-nowrap"], [1, "text-muted", "font-weight-normal", "text-center", "d-block", "pb-1"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "disabled", "click"], [1, "btn", "btn-sm", "btn-danger", "ml-1", 3, "click"], [3, "table-warning", 4, "ngFor", "ngForOf"], ["class", "flex-grow-1 d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "table-column-id", "align-middle"], [4, "ngIf"], ["class", "fas fa-plus", 4, "ngIf"], [1, "table-column-fill"], ["placeholder", "Nevypln\u011Bno", "type", "text", 1, "form-control", "form-control-sm", "editable-cell", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "form-control", "form-control-sm", "editable-cell", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "checkbox", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer", 3, "ngModel", "ngModelChange"], [1, "pr-0", "text-nowrap"], ["class", "fas fa-trash fa-2x cursor-pointer text-muted", "style", "font-size: 1.5em", 3, "click", 4, "ngIf"], [1, "fas", "fa-plus"], [1, "fas", "fa-trash", "fa-2x", "cursor-pointer", "text-muted", 2, "font-size", "1.5em", 3, "click"], [1, "flex-grow-1", "d-flex", "justify-content-center", "align-items-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "text-muted"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "U\u017Eivatel\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_3_listener() {
              return ctx["export"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Exportovat");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_5_listener() {
              return ctx["import"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Importovat");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " U\u017Eivatelsk\xE9 jm\xE9no ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Heslo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Jm\xE9no ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " P\u0159\xEDjmen\xED ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Knihovn\xEDk ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Administr\xE1tor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "small", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_38_listener() {
              return ctx.saveAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Ulo\u017Eit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_40_listener() {
              return ctx.discardAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Zahodit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, UsersComponent_tr_44_Template, 27, 24, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, UsersComponent_div_45_Template, 4, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, UsersComponent_div_46_Template, 3, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, UsersComponent_div_47_Template, 3, 0, "div", 23);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", !ctx.isIdFilterValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.changesText);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invisible", !ctx.hasChanges);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAllValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invisible", !ctx.hasChanges);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.users === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.users !== undefined && ctx.users.length === 1 && !ctx.isFiltred);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.users !== undefined && ctx.users.length === 0 && ctx.isFiltred);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.editable-cell[_ngcontent-%COMP%] {\n  background: initial;\n  border: none;\n  box-shadow: none !important;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%]::placeholder {\n  color: #dc3545;\n}\n\n.table-column-fill[_ngcontent-%COMP%] {\n  width: calc(100% / 5);\n}\n\n.table-column-id[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFGQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5lZGl0YWJsZS1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZCB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi50YWJsZS1jb2x1bW4tZmlsbCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XHJcbn1cclxuXHJcbi50YWJsZS1jb2x1bW4taWQge1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dC1ub3dyYXAge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "EKWA":
    /*!************************************!*\
      !*** ./src/app/core/users/user.ts ***!
      \************************************/

    /*! exports provided: User */

    /***/
    function EKWA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User(id, userName, firstName, lastName, email, isLibrarian, isAdministrator) {
        _classCallCheck(this, User);

        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isLibrarian = isLibrarian;
        this.isAdministrator = isAdministrator;
      };
      /***/

    },

    /***/
    "J7PR":
    /*!*********************************!*\
      !*** ./src/app/alerts/alert.ts ***!
      \*********************************/

    /*! exports provided: Alert */

    /***/
    function J7PR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return Alert;
      });

      var Alert = function Alert(message, type) {
        _classCallCheck(this, Alert);

        this.message = message;
        this.type = type;
      };
      /***/

    },

    /***/
    "W0X1":
    /*!***********************************************!*\
      !*** ./src/app/routing/app-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function W0X1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pages/users/users.component */
      "Ag98");
      /* harmony import */


      var _can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./can-activates/signed-in-can-activate */
      "ouvD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "users",
        component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"],
        canActivate: [_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_2__["SignedInCanActivate"]]
      }, {
        path: "**",
        redirectTo: "users"
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createAppInitializer, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createAppInitializer", function () {
        return createAppInitializer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./routing/app-routing.module */
      "W0X1");
      /* harmony import */


      var _pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/app/app.component */
      "5vRF");
      /* harmony import */


      var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/users/users.component */
      "Ag98");
      /* harmony import */


      var _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/app/main-navigation/main-navigation.component */
      "3l7y");
      /* harmony import */


      var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./alerts/alert-view/alert-view.component */
      "bDBe");
      /* harmony import */


      var _core_api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./core/api/api */
      "20UA");
      /* harmony import */


      var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dialogs/confirm-dialog/confirm-dialog.component */
      "mXJ6");
      /* harmony import */


      var _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/app/main-footer/main-footer.component */
      "AYlX");
      /* harmony import */


      var _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./routing/can-activates/signed-in-can-activate */
      "ouvD");
      /* harmony import */


      var _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./http-interceptors/with-credentials-http-interceptor */
      "/yrG");
      /* harmony import */


      var _app_initialize_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app-initialize.service */
      "14tG");

      function createAppInitializer(appInitializeService) {
        var _this8 = this;

        return function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return appInitializeService.intialize();

                  case 2:
                    return _context8.abrupt("return", _context8.sent);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__["WithCredentialsHttpInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
          useFactory: createAppInitializer,
          deps: [_app_initialize_service__WEBPACK_IMPORTED_MODULE_15__["AppInitializeService"]],
          multi: true
        }, {
          provide: _core_api_api__WEBPACK_IMPORTED_MODULE_10__["API_URL"],
          useValue: "/knihovna/sysadmin/api"
        }, {
          provide: _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__["SIGN_IN_URL"],
          useValue: "/knihovna/authentication/signIn.php"
        }, {
          provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["SIGN_OUT_URL"],
          useValue: "/knihovna/authentication/signOut.php"
        }, {
          provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["USER_MODULE_URL"],
          useValue: "/knihovna/uzivatel"
        }, {
          provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["LIBRARIAN_MODULE_URL"],
          useValue: "/knihovna/knihovnik"
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["MainNavigationComponent"], _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__["AlertViewComponent"], _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__["MainFooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZcUV":
    /*!**************************************!*\
      !*** ./src/app/alerts/alert-type.ts ***!
      \**************************************/

    /*! exports provided: AlertType */

    /***/
    function ZcUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return AlertType;
      });

      var AlertType;

      (function (AlertType) {
        AlertType[AlertType["info"] = 0] = "info";
        AlertType[AlertType["warning"] = 1] = "warning";
        AlertType[AlertType["error"] = 2] = "error";
      })(AlertType || (AlertType = {}));
      /***/

    },

    /***/
    "bDBe":
    /*!***********************************************************!*\
      !*** ./src/app/alerts/alert-view/alert-view.component.ts ***!
      \***********************************************************/

    /*! exports provided: AlertViewComponent */

    /***/
    function bDBe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertViewComponent", function () {
        return AlertViewComponent;
      });
      /* harmony import */


      var _alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../alert-type */
      "ZcUV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../alert.service */
      "+XE+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AlertViewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("m-1 shadow-sm alert " + ctx_r0.getAlertClass(alert_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", alert_r1.message, "\n");
        }
      }

      var AlertViewComponent = /*#__PURE__*/function () {
        function AlertViewComponent(alertService) {
          _classCallCheck(this, AlertViewComponent);

          this.alertService = alertService;
        }

        _createClass(AlertViewComponent, [{
          key: "activeAlerts",
          get: function get() {
            return this.alertService.active;
          }
        }, {
          key: "getAlertClass",
          value: function getAlertClass(alert) {
            switch (alert.type) {
              case _alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].warning:
                return "alert-warning";

              case _alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].error:
                return "alert-danger";

              default:
                return "alert-info";
            }
          }
        }]);

        return AlertViewComponent;
      }();

      AlertViewComponent.ɵfac = function AlertViewComponent_Factory(t) {
        return new (t || AlertViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]));
      };

      AlertViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AlertViewComponent,
        selectors: [["app-alert-view"]],
        decls: 1,
        vars: 1,
        consts: [[3, "class", 4, "ngFor", "ngForOf"]],
        template: function AlertViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertViewComponent_div_0_Template, 2, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activeAlerts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "bid+":
    /*!*************************************************************!*\
      !*** ./src/app/core/users/user-has-active-borrows-error.ts ***!
      \*************************************************************/

    /*! exports provided: UserHasActiveBorrowsError */

    /***/
    function bid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserHasActiveBorrowsError", function () {
        return UserHasActiveBorrowsError;
      });

      var UserHasActiveBorrowsError = /*#__PURE__*/function (_Error2) {
        _inherits(UserHasActiveBorrowsError, _Error2);

        var _super2 = _createSuper(UserHasActiveBorrowsError);

        function UserHasActiveBorrowsError() {
          _classCallCheck(this, UserHasActiveBorrowsError);

          return _super2.apply(this, arguments);
        }

        return UserHasActiveBorrowsError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      /***/

    },

    /***/
    "mXJ6":
    /*!********************************************************************!*\
      !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
      \********************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function mXJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["modal"];

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent() {
          _classCallCheck(this, ConfirmDialogComponent);

          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.confirmed = false;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this9 = this;

            // @ts-ignore
            var modalElement = $(this.modal.nativeElement);
            modalElement.modal({});
            modalElement.on("hidden.bs.modal", function () {
              return _this9.close.emit(_this9.confirmed);
            });
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)();
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        viewQuery: function ConfirmDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          }
        },
        inputs: {
          title: "title",
          message: "message"
        },
        outputs: {
          close: "close"
        },
        decls: 17,
        vars: 2,
        consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["modal", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ne");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_15_listener() {
              return ctx.confirmed = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ano");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "mt7z":
    /*!************************************************!*\
      !*** ./src/app/pages/users/user-view-model.ts ***!
      \************************************************/

    /*! exports provided: UserViewModel */

    /***/
    function mt7z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserViewModel", function () {
        return UserViewModel;
      });

      var UserViewModel = /*#__PURE__*/function () {
        function UserViewModel(original, newUserName, newPassword, newFirstName, newLastName, newEmail, newIsLibrarian, newIsAdministrator) {
          _classCallCheck(this, UserViewModel);

          this.original = original;
          this.newUserName = newUserName;
          this.newPassword = newPassword;
          this.newFirstName = newFirstName;
          this.newLastName = newLastName;
          this.newEmail = newEmail;
          this.newIsLibrarian = newIsLibrarian;
          this.newIsAdministrator = newIsAdministrator;
        }

        _createClass(UserViewModel, [{
          key: "isChanged",
          get: function get() {
            if (this.original == null) {
              return this.newUserName !== "" || this.newPassword !== "" || this.newFirstName !== "" || this.newLastName !== "" || this.newEmail !== "" || this.newIsLibrarian !== false || this.newIsAdministrator !== false;
            } else {
              return this.newUserName !== this.original.userName || this.newPassword !== "" || this.newFirstName !== this.original.firstName || this.newLastName !== this.original.lastName || this.newEmail !== this.original.email || this.newIsLibrarian !== this.original.isLibrarian || this.newIsAdministrator !== this.original.isAdministrator;
            }
          }
        }, {
          key: "isUserNameValid",
          get: function get() {
            return this.newUserName.length > 0;
          }
        }, {
          key: "isPasswordValid",
          get: function get() {
            return this.newPassword.length >= 8 || this.original !== null && this.newPassword === "";
          }
        }, {
          key: "isEmailValid",
          get: function get() {
            return this.newEmail === "" || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.newEmail);
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.isUserNameValid && this.isPasswordValid && this.isEmailValid;
          }
        }, {
          key: "resetToOriginal",
          value: function resetToOriginal() {
            if (this.original !== null) {
              this.newUserName = this.original.userName;
              this.newPassword = "";
              this.newFirstName = this.original.firstName;
              this.newLastName = this.original.lastName;
              this.newEmail = this.original.email;
              this.newIsLibrarian = this.original.isLibrarian;
              this.newIsAdministrator = this.original.isAdministrator;
            } else {
              this.newUserName = "";
              this.newPassword = "";
              this.newFirstName = "";
              this.newLastName = "";
              this.newEmail = "";
              this.newIsLibrarian = false;
              this.newIsAdministrator = false;
            }
          }
        }]);

        return UserViewModel;
      }();
      /***/

    },

    /***/
    "ouvD":
    /*!*****************************************************************!*\
      !*** ./src/app/routing/can-activates/signed-in-can-activate.ts ***!
      \*****************************************************************/

    /*! exports provided: SIGN_IN_URL, SignedInCanActivate */

    /***/
    function ouvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIGN_IN_URL", function () {
        return SIGN_IN_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignedInCanActivate", function () {
        return SignedInCanActivate;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/sign-in/sign-in.service */
      "1Td7");

      var SIGN_IN_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Sign in page url.");

      var SignedInCanActivate = /*#__PURE__*/function () {
        function SignedInCanActivate(signInService, signInUrl) {
          _classCallCheck(this, SignedInCanActivate);

          this.signInService = signInService;
          this.signInUrl = signInUrl;
        }

        _createClass(SignedInCanActivate, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var signedIn = this.signInService.signedUser !== null;
            if (!signedIn) window.location.href = this.signInUrl + "?redirectUrl=" + window.location.href;
            return signedIn;
          }
        }]);

        return SignedInCanActivate;
      }();

      SignedInCanActivate.ɵfac = function SignedInCanActivate_Factory(t) {
        return new (t || SignedInCanActivate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SIGN_IN_URL));
      };

      SignedInCanActivate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SignedInCanActivate,
        factory: SignedInCanActivate.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map