import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { itemFetchData } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 500,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    depositContext: {
      flex: 1,
    },
  }),
);

export const SearchField = () => {
  const dispatch = useDispatch();
  const classes = useStyles({});
  return (
    <Fragment>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter plate number or VIN number"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon onClick={() => dispatch(itemFetchData)} />
        </IconButton>
        <IconButton className={classes.iconButton} aria-label="clear">
          <ClearIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
}

//export default SearchField;