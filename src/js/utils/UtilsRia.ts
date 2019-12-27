import { cars } from "../data/DataCarsRia";
import { motos } from "../data/DataMotoRia";
import { trucks } from "../data/DataTrucksRia";
import { buses } from "../data/DataBusesRia";
import { IRiaCategories, IRiaSearch } from "../models/Interfaces";
/**
 * Class to provide utility functions to work with "RIA cars" web site
 */
export default class UtilsRia {
   /**
    * Function to generate url to get model value
    */
    public static generateUrlToGetModelValue(url: string, categoryValue: number, brandValue: number, key: string): string {
        return `${url}/categories/${categoryValue}/marks/${brandValue}/models?api_key=${key}`;
    }
   /**
    * Function to generate url to search Ads' Ids
    */
    public static generateUrlToSearchAdsIds(url: string, categoryValue: number, brandValue: number, modelValue: number, makeYear: string, key: string): string {
        return `${url}/search?api_key=${key}&category_id=${categoryValue}&marka_id[0]=${brandValue}&model_id[0]=${modelValue}&s_yers[0]=${makeYear}&abroad=2&custom=1&countpage=10&with_photo=1`;
    }
   /**
    * Function to generate url to get Ads' content
    */
    public static generateUrlToGetAdsContent(url: string, key: string, adsId: string): string {
        return `${url}/info?api_key=${key}&auto_id=${adsId}`;
    }
   /**
    * Function to detect category
    */
    public static detectCategory(category: string): number {
        switch (category.toUpperCase().trim()) {
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
   /**
    * Function to detect type by category
    */
    public static detectTypeByCategory(category: number): string {
        switch (category) {
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
   /**
    * Function to detect brand matrix
    */
    public static detectBrandMatrix(categoryValue: number) {
        switch (categoryValue) {
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
   /**
    * Function to exclude model from brand
    */
    public static excludeModelFromBrand(brandValue: string, modelValue: string): string {
        return brandValue !== modelValue
            ? brandValue.replace(modelValue, "").trim()
            : brandValue.trim();
    }
   /**
    * Function to detect model's value
    */
    public static detectModelValue(brandArray: IRiaCategories[], brand: string): number {
        const result = brandArray.filter((i: IRiaCategories) => i.name.toLowerCase() === brand.toLowerCase());
        return result.length > 0
            ? result[0].value
            : 0;
    }
   /**
    * Function to detect body style by value
    */
    public static detectBodyStyleByValue(brandArray: IRiaCategories[], value: number): string {
        const result = brandArray.filter((i: IRiaCategories) => i.value === value);
        return result.length > 0
            ? result[0].name
            : "";
    }

}
