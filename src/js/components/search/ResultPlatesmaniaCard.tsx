import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IPlatesmaniaCars } from "../../models/Interfaces";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
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
      backgroundColor: green[500],
    },
    link: {
        display: 'none',
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
    },
  }),
);

export const ResultPlatesmaniaCard = (props: {images: IPlatesmaniaCars[]}) => {
    const classes = useStyles({});
    const handleRedirectClick = (url: string) => {
        window.open(url);
    };
    return (
        <Fragment>
            {props.images.map((imageCard: IPlatesmaniaCars) => {
                return <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            PM
                        </Avatar>
                        }
                        title="Result images from"
                        subheader="http://platesmania.com"        
                    />
                    <CardMedia
                        className={classes.media}
                        image={imageCard.photo.medium}                
                    />
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            "Дата світлини": {imageCard.date}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton 
                            aria-label="open original image"
                            title="Open original image"
                            onClick={ () => handleRedirectClick(imageCard.photo.original)}
                        >
                            <SendIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            })}
            
            {/*    
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        PM
                    </Avatar>
                    }
                    title="Result images from"
                    subheader="http://platesmania.com"        
                />
                <CardMedia
                    className={classes.media}
                    image="http://img02.avto-nomer.ru/150711/m/fr73629.jpg"                
                />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        "Дата світлини": "2015-07-11 12:25:24"
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="open original image"
                        title="Open original image"
                        onClick={ () => handleRedirectClick("http://img02.avto-nomer.ru/150711/o/fr73629.jpg")}
                    >
                        <SendIcon />
                    </IconButton>
                </CardActions>

                <CardMedia
                    className={classes.media}
                    image="http://img03.platesmania.com/180401/m/11146987.jpg"                
                />
                 <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    "Дата світлини": "2018-04-01 07:58:04"
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="open original image"
                        title="Open original image"
                        onClick={ () => handleRedirectClick("http://img03.platesmania.com/180401/o/11146987.jpg")}
                    >
                        <SendIcon />
                    </IconButton>
                </CardActions>
                */}  
        </Fragment>
  );
}