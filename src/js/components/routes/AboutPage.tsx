import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import lang from "../../locale";

export const AboutPage = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    return (
        <Fragment>
          <Typography variant="body2" color="textSecondary" align="center">
            {lang(state.lang).copyright}
            <Link color="inherit">
            {process.env.PUBLIC_SITE_URL || "https://carplate.app"}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Fragment>
    )
}