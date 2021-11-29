"use strict";
exports.__esModule = true;
exports.BookingOfTable = void 0;
var BookingOfTable = /** @class */ (function () {
    function BookingOfTable(userContactNumber, tableId, bookingDateTime) {
        this.user_ContactNumber = userContactNumber;
        this.table_Id = tableId;
        this.booking_date_time = bookingDateTime;
    }
    return BookingOfTable;
}());
exports.BookingOfTable = BookingOfTable;
