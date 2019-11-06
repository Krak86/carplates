import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";

export const DisqusPage = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    return (
        <Fragment>
            Disqus Page
        </Fragment>
    )
}