import React, { Fragment} from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppState } from "../store";
import { ApplicationStates, IRiaAds } from "../models/Interfaces";
import UtilsRia from "../utils/UtilsRia";
import Utils from "../utils/Utils";
import { bodyStyles } from "../data/DataStylesRia";
import lang from "../locale";
import { URLs } from "../data/Data";

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
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
      backgroundColor: red[500],
    },
    link: {
        display: 'none',
    },
  }),
);

export const ResultCard = (props: {item: IRiaAds}) => {
    const classes = useStyles({});
    const [expanded, setExpanded] = React.useState(false);

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

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const handleShareClick = () => {
      };
      const handleRedirectClick = () => {
          window.open(url);
      };

    return(
        <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    RIA
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
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
                    onClick={handleRedirectClick}
                >
                    <SendIcon />
                </IconButton>
                <IconButton 
                    aria-label="share"
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
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{lang.details}:</Typography>

                    <Typography >
                    {`${lang.race}: ${race}`}
                    </Typography>

                    <Typography >
                    {`${lang.kind}: ${category}`}
                    </Typography>

                    <Typography >
                    {`${lang.fuel}: ${fuelName}`}
                    </Typography>

                    <Typography >
                    {`${lang.gearbox}: ${gearboxName}`}
                    </Typography>

                    <Typography >
                    {`${lang.body}: ${body}`}
                    </Typography>

                    <Typography >
                    {lang.phone}: <a href={`tel:${phone}`}>{phone}</a>
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    )
}