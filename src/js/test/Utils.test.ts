import "jest";
import Utils from '../utils/Utils';
import { Window } from '../models/Interfaces';

describe("Utils window methods", () => {

  test("get Current Domain Url", () => {
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

  test("The reducer function", () => {
    expect(Utils.reducer("","")).toBe("");
    expect(Utils.reducer("<div>","</div>")).toBe("<div></div>");
    expect(Utils.reducer("<div><ul>","</ul></div>")).toBe("<div><ul></ul></div>");
  });

});
