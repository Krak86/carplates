import { ApplicationStates, Item, Images } from "../models/Interfaces";

const Images: Images = {
    platesMania: [],
    ria: [],
    pixabay: [],
}

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
    "images": Images,
}


export const initialData: ApplicationStates = {
    itemRequest: "",
    imageRequest: null,
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
    signedIn: false,
    drawerToogled: false,
    itemIsLoading: false,
    itemHasErrored: false,
    itemIsLoaded: false,
}


