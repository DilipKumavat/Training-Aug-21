"use strict";
exports.__esModule = true;
var booking_details_1 = require("./booking_details");
var restaurant_table_1 = require("./restaurant_table");
var users = [];
var restaurant = [];
var table = [];
var booking = [];
function addNewUser(name, contact, coutry) {
    // var newUser = new user(name,contact,coutry);
    // console.log(newUser,"don't know");
    users.push({ name: name, contact_Number: contact, country: coutry, id: contact });
}
addNewUser("Dilip", 8320936448, "india");
addNewUser("Vinay", 2536241545, "america");
addNewUser("priyansh", 8128804520, "india");
// console.log(users);
function addNewRestaurant(name, id, numberOfTable, country) {
    restaurant.push({ restaurant_name: name, restaurant_country: country, restaurant_numberOfTable: numberOfTable, restaurant_id: id });
}
addNewRestaurant("Honest", 1, 5, "india");
addNewRestaurant("coutyard", 2, 7, "india");
addNewRestaurant("Das Bhajipav", 3, 5, "america");
function addNewTable(id, seats, restau_name, restau_id) {
    var newTable = new restaurant_table_1.RestaurantTable(id, seats, restau_id, restau_name);
    table.push(newTable);
}
function showTable(array) {
    console.log(array);
}
addNewTable(1, 5, "Honest", 1);
addNewTable(2, 7, "Honest", 1);
addNewTable(3, 8, "Honest", 1);
addNewTable(4, 5, "coutyard", 2);
addNewTable(5, 5, "Das Bhajipav", 3);
// Accept the booking for tables.
function bookTable(userContactNumber, tableId, bookingDateTime, restaurant_id, restaurant_name) {
    var currentDate = new Date();
    // console.log(bookingDateTime.getHours(),"current hr = ",currentDate.getHours());
    if (bookingDateTime.getHours() - currentDate.getHours() < 6) {
        console.log("you cant book right now, try to book before 6 hrs", "booking hr = ", bookingDateTime.getHours(), "current hr = ", currentDate.getHours());
        console.log();
        return;
    }
    else if (bookingDateTime.getFullYear() != currentDate.getFullYear()) {
        console.log("not in current year");
        console.log();
        return;
    }
    else if (!(bookingDateTime.getMonth() - currentDate.getMonth() >= 2) || (bookingDateTime.getMonth() - currentDate.getMonth() < 0)) {
        console.log("not valid month");
        console.log();
        return;
    }
    var bookingDetail = new booking_details_1.BookingOfTable(userContactNumber, tableId, bookingDateTime, restaurant_id, restaurant_name);
    booking.push(bookingDetail);
}
bookTable(8320936448, 1, new Date(2021, 12, 21, 12, 0, 0), 2, "Honest");
bookTable(8320936448, 1, new Date(2022, 3, 15, 10, 0, 0), 2, "Honest");
bookTable(8320936448, 1, new Date(2021, 3, 15, 4, 0, 0), 2, "Honest");
console.log(booking, "Showing booked table data");
console.log();
// Provide the list of restaurants in the country so that the user can choose accordingly.
function findRestaurant(countryName) {
    // console.log(restaurant);
    return restaurant.filter(function (restaurantObj) {
        //    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
        return restaurantObj.restaurant_country == countryName;
    });
    //    return array;
}
console.log("Find Restaurant by country = ", findRestaurant("america"));
console.log();
// Mention the number of guests that can be accommodated on the particular table.
function checkTableCapacity(RestaurantName) {
    return table.filter(function (tbl) {
        if (tbl.restaurant_name == RestaurantName) {
            return tbl;
        }
    });
}
console.log("Table Capacity ", checkTableCapacity("Das Bhajipav"));
console.log();
