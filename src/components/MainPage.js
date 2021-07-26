import Cards from './card';
import AppBar from './AppBar';
import  Tab  from './Tabs';
import React, { Component }from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import State from './State';
import Footer from './Footer';

class MainPage extends Component {

    render() {
        return (
            <Router>
                <div style={{overflow:'visible', height:'100%',paddingBootom:'6rem'}}>
                    <AppBar />
                    <Tab />
                    <Switch>
                        <Route exact path="/">
                            <Cards />
                        </Route>
                        <Route name='state' path="/:stateName"
                            render={(props) =>
                            <State {...props} data={props.match.params.data} />
                            } />
                    </Switch>
                    <Footer /> 
                </div>
            </Router>
        )
    }
}

// const mapStateToProps = (state) => ({
//     loading: state.loading,
//     states: state.data,
// });
// const mapDispatchToProps = (dispatch) => ({
    
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(withStyles(styles, {withTheme: true})(MainPage));
export default MainPage;
