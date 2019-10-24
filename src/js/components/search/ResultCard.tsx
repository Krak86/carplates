import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Item } from "../../models/Interfaces";
import lang from "../../locale";
import { regions } from "../../data/Data";

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { ShareDialog } from "../share/ShareDialog";
import CardHeader from '@material-ui/core/CardHeader';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
      backgroundColor: blue[500],
    },
    link: {
        display: 'none',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  }),
);

export const ResultCard = (props: {item: Item}) => {
    const classes = useStyles({});
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const url = decodeURIComponent(window.location.href).trim();

    const primary = `${props.item.brand}/${props.item.model} (${props.item.make_year})`;
    const secondary = `${props.item.n_reg_new}, ${regions[props.item.PartitionKey]}`;
    
    const body = `${lang.body}: ${props.item.body}`;
    const capacity = `${lang.capacity}: ${props.item.capacity}`;
    const color = `${lang.color}: ${props.item.color}`;
    const weight = `${lang.weight}: ${props.item.own_weight}/${props.item.total_weight}`;
    const fuel = `${lang.fuel}: ${props.item.fuel}`;

    const kind = `${lang.kind}: ${props.item.kind}`;
    const purpose = `${lang.purpose}: ${props.item.purpose}`;
    const person = `${lang.person}: ${props.item.person === "P" ? lang.person_private : lang.person_company}`;
    const d_reg = `${lang.d_reg}: ${props.item.d_reg}`;
    const oper_name = `${lang.oper_name}: ${props.item.dep} (${props.item.dep_code}), ${props.item.oper_name} (${props.item.oper_code})`;
    const reg_addr_koatuu = `${lang.reg_addr_koatuu}: ${props.item.reg_addr_koatuu}`;

    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleShareClick = () => {
        setOpen(true);
    };
    const handleAddToFavs = () => {
        
    };
    return(
        <Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                         <DirectionsCarIcon />
                    </Avatar>
                    }
                    action={
                    <IconButton 
                        aria-label="settings"
                        title="settings"
                        onClick={handleShareClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={`${primary}`}
                    subheader={`${secondary}`}
                />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {body}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {capacity}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {weight}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {fuel}
                    </Typography>
                    <Typography variant="button" color="textSecondary" gutterBottom>
                        {color}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="share"
                        title="Add to Favorites"
                        onClick={handleAddToFavs}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton 
                        aria-label="share"
                        title="Share"
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
                        title="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" component="p">
                        {kind}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {purpose}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {person}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {d_reg}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {oper_name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {reg_addr_koatuu}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <ShareDialog open={open} onClose={handleClose} url={url} />
        </Fragment>
    )
}