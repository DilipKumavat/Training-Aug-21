"use strict";
exports.__esModule = true;
exports.user = void 0;
var user = /** @class */ (function () {
    function user(name, contact, country) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1),
            this.contact_Number = contact,
            this.country = country.charAt(0).toUpperCase() + country.slice(1),
            this.id = contact;
    }
    return user;
}());
exports.user = user;
