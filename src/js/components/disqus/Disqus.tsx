import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates } from "../../models/Interfaces";
import lang from "../../locale";
import { makeStyles } from '@material-ui/core/styles';
import Disqus from "disqus-react";

const useStyles = makeStyles(theme => ({   
}));

export const DisqusComponent = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    const disqusShortname = process.env.DISQUS_SHORT_NAME || "carsua";
    const disqusConfig = {
      url: process.env.PUBLIC_SITE_URL || "https://carsua.app",
      identifier: process.env.PUBLIC_SITE_URL || "https://carsua.app",
      title: disqusShortname
    }
    return (
        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
    )
}