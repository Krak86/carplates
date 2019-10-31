import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../store";
import { ApplicationStates, Item } from "../../models/Interfaces";
import { ResultCard } from "../search/ResultCard";
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";

export const FavoritesPage = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_favs}
            </Typography>
            {state.favorites.map((i: Item) => {
                return <ResultCard item={i} />
            })}
        </Fragment>
    )
}