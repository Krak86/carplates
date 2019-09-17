export interface ApplicationStates {
  itemRequest: string;
  imageRequest: any;
  itemResponse: Item;
  itemsList: Item[];
  imagesList: Images;
  navigation: Navigation;
  signedIn: boolean;
  drawerToogled: boolean;
  itemIsLoading: boolean;
  itemHasErrored: boolean;
}

export interface Images {
  platesMania: [];
  ria: [];
  pixabay: [];
}

export interface Item {
  "PartitionKey": string;
  "RowKey": string;
  "body": string;
  "brand": string;
  "capacity": string;
  "color": string;
  "d_reg": string;
  "dep": string;
  "dep_code": string;
  "fuel": string;
  "kind": string;
  "make_year": string;
  "model": string;
  "n_reg_new": string;
  "oper_code": string;
  "oper_name": string;
  "own_weight": string;
  "person": string;
  "purpose":string;
  "reg_addr_koatuu": string;
  "total_weight": string;
  images?: Images;
}

export interface Navigation {
  url: string;
}

export interface ServiceRespond{
  "odata.metadata": string;
  "value": Item[];
}

export interface Window {
  location: Location;
}

export interface Location {
  protocol?: string;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
}

export interface Locale{
    searchInputPlaceholderText: string;
}