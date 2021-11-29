"use strict";
exports.__esModule = true;
exports.RestaurantTable = void 0;
var RestaurantTable = /** @class */ (function () {
    function RestaurantTable(id, seats, restaurantId, restaurantName) {
        this.table_id = id;
        this.table_seats = seats;
        this.restaurant_id = restaurantId;
        this.restaurant_name = restaurantName;
    }
    return RestaurantTable;
}());
exports.RestaurantTable = RestaurantTable;
