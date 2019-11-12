import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates, Item } from "../../models/Interfaces";
import { ResultCard } from "../search/ResultCard";
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) => createStyles({
    linear: {
      maxWidth: 500,
    },
}));

export const FavoritesPage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_favs}
            </Typography>
            {state.itemsMerging === true && <LinearProgress className={classes.linear} />}
            {state.favorites.map((i: Item) => {
                return <ResultCard item={i} key={Math.random()} />
            })}
        </Fragment>
    )
}