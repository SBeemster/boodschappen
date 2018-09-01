(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<app-content></app-content>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  display: block;\n  height: 56px; }\n\napp-content {\n  display: block;\n  min-height: calc(100% - 56px);\n  padding-bottom: 56px; }\n\napp-footer {\n  display: block;\n  height: 56px;\n  margin-top: -56px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/item.ts":
/*!********************************!*\
  !*** ./src/app/common/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(newName, newCount) {
        this.name = newName;
        this.count = newCount;
        this.checked = false;
        this.edit = false;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-sm-12 mt-3\">\r\n            <form (ngSubmit)=\"newItem(newName, newCount); newName=''; newCount='';\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-5\">\r\n                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"newName\" [(ngModel)]=\"newName\" placeholder=\"Nieuwe Boodschap\">\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <input type=\"number\" class=\"form-control form-control-lg\" name=\"newCount\" [(ngModel)]=\"newCount\" placeholder=\"Aantal\">\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <button class=\"btn btn-lg btn-outline-success\" type=\"submit\">Toevoegen</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    Boodschappen\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of items\">\r\n                            <app-item [item]=\"item\" (deleteRequestEvent)=\"deleteItem($event)\" (itemCheckedEvent)=\"checkToBottom()\"></app-item>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-outline-secondary mr-1\" (click)=\"sortItemsAZ()\">Sorteren A - Z</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-outline-secondary mr-1\" (click)=\"sortItemsCount()\">Sorteren #</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-outline-danger mr-1\" (click)=\"clearItems()\">Opschonen</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-outline-success\" (click)=\"randomItems()\">Genereren</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _random_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../random-item.service */ "./src/app/random-item.service.ts");
/* harmony import */ var _common_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/item */ "./src/app/common/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent(itemService) {
        this.itemService = itemService;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.randomItems();
    };
    ContentComponent.prototype.newItem = function (name, count) {
        this.items.push(new _common_item__WEBPACK_IMPORTED_MODULE_2__["Item"](name ? name : "Boodschap", count ? count : 1));
    };
    ContentComponent.prototype.clearItems = function () {
        this.items = this.items.filter(function (item) {
            return !item.checked;
        });
    };
    ContentComponent.prototype.sortItemsAZ = function () {
        var sortingDirection = this.lastSort === 1 ? -1 : 1;
        this.lastSort = sortingDirection === 1 ? 1 : 0;
        this.items.sort(function (a, b) {
            if (a.name > b.name) {
                return 1 * sortingDirection;
            }
            if (a.name < b.name) {
                return -1 * sortingDirection;
            }
            return 0;
        });
        this.checkToBottom();
    };
    ContentComponent.prototype.sortItemsCount = function () {
        var sortingDirection = this.lastSort === 2 ? -1 : 1;
        this.lastSort = sortingDirection === 1 ? 2 : 0;
        this.items.sort(function (a, b) {
            return (a.count - b.count) * sortingDirection;
        });
        this.checkToBottom();
    };
    ContentComponent.prototype.checkToBottom = function () {
        var uncheckedItems = this.items.filter(function (item) {
            return !item.checked;
        });
        var checkItems = this.items.filter(function (item) {
            return item.checked;
        });
        this.items = uncheckedItems.concat(checkItems);
    };
    ContentComponent.prototype.deleteItem = function (eventItem) {
        this.items = this.items.filter(function (item) {
            return item !== eventItem;
        });
    };
    ContentComponent.prototype.randomItems = function () {
        this.items = this.itemService.getItems(12);
        this.lastSort = 0;
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_random_item_service__WEBPACK_IMPORTED_MODULE_1__["RandomItemService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"navbar-brand\">O-S-WAP5-O-S51 > Assignments > Maak een boodschappenapplicatie</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"navbar-brand center\">{{ title }}</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "Booschappen App";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row\">\r\n    <div class=\"col-sm-1 icon-col d-none d-md-block\">\r\n        <span class=\"form-control no-border\">\r\n            <i class=\"fa fa-lg fa-fw fa-check\" [ngClass]=\"item.checked ? 'icon-checked' : 'icon-not-checked'\"></i>\r\n        </span>\r\n    </div>\r\n    <div class=\"col-sm-9\" *ngIf=\"!item.edit\">\r\n        <div class=\"checkbox pointer\" (click)=\"checkItem(item)\" [ngClass]=\"item.checked ? 'text-checked' : ''\">\r\n            <input type=\"checkbox\" name=\"state\" [(ngModel)]=\"item.checked\">\r\n            <span class=\"form-control\"><strong>{{ item.count }}</strong> x {{ item.name }}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-9\" *ngIf=\"item.edit\">\r\n        <form>\r\n            <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"itemName\" [(ngModel)]=\"item.name\" placeholder=\"Boodschap\">\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input type=\"number\" class=\"form-control\" name=\"itemCount\" [(ngModel)]=\"item.count\" placeholder=\"Aantal\">\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-1 d-none d-md-block\">\r\n        <button class=\"btn btn-outline-secondary\" (click)=\"item.edit = !item.edit\">\r\n            <i class=\"fa fa-lg fa-fw fa-pencil\" *ngIf=\"!item.edit\"></i>\r\n            <i class=\"fa fa-lg fa-fw fa-save\" *ngIf=\"item.edit\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-1 d-none d-md-block\">\r\n        <button class=\"btn btn-outline-danger\" (click)=\"deleteItem(item)\">\r\n            <i class=\"fa fa-lg fa-fw fa-trash\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/item/item.component.scss":
/*!******************************************!*\
  !*** ./src/app/item/item.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-checked {\n  text-decoration: line-through; }\n  .text-checked span {\n    background-color: rgba(0, 0, 0, 0.03); }\n  .icon-checked {\n  opacity: 100; }\n  .icon-not-checked {\n  opacity: 0; }\n  .icon-col {\n  text-align: center; }\n  .no-border {\n  border: 0; }\n  .pointer {\n  cursor: pointer; }\n  .checkbox input[type=\"checkbox\"] {\n  display: none; }\n  .btn {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/item */ "./src/app/common/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent(elementRef) {
        this.elementRef = elementRef;
        this.deleteRequestEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemCheckedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.addEventListener('keyup', this.keyUp.bind(this));
    };
    ItemComponent.prototype.keyUp = function (event) {
        if (event.keyCode === 13) {
            this.item.edit = false;
        }
    };
    ItemComponent.prototype.deleteItem = function (item) {
        this.deleteRequestEvent.emit(item);
    };
    ItemComponent.prototype.checkItem = function (item) {
        item.checked = !item.checked;
        this.itemCheckedEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_item__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "deleteRequestEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemCheckedEvent", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/random-item.service.ts":
/*!****************************************!*\
  !*** ./src/app/random-item.service.ts ***!
  \****************************************/
/*! exports provided: RandomItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomItemService", function() { return RandomItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/item */ "./src/app/common/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RandomItemService = /** @class */ (function () {
    function RandomItemService() {
        this.wordList = [
            "rad", "zowaar", "blazen", "joop", "mixer", "oester", "baljuw", "ticket", "vaart", "riool", "bruin", "lager", "jersey", "onheil", "manna", "rokken", "basket", "we", "nis", "bikkel", "algauw", "muiter", "kroon", "pochet", "kleef", "pa", "helft", "ballon", "kemp", "tanker", "diens", "juf", "behang", "fiets", "kokkin", "masker", "geurig", "bede", "loser", "joon", "varen", "haring", "bark", "sitar", "doerak", "vaal", "spam", "gewis", "kabaal", "slash", "halal", "direct", "griek", "muesli", "stekel", "summum", "gaas", "arend", "bios", "kooien", "zwerk", "karkas", "absurd", "barst", "rijles", "talent", "sparen", "lynx", "topfit", "gram", "nijdig", "tabel", "matter", "rondte", "hand", "hol", "farad", "etter", "kroeg", "gebukt", "malen", "brul", "fresco", "mokken", "gal", "wicket", "boeman", "stik", "boem", "sujet", "kopen", "gaal", "panter", "cape", "rader", "gipsy", "ahorn", "kuil", "tomen", "woning"
        ];
    }
    RandomItemService.prototype.getItems = function (count) {
        var items = [];
        for (var i = 0; i < this.randomCountFn(count / 3, count); i++) {
            items.push(new _common_item__WEBPACK_IMPORTED_MODULE_1__["Item"](this.randomWordFn(), this.randomCountFn(1, count)));
        }
        return items;
    };
    RandomItemService.prototype.randomWordFn = function () {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    };
    RandomItemService.prototype.randomCountFn = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
    RandomItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RandomItemService);
    return RandomItemService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\My Documents\1 Studies\Fontys\FHICT\S5\Boodschappen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map