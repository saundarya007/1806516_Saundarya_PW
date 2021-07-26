import React, { Component }from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import MUICard from "@material-ui/core/Card";
import MUICardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { handlerClicked }from "../action/action";
import Charts from './Chart';
import "./scrollbar.css";

const styles = () => ({
    root: {
        height:"100vh",
        width:"100vw",
        marginTop: '0.5rem',
        padding: 0,
    },
    
    title: {
        flexGrow: 1,
    },
    spinnerRoot:{
        display: "flex",
        alingItem: "center",
        justifyContent: "center",
        height: "80vh",
    },
    card: {
        borderRadius: '1rem',
        width: '20rem',
        height: '25rem',
        // display: 'flex',
        // justifyContent : 'space-between',
        textAling: "center",
        backgroundColor: "rgb(42,63,77)",
        whiteSpace: 'wrap',
        marginLeft: '0.6rem',
        marginTop: '1rem'

    },
    heading: {
        fontSize: '1rem',
        fontWeight: "bold",
        letterSpacing: "0.01rem",
        marginTop: '1rem',
        marginBottom: 0,
        color: "#bfc4ca",
    },
    c: {
        display:'flex',
        flexWrap: 'wrap',
        width: '100%', 
        height:'100vh',
        display: 'flex',
        justifyContent:'center',
        alingContent:'center',
        // marginTop: '0.5rem',
        // marginLeft: '3.5rem',
        overflowY : 'visible',

    },
    override:{
        padding: 0,
        height:'4rem',
        overflow:'hidden'
    },
});

class state extends Component {

    handleFetchEmployeeBySaga = () => {
        this.props.startFetchBySaga();
    };
    LoadingSpinner = ({classes}) => (
        <div className = {classes.spinnerRoot}>
            <CircularProgress color = "secondary" />
        </div>
    );

    render(){
        const {loading, classes} = this.props;
        const { states } = this.props;
        let active = [];
        let recovered = [];
        let confirmed = [];
        let pathname = window.location.pathname;
        pathname = pathname.slice(1);
        pathname = pathname.replace(/%20/g, " ");

        console.log(pathname);
        console.log("states[pathname].districtData",Object.keys(states[pathname].districtData));
        var district = Object.keys(states[pathname].districtData);
        let cnf = 0;
        let r = 0;
        let a = 0;
        console.log(district.length);
        console.log(district[0]);
        for(let p = 0;p<district.length;p++){
            cnf = states.[pathname].districtData.[district[p]].confirmed;
            r = states.[pathname].districtData.[district[p]].recovered;
            a = states.[pathname].districtData.[district[p]].active;
            confirmed.push(cnf);
            recovered.push(r);
            active.push(a);
            console.log(confirmed,active,recovered);
        }
        return(
            <div className="scrollbar scrollbar-primary">
            <div className = {classes.root}>
                {loading ? (
                    <this.LoadingSpinner classes = {classes}></this.LoadingSpinner>
                ) : (
                    ""
                )}
                    
                <div className= {classes.c}>
                    {district.map((d, i) => (
                        <MUICard className = {classes.card} styles={{boxShadow:'0.1rem'}}>
                            <MUICardContent key = {i} styles={{boxShadow:'0.1rem'}}>
                                <Typography className={classes.heading}>{d}</Typography>
                            </MUICardContent>
                            <Divider light /> 
                            <Charts id={i+100} confirmed={confirmed[i]} active = {active[i]} recovered = {recovered[i]} /> 
                        </MUICard>
                    ))}
    
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    states: state.data,
});

const mapDispatchToProps = (dispatch) => ({
    startFetchBySaga: () => dispatch(handlerClicked()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(state));

{/* {states.map((state, i) => ( <Grid item xs={3} sm={3} md={3}>
                            
                            
                            
                            <this.StateCard classes={classes} {...i} {...state} />
                        </Grid> */}

                        // {stateArr.slice(1).map((state, i) => (
                        //     <MUICard className = {classes.card} styles={{boxShadow:'0.1rem'}}>
                        //     <MUICardContent key = {i} styles={{boxShadow:'0.1rem'}}>
                        //         <Typography className={classes.heading}>{state}</Typography>
                        //     </MUICardContent>
                        //     <Divider light /> 
                        
                        //     </MUICard>
                        // ))}