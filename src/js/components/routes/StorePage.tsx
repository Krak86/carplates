import React, {Fragment} from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "../../redux";
import { IApplicationStates} from "../../models/Interfaces";
import Typography from "@material-ui/core/Typography";
import lang from "../../locale";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    blocks: {
      padding: 0,
      marginBottom: 10,
    },
  }));

export const StorePage = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const classes = useStyles({});
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_store}
            </Typography>
        </Fragment>
    );
};
