import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Typography from '@material-ui/core/Typography';
export default function TimelineSection(props) {
    const classes = useStyles();

    return (

        <Timeline style={{marginBottom: 40}} align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.data.date}
                    </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: props.data.iconColor}}>
                        {props.data.icon}
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>

                <TimelineContent>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="h6">
                            {props.data.title}
                        </Typography>

                        <Typography>
                            {props.data.moreInfo}
                        </Typography>
                    </Paper>
                </TimelineContent>

            </TimelineItem>

            {props.data.details.map((data, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            {data.date}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot style={{backgroundColor: '#0154ff'}}>
                            <LaptopMacIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6">
                                {data.employment}

                            </Typography>
                            <Typography>
                                {data.description}

                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '16px 14px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));