import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { itemFetchDataForPlate, itemFetchDataForVin, setItemRequest } from "../store/actions";
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import { URLs } from "../data/Data";

import Utils from "../utils/Utils";
import lang from "../locale";

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

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

const isEmpty = (value: string): boolean => {
  if(
    Utils.trimData(value) === "" ||
    Utils.trimData(value) === undefined
    ){
    return true;
  }
  else{
    return false;
  }
};

const isVin = (value: string): boolean => {
  return (Utils.trimData(value).length === 17);
}

const shapeDataPlate = (value: string): string => {
  return Utils.convertToCyrillic(
      Utils.toLocaleUpperCaseData(
        Utils.trimData(value)
      ), 
      Utils.latinRange, 
      Utils.latinToCyrillicMatrix, 
      Utils.reducer
    );
};

const shapeUrlPlate = (value: string, url: string): string => {
  return Utils.shapeUrlPlate(url, value, Utils.extractPartitionKey(value));
}

const shapeDataVin = (value: string): string => {
  return Utils.trimData(value);
};

const shapeUrlVin = (value: string, url: string): string => {
  return Utils.shapeUrlVin(url, value);
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

  const serviceUrl = process.env.AZURE_TABLE_SERVICE_URL || URLs.getDataByPlateUrl;
  const serviceUrlVIN = process.env.VIN_SERVICE_URL || URLs.getDataByVinUrl;

  const handleChange = (value: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({...inputValue, [value]: event.target.value });
  };
  const handleSearchClick = () => {   
    if(isEmpty(inputValue.value)){
      return;
    }
    if(isVin(inputValue.value)){
      const value = shapeDataVin(inputValue.value);
      const url = shapeUrlVin(value, serviceUrlVIN);
      dispatch(itemFetchDataForVin(value, url));
    }
    else{
      const value = shapeDataPlate(inputValue.value);
      const url = shapeUrlPlate(value, serviceUrl);
      dispatch(itemFetchDataForPlate(value, url));
    }
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