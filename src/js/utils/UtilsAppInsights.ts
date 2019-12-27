import { ApplicationInsights } from "@microsoft/applicationinsights-web";
 /**
  * Class to provide AppInsights utility functions
  */
export default class UtilsAppInsights {
   /**
    * Function to use Microsoft Application Insights service
    */
    public static init(key: string) {
        const appInsights = new ApplicationInsights({ config: {
            instrumentationKey: `${key}`,
          },
        });
        appInsights.loadAppInsights();
        appInsights.trackPageView();
    }
}
