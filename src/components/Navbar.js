import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PropTypes from "prop-types";


export default function Navbar(props) {
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();


    const drawer = (
        <div>
            <List>
                <ListItem className={classes.centered}>
                    <Avatar className={classes.large} alt="CA"
                            src={props.picture}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                {[['Acerca de mi', <PersonOutlinedIcon/>], ['Experiencia', <WorkOutlineOutlinedIcon/>], ['Educación',
                    <SchoolOutlinedIcon/>], ['Tecnologías', <ComputerOutlinedIcon/>], ['Contacto', <ContactPhoneIcon />]].map((text, index) => (
                    <ListItem onClick={() => props.executeScroll(index)} button key={text[0]}>
                        <ListItemIcon style={{color: 'white'}}>{text[1]}</ListItemIcon>
                        <ListItemText style={{color: 'white'}} primary={text[0]}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={() => props.handleDrawerToggle()}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
        background: '#212a3d',
    },
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        marginTop: 20,
        marginBottom: 20
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

}));


Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
