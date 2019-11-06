import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppState } from "../../redux";
import { ApplicationStates, IVinResultValues, IRiaAds, IPlatesmaniaCars } from "../../models/Interfaces";
import { ResultRiaCard } from "./ResultRiaCard";
import { ResultCard } from "./ResultCard";
import { ResultPlatesmaniaCard } from "./ResultPlatesmaniaCard";
import lang from "../../locale";

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),       
        maxWidth: 600,
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
                <ResultCard item={state.itemResponse} key={Math.random()} />
            }
            {state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SentimentVeryDissatisfiedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lang(state.lang).noResultMessage}/>
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
                <ListItemText primary={lang(state.lang).noResultMessage}/>
            </ListItem>
            }

            {state.itemIsLoaded === false && state.itemIsLoading === true && state.itemSearching === 3 &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <HourglassEmptyIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang(state.lang).imgRecognizingMessage}/>
            </ListItem>
            }

            {state.itemIsLoaded === true && state.responseIsEmpty === true && state.itemSearching === 3 &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SentimentVeryDissatisfiedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={lang(state.lang).noResultMessage}/>
            </ListItem>
            }
            </Paper>

            {state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 && 
             state.imageCarsmaniaLoaded === true && state.imagesPlatesMania.length > 0 &&
                <div className={classes.container}>
                    {state.imagesPlatesMania.map((i: IPlatesmaniaCars) => {
                        return <ResultPlatesmaniaCard item={i} key={Math.random()}/>
                    })}
                </div>
            }

            {state.itemIsLoaded === true && state.responseIsEmpty === false && state.itemSearching === 0 && 
             state.imageRiaLoaded === true && state.imagesRia.length > 0 &&
            <div className={classes.container}>
                {state.imagesRia.map((i: IRiaAds) => {
                    return i.status !== 404 ? <ResultRiaCard item={i} key={Math.random()}/> : null 
                })}
            </div>
            }
        </Fragment>
    )
}