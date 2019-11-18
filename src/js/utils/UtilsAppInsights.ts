import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export default class UtilsAppInsights {
    /**
    * Function to use Microsoft Application Insights service
    */ 
    public static init(key: string){
        const appInsights = new ApplicationInsights({ config: {
            instrumentationKey: `${key}`
            /* ...Other Configuration Options... */
          } 
        });
        appInsights.loadAppInsights();
        appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview
    }
}
  