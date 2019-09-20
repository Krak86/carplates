import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppState } from "../store";
import { ApplicationStates, IVinResultValues } from "../models/Interfaces";

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
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import lang from "../locale";
import { regions } from "../data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0px 0px',
      margin: "0px",
      maxWidth: 500,
    },
    table: {
        minWidth: 300,
        padding: "0px",
        margin: "0px",
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
            {state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 &&
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
                    <ListItemText primary={lang.oper_name} secondary={`${state.itemResponse.dep} (${state.itemResponse.dep_code}), ${state.itemResponse.oper_name} (${state.itemResponse.oper_code})`} />
                </ListItem>
                {/*
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <HomeIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="reg_addr_koatuu" secondary={state.itemResponse.reg_addr_koatuu} />
                </ListItem>
                */}
            </List> 
            }
            {state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 0 &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SentimentVeryDissatisfiedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang.noResultMessage}/>
            </ListItem>
            }

            {state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 1 &&
                <Table className={classes.table} size="small">   
                    <TableBody>              
                        <TableRow key={`1000_${Date.now()}`}>
                            <TableCell>
                                VIN number
                            </TableCell>
                            <TableCell>
                                {state.vinResponse.SearchCriteria}
                            </TableCell>
                        </TableRow>
                        <TableRow key={`1001_${Date.now()}`}>
                            <TableCell>
                                Message
                            </TableCell>
                            <TableCell>
                                {state.vinResponse.Message}
                            </TableCell>
                        </TableRow>
                        {state.vinResponse.Results.map((item: IVinResultValues) => {
                            if(
                                item.Value !== "" &&
                                item.Value !== null
                            ){
                            return <TableRow key={Math.random()}>
                                            <TableCell>
                                                {item.Variable}
                                            </TableCell>
                                            <TableCell align="justify">
                                                {item.Value}
                                            </TableCell>
                                        </TableRow>
                            }
                        })}
                    </TableBody>
                </Table>
            }
            {state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 1 &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SentimentVeryDissatisfiedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang.noResultMessage}/>
            </ListItem>
            }

            {state.itemIsLoaded === false && state.itemIsLoading === true && state.itemSearching === 3 &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <HourglassEmptyIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang.imgRecognizingMessage}/>
            </ListItem>
            }
            </Paper>
        </Fragment>
    )
}