interface IBookingOfTable{
    user_ContactNumber : number,
    table_Id : number,
    booking_date_time : Date,
}

class BookingOfTable implements IBookingOfTable{

    user_ContactNumber : number;
    table_Id : number;
    booking_date_time : Date;
    

    constructor(userContactNumber:number,tableId : number,bookingDateTime : Date){
    
        this.user_ContactNumber = userContactNumber;
        this.table_Id =tableId;
        this.booking_date_time = bookingDateTime;
        
    }
}
export { BookingOfTable }