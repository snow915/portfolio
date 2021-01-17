import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import TimelineSection from "./TimelineSection";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import axios from "axios";


export default function Experience() {
    const [getExperience, setExperience] = useState([]);


    useEffect(() => {
        axios.get("https://portfolioaugusto.000webhostapp.com/experience/").then(response => {
            setExperience(response.data);
        });
    }, []);


    return (
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography style={{marginBottom: 30, marginTop: 70}} variant='h2'>
                        Experiencia
                    </Typography>
                    <div >
                        <List>
                            {getExperience.map((item, index) => (
                                <div key={index}>
                                    <ListItem>
                                        <TimelineSection data={item}/>
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
