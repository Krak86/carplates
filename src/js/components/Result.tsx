import React, { Fragment, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import lang from "../locale";
import { itemFetchData, setItemRequest } from "../store/actions";
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import * as actions from "../store/types";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Utils from "../utils/Utils";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
      //maxWidth: 360,
      //backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const Result = () => {
    //mapStateToProps
    const state: ApplicationStates = useSelector((state: AppState) => state.Item);

    const classes = useStyles({});

    return(
        <Fragment>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Body" secondary={state.itemResponse.body} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Brand" secondary={state.itemResponse.brand} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Model" secondary={state.itemResponse.model} />
                </ListItem>
                </List> 
            loaded: {JSON.stringify(state.itemIsLoaded)}
        </Fragment>
    )
}