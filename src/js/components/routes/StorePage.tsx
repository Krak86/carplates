import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    blocks: {
      padding: 0,
      marginBottom: 10,
    },
  }));

export const StorePage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_store}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                You will download apps for Android and IOS later.
            </Typography>
        </Fragment>
    )
}