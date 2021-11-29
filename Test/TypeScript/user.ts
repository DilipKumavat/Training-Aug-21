interface user{
    name : string,
    contact_Number : number,
    country : string,
    id : number
}

class user implements user{
    name : string;
    contact_Number : number;
    country : string;
    id : number

    constructor (name : string,contact : number,country : string){
        this.name = name.charAt(0).toUpperCase()+name.slice(1) ,
        this.contact_Number = contact,
        this.country = country.charAt(0).toUpperCase() + country.slice(1),
        this.id = contact;
    }
}

export {user}