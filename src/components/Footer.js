import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Footer(props) {
    
    return (
        <Grid
        item
        xs={12}
        style={{
            display: 'flex',
            marginRight: '3rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgb(64,79,99)' ,
            position: 'fixed'
        }}
        >
        <Typography style={{font: 'normal normal normal Roboto',
            letterSpacing: 0,
            color: '#FFFFFFA6',
            fontSize: '1rem',
            marginLeft:'5.7rem'}}>SAUNDARYA - 1806516@kiit.ac.in
        </Typography>
        <Typography style={{font: 'normal normal normal Roboto',
            letterSpacing: 0,
            color: '#FFFFFFA6',
            fontSize: '1rem'}}>
            Assignment for PHYSICS WALLAH
        </Typography>
        </Grid>
    );
    }



export default Footer;
