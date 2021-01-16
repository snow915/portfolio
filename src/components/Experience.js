import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import TimelineSection from "./TimelineSection";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Business from '@material-ui/icons/Business';
import Face from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import Grid from "@material-ui/core/Grid";


export default function Experience(){
    const classes = useStyles();




    let experience = [
        {
            title: 'Agencia de publicidad Armenta',
            date: '1 año 6 meses',
            icon: <Business className={classes.large} />,
            iconColor: '#00923D',
            moreInfo: '',
            details: [
                {
                    employment: 'Desarrollador web',
                    description: 'Creación del sitio web para la empresa Fumigaciones Servitodo.',
                    date: 'mar. 2020'
                },
                {
                    employment: 'Desarrollador web',
                    description: 'Creación del sitio web para la empresa TITAN (Tinacos y Tanques).',
                    date: 'dic. 2019 – ene. 2020'
                },
                {
                    employment: 'Desarrollador web',
                    description: 'Creación de sistema/sitio web para la empresa Coffi Raveto',
                    date: 'ago. 2019 – oct. 2019'
                },
            ]
        },

        {
            title: 'Freelancer',
            date: '2 meses',
            icon: <Face className={classes.large}/>,
            iconColor: '#00923D',
            moreInfo: '',
            details: [
                {
                    employment: 'Desarrollador web',
                    description: 'Creación del sitio web para la empresa OKVIR Renta de Autos.',
                    date: 'nov. 2019 - dic.2019'
                },
            ]
        },

        {
            title: 'Instituto Tecnológico de Apizaco',
            date: '7 meses',
            icon: <SchoolIcon className={classes.large} />,
            iconColor: '#00923D',
            moreInfo: 'Servicio social en el centro de cómputo',
            details: [
                {
                    employment: 'Desarrollador web',
                    description: 'Creación de un sistema de notificaciones dirigido a alumnos de la misma universidad, ' +
                        'con el respectivo módulo de administrador en SSI(Sistema de Servicios Integrales) y el módulo ' +
                        'del alumno (Servicios Integrales para Estudiantes)',
                    date: 'jun. 2019 - nov. 2019'
                },
                {
                    employment: 'Desarrollador web',
                    description: 'Creación de sistema OpenHouse de lado del alumno',
                    date: 'dic. 2019'
                },
            ]
        },

        {
            title: 'Freelancer',
            date: '3 meses',
            icon: <Face className={classes.large} />,
            iconColor: '#00923D',
            moreInfo: '',
            details: [
                {
                    employment: 'Desarrollador Android',
                    description: 'Creación de una aplicación móvil de audio en streaming para La PrendidaMX.',
                    date: 'mar. 2019 - may.2019'
                },
            ]
        },

    ];
    return(
            <Container fixed>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography style={{marginBottom: 30, marginTop: 70}} variant='h2'>
                        Experiencia
                    </Typography>
                    <div className={classes.root}>
                        <List>
                            {experience.map((item, index) => (
                                <div key={index}>
                                    <ListItem >
                                        <TimelineSection data={item} />
                                    </ListItem>
                                </div>
                            ))}
                        </List>

                    </div>
                </Grid>
            </Grid>
    </Container>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }

}));