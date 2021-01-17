import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import {Email, Phone, Cake, Code, GitHub, LinkedIn} from '@material-ui/icons';


const gotoSocialMedia = social => {
    let link = '';
    if (social === 0) {
        link = 'https://www.linkedin.com/in/cristian-augusto-armenta-garcia/';
    } else if (social === 1) {
        link = 'https://github.com/snow915';
    }
    window.open(link, '_blank');
}


export default function About({personalData}) {
    const classes = useStyles();

    return (
        <Container fixed>
            {personalData.map((text, index) => (
                <Grid container spacing={3} key={index}>
                    <Grid item xs={12}>
                        <Typography style={{marginBottom: 30}} variant="h2">
                            Acerca de mi
                        </Typography>

                        <Typography paragraph>
                            {text.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} xl={3}>
                        <img width='100%' src={text.picture} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9} xl={9}>
                        <Typography variant="h4">
                            Desarrollador de aplicaciones móviles / web
                        </Typography>

                        <Grid container spacing={0}>
                            <Grid item xs={12} md={6}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Email color='action'/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Email : " secondary={text.email}/>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Cake color='action'/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Fecha nacimiento" secondary="Enero 9, 1998 (23 años)"/>
                                    </ListItem>

                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Phone color='action'/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Celular" secondary={text.phone}/>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Code color='action'/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Carrera" secondary="Ing. TIC'S"/>
                                    </ListItem>

                                </List>
                            </Grid>

                            <Grid item xs={12}>
                                <div className={classes.root}>

                                    <Avatar style={{cursor: 'pointer', backgroundColor: '#0073B1'}}
                                            className={classes.large}
                                            onClick={() => gotoSocialMedia(0)}>
                                        <LinkedIn color='inherit'/>
                                    </Avatar>

                                    <Avatar style={{cursor: 'pointer', backgroundColor: '#161414'}}
                                            className={classes.large}
                                            onClick={() => gotoSocialMedia(1)}>
                                        <GitHub color='inherit'/>
                                    </Avatar>

                                </div>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            ))}

        </Container>

    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    large: {
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    },

}));
