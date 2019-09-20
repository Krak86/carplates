import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { itemFetchDataForPlate, itemFetchDataForVin, setItemRequest, imageFetchData } from "../store/actions";
import { AppState } from "../store";
import { ApplicationStates} from "../models/Interfaces";
import { URLs } from "../data/Data";

import Utils from "../utils/Utils";
import lang from "../locale";

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const options = lang.cameraActions;
const ITEM_HEIGHT = 48;
const attachImageID = "attachImage";

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
      padding: 5,
      flex: 1,
    },
    iconButton: {
      padding: 5,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    depositContext: {
      flex: 1,
    },
    upload: {
      display: 'none',
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

const checkFileType = (blob: File): boolean => {
  if(blob.type.indexOf("image") === -1){
    return false;
  }
  else{
    return true;
  }
}

const checkImageSize = (blob: File): boolean => {
  if(blob.size > 5000000){
    return false;
  }
  else{
    return true;
  }
}

async function takeAPhoto(){
  if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    alert(stream);
  }
}

export const SearchField = () => {
  //constructor
  const [inputValue, setInputValue] = useState<State>({value: ""});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
  const serviceRecognizeImageUrl = process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL || URLs.carPlateRecMlApiUrl;

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
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleCameraClick = (option: string) => {
    setAnchorEl(null);

    if(options[0] === option){
      takeAPhoto();
    }
    else if(options[1] === option){
      document.getElementById(attachImageID).click();
    }
    
  }
  const handleFiles = (value: FileList): File => {
    if(value.length === 0){
      return;
    }
    let file = value[0];
    if(!checkFileType(file)){
      alert("Please choose image file for site logo!");
      return;
    }
    if(!checkImageSize(file)){
      alert("Image logo should be less then 5 MB!");
      return;
    }
    dispatch(imageFetchData(file, serviceRecognizeImageUrl));
  
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
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton 
          color="primary" 
          className={classes.iconButton} 
          aria-label="camera"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PhotoCameraIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map((option: string) => (
            <MenuItem key={option} onClick={() => {handleCameraClick(option)}}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <input
          accept="image/*"
          className={classes.upload}
          id={attachImageID}
          type="file"
          onChange={(e) => handleFiles(e.target.files) }
        />
      </Paper>
    </Fragment>
  );
}