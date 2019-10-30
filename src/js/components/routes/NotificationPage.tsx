import React, {Fragment} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";

export const NotificationPage = () => {
    //connect to state
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    //constructor, componentDidMounted, componentDidUpdated
    return (
        <Fragment>
            Notification Page
        </Fragment>
    )
}