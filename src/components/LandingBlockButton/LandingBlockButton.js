import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({ 
    container: {
        padding: '15px 0px',
        backgroundColor: '#ffffff',
    },   
    paper: {           
        fontSize: '18px',
    },
});

class LandingBlockButton extends React.Component {

    render() {
        const {classes} = this.props;  
        return (
         
            <Grid className={classes.container} item xs={12} container justify="center">
                <Grid className={classes.paper} item xs={6} container justify="center" >
                <Button variant="contained" color="primary" className={classes.button}>
                    {this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.mainText.text}
                </Button>
                </Grid>
            </Grid>           
         
            
        )
    }
}

LandingBlockButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        landingPage: state.landingPage, 
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockButton));