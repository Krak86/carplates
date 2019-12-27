import React, { SyntheticEvent, Fragment, useState, useRef, useEffect } from "react";
import Utils from "../../utils/Utils";
import lang from "../../locale";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { itemFetchDataForPlate, itemFetchDataForVin, setItemRequest, imageFetchData } from "../../redux/actions";
import { AppState } from "../../redux";
import { IApplicationStates, ISearchFieldState, IEnvConfig } from "../../models/Interfaces";
import { URLs } from "../../data/Data";
import { SnackbarContentWrapper } from "../snackbar/SnackbarContentWrapper";
import { DialogVideoWindow } from "../video/DialogVideoWindow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Snackbar from "@material-ui/core/Snackbar";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../../env.json");

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      padding: "0px 0px",
      display: "flex",
      alignItems: "center",
      maxWidth: 500,
      marginBottom: "20px",
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
      display: "none",
    },
    margin: {
      margin: theme.spacing(1),
    },
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const isEmpty = (value: string): boolean => {
  if (
    Utils.trimData(value) === "" ||
    Utils.trimData(value) === undefined
    ) {
    return true;
  } else {
    return false;
  }
};
const isVin = (value: string): boolean => {
  return (Utils.trimData(value).length === 17);
};
const shapeDataPlate = (value: string): string => {
  return Utils.combineConvertedSymbols(
      Utils.trimData(value).toLocaleUpperCase(),
      Utils.latinRange,
      Utils.latinToCyrillicMatrix,
      Utils.reducer,
    );
};
const shapeUrlPlate = (value: string, url: string): string => {
  return Utils.shapeUrlPlate(url, value, Utils.extractPartitionKey(value));
};
const shapeDataVin = (value: string): string => {
  return Utils.trimData(value);
};
const shapeUrlVin = (value: string, url: string): string => {
  return Utils.shapeUrlVin(url, value);
};

export const SearchField = () => {
  const [inputValue, setInputValue] = useState<ISearchFieldState>({value: ""});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
  const dispatch = useDispatch();
  const searchInput: React.RefObject<any> = useRef(null);

  useEffect(() => {
    document.title = `${lang(state.lang).documentTitle} ${state.itemRequest}`;
  });
  useEffect(() => {
    searchInput.current.focus();
  }, []);
  useEffect(() => {
    const hashValue = decodeURIComponent(window.location.hash.split("#/")[1].trim());
    if (hashValue !== "") {
      if (isVin(hashValue)) {
        const value = shapeDataVin(hashValue);
        const url = shapeUrlVin(value, serviceUrlVIN);
        dispatch(itemFetchDataForVin(value, url));
      } else {
        const value = shapeDataPlate(hashValue);
        const url = shapeUrlPlate(value, serviceUrl);
        dispatch(itemFetchDataForPlate(value, url));
      }
    }
  }, []);
  const history = useHistory();
  const classes = useStyles({});
  const serviceUrl = /*process.env.AZURE_TABLE_SERVICE_URL ||*/ config.AZURE_TABLE_SERVICE_URL || "";
  const serviceUrlVIN = /*process.env.VIN_SERVICE_URL ||*/ URLs.getDataByVinUrl || "";
  const serviceRecognizeImageUrl = /*process.env.AZURE_FUNC_PLATE_RECOGNIZER_URL ||*/ config.AZURE_FUNC_PLATE_RECOGNIZER_URL || "";
  const options = lang(state.lang).cameraActions || [];
  const ITEM_HEIGHT = 48;
  const attachImageID = "attachImage";

  const takeAPhoto = async () => {
    if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
      handleClickOpenDialog();
    } else {
      setOpenSnackbar(true);
      handleSnackbarMessage(lang(state.lang).messageTurnOnCamera || "");
    }
  };
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleClickCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleChange = (value: keyof ISearchFieldState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({...inputValue, [value]: event.target.value });
  };
  const handleSearchClick = () => {
    let value = "";
    if (isEmpty(inputValue.value)) {
      return;
    }
    if (isVin(inputValue.value)) {
      value = shapeDataVin(inputValue.value);
      const url = shapeUrlVin(value, serviceUrlVIN);
      dispatch(itemFetchDataForVin(value, url));
    } else {
      value = shapeDataPlate(inputValue.value);
      const url = shapeUrlPlate(value, serviceUrl);
      dispatch(itemFetchDataForPlate(value, url));
    }
    searchInput.current.focus();
    handleAddResultToHash(value);
  };
  const handleAddResultToHash = (value: string) => {
    history.push(`/${value}`);
  };
  const handleClearClick = () => {
    setInputValue({...inputValue, value: "" });
    dispatch(setItemRequest(""));
    searchInput.current.focus();
  };
  const handlerKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.charCode === 13) {
      handleSearchClick();
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCameraClick = (option: string) => {
    setAnchorEl(null);

    if (options[0] === option) {
      takeAPhoto();
    }
    if (options[1] === option) {
      const attachImageIDElement = document.getElementById(attachImageID);
      if (attachImageIDElement !== null ) {
        attachImageIDElement.click();
      }
    }
    handleClearClick();
  };
  const handleFiles = (value: FileList | null): void => {
    if (value === null) {
      return;
    }
    if (value.length === 0) {
      return;
    }
    const file = value[0];
    if (!Utils.checkFileType(file.type)) {
      setOpenSnackbar(true);
      handleSnackbarMessage(lang(state.lang).messageChooseImage || "");
      return;
    }
    if (!Utils.checkImageSize(file.size)) {
      setOpenSnackbar(true);
      handleSnackbarMessage(lang(state.lang).messageImageLimit || "");
      return;
    }
    dispatch(imageFetchData(file, serviceRecognizeImageUrl));
  };
  const handleCloseSnackBar = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleSnackbarMessage = (message: string) => {
    setSnackbarMessage(message);
  };

  return (
    <Fragment>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={lang(state.lang).searchInputPlaceholderText}
          inputProps={{ "aria-label": lang(state.lang).searchInputPlaceholderText }}
          onChange={handleChange("value")}
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
          keepMounted={true}
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
            <MenuItem key={option} onClick={() => {handleCameraClick(option); }}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <input
          accept="image/*"
          className={classes.upload}
          id={attachImageID}
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
        />
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <SnackbarContentWrapper
          onClose={handleCloseSnackBar}
          variant="error"
          message={snackbarMessage}
        />
      </Snackbar>
      <DialogVideoWindow
        title={options[0]}
        openDialog={openDialog}
        handleClickCloseDialog={handleClickCloseDialog}
      />
    </Fragment>
  );
};
