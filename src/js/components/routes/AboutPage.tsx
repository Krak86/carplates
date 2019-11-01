import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../store";
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

export const AboutPage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    return (
        <Fragment>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_1_app}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_2_mvd}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_3_kabMin}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_4_portal}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_5_sharing}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_6_mit}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).copyright}{' '}{new Date().getFullYear()}{' '}{process.env.PUBLIC_SITE_URL || window.location.host}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_7_mit_1}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_8_mit_2}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                {lang(state.lang).about_9_mit_3}
            </Typography>
        </Fragment>
    )
}