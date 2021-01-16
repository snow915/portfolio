import React from "react";
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

const avatarsItems = [
    {
        title: 'React Native / React JS',
        description: 'Web y móvil',
        percentage: 50,
        icon: 'react',
        bgColor: '#212121',
        style: {fill: "#5ED3F3", width: "150px"}
    },
    {
        title: 'Android (Java)',
        description: 'Móvil',
        percentage: 40,
        icon: 'android',
        bgColor: '#73B232',
        style: {fill: "white", width: "100px"}
    },
    {
        title: 'Python',
        description: 'Automatización y ciencia de datos',
        percentage: 70,
        icon: 'python',
        bgColor: '#3470A0',
        style: {fill: "#F7CB3F", width: "150px"}
    },
    {
        title: 'Javascript',
        description: 'Web y móvil',
        percentage: 60,
        icon: 'javascript',
        bgColor: '#F7E018',
        style: {fill: "black", width: "150px"}
    },
    {
        title: 'PHP',
        description: 'Web',
        percentage: 65,
        icon: 'php',
        bgColor: '#7377AD',
        style: {fill: "black", width: "150px"}
    },
    {
        title: 'Debian GNU/Linux',
        description: 'Uso personal y servidores',
        percentage: 75,
        icon: 'debian',
        bgColor: '#white',
        style: {fill: "#A3002F", width: "150px"}
    },
    {
        title: 'HTML5',
        description: 'Web',
        percentage: 80,
        icon: 'html5',
        bgColor: '#F64A1D',
        style: {fill: "white", width: "150px"}
    },
    {
        title: 'CSS3',
        description: 'Web',
        percentage: 30,
        icon: 'css3',
        bgColor: '#3595CF',
        style: {fill: "white", width: "150px"}
    },
    {
        title: 'Bootstrap',
        description: 'Web',
        percentage: 80,
        icon: 'bootstrap',
        bgColor: '#533B78',
        style: {fill: "white", width: "150px"}
    },
    {
        title: 'MySQL',
        description: 'Web',
        percentage: 70,
        icon: 'mysql',
        bgColor: '#005168',
        style: {fill: "white", width: "150px"}
    },
    {
        title: 'Postgresql',
        description: 'Web',
        percentage: 65,
        icon: 'postgresql',
        bgColor: '#31648B',
        style: {fill: "white", width: "150px"}
    },
    {
        title: 'Firebase',
        description: 'Web y móvil',
        percentage: 45,
        icon: 'firebase',
        bgColor: '#0396DE',
        style: {fill: "#F7C52C", width: "150px"}
    },

]

const Item = ({item, index}) => {
    return (
        <ListItem key={index}>
            <ListItemAvatar>
                <Avatar style={{backgroundColor: item.bgColor}} className={useStyles().large}>
                    <DevIcon icon={item.icon} style={item.style}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.description}/>
            <Percentage value={item.percentage}/>
        </ListItem>
    );
}

let items = [[], []];
avatarsItems.forEach(avatar => {
    if (avatarsItems.indexOf(avatar) < avatarsItems.length / 2) {
        items[0].push(avatar);
    } else {
        items[1].push(avatar)
    }
});


export default function Technologies() {
    const classes = useStyles();

    return (
        <Container fixed>
            <Typography style={{marginBottom: 30, marginTop: 70, paddingTop: 70}} variant='h2'>
                Tecnologías
            </Typography>

            <Typography style={{marginBottom: 30, marginTop: 50}} variant='h6'>
                Lenguajes de programación, SO y herramientas
            </Typography>

            <Typography variant='body1'>
                Las siguientes tecnologías son las que más he utilizado a lo largo de éste tiempo,
                me gusta mucho el desarrollo de aplicaciones móviles y el desarrollo web
            </Typography>
            <br/>

            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <List className={classes.root}>
                        {items[0].map((avatar, index) => (
                            <Item item={avatar} key={index} index={index}/>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <List className={classes.root}>
                        {items[1].map((avatar, index) => (
                            <Item item={avatar} key={index} index={index}/>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
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