import { Lang } from "../models/Interfaces";
import { lang as en } from "./en";
import { lang as ua } from "./ua";

export default function lang(Storelang: Lang){
    switch(Storelang){
        case 0:
            return ua;
        case 2:
            return en;
        default:
            return ua;
    }
};