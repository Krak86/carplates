import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { SearchField } from "../search/SearchField";
import { Result } from "../search/Result";
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";
import LinearProgress from '@material-ui/core/LinearProgress';

export const SearchPage = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    const itemIsLoading = state.itemIsLoading;

    return (
        <Fragment>
            <SearchField />
            {itemIsLoading === true && <LinearProgress />}
            <Result />
        </Fragment>
    )
}