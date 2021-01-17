import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import {Grid} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import DevIcon from "devicon-react-svg";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import axios from "axios";


const Percentage = ({value}) => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" value={value}/>
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{value}%
                </Typography>
            </Box>
        </Box>
    )
}


const Item = ({item, index}) => {
    return (
        <ListItem key={index}>
            <ListItemAvatar>
                <Avatar style={{backgroundColor: item.bgColor}} className={useStyles().large}>
                    <DevIcon icon={item.icon} style={{fill: item.iconColor, width: "150px"}}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.description}/>
            <Percentage value={item.percentage}/>
        </ListItem>
    );
}

export default function Technologies() {
    const classes = useStyles();
    const [getFirstPart, setFirstPart] = useState([]);
    const [getSecondPart, setSecondPart] = useState([]);
    const [getTech, setTech] = useState(false);

    const fillItems = (getTechnologies) => {
        if(!getTech){
            getTechnologies.forEach(avatar => {
                if (getTechnologies.indexOf(avatar) < getTechnologies.length / 2) {
                    setFirstPart(getFirstPart => [...getFirstPart, avatar]);
                } else {
                    setSecondPart(getSecondPart => [...getSecondPart, avatar]);
                }
            });
        }
    }

    useEffect(() => {
        axios.get("https://portfolioaugusto.000webhostapp.com/technologies/").then(response => {
            fillItems(response.data);
            setTech(true);
        });
    }, []);


    return (
        <Container fixed>
            <Typography style={{marginBottom: 30, marginTop: 70, paddingTop: 70}} variant='h2'>
                Tecnologías
            </Typography>

            <Typography style={{marginBottom: 30, marginTop: 50}} variant='h6'>
                Lenguajes de programación, SO y herramientas
            </Typography>

            <Typography variant='body1'>
                Las siguientes tecnologías son las que más he utilizado a lo largo de este tiempo,
                me he dedicado más al desarrollo de aplicaciones móviles, desarrollo web y seguridad informática.
            </Typography>

            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <List className={classes.root}>
                        {getFirstPart.map((avatar, index) => (
                            <Item item={avatar} key={index} index={index}/>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <List className={classes.root}>
                        {getSecondPart.map((avatar, index) => (
                            <Item item={avatar} key={index} index={index}/>
                        ))}
                    </List>
                </Grid>
            </Grid>

            <Typography style={{marginBottom: 30, marginTop: 50}} variant='h6'>
                Intereses
            </Typography>
            <Typography variant='body1'>
                Me gusta siempre estar aprendiendo cosas nuevas que complementen mi conocimiento e ir mejorando mis
                servicios.
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <LabelImportantIcon/>
                            </ListItemAvatar>
                            <ListItemText primary="Ciencia de datos"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <LabelImportantIcon/>
                            </ListItemAvatar>
                            <ListItemText primary="Inteligencia artificial"/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>


        </Container>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 370,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(6.5),
            height: theme.spacing(6.5),
        },
    },
}));