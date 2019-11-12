import { Window, Item, Auth, IUserKeys, IUser, IUpdateUserBody } from "../models/Interfaces";

export default class Utils {
  /**
   * Function to get Current Domain Url
   * Samples:
   *      "https://domain.sharepoint.com"
   */
  public static getAbsoluteDomainUrl(windowObj: Window): string {
    return windowObj.location.protocol + "//" + windowObj.location.host;
  } 
  /**
    * The reduce() method executes a reducer function on each element of the array, resulting in a single output value
    */
  public static reducer(accumulator: string, currentValue: string): string{
    return accumulator + currentValue;
  }
  /**
    * Function to check if value is Latin character in uppercase
    */
  public static latinRange(val: string): boolean{
    const code = val.charCodeAt(0);
    return (code > 64 && code < 91) ? true : false;
  }
  /**
    * Function to remove spaces surrounded a value
    */  
  public static trimData(val: string): string{
    return val.replace(/ /g,'');
  }
  /**
    * Function to combine together converted symbols
    */  
  public static combineConvertedSymbols(s: string, latinRange: Function, latinToCyrillicMatrix: Function, reducer: any): string{
    return s.split("").map((i: string) => {
      if(latinRange(i)){
        return latinToCyrillicMatrix(i);
      }
      return i;
      }).reduce(reducer);
  }
  /**
    * Function to convert latin symbols to cyrillic, that looks similar: A,B,C,E,H,I,K,M,O,P,T,X
    */  
  public static latinToCyrillicMatrix(i: string): string{
    switch(i.charCodeAt(0)){
      case 65:
        return String.fromCharCode(1040);
      case 66:
        return String.fromCharCode(1042);
      case 67:
        return String.fromCharCode(1057);
      case 69:
        return String.fromCharCode(1045);
      case 72:
        return String.fromCharCode(1053);
      case 73:
        return String.fromCharCode(1030);
      case 75:
        return String.fromCharCode(1050);
      case 77:
        return String.fromCharCode(1052);
      case 79:
        return String.fromCharCode(1054);
      case 80:
        return String.fromCharCode(1056);
      case 84:
        return String.fromCharCode(1058);
      case 88:
        return String.fromCharCode(1061);
      default:
        return i;
    }
  }
    /**
    * Function to check if value is Latin character in uppercase
    */
   public static cyrillicRange(val: string): boolean{
    const code = val.charCodeAt(0);
    return (code > 1029 && code < 1062) ? true : false;
  }
    /**
    * Function to convert cyrillic symbols to latin, that looks similar: A,B,C,E,H,I,K,M,O,P,T,X
    */  
   public static cyrillicToLatinToMatrix(i: string): string{
    switch(i.charCodeAt(0)){
      case 1040 :
        return String.fromCharCode(65);
      case 1042 :
        return String.fromCharCode(66);
      case 1057 :
        return String.fromCharCode(67);
      case 1045 :
        return String.fromCharCode(69);
      case 1053 :
        return String.fromCharCode(72);
      case 1030 :
        return String.fromCharCode(73);
      case 1050 :
        return String.fromCharCode(75);
      case 1052 :
        return String.fromCharCode(77);
      case 1054 :
        return String.fromCharCode(79);
      case 1056 :
        return String.fromCharCode(80);
      case 1058 :
        return String.fromCharCode(84);
      case 1061 :
        return String.fromCharCode(88);
      default:
        return i;
    }
  }
  /**
    * Function to prepare the url to connect to azure table storage to get car plate data by row key and partition key
    */
  public static shapeUrlPlate(url: string, rowKey: string, partitionKey: string): string{
    return `${url}&$filter=RowKey eq '${rowKey}' and PartitionKey eq '${partitionKey}'`;
  }
  /**
    * Function to prepare the url to connect to external service to get car vin number
    * Source:
    *       https://vpic.nhtsa.dot.gov
    */  
  public static shapeUrlVin(url: string, value: string): string{
    return `${url}/${value}?format=json`;
  }
  /**
    * Function to exctract the first two characters from provided value
    */  
  public static extractPartitionKey(val: string): string{
    return val.substr(0,2);
  }
  /**
    * Function to replace the "1" to "I".
    * The image car plate recognizer external service doesn't work with "I" symbol.
    * It detects "I" as "1" and service returns the "1".
    * Source:
    *       https://api.platerecognizer.com/v1/plate-reader/
    */  
  public static changeSymbols1toI(val: string): string{
    return val.substr(0,2).replace(/1/g,'I') + val.substr(2,4) + val.substr(val.length-2).replace(/1/g,'I');
  }
  /**
    * Function to check the image file type of the provided blob file 
    */  
  public static checkFileType = (type: string): boolean => {
    if(type.indexOf("image") === -1){
      return false;
    }
    else{
      return true;
    }
  }
    /**
    * Function to check is the size of blob file more than 5MB
    */  
  public static checkImageSize = (size: number): boolean => {
    if(size > 5000000){
      return false;
    }
    else{
      return true;
    }
  }
  /**
    * Function to check if the value is undefined or null
    */  
  public static checkIsUndefinedOrNull(value: any): boolean{
    if(value === undefined || value === null){
      return true;
    }
    else{
      return false;
    }
  }
  /**
    * Function to generate the url for external service to get the car images by providing the car plate
    * Source:
    *       http://avto-nomer.ru/mobile/api_photo_test.php?nomer=a001aa22
    */  
  public static generateUrlforPlatesmania(url: string, key: string, itemRequest: string): string{
    //const shapedInputRequest = 'a001aa22';
    return `${url}?key=${key}&gal=2&nomer=${itemRequest}`;
  }
  /**
    * Function to replace https with https protocols in url
    */ 
   public static replaceHttpWithHttps(url: string): string{
    return url.replace("http", "https");
  }
  /**
    * Function to detect if the item is already added to provided array
    */  
  public static isItemAlreadyAdded(items: Item[], rowNumber: string): boolean{
    return items.filter((i: Item) => i.n_reg_new === rowNumber).length > 0
      ? true
      : false;
  }

  /**
    * Function to detect color and return appropriate color
    */  
  public static detectColor(color: string, classes): any {
    switch(color.toUpperCase()){
        case 'БЕЖЕВИЙ':
            return classes.avatarBeige;
        case 'БІЛИЙ':
            return classes.avatarWhite;
        case 'ЖОВТИЙ':
            return classes.avatarYellow;
        case 'ЗЕЛЕНИЙ':
            return classes.avatarGreen;
        case 'КОРИЧНЕВИЙ':
            return classes.avatarBrown;
        case 'ОРАНЖЕВИЙ':
            return classes.avatarOrange;
        case 'СИНІЙ':
            return classes.avatarBlue;
        case 'СІРИЙ':
            return classes.avatarGrey;
        case 'ФІОЛЕТОВИЙ':
            return classes.avatarPurple;
        case 'ЧЕРВОНИЙ':
            return classes.avatarRed;
        case 'ЧОРНИЙ':
            return classes.avatarBlack;
        default:
            return classes.avatarBlue;
    }
  }
  /**
    * Function to generate current date string
    */  
  public static generateCurrentDate(): string{
    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  }
  /**
    * Function to check is user was Authenticated
    */ 
  public static isUserAuthenticated(vendor: Auth): boolean{
    return vendor > 0
      ? true
      : false
  }
  /**
    * Function to generate the RowKey & PartitionKey to azure service to get user's data
    */ 
  public static generateRowKeyAndPartitionKey(email: string): IUserKeys{
    return Utils.checkIsUndefinedOrNull(email) === true 
      ? { 
        "PartitionKey": "",
        "RowKey": ""
      }
      : {
        "PartitionKey": email,
        "RowKey": email.split("@")[1]
      }
  }
  /**
    * Function to generate the url to azure service to update user's data
    */ 
  public static generateUrlToUpdateUser(url: string, query: string, PartitionKey: string, RowKey: string): string{
    return `${url}(PartitionKey='${PartitionKey}', RowKey='${RowKey}')${query}`;
  }
  /**
    * Function to remove duplicate objects from array and leave unique values only
    */ 
  public static removeDuplicateObjectsFromArray(items: Item[]): Item[]{
    return items.filter((thing, index) => {
      const _thing = JSON.stringify(thing);
      return index === items.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      });
    });
  }
  /**
    * Function to remove object from array
    */ 
  public static removeObjectFromArray(itemsArray: Item[], itemToRemove: Item): Item[]{
    return itemsArray.filter(i => i["RowKey"] !== itemToRemove["RowKey"]);
  }
  /**
    * Function to merge the Item's arrays: from local storage and from cloud
    */ 
  public static mergeItems(data: IUser[], favorites: Item[], item: Item, addRemoveItem: boolean): Item[]{
    if(data.length > 0){
      const cloudData: Item[] = JSON.parse(data[0].Favorites);
      const localStorageData = favorites;
      const combinedItemsDuplicates = [...localStorageData, ...cloudData];
      if(item === null){
        return Utils.removeDuplicateObjectsFromArray(combinedItemsDuplicates);
      }
      if(addRemoveItem === true){
        const combinedItems = [item, ...combinedItemsDuplicates];
        return Utils.removeDuplicateObjectsFromArray(combinedItems);
      }
      if(addRemoveItem === false){
        const combinedItemsUnique = Utils.removeDuplicateObjectsFromArray(combinedItemsDuplicates);
        return Utils.removeObjectFromArray(combinedItemsUnique, item);
      }
    }
    else{
      if(item === null){
        return favorites;
      }
      if(addRemoveItem === true){
        return [item, ...favorites];
      }
      if(addRemoveItem === false){
        return Utils.removeObjectFromArray(favorites, item);
      }
    }
  }
  /**
    * Function to generate the body for updateUser service
    */ 
  public static generateBodyForUpdateUser(items: Item[]): string{
    const body = {
      "Favorites": JSON.stringify(items)
    }
    return JSON.stringify(body);
  }
  /**
    * Function to check if the limit is exceeded
    */ 
  public static isLimitExceeded(count: number, limit: number): boolean{
    return count >= limit
      ? true
      : false;
  }

}