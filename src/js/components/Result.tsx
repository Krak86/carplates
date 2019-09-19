import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import lang from "../locale";
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ExploreIcon from '@material-ui/icons/Explore';

import { regions } from "../data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0px 0px',
      //width: '100%',
      maxWidth: 500,
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
            <Paper className={classes.root}>
            {state.itemIsLoaded === true && state.responseIsEmpty === false &&            
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <PermContactCalendarIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={state.itemResponse.n_reg_new} secondary={regions[state.itemResponse.PartitionKey]} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <DirectionsCarIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={state.itemResponse.brand} secondary={state.itemResponse.model} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <DateRangeIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.make_year} secondary={state.itemResponse.make_year} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocalShippingIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.body} secondary={state.itemResponse.body} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LinearScaleIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.capacity} secondary={state.itemResponse.capacity} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ColorLensIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.color} secondary={state.itemResponse.color} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FitnessCenterIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.weight} secondary={`${state.itemResponse.own_weight}/${state.itemResponse.total_weight}`} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocalGasStationIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.fuel} secondary={state.itemResponse.fuel} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <MergeTypeIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.kind} secondary={state.itemResponse.kind} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ExploreIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.purpose} secondary={state.itemResponse.purpose} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <CopyrightIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.person} secondary={state.itemResponse.person === "P"? lang.person_private : lang.person_company} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EventNoteIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.d_reg} secondary={state.itemResponse.d_reg} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocationOnIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.dep} secondary={state.itemResponse.dep} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FingerprintIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang.oper_name} secondary={state.itemResponse.oper_name} />
                </ListItem>

                {/*<ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FormatListNumberedIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="dep_code" secondary={state.itemResponse.dep_code} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FormatListNumberedRtlIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="oper_code" secondary={state.itemResponse.oper_code} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <HomeIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="reg_addr_koatuu" secondary={state.itemResponse.reg_addr_koatuu} />
                </ListItem>*/}
            </List> 
            }
            {state.itemIsLoaded === true && state.responseIsEmpty === true &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SentimentVeryDissatisfiedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang.noResultMessage}/>
            </ListItem>
            }
            </Paper>
        </Fragment>
    )
}