import React, {Fragment} from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppState } from "../../redux";
import { IApplicationStates, IEnvConfig } from "../../models/Interfaces";
import Utils from "../../utils/Utils";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import lang from "../../locale";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { fileRelativePath } from "../../data/Data";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../../env.json");

const useStyles = makeStyles((theme: Theme) => ({
    blocks: {
      padding: 0,
      marginBottom: 10,
    },
  }));

export const AboutPage = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const classes = useStyles({});
    const openPolicyHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        window.open(
            Utils.getPolicyUrl(Utils.getDomainUrl(window.location.protocol, window.location.host), fileRelativePath),
          );
    };
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center" className={classes.blocks}>
                {lang(state.lang).url_about}
            </Typography>
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
                {lang(state.lang).copyright}{" "}{new Date().getFullYear()}{" "}{/*process.env.PUBLIC_SITE_URL ||*/config.PUBLIC_SITE_URL || ""}
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
            <Typography variant="body1" color="textSecondary" align="justify" className={classes.blocks}>
                <Link href="#" onClick={(event: React.SyntheticEvent) => openPolicyHandler(event)} color="inherit">
                    {lang(state.lang).policy_url}
                </Link>
            </Typography>
        </Fragment>
    );
};
