interface IBookingOfTable{
    user_ContactNumber : number,
    table_Id : number,
    booking_date_time : Date,
    restaurant_id : number,
    restaurant_name : string
}

class BookingOfTable implements IBookingOfTable{

    user_ContactNumber : number;
    table_Id : number;
    booking_date_time : Date;
    restaurant_id : number;
    restaurant_name : string;

    constructor(userContactNumber:number,tableId : number,bookingDateTime : Date,restaurant_id,restaurant_name){
        
        this.user_ContactNumber = userContactNumber;
        this.table_Id =tableId;
        this.booking_date_time = bookingDateTime;
        this.restaurant_name = restaurant_name;
        this.restaurant_id = restaurant_id;
    }
}
export { BookingOfTable }