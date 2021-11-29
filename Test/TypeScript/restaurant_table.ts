interface IrestaurantTable{
    table_id : number,
    table_seats : number,
    restaurant_id : number,
    restaurant_name : string
}

class RestaurantTable implements IrestaurantTable{
    table_id : number;
    table_seats : number;
    restaurant_id : number;
    restaurant_name : string;

    constructor (id:number,seats : number,restaurantId : number,restaurantName : string){
        this.table_id = id;
        this.table_seats = seats;
        this.restaurant_id = restaurantId;
        this.restaurant_name = restaurantName;
    }
}

export {RestaurantTable}