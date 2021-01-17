import React, {useState, createRef, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import './App.css';


export default function App() {

    const [getPersonalData, setPersonalData] = useState([]);

    useEffect(() => {
        axios.get("http://portfolioaugusto.000webhostapp.com/personal/").then(response => {
            setPersonalData(response.data);
        });
    }, []);

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const aboutRef = createRef();
    const xpRef = createRef();
    const educationRef = createRef();
    const techRef = createRef();
    const contactRef = createRef();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const executeScroll = e => {

        let ref = null;
        let options = {
            behavior: "smooth",
            block: "center"
        };
        if (e === 0) {
            ref = aboutRef;
        } else if (e === 1) {
            ref = xpRef;
            options = {
                behavior: "smooth",
                block: "start"
            }
        } else if (e === 2) {
            ref = educationRef;
        } else if (e === 3) {
            ref = techRef;
            options = {
                behavior: "smooth",
                block: "start"
            }
        } else if (e === 4) {
            ref = contactRef;
        }
        ref.current.scrollIntoView(options);

    }

    return (

        <>
            {getPersonalData.map((text, index) => (
                <div className={classes.root} key={index}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar} style={{background: '#2E3B55'}}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                {text.name}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}
                            executeScroll={executeScroll} picture={text.picture}/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <div ref={aboutRef}>
                            <About personalData={getPersonalData}/>
                        </div>
                        <div ref={xpRef}>
                            <Experience/>
                        </div>
                        <div ref={educationRef}>
                            <Education/>
                        </div>
                        <div ref={techRef}>
                            <Technologies/>
                        </div>
                        <div ref={contactRef}>
                            <Contact/>
                        </div>

                    </main>
                </div>
            ))}

        </>
    );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: '100%'
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: '#212a3d',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));
