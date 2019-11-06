import React, {Fragment} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AppState } from "../../redux";
import { ResetBadge } from "../../redux/actions";
import { ApplicationStates, Item, INotification } from "../../models/Interfaces";
import { ResultNotificationCard } from "../search/ResultNotificationCard";
import Typography from '@material-ui/core/Typography';
import lang from "../../locale";

export const NotificationPage = () => {
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const dispatch = useDispatch();
    dispatch(ResetBadge());
    return (
        <Fragment>
            <Typography variant="h6" color="textSecondary" align="center">
                {lang(state.lang).url_notifications}
            </Typography>
            {state.itemsList.map((i: INotification) => {
                return <ResultNotificationCard item={i.item} timestamp={i.timestamp} key={Math.random()} />
            })}
        </Fragment>
    )
}