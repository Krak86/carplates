import { ApplicationStates, Item, Images, itemSearching, VIN } from "../models/Interfaces";


const itemResponse: Item = {
    "PartitionKey": "",
    "RowKey": "",
    "body": "",
    "brand": "",
    "capacity": "",
    "color": "",
    "d_reg": "",
    "dep": "",
    "dep_code": "",
    "fuel": "",
    "kind": "",
    "make_year": "",
    "model": "",
    "n_reg_new": "",
    "oper_code": "",
    "oper_name": "",
    "own_weight": "",
    "person": "",
    "purpose": "",
    "reg_addr_koatuu": "",
    "total_weight": "",
    "region": "",
    "imagesPlatesMania": [],
    "imagesRia": [],
}

const vinResponse: VIN = {
    "Count": 0,
    "Message": "",
    "SearchCriteria": "",
    "Results": [],
  }

export const facebookInit = {
    email: "",
    name: "",
    picture: {
        data: {
            url: "",
      }
    },
}
export const googleInit = {
    profileObj: {
        email: "",
        imageUrl: "",
        name: "",
    }
}

export const initialData: ApplicationStates = {
    itemRequest: "",
    imageRequest: "",
    itemResponse: itemResponse,
    itemsList: [],
    imagesList: {
        platesMania: [],
        ria: [],
        pixabay: [],
      },
    navigation: {
        url: "home"
    },
    signedIn: 0,
    drawerToogled: false,
    itemIsLoading: false,
    itemHasErrored: false,
    itemIsLoaded: false,
    responseIsEmpty: true,
    itemSearching: itemSearching.plate,
    vinRequest: "",
    vinResponse: vinResponse,
    vinsList: [],
    facebookResponse: facebookInit,
    googleResponse: googleInit,
}

export const regions = {
	"АА": "Київ",
    "КА": "Київ",
    
    "АІ": "Київська область",
    "КІ": "Київська область",
    
    "АВ": "Вінницька область",
    "КВ": "Вінницька область",
    
    "АС": "Волинська область",
    "КС": "Волинська область",
    
    "АЕ": "Дніпропетровська область",
	"КЕ": "Дніпропетровська область",
    
    "АК": "АР Крим",
    "КК": "АР Крим",
    
    "АН": "Донецька область",
    "КН": "Донецька область",
    
    "АМ": "Житомирська область",
    "КМ": "Житомирська область",
    
    "АО": "Закарпатська область",
    "КО": "Закарпатська область",
    
    "АР": "Запоріжська область",
    "КР": "Запоріжська область",
    
    "АТ": "Івано-Франківська область",
    "КТ": "Івано-Франківська область",
    
    "ВА": "Кіровоградська область",
    "НА": "Кіровоградська область",
    
    "ВВ": "Луганська область",
    "НВ": "Луганська область",
    
    "ВС": "Львівська область",
	"НС": "Львівська область",

	"ВЕ": "Миколаївська область",
    "НЕ": "Миколаївська область",
    
    "ВН": "Одеська область",
    "НН": "Одеська область",
    
    "ВІ": "Полтавська область",
    "НІ": "Полтавська область",
    
    "ВК": "Рівненська область",
    "НК": "Рівненська область",
    
    "СН": "Севастополь",
    "ІН": "Севастополь",

    "ВМ": "Сумська область",
    "НМ": "Сумська область",

    "ВО": "Тернопільська область",
    "НО": "Тернопільська область",

    "АХ": "Харьківська область",
    "КХ": "Харьківська область",

    "ВТ": "Херсонська область",
    "НТ": "Херсонська область",

    "ВХ": "Хмельницька область",
    "НХ": "Хмельницька область",

    "СА": "Черкаська область",
    "ІА": "Черкаська область",

    "СВ": "Чернігівська область",
    "ІВ": "Чернігівська область",

    "СЕ": "Черновіцька область",
    "ІЕ": "Черновіцька область",
}

export const URLs = {
    "getDataByPlateUrl": "",
    "getDataByVinUrl": "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin",
    "getImageByNameUrl": "https://pixabay.com/api/?key=",
    "getImagesByCarplateUrlTest": "http://platesmania.com/mobile/api_photo_test1.php?nomer=AA-100-AA",
    "getImagesByCarplateUrl": "http://platesmania.com",
    "carPlateRecMlApiUrl": "",
    "riaSearchUrl": "https://developers.ria.com/auto",
}