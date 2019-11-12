import "jest";
import Utils from '../utils/Utils';
import { Window, Item } from '../models/Interfaces';
import { items } from '../data/Data';

describe("Utils window methods", () => {
  test("getAbsoluteDomainUrl", () => {
    let window: Window = {
      location: {}
    };
    let resultFinal: string;
    let result: string;
    window.location.protocol = "https:";
    window.location.host = "damendev002.sharepoint.com";
    resultFinal = "https://damendev002.sharepoint.com";
    result = Utils.getAbsoluteDomainUrl(window);
    expect(result).toBe(resultFinal);

    window.location.host = "damendev002.sharepoint.com";
    resultFinal = "https://damendev002.sharepoint.com";
    window.location.pathname = "/sites/intranet";
    result = Utils.getAbsoluteDomainUrl(window);
    expect(result).toBe(resultFinal);
  });
  test("reducer", () => {
    expect(Utils.reducer("","")).toBe("");
    expect(Utils.reducer("<div>","</div>")).toBe("<div></div>");
    expect(Utils.reducer("<div><ul>","</ul></div>")).toBe("<div><ul></ul></div>");
  });
  test("latinRange", () => {
    expect(Utils.latinRange("A")).toBe(true);
    expect(Utils.latinRange("Z")).toBe(true);
    expect(Utils.latinRange("Я")).toBe(false);
    expect(Utils.latinRange("Ї")).toBe(false);
  });
  test("cyrillicRange", () => {
    expect(Utils.cyrillicRange("А")).toBe(true);
    expect(Utils.cyrillicRange("Z")).toBe(false);
    expect(Utils.cyrillicRange("Р")).toBe(true);
    expect(Utils.cyrillicRange("І")).toBe(true);
  });
  test("trimData", () => {
    expect(Utils.trimData("A")).toBe("A");
    expect(Utils.trimData(" A ")).toBe("A");
    expect(Utils.trimData("   A   ")).toBe("A");
  });
  test("latinToCyrillicMatrix", () => {
    expect(Utils.latinToCyrillicMatrix("A")).toBe("А");
    expect(Utils.latinToCyrillicMatrix("B")).toBe("В");
    expect(Utils.latinToCyrillicMatrix("C")).toBe("С");
    expect(Utils.latinToCyrillicMatrix("E")).toBe("Е");
    expect(Utils.latinToCyrillicMatrix("H")).toBe("Н");
    expect(Utils.latinToCyrillicMatrix("I")).toBe("І");
    expect(Utils.latinToCyrillicMatrix("K")).toBe("К");
    expect(Utils.latinToCyrillicMatrix("M")).toBe("М");
    expect(Utils.latinToCyrillicMatrix("O")).toBe("О");
    expect(Utils.latinToCyrillicMatrix("P")).toBe("Р");
    expect(Utils.latinToCyrillicMatrix("T")).toBe("Т");
    expect(Utils.latinToCyrillicMatrix("X")).toBe("Х");
  });
  test("cyrillicToLatinToMatrix", () => {
    expect(Utils.cyrillicToLatinToMatrix("А")).toBe("A");
    expect(Utils.cyrillicToLatinToMatrix("В")).toBe("B");
    expect(Utils.cyrillicToLatinToMatrix("С")).toBe("C");
    expect(Utils.cyrillicToLatinToMatrix("Е")).toBe("E");
    expect(Utils.cyrillicToLatinToMatrix("Н")).toBe("H");
    expect(Utils.cyrillicToLatinToMatrix("І")).toBe("I");
    expect(Utils.cyrillicToLatinToMatrix("К")).toBe("K");
    expect(Utils.cyrillicToLatinToMatrix("М")).toBe("M");
    expect(Utils.cyrillicToLatinToMatrix("О")).toBe("O");
    expect(Utils.cyrillicToLatinToMatrix("Р")).toBe("P");
    expect(Utils.cyrillicToLatinToMatrix("Т")).toBe("T");
   expect(Utils.cyrillicToLatinToMatrix("Х")).toBe("X");
  });
  test("convertToCyrillic", () => {
    expect(Utils.combineConvertedSymbols("ABCH", Utils.latinRange, Utils.latinToCyrillicMatrix, Utils.reducer)).toBe("АВСН");
    expect(Utils.combineConvertedSymbols("MOPT", Utils.latinRange, Utils.latinToCyrillicMatrix, Utils.reducer)).toBe("МОРТ");
  });
  test("shapeUrlPlate", () => {
    expect(Utils.shapeUrlPlate("http://localhost:8080/", "AB","ABCH")).toBe("http://localhost:8080/&$filter=RowKey eq 'AB' and PartitionKey eq 'ABCH'");
    expect(Utils.shapeUrlPlate("http://localhost:8080/", "12","12CH")).toBe("http://localhost:8080/&$filter=RowKey eq '12' and PartitionKey eq '12CH'");
  });
  test("shapeUrlVin", () => {
    expect(Utils.shapeUrlVin("http://localhost:8080", "3VWD17AJ9GM299880")).toBe("http://localhost:8080/3VWD17AJ9GM299880?format=json");
    expect(Utils.shapeUrlVin("http://localhost", "knad6814bk6246077")).toBe("http://localhost/knad6814bk6246077?format=json");
  });
  test("replaceHttpWithHttps", () => {
    expect(Utils.replaceHttpWithHttps("http://localhost:8080")).toBe("https://localhost:8080");
  });
  test("isItemAlreadyAdded", () => {
    expect(Utils.isItemAlreadyAdded(items, "АХ0168АА")).toBe(true);
    expect(Utils.isItemAlreadyAdded(items, "BE2136CI")).toBe(false);
  });
  test("extractPartitionKey", () => {
    expect(Utils.extractPartitionKey("3VWD17AJ9GM299880")).toBe("3V");
    expect(Utils.extractPartitionKey("ВН0179ІС")).toBe("ВН");
  });
  test("changeSymbols1toI", () => {
    expect(Utils.changeSymbols1toI("ВН01791С")).toBe("ВН0179IС");
    expect(Utils.changeSymbols1toI("B13030B1")).toBe("BI3030BI");
    expect(Utils.changeSymbols1toI("ВН0179IС")).toBe("ВН0179IС");
  });
  test("checkIsUndefinedOrNull", () => {
    expect(Utils.checkIsUndefinedOrNull(undefined)).toBe(true);
    expect(Utils.checkIsUndefinedOrNull(null)).toBe(true);
    expect(Utils.checkIsUndefinedOrNull("fb")).toBe(false);
  });
  test("generateUrlforPlatesmania", () => {
    expect(Utils.generateUrlforPlatesmania('http://localhost:8080','key','ВН01791С')).toBe('http://localhost:8080?key=key&gal=2&nomer=ВН01791С');
  });
  test("isUserAuthenticated", () => {
    expect(Utils.isUserAuthenticated(1)).toBe(true);
    expect(Utils.isUserAuthenticated(0)).toBe(false);
  });
  test("checkFileType", () => {
    expect(Utils.checkFileType('image/png')).toBe(true);
    expect(Utils.checkFileType('text/plain')).toBe(false);
  });
  test("checkImageSize", () => {
    expect(Utils.checkImageSize(4102)).toBe(true);
    expect(Utils.checkImageSize(5000001)).toBe(false);
  });
  test("isItemAlreadyAdded", () => {
    const items: Item[] = [{
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
      "n_reg_new": "AB1212AD",
      "oper_code": "",
      "oper_name": "",
      "own_weight": "",
      "person": "",
      "purpose": "",
      "reg_addr_koatuu": "",
      "total_weight": "",
      "region": "",
    }];
    expect(Utils.isItemAlreadyAdded([], "AB1212AD")).toBe(false);
    expect(Utils.isItemAlreadyAdded(items, "AB1212AD")).toBe(true);
  });
  test("generateRowKeyAndPartitionKey", () => {
    expect(Utils.generateRowKeyAndPartitionKey("aaa@bbb")).toStrictEqual({ 
      "PartitionKey": "aaa@bbb",
      "RowKey": "bbb"
    });
    expect(Utils.generateRowKeyAndPartitionKey(null)).toStrictEqual({ 
      "PartitionKey": "",
      "RowKey": ""
    });
    expect(Utils.generateRowKeyAndPartitionKey(undefined)).toStrictEqual({ 
      "PartitionKey": "",
      "RowKey": ""
    });
  });
  test("generateBodyForUpdateUser", () => {
    const body = {
      "Favorites": JSON.stringify(items)
    }
    expect(Utils.generateBodyForUpdateUser(items)).toBe(JSON.stringify(body));
    
  });
  test("isLimitExceeded", () => {
    expect(Utils.isLimitExceeded(20,50)).toBe(false);
    expect(Utils.isLimitExceeded(50,50)).toBe(true);
  });
  test("removeDuplicateObjectsFromArray", () => {
    expect(Utils.removeDuplicateObjectsFromArray([...items, ... items, ...items])).toStrictEqual(items);
  });
  test("removeObjectFromArray", () => {
    expect(Utils.removeObjectFromArray(items, items[0])).toStrictEqual([]);
  });
});
