import React from 'react';
import {Container} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import logoITA from '../img/logoITA.png';


export default function Education() {
    return (
        <Container fixed>

            <Typography style={{marginBottom: 30, marginTop: 50}} variant='h2'>
                Educación
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={9} md={3}>
                    <img src={logoITA} width="100%" alt=""/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant='h5'>
                        TecNM / Instituto Tecnológico de Apizaco
                    </Typography>
                    <br/>
                    <Typography variant='subtitle1'>
                        Ingeniería en Tecnologias de la Información y Comunicación
                    </Typography>

                    <Typography variant='subtitle2'>
                        2016 - 2021
                    </Typography>
                </Grid>
            </Grid>

        </Container>
    )
}