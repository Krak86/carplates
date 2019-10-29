import { cars } from "../data/DataCarsRia";
import { motos } from "../data/DataMotoRia";
import { trucks } from "../data/DataTrucksRia";
import { buses } from "../data/DataBusesRia";
import { IRiaCategories, IRiaSearch } from "../models/Interfaces";

export default class UtilsRia {

    public static generateUrlToGetModelValue(url: string, categoryValue: number, brandValue: number, key: string): string{
        return `${url}/categories/${categoryValue}/marks/${brandValue}/models?api_key=${key}`;
    }

    public static generateUrlToSearchAdsIds(url: string, categoryValue: number, brandValue: number, modelValue: number, make_year: string, key: string): string {
        return `${url}/search?api_key=${key}&category_id=${categoryValue}&marka_id[0]=${brandValue}&model_id[0]=${modelValue}&s_yers[0]=${make_year}&abroad=2&custom=1&countpage=10&with_photo=1`;
    }

    public static generateUrlToGetAdsContent(url: string, key: string, adsId: string): string{
        return `${url}/info?api_key=${key}&auto_id=${adsId}`;
    }

    public static detectCategory(category: string): number {
        switch(category.toUpperCase().trim()){
            case "ЛЕГКОВИЙ":
                return 1;
            case "МОПЕД":
                return 2;
            case "МОТОТРИЦИКЛ":
                return 2;
            case "МОТОЦИКЛ":
                return 2;
            case "ТРИЦИКЛ":
                return 2;
            case "КВАДРОЦИКЛ":
                return 2;
            case "ПРИЧІП":
                return 5;
            case "НАПІВПРИЧІП":
                return 5;
            case "ВАНТАЖНИЙ":
                return 6;
            case "АВТОБУС":
                return 7;
            default:
                return 0;
        }
    }

    public static detectTypeByCategory(category: number): string {
        switch(category){
            case 1:
                return "Легковий"; 
            case 2:
                return "Мотоцикл";
            case 5:
                return "Причіп";
            case 6:
                return "Вантажний";
            case 7:
                return "Автобус";
            default:
                return "";
        }
    }

    public static detectBrandMatrix(categoryValue: number){
        switch(categoryValue){
            case 1:
                return cars;
            case 2:
                return motos;
            case 6:
                return trucks;
            case 7:
                return buses;
            default:
                return [];
        }
    }

    public static excludeModelFromBrand(brandValue: string, modelValue: string): string{
        return brandValue !== modelValue? brandValue.replace(modelValue, "").trim() : brandValue.trim();
    }

    public static detectModelValue(brandArray: IRiaCategories[], brand: string): number{
        const result = brandArray.filter((i: IRiaCategories) => i.name.toLowerCase() === brand.toLowerCase());
        return result.length > 0
            ? result[0].value
            : 0;
    }

    public static detectBodyStyleByValue(brandArray: IRiaCategories[], value: number): string{
        const result = brandArray.filter((i: IRiaCategories) => i.value === value);
        return result.length > 0
            ? result[0].name
            : "";
    }

}