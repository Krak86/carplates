import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Drawer from "@material-ui/core/Drawer";
import { AppState } from "../../redux";
import { IApplicationStates, IShareDialog } from "../../models/Interfaces";
import { useSelector, shallowEqual } from "react-redux";
import lang from "../../locale";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    ViberShareButton,
    EmailShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    ViberIcon,
    EmailIcon,
} from "react-share";

const useStyles = makeStyles(() => createStyles({
    network: {
        verticalAlign: "top",
        display: "inline-block",
        margin: "0",
        padding: "0 0 30px 30px",
        textAlign: "center",
    },
    network_sharebutton: {
        cursor: "pointer",
    },
}));

export const ShareDrawerBottom = (props: IShareDialog) => {
    const { url, open, onClose } = props;
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const classes = useStyles({});
    const handleClose = () => {
      onClose();
    };
    return (
      <Drawer anchor="bottom" onClose={handleClose} aria-labelledby="dialog-title" open={open}>
        <DialogTitle id="dialog-title">{lang(state.lang).card_share}</DialogTitle>
        <div>
            <div className={classes.network}>
                <FacebookShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <FacebookIcon
                        size={32}
                        round={true}
                    />
                </FacebookShareButton>
            </div>
            <div className={classes.network}>
                <WhatsappShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <WhatsappIcon
                        size={32}
                        round={true}
                    />
                </WhatsappShareButton>
            </div>
            <div className={classes.network}>
                <LinkedinShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <LinkedinIcon
                        size={32}
                        round={true}
                    />
                </LinkedinShareButton>
            </div>
            <div className={classes.network}>
                <TwitterShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <TwitterIcon
                        size={32}
                        round={true}
                    />
                </TwitterShareButton>
            </div>
            <div className={classes.network}>
                <TelegramShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <TelegramIcon
                        size={32}
                        round={true}
                    />
                </TelegramShareButton>
            </div>
            <div className={classes.network}>
                <ViberShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <ViberIcon
                        size={32}
                        round={true}
                    />
                </ViberShareButton>
            </div>
            <div className={classes.network}>
                <EmailShareButton
                    url={url}
                    className={classes.network_sharebutton}
                >
                    <EmailIcon
                        size={32}
                        round={true}
                    />
                </EmailShareButton>
            </div>
        </div>
      </Drawer>
    );
};
