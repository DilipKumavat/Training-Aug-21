"use strict";
exports.__esModule = true;
exports.BookingOfTable = void 0;
var BookingOfTable = /** @class */ (function () {
    function BookingOfTable(userContactNumber, tableId, bookingDateTime, restaurant_id, restaurant_name) {
        this.user_ContactNumber = userContactNumber;
        this.table_Id = tableId;
        this.booking_date_time = bookingDateTime;
        this.restaurant_name = restaurant_name;
        this.restaurant_id = restaurant_id;
    }
    return BookingOfTable;
}());
exports.BookingOfTable = BookingOfTable;
