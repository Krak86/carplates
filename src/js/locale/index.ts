import { Lang } from "../models/Interfaces";
import { lang as en } from "./en";
import { lang as ua } from "./ua";
import { lang as ru } from "./ru";

export default function lang(Storelang: Lang){
    switch(Storelang){
        case 0:
            return ua;
        case 1:
            return ru;
        case 2:
            return en;
        default:
            return ua;
    }
};