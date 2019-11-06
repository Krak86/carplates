import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";
import lang from "../../locale";
import Typography from '@material-ui/core/Typography';
import { Login } from '../login/Login';
import { Profile } from '../login/Profile';

export const ProfilePage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    return (
        <Fragment>
           <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_profile}
            </Typography>
            <Profile />
        </Fragment>
    )
}