import React, {Fragment} from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "../../redux";
import { IApplicationStates} from "../../models/Interfaces";
import lang from "../../locale";
import Typography from "@material-ui/core/Typography";
import { Profile } from "../login/Profile";

export const ProfilePage = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    return (
        <Fragment>
           <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_profile}
            </Typography>
            <Profile />
        </Fragment>
    );
};
