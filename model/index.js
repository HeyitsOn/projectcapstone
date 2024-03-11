import { Users} from "./users.js";
import { Packages } from "./packages.js";
import { WeddingBooking } from "./weddingBooking.js";

let users = new Users();
let packages = new Packages();
let weddingBooking =  new WeddingBooking();

export{
    users,
    packages,
    weddingBooking
}
