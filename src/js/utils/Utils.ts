import { Window, Item, Lang } from "../models/Interfaces";

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
    * The reducer function on each member of the array resulting in a single output value
    */
  public static reducer(accumulator: string, currentValue: string): string{
    return accumulator + currentValue;
  }
  /**
    * latinRange
    */
  public static latinRange(val: string): boolean{
    const code = val.charCodeAt(0);
    return (code > 64 || code < 91) ? true : false;
  }
  /**
    * trimData
    */  
  public static trimData(val: string): string{
    return val.replace(/ /g,'');
  }
  /**
    * convertToCyrillic
    */  
  public static convertToCyrillic(s: string, latinRange: Function, latinToCyrillicMatrix: Function, reducer: any): string{
    return s.split("").map((i: string) => {
      if(latinRange(i)){
        return latinToCyrillicMatrix(i);
      }
      return i;
      }).reduce(reducer);
  }

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

  public static shapeUrlPlate(url: string, rowKey: string, partitionKey: string): string{
    return `${url}RowKey eq '${rowKey}' and PartitionKey eq '${partitionKey}'`;
  }

  public static shapeUrlVin(url: string, value: string): string{
    return `${url}/${value}?format=json`;
  }

  public static extractPartitionKey(val: string): string{
    return val.substr(0,2);
  }

  public static changeSymbols1toI(val: string): string{
    return val.substr(0,2).replace(/1/g,'I') + val.substr(2,4) + val.substr(val.length-2).replace(/1/g,'I');
  }

  public static checkFileType = (blob: File): boolean => {
    if(blob.type.indexOf("image") === -1){
      return false;
    }
    else{
      return true;
    }
  }
  
  public static checkImageSize = (blob: File): boolean => {
    if(blob.size > 5000000){
      return false;
    }
    else{
      return true;
    }
  }

  public static checkIsUndefinedOrNull(value: any): boolean{
    if(value === undefined || value === null){
      return true;
    }
    else{
      return false;
    }
  }

  public static generateUrlforPlatesmania(url: string, itemRequest: string): string{
    //const shapedInputRequest = 'a001aa22';
    return `${url}/mobile/api_photo_test1.php?nomer=${itemRequest}`;
  }

  public static isItemAlreadyAdded(items: Item[], rowNumber: string): boolean{
    return items.filter((i: Item) => i.n_reg_new === rowNumber).length > 0
      ? true
      : false;
  }

  public static loadState(): ISaveState {
    const defaultData: ISaveState = {
      favorites: [],
      lang: Lang.ua,
    };
    try{
      const serializedState = localStorage.getItem("carPlateFavoritesState");      
      if(serializedState === null){
        return JSON.parse(
          JSON.stringify(defaultData));
      }
      else{
        return JSON.parse(serializedState);
      }      
    }
    catch(err){
      console.log(err);
      return JSON.parse(
        JSON.stringify(defaultData));
    }
  }

  public static saveState(favorites: ISaveState): void{
    try{
      const serializedState = JSON.stringify(favorites);
      localStorage.setItem('carPlateFavoritesState', serializedState);
    }
    catch(err){
      console.log(err);
    }
  }

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

}


export interface ISaveState{
  favorites: Item[];
  lang: Lang;
}