import { Window } from "../models/Interfaces";

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
  public static latinRange(val){
    const code = val.charCodeAt(0);
    return (code > 64 || code < 91) ? true : false;
  }
  /**
    * shapeData
    */  
  public static shapeData(val: string): string{
    return val.replace(/ /g,'').toLocaleUpperCase();
  }
  /**
    * convertToCyrillic
    */  
  public static convertToCyrillic(s: string): string{
    return s.split("").map((i: string) => {
      if(Utils.latinRange(i)){
        return Utils.latinToCyrillicMatrix(i);
      }
      return i;
      }).reduce(Utils.reducer);
  }

  public static latinToCyrillicMatrix(i): string{
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

  public static detectPlateOrVin(){

  }

  public static shapeURL(url: string, rowKey: string, partitionKey: string): string{
    return `${url}RowKey eq '${rowKey}' and PartitionKey eq '${partitionKey}'`;
  }

  public static extractPartitionKey(val: string): string{
    return val.substr(0,2);
  }
}
