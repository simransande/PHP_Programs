webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_register_register_component__ = __webpack_require__("./src/app/component/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__ = __webpack_require__("./src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__ = __webpack_require__("./src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/component/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_resetpassword_resetpassword_component__ = __webpack_require__("./src/app/component/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_notes_note_list_component__ = __webpack_require__("./src/app/component/notes/note.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_trash_trash_component__ = __webpack_require__("./src/app/component/trash/trash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_archive_archive_component__ = __webpack_require__("./src/app/component/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_reminder_reminder_component__ = __webpack_require__("./src/app/component/reminder/reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_error_error_component__ = __webpack_require__("./src/app/component/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_labelnote_labelnote_component__ = __webpack_require__("./src/app/component/labelnote/labelnote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authguard_auth_guard__ = __webpack_require__("./src/app/authguard/auth.guard.ts");
/**Purpose:This is routing module contains path of every component to be routed
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { OnlyLoggedInUsersGuard } from './guard/auth.guard';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'createnotes', pathMatch: 'full' },
            { path: 'createnotes', component: __WEBPACK_IMPORTED_MODULE_7__component_notes_note_list_component__["a" /* NoteListComponent */] },
            { path: 'trash', component: __WEBPACK_IMPORTED_MODULE_8__component_trash_trash_component__["a" /* TrashComponent */] },
            { path: 'archive', component: __WEBPACK_IMPORTED_MODULE_9__component_archive_archive_component__["a" /* ArchiveComponent */] },
            { path: 'reminder', component: __WEBPACK_IMPORTED_MODULE_10__component_reminder_reminder_component__["a" /* ReminderComponent */] },
            { path: 'labelnote/:id', component: __WEBPACK_IMPORTED_MODULE_12__component_labelnote_labelnote_component__["a" /* LabelnoteComponent */] },
        ]
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__component_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard_auth_guard__["b" /* LoginAuthGuard */]] },
    { path: 'forgetpassword', component: __WEBPACK_IMPORTED_MODULE_5__component_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_6__component_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */] },
    { path: 'errorpage', component: __WEBPACK_IMPORTED_MODULE_11__component_error_error_component__["a" /* ErrorComponent */] }
    // { path: 'createnotes', component: NotesComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { onSameUrlNavigation: "reload" })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- Angular 5 is using double curly brackets - {{}} - \n for string interpolation. This simply means that \n if you have any data in the component class that you\n want to bind to view or template, just enter double\n curly brackets and put your variable in between.\nExample {{title}} of app component wecan bind here..  -->\n\n<!-- <mat-toolbar color=\"primary\">\n    <mat-icon> menu</mat-icon>\n    <span> Fundoo Notes </span>\n</mat-toolbar>  -->\n\n<router-outlet></router-outlet> \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/*Angular 5 component is made up of two main sections,
  namely the class and the component decorator function
  prefix with @ metadata */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*decorator is “a function that adds metadata to a class,
  its members (properties, methods) and function arguments.”
  And “the metadata object describes how the HTML template
  and component class work together.” */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        /*Getting and posting data using Observable */
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_register_register_component__ = __webpack_require__("./src/app/component/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__ = __webpack_require__("./src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/component/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_home_home_component__ = __webpack_require__("./src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_resetpassword_resetpassword_component__ = __webpack_require__("./src/app/component/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_notes_note_list_component__ = __webpack_require__("./src/app/component/notes/note.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_trash_trash_component__ = __webpack_require__("./src/app/component/trash/trash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_archive_archive_component__ = __webpack_require__("./src/app/component/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_reminder_reminder_component__ = __webpack_require__("./src/app/component/reminder/reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_label_label_component__ = __webpack_require__("./src/app/component/label/label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_notedisplay_notedisplay_component__ = __webpack_require__("./src/app/component/notedisplay/notedisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_collaborator_collaborator_component__ = __webpack_require__("./src/app/component/collaborator/collaborator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_update_note_update_note_component__ = __webpack_require__("./src/app/component/update-note/update-note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_error_error_component__ = __webpack_require__("./src/app/component/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_updatelabel_updatelabel_component__ = __webpack_require__("./src/app/component/updatelabel/updatelabel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_login_service__ = __webpack_require__("./src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_register_service__ = __webpack_require__("./src/app/service/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_note_service__ = __webpack_require__("./src/app/service/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_label_service__ = __webpack_require__("./src/app/service/label.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_collaborator_service__ = __webpack_require__("./src/app/service/collaborator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__filter_notefilter_pipe__ = __webpack_require__("./src/app/filter/notefilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_tokeninterceptor__ = __webpack_require__("./src/app/service/tokeninterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__authguard_auth_guard__ = __webpack_require__("./src/app/authguard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directive_toolbar_directive__ = __webpack_require__("./src/app/directive/toolbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__filter_search_filter_pipe__ = __webpack_require__("./src/app/filter/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__filter_labelnote_pipe__ = __webpack_require__("./src/app/filter/labelnote.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_labelnote_labelnote_component__ = __webpack_require__("./src/app/component/labelnote/labelnote.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //defines route for differnt link






























var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_collaborator_collaborator_component__["a" /* CollaboratorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_notes_note_list_component__["a" /* NoteListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_trash_trash_component__["a" /* TrashComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_archive_archive_component__["a" /* ArchiveComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_reminder_reminder_component__["a" /* ReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_label_label_component__["a" /* LabelComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_notedisplay_notedisplay_component__["a" /* NotedisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_update_note_update_note_component__["a" /* UpdateNoteComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_updatelabel_updatelabel_component__["a" /* UpdatelabelComponent */],
                __WEBPACK_IMPORTED_MODULE_35__component_labelnote_labelnote_component__["a" /* LabelnoteComponent */],
                __WEBPACK_IMPORTED_MODULE_29__filter_notefilter_pipe__["a" /* NoteFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_33__filter_search_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_34__filter_labelnote_pipe__["a" /* LabelnotePipe */],
                __WEBPACK_IMPORTED_MODULE_32__directive_toolbar_directive__["a" /* ToolbarDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__component_label_label_component__["a" /* LabelComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_collaborator_collaborator_component__["a" /* CollaboratorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_update_note_update_note_component__["a" /* UpdateNoteComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_updatelabel_updatelabel_component__["a" /* UpdatelabelComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_24__service_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_25__service_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_26__service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_27__service_label_service__["a" /* LabelService */],
                __WEBPACK_IMPORTED_MODULE_28__service_collaborator_service__["a" /* CollaboratorService */],
                __WEBPACK_IMPORTED_MODULE_31__authguard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_31__authguard_auth_guard__["b" /* LoginAuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_30__service_tokeninterceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @description: This is Auth guard implementation for restricting routes
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    /**@method: This method can activate routes and navigate to login */
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('Authorization')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    /**@method: This is to activate child routes */
    AuthGuard.prototype.canActivateChild = function (route, state) {
        if (localStorage.getItem('Authorization')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());

;
var LoginAuthGuard = /** @class */ (function () {
    function LoginAuthGuard(router) {
        this.router = router;
    }
    /**Parent routing */
    LoginAuthGuard.prototype.canActivate = function (route, state) {
        if (!localStorage.getItem('Authorization')) {
            return true;
        }
        this.router.navigate(['/home/createnotes']);
        return false;
    };
    LoginAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LoginAuthGuard);
    return LoginAuthGuard;
}());

;
/*@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService) {};

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}*/


/***/ }),

/***/ "./src/app/component/archive/archive.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-div{\n    margin-top: 87px;\n}"

/***/ }),

/***/ "./src/app/component/archive/archive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"class-container\" fxLayoutAlign=\"center center\">\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\"  class=\"mat-div\">\n         <div *ngFor=\"let note of notes | noteFilter: {isPin:false,inTrash:false,isArchive:true}\" class={{noteView}}>\n            <app-notedisplay [note]=\"note\"></app-notedisplay>\n         </div>\n  </div>\n</div>\n\n<!-- <div class=\"class-container\" fxLayoutAlign=\"center center\">\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxFlex=\"1000px\" fxLayoutGap=\"30px\">\n    <div *ngFor=\"let note of notes\">\n      <div *ngIf=\"note.isArchive===true\">\n        <mat-card style=\"width: max-content;margin-top: 100px;\">\n\n          <mat-card-header>\n            <div [innerHTML]=\"note.title\"></div>\n          </mat-card-header>\n\n          <mat-card-subtitle>\n            <div [innerHTML]=\"note.description\"></div>\n          </mat-card-subtitle>\n\n          <div fxLayout=\"row wrap\"> -->\n\n            <!-- Reminder Div -->\n            <!-- <div>\n              <button mat-icon-button [matMenuTriggerFor]=\"remind\">\n                <img src=\"/assets/icons/reminder.svg\">\n              </button>\n\n              <mat-menu #remind=\"matMenu\">\n                <div>\n                  <button type=\"submit\" mat-menu-item>\n                    <b>Reminder:</b>\n                  </button>\n                </div>\n\n                <button type=\"submit\" mat-menu-item>\n                  <div *ngFor=\"let note of notes\">\n                    <div style=\"user-select: none;text-align: left;\" (click)=\"saveReminder(note,'today')\">\n                      <span> Later today &nbsp;&nbsp;&nbsp;</span>\n                      <span> 8:00 PM</span>\n                    </div>\n                  </div>\n                </button>\n\n                <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'tomorrow')\">\n                  <div style=\"user-select: none;text-align: left;\">\n                    <span>Tomorrow &nbsp;&nbsp;</span>\n                    <span> &nbsp;&nbsp; 8:00 PM</span>\n                  </div>\n                </button>\n\n                <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'nextWeek')\">\n                  <div style=\"user-select: none;text-align: left;\">\n                    <span>Next week &nbsp;&nbsp;</span>\n                    <span> &nbsp;&nbsp; Mon,8:00 AM</span>\n                  </div>\n                </button>\n\n                <div>\n                  <button mat-button [mat-menu-trigger-for]=\"calender\">\n                    <mat-icon>schedule</mat-icon>\n                    <span>Pick date and time</span>\n                  </button>\n                </div>\n                <mat-menu #calender=\"matMenu\">\n                  <button mat-menu-item (click)=\"saveReminder(note,'pickDate')\">\n                    <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                  </button>\n\n                </mat-menu>\n\n                <button type=\"submit\" mat-menu-item>\n                  <mat-icon>room</mat-icon>\n                  <span>Pick place</span>\n                </button>\n              </mat-menu>\n            </div> -->\n\n            <!-- Color Div -->\n            <!-- <div>\n              <button mat-icon-button [matMenuTriggerFor]=\"color\">\n                <mat-icon>color_lens</mat-icon>\n            \n              </button>\n\n              <mat-menu #color=\"matMenu\">\n                <div>\n                  <a *ngFor=\"let color of colors\">\n                    <img src=\"{{color.path}}\" (click)=\"note.color=color.color;updateNotes(note,'true','color')\">\n                  </a>\n                </div>\n              </mat-menu>\n            </div> -->\n\n            <!-- Unachive Div -->\n            <!-- <div>\n              <button mat-icon-button type=\"submit\" (click)=\"unArchive(note)\">\n                <mat-icon>unarchive</mat-icon>\n              </button>\n            </div> -->\n\n\n            <!-- Delete Div -->\n            <!-- <div>\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n\n              <mat-menu #menu=\"matMenu\">\n                <button type=\"submit\" mat-menu-item (click)=\"updateNotes(note,'true','trash')\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete note</span>\n                </button>\n\n                <button type=\"submit\" mat-menu-item (click)=\"addLabel()\">\n                  <mat-icon>label</mat-icon>\n                  <span>Add Label</span>\n                </button>\n              </mat-menu>\n            </div>\n          </div>\n          \n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/component/archive/archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for archieve contains a method to refresh notes
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(userservice, noteServiceObj) {
        this.userservice = userservice;
        this.noteServiceObj = noteServiceObj;
        this.isArchive = {};
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.refreshNote();
    };
    /**@method:This method is to fetch notes */
    ArchiveComponent.prototype.refreshNote = function () {
        var _this = this;
        this.noteServiceObj.getNotes()
            .subscribe(function (response) {
            _this.notes = response;
            console.log("Notes fetched successfully..", response);
        });
    };
    ;
    /**
     * @method:This method is to unArchieve notes
     * @param note
    */
    ArchiveComponent.prototype.unArchive = function (note) {
        var _this = this;
        console.log("Unarchive note..", note);
        note.isArchive = false;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.refreshNote();
        });
    };
    ;
    ArchiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-archive',
            template: __webpack_require__("./src/app/component/archive/archive.component.html"),
            styles: [__webpack_require__("./src/app/component/archive/archive.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service__["c" /* NoteService */]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"25px\">\n\n    <div><span>Collaborators</span>\n    </div>\n\n    <div> \n        <!-- /assets/icons/blue.png -->\n        <!-- <img src=\"\" alt=\"S\"> -->\n        <mat-icon>account_circle</mat-icon>\n        <span [innerHTML]=\"user?.name\"></span><br>\n        <span [innerHTML]=\"user?.email\"></span>(Owner)\n    </div>\n\n    <div *ngIf=\"data.collaborators!=null\"> \n            <div *ngFor=\"let collaboratorObj of data.collaborators\">\n                <mat-icon>account_circle</mat-icon>\n                <span>{{collaboratorObj.sharedUser.email}}</span>\n                <img style=\"margin-right: 8px;\" src=\"{{crossSvg}}\" (click)=\"removeCollaborator(collaboratorObj.note.noteId, collaboratorObj.sharedUser.email)\">\n            </div>\n    </div>\n\n    <div>\n       <mat-form-field >\n          <mat-icon>person_add</mat-icon>\n          <input matInput placeholder=\"Person or Email to share with\" [(ngModel)]=\"model.email\">\n       </mat-form-field>\n    </div>\n\n    <div>\n        <mat-dialog-actions>\n          <button type=\"submit\" (click)=\"addCollaborator()\" mat-raised-button>SAVE</button>\n          <button mat-button type=\"button\" [mat-dialog-close]=\"true\">CANCEL</button>\n        </mat-dialog-actions>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_noteresponse__ = __webpack_require__("./src/app/model/noteresponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_note_service__ = __webpack_require__("./src/app/service/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is collaborator component contains methods to add collaborator on notes
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CollaboratorComponent = /** @class */ (function () {
    function CollaboratorComponent(data, noteServiceObj, userservice, collaboratorServiceObj, dialogRef) {
        this.data = data;
        this.noteServiceObj = noteServiceObj;
        this.userservice = userservice;
        this.collaboratorServiceObj = collaboratorServiceObj;
        this.dialogRef = dialogRef;
        this.model = {};
        this.crossSvg = '/assets/icons/cross.svg';
    }
    CollaboratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUser('getuser').subscribe(function (response) {
            _this.user = response;
            _this.noteServiceObj.getNotes().subscribe(function (response) {
                console.log("Output fetched", _this.data);
            });
        });
    };
    /**@method: This method is to add Collaborator*/
    CollaboratorComponent.prototype.addCollaborator = function () {
        var _this = this;
        this.model.noteId = this.data.noteId;
        console.log(this.model);
        this.collaboratorServiceObj.createCollaborator(this.model)
            .subscribe(function (response) {
            // this.data.noteId=response;
            console.log("Shared successfully..", response);
            _this.dialogRef.close();
        });
    };
    /**method: This methd is to remove collaborator
     * @param noteId
     * @param email
    */
    CollaboratorComponent.prototype.removeCollaborator = function (noteId, email) {
        this.model.noteId = this.data.noteId;
        console.log(this.model.noteId);
        this.model.email = email;
        console.log(this.model.email);
        this.collaboratorServiceObj.deleteCollaborator(this.model)
            .subscribe(function (response) {
            console.log("Deleted successfully..", response);
        });
    };
    CollaboratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-collaborator',
            template: __webpack_require__("./src/app/component/collaborator/collaborator.component.html"),
            styles: [__webpack_require__("./src/app/component/collaborator/collaborator.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_noteresponse__["a" /* NoteResponse */], __WEBPACK_IMPORTED_MODULE_4__service_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__service__["a" /* CollaboratorService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], CollaboratorComponent);
    return CollaboratorComponent;
}());



/***/ }),

/***/ "./src/app/component/error/error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"/assets/icons/404.png\">\n</div>"

/***/ }),

/***/ "./src/app/component/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.error = '/assets/icons/404.png';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/component/error/error.component.html"),
            styles: [__webpack_require__("./src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/component/forgotpassword/forgotpassword.component.css":
/***/ (function(module, exports) {

module.exports = ".toptoolbar{\n    background-color: #3f51b5; \n    position: -webkit-sticky; \n    position: sticky; \n    top: 0;z-index: 1000;\n}"

/***/ }),

/***/ "./src/app/component/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n\n  <mat-card style=\"width: max-content;margin-top:5%;\">\n    <h3 style=\"text-align:left; color: blue\">\n      <i>Fundoo Notes</i>\n    </h3>\n\n    <form style=\"text-align:center\" #forgotpassform=\"ngForm\" (ngSubmit)=\"forgot()\">\n\n      <div class=\"forgotpasscontainer\">\n        <mat-form-field>\n          <h5 style=\"color:#3f51b5;\">Enter your email address and we will send you a link to reset your password.</h5>\n          <input matInput placeholder=\"email\" type=\"email\" name=\"email\" [(ngModel)]=\"model.email\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"button-row\">\n        <button mat-button color=\"primary\">Send password reset email</button>\n      </div>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/component/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is forgot password componet
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(userservice) {
        this.userservice = userservice;
        this.model = {};
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    /**@method:This method is to call forgot password Api*/
    ForgotpasswordComponent.prototype.forgot = function () {
        console.log(this.model);
        this.userservice.postService('forgetpassword', this.model)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ForgotpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgotpassword',
            template: __webpack_require__("./src/app/component/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("./src/app/component/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".toptoolbar{\n    background-color: #3f51b5; \n    position: -webkit-sticky; \n    position: sticky; \n    top: 0;z-index: 1000;\n    margin-top: -8px;\n    margin-left: -8px;\n}\n\n.searchbar{\n    background-color: #3f51b5; \n}\n\n.toolitems{\n    color: white;\n}\n\n.example-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n.sidenav\n{\n margin-top: 81px;\n}\n\n.sidenavitem{\n    color: royalblue;\n}\n\nsearch-Box{\n    height: 39px;\n    width: 639px;\n    margin-left: 53px;\n    margin-right: 181px;\n}\n"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar appToolbar class=\"toptoolbar\">\n\n    <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" href=\"#\" name=\"Main menu\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"toolitems\">\n      <span> Fundoo Notes </span>\n    </div>\n\n    <!-- <mat-toolbar class=\"searchbar\">\n        <div class=\"toolitems\">\n          <button mat-icon-button (click)=\"search()\">\n            <mat-icon>search</mat-icon>\n          </button>\n        </div>\n      </mat-toolbar>  \n    [attr.disabled]=\"disabled ? '' : null\"-->\n\n      <form [formGroup]=\"searchForm\">\n            <input type='text' style=\" height: 39px; width: 639px; margin-left: 53px; margin-right: 181px;\" [formControl]=\"inputFormControl\">\n     </form> \n\n    <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"refresh()\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"viewlist()\">\n        <mat-icon>view_list</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"apps()\">\n        <mat-icon>apps</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"notify()\">\n        <mat-icon>notifications_none</mat-icon>\n      </button>\n    </div>\n\n    <!-- <div class=\"toolitems\">\n      <button mat-icon-button (click)=\"logout()\">\n        <mat-icon>account_circle</mat-icon>\n      </button>\n    </div> -->\n\n    <div>\n      <button mat-mini-fab [matMenuTriggerFor]=\"appMenu\" style=\"background-color: #3f51b5;\">\n        <mat-icon>account_circle</mat-icon>\n      </button>\n   </div>\n  </mat-toolbar>\n\n  <mat-menu #appMenu=\"matMenu\">\n    <div fxLayout=\"row\">\n            <mat-icon>account_circle</mat-icon>\n    </div>\n   \n    <button mat-raised-button>Add account</button>\n    <button mat-raised-button (click)=\"logout()\">Sign out</button>\n </mat-menu> \n\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n    <mat-sidenav mode=\"side\" #sidenav opened fxLayout=\"column\" class=\"sidenav\">\n\n      <div>\n        <div class=\"sidenavitem\">\n          <a routerLink=\"/home/createnotes\" routerLinkActive=\"active\" mat-button>\n            <mat-icon>lightbulb_outline</mat-icon>  Note</a>\n        </div>\n\n      </div>\n\n      <div>\n        <div class=\"sidenavitem\">\n          <a routerLink=\"/home/trash\" routerLinkActive=\"active\" mat-button>\n            <mat-icon>delete</mat-icon>  Trash</a>\n        </div>\n      </div>\n\n      <div>\n        <div class=\"sidenavitem\">\n          <a routerLink=\"/home/archive\" routerLinkActive=\"active\" mat-button>\n            <mat-icon>assignment_returned</mat-icon>  Archive</a>\n        </div>\n      </div>\n\n     <div>\n          <div class=\"sidenavitem\">\n            <a routerLink=\"/home/reminder\" routerLinkActive=\"active\" mat-button>\n              <img src=\"/assets/icons/reminder.svg\" class=\"sidenavitem\" >  Reminders</a>\n          </div>\n    </div>\n\n    <!-- <div>\n        <div class=\"sidenavitem\"> &nbsp;Labels\n            <button mat-button [matMenuTriggerFor]=\"label\">Edit</button>\n        </div>\n    </div> -->\n\n    <div>\n        <button mat-menu-item style=\"color:royalblue\">\n          Labels\n          <button style=\"color:royalblue\" (click)=\"OpenLabelUpdateDialog(label)\">EDIT\n          </button>\n\n        </button>\n    </div>\n    \n      <div *ngFor=\"let labelObj of labels\">\n          <div class=\"toolitems\">\n            <button [routerLink]=\"['/home/labelnote/', labelObj.labelId]\" mat-menu-item style=\"color:royalblue\">\n              <mat-icon style=\"color:royalblue\">label</mat-icon>\n              <span>{{labelObj.labelTitle}}</span>\n              <!-- <input name=\"labels\" value=\"{{label.labelTitle}}\"> -->\n              \n               <!-- <i class=\"material-icons\">create</i> -->\n            </button>\n          </div>\n        </div>\n\n        <div>\n        <button mat-menu-item  (click)=\"openLabelDialog()\">\n          <mat-icon style=\"color:royalblue\">add</mat-icon>\n          <span style=\"color:royalblue\">Create new label</span>\n        </button>\n       </div>\n      \n    <!-- <div *ngIf=\"labels!=null\">\n      <div *ngFor=\"let label of labels\">\n        <div class=\"toolitems\">\n          <button mat-menu-item style=\"color:royalblue\"> \n              <mat-icon style=\"color:royalblue\">label</mat-icon>\n              <span>{{label.labelTitle}}</span> -->\n              <!-- <input name=\"labels\" value=\"{{label.labelTitle}}\"> -->\n              \n               <!-- <i class=\"material-icons\">create</i> -->\n          <!-- </button>\n        </div> \n       </div> \n       </div> -->\n\n    </mat-sidenav>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__("./src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__updatelabel_updatelabel_component__ = __webpack_require__("./src/app/component/updatelabel/updatelabel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__label_label_component__ = __webpack_require__("./src/app/component/label/label.component.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is home component which loads only after login
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(userservice, noteServiceObj, labelServiceObj, dialog, router, builder) {
        this.userservice = userservice;
        this.noteServiceObj = noteServiceObj;
        this.labelServiceObj = labelServiceObj;
        this.dialog = dialog;
        this.router = router;
        this.builder = builder;
        this.model = {};
        this.reminder = '/assets/icons/remind.png';
        this.inputFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.searchForm = this.builder.group({
            inputFormControl: this.inputFormControl
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.refresh();
        //this.labelServiceObj.getlabel();
        this.searchText();
        this.readLabel();
    };
    /**@method: This is to refresh notes */
    HomeComponent.prototype.refresh = function () {
        // this.noteServiceObj.getNotes()
        //                     .toPromise()
        //                       .then(response => {
        //                          this.notes = response;
        //                           console.log("Notes fetched successfully");
        //                                         });
    };
    ;
    /**@method: This method is to fetch labels*/
    HomeComponent.prototype.readLabel = function () {
        var _this = this;
        this.labelServiceObj.getlabels()
            .subscribe(function (response) {
            _this.labels = response;
            console.log("Labels fetched successfully..", _this.labels);
        });
    };
    /**@method: This method is for logout */
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.notify = function () {
    };
    ;
    /**@method: This method is to open dialog for adding label */
    HomeComponent.prototype.openLabelDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__label_label_component__["a" /* LabelComponent */], {
            width: '350px',
            height: '210px',
            data: {
                labels: this.labels
            }
        });
    };
    ;
    HomeComponent.prototype.OpenLabelUpdateDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__updatelabel_updatelabel_component__["a" /* UpdatelabelComponent */], {
            data: {
                labels: this.labels
            },
            height: '210px',
        });
    };
    ;
    HomeComponent.prototype.viewlist = function () {
        this.noteServiceObj.changeView();
    };
    HomeComponent.prototype.searchText = function () {
        var _this = this;
        console.log("Test for search", this.inputFormControl);
        this.searchForm.valueChanges.subscribe(function (formData) {
            debugger;
            console.log("search", formData.inputFormControl);
            _this.userservice.searchData(formData.inputFormControl);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/component/home/home.component.html"),
            styles: [__webpack_require__("./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service__["c" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_4__service__["b" /* LabelService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/label/label.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/label/label.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"25px\">\n\n    <div><span>Edit labels</span> </div>\n    <div>\n       <mat-form-field >\n        <input matInput placeholder=\"Create new label\" [(ngModel)]=\"model.labelTitle\">\n       </mat-form-field>\n    </div>\n    <div><button type=\"submit\" (click)=\"createLabel()\" mat-raised-button>Done</button></div>\n\n    <ul>\n        <li *ngFor=\"let labelObj of label\"> \n          {{labelObj.labelTitle}}\n        </li>\n    </ul> \n  </div>"

/***/ }),

/***/ "./src/app/component/label/label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This is label component contains method to fetch labels and create labels
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LabelComponent = /** @class */ (function () {
    function LabelComponent(data, noteServiceObj, labelServiceObj, dialogRef) {
        this.data = data;
        this.noteServiceObj = noteServiceObj;
        this.labelServiceObj = labelServiceObj;
        this.dialogRef = dialogRef;
        this.model = {};
        this.label = data.labels;
    }
    LabelComponent.prototype.ngOnInit = function () {
        //this.refreshLabel();
    };
    /**@method: This method is to fetch labels */
    LabelComponent.prototype.refreshLabel = function () {
        var _this = this;
        this.labelServiceObj.getLabels()
            .toPromise()
            .then(function (response) {
            _this.label = response;
            console.log("Labels fetched successfully..");
        });
    };
    /**@method:This method is to create labels */
    LabelComponent.prototype.createLabel = function () {
        var _this = this;
        this.labelServiceObj.createLabel(this.model)
            .subscribe(function (response) {
            _this.labelServiceObj.reloadLabels();
            console.log("Label Created successfully..", response, _this.label);
            _this.dialogRef.close();
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], LabelComponent.prototype, "label", void 0);
    LabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-label',
            template: __webpack_require__("./src/app/component/label/label.component.html"),
            styles: [__webpack_require__("./src/app/component/label/label.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__service__["c" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_2__service__["b" /* LabelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], LabelComponent);
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/component/labelnote/labelnote.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/labelnote/labelnote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"class-container\" fxLayoutAlign=\"center center\">\n\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" style=\"margin-top:95px\">\n             <div *ngFor=\"let note of notes |labelnote : id\">\n                <app-notedisplay [note]=\"note\"></app-notedisplay>\n             </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/component/labelnote/labelnote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelnoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("./src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @author :
 * @since :
 * @description :
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabelnoteComponent = /** @class */ (function () {
    function LabelnoteComponent(route, noteServiceObj) {
        this.route = route;
        this.noteServiceObj = noteServiceObj;
    }
    LabelnoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteServiceObj.getNotes()
            .subscribe(function (response) {
            _this.notes = response;
            //console.log("Notes..", this.notes=response);
        });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log('note label  component Id :', _this.id);
        });
    };
    LabelnoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-labelnote',
            template: __webpack_require__("./src/app/component/labelnote/labelnote.component.html"),
            styles: [__webpack_require__("./src/app/component/labelnote/labelnote.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__service__["c" /* NoteService */]])
    ], LabelnoteComponent);
    return LabelnoteComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".toptoolbar{\n    background-color: #3f51b5; \n    position: -webkit-sticky; \n    position: sticky; \n    top: 0;z-index: 1000;\n}\n\n.toolitemms{\n   text-align:left;\n    color: rgb(231, 231, 236);\n}\n\n.loginCard{\n    margin-left: 241px;\n    width: 456px;\n     margin-top: 538px;\n}\n\n.mat-field{\n    width: 450px;\n  }"

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar class=\"toptoolbar\">\n        <h3 style=\"text-align:left; color: #ececf8\">\n            <i>Fundoo Notes</i>\n        </h3>\n\n        <div fxLayoutAlign=\"center center\">\n\n            <mat-card class=\"loginCard\">\n                <!--  <mat-card style=\"margin:100px;width:500px;margin-top: 100%;\"> -->\n                <h5 style=\"text-align:center; color: #223fe2\">\n                    <i>User Login</i>\n                </h5>\n\n                <form style=\"text-align:center\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n\n                    <div class=\"logincontainer\">\n                        <mat-form-field  class=\"mat-field\">\n                            <input matInput placeholder=\"Email\" type=\"email\" name=\"email\"  [formControl]=\"emailControl\" [errorStateMatcher]=\"match\" [(ngModel)]=\"model.email\" required>\n                            <mat-error *ngIf=\"emailControl.hasError('pattern') && !emailControl.hasError('required') \">Enter Valid Email address</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"logincontainer\">\n                        <mat-form-field  class=\"mat-field\">\n                            <input matInput placeholder=\"Password\" type=\"password\" name=\"password\"  [formControl]=\"emailControl\"  [errorStateMatcher]=\"match\" [(ngModel)]=\"model.password\" required>\n                            <mat-error *ngIf=\"passwordControl.hasError('password') && !passwordControl.hasError('required')\">Password is required</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"logincontainer\" style=\"text-align:left;\">\n                        <a href=\"/forgetpassword\">forgot password?</a>\n                    </div>\n\n                    <br>\n\n                    <div class=\"logincontainer\" style=\"text-align:left;\">\n                        <a href=\"/register\">register</a>\n                    </div>\n\n                    <div class=\"button-row\">\n                            <!-- [disabled]=\"emailControl.invalid || passwordControl.invalid\" -->\n                        <button mat-button color=\"primary\">\n                            <a href=\"/home\"></a>Login</button>\n                    </div>\n                </form>\n\n            </mat-card>\n        </div>\n    </mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_login_service__ = __webpack_require__("./src/app/service/login.service.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is login component contains login method
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, loginServiceObj, router) {
        this.userservice = userservice;
        this.loginServiceObj = loginServiceObj;
        this.router = router;
        this.model = {};
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            //Validators.pattern("^[\\w\\d._-]+@[\\w\\d.-]+\\.[\\w\\d]{2,6}$"),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
        ]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            // Validators.minLength(5),
            // Validators.maxLength(8),
            //Validators.pattern('.{4,12}'),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[A-Za-z0-9]{8}'),
        ]);
        this.match = new MyErrorStateMatcher();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    /**@method:This method is to set form fields to null */
    //For Ngform only reset method is available
    LoginComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset;
        this.model = {
            email: '',
            password: ''
        };
    };
    /**@method:This method is to call login APi */
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("loginForm", this.model);
        this.loginServiceObj.login(this.model)
            .subscribe(function (response) {
            if (response.status === 200) {
                console.log("Check header..", response.headers.get("Authorization"));
                alert("Logined Succesfully...");
                //localStorage.setItem=this.userservice.getToken.toString;
                localStorage.setItem('Authorization', response.headers.get("Authorization"));
                _this.router.navigate(['/home']);
            }
            else if (response.status !== 200) {
                alert("Login Failed..");
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/component/login/login.component.html"),
            styles: [__webpack_require__("./src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/notedisplay/notedisplay.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\n    width:41%;\n    margin-top: 100px;\n}\n\n\n.image{\n    max-width: 249px;\n    min-width: 249px;\n    margin-left: -24px;\n    margin-top: -24px;\n}\n\n\n.mat-design{\n    max-width: 201px;\n    margin-top: 15px;\n  }\n\n\n.text{\n    color:#3f51b5; \n}\n\n\n.divbox{\n    margin-top: -10%;\n    top: 20px;\n}\n\n\n.canedit {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    outline: none;\n      line-height: 20px;   \n }\n\n\n.button{\n    margin-left: 80%;\n }\n\n\n.matchip{\n    block-size: 10px;\n    width: 175px;\n}\n\n\n.labelChip{\n   max-width: -webkit-fit-content;\n   max-width: -moz-fit-content;\n   max-width: fit-content;\n   block-size: 10px;\n}"

/***/ }),

/***/ "./src/app/component/notedisplay/notedisplay.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div class=\"class-container\" fxLayoutAlign=\"center center\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxFlex=\"900px\" fxLayoutGap=\"20px\"> -->\n\n    <mat-card  [style.background]=\"note.color\" class=\"mat-design\">\n\n          <div *ngIf=\"note.noteImage\">\n              <img class=\"image\" [src]=\"note.imageString\"/>\n          </div>\n\n        <div style=\"margin-left: 90%;\">\n          \n            <img [src]=\"getIcon(note)\" (click)=\"updateNotes(note,status,'pin')\">\n        </div>\n\n      <div (click)=\"openNoteDialog(note)\">\n        <mat-card-header>\n            <!-- {{note.title}} -->\n          <div [innerHTML]=\"note.title\"></div>\n        </mat-card-header>\n\n        <mat-card-subtitle>\n          <!-- {{note.description}} -->\n          <div [innerHTML]=\"note.description\"></div>\n        </mat-card-subtitle>\n      </div>  \n      \n    <!-- For Showing reminder -->\n      <div *ngIf=\"note.reminder!=null\">\n          <div mat-menu-item fxLayout=\"row\">\n              <mat-chip-list>\n                    <mat-chip color=\"primary\" style=\"margin-left: -15px;\" selected=\"true\" class=\"matchip\">\n                        <mat-icon style=\"color: #fafafa; margin-left: -10px;\">schedule</mat-icon>\n                        <label style=\"margin-left: -17px;\">{{note.reminder|date:'MMM dd,y, hh:mm a'}}</label>\n                        <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"saveReminder(note,'null')\">\n                    </mat-chip>\n              </mat-chip-list>\n           \n            </div>\n      </div>\n\n        <!-- For showing label -->\n          <div *ngIf=\"note.labels!=null\">\n            <div *ngFor=\"let label of note.labels\">\n              <div fxLayout=\"row\" fxLayoutGap=\"5px\">\n\n                <div>\n                  <mat-chip-list>\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"labelChip\">\n                      {{label.labelTitle}}\n                      <!-- <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"removeLabel(note, label.labelId,'null')\"> -->\n                      <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"removeLabel(label.labelId)\">\n\n                    </mat-chip>\n                  </mat-chip-list>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <!-- For showing collaborator -->\n          <div *ngIf=\"note.collaborators!=null\">\n            <div *ngFor=\"let collaborator of note.collaborators\">\n\n              <mat-chip-list>\n                <mat-chip>\n                  {{collaborator.sharedUser.email}}\n                  <!-- <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\"> -->\n                </mat-chip>\n              </mat-chip-list>\n\n            </div>\n          </div>\n\n      \n          <!-- All buttons row Wrap -->\n          <div fxLayout=\"row\" style=\"margin-left: -20px;\">\n\n              <!-- Reminder Div -->\n              <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"remind\">\n                  <img src=\"/assets/icons/reminder.svg\">\n                </button>\n  \n                <mat-menu #remind=\"matMenu\">\n                  <div>\n                    <button type=\"submit\" mat-menu-item>\n                      <b>Reminder:</b>\n                    </button>\n                  </div>\n  \n                  <button type=\"submit\" mat-menu-item>\n                    <div *ngFor=\"let note of notes\">\n                      <div style=\"user-select: none;text-align: left;\" (click)=\"saveReminder(note,'today')\">\n                        <span> Later today &nbsp;&nbsp;&nbsp;</span>\n                        <span> 8:00 PM</span>\n                      </div>\n                    </div>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'tomorrow')\">\n                    <div style=\"user-select: none;text-align: left;\">\n                      <span>Tomorrow &nbsp;&nbsp;</span>\n                      <span> &nbsp;&nbsp; 8:00 PM</span>\n                    </div>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'nextWeek')\">\n                    <div style=\"user-select: none;text-align: left;\">\n                      <span>Next week &nbsp;&nbsp;</span>\n                      <span> &nbsp;&nbsp; Mon,8:00 AM</span>\n                    </div>\n                  </button>\n  \n                  <div>\n                    <button mat-button [mat-menu-trigger-for]=\"calender\">\n                      <mat-icon>schedule</mat-icon>\n                      <span>Pick date and time</span>\n                    </button>\n                  </div>\n                  <mat-menu #calender=\"matMenu\">\n                    <button mat-menu-item (click)=\"saveReminder(note,'pickDate')\">\n                      <mat-form-field>\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                      </mat-form-field>\n                    </button>\n                  </mat-menu>\n  \n                  <button type=\"submit\" mat-menu-item>\n                    <mat-icon>room</mat-icon>\n                    <span>Pick place</span>\n                  </button>\n                </mat-menu>\n              </div>\n  \n              <!-- Collaborator Div -->\n              <div>\n                <button mat-menu-item (click)=\"openCollaboratorDialog(note)\">\n                  <mat-icon style=\"margin-left: -17px; margin-top: -6px;\">person_add</mat-icon>\n                </button>\n              </div>\n  \n              <!-- Color Div -->\n              <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"color\">\n                  <mat-icon style=\"margin-left: -60px;\">color_lens</mat-icon>\n                  <!-- assets/icons/color.svg -->\n                </button>\n  \n                <mat-menu #color=\"matMenu\">\n                  <div>\n                    <a *ngFor=\"let color of colors\">\n                      <img src=\"{{color.path}}\" (click)=\"note.color=color.color; updateNotes(note,'true','color')\">\n                    </a>\n                  </div>\n                </mat-menu>\n              </div>\n  \n              <!-- Image div -->\n            <div style=\"margin-left: -37px;\">\n                <button mat-icon-button [matMenuTriggerFor]=\"imagemenu\">\n                  <mat-icon>image</mat-icon>\n                  <!-- assets/icons/color.svg -->\n                </button>\n             \n  \n              <mat-menu #imagemenu=\"matMenu\">\n                <div>\n                  <input type=\"file\" (click)=\"handleFileInput($event.target.files, note.noteId)\">\n                </div>\n                <!-- <button mat-icon-button type=\"file\" (click)=\"handleFileInput($event.target.files)\">\n                    <mat-icon>image</mat-icon>\n                </button>   -->\n  \n              </mat-menu>\n            </div>\n  \n              <!-- Archive Div -->\n              <div style=\"margin-left: -19px;\">\n                <button mat-button type=\"submit\" (click)=\"updateNotes(note,'' + !note.isArchive,'archive')\">\n                  <mat-icon>archive</mat-icon>\n                </button>\n\n              </div>\n  \n              <!-- Delete Div -->\n              <div style=\"margin-left: -36px;\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon style=\"color:royalblue\">more_vert</mat-icon>\n                </button>\n  \n                <mat-menu #menu=\"matMenu\">\n                  <button type=\"submit\" mat-menu-item (click)=\"updateNotes(note,'true','trash')\">\n                    <mat-icon>delete</mat-icon>\n                    <span>Delete note</span>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item [matMenuTriggerFor]=\"label\" (click)=\"addLabel()\">\n                    <mat-icon style=\"color:royalblue\">label</mat-icon>\n                    <span>Change Labels</span>\n                  </button>\n  \n                  <mat-menu #label=\"matMenu\">\n                    <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n                      <div>\n                        <span>label note</span>\n                      </div>\n  \n                      <div>\n                        <mat-form-field>\n                          <input matInput placeholder=\"Enter label name\">\n                          <button mat-button>\n                            <mat-icon>search</mat-icon>\n                          </button>\n                        </mat-form-field>\n                      </div>\n  \n                      <div *ngIf=\"labels!=null\">\n                        <div *ngFor=\"let label of labels\">\n                          <label>\n                            <input type=\"checkbox\" name=\"labels\" value=\"{{label.labelTitle}}\" [(ngModel)]=\"label.checked\" (change)=\"optionChange($event, label.labelId, note.noteId)\"\n                            /> {{label.labelTitle}}\n                          </label>\n                        </div>\n                      </div>\n  \n                    </div>\n                  </mat-menu>\n  \n                </mat-menu>\n              </div>\n  \n            </div>\n\n      </mat-card>\n<!--       \n</div>\n</div> -->"

/***/ }),

/***/ "./src/app/component/notedisplay/notedisplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotedisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("./src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collaborator_collaborator_component__ = __webpack_require__("./src/app/component/collaborator/collaborator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_note_update_note_component__ = __webpack_require__("./src/app/component/update-note/update-note.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is notes display component contains methods to create and update notes
*/





var NotedisplayComponent = /** @class */ (function () {
    function NotedisplayComponent(userservice, noteServiceObj, labelServiceObj, dialog) {
        this.userservice = userservice;
        this.noteServiceObj = noteServiceObj;
        this.labelServiceObj = labelServiceObj;
        this.dialog = dialog;
        this.model = {};
        this.inTrash = {};
        this.isArchive = {};
        this.isPin = {};
        this.pinSvg = '/assets/icons/pin.svg';
        this.unpinSvg = '/assets/icons/unpin.svg';
        this.colorSvg = '/assets/icons/colorSvg';
        this.crossSvg = '/assets/icons/cross.svg';
        this.colors = [{
                color: '#FF0000',
                path: '/assets/icons/Red.png'
            }, {
                color: '#fcff77',
                path: '/assets/icons/yellow.png'
            }, {
                color: '#80ff80',
                path: '/assets/icons/green.png'
            }, {
                color: '#9ee0ff',
                path: '/assets/icons/skyblue.png'
            }, {
                color: '#7daaf2',
                path: '/assets/icons/blue.png'
            }, {
                color: '#9966ff',
                path: '/assets/icons/purple.png'
            }, {
                color: '#ff99cc',
                path: '/assets/icons/pink.png'
            }
        ];
    }
    /**@method:This ngOnInit method loads all the notes at the time of initialization */
    NotedisplayComponent.prototype.ngOnInit = function () {
        this.readlabel();
        //this.refreshNote();
        //this.noteServiceObj.reloadNotes();
        //this.refreshLabel();
    };
    NotedisplayComponent.prototype.readlabel = function () {
        var _this = this;
        this.labels = this.labelServiceObj.labels;
        this.labelServiceObj.changeLabel.subscribe(function (labelArry) {
            _this.labels = labelArry;
        });
    };
    /*checkIcon(note){
      //var isPin=true;
      
      if(this.note.isPin === false){
        return this.unpinSvg;
      }
     
      return this.pinSvg;
    }*/
    NotedisplayComponent.prototype.getIcon = function (note) {
        if (!note.isPin) {
            return '/assets/icons/pin.svg';
        }
        return '/assets/icons/unpin.svg';
    };
    /**@method:This method is to fetch notes */
    NotedisplayComponent.prototype.refreshNote = function () {
        var _this = this;
        this.noteServiceObj.getNotes()
            .toPromise()
            .then(function (response) {
            _this.notes = response;
            console.log("Notes fetched successfully");
        });
    };
    ;
    /**@method: This method is to fetch labels */
    NotedisplayComponent.prototype.refreshLabel = function () {
        var _this = this;
        this.labelServiceObj.getLabels()
            .toPromise()
            .then(function (response) {
            _this.labels = response;
            console.log("Labels fetched successfully..");
        });
    };
    /**@method:This method is to move the notes to trash
     * @param:note,status,field
     */
    NotedisplayComponent.prototype.update = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            _this.noteServiceObj.reloadNotes();
            console.log(response);
        });
    };
    NotedisplayComponent.prototype.updateNotes = function (note, status, field) {
        if (field == 'trash') {
            note.inTrash = status;
            this.update(note);
            console.log("Moved notes to trash..");
        }
        else if (field == 'archive') {
            note.isArchive = status;
            this.update(note);
            console.log("Moved notes to archive...");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Pin note..");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Unpinned note..");
        }
        else if (field == 'color') {
            this.update(note);
            console.log("Set color");
        }
    };
    ;
    /**@method:This method is to set reminder of notes
     * @param:note,field
     */
    NotedisplayComponent.prototype.remind = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.refreshNote();
        });
    };
    NotedisplayComponent.prototype.saveReminder = function (note, field) {
        var today = new Date();
        if (field == 'today') {
            today.setHours(20);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'tomorrow') {
            today.setDate(today.getDate() + 1);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'nextWeek') {
            today.setDate(today.getDate() + 6);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'pickDate') {
            today.setDate(today.getDate());
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'null') {
            note.reminder = null;
            this.remind(note);
        }
    };
    /**@method:This method is to add LAbels */
    NotedisplayComponent.prototype.addLabel = function () {
        var _this = this;
        this.labelServiceObj.getLabels()
            .subscribe(function (response) {
            _this.labels = response;
            console.log("Label fetched successfully..", response, _this.labels);
        });
    };
    NotedisplayComponent.prototype.optionChange = function (status, labelId, noteId) {
        console.log("Checkk..", status.bubbles);
        this.labelServiceObj.addRemoveLabel(status, labelId, noteId)
            .subscribe(function (response) {
            console.log("status changed..");
        });
    };
    /**@method:This method is to remove labels
     * @param note
     * @param labelId
     * @param field
    
    removeLabel(note,labelId,field){
    
      note.labels=null;
      this.labelServiceObj.addRemoveLabel(labelId,note,field);
      console.log(note,labelId,field);
    }*/
    NotedisplayComponent.prototype.removeLabel = function (labelId) {
        this.model.labelId = labelId;
        this.labelServiceObj.deleteLabel(labelId)
            .subscribe(function (response) {
            console.log("Removed label", response);
        });
    };
    /**@method:This method is to open collaborator dialog
     * @param note
     */
    NotedisplayComponent.prototype.openCollaboratorDialog = function (note) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__collaborator_collaborator_component__["a" /* CollaboratorComponent */], {
            data: note,
            width: '350px',
            height: '210px'
        });
    };
    ;
    /**@method:This method is to upload a image
     * @param noteId
     * @param event
     */
    NotedisplayComponent.prototype.handleFileInput = function (event, noteId) {
        this.model.event = event;
        console.log("Note image->>", event);
        this.model.noteId = noteId;
        this.noteServiceObj.uploadImage(this.model)
            .subscribe(function (response) {
            console.log("Image uploaded successfully..");
        });
    };
    NotedisplayComponent.prototype.openNoteDialog = function (note) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__update_note_update_note_component__["a" /* UpdateNoteComponent */], {
            data: note,
            width: '350px',
            height: '400px'
        });
    };
    NotedisplayComponent.prototype.searchText = function () {
        var _this = this;
        console.log("Test for search", this.inputFormControl);
        this.searchForm.valueChanges.subscribe(function (formData) {
            console.log(formData.inputFormControl);
            _this.userservice.searchData(formData.inputFormControl);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NotedisplayComponent.prototype, "note", void 0);
    NotedisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notedisplay',
            template: __webpack_require__("./src/app/component/notedisplay/notedisplay.component.html"),
            styles: [__webpack_require__("./src/app/component/notedisplay/notedisplay.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service__["d" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__service__["c" /* NoteService */], __WEBPACK_IMPORTED_MODULE_2__service__["b" /* LabelService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], NotedisplayComponent);
    return NotedisplayComponent;
}());

;


/***/ }),

/***/ "./src/app/component/notes/note.list.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\n    width: 41%;\n    height: 8px;\n    margin-top: 100px;\n}\n\n.image{\n    max-width: 249px;\n    min-width: 249px;\n    margin-left: -24px;\n    margin-top: -24px;\n}\n\n.pin{\n    margin-top: 50px\n}\n\n.text{\n    color:#3f51b5; \n}\n\n.divbox{\n    margin-top: -10%;\n}\n\n.canedit {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    outline: none;\n      line-height: 20px;   \n }\n\n.button{\n    margin-left: 80%;\n }\n\n.matchip{\n    block-size: 10px;\n}\n\n.mat-design{\n    max-width: 201px;\n    margin-top: 15px;\n  }\n\n.edit {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    outline: none;\n    line-height: 20px; \n    }\n\n.topNote{\n    width: 471px;\n    height: 17px;\n    margin-top: 99px;\n}\n\n.openCard{\n    margin-top: 25px;\n    width: 479px;\n}\n\n[contentEditable=true]:empty:before{\n    content:attr(data-text)\n  }\n\n.editable {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  outline: none;\n  line-height: 20px; \n  color:#3f51b5; \n  }\n\n.example-card {\n    max-width: 400px;\n  }\n\n.full-width {\n    width: 100%;\n  }\n\n.line-height{\n    line-height: 20px;\n  }\n\n.class-container{\n    margin-top: 25px;\n  }\n\n.mat-div{\n    margin-top: 15px;\n  }\n\n.list-view{\n    width: 100%;\n    margin-top: 15px;\n  }\n\n.grid-view{\n    margin-top: 15px;\n  }"

/***/ }),

/***/ "./src/app/component/notes/note.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n\n  <mat-card class=\"topNote\">\n    <div contenteditable='true' class=\"edit\" (click)=\"show=!show\">\n      <span class=\"text\">Take a note...</span>\n    </div>\n  </mat-card>\n\n</div>\n\n<!-- Div shown on click -->\n<div fxLayoutAlign=\"center center\" *ngIf=\"show\" class=\"divbox\">\n  <mat-card class=\"openCard\">\n    <div contenteditable='true' data-text='Title' class=\"editable line-height\" name=\"title\" (input)=\"model.title=$event.target.innerHTML\"></div>\n    <div contenteditable='true' data-text='Take a note..' class=\"editable line-height\" name=\"description\" (input)=\"model.description=$event.target.innerHTML\"></div>\n\n    <mat-card-actions>\n      <button type=\"submit\" mat-button style=\"margin-left: 80%; color:#3f51b5;\" onclick=\"event.stopPropagation()\" (click)=\"createNote()\" disabled>DONE</button>\n    </mat-card-actions>\n  </mat-card>\n\n</div>\n\n<!-- Div to show pin notes -->\n<div style=\"margin-left: 133px; margin-top: 18px;margin-bottom: -36px;\">Pinned</div>\n\n<div class=\"class-container\" fxLayoutAlign=\"center center\">\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxFlex=\"900px\" fxLayoutGap=\"20px\">\n    <div *ngFor=\"let note of notes | searchFilter:searchText | noteFilter: {isPin:true,inTrash:false,isArchive:false}\" class={{noteView}}>\n      <!-- <div *ngIf=\"note.noteImage\">\n            <img [src]=\"note.imageString\"/>\n        </div> -->\n      <!-- <div *ngFor=\"let note of notes\"> -->\n      <!-- <div *ngIf=\"note.isPin===true && note.isArchive===false && note.inTrash===false\" style=\"margin-left: 300px;\"> -->\n\n      <app-notedisplay [note]=\"note\"></app-notedisplay>\n\n      <!-- <mat-card class=\"pin\" fxFlex=\"230px\">\n\n          <div style=\"margin-left: 90%;\">\n            <img src=\"{{unpinSvg}}\" (click)=\"updateNotes(note,status,'pin')\">\n          </div>\n\n          <mat-card-header>\n            <div [innerHTML]=\"note.title\"></div>\n          </mat-card-header>\n\n          <mat-card-content>\n            <div [innerHTML]=\"note.description\"></div>\n          </mat-card-content>\n\n        </mat-card> -->\n      <!-- </div> -->\n    </div>\n  </div>\n</div>\n<!-- Close of Pin div -->\n\n<!-- Display cards that is not pin/trash/archive -->\n\n<!-- <div class=\"class-container\" fxLayoutAlign=\"center center\"> -->\n<div style=\"margin-left: 133px; margin-top: 8px; visibility: visible;\">Unpinned</div>\n\n<div class=\"class-container\" fxLayoutAlign=\"center center\">\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <div fxLayout=\"row wrap\"  fxLayoutAlign=\"space-between center\"  class=\"mat-div\" fxFlex=\"900px\"> \n         <div *ngFor=\"let note of notes | noteFilter: {isPin:false,inTrash:false,isArchive:false}\" class={{noteView}}>\n            <app-notedisplay [note]=\"note\"></app-notedisplay>\n         </div>\n      </div>\n</div>\n</div>\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" > -->\n    <!-- <div *ngFor=\"let note of notes | noteFilter: {isPin:false,isTrash:false,isArchive:false}\"> -->\n    <!-- <div *ngFor=\"let note of notes\"> -->\n      <!-- <div *ngIf=\"!note.isPin\"> -->\n      <!-- <div *ngIf=\"note.inTrash===false && note.isPin===false && note.isArchive===false\"> -->\n        <!-- <note-details [note]=\"note\" *ngFor=\"let note of notes\"></note-details> -->\n        <!-- <mat-card [style.background]=\"note.color\" class=\"mat-design\" (click)=\"openNoteDialog(note)\">\n\n          <div *ngIf=\"note.noteImage\">\n            <img class=\"image\" [src]=\"note.imageString\"/>\n          </div>\n          \n            <div> \n              <mat-card-header>\n                <div [innerHTML]=\"note.title\"></div>\n              </mat-card-header>\n\n              <mat-card-content>\n                <div [innerHTML]=\"note.description\"></div>\n              </mat-card-content>\n            </div>\n          \n\n          <div style=\"margin-left:90%;\">\n            <img src=\"/assets/icons/pin.svg\" (click)=\"updateNotes(note,'true','pin')\">\n          </div> -->\n\n          <!-- For showing reminder -->\n          <!-- <div *ngIf=\"note.reminder!=null\">\n            <div mat-menu-item fxLayout=\"row\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\" selected=\"true\" class=\"matchip\">\n                  <mat-icon style=\"color: #fafafa;\">schedule</mat-icon>\n                  <label>{{note.reminder|date:'MMM dd,y, hh:mm a'}}</label>\n                  <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"saveReminder(note,'null')\">\n                </mat-chip>\n              </mat-chip-list>\n\n            </div>\n          </div> -->\n\n          <!-- For showing label -->\n          <!-- <div *ngIf=\"note.labels!=null\">\n            <div *ngFor=\"let label of note.labels\">\n              <div fxLayout=\"row\" fxLayoutGap=\"5px\">\n\n                <div>\n                  <mat-chip-list>\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"matchip\">\n                      {{label.labelTitle}}\n                      <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"removeLabel(note, label.labelId,'null')\">\n                    </mat-chip>\n                  </mat-chip-list>\n                </div>\n\n              </div>\n            </div>\n          </div> -->\n\n          <!-- For showing collaborator -->\n          <!-- <div *ngIf=\"note.collaborators!=null\">\n            <div *ngFor=\"let collaborator of note.collaborators\">\n\n              <mat-chip-list>\n                <mat-chip>\n                  {{collaborator.sharedUser.email}} -->\n                  <!-- <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\"> -->\n                <!-- </mat-chip>\n              </mat-chip-list>\n\n            </div>\n          </div> -->\n\n          <!-- All buttons row Wrap -->\n          <!-- <div fxLayout=\"row\" style=\"margin-left: -20px;\"> -->\n\n            <!-- Reminder Div -->\n            <!-- <div>\n              <button mat-icon-button [matMenuTriggerFor]=\"remind\">\n                <img src=\"/assets/icons/reminder.svg\">\n              </button>\n\n              <mat-menu #remind=\"matMenu\">\n                <div>\n                  <button type=\"submit\" mat-menu-item>\n                    <b>Reminder:</b>\n                  </button>\n                </div>\n\n                <button type=\"submit\" mat-menu-item>\n                  <div *ngFor=\"let note of notes\">\n                    <div style=\"user-select: none;text-align: left;\" (click)=\"saveReminder(note,'today')\">\n                      <span> Later today &nbsp;&nbsp;&nbsp;</span>\n                      <span> 8:00 PM</span>\n                    </div>\n                  </div>\n                </button>\n\n                <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'tomorrow')\">\n                  <div style=\"user-select: none;text-align: left;\">\n                    <span>Tomorrow &nbsp;&nbsp;</span>\n                    <span> &nbsp;&nbsp; 8:00 PM</span>\n                  </div>\n                </button>\n\n                <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'nextWeek')\">\n                  <div style=\"user-select: none;text-align: left;\">\n                    <span>Next week &nbsp;&nbsp;</span>\n                    <span> &nbsp;&nbsp; Mon,8:00 AM</span>\n                  </div>\n                </button>\n\n                <div>\n                  <button mat-button [mat-menu-trigger-for]=\"calender\">\n                    <mat-icon>schedule</mat-icon>\n                    <span>Pick date and time</span>\n                  </button>\n                </div>\n                <mat-menu #calender=\"matMenu\">\n                  <button mat-menu-item (click)=\"saveReminder(note,'pickDate')\">\n                    <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                  </button>\n                </mat-menu>\n\n                <button type=\"submit\" mat-menu-item>\n                  <mat-icon>room</mat-icon>\n                  <span>Pick place</span>\n                </button>\n              </mat-menu>\n            </div> -->\n\n            <!-- Collaborator Div -->\n            <!-- <div>\n              <button mat-menu-item (click)=\"openCollaboratorDialog(note)\">\n                <mat-icon style=\"margin-left: -17px;\n                margin-top: -6px;\">person_add</mat-icon>\n              </button>\n            </div> -->\n\n            <!-- Color Div -->\n            <!-- <div>\n              <button mat-icon-button [matMenuTriggerFor]=\"color\">\n                <mat-icon style=\"    margin-left: -60px;\">color_lens</mat-icon> -->\n                <!-- assets/icons/color.svg -->\n              <!-- </button>\n\n              <mat-menu #color=\"matMenu\">\n                <div>\n                  <a *ngFor=\"let color of colors\">\n                    <img src=\"{{color.path}}\" (click)=\"note.color=color.color; updateNotes(note,'true','color')\">\n                  </a>\n                </div>\n              </mat-menu>\n            </div> -->\n\n            <!-- Image div -->\n            <!-- <div style=\"margin-left: -37px;\">\n              <button mat-icon-button [matMenuTriggerFor]=\"imagemenu\">\n                <mat-icon>image</mat-icon> -->\n                <!-- assets/icons/color.svg -->\n              <!-- </button>\n           \n\n            <mat-menu #imagemenu=\"matMenu\">\n              <div>\n                <input type=\"file\" (click)=\"handleFileInput($event.target.files, note.noteId)\">\n              </div> -->\n              <!-- <button mat-icon-button type=\"file\" (click)=\"handleFileInput($event.target.files)\">\n                  <mat-icon>image</mat-icon>\n              </button>   -->\n\n            <!-- </mat-menu>\n          </div> -->\n\n            <!-- Archive Div -->\n            <!-- <div style=\"    margin-left: -19px;\">\n              <button mat-button type=\"submit\" (click)=\"updateNotes(note,'true','archive')\">\n                <mat-icon>archive</mat-icon>\n              </button>\n            </div> -->\n\n            <!-- Delete Div -->\n            <!-- <div style=\"margin-left: -36px;\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon style=\"color:royalblue\">more_vert</mat-icon>\n              </button>\n\n              <mat-menu #menu=\"matMenu\">\n                <button type=\"submit\" mat-menu-item (click)=\"updateNotes(note,'true','trash')\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete note</span>\n                </button>\n\n                <button type=\"submit\" mat-menu-item [matMenuTriggerFor]=\"label\" (click)=\"addLabel()\">\n                  <mat-icon style=\"color:royalblue\">label</mat-icon>\n                  <span>Change Labels</span>\n                </button>\n\n                <mat-menu #label=\"matMenu\">\n                  <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n                    <div>\n                      <span>label note</span>\n                    </div>\n\n                    <div>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Enter label name\">\n                        <button mat-button>\n                          <mat-icon>search</mat-icon>\n                        </button>\n                      </mat-form-field>\n                    </div>\n\n                    <div *ngIf=\"labels!=null\">\n                      <div *ngFor=\"let label of labels\">\n                        <label>\n                          <input type=\"checkbox\" name=\"labels\" value=\"{{label.labelTitle}}\" [(ngModel)]=\"label.checked\" (change)=\"optionChange($event, label.labelId, note.noteId)\"\n                          /> {{label.labelTitle}}\n                        </label>\n                      </div>\n                    </div>\n\n                  </div>\n                </mat-menu>\n\n              </mat-menu>\n            </div>\n\n          </div>\n        </mat-card>\n      </div> -->\n    <!-- </div> -->\n  <!-- </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/component/notes/note.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collaborator_collaborator_component__ = __webpack_require__("./src/app/component/collaborator/collaborator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_note_update_note_component__ = __webpack_require__("./src/app/component/update-note/update-note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is notes component contains methods to create and update notes
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoteListComponent = /** @class */ (function () {
    function NoteListComponent(userservice, noteServiceObj, labelServiceObj, dialog) {
        var _this = this;
        this.userservice = userservice;
        this.noteServiceObj = noteServiceObj;
        this.labelServiceObj = labelServiceObj;
        this.dialog = dialog;
        this.model = {};
        this.inTrash = {};
        this.isArchive = {};
        this.isPin = {};
        this.response = {};
        this.searchText = "";
        this.fileToUpload = null;
        this.noteView = localStorage.getItem('class');
        this.pinSvg = '/assets/icons/pin.svg';
        this.unpinSvg = '/assets/icons/unpin.svg';
        this.colorSvg = '/assets/icons/colorSvg';
        this.crossSvg = '/assets/icons/cross.svg';
        this.colors = [{
                color: '#FF0000',
                path: '/assets/icons/Red.png'
            }, {
                color: '#fcff77',
                path: '/assets/icons/yellow.png'
            }, {
                color: '#80ff80',
                path: '/assets/icons/green.png'
            }, {
                color: '#9ee0ff',
                path: '/assets/icons/skyblue.png'
            }, {
                color: '#7daaf2',
                path: '/assets/icons/blue.png'
            }, {
                color: '#9966ff',
                path: '/assets/icons/purple.png'
            }, {
                color: '#ff99cc',
                path: '/assets/icons/pink.png'
            }
        ];
        userservice.searchObservable$.subscribe(function (FormData) {
            _this.searchText = FormData;
            console.log(_this.searchText);
        });
    }
    /**@method:This ngOnInit method loads all the notes at the time of initialization */
    NoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.refreshNote();
        // this.noteServiceObj.reloadNotes()
        this.readNote();
        //this.readLabel();
        this.noteServiceObj.getStatus()
            .subscribe(function (status) {
            _this.noteView = status ? "list-view" : "grid-view";
            localStorage.setItem('class', _this.noteView);
        });
    };
    /**@method:This method is to fetch notes */
    NoteListComponent.prototype.readNote = function () {
        var _this = this;
        this.noteServiceObj.getnotes()
            .subscribe(function (response) {
            _this.notes = response;
            //debugger;
            _this.notes.forEach(function (note) {
                note.imageString = 'data:image/JPEG;base64,' + note.noteImage;
            });
            console.log("Notes fetched successfully", _this.notes);
        });
    };
    ;
    /**@method: This method is to fetch labels */
    NoteListComponent.prototype.readLabel = function () {
        var _this = this;
        this.labelServiceObj.getlabels()
            .subscribe(function (response) {
            _this.labels = response;
            console.log("Labels fetched successfully..");
        });
    };
    // refreshPage(): void {
    //   window.location.reload();
    // }
    /**@method:This method is to create notes */
    NoteListComponent.prototype.createNote = function () {
        var _this = this;
        this.noteServiceObj.createNotes(this.model)
            .subscribe(function (response) {
            //  this.refreshPage();
            _this.noteServiceObj.reloadNotes();
            console.log("Note Created successfully..", response, _this.notes);
        });
        /*   let self = this;
            this.noteServiceObj.createNotes(this.model).subscribe(function(response){
              console.log("Note Created successfully..", response, self.notes,this.notes);
            });
        */
    };
    ;
    /**@method: This method is to fetch labels */
    NoteListComponent.prototype.refreshLabel = function () {
        this.labelServiceObj.reloadLabels();
    };
    /**@method:This method is to move the notes to trash
     * @param:note,status,field
     */
    NoteListComponent.prototype.update = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            _this.noteServiceObj.reloadNotes();
            console.log(response);
        });
    };
    NoteListComponent.prototype.updateNotes = function (note, status, field) {
        if (field == 'trash') {
            note.inTrash = status;
            this.update(note);
            console.log("Moved notes to trash..");
        }
        else if (field == 'archive') {
            note.isArchive = status;
            this.update(note);
            console.log("Moved notes to archive...");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Pin note..");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Unpinned note..");
        }
        else if (field == 'color') {
            this.update(note);
            console.log("Set color");
        }
    };
    ;
    /**@method:This method is to set reminder of notes
     * @param:note
     * @param:field
     */
    NoteListComponent.prototype.remind = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.readNote();
        });
    };
    NoteListComponent.prototype.saveReminder = function (note, field) {
        var today = new Date();
        if (field == 'today') {
            today.setHours(20);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'tomorrow') {
            today.setDate(today.getDate() + 1);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'nextWeek') {
            today.setDate(today.getDate() + 6);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'pickDate') {
            today.setDate(today.getDate());
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'null') {
            note.reminder = null;
            this.remind(note);
        }
    };
    /**@method: This method is to add label */
    NoteListComponent.prototype.addLabel = function () {
        var _this = this;
        this.labelServiceObj.getLabels()
            .subscribe(function (response) {
            _this.labels = response;
            _this.noteServiceObj.reloadNotes();
            console.log("Label fetched successfully..", response, _this.labels);
        });
    };
    NoteListComponent.prototype.optionChange = function (status, labelId, noteId) {
        console.log("Checkk..", status.bubbles);
        this.labelServiceObj.addRemoveLabel(status, labelId, noteId)
            .subscribe(function (response) {
            console.log("status changed..");
        });
    };
    /**@method:This method is to remove label
     * @param note
     * @param labelId
     * @param field
    
    removeLabel(note,labelId,field){
    
      note.labels=null;
      this.labelServiceObj.addRemoveLabel(labelId,note,field);
                           console.log(note,labelId,field);
    }*/
    NoteListComponent.prototype.removeLabel = function (labelId) {
        var _this = this;
        this.model.labelId = labelId;
        this.labelServiceObj.deleteLabel(labelId)
            .subscribe(function (response) {
            _this.noteServiceObj.reloadNotes();
            console.log("Removed label", response);
        });
    };
    /**@method: This method is to open collaborator dialog
     * @param note
    */
    NoteListComponent.prototype.openCollaboratorDialog = function (note) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__collaborator_collaborator_component__["a" /* CollaboratorComponent */], {
            data: note,
            width: '350px',
            height: '210px'
        });
    };
    ;
    /**@method:This method is to upload a image
     * @param noteId
     * @param event
     */
    NoteListComponent.prototype.handleFileInput = function (event, noteId) {
        this.model.event = event;
        console.log("Note image->>", event);
        this.model.noteId = noteId;
        this.noteServiceObj.uploadImage(this.model)
            .subscribe(function (response) {
            console.log("Image uploaded successfully..");
        });
    };
    NoteListComponent.prototype.openNoteDialog = function (note) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__update_note_update_note_component__["a" /* UpdateNoteComponent */], {
            data: note,
            width: '350px',
        });
    };
    NoteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes',
            template: __webpack_require__("./src/app/component/notes/note.list.component.html"),
            styles: [__webpack_require__("./src/app/component/notes/note.list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service__["c" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_4__service__["b" /* LabelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], NoteListComponent);
    return NoteListComponent;
}());

;


/***/ }),

/***/ "./src/app/component/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "/* .register-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n} */\n\n.toptoolbar{\n  background-color: #3f51b5; \n  position: -webkit-sticky; \n  position: sticky; \n  top: 0;z-index: 1000;\n}\n\n.mat-field{\n  width: 500px;\n}"

/***/ }),

/***/ "./src/app/component/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar class=\"toptoolbar\">\n        <h3 style=\"text-align:left; color: #ececf8\">\n            <i>Fundoo Notes</i>\n        </h3>\n\n        <div fxLayoutAlign=\"center center\">\n            <mat-card style=\"margin-left: 223px; margin-top: 559px; width: 499px;\">\n               \n                <h5 style=\"text-align:center; color: blue\">\n                    <i>User Registration</i>\n                </h5>\n\n                <form style=\"text-align:center\" #registrationFrom=\"ngForm\" (ngSubmit)=\"register()\">\n\n                    <div class=\"registercontainer\">\n                        <mat-form-field class=\"mat-field\">\n                            <input matInput placeholder=\"name\" name=\"name\" type=\"text\" [formControl]=\"nameControl\" [(ngModel)]=\"model.name\">\n                            <mat-error *ngIf=\"nameControl.hasError('required')\">Name is required</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"registercontainer\">\n                        <mat-form-field class=\"mat-field\">\n                            <input matInput placeholder=\"email\" name=\"email\" type=\"email\" [formControl]=\"emailControl\" [(ngModel)]=\"model.email\">\n                            <mat-error *ngIf=\"emailControl.hasError('required')\">Email Address is required</mat-error>\n                            <mat-error *ngIf=\"emailControl.hasError('pattern') && !emailControl.hasError('required') \">Enter Valid Email address</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"registercontainer\">\n                        <mat-form-field class=\"mat-field\">\n                            <input matInput placeholder=\"password\" name=\"password\" type=\"password\" [formControl]=\"passwordControl\" [(ngModel)]=\"model.password\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">Password is required</mat-error>\n                            <mat-error *ngIf=\"passwordControl.hasError('pattern') && !passwordControl.hasError('required') \">Enter a valid Password</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"registercontainer\">\n                        <mat-form-field class=\"mat-field\">\n                            <input matInput placeholder=\"mobile number\" name=\"mobileNo\" type=\"tel\" [formControl]=\"mobileControl\" [(ngModel)]=\"model.mobileNo\">\n                            <mat-error *ngIf=\"mobileControl.hasError('required')\">Mobile number required</mat-error>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"button-row\">\n                            <!-- [disabled]=\"nameControl.invalid || mobileControl.invalid || emailControl.invalid || passwordControl.invalid\" -->\n                        <button mat-button color=\"primary\" type=\"submit\">Register</button>\n                    </div>\n                </form>\n            </mat-card>\n        </div>\n    </mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_register_service__ = __webpack_require__("./src/app/service/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*****
 * @author Sana Shaikh
 * @since 9/04/2018
 * @description This is register component contains a method to register user.
 */




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userservice, registerSericeObj) {
        this.userservice = userservice;
        this.registerSericeObj = registerSericeObj;
        this.model = {};
        this.nameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
        ]);
        this.emailControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]);
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('.{4,12}'),
        ]);
        this.mobileControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
        ]);
    }
    /*****
     * @method resetForm
     * @argument {form?:}
     * @description This method is used to reset form fields to null
     */
    RegisterComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    /**@method: This method is to set form fields to null*/
    RegisterComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.model = {
            name: '',
            email: '',
            password: '',
            mobileNo: ''
        };
    };
    /**@method:This method is to call register Api */
    RegisterComponent.prototype.register = function () {
        console.log(this.model);
        this.registerSericeObj.register(this.model)
            .subscribe(function (data) { return console.log(data); });
        this.resetForm();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/component/register/register.component.html"),
            styles: [__webpack_require__("./src/app/component/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_register_service__["a" /* RegisterService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/reminder/reminder.component.css":
/***/ (function(module, exports) {

module.exports = ".matchip{\n    block-size: 10px;\n}\n\n.maticon{\n    color: #fafafa;\n}\n\n.mat-card{\n    top:100px;\n}\n\n.mat-div{\n    margin-top: 106px;\n}"

/***/ }),

/***/ "./src/app/component/reminder/reminder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"class-container\" fxLayoutAlign=\"center center\">\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <div fxLayout=\"row wrap\"  fxLayoutAlign=\"space-between center\"  class=\"mat-div\" fxFlex=\"900px\"> \n         <div *ngFor=\"let note of notes\" class={{noteView}}>\n            <div *ngIf=\"note.reminder!=null\">\n              <app-notedisplay [note]=\"note\"></app-notedisplay>\n            </div>\n         </div>\n      </div>\n</div>\n</div>\n\n<!-- <div class=\"class-container\" fxLayoutAlign=\"center center\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxFlex=\"1000px\" fxLayoutGap=\"30px\">\n      <div *ngFor=\"let note of notes\">\n          <div *ngIf=\"note.reminder!=null\">\n\n          \n          <mat-card [style.background]=\"note.color\" class=\"mat-card\">\n  \n            <div style=\"margin-left:90%;\">\n              <img src=\"/assets/icons/pin.svg\" (click)=\"updateNotes(note,'true','pin')\">\n            </div>\n  \n            <mat-card-header>\n              <div [innerHTML]=\"note.title\"></div>\n            </mat-card-header>\n  \n            <mat-card-subtitle>\n              <div [innerHTML]=\"note.description\"></div>\n            </mat-card-subtitle>\n\n            <div *ngIf=\"note.reminder!=null\">\n                <div mat-menu-item fxLayout=\"row\">\n                    <mat-chip-list>\n                          <mat-chip color=\"primary\" selected=\"true\" class=\"matchip\">\n                              <mat-icon style=\"color: #fafafa;\">schedule</mat-icon>\n                              <label>{{note.reminder|date:'MMM dd,y, hh:mm a'}}</label>\n                              <img style=\"margin-left: 8px;\" src=\"{{crossSvg}}\" (click)=\"saveReminder(note,'null')\">\n                          </mat-chip>\n                    </mat-chip-list>\n                 \n                  </div>\n            <div>\n  \n             </div>\n            </div>\n  \n            \n            <div fxLayout=\"row wrap\">\n  \n             \n              <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"remind\">\n                  <img src=\"/assets/icons/reminder.svg\">\n                </button>\n  \n                <mat-menu #remind=\"matMenu\">\n                  <div>\n                    <button type=\"submit\" mat-menu-item>\n                      <b>Reminder:</b>\n                    </button>\n                  </div>\n  \n                  <button type=\"submit\" mat-menu-item>\n                      <div *ngFor=\"let note of notes\">\n                          <div style=\"user-select: none;text-align: left;\" (click)=\"saveReminder(note,'today')\">\n                            <span> Later today &nbsp;&nbsp;&nbsp;</span>\n                             <span> 8:00 PM</span>\n                          </div>\n                      </div>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'tomorrow')\">\n                    <div style=\"user-select: none;text-align: left;\">\n                      <span>Tomorrow &nbsp;&nbsp;</span>\n                      <span> &nbsp;&nbsp; 8:00 PM</span>\n                    </div>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note,'nextWeek')\">\n                    <div style=\"user-select: none;text-align: left;\">\n                      <span>Next week &nbsp;&nbsp;</span>\n                      <span> &nbsp;&nbsp; Mon,8:00 AM</span>\n                    </div>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"saveReminder(note, 'pick')\">\n                    <mat-icon>schedule</mat-icon>\n                    <span>Pick date and time</span>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item>\n                    <mat-icon>room</mat-icon>\n                    <span>Pick place</span>\n                  </button>\n                </mat-menu>\n              </div>\n  \n             \n              <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"color\">\n                  <mat-icon>color_lens</mat-icon>\n                 \n                </button>\n  \n                <mat-menu #color=\"matMenu\">\n                  <div>\n                    <a *ngFor=\"let color of colors\">\n                      <img src=\"{{color.path}}\" (click)=\"note.color=color.color;updateNotes(note,'true','color')\">\n                    </a>\n                  </div>\n                </mat-menu>\n              </div>\n  \n             \n              <div>\n                <button mat-button type=\"submit\" (click)=\"updateNotes(note,'true','archive')\">\n                  <mat-icon>archive</mat-icon>\n                </button>\n              </div>\n  \n             \n              <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n  \n                <mat-menu #menu=\"matMenu\">\n                  <button type=\"submit\" mat-menu-item (click)=\"updateNotes(note,'true','trash')\">\n                    <mat-icon>delete</mat-icon>\n                    <span>Delete note</span>\n                  </button>\n  \n                  <button type=\"submit\" mat-menu-item (click)=\"addLabel()\">\n                    <mat-icon>label</mat-icon>\n                    <span>Add Label</span>\n                  </button>\n                </mat-menu>\n              </div>\n  \n            </div>\n          </mat-card>\n  \n        </div>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/component/reminder/reminder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for reminding the notes
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReminderComponent = /** @class */ (function () {
    function ReminderComponent(userServiceObj, noteServiceObj) {
        this.userServiceObj = userServiceObj;
        this.noteServiceObj = noteServiceObj;
        this.crossSvg = '/assets/icons/cross.svg';
    }
    ReminderComponent.prototype.ngOnInit = function () {
        this.refreshNote();
    };
    /**@method:This method is to fetch notes */
    ReminderComponent.prototype.refreshNote = function () {
        var _this = this;
        this.noteServiceObj.getNotes()
            .subscribe(function (response) {
            _this.notes = response;
            console.log("Notes fetched successfully..", response);
        });
    };
    ;
    /**@method:This method is to move the notes to trash
     * @param:note,status,field
     */
    ReminderComponent.prototype.update = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.refreshNote();
        });
    };
    ReminderComponent.prototype.updateNotes = function (note, status, field) {
        if (field == 'trash') {
            note.inTrash = status;
            this.update(note);
            console.log("Moved notes to trash..");
        }
        else if (field == 'archive') {
            note.isArchive = status;
            this.update(note);
            console.log("Moved notes to archive...");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Pin note..");
        }
        else if (field == 'pin') {
            note.isPin = status;
            this.update(note);
            console.log("Unpinned note..");
        }
        else if (field == 'color') {
            this.update(note);
            console.log("Set color");
        }
    };
    ;
    /**@method:This method is to set reminder of notes
     * @param:note,field
     */
    ReminderComponent.prototype.remind = function (note) {
        var _this = this;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.refreshNote();
        });
    };
    ReminderComponent.prototype.saveReminder = function (note, field) {
        var today = new Date();
        if (field == 'today') {
            today.setHours(20);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'tomorrow') {
            today.setDate(today.getDate() + 1);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'nextWeek') {
            today.setDate(today.getDate() + 6);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'null') {
            note.reminder = null;
            this.remind(note);
        }
    };
    ReminderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reminder',
            template: __webpack_require__("./src/app/component/reminder/reminder.component.html"),
            styles: [__webpack_require__("./src/app/component/reminder/reminder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service__["c" /* NoteService */]])
    ], ReminderComponent);
    return ReminderComponent;
}());



/***/ }),

/***/ "./src/app/component/resetpassword/resetpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/resetpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n\n    <mat-card style=\"width: max-content;margin-top:5%;\">\n        <h3 style=\"text-align:left; color: blue\"><i>Fundoo Notes</i></h3>\n    \n      <form style=\"text-align:center\" #resetpassForm=\"ngForm\" (ngSubmit)=\"reset()\">\n    \n        <div class=\"resetpasscontainer\">\n          <mat-form-field>\n            <h5 style=\"color:#3f51b5;\">Enter new password</h5>\n            <input matInput placeholder=\"password\" type=\"text\" name=\"password\" [(ngModel)]=\"model.password\">\n          </mat-form-field>\n        </div>\n    \n        <div class=\"button-row\">\n                <button mat-button color=\"primary\">Reset password</button>\n        </div>\n        </form> \n      </mat-card>\n    </div>\n  "

/***/ }),

/***/ "./src/app/component/resetpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/**
*@description:This is reset password component contains a  method to call reset new password Api
* @author: SANA SHAIKh
* @since: 9/April/2018
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(userServiceObj) {
        this.userServiceObj = userServiceObj;
        this.model = {};
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        console.log(window.location.search);
    };
    /**@method: This method is set new password */
    ResetpasswordComponent.prototype.reset = function () {
        console.log(this.model);
        var urlPath = 'resetnewpassword' + window.location.search;
        this.userServiceObj.postService(urlPath, this.model)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ResetpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resetpassword',
            template: __webpack_require__("./src/app/component/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__("./src/app/component/resetpassword/resetpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/trash/trash.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/trash/trash.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"class-container\" fxLayoutAlign=\"center center\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxFlex=\"1000px\" fxLayoutGap=\"10px\">\n    <div *ngFor=\"let note of notes\">\n      <div *ngIf=\"note.inTrash===true\">\n      <mat-card style=\"margin-top: 100px;margin-right: 20px;\">\n  \n        <mat-card-header>\n          <div [innerHTML]=\"note.title\"></div>\n        </mat-card-header>\n  \n        <mat-card-subtitle>\n          <div [innerHTML]=\"note.description\"></div>\n        </mat-card-subtitle>\n  \n        <div>\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n  \n          <mat-menu #menu=\"matMenu\">\n              <button  type=\"submit\" mat-menu-item (click)=\"deleteForever(note)\">\n                 <mat-icon>delete_forever</mat-icon> \n                <span>Delete Forever</span>\n              </button>\n        \n              <button type=\"submit\" mat-menu-item (click)=\"restore(note)\">\n                  <mat-icon>restore_page</mat-icon>\n                <span>Restore</span>\n              </button>\n            </mat-menu>\n        </div>\n      </mat-card>\n    </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/component/trash/trash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("./src/app/service/index.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for trash contains 2 methods i.e. restore notes and delete notes forever
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrashComponent = /** @class */ (function () {
    function TrashComponent(userservice, noteServiceObj) {
        this.userservice = userservice;
        this.noteServiceObj = noteServiceObj;
        this.inTrash = {};
    }
    TrashComponent.prototype.ngOnInit = function () {
        this.refreshNote();
    };
    /**@method:This method is to fetch notes */
    TrashComponent.prototype.refreshNote = function () {
        var _this = this;
        this.noteServiceObj.getNotes()
            .subscribe(function (response) {
            _this.notes = response;
            console.log("Notes fetched successfully..", response);
        });
    };
    ;
    /**
    * @method:This method is to restore the deleted notes
    * @param note
    */
    TrashComponent.prototype.restore = function (note) {
        var _this = this;
        console.log("Restore notes from trash..", note);
        note.inTrash = false;
        this.noteServiceObj.updateNotes(note)
            .subscribe(function (response) {
            console.log(response);
            _this.refreshNote();
        });
    };
    ;
    /**
    * @method:This method is to delete notes permanently
    * @param note
    */
    TrashComponent.prototype.deleteForever = function (note) {
        var _this = this;
        console.log("noteId", note);
        this.noteServiceObj.deleteNotes(note)
            .subscribe(function (response) {
            console.log("Deleted Successfully..", response);
            _this.refreshNote();
        });
    };
    ;
    TrashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trash',
            template: __webpack_require__("./src/app/component/trash/trash.component.html"),
            styles: [__webpack_require__("./src/app/component/trash/trash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["d" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service__["c" /* NoteService */]])
    ], TrashComponent);
    return TrashComponent;
}());



/***/ }),

/***/ "./src/app/component/update-note/update-note.component.css":
/***/ (function(module, exports) {

module.exports = ".image{\n    margin-top: -23px;\n    max-width: 326px;\n    min-width: 350px;\n    margin-left: -24px;\n}\n\n.icon{\n    margin-left: 242px;\n    margin-top: -10px;\n     color:#3f51b5;\n     -webkit-user-select: none;\n        -moz-user-select: none;\n         -ms-user-select: none;\n             user-select: none;\n}\n\n.btn-update{\n    margin-left: 234px;\n    margin-top: 20px;\n    color:#3f51b5;\n}\n\n[contentEditable=true]:empty:before{\n    content:attr(data-text)\n  }\n\n.editable {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  outline: none;\n  line-height: 20px; \n  } \n"

/***/ }),

/***/ "./src/app/component/update-note/update-note.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- <div *ngFor=\"let note of notes\"> -->\n        <div *ngIf=\"data.noteImage\">\n            <img class=\"image\" [src]=\"data.imageString\"/>\n            <!-- <button mat-button (click)=\"deleteImage(data)\" class=\"icon\"> -->\n                <button mat-button (click)=\"deleteImage(data)\" class=\"icon\">\n                    <mat-icon>delete</mat-icon>\n            </button>\n        </div>\n       \n    <!-- </div> -->\n\n    <div id=\"updateNoteTitle\" contenteditable='true' data-text='Title' name=\"title\" class=\"editable line-height\" (input)=\"data.title=$event.target.innerHTML\">\n    </div>\n\n    <div id=\"updateNoteDescription\" contenteditable='true' data-text='Take a note...' class=\"editable line-height\" name=\"description\" (input)=\"data.description=$event.target.innerHTML\">\n    </div>\n\n    <div>\n        <button mat-button class=\"btn-update\" (click)=\"updateNote()\">Update</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/component/update-note/update-note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateNoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("./src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UpdateNoteComponent = /** @class */ (function () {
    function UpdateNoteComponent(data, userServiceObj, noteServiceObj, dialogRef) {
        this.data = data;
        this.userServiceObj = userServiceObj;
        this.noteServiceObj = noteServiceObj;
        this.dialogRef = dialogRef;
        this.model = {};
    }
    UpdateNoteComponent.prototype.ngOnInit = function () {
        document.getElementById('updateNoteTitle').innerHTML = this.data.title;
        document.getElementById('updateNoteDescription').innerHTML = this.data.description;
    };
    UpdateNoteComponent.prototype.updateNote = function () {
        var _this = this;
        console.log(this.data);
        this.noteServiceObj.updateNotes(this.data)
            .subscribe(function (data) {
            _this.noteServiceObj.reloadNotes();
            _this.dialogRef.close();
        });
    };
    UpdateNoteComponent.prototype.deleteImage = function (note) {
        this.data.noteId = note.noteId;
        this.noteServiceObj.deleteImage(this.data.noteId)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    UpdateNoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-note',
            template: __webpack_require__("./src/app/component/update-note/update-note.component.html"),
            styles: [__webpack_require__("./src/app/component/update-note/update-note.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__service__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__service__["c" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], UpdateNoteComponent);
    return UpdateNoteComponent;
}());



/***/ }),

/***/ "./src/app/component/updatelabel/updatelabel.component.css":
/***/ (function(module, exports) {

module.exports = ".disble:focus {\n    outline: none;\n}\n\n.input {\n    background-color: transparent;\n    border: 0px solid;\n    height: 20px;\n    width: 160px;\n    color: #CCC;\n}"

/***/ }),

/***/ "./src/app/component/updatelabel/updatelabel.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"25px\">\n\n  <div>\n    <span>Edit labels</span>\n  </div>\n  \n  <div>\n    <mat-form-field>\n      <input matInput placeholder=\"Create new label\" [(ngModel)]=\"model.labelTitle\">\n    </mat-form-field>\n    <i class=\"material-icons\" (click)=\"createLabel()\">done</i>\n  </div>\n\n  <div *ngFor=\"let labelObj of label\">\n    <input class=\"input\" #inlineEditControl [(ngModel)]=\"labelObj.labelTitle\" />\n\n    <button mat-button type=\"submit\" (click)=\"updateLabel(labelObj)\">\n      <mat-icon style=\"color:royalblue\">create</mat-icon>\n    </button>\n\n    <button mat-button type=\"submit\" (click)=\"deleteLabel(labelObj)\">\n      <mat-icon style=\"color:royalblue\">delete_forever</mat-icon>\n    </button>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/updatelabel/updatelabel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatelabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_label_service__ = __webpack_require__("./src/app/service/label.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_note_service__ = __webpack_require__("./src/app/service/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__("./src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UpdatelabelComponent = /** @class */ (function () {
    function UpdatelabelComponent(data, userServiceObj, noteServiceObj, labelServiceObj, dialogRef) {
        this.data = data;
        this.userServiceObj = userServiceObj;
        this.noteServiceObj = noteServiceObj;
        this.labelServiceObj = labelServiceObj;
        this.dialogRef = dialogRef;
        this.model = {};
        this.label = data.labels;
    }
    UpdatelabelComponent.prototype.ngOnInit = function () {
        //this.refreshLabel();
    };
    UpdatelabelComponent.prototype.refreshPage = function () {
        window.location.reload();
    };
    /**@method: This method is to fetch labels */
    UpdatelabelComponent.prototype.refreshLabel = function () {
        this.labelServiceObj.reloadLabels();
        // this.labelServiceObj.getLabels()
        //                       .toPromise()
        //                         .then(response=>{
        //                            console.log("Labels fetched successfully..");
        //                         })
    };
    /**@method:This method is to create labels */
    UpdatelabelComponent.prototype.createLabel = function () {
        var _this = this;
        this.labelServiceObj.createLabel(this.model)
            .subscribe(function (response) {
            console.log("Label Created successfully..", response, _this.label);
            _this.dialogRef.close();
            // this.refreshPage();
            _this.refreshLabel();
        });
    };
    ;
    UpdatelabelComponent.prototype.updateLabel = function (labelObj) {
        var _this = this;
        this.data = labelObj;
        console.log(this.data);
        this.labelServiceObj.updateLabel(this.data)
            .subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close();
            _this.refreshLabel();
        });
    };
    UpdatelabelComponent.prototype.deleteLabel = function (labelObj) {
        var _this = this;
        this.data = labelObj;
        console.log(this.data);
        this.labelServiceObj.deleteLabel(this.data)
            .subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close();
            _this.refreshLabel();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UpdatelabelComponent.prototype, "label", void 0);
    UpdatelabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updatelabel',
            template: __webpack_require__("./src/app/component/updatelabel/updatelabel.component.html"),
            styles: [__webpack_require__("./src/app/component/updatelabel/updatelabel.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_4__service__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_2__service_label_service__["a" /* LabelService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], UpdatelabelComponent);
    return UpdatelabelComponent;
}());



/***/ }),

/***/ "./src/app/directive/toolbar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is color directive to change color of ToolBar
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarDirective = /** @class */ (function () {
    function ToolbarDirective(activatedroute, router, elRef) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.elRef = elRef;
    }
    ToolbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log("check->>", this.router.url);
        // this.router.events.pipe(filter(event => event instanceof NavigationEnd)
        //                   .subscribe({URL}:any)
        //                          console.log(event);
        //                           this.changeColor(event.url); 
        //   }
        // });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                console.log(event);
                _this.changeColor(event.url);
            }
        });
        /*this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
      ).subscribe(({url}: any) => {
          console.log(url);
          this.changeColor(url);
      });*/
        /*this.activatedroute.parent.url.subscribe((url)=>{
          console.log(this.router.url)
        })*/
        /*if (url === 'home/createnotes') {
        this.changeColor(url);
      }*/
        /* this.router.events.pairwise().subscribe((url:any) =>{
             console.log('url=', url)
         });*/
    };
    ToolbarDirective.prototype.changeColor = function (url) {
        //  let Url="http://localhost:4200/"
        if (url.indexOf("createnotes") > -1) {
            this.elRef.nativeElement.style['background-color'] = 'skyblue';
            // let url = "createnotes";
            // this.ngAfterViewInit(url);
        }
        else if (url.indexOf("archive") > -1) {
            this.elRef.nativeElement.style['background-color'] = 'gray';
            // this.ngAfterViewInit("home/trash");
        }
        else if (url.indexOf("reminder") > -1) {
            this.elRef.nativeElement.style['background-color'] = 'pink';
        }
        else if (url.indexOf("trash") > -1) {
            this.elRef.nativeElement.style['background-color'] = 'RosyBrown';
        }
        // else if (url.indexOf("archive")){
        //   this.elRef.nativeElement.style['background-color'] = 'black';
        // }
    };
    ToolbarDirective.prototype.ngAfterViewInit = function (url) {
        // if (url === 'home/createnotes') {
        //   this.changeColor("home/createnotes")
        // }
        // else if (url === 'home/trash') {
        //   this.changeColor("home/trash")
        // }
        // this.changeColor("home/trash")
    };
    ToolbarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appToolbar]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ToolbarDirective);
    return ToolbarDirective;
}());



/***/ }),

/***/ "./src/app/filter/labelnote.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelnotePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabelnotePipe = /** @class */ (function () {
    function LabelnotePipe() {
    }
    LabelnotePipe.prototype.transform = function (noteArray, labelId) {
        if (!noteArray)
            return [];
        return noteArray.filter(function (noteObject) {
            if (noteObject.labels.length == 0)
                return false;
            return noteObject.labels.some(function (labelObject) {
                return labelObject.labelId == labelId;
            });
        });
    };
    LabelnotePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'labelnote'
        })
    ], LabelnotePipe);
    return LabelnotePipe;
}());



/***/ }),

/***/ "./src/app/filter/notefilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @description:
 */

var NoteFilterPipe = /** @class */ (function () {
    function NoteFilterPipe() {
    }
    NoteFilterPipe.prototype.transform = function (notes, option) {
        if (!notes)
            return [];
        /*return notes.filter((noteObj)=>{
        return noteObj.isPin == option.isPin
        }); */
        return notes.filter(function (noteObj) {
            var check = true;
            if (option) {
                for (var index in option) {
                    if (noteObj[index] != option[index]) {
                        check = false;
                        break;
                    }
                }
                return check;
            }
            return check;
        });
    };
    NoteFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'noteFilter'
        })
    ], NoteFilterPipe);
    return NoteFilterPipe;
}());



/***/ }),

/***/ "./src/app/filter/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe_1 = SearchFilterPipe;
    /**
     * @param
     */
    SearchFilterPipe.prototype.transform = function (items, searchText) {
        if (!searchText || !items)
            return items;
        return SearchFilterPipe_1.filter(items, searchText);
    };
    /**
       *
       * @param
       *
       */
    SearchFilterPipe.filter = function (items, searchText) {
        searchText = searchText ? searchText : "";
        var toCompare = searchText.toLowerCase();
        return items.filter(function (item) {
            for (var property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    SearchFilterPipe = SearchFilterPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'searchFilter'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
    var SearchFilterPipe_1;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 *
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/noteresponse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteResponse; });
/* unused harmony export Label */
/* unused harmony export Collaborator */
/* unused harmony export User */
/* unused harmony export Note */
var NoteResponse = /** @class */ (function () {
    function NoteResponse() {
    }
    return NoteResponse;
}());

var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var Collaborator = /** @class */ (function () {
    function Collaborator() {
    }
    return Collaborator;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/service/collaborator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is collaborator Service contains method to create collaborator
*/


var CollaboratorService = /** @class */ (function () {
    function CollaboratorService(userServiceObj) {
        this.userServiceObj = userServiceObj;
        this.model = {};
    }
    /**@method: This method is to create collaborator */
    CollaboratorService.prototype.createCollaborator = function (model) {
        return this.userServiceObj.putService('addCollaborator', model);
    };
    /**method: This method is to remove collaborator */
    CollaboratorService.prototype.deleteCollaborator = function (model) {
        return this.userServiceObj.deleteService('deletecollborator', model);
    };
    CollaboratorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], CollaboratorService);
    return CollaboratorService;
}());



/***/ }),

/***/ "./src/app/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__note_service__ = __webpack_require__("./src/app/service/note.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__note_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_service__ = __webpack_require__("./src/app/service/label.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__label_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collaborator_service__ = __webpack_require__("./src/app/service/collaborator.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__collaborator_service__["a"]; });






/***/ }),

/***/ "./src/app/service/label.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Label Service contains method to create label,get label, add and remove label
*/



var LabelService = /** @class */ (function () {
    function LabelService(userServiceObj) {
        this.userServiceObj = userServiceObj;
        this.labelSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.labels = [];
        this.changeLabel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LabelService.prototype.reloadLabels = function () {
        var _this = this;
        var path = "getlabels";
        this.userServiceObj.getService(path)
            .toPromise()
            .then(function (res) {
            _this.labels = res;
            _this.changeLabel.emit(res);
            _this.labelSubject.next(res);
        });
    };
    LabelService.prototype.getlabels = function () {
        setTimeout(this.reloadLabels.bind(this));
        return this.labelSubject.asObservable();
    };
    /**@method: This method is to fetch label */
    LabelService.prototype.getLabels = function () {
        return this.userServiceObj.getService('getlabels');
    };
    /**@method: This method is to create label */
    LabelService.prototype.createLabel = function (label) {
        return this.userServiceObj.putService('createlabel', label);
    };
    /**@method: This method is to add and remove label */
    LabelService.prototype.addRemoveLabel = function (status, labelId, noteId) {
        return this.userServiceObj.putServiceLabel('addremovelabel' + '/' + noteId + '/' + labelId + '/' + status.bubbles);
    };
    LabelService.prototype.updateLabel = function (data) {
        return this.userServiceObj.putService('updatelabel', data);
    };
    LabelService.prototype.deleteLabel = function (data) {
        return this.userServiceObj.deleteService('deletelabel', data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], LabelService.prototype, "changeLabel", void 0);
    LabelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LabelService);
    return LabelService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(userServiceObj) {
        this.userServiceObj = userServiceObj;
    }
    LoginService.prototype.login = function (model) {
        return this.userServiceObj.postService('login', model);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Note Service contains method to create note,update note,delete note,get notes
*/



var NoteService = /** @class */ (function () {
    function NoteService(userServiceObj) {
        this.userServiceObj = userServiceObj;
        this.status = true;
        this.viewSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.noteSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    /**@method: This method is to fetch notes */
    NoteService.prototype.reloadNotes = function () {
        var _this = this;
        var path = "getnotes";
        debugger;
        this.userServiceObj.getService(path)
            .toPromise()
            .then(function (res) {
            _this.noteSubject.next(res);
            console.log("Notes fetched successfully");
        });
    };
    NoteService.prototype.getnotes = function () {
        setTimeout(this.reloadNotes.bind(this));
        return this.noteSubject.asObservable();
    };
    NoteService.prototype.changeView = function () {
        this.status = !this.status;
        this.viewSubject.next(this.status);
    };
    NoteService.prototype.getStatus = function () {
        return this.viewSubject.asObservable();
    };
    /**@method: This method is to fetch notes */
    NoteService.prototype.getNotes = function () {
        return this.userServiceObj.getService('getnotes');
    };
    /**@method: This method is to create notes */
    NoteService.prototype.createNotes = function (note) {
        return this.userServiceObj.putService('createnotes', note);
    };
    /**@method: This method is to update notes */
    NoteService.prototype.updateNotes = function (note) {
        return this.userServiceObj.putService('updatenotes', note);
    };
    /**@method: This method is to delete notes */
    NoteService.prototype.deleteNotes = function (note) {
        return this.userServiceObj.deleteService('deletenotes', note);
    };
    /**@method: This method is to upload image of notes */
    NoteService.prototype.uploadImage = function (model) {
        console.log("Checking upload image in service", model);
        //return this.userServiceObj.putService('uploadNoteImage',model);
        return this.userServiceObj.imageUpload('uploadNoteImage', model);
    };
    NoteService.prototype.deleteImage = function (model) {
        return this.userServiceObj.imageDelete('deleteImage', model);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/service/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(userServiceObj) {
        this.userServiceObj = userServiceObj;
    }
    RegisterService.prototype.register = function (model) {
        return this.userServiceObj.postService('register', model);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/service/tokeninterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log("In interceptor");
        if (this.auth.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is User service i.e. common Http services contains methods to get,put,post,delete requests
*/




/*It looks similar to component file but  but it uses the @Injectable()
decorator, which means we can import it. into other components and access
 its properties and methods.*/
var UserService = /** @class */ (function () {
    /*HttpClient is available as an injectable class, with methods
    to perform HTTP requests. */
    function UserService(http) {
        this.http = http;
        /*model property for class userservice can accept any object */
        this.model = {};
        this.searchSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.searchObservable$ = this.searchSubject.asObservable();
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        // private URL = 'http://localhost:8080/ToDo-App/';
        this.URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].base_url;
        /*if(localStorage.getItem('Authorization'))
          this.httpOptions.headers = this.httpOptions.headers.append('Authorization', localStorage.getItem('Authorization'));*/
    }
    UserService.prototype.getToken = function () {
        return localStorage.getItem('Authorization');
    };
    /*A representation of any set of values over any amount of time.
     This is the most basic building block of RxJS*/
    UserService.prototype.postService = function (url, model) {
        console.log(url, model);
        var urlpath = this.URL.concat(url);
        console.log(urlpath);
        return this.http.post(urlpath, model, { observe: 'response' });
    };
    UserService.prototype.putService = function (url, model) {
        console.log('testinggg', url, model);
        var urlpath = this.URL.concat(url);
        console.log(urlpath);
        return this.http.put(urlpath, model, this.httpOptions);
    };
    UserService.prototype.getService = function (url, model) {
        var urlpath = this.URL.concat(url);
        return this.http.get(urlpath, this.httpOptions);
    };
    UserService.prototype.deleteService = function (url, model) {
        var urlpath = this.URL.concat(url);
        console.log("Http option", this.httpOptions);
        return this.http.post(urlpath, model, this.httpOptions);
    };
    UserService.prototype.getUser = function (url) {
        var urlpath = this.URL.concat(url);
        return this.http.get(urlpath, this.httpOptions);
    };
    UserService.prototype.isLoggedIn = function () {
        return false;
    };
    UserService.prototype.putServiceLabel = function (url) {
        var urlpath = this.URL.concat(url);
        console.log(urlpath);
        return this.http.put(urlpath, this.httpOptions);
    };
    UserService.prototype.imageUpload = function (url, model) {
        var fd = new FormData();
        var file = model.event[0];
        fd.append('image', file);
        fd.append('noteId', model.noteId);
        var urlpath = this.URL.concat(url);
        var httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Authorization': localStorage.getItem('Authorization')
            })
        };
        return this.http.post(urlpath, fd, httpOptions2);
    };
    UserService.prototype.imageDelete = function (url, model) {
        var urlpath = this.URL.concat(url);
        return this.http.post(urlpath, model, this.httpOptions);
    };
    UserService.prototype.searchData = function (data) {
        console.log("in service", data);
        this.searchSubject.next(data);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    base_url: "http://www.mydomain.com/api/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map