import React, {Fragment} from "react";
import { useSelector, shallowEqual } from "react-redux";
import { SearchField } from "../search/SearchField";
import { Result } from "../search/Result";
import { AppState } from "../../redux";
import { IApplicationStates} from "../../models/Interfaces";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => createStyles({
    linear: {
      maxWidth: 500,
    },
}));

export const SearchPage = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const itemIsLoading = state.itemIsLoading;
    const classes = useStyles({});
    return (
        <Fragment>
            <SearchField />
            {itemIsLoading === true && <LinearProgress className={classes.linear} />}
            <Result />
        </Fragment>
    );
};
