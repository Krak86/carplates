import { ApplicationStates } from "../models/Interfaces";

export const initialData: ApplicationStates = {
    itemRequest: "",
    imageRequest: null,
    itemResponse: null,
    itemsList: [],
    imagesList: {
        platesMania: [],
        ria: [],
        pixabay: [],
      },
    navigation: {
        url: ""
    },
    signedIn: false,
    drawerToogled: false,
    itemIsLoading: false,
    itemHasErrored: false,
}