import { IApplicationStates, IItem, itemSearching, IVIN, IPlatesmaniaCars, ILoggedIn, IRegions, IHeaders } from "../models/Interfaces";

export const favoritsItemsLimit: number = 50;

const itemResponseInitData: IItem = {
    PartitionKey: "",
    RowKey: "",
    body: "",
    brand: "",
    capacity: "",
    color: "",
    d_reg: "",
    dep: "",
    dep_code: "",
    fuel: "",
    kind: "",
    make_year: "",
    model: "",
    n_reg_new: "",
    oper_code: "",
    oper_name: "",
    own_weight: "",
    person: "",
    purpose: "",
    reg_addr_koatuu: "",
    total_weight: "",
    region: "",
};

const vinResponseInitData: IVIN = {
    Count: 0,
    Message: "",
    SearchCriteria: "",
    Results: [],
};

export const facebookInit = {
    email: "",
    name: "",
    picture: {
        data: {
            url: "",
      },
    },
};
export const googleInit = {
    profileObj: {
        email: "",
        imageUrl: "",
        name: "",
    },
};
export const loggedInDefault: ILoggedIn = {
    vendor: 0,
    profileName: "",
    avatar: "",
    mail: "",
};

export const initialData: IApplicationStates = {
    itemRequest: "",
    imageRequest: "",
    itemResponse: itemResponseInitData,
    itemsList: [],
    imagesPlatesMania: [],
    imagesRia: [],
    navigation: {
        url: "home",
    },
    drawerToogled: false,
    itemIsLoading: false,
    itemHasErrored: false,
    itemIsLoaded: false,
    responseIsEmpty: true,
    itemSearching: itemSearching.plate,
    vinRequest: "",
    vinResponse: vinResponseInitData,
    vinsList: [],
    loggedIn: loggedInDefault,
    imageRiaLoaded: false,
    imageCarsmaniaLoaded: false,
    lang: 0,
    favorites: [],
    badges: 0,
    itemsMerging: false,
    updatesAvailable: false,
};
export const regions: IRegions = {
    АА: "Київ",
    КА: "Київ",

    АІ: "Київська область",
    КІ: "Київська область",

    АВ: "Вінницька область",
    КВ: "Вінницька область",

    АС: "Волинська область",
    КС: "Волинська область",

    АЕ: "Дніпропетровська область",
    КЕ: "Дніпропетровська область",

    АК: "АР Крим",
    КК: "АР Крим",

    АН: "Донецька область",
    КН: "Донецька область",

    АМ: "Житомирська область",
    КМ: "Житомирська область",

    АО: "Закарпатська область",
    КО: "Закарпатська область",

    АР: "Запоріжська область",
    КР: "Запоріжська область",

    АТ: "Івано-Франківська область",
    КТ: "Івано-Франківська область",

    ВА: "Кіровоградська область",
    НА: "Кіровоградська область",

    ВВ: "Луганська область",
    НВ: "Луганська область",

    ВС: "Львівська область",
    НС: "Львівська область",

    ВЕ: "Миколаївська область",
    НЕ: "Миколаївська область",

    ВН: "Одеська область",
    НН: "Одеська область",

    ВІ: "Полтавська область",
    НІ: "Полтавська область",

    ВК: "Рівненська область",
    НК: "Рівненська область",

    СН: "Севастополь",
    ІН: "Севастополь",

    ВМ: "Сумська область",
    НМ: "Сумська область",

    ВО: "Тернопільська область",
    НО: "Тернопільська область",

    АХ: "Харьківська область",
    КХ: "Харьківська область",

    ВТ: "Херсонська область",
    НТ: "Херсонська область",

    ВХ: "Хмельницька область",
    НХ: "Хмельницька область",

    СА: "Черкаська область",
    ІА: "Черкаська область",

    СВ: "Чернігівська область",
    ІВ: "Чернігівська область",

    СЕ: "Черновіцька область",
    ІЕ: "Черновіцька область",
};

export const URLs = {
    getDataByPlateUrl: "",
    getDataByVinUrl: "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin",
    getImageByNameUrl: "https://pixabay.com/api/?key=",
    getImagesByCarplateUrl_1: "https://platesmania.com/mobile/api_photo.php",
    getImagesByCarplateUrl_2: "https://avto-nomer.ru/mobile/api_photo.php",
    CarPlatesUrl: "https://platesmania.com",
    CarPlatesUrl_2 : "https://avto-nomer.ru",
    CarPlatesName_1: "platesmania.com",
    CarPlatesName_2 : "avto-nomer.ru",
    carPlateRecMlApiUrl: "",
    riaUrl: "https://developers.ria.com/auto",
    riaUrlPublic: "https://auto.ria.com",
};

export const platesManiaDataTest: IPlatesmaniaCars[] = [
    {
        make: "Audi",
        model: "A8",
        date: "2013-12-21 19:38:20",
        photo: {
            link: "http://avto-nomer.ru/ru/nomer4079960",
            small: "http://img02.avto-nomer.ru/131221/s/ru4079960.jpg",
            medium: "http://img02.avto-nomer.ru/131221/m/ru4079960.jpg",
            original: "http://img02.avto-nomer.ru/131221/o/ru4079960.jpg",
        },
    },
    {
        make: "Audi",
        model: "Q7",
        date: "2016-05-11 19:00:27",
        photo: {
            link: "http://avto-nomer.ru/ru/nomer8424417",
            small: "http://img03.platesmania.com/160511/s/8424417.jpg",
            medium: "http://img03.platesmania.com/160511/m/8424417.jpg",
            original: "http://img03.platesmania.com/160511/o/8424417.jpg",
        },
    },
];

export const itemsTestData: IItem[] = [
    {
        PartitionKey: "АХ",
        RowKey: "АХ0168АА",
        body: "АВТОБУС-D",
        brand: "ХАЗ  3250.02",
        capacity: "3857",
        color: "ЗЕЛЕНИЙ",
        d_reg: "2014-12-12",
        dep: "(6301) ВРЕР ДАІ з обслуговування м. Харків № 1 ГУМВС України в Харківській області",
        dep_code: "1363301",
        fuel: "ДИЗЕЛЬНЕ ПАЛИВО",
        kind: "АВТОБУС",
        make_year: "2006",
        model: "3250.02",
        n_reg_new: "АХ0168АА",
        oper_code: "390",
        oper_name: "390 - ПЕРЕРЕЄСТРАЦIЯ У ЗВ`ЯЗКУ ЗI ЗМIНОЮ КОЛЬОРУ ТЗ",
        own_weight: "4380",
        person: "P",
        purpose: "ЗАГАЛЬНИЙ",
        reg_addr_koatuu: "6310138500",
        total_weight: "6800",
    },
];

export const fileRelativePath: string = "policy/policy.pdf";
export const Headers: IHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8",
};
export const contentType: string = "Content-Type";
export interface IDomElements {
    searchComponent: string;
}
export const domElements: IDomElements = {
    searchComponent: "searchId",
};
