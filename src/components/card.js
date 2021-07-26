import React, { Component }from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import MUICard from "@material-ui/core/Card";
import MUICardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { handlerClicked }from "../action/action";
import Chart from './Chart';
import State from './State';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
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
    link:{
        color:'lightblue',
    }
});

class card extends Component {

    handleFetchEmployeeBySaga = () => {
        this.props.startFetchBySaga();
    };

    handlePageChange(){
        return(
            <State />
        )
    }; 
    
    LoadingSpinner = ({classes}) => (
        <div className = {classes.spinnerRoot}>
            <CircularProgress color = "secondary" />
        </div>
    );
    
    componentDidMount(){
        this.props.startFetchBySaga();
    }

    render(){
        const {loading, classes} = this.props;
        const { states } = this.props;
        //console.log("Status_State",loading,states);
        var stateArr = Object.keys(states);
        stateArr = stateArr.slice(1);
        var count = stateArr.length;
        let DistrictArr = [];
        let stateCodeArr = [];
        let active = [];
        let recovered = [];
        let confirmed = [];

        
        for(var i=1;i<=count;i++){
            var name = Object.keys(states)[i];
            //console.log("State_Name",name);
        
            var District = states.[name].districtData;
            //console.log("District_name",District);

            if( District !== undefined){
                DistrictArr.push(District);

            }

            var stateCode = states.[name].statecode;
            //console.log("stateCode", stateCode);
            if( stateCode !== undefined){
                stateCodeArr.push(stateCode)
            }
        }
        console.log(DistrictArr);

        for(var i = 1;i<=DistrictArr.length;i++){
            var cnf = 0;
            let r = 0;
            let a = 0;
            let c = Object.keys(DistrictArr[i-1]);
            let data =  Object.keys(states)[i];
            console.log("data",data);
            console.log("VAlue",c);
            for(var j = 0;j<c.length;j++){
                cnf += states.[data].districtData.[c[j]].confirmed;
                r += states.[data].districtData.[c[j]].recovered;
                a += states.[data].districtData.[c[j]].active;
            }
                confirmed.push(cnf);
                recovered.push(r);
                active.push(a);
                console.log(confirmed,active,recovered);
        }
        console.log("stateArr",stateArr);
        return(
            <div className="scrollbar scrollbar-primary">
            <div className={classes.root}>
                {loading ? (
                    <this.LoadingSpinner classes = {classes}></this.LoadingSpinner>
                ) : (
                    ""
                )}
                
                <div className= {classes.c }>
                    {stateArr.map((state, i) => (
                        <MUICard className = {classes.card} styles={{boxShadow:'0.1rem',padding: 0}}>
                            <MUICardContent key = {i} className = {classes.override} >
                                <Typography className={classes.heading}>{state}</Typography>
                            </MUICardContent>
                            <Divider light /> 
                            <Chart id={i} confirmed={confirmed[i]} active = {active[i]} recovered = {recovered[i]} /> 
                            <Link className = {classes.link} to= {{pathname : `/${state}`}}> More Details</Link>
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
)(withStyles(styles, {withTheme: true})(card));
