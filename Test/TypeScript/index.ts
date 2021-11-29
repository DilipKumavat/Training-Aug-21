import { BookingOfTable } from './booking_details';
import { Restaurant } from './restaurant';
import { RestaurantTable } from './restaurant_table';
import { user } from './user';

var users : user[] = [];

var restaurant : Restaurant[] = [];

var table : RestaurantTable[] = [];

var booking : BookingOfTable[] = [];

function addNewUser(name : string , contact : number,coutry : string): void {
    var newUser = new user(name,contact,coutry);
    users.push(newUser);
}

addNewUser("Dilip",8320936448,"india");
addNewUser("Vinay",2536241545,"america");
addNewUser("priyansh",8128804520,"india");

function addNewRestaurant(name:string,id:number,numberOfTable : number,country : string){
    var newRestaurant = new Restaurant(id,name,numberOfTable,country);
    restaurant.push(newRestaurant);
}

addNewRestaurant("Honest",1,5,"india");
addNewRestaurant("coutyard",2,7,"india");
addNewRestaurant("Das Bhajipav",3,5,"america");

function addNewTable(id :number,seats : number ,restau_name : string,restau_id : number){
    const newTable = new RestaurantTable(id,seats,restau_id,restau_name);
    table.push(newTable);
}

addNewTable(1,5,"Honest",1);
addNewTable(2,7,"Honest",1);
addNewTable(3,8,"Honest",1);
addNewTable(4,5,"coutyard",2);
addNewTable(5,5,"Das Bhajipav",3);

function bookTable (userContactNumber,tableId,bookingDateTime){
    const bookingDetail = new BookingOfTable(userContactNumber,tableId,bookingDateTime);
    booking.push(bookingDetail);
}

bookTable(8320936448,1,new Date(2021,12,21,20,0,0));







