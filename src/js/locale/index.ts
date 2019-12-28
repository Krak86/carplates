import { Lang, ILocale } from "../models/Interfaces";
import enRaw from "../../i18n/en.json";
import uaRaw from "../../i18n/ua.json";
import ruRaw from "../../i18n/ru.json";

const en: ILocale = enRaw;
const ua: ILocale = uaRaw;
const ru: ILocale = ruRaw;

export default function lang(Storelang: Lang) {
    switch (Storelang) {
        case 0:
            return ua;
        case 1:
            return ru;
        case 2:
            return en;
        default:
            return ua;
    }
}
