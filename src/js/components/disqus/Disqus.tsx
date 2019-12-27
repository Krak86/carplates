import React from "react";
import { IEnvConfig } from "../../models/Interfaces";
import Disqus from "disqus-react";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../../env.json");

export const DisqusComponent = () => {
    const disqusShortname: string = /*process.env.DISQUS_SHORT_NAME ||*/config.DISQUS_SHORT_NAME || "";
    const disqusConfig = {
      url: /*process.env.PUBLIC_SITE_URL ||*/config.PUBLIC_SITE_URL || "",
      identifier: /*process.env.PUBLIC_SITE_URL ||*/config.PUBLIC_SITE_URL || "",
      title: disqusShortname,
    };
    return (
        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
    );
};
