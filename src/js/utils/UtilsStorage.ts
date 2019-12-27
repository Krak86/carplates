import { Lang, ISaveState } from "../models/Interfaces";
import { loggedInDefault } from "../data/Data";
 /**
  * Class to provide local storage utility functions
  */
export default class UtilsStorage {
    public static localStorageState = "carPlateFavoritesState";
    /**
     * Function to get data from localStorage
     * localStorage name: "carPlateFavoritesState"
     */
    public static loadState(): ISaveState {
        const defaultData: ISaveState = {
            favorites: [],
            lang: Lang.ua,
            itemsList: [],
            loggedIn: loggedInDefault,
        };
        try {
            const serializedState = localStorage.getItem(UtilsStorage.localStorageState);
            if (serializedState === null) {
            return JSON.parse(
                JSON.stringify(defaultData));
            } else {
                return JSON.parse(serializedState);
            }
        } catch (err) {
            // TODO: implement system of logs (implicit or explicit) according to 12 factors
            /* tslint:disable no-console */
            console.log(err);
            return JSON.parse(
            JSON.stringify(defaultData));
        }
    }
    /**
     * Function to save data to localStorage
     * localStorage name: "carPlateFavoritesState"
     */
    public static saveState(favorites: ISaveState): void {
        try {
            const serializedState = JSON.stringify(favorites);
            localStorage.setItem(UtilsStorage.localStorageState, serializedState);
        } catch (err) {
            // TODO: implement system of logs (implicit or explicit) according to 12 factors
            /* tslint:disable no-console */
            console.log(err);
        }
    }
}
