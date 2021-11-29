interface IRestaurant {
    restaurant_name : string,
    restaurant_id : number,
    restaurant_numberOfTable : number,
    restaurant_country : string
}

class Restaurant implements IRestaurant{
    restaurant_id : number;
    restaurant_name : string;
    restaurant_numberOfTable : number;
    restaurant_country : string

    constructor(id:number,name:string,numberOfTable: number,coutry : string) {
        this.restaurant_id = id;
        this.restaurant_name = name,
        this.restaurant_numberOfTable = numberOfTable,
        this.restaurant_country = coutry;
    }

    displayRestaurant() : void {
        console.log()
    }
}

export {Restaurant}