import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import lang from "../locale";
import { itemFetchData, setItemRequest } from "../store/actions";
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Utils from "../utils/Utils";;

interface State {
  value: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      padding: '0px 0px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 500,
      marginBottom: '20px'
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

const shapeData = (value: string): string => {
  if(Utils.shapeData(value) === ""){
    return;
  }
  else{
    return Utils.convertToCyrillic(Utils.shapeData(value));
  }
};

const shapeURL = (value: string, url: string): string => {
  return Utils.shapeURL(url, value, Utils.extractPartitionKey(value));
}

export const SearchField = () => {
  //constructor
  const [inputValue, setInputValue] = useState<State>({value: ""});
  //mapStateToProps
  const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
  //mapDispatchToProps
  const dispatch = useDispatch();
  //componentDidMounted, componentDidUpdated
  const searchInput = useRef(null);
  useEffect(() => {
    document.title = `${lang.documentTitle} ${state.itemRequest}`;
  });
  useEffect(() => {
    searchInput.current.focus();
  }, []);
  //hook styles
  const classes = useStyles({});
  const serviceUrl = process.env.AZURE_TABLE_SERVICE_URL || "";
  const handleChange = (value: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({...inputValue, [value]: event.target.value });
  };
  const handleSearchClick = () => {
    const value = shapeData(inputValue.value);
    if(value === "" || value === undefined){
      return;
    }
    const url = shapeURL(value, serviceUrl);
    dispatch(itemFetchData(value, url));
    searchInput.current.focus();
  };
  const handleClearClick = () => {
    setInputValue({...inputValue, value: "" });
    dispatch(setItemRequest(""));
    searchInput.current.focus();
  };
  const handlerKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.charCode == 13) {
      handleSearchClick();
    }
  }
  return (
    <Fragment>      
      {/*JSON.stringify(state.itemRequest)*/}
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={lang.searchInputPlaceholderText}
          inputProps={{ 'aria-label': lang.searchInputPlaceholderText }}
          onChange={handleChange('value')}
          value={inputValue.value}
          onKeyPress={handlerKeyPress}
          inputRef={searchInput}
        />
        <IconButton 
          className={classes.iconButton} 
          aria-label="search"  
          onClick={handleSearchClick}      
        >
          <SearchIcon />
        </IconButton>
        <IconButton 
          className={classes.iconButton} 
          aria-label="clear"
          onClick={handleClearClick}
        >
          <ClearIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
}