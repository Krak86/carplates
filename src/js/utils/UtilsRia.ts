export default class Utils {
    public static detectCategory(category: string): number {
        switch(category){
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
        }
    }

}