import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        width: '100vw',
        height: '6vh',
        padding : 0,
        backgroundColor:'#404f63',
    },
    appBar: {
        height:'4rem', 
        backgroundColor:'#404f63'
    },
    coronaTracker:{
        zIndex: 1 ,
        marginTop: 0, 
        marginLeft: 0,
        // paddingLeft : "30%",
        width:'100%', 
        display:'flex',
        // alignItems:"center",
    },
    type:{
        marginLeft:'1rem',
        color:'#5DAAE0',
        width:'40rem',
        height:'3rem',
        textAlign: 'left',
        font: 'normal normal normal Roboto',
        fontSize: '2.2rem',
        letterSpacing: 0,
        marginTop: '0.4rem',
        whiteSpace: 'noWrap'
    },
    menuButton: {
        marginRight: '2rem',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position='fixed'
            elevation={0}
            className= {classes.appBar}>
            <Typography className= {classes.type}>
                Corona Tracker - INDIA
            </Typography>
        </AppBar>
        </div>
    );
}
