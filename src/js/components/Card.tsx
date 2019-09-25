import React, { Fragment} from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppState } from "../store";
import { ApplicationStates, IVinResultValues, IRiaAds } from "../models/Interfaces";
import UtilsRia from "../utils/UtilsRia";
import { bodyStyles } from "../data/DataStylesRia";

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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PhoneIcon from '@material-ui/icons/Phone';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import lang from "../locale";
import { regions } from "../data/Data";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      maxWidth: 345,
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
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
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
                title={`${props.item.title} (${props.item.autoData.year})`}
                subheader={`${props.item.USD} $, ${props.item.stateData.name}`}
            />
            <CardMedia
                className={classes.media}
                image={props.item.photoData.seoLinkB}
                title={`${props.item.title} ${props.item.autoData.year}`}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.item.autoData.description}         
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
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
                    <Typography paragraph>Характеристики:</Typography>

                    <Typography paragraph>
                    Пробіг: {props.item.autoData.race}
                    </Typography>

                    <Typography paragraph>
                    Тип: {UtilsRia.detectTypeByCategory(props.item.autoData.categoryId)}
                    </Typography>

                    <Typography paragraph>
                    Двигун: {props.item.autoData.fuelName}
                    </Typography>

                    <Typography paragraph>
                    Коробка передач: {props.item.autoData.gearboxName}
                    </Typography>

                    <Typography paragraph>
                    Кузов: {UtilsRia.detectBodyStyleByValue(bodyStyles, props.item.autoData.bodyId)}
                    </Typography>

                    <Typography paragraph>
                    Мобільний: <a href={`tel:+380${props.item.userPhoneData.phone}`}>{`+380${props.item.userPhoneData.phone}`}</a> 
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    )
}