import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";
import { makeStyles } from '@material-ui/core/styles';
import { DisqusComponent } from "../disqus/Disqus";

const useStyles = makeStyles(theme => ({
    blocks: {
      padding: 0,
      marginBottom: 10,
    },
  }));

export const DisqusPage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    return (
        <Fragment>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).url_disqus}
            </Typography>
            <DisqusComponent />
        </Fragment>
    )
}