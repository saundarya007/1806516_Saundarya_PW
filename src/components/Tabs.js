import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { pxToRem, pxToVw, pxToVh} from '../utils/theme';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
    <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => console.log(theme)|| ({
    root: {
        // flexGrow: 1,
        height:'3rem',
        width: '100%',
        color: 'primary',
        display: 'flex',
        flexGrow: 1,
        margin: 0,
    },
    app:{
        display:'flex',
        alignItems:'flex-start',
        minHeight: '3rem',
        marginTop:'3rem',
        marginLeft: 0,
        backgroundColor: "#404f63",
    },
    T:{
        minHeight: '0.4rem',
        position: 'absolute',
        display: 'flex',
        justifyContent:'space-around',
        alingContent:'flex-start',
        margin: 0,
        padding: 0,
    },
    tabsTrue:{
        width:'12rem',
        height: '3rem',
        color: "white",
        fontSize: '0.88rem',
        padding: 0,
        margin: 0,
        minWidth: '12rem',
        maxWidth:'12rem',
        minHeight:'3rem',
        maxHeigh:'3rem',
        whiteSpace: 'noWrap'
        
    },
    
    tabsFalse:{
        width:'12rem',
        height: '3rem',
        fontSize: '0.88rem',
        color: theme.palette.secondary.main,
        padding: 0,
        margin: 0,
        minWidth: '12rem',
        maxWidth:'12rem',
        minHeight:'3rem',
        maxHeigh:'3rem',
        whiteSpace: 'noWrap'
    },
    num: {
        letterSpacing: "0.01rem",
        marginTop: '-1rem',
        marginBottom: 0,
        color: "red",
        display:'flex',
        marginLeft: '80rem',
        width:'1rem'
    },
    
}));

function SimpleTabs(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [clr1,setClr] = React.useState(true);
    const [clr2,setClr2] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setClr(!clr1);
        setClr2(!clr2)
    };

    return (
        <div className={classes.root}>
        <AppBar position='fixed' className = {classes.app} elevation={0}>  
            <Tabs value={value} className = {classes.T} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{style:{background:'white', width: '11vw',height: '0.1rem',marginLeft:'1rem'}}}>
                <Tab className = {clr1 ? classes.tabsTrue : classes.tabsFalse} label= "Recovered" {...a11yProps(0)} />
                <Tab className = {clr2 ? classes.tabsTrue : classes.tabsFalse} label="Deaths" {...a11yProps(1)}/>     
            </Tabs>
            <div className={classes.num}>
                <TabPanel value={value} index={0}>3.05Cr</TabPanel>
                <TabPanel value={value} index={1}>4.21L</TabPanel>
            </div>
        </AppBar>
        {/* <TabPanel value={value} index={0}>
        

        </TabPanel>
        <TabPanel value={value} index={1}>
        

        </TabPanel> */}
        </div>
    )
}

export default SimpleTabs;


