import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IRiaAds } from "../../models/Interfaces";
import UtilsRia from "../../utils/UtilsRia";
import Utils from "../../utils/Utils";
import { bodyStyles } from "../../data/DataStylesRia";
import lang from "../../locale";
import { URLs } from "../../data/Data";
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { ShareDialog } from "../share/ShareDialog";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      maxWidth: 500,
      marginTop: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[400],
    },
    link: {
        display: 'none',
    },
    pos: {
        marginBottom: 12,
    },
  }),
);

export const ResultRiaCard = (props: {item: IRiaAds}) => {
    const classes = useStyles({});
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const title = Utils.checkIsUndefinedOrNull(props.item.title) ? "" : props.item.title;
    const year = Utils.checkIsUndefinedOrNull(props.item.autoData.year) ? "" : `(${props.item.autoData.year})`;
    const USD = Utils.checkIsUndefinedOrNull(props.item.USD) ? "" : `${props.item.USD} $, `;
    const stateData = Utils.checkIsUndefinedOrNull(props.item.stateData.name) ? "" : props.item.stateData.name;
    const image = Utils.checkIsUndefinedOrNull(props.item.photoData.seoLinkB) ? "" : props.item.photoData.seoLinkB;
    const description = Utils.checkIsUndefinedOrNull(props.item.autoData.description) ? "" : props.item.autoData.description;
    const race = Utils.checkIsUndefinedOrNull(props.item.autoData.race) ? "" : props.item.autoData.race;
    const category = Utils.checkIsUndefinedOrNull(props.item.autoData.categoryId) ? "" : UtilsRia.detectTypeByCategory(props.item.autoData.categoryId);
    const fuelName = Utils.checkIsUndefinedOrNull(props.item.autoData.fuelName) ? "" : props.item.autoData.fuelName;
    const gearboxName = Utils.checkIsUndefinedOrNull(props.item.autoData.gearboxName) ? "" : props.item.autoData.gearboxName;
    const body = Utils.checkIsUndefinedOrNull(props.item.autoData.bodyId) ? "" : UtilsRia.detectBodyStyleByValue(bodyStyles, props.item.autoData.bodyId);
    const phone = Utils.checkIsUndefinedOrNull(props.item.userPhoneData.phone) ? "" : `+380${props.item.userPhoneData.phone}`;
    const url = Utils.checkIsUndefinedOrNull(props.item.linkToView) ? "" : `${URLs.riaUrlPublic}${props.item.linkToView}`;
  
    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleShareClick = () => {
        setOpen(true);
    };
    const handleRedirectClick = () => {
        window.open(url);
    };
    return(
        <Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        RIA
                    </Avatar>
                    }
                    action={
                    <IconButton 
                        aria-label="settings"
                        title={lang(state.lang).card_settings}
                        onClick={handleShareClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={`${title} ${year}`}
                    subheader={`${USD}${stateData}`}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={`${title} ${year}`}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {description}         
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="open original ads"
                        title={lang(state.lang).card_openOriginalAds}
                        onClick={handleRedirectClick}
                    >
                        <SendIcon />
                    </IconButton>
                    <IconButton 
                        aria-label="share"
                        title={lang(state.lang).card_share}
                        onClick={handleShareClick}
                    >
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        title={lang(state.lang).card_showMore}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>   
                        <Typography variant="body2" component="p">
                            {`${lang(state.lang).race}: ${race}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {`${lang(state.lang).kind}: ${category}`}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {`${lang(state.lang).fuel}: ${fuelName}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {`${lang(state.lang).gearbox}: ${gearboxName}`}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {`${lang(state.lang).body}: ${body}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {lang(state.lang).phone}: <a href={`tel:${phone}`}>{phone}</a>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <ShareDialog open={open} onClose={handleClose} url={url} />
        </Fragment>
    )
}